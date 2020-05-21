#!/usr/bin/env sh

set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/INFINITE-TECHNOLOGY/website.git master:gh-pages
cd -