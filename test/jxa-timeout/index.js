/* global $ */

if (typeof exports === 'undefined') exports = {}

function timer (repeats, func, delay) {
  var args = Array.prototype.slice.call(arguments, 2, -1)
  args.unshift(this)
  var boundFunc = func.bind.apply(func, args)
  var operation = $.NSBlockOperation.blockOperationWithBlock(boundFunc)
  var timer = $.NSTimer.timerWithTimeIntervalTargetSelectorUserInfoRepeats(
          delay / 1000, operation, 'main', null, repeats
        )
  $.NSRunLoop.currentRunLoop.addTimerForMode(timer, 'timer')
  return timer
}

function invalidate (timeoutID) {
  $(timeoutID.invalidate)
}

function run () {
  $.NSRunLoop.currentRunLoop.runModeBeforeDate('timer', $.NSDate.distantFuture)
}

var setTimeout = timer.bind(undefined, false)
var setInterval = timer.bind(undefined, true)
var clearTimeout = invalidate
var clearInterval = invalidate
setTimeout.run = setInterval.run = run

exports.setTimeout = setTimeout
exports.setInterval = setInterval
exports.clearTimeout = clearTimeout
exports.clearInterval = clearInterval
exports.run = run
