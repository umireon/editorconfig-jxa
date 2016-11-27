const fs = {};

fs.readFileSync = function (file, encoding) {
  const error = $()
  const nsstr = $.NSString.stringWithContentsOfFileEncodingError(file, encoding, error)
  if (!error.isNil()) throw new Error(error.description.js)
  return nsstr.js
}

module.exports = fs
