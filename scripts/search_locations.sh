#!/bin/sh

set -eu

SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd)"
LOCATIONS_FILE="$(cd -- "$SCRIPT_DIR/.." && pwd)/locations/locations.json"

if ! command -v jq >/dev/null 2>&1; then
    echo "Error: jq is not installed. Install it, for example, with: brew install jq" >&2
    exit 1
fi

if [ ! -f "$LOCATIONS_FILE" ]; then
    echo "Error: $LOCATIONS_FILE does not exist" >&2
    exit 1
fi

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <name>" >&2
    exit 1
fi

jq --arg query "$1" '
reduce (
  .[]
  | select(
      .name
      | values[]
      | tostring
      | ascii_downcase
      | contains($query | ascii_downcase)
    )
) as $location (
  {seen: {}, results: []};
  if .seen[$location.id] then
    .
  else
    .seen[$location.id] = true
    | .results += [$location]
  end
)
| .results
' "$LOCATIONS_FILE"
