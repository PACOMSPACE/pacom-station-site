# PACOM Station 2.31 · public release

- Website: https://pacom.cc.cd/
- Release date: 2026-10-26
- Page program fingerprint: `bd978296aea542d1`
- index.html SHA-256: `b4625f4aff1f94b427e0a9f5fa7029ac5eb78894f00f308dbe6a47349c100fe3`

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
