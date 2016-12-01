/* global $ */

function resolve (path) {
  return $(path).stringByStandardizingPath.js
}

function dirname (path) {
  return $(path).stringByDeletingLastPathComponent.js
}

function join (path) {
  return $.NSString.pathWithComponents(Array.from(arguments)).js
}

var sep = '/'

exports.resolve = resolve
exports.dirname = dirname
exports.join = join
exports.sep = sep
