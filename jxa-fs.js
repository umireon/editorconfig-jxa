/*!
 * editorconfig-core-jxa v0.1.0
 * Copyright (c) 2016 Kaito Udagawa
 * Released under the MIT license
 */

export function readFileSync (file, encoding) {
  const error = $()
  const nsstr = $.NSString.stringWithContentsOfFileEncodingError(file, encoding, error)
  if (!error.isNil()) throw new Error(error.description.js)
  return nsstr.js
}
