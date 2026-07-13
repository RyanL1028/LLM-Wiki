#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LIST_SCRIPT="$ROOT_DIR/scripts/list_unprocessed_sources.py"

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required but not installed." >&2
  exit 1
fi

UNPROCESSED=()
while IFS= read -r line; do
  UNPROCESSED+=("$line")
done < <(python3 "$LIST_SCRIPT")

if [ "${#UNPROCESSED[@]}" -eq 0 ]; then
  echo "No unprocessed source files found."
  exit 0
fi

echo "Unprocessed source files:"
for src in "${UNPROCESSED[@]}"; do
  echo " - $src"
done
echo
echo "Send this chat command:"
echo "ingest all unprocessed sources"
