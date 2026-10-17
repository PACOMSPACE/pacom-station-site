# PACOM Station 2.04 · public release

- Website: https://pacom.cc.cd/
- Release date: 2026-10-17
- Page program fingerprint: `0c12e5cb40129b87`
- index.html SHA-256: `26cd7a3f645d505e792939f21682db88d4e19361e169acf73c7a0c078b673510`

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
