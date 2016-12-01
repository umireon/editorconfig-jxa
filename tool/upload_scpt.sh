#!/bin/bash
# requires https://github.com/aktau/github-release

export NPM_CONFIG_PROGRESS=false
NAME=$(npm view . name)
VERSION=$(npm view "$NAME@${1-latest}" version)

REPOURL=$(git remote get-url origin | grep '^https://github.com') || {
  echo error: origin is not on github
  exit 1
}

export GITHUB_USER
GITHUB_USER=${REPOURL#https://*/}
GITHUB_USER=${GITHUB_USER%/*}

export GITHUB_REPO
GITHUB_REPO=${REPOURL#https://*/*/}
GITHUB_REPO=${GITHUB_REPO%.git}

if curl -fsI "https://github.com/$GITHUB_USER/$GITHUB_REPO/releases/download/v$VERSION/$NAME.scpt" >/dev/null; then
  echo error: "$NAME.scpt" already exists
  exit 1
fi

TARBALL=$(npm view "$NAME@$VERSION" dist.tarball)
MAIN=$(npm view "$NAME@$VERSION" main)

{
  echo "(function (exports) {"
  curl -fsSL "$TARBALL" | tar xOz "package/$MAIN"
  echo "})(this);"
} | osacompile -l JavaScript -o "$NAME.scpt"

github-release upload -t "v$VERSION" -n "$NAME.scpt" -f "$NAME.scpt"
