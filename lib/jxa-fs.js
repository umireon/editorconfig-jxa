/* global $ */

function readFileSync (file, encoding) {
  const error = $()
  const nsstr = $.NSString.stringWithContentsOfFileEncodingError(file, encoding, error)
  if (!error.isNil()) throw new Error(error.description.js)
  return nsstr.js
}

exports.readFileSync = readFileSync
