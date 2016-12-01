#!/bin/bash

USER=umireon
NAME=editorconfig-jxa

INSTALL_DIR=${INSTALL_DIR-~/Library/Script\ Libraries}

if [[ $1 == "" ]]; then
  TAG=$(curl -fsIL https://github.com/$USER/$NAME/releases/latest -o /dev/null -w '%{url_effective}')
  TAG=${TAG##*/}
else
  TAG="$1"
fi

echo "installing $INSTALL_DIR/$NAME.scpt ..."
mkdir -p "$INSTALL_DIR"
curl -fL "https://github.com/$USER/$NAME/releases/download/$TAG/$NAME.scpt" -o "$INSTALL_DIR/$NAME.scpt"

echo "$NAME is installed"
echo "use this library with:"
echo "  Library('$NAME')"
