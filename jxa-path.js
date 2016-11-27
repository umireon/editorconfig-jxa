module.exports = {
  resolve: function (path) {
    return $(path).stringByStandardizingPath.js
  },
  dirname: function (path) {
    return $(path).stringByDeletingLastPathComponent.js
  },
  join: function () {
    return $.NSString.pathWithComponents(Array.from(arguments)).js
  }
}
