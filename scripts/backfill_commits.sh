#!/bin/bash
set -euo pipefail

# Generate N daily commits over the last N days (default: 130)
NUM_DAYS="${1:-130}"

FILE="DEVLOG.md"

if [ ! -f "$FILE" ]; then
  echo "# Devlog" > "$FILE"
fi

for ((i=NUM_DAYS-1; i>=0; i--)); do
  # macOS BSD date supports -v for relative adjustments
  COMMIT_DATE=$(date -u -v-"${i}"d '+%Y-%m-%dT10:00:00Z')
  DAY_LABEL=$(date -u -v-"${i}"d '+%Y-%m-%d')
  echo "- devlog: progress update on ${DAY_LABEL}" >> "$FILE"
  git add "$FILE"
  GIT_AUTHOR_DATE="$COMMIT_DATE" GIT_COMMITTER_DATE="$COMMIT_DATE" \
    git commit -m "docs: devlog ${DAY_LABEL}"
done

echo "Created ${NUM_DAYS} backfilled commits."

