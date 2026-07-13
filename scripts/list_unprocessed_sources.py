#!/usr/bin/env python3
"""List source files that are not yet present in logs/ingest_log.md."""

from __future__ import annotations

from pathlib import Path


def main() -> int:
    root = Path(__file__).resolve().parents[1]
    sources_dir = root / "sources"
    ingest_log = root / "logs" / "ingest_log.md"

    if not sources_dir.exists():
        return 0

    log_text = ingest_log.read_text(encoding="utf-8") if ingest_log.exists() else ""
    source_files = sorted(
        p
        for p in sources_dir.iterdir()
        if p.is_file() and p.suffix.lower() == ".pptx" and not p.name.startswith(".")
    )

    for source_path in source_files:
        rel = source_path.relative_to(root).as_posix()
        marker = f"`{rel}`"
        if marker not in log_text:
            print(rel)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
