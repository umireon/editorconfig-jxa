const webpack = require('webpack')
const path = require('path')
module.exports = {
  entry: './test.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      setTimeout: path.join(__dirname, '/jxa-timeout/setTimeout'),
      clearTimeout: path.join(__dirname, '/jxa-timeout/clearTimeout'),
      setInterval: path.join(__dirname, '/jxa-timeout/setInterval'),
      clearInterval: path.join(__dirname, '/jxa-timeout/clearInterval')
    })
  ],
  node: {
    fs: 'empty'
  }
}
