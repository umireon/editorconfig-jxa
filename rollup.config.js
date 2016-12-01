import alias from 'rollup-plugin-alias'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import nodeResolve from 'rollup-plugin-node-resolve'

import { join } from 'path'

export default {
  entry: 'lib/editorconfig.js',
  dest: 'dist/editorconfig.js',
  format: 'cjs',
  moduleName: 'editorconfig',
  banner: `/*! editorconfig-jxa v${require('./package.json').version} */`,
  footer: [
    `/*!`,
    ` * Copyright (c) 2016 ${require('./package.json').author}`,
    ` * Released under the ${require('./package.json').license} license`,
    ` *`,
    ` * editorconfig-core-js ${require('editorconfig/package.json').version}: ${require('editorconfig/package.json').author} (${require('editorconfig/package.json').license.type})`,
    ` * minimatch ${require('minimatch/package.json').version}: ${require('minimatch/package.json').author} (${require('minimatch/package.json').license})`,
    ` */`
  ].join('\n'),
  plugins: [
    alias({
      fs: join(__dirname, '/lib/jxa-fs'),
      path: join(__dirname, '/lib/jxa-path')
    }),
    nodeResolve(),
    commonjs(),
    json()
  ],
  exports: 'named'
}
