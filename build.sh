#!/bin/bash
if ! command -v minify &> /dev/null; then
  echo "minify not found"
  echo "please install via: npm install -g minify"
  exit 1
fi

[ ! -d "build" ] && mkdir build

manifest=$(<src/manifest.json)
echo "${manifest//.js/.min.js}" > build/manifest.json

minify src/background.js > build/background.min.js

cd build
zip -r -FS NoYoutubeShortUI.zip *