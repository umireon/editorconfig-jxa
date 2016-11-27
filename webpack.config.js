const webpack = require('webpack')
module.exports = {
  entry: {
    "editorconfig": "editorconfig",
    "editorconfig.min": "editorconfig",
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js',
    library: 'editorconfig'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'string-replace-loader',
        query: { multiple: [
          { search: 'os.platform\\(\\)', replace: '{}', flags: 'g' },
          { search: 'process\\.platform', replace: '{}', flags: 'g'  },
        ] }
      },
      {
        test: /editorconfig\.js$/, loader: 'string-replace-loader',
        query: { multiple: [
          { search: "require('util')", replace: '{}' },
          { search: "require('os')", replace: '{}' },
          { search: "require('bluebird')", replace: '{}' },
          { search: "Promise.promisify(fs.readFile)", replace: '{}' },
          { search: 'module.exports.parse =', replace: 'undefined =' },
          { search: 'module.exports.parseFromFiles =', replace: 'undefined =' },
        ] }
      },
      {
        test: /fnmatch\.js$/, loader: 'string-replace-loader',
        query: { multiple: [
          { search: ';\\(function.*{', replace: '', flags: '' },
          { search: '\\}\\)\\( typeof[\\s\\S]*', replace: '', flags: '' },
          { search: '(module)', replace: '(true)' },
          { search: 'platform === "win32"', replace: 'false', flags: 'g' },
        ] }
      },
      { test: /fnmatch\.js$/, loader: 'imports-loader', query: "require=>false" },
      {
        test: /ini\.js$/, loader: 'string-replace-loader',
        query: { search: "module.exports.parse =", replace: 'undefined =' },
      },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      test: /\.min\.js$/
    })
  ],
  resolve: {
    alias: {
      fs: __dirname + '/jxa-fs.js',
      path: __dirname + '/jxa-path.js',
    },
  },
}
