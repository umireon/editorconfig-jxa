/* global $ */

function readFileSync (file, encoding) {
  var error = $()
  var nsstr = $.NSString.stringWithContentsOfFileEncodingError(file, encoding, error)
  if (!error.isNil()) throw new Error(error.description.js)
  return nsstr.js
}

exports.readFileSync = readFileSync
