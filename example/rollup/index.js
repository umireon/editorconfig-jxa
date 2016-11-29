import { parseSync } from 'editorconfig-jxa'
import * as chai from 'chai'

chai.assert.deepEqual(
  parseSync('../../test/fixture/test.js'),
  { indent_size: 4, tab_width: 4, indent_style: 'space' }
)
