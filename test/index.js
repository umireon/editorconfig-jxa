var test = require('tape')

test('setTimeout', function (t) {
  setTimeout(function () {
    console.log(123)
    t.end()
  }, 50)
})

module.exports = undefined

if (setTimeout.run) setTimeout.run()
