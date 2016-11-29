import alias from 'rollup-plugin-alias'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

import { join } from 'path'

import pkg from 'editorconfig/package.json'

export default {
  entry: 'editorconfig.js',
  moduleName: 'editorconfig',
  plugins: [
    alias({
      fs: join(__dirname, '/jxa-fs')
    }),
    replace({
      include: require.resolve('minimatch'),
      'path = require': '',
      'path\\.sep': '/'
    }),
    replace({
      include: 'editorconfig.js',
      'pkg.version': JSON.stringify(pkg.version)
    }),
    nodeResolve(),
    commonjs()
  ]
}
