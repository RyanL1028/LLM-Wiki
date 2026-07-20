#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
LIST_SCRIPT="$ROOT_DIR/scripts/list_unprocessed_sources.py"
PENDING_FILE="$ROOT_DIR/logs/pending_ingest.md"

mkdir -p "$ROOT_DIR/logs"

if ! command -v python3 >/dev/null 2>&1; then
  exit 0
fi

UNPROCESSED=()
while IFS= read -r line; do
  UNPROCESSED+=("$line")
done < <(python3 "$LIST_SCRIPT")

if [ "${#UNPROCESSED[@]}" -eq 0 ]; then
  rm -f "$PENDING_FILE"
  exit 0
fi

{
  echo "# Pending Ingest Queue"
  echo
  echo "Run this in chat:"
  echo
  echo "- ingest all unprocessed sources"
  echo
  echo "Detected unprocessed files:"
  for src in "${UNPROCESSED[@]}"; do
    echo "- \`$src\`"
  done
} >"$PENDING_FILE"

exit 0
