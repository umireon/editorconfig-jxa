var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: path.join(__dirname, 'test.js'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'test.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.browser': true
    }),
    new webpack.ProvidePlugin({
      setTimeout: path.join(__dirname, 'jxa-timeout/setTimeout'),
      clearTimeout: path.join(__dirname, 'jxa-timeout/clearTimeout'),
      setInterval: path.join(__dirname, 'jxa-timeout/setInterval'),
      clearInterval: path.join(__dirname, 'jxa-timeout/clearInterval')
    })
  ],
  node: {
    fs: 'empty'
  }
}
