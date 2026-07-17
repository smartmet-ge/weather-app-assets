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

jq 'length' "$LOCATIONS_FILE"
