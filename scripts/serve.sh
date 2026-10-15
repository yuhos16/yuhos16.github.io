#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
export BUNDLE_PATH="${BUNDLE_PATH:-$PWD/.local/bundle}"
bundle exec jekyll serve --source docs --config docs/_config.yml --destination .local/site --livereload "$@"
