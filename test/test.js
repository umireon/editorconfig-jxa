var editorconfig
if (process.browser) {
  editorconfig = require('../dist/editorconfig')
} else {
  editorconfig = require('../lib/editorconfig')
}

var test = require('tape')

var parseFromFiles = editorconfig.parseFromFiles
var parse = editorconfig.parse
var parseFromFilesSync = editorconfig.parseFromFilesSync
var parseSync = editorconfig.parseSync

var simple = { indent_style: 'space' }
var configs = [
  {
    name: '/.editorconfig',
    contents: 'root=true\n[*]\nindent_style=space'
  }
]

test('parseSync', function (t) {
  t.plan(1)
  t.deepEqual(
    parseSync('test/fixture/test.sh'),
    simple
  )
})

test('parse', function (t) {
  t.plan(1)
  parse('test/fixture/test.sh').then(function (config) {
    t.deepEqual(config, simple)
  })
})

test('parseFromFilesSync', function (t) {
  t.plan(1)
  t.deepEqual(parseFromFilesSync('test/fixture/test.sh', configs), simple)
})

test('parseFromFilesSync', function (t) {
  t.plan(1)
  parseFromFiles('test/fixture/test.sh', configs).then(function (config) {
    t.deepEqual(config, simple)
  })
})

var allFields = {
  charset: 'utf-8',
  eof_of_line: 'lf',
  indent_size: 4,
  indent_style: 'space',
  insert_final_newline: true,
  tab_width: 8,
  trim_trailing_whitespace: true
}

var subdir = {
  indent_style: 'space',
  indent_size: 4,
  tab_width: 4
}

test('all fields', function (t) {
  t.plan(1)
  t.deepEqual(parseSync('test/fixture/test.js'), allFields)
})

test('subdir', function (t) {
  t.plan(1)
  t.deepEqual(parseSync('test/fixture/subdir/test.sh'), subdir)
})

module.exports = undefined

if (setTimeout.run) setTimeout.run()
