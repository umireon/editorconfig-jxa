/* global $ */

function resolve (path) {
  return $.NSURL.fileURLWithPath(path).path.js
}

function dirname (path) {
  return $(path).stringByDeletingLastPathComponent.js
}

function join (path) {
  return $.NSString.pathWithComponents(Array.from(arguments)).js
}

exports.resolve = resolve
exports.dirname = dirname
exports.join = join
exports.sep = '/'
