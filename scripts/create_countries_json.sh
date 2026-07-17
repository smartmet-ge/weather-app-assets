#!/bin/sh

set -eu

TMP_DIR=/tmp/overturemaps
SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd)"
OUTPUT_DIR="$(cd -- "$SCRIPT_DIR/.." && pwd)/locations"
RAW_FILE="$TMP_DIR/countries-raw.json"
LANGUAGES="ka,en"

if ! command -v jq >/dev/null 2>&1; then
    echo "Error: jq is not installed. Install it, for example, with: brew install jq" >&2
    exit 1
fi

if ! command -v overturemaps >/dev/null 2>&1; then
    echo "Error: overturemaps is not installed. Install it, for example, with: brew install overturemaps" >&2
    exit 1
fi

if ! command -v duckdb >/dev/null 2>&1; then
    echo "Error: duckdb is not installed. Install it, for example, with: brew install duckdb" >&2
    exit 1
fi

mkdir -p "$TMP_DIR" "$OUTPUT_DIR"
rm -f "$RAW_FILE"

RELEASE="$(overturemaps releases latest)"
PARQUET_URL="s3://overturemaps-us-west-2/release/$RELEASE/theme=divisions/type=division/*"

duckdb -c "
INSTALL httpfs;
LOAD httpfs;
INSTALL spatial;
LOAD spatial;
SET s3_region = 'us-west-2';

COPY (
    SELECT
        id,
        names,
        ST_X(geometry) AS longitude,
        ST_Y(geometry) AS latitude,
        country
    FROM read_parquet('$PARQUET_URL', hive_partitioning = true)
    WHERE subtype = 'country'
) TO '$RAW_FILE' (FORMAT JSON, ARRAY true);
"

jq --arg languages "$LANGUAGES" '
($languages | split(",") | map(gsub("^\\s+|\\s+$"; ""))) as $allowed_languages
|
def localized_name($names):
  { primary: $names.primary }
  + (
    if $names.common then
      ($names.common
        | to_entries
        | map(select(.key as $language | ($allowed_languages | index($language)) != null))
        | from_entries)
    else
      {}
    end
  );

map({
  id,
  name: localized_name(.names),
  country,
})
| sort_by(.country)
' "$RAW_FILE" > "$OUTPUT_DIR/countries.json"

rm -f "$RAW_FILE"

echo "Created $OUTPUT_DIR/countries.json"
