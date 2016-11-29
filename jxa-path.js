export function resolve (path) {
  return $(path).stringByStandardizingPath.js
}

export function dirname (path) {
  return $(path).stringByDeletingLastPathComponent.js
}

export function join (path) {
  return $.NSString.pathWithComponents(Array.from(arguments)).js
}

export var sep = '/'
