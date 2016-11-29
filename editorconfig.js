import * as fs from './jxa-fs'
import * as path from './jxa-path'
import minimatch from 'minimatch'
import iniparser from 'editorconfig/lib/ini'
import Version from 'editorconfig/lib/version'
import { version as pkgVersion } from 'editorconfig/package.json'

var knownProps = {
  end_of_line: true,
  indent_style: true,
  indent_size: true,
  insert_final_newline: true,
  trim_trailing_whitespace: true,
  charset: true
}

function fnmatch (filepath, glob) {
  var matchOptions = {matchBase: true, dot: true, noext: true}
  glob = glob.replace(/\*\*/g, '{*,**/**/**}')
  return minimatch(filepath, glob, matchOptions)
}

function getConfigFileNames (filepath, options) {
  var paths = []
  do {
    filepath = path.dirname(filepath)
    paths.push(path.join(filepath, options.config))
  } while (filepath.length >= options.root.length && filepath !== options.root)
  return paths
}

function processMatches (matches, version) {
  // Set indent_size to "tab" if indent_size is unspecified and
  // indent_style is set to "tab".
  if ('indent_style' in matches && matches.indent_style === 'tab' &&
    !('indent_size' in matches) && version.gte(new Version(0, 10))) {
    matches.indent_size = 'tab'
  }

  // Set tab_width to indent_size if indent_size is specified and
  // tab_width is unspecified
  if ('indent_size' in matches && !('tab_width' in matches) &&
  matches.indent_size !== 'tab') {
    matches.tab_width = matches.indent_size
  }

  // Set indent_size to tab_width if indent_size is "tab"
  if ('indent_size' in matches && 'tab_width' in matches &&
  matches.indent_size === 'tab') {
    matches.indent_size = matches.tab_width
  }

  return matches
}

function processOptions (options, filepath) {
  /* global pkg */
  options = options || {}
  return {
    config: options.config || '.editorconfig',
    version: new Version(options.version || pkgVersion),
    root: path.resolve(options.root || '/')
  }
}

function buildFullGlob (pathPrefix, glob) {
  switch (glob.indexOf('/')) {
    case -1: glob = '**/' + glob; break
    case 0: glob = glob.substring(1); break
  }
  return path.join(pathPrefix, glob)
}

function extendProps (props, options) {
  for (var key in options) {
    var value = options[key]
    key = key.toLowerCase()
    if (knownProps[key]) {
      value = value.toLowerCase()
    }
    try {
      value = JSON.parse(value)
    } catch (e) {}
    if (typeof value === 'undefined' || value === null) {
      // null and undefined are values specific to JSON (no special meaning
      // in editorconfig) & should just be returned as regular strings.
      value = String(value)
    }
    props[key] = value
  }
  return props
}

function parseFromFilesSyncImpl (filepath, files, options) {
  var configs = getConfigsForFilesSync(files)
  configs.reverse()
  var matches = {}
  configs.forEach(function (config) {
    var pathPrefix = path.dirname(config.name)
    config.contents.forEach(function (section) {
      var glob = section[0]
      var options = section[1]
      if (!glob) return
      var fullGlob = buildFullGlob(pathPrefix, glob)
      if (!fnmatch(filepath, fullGlob)) return
      matches = extendProps(matches, options)
    })
  })
  return processMatches(matches, options.version)
}

function getConfigsForFilesSync (files) {
  var configs = []
  for (var i in files) {
    var file = files[i]
    var contents = iniparser.parseString(file.contents)
    configs.push({
      name: file.name,
      contents: contents
    })
    if ((contents[0][1].root || '').toLowerCase() === 'true') {
      break
    }
  };
  return configs
}

function readConfigFilesSync (filepaths) {
  var files = []
  var file
  filepaths.forEach(function (filepath) {
    try {
      file = fs.readFileSync(filepath, 'utf8')
    } catch (e) {
      file = ''
    }
    files.push({name: filepath, contents: file})
  })
  return files
}

export function parseFromFilesSync (filepath, files, options) {
  filepath = path.resolve(filepath)
  options = processOptions(options, filepath)
  return parseFromFilesSyncImpl(filepath, files, options)
}

export function parseSync (filepath, options) {
  filepath = path.resolve(filepath)
  options = processOptions(options, filepath)
  var filepaths = getConfigFileNames(filepath, options)
  var files = readConfigFilesSync(filepaths)
  return parseFromFilesSyncImpl(filepath, files, options)
}

export function parseFromFiles (filepath, files, options) {
  return Promise.resolve(parseFromFilesSync(filepath, files, options))
}

export function parse (filepath, options) {
  return Promise.resolve(parseSync(filepath, options))
}
