# Root website deployment

Canonical repository: `jiayuchen-math/jiayuchen-math.github.io`.
Canonical website: <https://jiayuchen-math.github.io/>.

The existing content generators retain their original source paths and content
protection tests. `node resources/build-site.mjs` assembles the deployment-only
`_site/` directory. It updates internal root-relative links, same-site absolute
links, search indexes, frontend script paths and GitHub contribution links.
It does not replace other websites' `/en/` language paths.

Every public file is also emitted under `_site/en/`, preserving old HTML,
query strings, anchors, PDFs, source downloads, images and fonts. Compatibility
HTML remains fully readable without JavaScript; its navigation and canonical
link point to the new root site. Binary downloads are unchanged.

Deploy with the **Deploy root website** GitHub Actions workflow, not the old
branch-based Jekyll publisher. It builds the content, runs the original portal
acceptance tests, builds the root artifact and checks every old-file alias and
all root-relative HTML links before uploading and deploying. Source files,
data IDs, note bodies and mathematical content remain in their original places.

Local checks:

```text
node resources/build.mjs
node resources/test-portal.mjs
node resources/build-site.mjs
node resources/test-site-migration.mjs
```

To preview deployment output, serve `_site/` as the web root. The existing
`resources/preview.mjs` is for the authored `/en/` version, not the root artifact.

Rollback: restore the pre-migration commit
`316fc833f93c65799f357d298d0ce4037a9b93e8`, rename the repository to `en`, and
restore Pages publishing from `main` / root. Renaming a repository alone does
not redirect the old GitHub Pages website.
