var test = require('tape')
var editorconfig = process.browser ? require('..') : require('../index.js')

test('parseSync', function (t) {
  t.plan(1)

  t.deepEqual(
    editorconfig.parseSync('test/fixture/test.sh'),
    {}
  )

  t.end()
})

module.exports = undefined

if (setTimeout.run) setTimeout.run()
