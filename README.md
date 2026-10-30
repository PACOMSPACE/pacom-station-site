# PACOM Station 2.60 · public release

- Website: https://pacom.cc.cd/
- Release date: 2026-10-30
- Page program fingerprint: `96f86083b5647e9b`
- index.html SHA-256: `7fa233d530b4f28dad192b85e0f6e580b7fe5f7aa28c8da235ebfa6095a103f5`

This repository contains the public static build for GitHub Pages: `index.html`,
runtime files in `fonts/`, `media/` and `vendor/`, and this generated release note.
The engineering source, tests, private design specifications, workspace backups
and `release/` are not published here. Browser JavaScript is necessarily part of
the public HTML; this repository is not the editable engineering source.

Changes are made in the separate PACOM Station source project. Its
`scripts/sync_site_release.py` builds the active source, verifies a second build
byte-for-byte, validates this repository's origin, and synchronizes public files.
The version and date above come from the first `AU_RELEASES` entry. Do not edit
this generated note by hand. Existing `CNAME`, `.nojekyll`, Pages configuration
and unrelated files are preserved. The script never stages, commits or pushes.
