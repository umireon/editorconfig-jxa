var test = require('tape')

test('setTimeout', function (t) {
  setTimeout(function () {
    console.log(123)
    t.end()
  }, 50)
})

if (setTimeout.run) setTimeout.run()

