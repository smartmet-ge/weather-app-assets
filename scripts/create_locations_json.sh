#!/bin/sh

TMP_DIR=/tmp/overturemaps
SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd)"
OUTPUT_DIR="$(cd -- "$SCRIPT_DIR/.." && pwd)/locations"
BBOX="40,41,47,44"
COUNTRIES="GE,RU,TR,AR,AZ"
LANGUAGES="ka,en"
TIMEZONES='{
  "GE": "Asia/Tbilisi",
  "RU": "Europe/Moscow",
  "TR": "Europe/Istanbul",
  "AR": "Asia/Yerevan",
  "AZ": "Asia/Baku"
}'

if ! command -v jq >/dev/null 2>&1; then
    echo "Error: jq is not installed. Install it, for example, with: brew install jq" >&2
    exit 1
fi

if ! command -v overturemaps >/dev/null 2>&1; then
    echo "Error: overturemaps is not installed. Install it, for example, with: brew install overturemaps" >&2
    exit 1
fi

mkdir -p "$TMP_DIR" "$OUTPUT_DIR"
overturemaps download --bbox=$BBOX --type=division -f geojson -o $TMP_DIR/all.geojson

jq --arg countries "$COUNTRIES" '
($countries | split(",") | map(gsub("^\\s+|\\s+$"; ""))) as $allowed_countries
| {
  type: "FeatureCollection",
  features: [
    .features[]
    | .properties.country as $country
    | select(
        ($allowed_countries | index($country)) != null
        and (
          .properties.subtype == "locality"
          or .properties.subtype == "localadmin"
          or .properties.subtype == "municipality"
          or .properties.subtype == "county"
        )
      )
  ]
}' "$TMP_DIR/all.geojson" > "$TMP_DIR/filtered.geojson"

jq --argjson timezones "$TIMEZONES" --arg languages "$LANGUAGES" --slurpfile divisions "$TMP_DIR/all.geojson" '
($languages | split(",") | map(gsub("^\\s+|\\s+$"; ""))) as $allowed_languages
|
def localized_name($names):
  { primary: $names.primary }
  + (
    if $names.common then
      ($names.common
        | map(select(.[0] as $language | ($allowed_languages | index($language)) != null))
        | map({ key: .[0], value: .[1] })
        | from_entries)
    else
      {}
    end
  );

def round_coord:
  (. * 10000 | round) / 10000;

($divisions[0].features
  | map(
      select(.properties.subtype == "region")
      | { key: .id, value: localized_name(.properties.names) }
    )
  | from_entries
) as $regions
|
[
  .features[]
  | {
      id: .id,
      name: localized_name(.properties.names),
      longitude: (.geometry.coordinates[0] | round_coord),
      latitude: (.geometry.coordinates[1] | round_coord),
      region: (
        .properties.hierarchies[0][]
        | select(.subtype == "region")
        | ($regions[.division_id] // { primary: .name })
      ),
      country: .properties.country,
      population: .properties.population,
      timezone: (
        $timezones[.properties.country]
        // error("Timezone missing for country: \(.properties.country)")
      )
    }
]
' "$TMP_DIR/filtered.geojson" > "$OUTPUT_DIR/locations.json"

rm -f $TMP_DIR/*.json

echo "Created $OUTPUT_DIR/locations.json"
