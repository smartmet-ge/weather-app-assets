#!/bin/sh

set -eu

SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd)"
OUTPUT_DIR="$(cd -- "$SCRIPT_DIR/.." && pwd)/locations"
GEOJSON="$OUTPUT_DIR/GEO_Settelment.geojson"
TIMEZONE="Asia/Tbilisi"

if ! command -v jq >/dev/null 2>&1; then
		echo "Error: jq is not installed. Install it, for example, with: brew install jq" >&2
		exit 1
fi

if [ ! -f "$GEOJSON" ]; then
		echo "Error: $GEOJSON does not exist" >&2
		exit 1
fi

jq --arg timezone "$TIMEZONE" '
def localized_name($primary; $en):
	{ primary: $primary }
	+ (if ($en != null and $en != "" and $en != "N_A") then { en: $en } else {} end);

def localized_region($primary; $en):
	{ primary: $primary }
	+ (if ($en != null and $en != "" and $en != "N_A") then { en: $en } else {} end);

def clean_population:
	if . == null or . == 0 then null else . end;

def round_coord:
	(. * 10000 | round) / 10000;

[.features[]
 | {
		 id: .properties.HCODE,
		 name: localized_name(.properties.NAMN_KA; .properties.NAMA_EN),
		 longitude: (.geometry.coordinates[0] | round_coord),
		 latitude: (.geometry.coordinates[1] | round_coord),
		 region: localized_region(.properties.NAMN1_REGI; .properties.NAMA1_REGI),
		 country: .properties.ICC,
		 population: (.properties.CENSUS_201 | clean_population),
		 timezone: $timezone
	 }
]
| reduce .[] as $location (
		{ seen: {}, results: [] };
		if .seen[$location.id] then
			.
		else
			.seen[$location.id] = true
			| .results += [$location]
		end
	)
| .results
' "$GEOJSON" > "$OUTPUT_DIR/locations.json"

echo "Created $OUTPUT_DIR/locations.json"