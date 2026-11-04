# Deployment

Public demo: https://alsc001.github.io/oceanscope-demo-v2/

The release contains only selected static application assets and derived data. Source revision and SHA-256 checksums are in release-manifest.json. No raw VDB, training weights, private development history or machine-specific configuration is included.

Run `node scripts/verify-static-demo.mjs .` to check the release. Publish using Actions → Publish OceanScope demo → Run workflow, or push a `demo-v*` tag. Each release is validated before deployment. Use the previous release tag when dispatching the workflow to roll back. Build a new complete snapshot for updates; preserve the release manifest and check for stale files before committing.

Scope: 96 native height frames and existing protocol results; selected 3D frames1001,1049,1096. Source convention units have not been independently calibrated. The application does not train or reconstruct new scenes.
