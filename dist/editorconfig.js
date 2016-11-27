var editorconfig =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

const fs = {};

fs.readFileSync = function (file, encoding) {
  const error = $()
  const nsstr = $.NSString.stringWithContentsOfFileEncodingError(file, encoding, error)
  if (!error.isNil()) throw new Error(error.description.js)
  return nsstr.js
}

module.exports = fs


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = {
	"name": "editorconfig",
	"version": "0.13.2",
	"description": "EditorConfig File Locator and Interpreter for Node.js",
	"keywords": [
		"editorconfig",
		"core"
	],
	"main": "editorconfig.js",
	"bin": {
		"editorconfig": "bin/editorconfig"
	},
	"contributors": [
		"Hong Xu (topbug.net)",
		"Jed Mao (https://github.com/jedmao/)",
		"Trey Hunner (http://treyhunner.com)"
	],
	"directories": {
		"bin": "./bin",
		"lib": "./lib"
	},
	"scripts": {
		"pretest": "cmake .",
		"test": "npm run lint && ctest .",
		"test-verbose": "npm run lint && ctest -VV --output-on-failure .",
		"lint": "eclint check --indent_size ignore editorconfig.js README.md \"bin/**\" \"lib/**\""
	},
	"repository": {
		"type": "git",
		"url": "git://github.com/editorconfig/editorconfig-core-js.git"
	},
	"bugs": "https://github.com/editorconfig/editorconfig-core-js/issues",
	"author": "EditorConfig Team",
	"license": {
		"type": "MIT",
		"url": "http://editorconfig.mit-license.org/2012"
	},
	"dependencies": {
		"bluebird": "^3.0.5",
		"commander": "^2.9.0",
		"lru-cache": "^3.2.0",
		"sigmund": "^1.0.1"
	},
	"devDependencies": {
		"eclint": "^1.1.5",
		"mocha": "^2.3.4",
		"should": "^7.1.1"
	}
};

/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports) {

function Version(version) {
  var args = arguments;
  this.components = typeof version === "string" ?
    version.split(".").map(function(x){return parseInt(x, 10);}) :
    Object.keys(arguments).map(function(k){return args[k];});

  var len = this.components.length;
  this.major = len ? this.components[0] : 0;
  this.minor = len > 1 ? this.components[1] : 0;
  this.build = len > 2 ? this.components[2] : 0;
  this.revision = len > 3 ? this.components[3] : 0;

  if (typeof version !== "string") {
    return;
  }

  var ext = version.split("-");
  if (ext.length === 2) {
    this.configuration = ext[1];
  }
}

Version.prototype = {
  toString: function() {
    var version = this.components.join(".");
    if (typeof this.configuration !== "undefined") {
      version += "-" + this.configuration;
    }
    return version;
  },
  gte: function(other){
    if (this.major < other.major) {
      return false;
    }
    if (this.minor < other.minor) {
      return false;
    }
    if (this.build < other.build) {
      return false;
    }
    if (this.revision < other.revision) {
      return false;
    }
    return true;
  }
};

module.exports = Version;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var require;/*** IMPORTS FROM imports-loader ***/
var require = false;

// Based on minimatch.js by isaacs <https://npmjs.org/package/minimatch>



  if (true) module.exports = minimatch
  else exports.minimatch = minimatch

  if (!require) {
    require = function (id) {
      switch (id) {
        case "sigmund": return function sigmund (obj) {
            return JSON.stringify(obj)
          }
        case "path": return { basename: function (f) {
              f = f.split(/[\/\\]/)
              var e = f.pop()
              if (!e) e = f.pop()
              return e
            }}
        case "lru-cache": return function LRUCache () {
            // not quite an LRU, but still space-limited.
            var cache = {}
            var cnt = 0
            this.set = function (k, v) {
              cnt ++
              if (cnt >= 100) cache = {}
              cache[k] = v
            }
            this.get = function (k) { return cache[k] }
          }
      }
    }
  }

  minimatch.Minimatch = Minimatch

  var LRU = require("lru-cache")
    , cache = minimatch.cache = new LRU({max: 100})
    , GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
    , sigmund = require("sigmund")

  var path = require("path")
    // any single thing other than /
    // don't need to escape / when using new RegExp()
    , qmark = "[^/]"

    // * => any number of characters
    , star = qmark + "*?"

    // ** when dots are allowed.  Anything goes, except .. and .
    // not (^ or / followed by one or two dots followed by $ or /),
    // followed by anything, any number of times.
    , twoStarDot = "(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?"

    // not a ^ or / followed by a dot,
    // followed by anything, any number of times.
    , twoStarNoDot = "(?:(?!(?:\\\/|^)\\.).)*?"

    // characters that need to be escaped in RegExp.
    , reSpecials = charSet("().*{}+?[]^$\\!")

// "abc" -> { a:true, b:true, c:true }
  function charSet (s) {
    return s.split("").reduce(function (set, c) {
      set[c] = true
      return set
    }, {})
  }

// normalizes slashes.
  var slashSplit = /\/+/

  minimatch.monkeyPatch = monkeyPatch
  function monkeyPatch () {
    var desc = Object.getOwnPropertyDescriptor(String.prototype, "match")
    var orig = desc.value
    desc.value = function (p) {
      if (p instanceof Minimatch) return p.match(this)
      return orig.call(this, p)
    }
    Object.defineProperty(String.prototype, desc)
  }

  minimatch.filter = filter
  function filter (pattern, options) {
    options = options || {}
    return function (p, i, list) {
      return minimatch(p, pattern, options)
    }
  }

  function ext (a, b) {
    a = a || {}
    b = b || {}
    var t = {}
    Object.keys(b).forEach(function (k) {
      t[k] = b[k]
    })
    Object.keys(a).forEach(function (k) {
      t[k] = a[k]
    })
    return t
  }

  minimatch.defaults = function (def) {
    if (!def || !Object.keys(def).length) return minimatch

    var orig = minimatch

    var m = function minimatch (p, pattern, options) {
      return orig.minimatch(p, pattern, ext(def, options))
    }

    m.Minimatch = function Minimatch (pattern, options) {
      return new orig.Minimatch(pattern, ext(def, options))
    }

    return m
  }

  Minimatch.defaults = function (def) {
    if (!def || !Object.keys(def).length) return Minimatch
    return minimatch.defaults(def).Minimatch
  }


  function minimatch (p, pattern, options) {
    if (typeof pattern !== "string") {
      throw new TypeError("glob pattern string required")
    }

    if (!options) options = {}

        // shortcut: comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === "#") {
      return false
    }

    // "" only matches ""
    if (pattern.trim() === "") return p === ""

    return new Minimatch(pattern, options).match(p)
  }

  function Minimatch (pattern, options) {
    if (!(this instanceof Minimatch)) {
      return new Minimatch(pattern, options, cache)
    }

    if (typeof pattern !== "string") {
      throw new TypeError("glob pattern string required")
    }

    if (!options) options = {}

        // windows: need to use /, not \
        // On other platforms, \ is a valid (albeit bad) filename char.
    if (false) {
      pattern = pattern.split("\\").join("/")
    }

    // lru storage.
    // these things aren't particularly big, but walking down the string
    // and turning it into a regexp can get pretty costly.
    var cacheKey = pattern + "\n" + sigmund(options)
    var cached = minimatch.cache.get(cacheKey)
    if (cached) return cached
    minimatch.cache.set(cacheKey, this)

    this.options = options
    this.set = []
    this.pattern = pattern
    this.regexp = null
    this.negate = false
    this.comment = false
    this.empty = false

      // make the set of regexps etc.
    this.make()
  }

  Minimatch.prototype.make = make
  function make () {
    // don't do it more than once.
    if (this._made) return

    var pattern = this.pattern
    var options = this.options

      // empty patterns and comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === "#") {
      this.comment = true
      return
    }
    if (!pattern) {
      this.empty = true
      return
    }

    // step 1: figure out negation, etc.
    this.parseNegate()

      // step 2: expand braces
    var set = this.globSet = this.braceExpand()

    if (options.debug) console.error(this.pattern, set)

        // step 3: now we have a set, so turn each one into a series of path-portion
        // matching patterns.
        // These will be regexps, except in the case of "**", which is
        // set to the GLOBSTAR object for globstar behavior,
        // and will not contain any / characters
    set = this.globParts = set.map(function (s) {
        return s.split(slashSplit)
      })

    if (options.debug) console.error(this.pattern, set)

        // glob --> regexps
    set = set.map(function (s, si, set) {
      return s.map(this.parse, this)
    }, this)

    if (options.debug) console.error(this.pattern, set)

        // filter out everything that didn't compile properly.
    set = set.filter(function (s) {
      return -1 === s.indexOf(false)
    })

    if (options.debug) console.error(this.pattern, set)

    this.set = set
  }

  Minimatch.prototype.parseNegate = parseNegate
  function parseNegate () {
    var pattern = this.pattern
      , negate = false
      , options = this.options
      , negateOffset = 0

    if (options.nonegate) return

    for ( var i = 0, l = pattern.length
      ; i < l && pattern.charAt(i) === "!"
      ; i ++) {
      negate = !negate
      negateOffset ++
    }

    if (negateOffset) this.pattern = pattern.substr(negateOffset)
    this.negate = negate
  }

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
  minimatch.braceExpand = function (pattern, options) {
    return new Minimatch(pattern, options).braceExpand()
  }

  Minimatch.prototype.braceExpand = braceExpand
  function braceExpand (pattern, options) {
    options = options || this.options
    pattern = typeof pattern === "undefined"
        ? this.pattern : pattern

    if (typeof pattern === "undefined") {
      throw new Error("undefined pattern")
    }

    if (options.nobrace ||
      !pattern.match(/\{.*\}/)) {
      // shortcut. no need to expand.
      return [pattern]
    }

    var escaping = false

      // examples and comments refer to this crazy pattern:
      // a{b,c{d,e},{f,g}h}x{y,z}
      // expected:
      // abxy
      // abxz
      // acdxy
      // acdxz
      // acexy
      // acexz
      // afhxy
      // afhxz
      // aghxy
      // aghxz

      // everything before the first \{ is just a prefix.
      // So, we pluck that off, and work with the rest,
      // and then prepend it to everything we find.
    if (pattern.charAt(0) !== "{") {
      // console.error(pattern)
      var prefix = null
      for (var i = 0, l = pattern.length; i < l; i ++) {
        var c = pattern.charAt(i)
          // console.error(i, c)
        if (c === "\\") {
          escaping = !escaping
        } else if (c === "{" && !escaping) {
          prefix = pattern.substr(0, i)
          break
        }
      }

      // actually no sets, all { were escaped.
      if (prefix === null) {
        // console.error("no sets")
        return [pattern]
      }

      var tail = braceExpand(pattern.substr(i), options)
      return tail.map(function (t) {
        return prefix + t
      })
    }

    // now we have something like:
    // {b,c{d,e},{f,g}h}x{y,z}
    // walk through the set, expanding each part, until
    // the set ends.  then, we'll expand the suffix.
    // If the set only has a single member, then'll put the {} back

    // first, handle numeric sets, since they're easier
    var numset = pattern.match(/^\{(-?[0-9]+)\.\.(-?[0-9]+)\}/)
    if (numset) {
      // console.error("numset", numset[1], numset[2])
      var suf = braceExpand(pattern.substr(numset[0].length), options)
        , start = +numset[1]
        , end = +numset[2]
        , inc = start > end ? -1 : 1
        , set = []
      for (var i = start; i != (end + inc); i += inc) {
        // append all the suffixes
        for (var ii = 0, ll = suf.length; ii < ll; ii ++) {
          set.push(i + suf[ii])
        }
      }
      return set
    }

    // ok, walk through the set
    // We hope, somewhat optimistically, that there
    // will be a } at the end.
    // If the closing brace isn't found, then the pattern is
    // interpreted as braceExpand("\\" + pattern) so that
    // the leading \{ will be interpreted literally.
    var i = 1 // skip the \{
      , depth = 1
      , set = []
      , member = ""
      , sawEnd = false
      , escaping = false

    function addMember () {
      set.push(member)
      member = ""
    }

    // console.error("Entering for")
    FOR: for (i = 1, l = pattern.length; i < l; i ++) {
        var c = pattern.charAt(i)
          // console.error("", i, c)

        if (escaping) {
          escaping = false
          member += "\\" + c
        } else {
          switch (c) {
            case "\\":
              escaping = true
              continue

            case "{":
              depth ++
              member += "{"
              continue

            case "}":
              depth --
                // if this closes the actual set, then we're done
              if (depth === 0) {
                addMember()
                  // pluck off the close-brace
                i ++
                break FOR
              } else {
                member += c
                continue
              }

            case ",":
              if (depth === 1) {
                addMember()
              } else {
                member += c
              }
              continue

            default:
              member += c
              continue
          } // switch
        } // else
      } // for

    // now we've either finished the set, and the suffix is
    // pattern.substr(i), or we have *not* closed the set,
    // and need to escape the leading brace
    if (depth !== 0) {
      // console.error("didn't close", pattern)
      return braceExpand("\\" + pattern, options)
    }

    // x{y,z} -> ["xy", "xz"]
    // console.error("set", set)
    // console.error("suffix", pattern.substr(i))
    var suf = braceExpand(pattern.substr(i), options)
      // ["b", "c{d,e}","{f,g}h"] ->
      //   [["b"], ["cd", "ce"], ["fh", "gh"]]
    var addBraces = set.length === 1
      // console.error("set pre-expanded", set)
    set = set.map(function (p) {
      return braceExpand(p, options)
    })
      // console.error("set expanded", set)


      // [["b"], ["cd", "ce"], ["fh", "gh"]] ->
      //   ["b", "cd", "ce", "fh", "gh"]
    set = set.reduce(function (l, r) {
      return l.concat(r)
    })

    if (addBraces) {
      set = set.map(function (s) {
        return "{" + s + "}"
      })
    }

    // now attach the suffixes.
    var ret = []
    for (var i = 0, l = set.length; i < l; i ++) {
      for (var ii = 0, ll = suf.length; ii < ll; ii ++) {
        ret.push(set[i] + suf[ii])
      }
    }
    return ret
  }

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
  Minimatch.prototype.parse = parse
  var SUBPARSE = {}
  function parse (pattern, isSub) {
    var options = this.options

      // shortcuts
    if (!options.noglobstar && pattern === "**") return GLOBSTAR
    if (pattern === "") return ""

    var re = ""
      , hasMagic = !!options.nocase
      , escaping = false
      // ? => one single character
      , patternListStack = []
      , plType
      , stateChar
      , inClass = false
      , reClassStart = -1
      , classStart = -1
      // . and .. never match anything that doesn't start with .,
      // even when options.dot is set.
      , patternStart = pattern.charAt(0) === "." ? "" // anything
        // not (start or / followed by . or .. followed by / or end)
        : options.dot ? "(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))"
          : "(?!\\.)"

    function clearStateChar () {
      if (stateChar) {
        // we had some state-tracking character
        // that wasn't consumed by this pass.
        switch (stateChar) {
          case "*":
            re += star
            hasMagic = true
            break
          case "?":
            re += qmark
            hasMagic = true
            break
          default:
            re += "\\"+stateChar
            break
        }
        stateChar = false
      }
    }

    for ( var i = 0, len = pattern.length, c
      ; (i < len) && (c = pattern.charAt(i))
      ; i ++ ) {

      if (options.debug) {
        console.error("%s\t%s %s %j", pattern, i, re, c)
      }

      // skip over any that are escaped.
      if (escaping && reSpecials[c]) {
        re += "\\" + c
        escaping = false
        continue
      }

      SWITCH: switch (c) {
          case "/":
            // completely not allowed, even escaped.
            // Should already be path-split by now.
            return false

          case "\\":
            clearStateChar()
            escaping = true
            continue

          // the various stateChar values
          // for the "extglob" stuff.
          case "?":
          case "*":
          case "+":
          case "@":
          case "!":
            if (options.debug) {
              console.error("%s\t%s %s %j <-- stateChar", pattern, i, re, c)
            }

            // all of those are literals inside a class, except that
            // the glob [!a] means [^a] in regexp
            if (inClass) {
              if (c === "!" && i === classStart + 1) c = "^"
              re += c
              continue
            }

            // if we already have a stateChar, then it means
            // that there was something like ** or +? in there.
            // Handle the stateChar, then proceed with this one.
            clearStateChar()
            stateChar = c
              // if extglob is disabled, then +(asdf|foo) isn't a thing.
              // just clear the statechar *now*, rather than even diving into
              // the patternList stuff.
            if (options.noext) clearStateChar()
            continue

          case "(":
            if (inClass) {
              re += "("
              continue
            }

            if (!stateChar) {
              re += "\\("
              continue
            }

            plType = stateChar
            patternListStack.push({ type: plType
              , start: i - 1
              , reStart: re.length })
              // negation is (?:(?!js)[^/]*)
            re += stateChar === "!" ? "(?:(?!" : "(?:"
            stateChar = false
            continue

          case ")":
            if (inClass || !patternListStack.length) {
              re += "\\)"
              continue
            }

            hasMagic = true
            re += ")"
            plType = patternListStack.pop().type
              // negation is (?:(?!js)[^/]*)
              // The others are (?:<pattern>)<type>
            switch (plType) {
              case "!":
                re += "[^/]*?)"
                break
              case "?":
              case "+":
              case "*": re += plType
              case "@": break // the default anyway
            }
            continue

          case "|":
            if (inClass || !patternListStack.length || escaping) {
              re += "\\|"
              escaping = false
              continue
            }

            re += "|"
            continue

          // these are mostly the same in regexp and glob
          case "[":
            // swallow any state-tracking char before the [
            clearStateChar()

            if (inClass) {
              re += "\\" + c
              continue
            }

            inClass = true
            classStart = i
            reClassStart = re.length
            re += c
            continue

          case "]":
            //  a right bracket shall lose its special
            //  meaning and represent itself in
            //  a bracket expression if it occurs
            //  first in the list.  -- POSIX.2 2.8.3.2
            if (i === classStart + 1 || !inClass) {
              re += "\\" + c
              escaping = false
              continue
            }

            // finish up the class.
            hasMagic = true
            inClass = false
            re += c
            continue

          default:
            // swallow any state char that wasn't consumed
            clearStateChar()

            if (escaping) {
              // no need
              escaping = false
            } else if (reSpecials[c]
              && !(c === "^" && inClass)) {
              re += "\\"
            }

            re += c

        } // switch
    } // for


    // handle the case where we left a class open.
    // "[abc" is valid, equivalent to "\[abc"
    if (inClass) {
      // split where the last [ was, and escape it
      // this is a huge pita.  We now have to re-walk
      // the contents of the would-be class to re-translate
      // any characters that were passed through as-is
      var cs = pattern.substr(classStart + 1)
        , sp = this.parse(cs, SUBPARSE)
      re = re.substr(0, reClassStart) + "\\[" + sp[0]
      hasMagic = hasMagic || sp[1]
    }

    // handle the case where we had a +( thing at the *end*
    // of the pattern.
    // each pattern list stack adds 3 chars, and we need to go through
    // and escape any | chars that were passed through as-is for the regexp.
    // Go through and escape them, taking care not to double-escape any
    // | chars that were already escaped.
    var pl
    while (pl = patternListStack.pop()) {
      var tail = re.slice(pl.reStart + 3)
        // maybe some even number of \, then maybe 1 \, followed by a |
      tail = tail.replace(/((?:\\{2})*)(\\?)\|/g, function (_, $1, $2) {
        if (!$2) {
          // the | isn't already escaped, so escape it.
          $2 = "\\"
        }

        // need to escape all those slashes *again*, without escaping the
        // one that we need for escaping the | character.  As it works out,
        // escaping an even number of slashes can be done by simply repeating
        // it exactly after itself.  That's why this trick works.
        //
        // I am sorry that you have to see this.
        return $1 + $1 + $2 + "|"
      })

        // console.error("tail=%j\n   %s", tail, tail)
      var t = pl.type === "*" ? star
          : pl.type === "?" ? qmark
            : "\\" + pl.type

      hasMagic = true
      re = re.slice(0, pl.reStart)
        + t + "\\("
        + tail
    }

    // handle trailing things that only matter at the very end.
    clearStateChar()
    if (escaping) {
      // trailing \\
      re += "\\\\"
    }

    // only need to apply the nodot start if the re starts with
    // something that could conceivably capture a dot
    var addPatternStart = false
    switch (re.charAt(0)) {
      case ".":
      case "[":
      case "(": addPatternStart = true
    }

    // if the re is not "" at this point, then we need to make sure
    // it doesn't match against an empty path part.
    // Otherwise a/* will match a/, which it should not.
    if (re !== "" && hasMagic) re = "(?=.)" + re

    if (addPatternStart) re = patternStart + re

        // parsing just a piece of a larger pattern.
    if (isSub === SUBPARSE) {
      return [ re, hasMagic ]
    }

    // skip the regexp for non-magical patterns
    // unescape anything in it, though, so that it'll be
    // an exact match against a file etc.
    if (!hasMagic) {
      return globUnescape(pattern)
    }

    var flags = options.nocase ? "i" : ""
      , regExp = new RegExp("^" + re + "$", flags)

    regExp._glob = pattern
    regExp._src = re

    return regExp
  }

  minimatch.makeRe = function (pattern, options) {
    return new Minimatch(pattern, options || {}).makeRe()
  }

  Minimatch.prototype.makeRe = makeRe
  function makeRe () {
    if (this.regexp || this.regexp === false) return this.regexp

        // at this point, this.set is a 2d array of partial
        // pattern strings, or "**".
        //
        // It's better to use .match().  This function shouldn't
        // be used, really, but it's pretty convenient sometimes,
        // when you just want to work with a regex.
    var set = this.set

    if (!set.length) return this.regexp = false
    var options = this.options

    var twoStar = options.noglobstar ? star
        : options.dot ? twoStarDot
          : twoStarNoDot
      , flags = options.nocase ? "i" : ""

    var re = set.map(function (pattern) {
      return pattern.map(function (p) {
        return (p === GLOBSTAR) ? twoStar
            : (typeof p === "string") ? regExpEscape(p)
              : p._src
      }).join("\\\/")
    }).join("|")

      // must match entire pattern
      // ending in a * or ** will make it less strict.
    re = "^(?:" + re + ")$"

      // can match anything, as long as it's not this.
    if (this.negate) re = "^(?!" + re + ").*$"

    try {
      return this.regexp = new RegExp(re, flags)
    } catch (ex) {
        return this.regexp = false
      }
  }

  minimatch.match = function (list, pattern, options) {
    var mm = new Minimatch(pattern, options)
    list = list.filter(function (f) {
      return mm.match(f)
    })
    if (options.nonull && !list.length) {
      list.push(pattern)
    }
    return list
  }

  Minimatch.prototype.match = match
  function match (f, partial) {
    // console.error("match", f, this.pattern)
    // short-circuit in the case of busted things.
    // comments, etc.
    if (this.comment) return false
    if (this.empty) return f === ""

    if (f === "/" && partial) return true

    var options = this.options

      // windows: need to use /, not \
      // On other platforms, \ is a valid (albeit bad) filename char.
    if (false) {
      f = f.split("\\").join("/")
    }

    // treat the test path as a set of pathparts.
    f = f.split(slashSplit)
    if (options.debug) {
      console.error(this.pattern, "split", f)
    }

    // just ONE of the pattern sets in this.set needs to match
    // in order for it to be valid.  If negating, then just one
    // match means that we have failed.
    // Either way, return on the first hit.

    var set = this.set
      // console.error(this.pattern, "set", set)

    for (var i = 0, l = set.length; i < l; i ++) {
      var pattern = set[i]
      var hit = this.matchOne(f, pattern, partial)
      if (hit) {
        if (options.flipNegate) return true
        return !this.negate
      }
    }

    // didn't get any hits.  this is success if it's a negative
    // pattern, failure otherwise.
    if (options.flipNegate) return false
    return this.negate
  }

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
  Minimatch.prototype.matchOne = function (file, pattern, partial) {
    var options = this.options

    if (options.debug) {
      console.error("matchOne",
      { "this": this
        , file: file
        , pattern: pattern })
    }

    if (options.matchBase && pattern.length === 1) {
      file = path.basename(file.join("/")).split("/")
    }

    if (options.debug) {
      console.error("matchOne", file.length, pattern.length)
    }

    for ( var fi = 0
        , pi = 0
        , fl = file.length
        , pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi ++, pi ++ ) {

      if (options.debug) {
        console.error("matchOne loop")
      }
      var p = pattern[pi]
        , f = file[fi]

      if (options.debug) {
        console.error(pattern, p, f)
      }

      // should be impossible.
      // some invalid regexp stuff in the set.
      if (p === false) return false

      if (p === GLOBSTAR) {
        if (options.debug)
          console.error('GLOBSTAR', [pattern, p, f])

            // "**"
            // a/**/b/**/c would match the following:
            // a/b/x/y/z/c
            // a/x/y/z/b/c
            // a/b/x/b/x/c
            // a/b/c
            // To do this, take the rest of the pattern after
            // the **, and see if it would match the file remainder.
            // If so, return success.
            // If not, the ** "swallows" a segment, and try again.
            // This is recursively awful.
            //
            // a/**/b/**/c matching a/b/x/y/z/c
            // - a matches a
            // - doublestar
            //   - matchOne(b/x/y/z/c, b/**/c)
            //     - b matches b
            //     - doublestar
            //       - matchOne(x/y/z/c, c) -> no
            //       - matchOne(y/z/c, c) -> no
            //       - matchOne(z/c, c) -> no
            //       - matchOne(c, c) yes, hit
        var fr = fi
          , pr = pi + 1
        if (pr === pl) {
          if (options.debug)
            console.error('** at the end')
              // a ** at the end will just swallow the rest.
              // We have found a match.
              // however, it will not swallow /.x, unless
              // options.dot is set.
              // . and .. are *never* matched by **, for explosively
              // exponential reasons.
          for ( ; fi < fl; fi ++) {
            if (file[fi] === "." || file[fi] === ".." ||
            (!options.dot && file[fi].charAt(0) === ".")) return false
          }
          return true
        }

        // ok, let's see if we can swallow whatever we can.
        WHILE: while (fr < fl) {
            var swallowee = file[fr]

            if (options.debug) {
              console.error('\nglobstar while',
                file, fr, pattern, pr, swallowee)
            }

            // XXX remove this slice.  Just pass the start index.
            if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
              if (options.debug)
                console.error('globstar found match!', fr, fl, swallowee)
                  // found a match.
              return true
            } else {
              // can't swallow "." or ".." ever.
              // can only swallow ".foo" when explicitly asked.
              if (swallowee === "." || swallowee === ".." ||
              (!options.dot && swallowee.charAt(0) === ".")) {
                if (options.debug)
                  console.error("dot detected!", file, fr, pattern, pr)
                break WHILE
              }

              // ** swallows a segment, and continue.
              if (options.debug)
                console.error('globstar swallow a segment, and continue')
              fr ++
            }
          }
        // no match was found.
        // However, in partial mode, we can't say this is necessarily over.
        // If there's more *pattern* left, then
        if (partial) {
          // ran out of file
          // console.error("\n>>> no match, partial?", file, fr, pattern, pr)
          if (fr === fl) return true
        }
        return false
      }

      // something other than **
      // non-magic patterns just have to match exactly
      // patterns with magic have been turned into regexps.
      var hit
      if (typeof p === "string") {
        if (options.nocase) {
          hit = f.toLowerCase() === p.toLowerCase()
        } else {
          hit = f === p
        }
        if (options.debug) {
          console.error("string match", p, f, hit)
        }
      } else {
        hit = f.match(p)
        if (options.debug) {
          console.error("pattern match", p, f, hit)
        }
      }

      if (!hit) return false
    }

    // Note: ending in / means that we'll get a final ""
    // at the end of the pattern.  This can only match a
    // corresponding "" at the end of the file.
    // If the file ends in /, then it can only match a
    // a pattern that ends in /, unless the pattern just
    // doesn't have any more for it. But, a/b/ should *not*
    // match "a/b/*", even though "" matches against the
    // [^/]*? pattern, except in partial mode, where it might
    // simply not be reached yet.
    // However, a/b/ should still satisfy a/*

    // now either we fell off the end of the pattern, or we're done.
    if (fi === fl && pi === pl) {
      // ran out of pattern and filename at the same time.
      // an exact hit!
      return true
    } else if (fi === fl) {
      // ran out of file, but still had pattern left.
      // this is ok if we're doing the match as part of
      // a glob fs traversal.
      return partial
    } else if (pi === pl) {
      // ran out of pattern, still have file left.
      // this is only acceptable if we're on the very last
      // empty segment of a file with a trailing slash.
      // a/* should match a/b/
      var emptyFileEnd = (fi === fl - 1) && (file[fi] === "")
      return emptyFileEnd
    }

    // should be unreachable.
    throw new Error("wtf?")
  }


// replace stuff like \* with *
  function globUnescape (s) {
    return s.replace(/\\(.)/g, "$1")
  }


  function regExpEscape (s) {
    return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  }



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

// Based on iniparser by shockie <https://npmjs.org/package/iniparser>

/*
 * get the file handler
 */
var fs = __webpack_require__(0);

/*
 * define the possible values:
 * section: [section]
 * param: key=value
 * comment: ;this is a comment
 */
var regex = {
  section: /^\s*\[(([^#;]|\\#|\\;)+)\]\s*([#;].*)?$/,
  param: /^\s*([\w\.\-\_]+)\s*[=:]\s*(.*?)\s*([#;].*)?$/,
  comment: /^\s*[#;].*$/
};

/*
 * parses a .ini file
 * @param: {String} file, the location of the .ini file
 * @param: {Function} callback, the function that will be called when parsing is done
 * @return: none
 */
undefined = function (file, callback) {
  if (!callback) {
    return;
  }
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      callback(err);
    } else {
      callback(null, parse(data));
    }
  });
};

module.exports.parseSync = function (file) {
  return parse(fs.readFileSync(file, 'utf8'));
};

function parse (data) {
  var sectionBody = {};
  var sectionName = null;
  var value = [[sectionName, sectionBody]];
  var lines = data.split(/\r\n|\r|\n/);
  lines.forEach(function (line) {
    var match;
    if (regex.comment.test(line)) {
      return;
    } else if (regex.param.test(line)) {
      match = line.match(regex.param);
      sectionBody[match[1]] = match[2];
    } else if (regex.section.test(line)) {
      match = line.match(regex.section);
      sectionName = match[1];
      sectionBody = {};
      value.push([sectionName, sectionBody]);
    }
  });
  return value;
}

module.exports.parseString = parse;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var os = {};
var path = __webpack_require__(2);
var fs = __webpack_require__(0);
var util = {};
var Promise = {};
var whenReadFile = {};

var minimatch = __webpack_require__(4);
var iniparser = __webpack_require__(5);
var Version = __webpack_require__(3);
var pkg = __webpack_require__(1);

var knownProps = [
  'end_of_line',
  'indent_style',
  'indent_size',
  'insert_final_newline',
  'trim_trailing_whitespace',
  'charset'
].reduce(function (set, prop) {
  set[prop] = true;
  return set;
}, {});

function fnmatch(filepath, glob) {
  var matchOptions = {matchBase: true, dot: true, noext: true};
  glob = glob.replace(/\*\*/g, '{*,**/**/**}');
  return minimatch(filepath, glob, matchOptions);
}

function getConfigFileNames(filepath, options) {
  var paths = [];
  do {
    filepath = path.dirname(filepath);
    paths.push(path.join(filepath, options.config));
  } while (filepath !== options.root);
  return paths;
}

function getFilepathRoot(filepath) {
  if (path.parse !== undefined) {
    // Node.js >= 0.11.15
    return path.parse(filepath).root;
  }
  if ({} === 'win32') {
    return path.resolve(filepath).match(/^(\\\\[^\\]+\\)?[^\\]+\\/)[0];
  }
  return '/';
}

function processMatches(matches, version) {
  // Set indent_size to "tab" if indent_size is unspecified and
  // indent_style is set to "tab".
  if ("indent_style" in matches && matches.indent_style === "tab" &&
    !("indent_size" in matches) && version.gte(new Version(0, 10))) {
    matches.indent_size = "tab";
  }

  // Set tab_width to indent_size if indent_size is specified and
  // tab_width is unspecified
  if ("indent_size" in matches && !("tab_width" in matches) &&
  matches.indent_size !== "tab")
    matches.tab_width = matches.indent_size;

  // Set indent_size to tab_width if indent_size is "tab"
  if("indent_size" in matches && "tab_width" in matches &&
  matches.indent_size === "tab")
    matches.indent_size = matches.tab_width;

  return matches;
}

function processOptions(options, filepath) {
  options = options || {};
  return {
    config: options.config || '.editorconfig',
    version: new Version(options.version || pkg.version),
    root: path.resolve(options.root || getFilepathRoot(filepath))
  };
}

function buildFullGlob(pathPrefix, glob) {
  switch (glob.indexOf('/')) {
    case -1: glob = "**/" + glob; break;
    case  0: glob = glob.substring(1); break;
  }
  return path.join(pathPrefix, glob);
}

function extendProps(props, options) {
  for (var key in options) {
    var value = options[key];
    key = key.toLowerCase();
    if (knownProps[key]) {
      value = value.toLowerCase();
    }
    try {
      value = JSON.parse(value);
    } catch(e) {}
    if (typeof value === 'undefined' || value === null) {
      // null and undefined are values specific to JSON (no special meaning
      // in editorconfig) & should just be returned as regular strings.
      value = String(value);
    }
    props[key] = value;
  }
  return props;
}

function parseFromFiles(filepath, files, options) {
  return getConfigsForFiles(files).then(function (configs) {
    return configs.reverse();
  }).reduce(function (matches, file) {
    var pathPrefix = path.dirname(file.name);
    file.contents.forEach(function (section) {
      var glob = section[0], options = section[1];
      if (!glob) return;
      var fullGlob = buildFullGlob(pathPrefix, glob);
      if (!fnmatch(filepath, fullGlob)) return;
      matches = extendProps(matches, options);
    });
    return matches;
  }, {}).then(function (matches) {
    return processMatches(matches, options.version);
  });
}

function parseFromFilesSync(filepath, files, options) {
  var configs = getConfigsForFilesSync(files);
  configs.reverse();
  var matches = {};
  configs.forEach(function(config) {
    var pathPrefix = path.dirname(config.name);
    config.contents.forEach(function(section) {
      var glob = section[0], options = section[1];
      if (!glob) return;
      var fullGlob = buildFullGlob(pathPrefix, glob);
      if (!fnmatch(filepath, fullGlob)) return;
      matches = extendProps(matches, options);
    });
  });
  return processMatches(matches, options.version);
}

function StopReduce(array) {
  this.array = array;
}

StopReduce.prototype = Object.create(Error.prototype);

function getConfigsForFiles(files) {
  return Promise.reduce(files, function (configs, file) {
    var contents = iniparser.parseString(file.contents);
    configs.push({
      name: file.name,
      contents: contents
    });
    if ((contents[0][1].root || '').toLowerCase() === 'true') {
      return Promise.reject(new StopReduce(configs));
    }
    return configs;
  }, []).catch(StopReduce, function (stop) {
    return stop.array;
  });
}

function getConfigsForFilesSync(files) {
  var configs = [];
  for (var i in files) {
    var file = files[i];
    var contents = iniparser.parseString(file.contents);
    configs.push({
      name: file.name,
      contents: contents
    });
    if ((contents[0][1].root || '').toLowerCase() === 'true') {
      break;
    }
  };
  return configs;
}

function readConfigFiles(filepaths) {
  return Promise.map(filepaths, function (path) {
    return whenReadFile(path, 'utf-8').catch(function () {
      return '';
    }).then(function (contents) {
      return {name: path, contents: contents};
    });
  });
}

function readConfigFilesSync(filepaths) {
  var files = [];
  var file;
  filepaths.forEach(function(filepath) {
    try {
      file = fs.readFileSync(filepath, 'utf8');
    } catch (e) {
      file = '';
    }
    files.push({name: filepath, contents: file});
  });
  return files;
}

undefined = function (filepath, files, options) {
  return new Promise (function (resolve, reject) {
    filepath = path.resolve(filepath);
    options = processOptions(options, filepath);
    resolve(parseFromFiles(filepath, files, options));
  });
};

module.exports.parseFromFilesSync = function (filepath, files, options) {
  filepath = path.resolve(filepath);
  options = processOptions(options, filepath);
  return parseFromFilesSync(filepath, files, options);
};

undefined = function (filepath, options) {
  return new Promise (function (resolve, reject) {
    filepath = path.resolve(filepath);
    options = processOptions(options, filepath);
    var filepaths = getConfigFileNames(filepath, options);
    var files = readConfigFiles(filepaths);
    resolve(parseFromFiles(filepath, files, options));
  });
};

module.exports.parseSync = function (filepath, options) {
    filepath = path.resolve(filepath);
    options = processOptions(options, filepath);
    var filepaths = getConfigFileNames(filepath, options);
    var files = readConfigFilesSync(filepaths);
    return parseFromFilesSync(filepath, files, options);
};


/***/ }
/******/ ]);