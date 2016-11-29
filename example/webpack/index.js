var editorconfig = require('editorconfig-jxa')
var assert = require('assert')

assert.deepEqual(
  editorconfig.parseSync('../../test/fixture/test.js'),
  { indent_size: 4, tab_width: 4, indent_style: 'space' }
)
