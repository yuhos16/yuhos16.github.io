# Website maintenance

- Page content: `docs/_pages/about.md` and `docs/_pages/includes/`.
- Site settings and CV link: `docs/_config.yml`.
- Layouts and shared HTML: `docs/_layouts/` and `docs/_includes/`.
- Styles: `docs/assets/css/main.scss` and `docs/_sass/`.
- Images, including the original portrait: `docs/images/`.

The portrait uses a 3:4 viewport anchored at its top-left corner, cropping the right and bottom edges. The original JPEG is unchanged.

GitHub Pages publishes the `main` branch's `/docs` folder. Public URLs stay at the website root.

For local preview, install the gems with `BUNDLE_PATH=.local/bundle bundle install`, then run `bash scripts/serve.sh`.

Personal notes, generated documents, and caches are kept in the ignored `.local/` folder. They are not published.

Use `update` as the commit message for future changes.
