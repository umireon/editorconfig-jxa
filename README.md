# editorconfig-jxa

[![Build Status](https://travis-ci.org/umireon/editorconfig-jxa.svg?branch=master)](https://travis-ci.org/umireon/editorconfig-jxa)

EditorConfig core library for JXA (JavaScript for Automation) on macOS

## Installation

```
npm install editorconfig-jxa
```

## Usage

Implements [editorconfig-core-jxa API](https://github.com/editorconfig/editorconfig-core-js/blob/master/README.md#usage)

## Example

### via Webpack or Browserify

```javascript
var editorconfig = require('editorconfig-jxa')
editorconfig.parseSync('~/file.js')
```

### via Rollup

```javascript
import { parse } from 'editorconfig-jxa'
parseSync('~/file.js')
```

### via [JXA native `Library`](https://developer.apple.com/library/content/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html#//apple_ref/doc/uid/TP40014508-CH109-SW14)

Place `editorconfig.scpt` into an OSA library path (e.g. `~/Library/Script Libraries`).

```javascript
var editorconfig = Library('editorconfig')
parseSync('~/file.js')
```

