# editorconfig-jxa

[![NPM](https://nodei.co/npm/editorconfig-jxa.png)](https://nodei.co/npm/editorconfig-jxa/)

[![Build Status](https://travis-ci.org/umireon/editorconfig-jxa.svg?branch=master)](https://travis-ci.org/umireon/editorconfig-jxa)
[![npm version](https://badge.fury.io/js/editorconfig-jxa.svg)](https://badge.fury.io/js/editorconfig-jxa)
[![devDependencies Status](https://david-dm.org/umireon/editorconfig-jxa/dev-status.svg)](https://david-dm.org/umireon/editorconfig-jxa?type=dev)

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Gratipay User](https://img.shields.io/gratipay/user/umireon.svg)]()

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

