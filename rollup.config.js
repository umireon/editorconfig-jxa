import alias from 'rollup-plugin-alias'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import nodeResolve from 'rollup-plugin-node-resolve'

import { join } from 'path'

function license (options = {}) {
  var pkg = require('./package.json')

  function bundled (name) {
    var p = require(join(name, 'package.json'))
    return ` * ${p.name} ${p.version}: ${p.author} (${p.license.type || p.license})`
  }

  return {
    banner: () => `/*! ${pkg.name} v${pkg.version} */`,
    footer: () => {
      return [
        `/*!`,
        ` * Copyright (c) 2016 ${pkg.author}`,
        ` * Released under the ${pkg.license} license`,
        ` *`,
        bundled('editorconfig'),
        bundled('minimatch'),
        ` */`
      ].join('\n')
    }
  }
}

export default {
  entry: 'lib/editorconfig.js',
  dest: 'dist/editorconfig.js',
  format: 'cjs',
  moduleName: 'editorconfig',
  plugins: [
    alias({
      fs: join(__dirname, '/lib/jxa-fs'),
      path: join(__dirname, '/lib/jxa-path')
    }),
    nodeResolve(),
    commonjs(),
    json(),
    license()
  ],
  exports: 'named'
}
