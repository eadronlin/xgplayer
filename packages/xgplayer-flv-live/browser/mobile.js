window["FlvPlayer"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/events/events.js":
/*!*****************************************************************************************!*\
  !*** /Users/leonardo/Documents/front-end/player/xgplayer/node_modules/events/events.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};

var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {

  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = type === 'error';

  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = this._events;
  if (events === undefined) return this;

  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }

    if (list.length === 1) events[type] = list[0];

    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;

  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined) return [];

  var evlistener = events[type];
  if (evlistener === undefined) return [];

  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

/***/ }),

/***/ "../xgplayer-buffer/index.js":
/*!***********************************!*\
  !*** ../xgplayer-buffer/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Track: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").default,
  Tracks: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").Tracks,
  AudioTrack: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").AudioTrack,
  VideoTrack: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").VideoTrack,

  XgBuffer: __webpack_require__(/*! ./src/buffer */ "../xgplayer-buffer/src/buffer.js").XgBuffer,
  RemuxBuffer: __webpack_require__(/*! ./src/buffer */ "../xgplayer-buffer/src/buffer.js").RemuxBuffer,

  PreSource: __webpack_require__(/*! ./src/presouce */ "../xgplayer-buffer/src/presouce.js").default
};

/***/ }),

/***/ "../xgplayer-buffer/src/buffer.js":
/*!****************************************!*\
  !*** ../xgplayer-buffer/src/buffer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class XgBuffer {
  /**
   * A buffer to store loaded data.
   *
   * @class LoaderBuffer
   * @param {number} length - Optional the buffer size
   */
  constructor(length) {
    this.length = length || 0;
    this.historyLen = length || 0;
    this.array = [];
    this.offset = 0;
  }

  /**
   * The function to push data.
   *
   * @param {number} data - The data to push into the buffer
   */
  push(data) {
    this.array.push(data);
    this.length += data.byteLength;
    this.historyLen += data.byteLength;
  }

  /**
   * The function to shift data.
   *
   * @param {number} length - The size of shift.
   */
  shift(length) {
    if (this.array.length < 1) {
      return new Uint8Array(0);
    }

    if (length === undefined) {
      return this._shiftBuffer();
    }
    if (this.offset + length === this.array[0].length) {
      let ret = this.array[0].slice(this.offset, this.offset + length);
      this.offset = 0;
      this.array.shift();
      this.length -= length;
      return ret;
    }

    if (this.offset + length < this.array[0].length) {
      let ret = this.array[0].slice(this.offset, this.offset + length);
      this.offset += length;
      this.length -= length;
      return ret;
    }

    let ret = new Uint8Array(length);
    let tmpoff = 0;
    while (this.array.length > 0 && length > 0) {
      if (this.offset + length < this.array[0].length) {
        let tmp = this.array[0].slice(this.offset, this.offset + length);
        ret.set(tmp, tmpoff);
        this.offset += length;
        this.length -= length;
        length = 0;
        break;
      } else {
        let templength = this.array[0].length - this.offset;
        ret.set(this.array[0].slice(this.offset, this.array[0].length), tmpoff);
        this.array.shift();
        this.offset = 0;
        tmpoff += templength;
        this.length -= templength;
        length -= templength;
      }
    }
    return ret;
  }

  /**
   * Function to clear the buffer.
   */
  clear() {
    this.array = [];
    this.length = 0;
    this.offset = 0;
  }

  destroy() {
    this.clear();
    this.historyLen = 0;
  }

  /**
   * Function to shift one unit8Array.
   */
  _shiftBuffer() {
    this.length -= this.array[0].length;
    this.offset = 0;
    return this.array.shift();
  }

  /**
   * Convert uint8 data to number.
   *
   * @param {number} start - the start postion.
   * @param {number} length - the length of data.
   */
  toInt(start, length) {
    let retInt = 0;
    let i = this.offset + start;
    while (i < this.offset + length + start) {
      if (i < this.array[0].length) {
        retInt = retInt * 256 + this.array[0][i];
      } else if (this.array[1]) {
        retInt = retInt * 256 + this.array[1][i - this.array[0].length];
      }

      i++;
    }
    return retInt;
  }
}

exports.XgBuffer = XgBuffer;
class RemuxBuffer {
  constructor() {
    this.video = [];
    this.audio = [];
  }

  destroy() {
    this.video = [];
    this.audio = [];
  }
}
exports.RemuxBuffer = RemuxBuffer;

/***/ }),

/***/ "../xgplayer-buffer/src/presouce.js":
/*!******************************************!*\
  !*** ../xgplayer-buffer/src/presouce.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Source {
  constructor() {
    this.mimetype = '';
    this.init = null;
    this.data = [];
  }
}

class PreSource {
  constructor() {
    this.sources = {};
  }

  getSource(source) {
    return this.sources[source];
  }

  createSource(name) {
    this.sources[name] = new Source();
    return this.sources[name];
  }

  clear() {
    this.sources = {};
  }

  destroy() {
    this.sources = {};
  }
}

exports.default = PreSource;

/***/ }),

/***/ "../xgplayer-buffer/src/track.js":
/*!***************************************!*\
  !*** ../xgplayer-buffer/src/track.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Track {
  /**
   * The constructor.
   */
  constructor() {
    this.id = -1;
    this.sequenceNumber = 0;
    this.samples = [];
    this.droppedSamples = [];
    this.length = 0;
  }

  /**
   * Reset the track.
   */
  reset() {
    this.sequenceNumber = 0;
    this.samples = [];
    this.length = 0;
  }
  /**
   * destroy the track.
   */
  distroy() {
    this.reset();
    this.id = -1;
  }
}

exports.default = Track;
class AudioTrack extends Track {
  /**
   * The constructor for audio track.
   */
  constructor() {
    super();
    this.TAG = 'AudioTrack';
    this.type = 'audio';
  }
}

exports.AudioTrack = AudioTrack;
class VideoTrack extends Track {
  /**
   * The constructor for video track.
   */
  constructor() {
    super();
    this.TAG = 'VideoTrack';
    this.type = 'video';
    this.dropped = 0;
  }
  /**
   * reset the video track.
   */
  reset() {
    this.sequenceNumber = 0;
    this.samples = [];
    this.length = 0;
    this.dropped = 0;
  }
}

exports.VideoTrack = VideoTrack;
class Tracks {
  constructor() {
    this.audioTrack = null;
    this.videoTrack = null;
  }

  destroy() {
    this.audioTrack = null;
    this.videoTrack = null;
  }
}
exports.Tracks = Tracks;

/***/ }),

/***/ "../xgplayer-codec/index.js":
/*!**********************************!*\
  !*** ../xgplayer-codec/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Nalunit: __webpack_require__(/*! ./src/h264/nalunit */ "../xgplayer-codec/src/h264/nalunit/index.js").default,
  SpsParser: __webpack_require__(/*! ./src/h264/nalunit/sps */ "../xgplayer-codec/src/h264/nalunit/sps.js").default,

  Compatibility: __webpack_require__(/*! ./src/compatibility */ "../xgplayer-codec/src/compatibility.js").default
};

/***/ }),

/***/ "../xgplayer-codec/src/aac/aac-helper.js":
/*!***********************************************!*\
  !*** ../xgplayer-codec/src/aac/aac-helper.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class AAC {

  static getSilentFrame(codec, channelCount) {
    if (codec === 'mp4a.40.2') {
      // handle LC-AAC
      if (channelCount === 1) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
      } else if (channelCount === 2) {
        return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
      } else if (channelCount === 3) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
      } else if (channelCount === 4) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
      } else if (channelCount === 5) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
      } else if (channelCount === 6) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
      }
    } else {
      // handle HE-AAC (mp4a.40.5 / mp4a.40.29)
      if (channelCount === 1) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0:d=0.05" -c:a libfdk_aac -profile:a aac_he -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x4e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x1c, 0x6, 0xf1, 0xc1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      } else if (channelCount === 2) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      } else if (channelCount === 3) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0|0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      }
    }
    return null;
  }

}

exports.default = AAC;

/***/ }),

/***/ "../xgplayer-codec/src/compatibility.js":
/*!**********************************************!*\
  !*** ../xgplayer-codec/src/compatibility.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _aacHelper = __webpack_require__(/*! ./aac/aac-helper */ "../xgplayer-codec/src/aac/aac-helper.js");

var _aacHelper2 = _interopRequireDefault(_aacHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { REMUX_EVENTS, DEMUX_EVENTS } = _xgplayerUtils.EVENTS;

class Compatibility {
  constructor() {
    this.nextAudioDts = 0; // 模拟下一段音频数据的dts
    this.nextVideoDts = 0; // 模拟下一段视频数据的dts

    this.lastAudioSamplesLen = 0; // 上一段音频数据的长度
    this.lastVideoSamplesLen = 0; // 上一段视频数据的长度

    this.lastVideoDts = undefined; // 上一段音频数据的长度
    this.lastAudioDts = undefined; // 上一段视频数据的长度

    this.allAudioSamplesCount = 0; // 音频总数据量(原始帧)
    this.allVideoSamplesCount = 0; // 视频总数据量(原始帧)

    this._firstAudioSample = null;
    this._firstVideoSample = null;

    this.filledAudioSamples = []; // 补充音频帧（）
    this.filledVideoSamples = []; // 补充视频帧（）

    this._videoLargeGap = 0;
    this._audioLargeGap = 0;
  }

  init() {
    this.before(REMUX_EVENTS.REMUX_MEDIA, this.doFix.bind(this));
  }

  reset() {
    this.nextAudioDts = null; // 估算下一段音频数据的dts
    this.nextVideoDts = null; // 估算下一段视频数据的dts

    this.lastAudioSamplesLen = 0; // 上一段音频数据的长度
    this.lastVideoSamplesLen = 0; // 上一段视频数据的长度

    this.lastVideoDts = undefined; // 上一段音频数据的长度
    this.lastAudioDts = undefined; // 上一段视频数据的长度

    // this.allAudioSamplesCount = 0 // 音频总数据量(原始帧)
    // this.allVideoSamplesCount = 0 // 视频总数据量(原始帧)

    // this._firstAudioSample = null
    // this._firstVideoSample = null

    this.filledAudioSamples = []; // 补充音频帧（）
    this.filledVideoSamples = []; // 补充视频帧（）
  }

  doFix() {
    const { isFirstAudioSamples, isFirstVideoSamples } = this.getFirstSample();

    // this.removeInvalidSamples()

    this.recordSamplesCount();

    if (this._firstVideoSample) {
      this.fixRefSampleDuration(this.videoTrack.meta, this.videoTrack.samples);
    }
    if (this._firstAudioSample) {
      this.fixRefSampleDuration(this.audioTrack.meta, this.audioTrack.samples);
    }

    const { changed: videoChanged, changedIdx: videoChangedIdx } = Compatibility.detactChangeStream(this.videoTrack.samples);
    if (videoChanged && !isFirstAudioSamples) {
      this.fixChangeStreamVideo(videoChangedIdx);
    } else {
      this.doFixVideo(isFirstVideoSamples);
    }

    const { changed: audioChanged, changedIdx: audioChangedIdx } = Compatibility.detactChangeStream(this.audioTrack.samples);
    if (audioChanged) {
      this.fixChangeStreamAudio(audioChangedIdx);
    } else {
      this.doFixAudio(isFirstAudioSamples);
    }

    // this.removeInvalidSamples()
  }

  doFixVideo(first, streamChangeStart) {
    let { samples: videoSamples, meta } = this.videoTrack;

    if (meta.frameRate && meta.frameRate.fixed === false) {
      return;
    }

    if (!videoSamples || !videoSamples.length || !this._firstVideoSample) {
      return;
    }

    // console.log(`video lastSample, ${videoSamples[videoSamples.length - 1].dts}`)

    const firstSample = videoSamples[0];

    const samplesLen = videoSamples.length;

    // step0.修复hls流出现巨大gap，需要强制重定位的问题
    if (this._videoLargeGap > 0) {
      Compatibility.doFixLargeGap(videoSamples, this._videoLargeGap);
    }

    if (firstSample.dts !== this._firstVideoSample.dts && (streamChangeStart || Compatibility.detectLargeGap(this.nextVideoDts, firstSample))) {
      if (streamChangeStart) {
        this.nextVideoDts = streamChangeStart; // FIX: Hls中途切codec，在如果直接seek到后面的点会导致largeGap计算失败
      }

      this._videoLargeGap = this.nextVideoDts - firstSample.dts;
      Compatibility.doFixLargeGap(videoSamples, this._videoLargeGap);
    }

    const firstDts = firstSample.dts;

    // step1. 修复与audio首帧差距太大的问题
    if (first && this._firstAudioSample) {
      const videoFirstDts = this._firstVideoSample.dts;
      const audioFirstDts = this._firstAudioSample.dts;
      const gap = videoFirstDts - audioFirstDts;
      if (gap > 2 * meta.refSampleDuration) {
        const fillCount = Math.floor(gap / meta.refSampleDuration);

        for (let i = 0; i < fillCount; i++) {
          const clonedFirstSample = Object.assign({}, firstSample); // 视频头部帧缺失需要复制第一帧
          // 重新计算sample的dts和pts
          clonedFirstSample.dts = videoFirstDts - (i + 1) * meta.refSampleDuration;
          clonedFirstSample.pts = clonedFirstSample.dts + clonedFirstSample.cts;

          videoSamples.unshift(clonedFirstSample);

          this.filledVideoSamples.push({
            dts: clonedFirstSample.dts,
            size: clonedFirstSample.data.byteLength
          });
        }
      }
    }

    let gap;
    // step2. 修复samples段之间的间距问题、
    if (this.nextVideoDts) {
      // step1. 处理samples段之间的丢帧情况
      // 当发现duration差距大于2帧时进行补帧
      gap = firstDts - this.nextVideoDts;
      const absGap = Math.abs(gap);
      if (gap > 2 * meta.refSampleDuration) {
        const fillFrameCount = Math.floor(gap / meta.refSampleDuration);

        for (let i = 0; i < fillFrameCount; i++) {
          const clonedSample = Object.assign({}, videoSamples[0]);
          const computed = firstDts - (i + 1) * meta.refSampleDuration;

          clonedSample.dts = computed > this.nextVideoDts ? computed : this.nextVideoDts; // 补的第一帧一定要是nextVideoDts
          clonedSample.pts = clonedSample.dts + clonedSample.cts;

          this.videoTrack.samples.unshift(clonedSample);

          this.filledVideoSamples.push({
            dts: clonedSample.dts,
            size: clonedSample.data.byteLength
          });
        }
      } else if (absGap <= meta.refSampleDuration && absGap > 0) {
        // 当差距在+-一帧之间时将第一帧的dts强行定位到期望位置
        // console.log('重定位视频帧dts', videoSamples[0].dts, this.nextVideoDts)
        videoSamples[0].dts = this.nextVideoDts;
        videoSamples[0].originDts = videoSamples[0].dts;
        videoSamples[0].cts = videoSamples[0].cts !== undefined ? videoSamples[0].cts : videoSamples[0].pts - videoSamples[0].dts;
        videoSamples[0].pts = videoSamples[0].dts + videoSamples[0].cts;
      } else if (gap < 0) {
        // 出现大的gap
        Compatibility.doFixLargeGap(videoSamples, -1 * gap);
      }
    }
    const lastDts = videoSamples[videoSamples.length - 1].dts;

    const lastSampleDuration = videoSamples.length >= 2 ? lastDts - videoSamples[videoSamples.length - 2].dts : meta.refSampleDuration;

    this.lastVideoSamplesLen = samplesLen;
    this.nextVideoDts = lastDts + lastSampleDuration;
    this.lastVideoDts = lastDts;

    // step2. 修复sample段之内的间距问题
    // step3. 修复samples段内部的dts异常问题
    for (let i = 0, len = videoSamples.length; i < len; i++) {
      const current = videoSamples[i];
      const next = videoSamples[i + 1];

      if (!next) {
        break;
      }

      const duration = next.dts - current.dts;

      if (duration > 2 * meta.refSampleDuration) {
        // 两帧之间间隔太大，需要补空白帧
        let fillFrameCount = Math.floor(duration / meta.refSampleDuration);

        let fillFrameIdx = 0;
        while (fillFrameIdx < fillFrameCount) {
          const fillFrame = Object.assign({}, next);
          fillFrame.dts = current.dts + (fillFrameIdx + 1) * meta.refSampleDuration;
          fillFrame.pts = fillFrame.dts + fillFrame.cts;
          if (fillFrame < next.dts) {
            videoSamples.splice(i, 0, fillFrame);

            this.filledVideoSamples.push({
              dts: fillFrame.dts,
              size: fillFrame.data.byteLength
            });
          }

          fillFrameIdx++;
          i++;
        }
      }
    }

    this.videoTrack.samples = videoSamples;
  }

  doFixAudio(first, streamChangeStart) {
    let { samples: audioSamples, meta } = this.audioTrack;

    if (!audioSamples || !audioSamples.length) {
      return;
    }
    // console.log(`audio lastSample, ${audioSamples[audioSamples.length - 1].dts}`)

    const samplesLen = audioSamples.length;
    const silentFrame = _aacHelper2.default.getSilentFrame(meta.codec, meta.channelCount);

    const firstSample = this._firstAudioSample;

    const _firstSample = audioSamples[0];
    // 对audioSamples按照dts做排序
    // audioSamples = Compatibility.sortAudioSamples(audioSamples)
    if (this._audioLargeGap > 0) {
      Compatibility.doFixLargeGap(audioSamples, this._audioLargeGap);
    }

    if (_firstSample.dts !== this._firstAudioSample.dts && (streamChangeStart || Compatibility.detectLargeGap(this.nextAudioDts, _firstSample))) {
      if (streamChangeStart) {
        this.nextAudioDts = streamChangeStart; // FIX: Hls中途切codec，在如果直接seek到后面的点会导致largeGap计算失败
      }
      this._audioLargeGap = this.nextAudioDts - _firstSample.dts;
      Compatibility.doFixLargeGap(audioSamples, this._audioLargeGap);
    }
    // step0. 首帧与video首帧间距大的问题
    if (this._firstVideoSample && first) {
      const videoFirstPts = this._firstVideoSample.pts ? this._firstVideoSample.pts : this._firstVideoSample.dts + this._firstVideoSample.cts;

      if (firstSample.dts - videoFirstPts > meta.refSampleDuration) {
        const silentSampleCount = Math.floor((firstSample.dts - videoFirstPts) / meta.refSampleDuration);

        for (let i = 0; i < silentSampleCount; i++) {
          const silentSample = {
            data: silentFrame,
            datasize: silentFrame.byteLength,
            dts: firstSample.dts - (i + 1) * meta.refSampleDuration,
            filtered: 0
          };

          audioSamples.unshift(silentSample);

          this.filledAudioSamples.push({
            dts: silentSample.dts,
            size: silentSample.data.byteLength
          });
        }
      }
    }

    let gap;
    const firstDts = audioSamples[0].dts;

    if (this.nextAudioDts) {
      // step1. 处理samples段之间的丢帧情况
      // 当发现duration差距大于1帧时进行补帧
      gap = firstDts - this.nextAudioDts;
      const absGap = Math.abs(gap);

      if (absGap > meta.refSampleDuration && samplesLen === 1 && this.lastAudioSamplesLen === 1) {
        meta.refSampleDurationFixed = undefined;
      }

      if (gap > 2 * meta.refSampleDuration) {
        if (samplesLen === 1 && this.lastAudioSamplesLen === 1) {
          // 如果sample的length一直是1，而且一直不符合refSampleDuration，需要动态修改refSampleDuration
          meta.refSampleDurationFixed = meta.refSampleDurationFixed !== undefined ? meta.refSampleDurationFixed + gap : meta.refSampleDuration + gap;
        } else {
          const silentFrameCount = Math.floor(gap / meta.refSampleDuration);

          for (let i = 0; i < silentFrameCount; i++) {
            const computed = firstDts - (i + 1) * meta.refSampleDuration;
            const silentSample = Object.assign({}, audioSamples[0], {
              dts: computed > this.nextAudioDts ? computed : this.nextAudioDts
            });

            this.filledAudioSamples.push({
              dts: silentSample.dts,
              size: silentSample.data.byteLength
            });
            this.audioTrack.samples.unshift(silentSample);
          }
        }
      } else if (absGap <= meta.refSampleDuration && absGap > 0) {
        // 当差距比较小的时候将音频帧重定位
        // console.log('重定位音频帧dts', audioSamples[0].dts, this.nextAudioDts)
        audioSamples[0].dts = this.nextAudioDts;
        audioSamples[0].pts = this.nextAudioDts;
      } else if (gap < 0) {
        Compatibility.doFixLargeGap(audioSamples, -1 * gap);
      }
    }
    const lastDts = audioSamples[audioSamples.length - 1].dts;
    const lastSampleDuration = audioSamples.length >= 2 ? lastDts - audioSamples[audioSamples.length - 2].dts : meta.refSampleDuration;

    this.lastAudioSamplesLen = samplesLen;
    this.nextAudioDts = meta.refSampleDurationFixed ? lastDts + meta.refSampleDurationFixed : lastDts + lastSampleDuration;
    this.lastAudioDts = lastDts;

    // step3. 修复samples段内部的dts异常问题
    for (let i = 0, len = audioSamples.length; i < len; i++) {
      const current = audioSamples[i];
      const next = audioSamples[i + 1];

      if (!next) {
        break;
      }

      const duration = next.dts - current.dts;
      audioSamples[i].duration = duration;
      /*
      if (duration > (2 * meta.refSampleDuration)) {
        // 两帧之间间隔太大，需要补空白帧
        /**
        let silentFrameCount = Math.floor(duration / meta.refSampleDuration)
        let frameIdx = 0
         while (frameIdx < silentFrameCount) {
          const silentSample = {
            data: silentFrame,
            datasize: silentFrame.byteLength,
            dts: current.dts + (frameIdx + 1) * meta.refSampleDuration,
            filtered: 0,
            isSilent: true
          }
           audioSamples.splice(i, 0, silentSample)
           this.filledAudioSamples.push({
            dts: silentSample.dts,
            size: silentSample.data.byteLength
          })
           frameIdx++
          i++ // 不对静音帧做比较
        }
      } */
    }

    this.audioTrack.samples = Compatibility.sortAudioSamples(audioSamples);
  }

  fixChangeStreamVideo(changeIdx) {
    const { samples, meta } = this.videoTrack;
    const prevDts = changeIdx === 0 ? this.getStreamChangeStart(samples[0]) : samples[changeIdx - 1].dts;
    const curDts = samples[changeIdx].dts;
    const isContinue = Math.abs(prevDts - curDts) <= 2 * meta.refSampleDuration;

    if (isContinue) {
      if (!samples[changeIdx].options) {
        samples[changeIdx].options = {
          isContinue: true
        };
      } else {
        samples[changeIdx].options.isContinue = true;
      }
      return this.doFixVideo(false);
    }

    const firstPartSamples = samples.slice(0, changeIdx);
    const secondPartSamples = samples.slice(changeIdx);
    const firstSample = samples[0];

    const changeSample = secondPartSamples[0];
    const firstPartDuration = changeSample.dts - firstSample.dts;
    const streamChangeStart = firstSample.options && firstSample.options.start + firstPartDuration ? firstSample.options.start : null;

    this.videoTrack.samples = samples.slice(0, changeIdx);

    this.doFixVideo(false);

    this.videoTrack.samples = samples.slice(changeIdx);

    this.doFixVideo(false, streamChangeStart);

    this.videoTrack.samples = firstPartSamples.concat(secondPartSamples);
  }

  fixChangeStreamAudio(changeIdx) {
    const { samples, meta } = this.audioTrack;

    const prevDts = changeIdx === 0 ? this.getStreamChangeStart(samples[0]) : samples[changeIdx - 1].dts;
    const curDts = samples[changeIdx].dts;
    const isContinue = Math.abs(prevDts - curDts) <= 2 * meta.refSampleDuration;

    if (isContinue) {
      if (!samples[changeIdx].options) {
        samples[changeIdx].options = {
          isContinue: true
        };
      } else {
        samples[changeIdx].options.isContinue = true;
      }
      return this.doFixAudio(false);
    }

    const firstPartSamples = samples.slice(0, changeIdx);
    const secondPartSamples = samples.slice(changeIdx);
    const firstSample = samples[0];

    const changeSample = secondPartSamples[0];
    const firstPartDuration = changeSample.dts - firstSample.dts;
    const streamChangeStart = firstSample.options && firstSample.options.start + firstPartDuration ? firstSample.options.start : null;

    this.audioTrack.samples = firstPartSamples;

    this.doFixAudio(false);

    this.audioTrack.samples = secondPartSamples;

    this.doFixAudio(false, streamChangeStart);

    this.audioTrack.samples = firstPartSamples.concat(secondPartSamples);
  }

  getFirstSample() {
    // 获取video和audio的首帧数据
    let { samples: videoSamples } = this.videoTrack;
    let { samples: audioSamples } = this.audioTrack;

    let isFirstVideoSamples = false;
    let isFirstAudioSamples = false;

    if (!this._firstVideoSample && videoSamples.length) {
      this._firstVideoSample = Compatibility.findFirstVideoSample(videoSamples);
      isFirstVideoSamples = true;
    }

    if (!this._firstAudioSample && audioSamples.length) {
      this._firstAudioSample = Compatibility.findFirstAudioSample(audioSamples); // 寻找dts最小的帧作为首个音频帧
      isFirstAudioSamples = true;
    }

    return {
      isFirstVideoSamples,
      isFirstAudioSamples
    };
  }

  /**
   * 在没有refSampleDuration的问题流中，
   */
  fixRefSampleDuration(meta, samples) {
    const isVideo = meta.type === 'video';
    const allSamplesCount = isVideo ? this.allVideoSamplesCount : this.allAudioSamplesCount;
    const firstDts = isVideo ? this._firstVideoSample.dts : this._firstAudioSample.dts;
    const filledSamplesCount = isVideo ? this.filledVideoSamples.length : this.filledAudioSamples.length;

    if (!meta.refSampleDuration || meta.refSampleDuration <= 0 || Number.isNaN(meta.refSampleDuration)) {
      if (samples.length >= 1) {
        const lastDts = samples[samples.length - 1].dts;

        meta.refSampleDuration = Math.floor((lastDts - firstDts) / (allSamplesCount + filledSamplesCount - 1)); // 将refSampleDuration重置为计算后的平均值
      }
    } else if (meta.refSampleDuration) {
      if (samples.length >= 5) {
        const lastDts = samples[samples.length - 1].dts;
        const firstDts = samples[0].dts;
        const durationAvg = (lastDts - firstDts) / (samples.length - 1);

        meta.refSampleDuration = Math.floor(Math.abs(meta.refSampleDuration - durationAvg) <= 5 ? meta.refSampleDuration : durationAvg); // 将refSampleDuration重置为计算后的平均值
      }
    }
  }

  /**
   * 记录截止目前一共播放了多少帧
   */
  recordSamplesCount() {
    const { audioTrack, videoTrack } = this;

    this.allAudioSamplesCount += audioTrack.samples.length;
    this.allVideoSamplesCount += videoTrack.samples.length;
  }

  /**
   * 去除不合法的帧（倒退、重复帧）
   */
  removeInvalidSamples() {
    const { _firstVideoSample, _firstAudioSample } = this;

    this.audioTrack.samples = this.audioTrack.samples.filter(sample => {
      return sample.dts >= _firstAudioSample.dts && (this.lastAudioDts === undefined || sample.dts > this.lastAudioDts);
    });

    this.videoTrack.samples = this.videoTrack.samples.filter(sample => {
      return sample.dts >= _firstVideoSample.dts && (this.lastVideoDts === undefined || sample.dts > this.lastVideoDts);
    });
  }

  getStreamChangeStart(sample) {
    if (sample.options && sample.options.start) {
      return sample.options.start - this.dtsBase;
    }
    return Infinity;
  }

  static sortAudioSamples(samples) {
    if (samples.length === 1) {
      return samples;
    }

    return samples.sort((a, b) => {
      return a.dts - b.dts;
    });
  }

  /**
   * 寻找dts最小的sample
   * @param samples
   */
  static findFirstAudioSample(samples) {
    if (!samples || samples.length === 0) {
      return null;
    }

    return Compatibility.sortAudioSamples(samples)[0];
  }

  static findFirstVideoSample(samples) {
    if (!samples.length) {
      return null;
    }

    const sorted = samples.sort((a, b) => {
      return a.dts - b.dts;
    });

    for (let i = 0, len = sorted.length; i < len; i++) {
      if (sorted[i].isKeyframe) {
        return sorted[i];
      }
    }
  }

  static detectLargeGap(nextDts, firstSample) {
    if (nextDts === null) {
      return;
    }
    const curDts = firstSample.dts || 0;
    const cond1 = nextDts - curDts >= 1000 || curDts - nextDts >= 1000; // fix hls流出现大量流dts间距问题
    const cond2 = firstSample.options && firstSample.options.discontinue;

    return cond1 || cond2;
  }

  static doFixLargeGap(samples, gap) {
    for (let i = 0, len = samples.length; i < len; i++) {
      const sample = samples[i];
      sample.dts += gap;
      if (sample.pts) {
        sample.pts += gap;
      }
    }
  }

  /**
   * 中途换流
   */
  static detactChangeStream(samples) {
    let changed = false;
    let changedIdx = -1;
    for (let i = 0, len = samples.length; i < len; i++) {
      if (samples[i].options && samples[i].options.meta) {
        changed = true;
        changedIdx = i;
        break;
      }
    }

    return {
      changed,
      changedIdx
    };
  }

  get tracks() {
    return this._context.getInstance('TRACKS');
  }

  get audioTrack() {
    if (this.tracks) {
      return this.tracks.audioTrack;
    }
    return null;
  }

  get videoTrack() {
    if (this.tracks) {
      return this.tracks.videoTrack;
    }
    return null;
  }

  get dtsBase() {
    const remuxer = this._context.getInstance('MP4_REMUXER');
    if (remuxer) {
      return remuxer._dtsBase;
    }
    return 0;
  }
}
exports.default = Compatibility;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/golomb.js":
/*!****************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/golomb.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Golomb {
  constructor(uint8array) {
    this.TAG = 'Golomb';
    this._buffer = uint8array;
    this._bufferIndex = 0;
    this._totalBytes = uint8array.byteLength;
    this._totalBits = uint8array.byteLength * 8;
    this._currentWord = 0;
    this._currentWordBitsLeft = 0;
  }

  destroy() {
    this._buffer = null;
  }

  _fillCurrentWord() {
    let bufferBytesLeft = this._totalBytes - this._bufferIndex;
    if (bufferBytesLeft <= 0) {
      // TODO 异常处理
    }

    let bytesRead = Math.min(4, bufferBytesLeft);
    let word = new Uint8Array(4);
    word.set(this._buffer.subarray(this._bufferIndex, this._bufferIndex + bytesRead));
    this._currentWord = new DataView(word.buffer).getUint32(0);

    this._bufferIndex += bytesRead;
    this._currentWordBitsLeft = bytesRead * 8;
  }

  readBits(size) {
    let bits = Math.min(this._currentWordBitsLeft, size); // :uint
    let valu = this._currentWord >>> 32 - bits;
    if (size > 32) {
      throw new Error('Cannot read more than 32 bits at a time');
    }
    this._currentWordBitsLeft -= bits;
    if (this._currentWordBitsLeft > 0) {
      this._currentWord <<= bits;
    } else if (this._totalBytes - this._bufferIndex > 0) {
      this._fillCurrentWord();
    }

    bits = size - bits;
    if (bits > 0 && this._currentWordBitsLeft) {
      return valu << bits | this.readBits(bits);
    } else {
      return valu;
    }
  }

  readBool() {
    return this.readBits(1) === 1;
  }

  readByte() {
    return this.readBits(8);
  }

  _skipLeadingZero() {
    let zeroCount;
    for (zeroCount = 0; zeroCount < this._currentWordBitsLeft; zeroCount++) {
      if ((this._currentWord & 0x80000000 >>> zeroCount) !== 0) {
        this._currentWord <<= zeroCount;
        this._currentWordBitsLeft -= zeroCount;
        return zeroCount;
      }
    }
    this._fillCurrentWord();
    return zeroCount + this._skipLeadingZero();
  }

  readUEG() {
    // unsigned exponential golomb
    let leadingZeros = this._skipLeadingZero();
    return this.readBits(leadingZeros + 1) - 1;
  }

  readSEG() {
    // signed exponential golomb
    let value = this.readUEG();
    if (value & 0x01) {
      return value + 1 >>> 1;
    } else {
      return -1 * (value >>> 1);
    }
  }
}

exports.default = Golomb;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/index.js":
/*!***************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sps = __webpack_require__(/*! ./sps */ "../xgplayer-codec/src/h264/nalunit/sps.js");

var _sps2 = _interopRequireDefault(_sps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Nalunit {
  static getNalunits(buffer) {
    if (buffer.length - buffer.position < 4) {
      return [];
    }

    let buf = buffer.dataview;
    let position = buffer.position;
    if (buf.getInt32(position) === 1 || buf.getInt16(position) === 0 && buf.getInt8(position + 2) === 1) {
      return Nalunit.getAnnexbNals(buffer);
    } else {
      return Nalunit.getAvccNals(buffer);
    }
  }

  static getAnnexbNals(buffer) {
    let nals = [];
    let position = Nalunit.getHeaderPositionAnnexB(buffer);
    let start = position.pos;
    let end = start;
    while (start < buffer.length - 4) {
      let header = buffer.buffer.slice(start, start + position.headerLength);
      if (position.pos === buffer.position) {
        buffer.skip(position.headerLength);
      }
      position = Nalunit.getHeaderPositionAnnexB(buffer);
      end = position.pos;
      let body = new Uint8Array(buffer.buffer.slice(start + header.byteLength, end));
      let unit = { header, body };
      Nalunit.analyseNal(unit);
      nals.push(unit);
      buffer.skip(end - buffer.position);
      start = end;
    }
    return nals;
  }

  static getAvccNals(buffer) {
    let nals = [];
    while (buffer.position < buffer.length - 4) {
      let length = buffer.dataview.getInt32(buffer.position);
      if (buffer.length - buffer.position >= length) {
        let header = buffer.buffer.slice(buffer.position, buffer.position + 4);
        buffer.skip(4);
        let body = buffer.buffer.slice(buffer.position, buffer.position + length);
        buffer.skip(length);
        let unit = { header, body };
        Nalunit.analyseNal(unit);
        nals.push(unit);
      } else {
        break;
      }
    }
    return nals;
  }

  static analyseNal(unit) {
    let type = unit.body[0] & 0x1f;
    switch (type) {
      case 1:
        // NDR
        unit.ndr = true;
        break;
      case 5:
        // IDR
        unit.idr = true;
        break;
      case 6:
        // SEI
        break;
      case 7:
        // SPS
        unit.sps = _sps2.default.parseSPS(unit.body);
        break;
      case 8:
        // PPS
        unit.pps = true;
        break;
      case 9:
        // AUD
        break;
      default:
        break;
    }
  }

  static getHeaderPositionAnnexB(buffer) {
    // seperate
    let pos = buffer.position;
    let headerLength = 0;
    while (headerLength !== 3 && headerLength !== 4 && pos < buffer.length - 4) {
      if (buffer.dataview.getInt16(pos) === 0) {
        if (buffer.dataview.getInt16(pos + 2) === 1) {
          // 0x000001
          headerLength = 4;
        } else if (buffer.dataview.getInt8(pos + 2) === 1) {
          headerLength = 3;
        } else {
          pos++;
        }
      } else {
        pos++;
      }
    }

    if (pos === buffer.length - 4) {
      if (buffer.dataview.getInt16(pos) === 0) {
        if (buffer.dataview.getInt16(pos + 2) === 1) {
          // 0x000001
          headerLength = 4;
        }
      } else {
        pos++;
        if (buffer.dataview.getInt16(pos) === 0 && buffer.dataview.getInt8(pos) === 1) {
          // 0x0000001
          headerLength = 3;
        } else {
          pos = buffer.length;
        }
      }
    }
    return { pos, headerLength };
  }

  static getAvcc(sps, pps) {
    let ret = new Uint8Array(sps.byteLength + pps.byteLength + 11);
    ret[0] = 0x01;
    ret[1] = sps[1];
    ret[2] = sps[2];
    ret[3] = sps[3];
    ret[4] = 255;
    ret[5] = 225;

    let offset = 6;

    ret.set(new Uint8Array([sps.byteLength >>> 8 & 0xff, sps.byteLength & 0xff]), offset);
    offset += 2;
    ret.set(sps, offset);
    offset += sps.byteLength;

    ret[offset] = 1;
    offset++;

    ret.set(new Uint8Array([pps.byteLength >>> 8 & 0xff, pps.byteLength & 0xff]), offset);
    offset += 2;
    ret.set(pps, offset);
    return ret;
  }
}

exports.default = Nalunit;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/sps.js":
/*!*************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/sps.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _golomb = __webpack_require__(/*! ./golomb */ "../xgplayer-codec/src/h264/nalunit/golomb.js");

var _golomb2 = _interopRequireDefault(_golomb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SPSParser {
  static _ebsp2rbsp(uint8array) {
    let src = uint8array;
    let srcLength = src.byteLength;
    let dst = new Uint8Array(srcLength);
    let dstIdx = 0;

    for (let i = 0; i < srcLength; i++) {
      if (i >= 2) {
        if (src[i] === 0x03 && src[i - 1] === 0x00 && src[i - 2] === 0x00) {
          continue;
        }
      }
      dst[dstIdx] = src[i];
      dstIdx++;
    }

    return new Uint8Array(dst.buffer, 0, dstIdx);
  }

  static parseSPS(uint8array) {
    let rbsp = SPSParser._ebsp2rbsp(uint8array);
    let gb = new _golomb2.default(rbsp);

    gb.readByte();
    let profileIdc = gb.readByte();
    gb.readByte();
    let levelIdc = gb.readByte();
    gb.readUEG();

    let profile_string = SPSParser.getProfileString(profileIdc);
    let level_string = SPSParser.getLevelString(levelIdc);
    let chroma_format_idc = 1;
    let chroma_format = 420;
    let chroma_format_table = [0, 420, 422, 444];
    let bit_depth = 8;

    if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244 || profileIdc === 44 || profileIdc === 83 || profileIdc === 86 || profileIdc === 118 || profileIdc === 128 || profileIdc === 138 || profileIdc === 144) {
      chroma_format_idc = gb.readUEG();
      if (chroma_format_idc === 3) {
        gb.readBits(1);
      }
      if (chroma_format_idc <= 3) {
        chroma_format = chroma_format_table[chroma_format_idc];
      }

      bit_depth = gb.readUEG() + 8;
      gb.readUEG();
      gb.readBits(1);
      if (gb.readBool()) {
        let scaling_list_count = chroma_format_idc !== 3 ? 8 : 12;
        for (let i = 0; i < scaling_list_count; i++) {
          if (gb.readBool()) {
            if (i < 6) {
              SPSParser._skipScalingList(gb, 16);
            } else {
              SPSParser._skipScalingList(gb, 64);
            }
          }
        }
      }
    }
    gb.readUEG();
    let pic_order_cnt_type = gb.readUEG();
    if (pic_order_cnt_type === 0) {
      gb.readUEG();
    } else if (pic_order_cnt_type === 1) {
      gb.readBits(1);
      gb.readSEG();
      gb.readSEG();
      let num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG();
      for (let i = 0; i < num_ref_frames_in_pic_order_cnt_cycle; i++) {
        gb.readSEG();
      }
    }
    gb.readUEG();
    gb.readBits(1);

    let pic_width_in_mbs_minus1 = gb.readUEG();
    let pic_height_in_map_units_minus1 = gb.readUEG();

    let frame_mbs_only_flag = gb.readBits(1);
    if (frame_mbs_only_flag === 0) {
      gb.readBits(1);
    }
    gb.readBits(1);

    let frame_crop_left_offset = 0;
    let frame_crop_right_offset = 0;
    let frame_crop_top_offset = 0;
    let frame_crop_bottom_offset = 0;

    let frame_cropping_flag = gb.readBool();
    if (frame_cropping_flag) {
      frame_crop_left_offset = gb.readUEG();
      frame_crop_right_offset = gb.readUEG();
      frame_crop_top_offset = gb.readUEG();
      frame_crop_bottom_offset = gb.readUEG();
    }

    let par_width = 1,
        par_height = 1;
    let fps = 0,
        fps_fixed = true,
        fps_num = 0,
        fps_den = 0;

    let vui_parameters_present_flag = gb.readBool();
    if (vui_parameters_present_flag) {
      if (gb.readBool()) {
        // aspect_ratio_info_present_flag
        let aspect_ratio_idc = gb.readByte();
        let par_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2];
        let par_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];

        if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
          par_width = par_w_table[aspect_ratio_idc - 1];
          par_height = par_h_table[aspect_ratio_idc - 1];
        } else if (aspect_ratio_idc === 255) {
          par_width = gb.readByte() << 8 | gb.readByte();
          par_height = gb.readByte() << 8 | gb.readByte();
        }
      }

      if (gb.readBool()) {
        gb.readBool();
      }
      if (gb.readBool()) {
        gb.readBits(4);
        if (gb.readBool()) {
          gb.readBits(24);
        }
      }
      if (gb.readBool()) {
        gb.readUEG();
        gb.readUEG();
      }
      if (gb.readBool()) {
        let num_units_in_tick = gb.readBits(32);
        let time_scale = gb.readBits(32);
        fps_fixed = gb.readBool();

        fps_num = time_scale;
        fps_den = num_units_in_tick * 2;
        fps = fps_num / fps_den;
      }
    }

    let parScale = 1;
    if (par_width !== 1 || par_height !== 1) {
      parScale = par_width / par_height;
    }

    let crop_unit_x = 0,
        crop_unit_y = 0;
    if (chroma_format_idc === 0) {
      crop_unit_x = 1;
      crop_unit_y = 2 - frame_mbs_only_flag;
    } else {
      let sub_wc = chroma_format_idc === 3 ? 1 : 2;
      let sub_hc = chroma_format_idc === 1 ? 2 : 1;
      crop_unit_x = sub_wc;
      crop_unit_y = sub_hc * (2 - frame_mbs_only_flag);
    }

    let codec_width = (pic_width_in_mbs_minus1 + 1) * 16;
    let codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16);

    codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x;
    codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y;

    let present_width = Math.ceil(codec_width * parScale);

    gb.destroy();
    gb = null;

    return {
      profile_string: profile_string,
      level_string: level_string,
      bit_depth: bit_depth,
      chroma_format: chroma_format,
      chroma_format_string: SPSParser.getChromaFormatString(chroma_format),

      frame_rate: {
        fixed: fps_fixed,
        fps: fps,
        fps_den: fps_den,
        fps_num: fps_num
      },

      par_ratio: {
        width: par_width,
        height: par_height
      },

      codec_size: {
        width: codec_width,
        height: codec_height
      },

      present_size: {
        width: present_width,
        height: codec_height
      }
    };
  }

  static _skipScalingList(gb, count) {
    let last_scale = 8,
        next_scale = 8;
    let delta_scale = 0;
    for (let i = 0; i < count; i++) {
      if (next_scale !== 0) {
        delta_scale = gb.readSEG();
        next_scale = (last_scale + delta_scale + 256) % 256;
      }
      last_scale = next_scale === 0 ? last_scale : next_scale;
    }
  }

  static getProfileString(profileIdc) {
    switch (profileIdc) {
      case 66:
        return 'Baseline';
      case 77:
        return 'Main';
      case 88:
        return 'Extended';
      case 100:
        return 'High';
      case 110:
        return 'High10';
      case 122:
        return 'High422';
      case 244:
        return 'High444';
      default:
        return 'Unknown';
    }
  }

  static getLevelString(levelIdc) {
    return (levelIdc / 10).toFixed(1);
  }

  static getChromaFormatString(chroma) {
    switch (chroma) {
      case 420:
        return '4:2:0';
      case 422:
        return '4:2:2';
      case 444:
        return '4:4:4';
      default:
        return 'Unknown';
    }
  }

  static toVideoMeta(spsConfig) {
    let meta = {};
    if (spsConfig && spsConfig.codec_size) {
      meta.codecWidth = spsConfig.codec_size.width;
      meta.codecHeight = spsConfig.codec_size.height;
      meta.presentWidth = spsConfig.present_size.width;
      meta.presentHeight = spsConfig.present_size.height;
    }

    meta.profile = spsConfig.profile_string;
    meta.level = spsConfig.level_string;
    meta.bitDepth = spsConfig.bit_depth;
    meta.chromaFormat = spsConfig.chroma_format;

    meta.parRatio = {
      width: spsConfig.par_ratio.width,
      height: spsConfig.par_ratio.height
    };

    meta.frameRate = spsConfig.frame_rate;

    let fpsDen = meta.frameRate.fps_den;
    let fpsNum = meta.frameRate.fps_num;
    meta.refSampleDuration = Math.floor(meta.timescale * (fpsDen / fpsNum));
    return meta;
  }
} /* eslint-disable camelcase  */
/* eslint-disable one-var  */
exports.default = SPSParser;

/***/ }),

/***/ "../xgplayer-demux/index.js":
/*!**********************************!*\
  !*** ../xgplayer-demux/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  // HLS
  M3U8Parser: __webpack_require__(/*! ./src/hls/demuxer/m3u8parser */ "../xgplayer-demux/src/hls/demuxer/m3u8parser.js").default,
  TsDemuxer: __webpack_require__(/*! ./src/hls/demuxer/ts */ "../xgplayer-demux/src/hls/demuxer/ts.js").default,
  Playlist: __webpack_require__(/*! ./src/hls/playlist */ "../xgplayer-demux/src/hls/playlist.js").default,
  FlvDemuxer: __webpack_require__(/*! ./src/flv/index */ "../xgplayer-demux/src/flv/index.js").default
};

/***/ }),

/***/ "../xgplayer-demux/src/flv/amf-parser.js":
/*!***********************************************!*\
  !*** ../xgplayer-demux/src/flv/amf-parser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const DATA_TYPES = {
  NUMBER: 0,
  BOOLEAN: 1,
  STRING: 2,
  OBJECT: 3,
  MIX_ARRAY: 8,
  OBJECT_END: 9,
  STRICT_ARRAY: 10,
  DATE: 11,
  LONE_STRING: 12

  /**
   * meta信息解析
   */
};class AMFParser {
  constructor() {
    this.offset = 0;
    this.readOffset = this.offset;
  }

  resolve(meta, size) {
    if (size < 3) {
      throw new Error('not enough data for metainfo');
    }
    const metaData = {};
    const name = this.parseValue(meta);
    const value = this.parseValue(meta, size - name.bodySize);
    metaData[name.data] = value.data;

    this.resetStatus();
    return metaData;
  }

  resetStatus() {
    this.offset = 0;
    this.readOffset = this.offset;
  }

  parseString(buffer) {
    const dv = new DataView(buffer, this.readOffset);
    const strLen = dv.getUint16(0, !_xgplayerUtils.isLe);
    let str = '';
    if (strLen > 0) {
      str = _xgplayerUtils.UTF8.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
    } else {
      str = '';
    }
    let size = strLen + 2;
    this.readOffset += size;
    return {
      data: str,
      bodySize: strLen + 2
    };
  }

  parseDate(buffer, size) {
    const dv = new DataView(buffer, this.readOffset, size);
    let ts = dv.getFloat64(0, !_xgplayerUtils.isLe);
    const timeOffset = dv.getInt16(8, !_xgplayerUtils.isLe);
    ts += timeOffset * 60 * 1000;

    this.readOffset += 10;
    return {
      data: new Date(ts),
      bodySize: 10
    };
  }

  parseObject(buffer, size) {
    const name = this.parseString(buffer, size);
    const value = this.parseValue(buffer, size - name.bodySize);
    return {
      data: {
        name: name.data,
        value: value.data
      },
      bodySize: name.bodySize + value.bodySize,
      isObjEnd: value.isObjEnd
    };
  }

  parseLongString(buffer) {
    const dv = new DataView(buffer, this.readOffset);
    const strLen = dv.getUint32(0, !_xgplayerUtils.isLe);
    let str = '';
    if (strLen > 0) {
      str = _xgplayerUtils.UTF8.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
    } else {
      str = '';
    }
    // const size = strLen + 4;
    this.readOffset += strLen + 4;
    return {
      data: str,
      bodySize: strLen + 4
    };
  }

  /**
   * 解析meta中的变量
   */
  parseValue(data, size) {
    let buffer = new ArrayBuffer();
    if (data instanceof ArrayBuffer) {
      buffer = data;
    } else {
      buffer = data.buffer;
    }
    const {
      NUMBER,
      BOOLEAN,
      STRING,
      OBJECT,
      MIX_ARRAY,
      OBJECT_END,
      STRICT_ARRAY,
      DATE,
      LONE_STRING
    } = DATA_TYPES;
    const dataView = new DataView(buffer, this.readOffset, size);
    let isObjEnd = false;
    const type = dataView.getUint8(0);
    let offset = 1;
    this.readOffset += 1;
    let value = null;

    switch (type) {
      case NUMBER:
        {
          value = dataView.getFloat64(1, !_xgplayerUtils.isLe);
          this.readOffset += 8;
          offset += 8;
          break;
        }
      case BOOLEAN:
        {
          const boolNum = dataView.getUint8(1);
          value = !!boolNum;
          this.readOffset += 1;
          offset += 1;
          break;
        }
      case STRING:
        {
          const str = this.parseString(buffer);
          value = str.data;
          offset += str.bodySize;
          break;
        }
      case OBJECT:
        {
          value = {};
          let objEndSize = 0;
          if (dataView.getUint32(size - 4, !_xgplayerUtils.isLe) & 0x00FFFFFF) {
            objEndSize = 3;
          }
          // this.readOffset += offset - 1;
          while (offset < size - 4) {
            const amfObj = this.parseObject(buffer, size - offset - objEndSize);
            if (amfObj.isObjectEnd) {
              break;
            }
            value[amfObj.data.name] = amfObj.data.value;
            offset += amfObj.bodySize;
          }
          if (offset <= size - 3) {
            const mark = dataView.getUint32(offset - 1, !_xgplayerUtils.isLe) & 0x00FFFFFF;
            if (mark === 9) {
              this.readOffset += 3;
              offset += 3;
            }
          }
          break;
        }
      case MIX_ARRAY:
        {
          value = {};
          offset += 4;
          this.readOffset += 4;
          let objEndSize = 0;
          if ((dataView.getUint32(size - 4, !_xgplayerUtils.isLe) & 0x00FFFFFF) === 9) {
            objEndSize = 3;
          }

          while (offset < size - 8) {
            const amfVar = this.parseObject(buffer, size - offset - objEndSize);
            if (amfVar.isObjectEnd) {
              break;
            }
            value[amfVar.data.name] = amfVar.data.value;
            offset += amfVar.bodySize;
          }
          if (offset <= size - 3) {
            const marker = dataView.getUint32(offset - 1, !_xgplayerUtils.isLe) & 0x00FFFFFF;
            if (marker === 9) {
              offset += 3;
              this.readOffset += 3;
            }
          }
          break;
        }

      case OBJECT_END:
        {
          value = null;
          isObjEnd = true;
          break;
        }

      case STRICT_ARRAY:
        {
          value = [];
          const arrLength = dataView.getUint32(1, !_xgplayerUtils.isLe);
          offset += 4;
          this.readOffset += 4;
          for (let i = 0; i < arrLength; i++) {
            const script = this.parseValue(buffer, size - offset);
            value.push(script.data);
            offset += script.bodySize;
          }
          break;
        }

      case DATE:
        {
          const date = this.parseDate(buffer, size - 1);
          value = date.data;
          offset += date.bodySize;
          break;
        }

      case LONE_STRING:
        {
          const longStr = this.parseLongString(buffer, size - 1);
          value = longStr.data;
          offset += longStr.bodySize;
          break;
        }

      default:
        {
          offset = size;
        }
    }

    return {
      data: value,
      bodySize: offset,
      isObjEnd: isObjEnd
    };
  }
}
exports.default = AMFParser;

/***/ }),

/***/ "../xgplayer-demux/src/flv/index.js":
/*!******************************************!*\
  !*** ../xgplayer-demux/src/flv/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _amfParser = __webpack_require__(/*! ./amf-parser */ "../xgplayer-demux/src/flv/amf-parser.js");

var _amfParser2 = _interopRequireDefault(_amfParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;

class FlvDemuxer {
  constructor() {
    this._firstFragmentLoaded = false;
    this._trackNum = 0;
    this._hasScript = false;
  }

  init() {
    this.on(DEMUX_EVENTS.DEMUX_START, this.doParseFlv.bind(this));
  }

  /**
   * if the flv head is valid
   * @param data
   * @returns {boolean}
   */
  static isFlvFile(data) {
    return !(data[0] !== 0x46 || data[1] !== 0x4C || data[2] !== 0x56 || data[3] !== 0x01);
  }

  /**
   * If the stream has audio or video.
   * @param {number} streamFlag - Data from the stream which is define whether the audio / video track is exist.
   */
  static getPlayType(streamFlag) {
    const result = {
      hasVideo: false,
      hasAudio: false
    };

    if (streamFlag & 0x01 > 0) {
      result.hasVideo = true;
    }

    if (streamFlag & 0x04 > 0) {
      result.hasAudio = true;
    }

    return result;
  }

  doParseFlv() {
    if (!this._firstFragmentLoaded) {
      if (this.loaderBuffer.length < 13) {
        return;
      }
      const header = this.loaderBuffer.shift(13);
      this.parseFlvHeader(header);
      this.doParseFlv(); // 递归调用，继续解析flv流
    } else {
      if (this.loaderBuffer.length < 11) {
        return;
      }
      let chunk;

      let loopMax = 100000; // 防止死循环产生
      do {
        chunk = this._parseFlvTag();
      } while (chunk && loopMax-- > 0);

      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE);
    }
  }

  parseFlvHeader(header) {
    if (!FlvDemuxer.isFlvFile(header)) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('invalid flv file'));
      this.doParseFlv();
    } else {
      this._firstFragmentLoaded = true;
      const playType = FlvDemuxer.getPlayType(header[4]);

      if (playType.hasVideo) {
        this.initVideoTrack();
      }

      if (playType.hasAudio) {
        this.initAudioTrack();
      }
    }
    this.doParseFlv();
  }

  /**
   * init default video track configs
   */
  initVideoTrack() {
    this._trackNum++;
    let videoTrack = new _xgplayerBuffer.VideoTrack();
    videoTrack.meta = new _xgplayerUtils.VideoTrackMeta();
    videoTrack.id = videoTrack.meta.id = this._trackNum;

    this.tracks.videoTrack = videoTrack;
  }

  /**
   * init default audio track configs
   */
  initAudioTrack() {
    this._trackNum++;
    let audioTrack = new _xgplayerBuffer.AudioTrack();
    audioTrack.meta = new _xgplayerUtils.AudioTrackMeta();
    audioTrack.id = audioTrack.meta.id = this._trackNum;

    this.tracks.audioTrack = audioTrack;
  }

  /**
   * Package the data as the following data structure
   * {
   *    data: Uint8Array. the Stream data.
   *    info: The first byte info of the Tag.
   *    tagType: 8、9、18
   *    timeStamp: the timestemp
   * }
   */
  _parseFlvTag() {
    if (this.loaderBuffer.length < 11) {
      return null;
    }
    let chunk = this._parseFlvTagHeader();
    if (chunk) {
      this._processChunk(chunk);
    }
    return chunk;
  }

  /**
   * Parse the 11 byte tag Header
   */
  _parseFlvTagHeader() {
    let offset = 0;
    let chunk = {};

    let tagType = this.loaderBuffer.toInt(offset, 1);
    offset += 1;

    // 2 bit FMS reserved, 1 bit filtered, 5 bit tag type
    chunk.filtered = (tagType & 32) >>> 5;
    chunk.tagType = tagType & 31;

    // 3 Byte datasize
    chunk.datasize = this.loaderBuffer.toInt(offset, 3);
    offset += 3;

    if (chunk.tagType !== 8 && chunk.tagType !== 9 && chunk.tagType !== 11 && chunk.tagType !== 18 || this.loaderBuffer.toInt(8, 3) !== 0) {
      if (this.loaderBuffer && this.loaderBuffer.length > 0) {
        this.loaderBuffer.shift(1);
      }
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error('tagType ' + chunk.tagType), false);
      return null;
    }

    if (this.loaderBuffer.length < chunk.datasize + 15) {
      return null;
    }

    // read the data.
    this.loaderBuffer.shift(4);

    // 3 Byte timestamp
    let timestamp = this.loaderBuffer.toInt(0, 3);
    this.loaderBuffer.shift(3);

    // 1 Byte timestampExt
    let timestampExt = this.loaderBuffer.shift(1)[0];
    if (timestampExt > 0) {
      timestamp += timestampExt * 0x1000000;
    }

    chunk.dts = timestamp;

    // streamId
    this.loaderBuffer.shift(3);
    return chunk;
  }

  _processChunk(chunk) {
    switch (chunk.tagType) {
      case 18:
        this._parseScriptData(chunk);
        break;
      case 8:
        this._parseAACData(chunk);
        break;
      case 9:
        this._parseHevcData(chunk);
        break;
      case 11:
        // for some CDN that did not process the currect RTMP messages
        this.loaderBuffer.shift(3);
        break;
      default:
        this.loaderBuffer.shift(1);
    }
  }

  /**
   * parse flv script data
   * @param chunk
   * @private
   */
  _parseScriptData(chunk) {
    let audioTrack = this.tracks.audioTrack;
    let videoTrack = this.tracks.videoTrack;

    let data = this.loaderBuffer.shift(chunk.datasize);

    const info = new _amfParser2.default().resolve(data, data.length);

    const onMetaData = this._context.onMetaData = info ? info.onMetaData : undefined;

    // fill mediaInfo
    this._context.mediaInfo.duration = onMetaData.duration;
    this._context.mediaInfo.hasVideo = onMetaData.hasVideo;
    this._context.mediaInfo.hsaAudio = onMetaData.hasAudio;

    let validate = this._datasizeValidator(chunk.datasize);
    if (validate) {
      this.emit(DEMUX_EVENTS.MEDIA_INFO);
      this._hasScript = true;
    }

    // Edit default meta.
    if (audioTrack && !audioTrack.hasSpecificConfig) {
      let meta = audioTrack.meta;
      if (onMetaData.audiosamplerate) {
        meta.sampleRate = onMetaData.audiosamplerate;
      }

      if (onMetaData.audiochannels) {
        meta.channelCount = onMetaData.audiochannels;
      }

      switch (onMetaData.audiosamplerate) {
        case 44100:
          meta.sampleRateIndex = 4;
          break;
        case 22050:
          meta.sampleRateIndex = 7;
          break;
        case 11025:
          meta.sampleRateIndex = 10;
          break;
      }
    }
    if (videoTrack && !videoTrack.hasSpecificConfig) {
      let meta = videoTrack.meta;
      if (typeof onMetaData.framerate === 'number') {
        let fpsNum = Math.floor(onMetaData.framerate * 1000);
        if (fpsNum > 0) {
          let fps = fpsNum / 1000;
          if (!meta.frameRate) {
            meta.frameRate = {};
          }
          meta.frameRate.fixed = true;
          meta.frameRate.fps = fps;
          meta.frameRate.fps_num = fpsNum;
          meta.frameRate.fps_den = 1000;
        }
      }
    }
  }

  _aacSequenceHeaderParser(data) {
    let ret = {};
    ret.hasSpecificConfig = true;
    ret.objectType = data[1] >>> 3;
    ret.sampleRateIndex = (data[1] & 7) << 1 | data[2] >>> 7;
    ret.audiosamplerate = this._switchAudioSampleRate(ret.sampleRateIndex);
    ret.channelCount = (data[2] & 120) >>> 3;
    ret.frameLength = (data[2] & 4) >>> 2;
    ret.dependsOnCoreCoder = (data[2] & 2) >>> 1;
    ret.extensionFlagIndex = data[2] & 1;

    ret.codec = `mp4a.40.${ret.objectType}`;
    let userAgent = window.navigator.userAgent.toLowerCase();
    let extensionSamplingIndex;

    let config;
    let samplingIndex = ret.sampleRateIndex;

    if (userAgent.indexOf('firefox') !== -1) {
      // firefox: use SBR (HE-AAC) if freq less than 24kHz
      if (ret.sampleRateIndex >= 6) {
        ret.objectType = 5;
        config = new Array(4);
        extensionSamplingIndex = samplingIndex - 3;
      } else {
        // use LC-AAC
        ret.objectType = 2;
        config = new Array(2);
        extensionSamplingIndex = samplingIndex;
      }
    } else if (userAgent.indexOf('android') !== -1 || _xgplayerUtils.sniffer.browser === 'safari') {
      // android: always use LC-AAC
      ret.objectType = 2;
      config = new Array(2);
      extensionSamplingIndex = samplingIndex;
    } else {
      // for other browsers, e.g. chrome...
      // Always use HE-AAC to make it easier to switch aac codec profile
      ret.objectType = 5;
      extensionSamplingIndex = ret.sampleRateIndex;
      config = new Array(4);

      if (ret.sampleRateIndex >= 6) {
        extensionSamplingIndex = ret.sampleRateIndex - 3;
      } else if (ret.channelCount === 1) {
        // Mono channel
        ret.objectType = 2;
        config = new Array(2);
        extensionSamplingIndex = ret.sampleRateIndex;
      }
    }

    config[0] = ret.objectType << 3;
    config[0] |= (ret.sampleRateIndex & 0x0F) >>> 1;
    config[1] = (ret.sampleRateIndex & 0x0F) << 7;
    config[1] |= (ret.channelCount & 0x0F) << 3;
    if (ret.objectType === 5) {
      config[1] |= (extensionSamplingIndex & 0x0F) >>> 1;
      config[2] = (extensionSamplingIndex & 0x01) << 7;
      // extended audio object type: force to 2 (LC-AAC)
      config[2] |= 2 << 2;
      config[3] = 0;
    }
    ret.config = config;
    return ret;
  }

  _parseAACData(chunk) {
    let track = this.tracks.audioTrack;
    if (!track) {
      return;
    }

    let meta = track.meta;

    if (!meta) {
      track.meta = new _xgplayerUtils.AudioTrackMeta();
      meta = track.meta;
    }

    let info = this.loaderBuffer.shift(1)[0];

    chunk.data = this.loaderBuffer.shift(chunk.datasize - 1);

    let format = (info & 240) >>> 4;

    track.format = format;

    if (format !== 10) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error(`invalid audio format: ${format}`));
    }

    if (format === 10 && !this._hasAudioSequence) {
      meta.sampleRate = this._switchAudioSamplingFrequency(info);
      meta.sampleRateIndex = (info & 12) >>> 2;
      meta.frameLenth = (info & 2) >>> 1;
      meta.channelCount = info & 1;
      meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);
    }

    let audioSampleRate = meta.audioSampleRate;
    let audioSampleRateIndex = meta.sampleRateIndex;
    let refSampleDuration = meta.refSampleDuration;

    delete chunk.tagType;
    let validate = this._datasizeValidator(chunk.datasize);

    if (chunk.data[0] === 0) {
      // AAC Sequence Header
      let aacHeader = this._aacSequenceHeaderParser(chunk.data);
      audioSampleRate = aacHeader.audiosamplerate || meta.audioSampleRate;
      audioSampleRateIndex = aacHeader.sampleRateIndex || meta.sampleRateIndex;
      refSampleDuration = Math.floor(1024 / audioSampleRate * meta.timescale);

      meta.channelCount = aacHeader.channelCount;
      meta.sampleRate = audioSampleRate;
      meta.sampleRateIndex = audioSampleRateIndex;
      meta.refSampleDuration = refSampleDuration;
      meta.duration = this._context.mediaInfo.duration * meta.timescale;
      meta.config = aacHeader.config;
      meta.objectType = aacHeader.objectType;

      const audioMedia = this._context.mediaInfo.audio;

      // fill audio media info
      audioMedia.codec = aacHeader.codec;
      audioMedia.channelCount = aacHeader.channelCount;
      audioMedia.sampleRate = audioSampleRate;
      audioMedia.sampleRateIndex = aacHeader.audioSampleRateIndex;

      if (this._hasScript && !this._hasAudioSequence) {
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
      } else if (this._hasScript && this._hasAudioSequence) {
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
        this.emit(DEMUX_EVENTS.AUDIO_METADATA_CHANGE);
        // this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio')
      }
      this._hasAudioSequence = true;

      this._metaChange = true;
    } else {
      if (this._metaChange) {
        chunk.options = {
          meta: track.meta
        };
        this._metaChange = false;
      }

      chunk.data = chunk.data.slice(1, chunk.data.length);
      track.samples.push(chunk);
    }
    if (!validate) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error('TAG length error at ' + chunk.datasize), false);
      // this.logger.warn(this.TAG, error.message)
    }
  }

  /**
   * parse hevc/avc video data
   * @param chunk
   * @private
   */
  _parseHevcData(chunk) {
    // header
    let info = this.loaderBuffer.shift(1)[0];
    chunk.frameType = (info & 0xf0) >>> 4;
    chunk.isKeyframe = chunk.frameType === 1;
    // let tempCodecID = this.tracks.videoTrack.codecID
    let codecID = info & 0x0f;
    this.tracks.videoTrack.codecID = codecID;

    // hevc和avc的header解析方式一样
    chunk.avcPacketType = this.loaderBuffer.shift(1)[0];
    chunk.cts = this.loaderBuffer.toInt(0, 3);
    this.loaderBuffer.shift(3);

    // 12 for hevc, 7 for avc
    if (codecID === 12) {
      const data = this.loaderBuffer.shift(chunk.datasize - 5);
      chunk.data = data;

      if (Number.parseInt(chunk.avcPacketType) !== 0) {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
        }
        let nalu = {};
        let r = 0;
        nalu.cts = chunk.cts;
        nalu.dts = chunk.dts;
        while (chunk.data.length > r) {
          let sizes = chunk.data.slice(Number.parseInt(r), 4 + r);
          nalu.size = sizes[3];
          nalu.size += sizes[2] * 256;
          nalu.size += sizes[1] * 256 * 256;
          nalu.size += sizes[0] * 256 * 256 * 256;
          r += 4;
          nalu.data = chunk.data.slice(Number.parseInt(r), nalu.size + r);
          r += nalu.size;
          this.tracks.videoTrack.samples.push(nalu);
          this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
        }
      } else if (Number.parseInt(chunk.avcPacketType) === 0) {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
        } else {
          this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
        }
      }
    } else if (codecID === 7) {
      let data = this.loaderBuffer.shift(chunk.datasize - 5);
      if (data[4] === 0 && data[5] === 0 && data[6] === 0 && data[7] === 1) {
        let avcclength = 0;
        for (let i = 0; i < 4; i++) {
          avcclength = avcclength * 256 + data[i];
        }
        avcclength -= 4;
        data = data.slice(4, data.length);
        data[3] = avcclength % 256;
        avcclength = (avcclength - data[3]) / 256;
        data[2] = avcclength % 256;
        avcclength = (avcclength - data[2]) / 256;
        data[1] = avcclength % 256;
        data[0] = (avcclength - data[1]) / 256;
      }

      chunk.data = data;
      // If it is AVC sequece Header.
      if (chunk.avcPacketType === 0) {
        this._avcSequenceHeaderParser(chunk.data);
        let validate = this._datasizeValidator(chunk.datasize);
        if (validate) {
          if (this._hasScript && !this._hasVideoSequence) {
            this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
          } else if (this._hasScript && this._hasVideoSequence) {
            this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
            this.emit(DEMUX_EVENTS.VIDEO_METADATA_CHANGE);
            // this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video')
          }
          this._hasVideoSequence = true;
        }
        this._metaChange = true;
      } else {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
          return;
        }
        if (this._metaChange) {
          chunk.options = {
            meta: Object.assign({}, this.tracks.videoTrack.meta)
          };
          this._metaChange = false;
        }
        this.tracks.videoTrack.samples.push(chunk);
        // this.emit(DEMUX_EVENTS.DEMUX_COMPLETE)
      }
    } else {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`video codeid is ${codecID}`), false);
      chunk.data = this.loaderBuffer.shift(chunk.datasize - 1);
      if (!this._datasizeValidator(chunk.datasize)) {
        this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
      }
      this.tracks.videoTrack.samples.push(chunk);
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE);
    }
    delete chunk.tagType;
  }

  /**
   * parse avc metadata
   * @param data
   * @private
   */
  _avcSequenceHeaderParser(data) {
    let track = this.tracks.videoTrack;

    if (!track) {
      return;
    }

    let offset = 0;

    if (!track.meta) {
      track.meta = new _xgplayerUtils.VideoTrackMeta();
    }
    let meta = track.meta;

    meta.configurationVersion = data[0];
    meta.avcProfileIndication = data[1];
    meta.profileCompatibility = data[2];
    meta.avcLevelIndication = data[3] / 10;
    meta.nalUnitLength = (data[4] & 0x03) + 1;

    let numOfSps = data[5] & 0x1f;
    offset = 6;
    let config = {};

    // parse SPS
    for (let i = 0; i < numOfSps; i++) {
      let size = data[offset] * 255 + data[offset + 1];
      offset += 2;

      let sps = new Uint8Array(size);
      for (let j = 0; j < size; j++) {
        sps[j] = data[offset + j];
      }

      // codec string
      let codecString = 'avc1.';
      for (let j = 1; j < 4; j++) {
        let h = sps[j].toString(16);
        if (h.length < 2) {
          h = '0' + h;
        }
        codecString += h;
      }

      meta.codec = codecString;

      offset += size;
      this.tracks.videoTrack.meta.sps = sps;
      config = _xgplayerCodec.SpsParser.parseSPS(sps);
    }

    let numOfPps = data[offset];

    offset++;

    for (let i = 0; i < numOfPps; i++) {
      let size = data[offset] * 255 + data[offset + 1];
      offset += 2;
      let pps = new Uint8Array(size);
      for (let j = 0; j < size; j++) {
        pps[j] = data[offset + j];
      }
      offset += size;
      this.tracks.videoTrack.meta.pps = pps;
    }

    Object.assign(meta, _xgplayerCodec.SpsParser.toVideoMeta(config));

    // fill video media info
    const videoMedia = this._context.mediaInfo.video;

    videoMedia.codec = meta.codec;
    videoMedia.profile = meta.profile;
    videoMedia.level = meta.level;
    videoMedia.chromaFormat = meta.chromaFormat;
    videoMedia.frameRate = meta.frameRate;
    videoMedia.parRatio = meta.parRatio;
    videoMedia.width = videoMedia.width === meta.presentWidth ? videoMedia.width : meta.presentWidth;
    videoMedia.height = videoMedia.height === meta.presentHeight ? videoMedia.width : meta.presentHeight;

    meta.duration = this._context.mediaInfo.duration * meta.timescale;
    meta.avcc = new Uint8Array(data.length);
    meta.avcc.set(data);
    track.meta = meta;
  }

  /**
   * choose audio sample rate
   * @param samplingFrequencyIndex
   * @returns {number}
   * @private
   */
  _switchAudioSampleRate(samplingFrequencyIndex) {
    let samplingFrequencyList = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
    return samplingFrequencyList[samplingFrequencyIndex];
  }

  /**
   * choose audio sampling frequence
   * @param info
   * @returns {number}
   * @private
   */
  _switchAudioSamplingFrequency(info) {
    let samplingFrequencyIndex = (info & 12) >>> 2;
    let samplingFrequencyList = [5500, 11025, 22050, 44100, 48000];
    return samplingFrequencyList[samplingFrequencyIndex];
  }

  /**
   * choose audio channel count
   * @param info
   * @returns {number}
   * @private
   */
  _switchAudioChannel(info) {
    let sampleTrackNumIndex = info & 1;
    let sampleTrackNumList = [1, 2];
    return sampleTrackNumList[sampleTrackNumIndex];
  }

  /**
   * check datasize is valid use 4 Byte after current tag
   * @param datasize
   * @returns {boolean}
   * @private
   */
  _datasizeValidator(datasize) {
    let datasizeConfirm = this.loaderBuffer.toInt(0, 4);
    this.loaderBuffer.shift(4);
    return datasizeConfirm === datasize + 11;
  }

  get loaderBuffer() {
    const buffer = this._context.getInstance('LOADER_BUFFER');
    if (buffer) {
      return buffer;
    } else {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('找不到 loaderBuffer 实例'));
    }
  }

  get tracks() {
    return this._context.getInstance('TRACKS');
  }

  get logger() {
    return this._context.getInstance('LOGGER');
  }
}

exports.default = FlvDemuxer;

/***/ }),

/***/ "../xgplayer-demux/src/hls/demuxer/m3u8parser.js":
/*!*******************************************************!*\
  !*** ../xgplayer-demux/src/hls/demuxer/m3u8parser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Reference: https://tools.ietf.org/html/rfc8216#section-4.3
 */
class M3U8Parser {
  static parse(text, baseurl = '') {
    let ret = {
      duration: 0
    };
    if (!text || !text.split) {
      return;
    }
    let refs = text.split(/\r|\n/);
    refs = refs.filter(ref => {
      return ref;
    });
    let ref = refs.shift();
    if (!ref.match('#EXTM3U')) {
      throw new Error(`Invalid m3u8 file: not "#EXTM3U"`);
      return null;
    }
    ref = refs.shift();
    while (ref) {
      let refm = ref.match(/#(.[A-Z|-]*):(.*)/);
      let refd = ref.match(/#(.[A-Z|-]*)/);
      if (refd && refm && refm.length > 2) {
        switch (refm[1]) {
          case 'EXT-X-VERSION':
            ret.version = parseInt(refm[2]);
            break;
          case 'EXT-X-MEDIA-SEQUENCE':
            ret.sequence = parseInt(refm[2]);
            break;
          case 'EXT-X-TARGETDURATION':
            ret.targetduration = parseFloat(refm[2]);
            break;
          case 'EXTINF':
            M3U8Parser.parseFrag(refm, refs, ret, baseurl);
            break;
          case 'EXT-X-KEY':
            M3U8Parser.parseDecrypt(refm[2], ret);
            break;
          default:
            break;
        }
      }if (refd && refd.length > 1) {
        switch (refd[1]) {
          case 'EXT-X-DISCONTINUITY':
            ref = refs.shift();
            let refm = ref.match(/#(.[A-Z|-]*):(.*)/);
            if (refm.length > 2 && refm[1] === 'EXTINF') {
              M3U8Parser.parseFrag(refm, refs, ret, baseurl, true);
            }
            break;
          default:
            break;
        }
      }
      ref = refs.shift();
    }
    return ret;
  }

  static parseFrag(refm, refs, ret, baseurl, discontinue) {
    if (!ret.frags) {
      ret.frags = [];
    }

    let freg = {
      start: ret.duration,
      duration: parseFloat(refm[2]) * 1000
    };

    ret.duration += freg.duration;
    let nextline = refs.shift();
    if (nextline.match(/#(.*):(.*)/)) {
      nextline = refs.shift();
    }
    if (nextline.length > 0 && nextline.charAt(0) === '/' && baseurl.match(/.*\/\/.*\.\w+/g)) {
      baseurl = baseurl.match(/.*\/\/.*\.\w+/g)[0];
    }
    if (nextline.match(/.*:\/\/.*/)) {
      freg.url = nextline;
    } else {
      freg.url = baseurl + nextline;
    }
    freg.discontinue = discontinue;
    ret.frags.push(freg);
  }

  static parseURL(url) {
    let baseurl = '';
    let urls = url.match(/(.*\/).*\.m3u8/);
    if (urls && urls.length > 0) {
      for (let i = 0; i < urls.length; i++) {
        if (urls[i].match(/.*\/$/g) && urls[i].length > baseurl.length) {
          baseurl = urls[i];
        }
      }
    }
    return baseurl;
  }

  static parseDecrypt(refm, ret) {
    ret.encrypt = {};
    let refs = refm.split(',');
    for (let i in refs) {
      let cmd = refs[i];
      if (cmd.match(/METHOD=(.*)/)) {
        ret.encrypt.method = cmd.match(/METHOD=(.*)/)[1];
      }
      if (cmd.match(/URI="(.*)"/)) {
        ret.encrypt.uri = cmd.match(/URI="(.*)"/)[1];
      }

      if (cmd.match(/IV=0x(.*)/)) {
        let iv = cmd.match(/IV=0x(.*)/)[1];
        let length = Math.ceil(iv.length / 2);
        ret.encrypt.ivb = new Uint8Array(length);
        for (let i = length - 1; i >= 0; i--) {
          let im = parseInt(iv.substr(i * 2, 2), 16);
          ret.encrypt.ivb[i] = im;
        }
        ret.encrypt.iv = iv;
      }
    };
  }
}

exports.default = M3U8Parser;

/***/ }),

/***/ "../xgplayer-demux/src/hls/demuxer/ts.js":
/*!***********************************************!*\
  !*** ../xgplayer-demux/src/hls/demuxer/ts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;
const StreamType = {
  0x01: ['video', 'MPEG-1'],
  0x02: ['video', 'MPEG-2'],
  0x1b: ['video', 'AVC.H264'],
  0xea: ['video', 'VC-1'],
  0x03: ['audio', 'MPEG-1'],
  0x04: ['audio', 'MPEG-2'],
  0x0f: ['audio', 'MPEG-2.AAC'],
  0x11: ['audio', 'MPEG-4.AAC'],
  0x80: ['audio', 'LPCM'],
  0x81: ['audio', 'AC3'],
  0x06: ['audio', 'AC3'],
  0x82: ['audio', 'DTS'],
  0x83: ['audio', 'Dolby TrueHD'],
  0x84: ['audio', 'AC3-Plus'],
  0x85: ['audio', 'DTS-HD'],
  0x86: ['audio', 'DTS-MA'],
  0xa1: ['audio', 'AC3-Plus-SEC'],
  0xa2: ['audio', 'DTS-HD-SEC']
};

class TsDemuxer {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.demuxing = false;
    this.pat = [];
    this.pmt = [];
    this._hasVideoMeta = false;
    this._hasAudioMeta = false;
  }

  init() {
    this.on(DEMUX_EVENTS.DEMUX_START, this.demux.bind(this));
  }

  demux(frag) {
    if (this.demuxing) {
      return;
    }

    let buffer = this.inputBuffer;
    let frags = { pat: [], pmt: [] };
    let peses = {};

    // Read TS segment
    while (buffer.length >= 188) {
      if (buffer.length >= 1 && buffer.array[0][buffer.offset] !== 71) {
        this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`Untrust sync code: ${buffer.array[0][buffer.offset]}, try to recover;`), false);
      }
      while (buffer.length >= 1 && buffer.array[0][buffer.offset] !== 71) {
        buffer.shift(1);
      }
      let buf = buffer.shift(188);
      // console.log(buf);
      let tsStream = new _xgplayerUtils.Stream(buf.buffer);
      let ts = {};
      TsDemuxer.read(tsStream, ts, frags);
      if (ts.pes) {
        if (!peses[ts.header.pid]) {
          peses[ts.header.pid] = [];
        }
        peses[ts.header.pid].push(ts.pes);
        ts.pes.ES.buffer = [ts.pes.ES.buffer];
      } else if (peses[ts.header.pid]) {
        peses[ts.header.pid][peses[ts.header.pid].length - 1].ES.buffer.push(ts.payload.stream);
      }
    }

    let AudioOptions = frag;
    let VideoOptions = frag;

    // Get Frames data
    for (let i = 0; i < Object.keys(peses).length; i++) {
      let epeses = peses[Object.keys(peses)[i]];
      for (let j = 0; j < epeses.length; j++) {
        epeses[j].id = Object.keys(peses)[i];
        epeses[j].ES.buffer = TsDemuxer.Merge(epeses[j].ES.buffer);
        if (epeses[j].type === 'audio') {
          this.pushAudioSample(epeses[j], AudioOptions);
          AudioOptions = {};
        } else if (epeses[j].type === 'video') {
          this.pushVideoSample(epeses[j], VideoOptions);
          VideoOptions = {};
        }
      }
    }

    if (this._hasAudioMeta) {
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE, 'audio');
    }
    if (this._hasVideoMeta) {
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE, 'video');
    }
  }

  pushAudioSample(pes, options) {
    let track;
    if (!this._tracks.audioTrack) {
      this._tracks.audioTrack = new _xgplayerBuffer.AudioTrack();
      track = this._tracks.audioTrack;
    } else {
      track = this._tracks.audioTrack;
    }
    let meta = new _xgplayerUtils.AudioTrackMeta({
      audioSampleRate: pes.ES.frequence,
      sampleRate: pes.ES.frequence,
      channelCount: pes.ES.channel,
      codec: 'mp4a.40.' + pes.ES.audioObjectType,
      config: pes.ES.audioConfig,
      id: 2,
      sampleRateIndex: pes.ES.frequencyIndex
    });
    meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);

    let metaEqual = TsDemuxer.compaireMeta(track.meta, meta, true);

    if (!this._hasAudioMeta || !metaEqual) {
      track.meta = meta;
      this._hasAudioMeta = true;
      this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
    }

    let data = new Uint8Array(pes.ES.buffer.buffer.slice(pes.ES.buffer.position, pes.ES.buffer.length));
    let dts = parseInt(pes.pts / 90);
    let pts = parseInt(pes.pts / 90);
    let sample = new _xgplayerUtils.AudioTrackSample({ dts, pts, data, options });
    track.samples.push(sample);
  }

  pushVideoSample(pes, options) {
    let nals = _xgplayerCodec.Nalunit.getNalunits(pes.ES.buffer);
    let track;
    let meta = new _xgplayerUtils.VideoTrackMeta();
    if (!this._tracks.videoTrack) {
      this._tracks.videoTrack = new _xgplayerBuffer.VideoTrack();
      track = this._tracks.videoTrack;
    } else {
      track = this._tracks.videoTrack;
    }
    let sampleLength = 0;
    let sps = false;
    let pps = false;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      if (nal.sps) {
        sps = nal;
        track.sps = nal.body;
        meta.chromaFormat = sps.sps.chroma_format;
        meta.codec = 'avc1.';
        for (var j = 1; j < 4; j++) {
          var h = sps.body[j].toString(16);
          if (h.length < 2) {
            h = '0' + h;
          }
          meta.codec += h;
        }
        meta.codecHeight = sps.sps.codec_size.height;
        meta.codecWidth = sps.sps.codec_size.width;
        meta.frameRate = sps.sps.frame_rate;
        meta.id = 1;
        meta.level = sps.sps.level_string;
        meta.presentHeight = sps.sps.present_size.height;
        meta.presentWidth = sps.sps.present_size.width;
        meta.profile = sps.sps.profile_string;
        meta.refSampleDuration = Math.floor(meta.timescale * (sps.sps.frame_rate.fps_den / sps.sps.frame_rate.fps_num));
        meta.sarRatio = sps.sps.sar_ratio ? sps.sps.sar_ratio : sps.sps.par_ratio;
      } else if (nal.pps) {
        track.pps = nal.body;
        pps = nal;
      } else {
        sampleLength += 4 + nal.body.byteLength;
      }
    }

    if (sps && pps) {
      meta.avcc = _xgplayerCodec.Nalunit.getAvcc(sps.body, pps.body);
      let metaEqual = TsDemuxer.compaireMeta(track.meta, meta, true);
      if (!this._hasVideoMeta || !metaEqual) {
        if (options) {
          options.meta = Object.assign({}, meta);
        } else {
          options = {
            meta: Object.assign({}, meta)
          };
        }
        track.meta = meta;
        this._hasVideoMeta = true;
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
      }
    }

    let data = new Uint8Array(sampleLength);
    let offset = 0;
    let isKeyframe = false;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      let length = nal.body.byteLength;
      if (nal.idr) {
        isKeyframe = true;
      }
      if (!nal.pps && !nal.sps) {
        data.set(new Uint8Array([length >>> 24 & 0xff, length >>> 16 & 0xff, length >>> 8 & 0xff, length & 0xff]), offset);
        offset += 4;
        data.set(nal.body, offset);
        offset += length;
      }
    }
    let sample = new _xgplayerUtils.VideoTrackSample({
      dts: parseInt(pes.dts / 90),
      pts: parseInt(pes.pts / 90),
      cts: (pes.pts - pes.dts) / 90,
      originDts: pes.dts,
      isKeyframe,
      data,
      options
    });
    track.samples.push(sample);
  }

  destory() {
    this.off(DEMUX_EVENTS.DEMUX_START, this.demux);
    this.configs = {};
    this.demuxing = false;
    this.pat = [];
    this.pmt = [];
    this._hasVideoMeta = false;
    this._hasAudioMeta = false;
  }

  static compaireArray(a, b, type) {
    let al = 0;
    let bl = 0;
    if (type === 'Uint8Array') {
      al = a.byteLength;
      bl = b.byteLength;
    } else if (type === 'Array') {
      al = a.length;
      bl = b.length;
    }
    if (al !== bl) {
      return false;
    }

    for (let i = 0; i < al; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  static compaireMeta(a, b, ignoreDuration) {
    if (!a || !b) {
      return false;
    }

    for (let i = 0, k = Object.keys(a).length; i < k; i++) {
      let itema = a[Object.keys(a)[i]];
      let itemb = b[Object.keys(a)[i]];
      if (typeof itema !== 'object') {
        if (ignoreDuration && Object.keys(a)[i] !== 'duration' && Object.keys(a)[i] !== 'refSampleDuration' && Object.keys(a)[i] !== 'refSampleDurationFixed' && itema !== itemb) {
          return false;
        }
      } else if (itema.byteLength !== undefined) {
        if (itemb.byteLength === undefined) {
          return false;
        }
        if (!TsDemuxer.compaireArray(itema, itemb, 'Uint8Array')) {
          return false;
        }
      } else if (itema.length !== undefined) {
        if (itemb.length === undefined) {
          return false;
        }
        if (!TsDemuxer.compaireArray(itema, itemb, 'Array')) {
          return false;
        }
      } else {
        if (!TsDemuxer.compaireMeta(itema, itemb)) {
          return false;
        }
      }
    }
    return true;
  }

  static Merge(buffers) {
    let data;
    let length = 0;
    let offset = 0;
    for (let i = 0; i < buffers.length; i++) {
      length += buffers[i].length - buffers[i].position;
    }

    data = new Uint8Array(length);
    for (let i = 0; i < buffers.length; i++) {
      let buffer = buffers[i];
      data.set(new Uint8Array(buffer.buffer, buffer.position), offset);
      offset += buffer.length - buffer.position;
    }
    return new _xgplayerUtils.Stream(data.buffer);
  }

  static read(stream, ts, frags) {
    TsDemuxer.readHeader(stream, ts);
    TsDemuxer.readPayload(stream, ts, frags);
    if (ts.header.packet === 'MEDIA' && ts.header.payload === 1 && !ts.unknownPIDs) {
      ts.pes = TsDemuxer.PES(ts);
    }
  }

  static readPayload(stream, ts, frags) {
    let header = ts.header;
    let pid = header.pid;
    switch (pid) {
      case 0:
        TsDemuxer.PAT(stream, ts, frags);
        break;
      case 1:
        TsDemuxer.CAT(stream, ts, frags);
        break;
      case 2:
        TsDemuxer.TSDT(stream, ts, frags);
        break;
      case 0x1fff:
        break;
      default:
        // TODO: some的写法不太好，得改
        if (frags.pat.some(item => {
          return item.pid === pid;
        })) {
          TsDemuxer.PMT(stream, ts, frags);
        } else {
          let sts = frags.pmt ? frags.pmt.filter(item => item.pid === pid) : [];
          if (sts.length > 0) {
            TsDemuxer.Media(stream, ts, StreamType[sts[0].streamType][0]);
          } else {
            ts.unknownPIDs = true;
          };
        }
    }
  }

  static readHeader(stream, ts) {
    let header = {};
    header.sync = stream.readUint8();
    let next = stream.readUint16();
    header.error = next >>> 15;
    header.payload = next >>> 14 & 1;
    header.priority = next >>> 13 & 1;
    header.pid = next & 0x1fff;

    next = stream.readUint8();

    header.scrambling = next >> 6 & 0x3; // 是否加密，00表示不加密

    /**
     * 00 ISO/IEC未来使用保留
     * 01 没有调整字段，仅含有184B有效净荷
     * 02 没有有效净荷，仅含有183B调整字段
     * 03 0~182B调整字段后为有效净荷
     */
    header.adaptation = next >> 4 & 0x3;
    header.continuity = next & 15;
    header.packet = header.pid === 0 ? 'PAT' : 'MEDIA';
    ts.header = header;
  }

  static PAT(stream, ts, frags) {
    let ret = {};
    let next = stream.readUint8();
    stream.skip(next);
    next = stream.readUint8();
    ret.tabelID = next;
    next = stream.readUint16();
    ret.error = next >>> 7;
    ret.zero = next >>> 6 & 1;
    ret.sectionLength = next & 0xfff;
    ret.streamID = stream.readUint16();
    ret.current = stream.readUint8() & 1;
    ret.sectionNumber = stream.readUint8();
    ret.lastSectionNumber = stream.readUint8();
    let N = (ret.sectionLength - 9) / 4;
    let list = [];
    for (let i = 0; i < N; i++) {
      let programNumber = stream.readUint16();
      let pid = stream.readUint16() & 0x1fff;
      list.push({
        program: programNumber,
        pid,
        type: programNumber === 0 ? 'network' : 'mapPID'
      });
    }
    if (list.length > 0) {
      frags.pat = frags.pat.concat(list);
    }
    ret.list = list;
    ret.program = stream.readUint16();
    ret.pid = stream.readUint16() & 0x1fff;
    ts.payload = ret;
    // TODO CRC
  }

  static PMT(stream, ts, frags) {
    let ret = {};
    let header = ts.header;
    header.packet = 'PMT';
    let next = stream.readUint8();
    stream.skip(next);
    next = stream.readUint8();
    ret.tableID = next;
    next = stream.readUint16();
    ret.sectionLength = next & 0xfff;
    ret.program = stream.readUint16();
    ret.current = stream.readUint8() & 1;
    ret.order = stream.readUint8();
    ret.lastOrder = stream.readUint8();
    ret.PCR_PID = stream.readUint16() & 0x1fff;
    ret.programLength = stream.readUint16() & 0xfff;
    let N = (ret.sectionLength - 13) / 5;
    let list = [];
    for (let i = 0; i < N; i++) {
      list.push({
        streamType: stream.readUint8(),
        pid: stream.readUint16() & 0x1fff, // 0x07e5 视频，0x07e6
        es: stream.readUint16() & 0xfff
      });
    }
    ret.list = list;
    if (!this.pmt) {
      this.pmt = [];
    }
    frags.pmt = this.pmt.concat(list.map(item => {
      return {
        pid: item.pid,
        es: item.es,
        streamType: item.streamType,
        program: ret.program
      };
    }));
    ts.payload = ret;
  }

  static Media(stream, ts, type) {
    let header = ts.header;
    let payload = {};
    header.type = type;
    if (header.adaptation === 0x03) {
      payload.adaptationLength = stream.readUint8();
      if (payload.adaptationLength > 0) {
        let next = stream.readUint8();
        payload.discontinue = next >>> 7;
        payload.access = next >>> 6 & 0x01;
        payload.priority = next >>> 5 & 0x01;
        payload.PCR = next >>> 4 & 0x01;
        payload.OPCR = next >>> 3 & 0x01;
        payload.splicePoint = next >>> 2 & 0x01;
        payload.transportPrivate = next >>> 1 & 0x01;
        payload.adaptationField = next & 0x01;
        let _start = stream.position;
        if (payload.PCR === 1) {
          payload.programClockBase = stream.readUint32() << 1;
          next = stream.readUint16();
          payload.programClockBase |= next >>> 15;
          payload.programClockExtension = next & 0x1ff;
        }
        if (payload.OPCR === 1) {
          payload.originProgramClockBase = stream.readUint32() << 1;
          next = stream.readUint16();
          payload.originProgramClockBase += next >>> 15;
          payload.originProgramClockExtension = next & 0x1ff;
        }
        if (payload.splicePoint === 1) {
          payload.spliceCountdown = stream.readUint8();
        }
        if (payload.transportPrivate === 1) {
          let length = stream.readUint8();
          let transportPrivateData = [];
          for (let i = 0; i < length; i++) {
            transportPrivateData.push(stream.readUint8());
          }
        }
        if (payload.adaptationField === 1) {
          let length = stream.readUint8();
          let next = stream.readUint8();
          let start = stream.position;
          let ltw = next >>> 7;
          let piecewise = next >>> 6 & 0x1;
          let seamless = next >>> 5 & 0x1;
          if (ltw === 1) {
            next = stream.readUint16();
            payload.ltwValid = next >>> 15;
            payload.ltwOffset = next & 0xefff;
          }
          if (piecewise === 1) {
            next = stream.readUint24();
            payload.piecewiseRate = next & 0x3fffff;
          }
          if (seamless === 1) {
            next = stream.readInt8();
            payload.spliceType = next >>> 4;
            payload.dtsNextAU1 = next >>> 1 & 0x7;
            payload.marker1 = next & 0x1;
            next = stream.readUint16();
            payload.dtsNextAU2 = next >>> 1;
            payload.marker2 = next & 0x1;
            next = stream.readUint16();
            payload.dtsNextAU3 = next;
          }
          stream.skip(length - 1 - (stream.position - start));
        }
        let lastStuffing = payload.adaptationLength - 1 - (stream.position - _start);
        stream.skip(lastStuffing);
      }
    }
    payload.stream = new _xgplayerUtils.Stream(stream.buffer.slice(stream.position));
    ts.payload = payload;
  }

  static PES(ts) {
    let ret = {};
    let buffer = ts.payload.stream;

    let next = buffer.readUint24();
    if (next !== 1) {
      ret.ES = {};
      ret.ES.buffer = buffer;
    } else {
      let streamID = buffer.readUint8();
      if (streamID >= 0xe0 && streamID <= 0xef) {
        ret.type = 'video';
      }
      if (streamID >= 0xc0 && streamID <= 0xdf) {
        ret.type = 'audio';
      }
      let packetLength = buffer.readUint16();
      ret.packetLength = packetLength;
      if (ret.type === 'video' || ret.type === 'audio') {
        let next = buffer.readUint8();
        let first = next >>> 6;
        if (first !== 0x02) {
          throw new Error('error when parse pes header');
        }
        next = buffer.readUint8();
        ret.ptsDTSFlag = next >>> 6;
        ret.escrFlag = next >>> 5 & 0x01;
        ret.esRateFlag = next >>> 4 & 0x01;
        ret.dsmFlag = next >>> 3 & 0x01;
        ret.additionalFlag = next >>> 2 & 0x01;
        ret.crcFlag = next >>> 1 & 0x01;
        ret.extensionFlag = next & 0x01;
        ret.pesHeaderLength = buffer.readUint8();
        let N1 = ret.pesHeaderLength;

        if (ret.ptsDTSFlag === 2) {
          let pts = [];
          next = buffer.readUint8();
          pts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          ret.pts = pts[0] << 30 | pts[1] << 15 | pts[2];
          N1 -= 5;
          // 视频如果没有dts用pts
          if (ret.type === 'video') {
            ret.dts = ret.pts;
          }
        }
        if (ret.ptsDTSFlag === 3) {
          let pts = [];
          next = buffer.readUint8();
          pts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          ret.pts = pts[0] << 30 | pts[1] << 15 | pts[2];
          let dts = [];
          next = buffer.readUint8();
          dts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          dts.push(next >>> 1);
          next = buffer.readUint16();
          dts.push(next >>> 1);
          ret.dts = dts[0] << 30 | dts[1] << 15 | dts[2];
          N1 -= 10;
        }
        if (ret.escrFlag === 1) {
          let escr = [];
          let ex = [];
          next = buffer.readUint8();
          escr.push(next >>> 3 & 0x07);
          escr.push(next & 0x03);
          next = buffer.readUint16();
          escr.push(next >>> 13);
          escr.push(next & 0x03);
          next = buffer.readUint16();
          escr.push(next >>> 13);
          ex.push(next & 0x03);
          next = buffer.readUint8();
          ex.push(next >>> 1);
          ret.escr = (escr[0] << 30 | escr[1] << 28 | escr[2] << 15 | escr[3] << 13 | escr[4]) * 300 + (ex[0] << 7 | ex[1]);
          N1 -= 6;
        }
        if (ret.esRateFlag === 1) {
          next = buffer.readUint24();
          ret.esRate = next >>> 1 & 0x3fffff;
          N1 -= 3;
        }
        if (ret.dsmFlag === 1) {
          throw new Error('not support DSM_trick_mode');
        }
        if (ret.additionalFlag === 1) {
          next = buffer.readUint8();
          ret.additionalCopyInfo = next & 0x7f;
          N1 -= 1;
        }
        if (ret.crcFlag === 1) {
          ret.pesCRC = buffer.readUint16();
          N1 -= 2;
        }
        if (ret.extensionFlag === 1) {
          throw new Error('not support extension');
        }
        if (N1 > 0) {
          buffer.skip(N1);
        }
        ret.ES = TsDemuxer.ES(buffer, ret.type);
      } else {
        throw new Error('format is not supported');
      }
    }
    return ret;
  }

  static ES(buffer, type) {
    let next;
    let ret = {};
    if (type === 'video') {
      next = buffer.readUint32();
      if (next !== 1) {
        buffer.back(4);
        next = buffer.readUint24();
        if (next !== 1) {
          throw new Error('h264 nal header parse failed');
        }
      }
      buffer.skip(2); // 09 F0
      // TODO readnalu
      ret.buffer = buffer;
    } else if (type === 'audio') {
      next = buffer.readUint16();
      // adts的同步字节，12位
      if (next >>> 4 !== 0xfff) {
        throw new Error('aac ES parse Error');
      }
      const fq = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
      ret.id = (next >>> 3 & 0x01) === 0 ? 'MPEG-4' : 'MPEG-2';
      ret.layer = next >>> 1 & 0x03;
      ret.absent = next & 0x01;
      next = buffer.readUint16();
      ret.audioObjectType = (next >>> 14 & 0x03) + 1;
      ret.profile = ret.audioObjectType - 1;
      ret.frequencyIndex = next >>> 10 & 0x0f;
      ret.frequence = fq[ret.frequencyIndex];
      ret.channel = next >>> 6 & 0x07;
      ret.frameLength = (next & 0x03) << 11 | buffer.readUint16() >>> 5;
      TsDemuxer.getAudioConfig(ret);
      buffer.skip(1);
      ret.buffer = buffer;
    } else {
      throw new Error(`ES ${type} is not supported`);
    }

    return ret;
  }

  static TSDT(stream, ts, frags) {
    // TODO
    ts.payload = {};
  }

  static CAT(stream, ts, frags) {
    let ret = {};
    ret.tableID = stream.readUint8();
    let next = stream.readUint16();
    ret.sectionIndicator = next >>> 7;
    ret.sectionLength = next & 0x0fff;
    stream.skip(2);
    next = stream.readUint8();
    ret.version = next >>> 3;
    ret.currentNextIndicator = next & 0x01;
    ret.sectionNumber = stream.readUint8();
    ret.lastSectionNumber = stream.readUint8();
    let N = (this.sectionLength - 9) / 4;
    let list = [];
    for (let i = 0; i < N; i++) {
      list.push({});
    }
    ret.crc32 = stream.readUint32();
    ts.payload = ret;
  }

  static getAudioConfig(ret) {
    let userAgent = navigator.userAgent.toLowerCase();
    let config;
    let extensionSampleIndex;
    if (/firefox/i.test(userAgent)) {
      if (ret.frequencyIndex >= 6) {
        ret.audioObjectType = 5;
        config = new Array(4);
        extensionSampleIndex = ret.frequencyIndex - 3;
      } else {
        ret.audioObjectType = 2;
        config = new Array(2);
        extensionSampleIndex = ret.frequencyIndex;
      }
    } else if (userAgent.indexOf('android') !== -1) {
      ret.audioObjectType = 2;
      config = new Array(2);
      extensionSampleIndex = ret.frequencyIndex;
    } else {
      ret.audioObjectType = 5;
      config = new Array(4);
      if (ret.frequencyIndex >= 6) {
        extensionSampleIndex = ret.frequencyIndex - 3;
      } else {
        if (ret.channel === 1) {
          ret.audioObjectType = 2;
          config = new Array(2);
        }
        extensionSampleIndex = ret.frequencyIndex;
      }
    }

    config[0] = ret.audioObjectType << 3;
    config[0] |= (ret.frequencyIndex & 0x0e) >> 1;
    config[1] = (ret.frequencyIndex & 0x01) << 7;
    config[1] |= ret.channel << 3;
    if (ret.audioObjectType === 5) {
      config[1] |= (extensionSampleIndex & 0x0e) >> 1;
      config[2] = (extensionSampleIndex & 0x01) << 7;
      config[2] |= 2 << 2;
      config[3] = 0;
    }
    ret.audioConfig = config;
  }

  get inputBuffer() {
    return this._context.getInstance(this.configs.inputbuffer);
  }

  get _tracks() {
    return this._context.getInstance('TRACKS');
  }
}

exports.default = TsDemuxer;

/***/ }),

/***/ "../xgplayer-demux/src/hls/playlist.js":
/*!*********************************************!*\
  !*** ../xgplayer-demux/src/hls/playlist.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Playlist {
  constructor(configs) {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
    this.fragLength = 0;
    this._lastget = undefined;
    this._audoclear = configs.autoclear || false;
  }

  get list() {
    return this._list;
  }

  set baseURL(baseURL) {
    if (this.baseURL !== baseURL) {
      this.clear();
      this._baseURL = baseURL;
    }
  }

  get baseURL() {
    return this._baseURL;
  }

  push(ts, duration, discontinue) {
    if (!this._ts[ts]) {
      this._ts[ts] = { duration: duration,
        downloaded: false,
        downloading: false,
        start: this.duration,
        discontinue: discontinue ? true : false
      };
      this._list[this.duration] = ts;
      this.duration += duration;
      this.fragLength += 1;
    }
  }

  deleteFrag(url) {
    if (this._ts[url]) {
      if (this._ts[url].start > this._lastget.time) {
        this._lastget = {
          duration: this._ts[url].duration,
          time: this._ts[url].start,
          downloaded: false,
          downloading: false,
          url: url
        };
      }
      delete this._list[this._ts[url].start];
      delete this._ts[url];
      this.fragLength -= 1;
    }
  }

  pushM3U8(data, deletepre) {
    // 常规信息替换
    if (!data) {
      throw new Error(`No m3u8 data received.`);
      return;
    }
    this.version = data.version;
    this.targetduration = data.targetduration;
    if (data.encrypt && !this.encrypt) {
      this.encrypt = data.encrypt;
    }
    // 新分片信息
    if (data.sequence > this.sequence) {
      this.sequence = data.sequence;
      let newfraglist = [];
      for (let i = 0; i < data.frags.length; i++) {
        let frag = data.frags[i];
        if (!this._ts[frag.url]) {
          newfraglist.push(frag.url);
          this.push(frag.url, frag.duration, frag.discontinue);
        }
      }

      if (newfraglist.length < 1) {
        throw new Error(`Can not read ts file list.`);
      }

      if (deletepre) {
        let tslist = this.getTsList();
        for (let i = 0; i < tslist.length; i++) {
          if (newfraglist.indexOf(tslist[i]) < 0) {
            this.deleteFrag(tslist[i]);
          }
        }
      }
    } else {
      throw new Error(`Old m3u8 file received, ${data.sequence}`);
    }
  }

  getTsList() {
    return Object.keys(this._ts);
  }

  downloaded(tsname, isloaded) {
    let ts = this._ts[tsname];
    if (ts) {
      ts.downloaded = isloaded;
    }
  }

  downloading(tsname, loading) {
    let ts = this._ts[tsname];
    if (ts) {
      ts.downloading = loading;
    }
  }

  getTsByName(name) {
    return this._ts[name];
  }

  getTs(time) {
    let timelist = Object.keys(this._list);
    let ts;

    if (time === undefined) {
      if (this._lastget) {
        time = this._lastget.time + this._lastget.duration;
      } else {
        time = 0;
      }
    }

    if (timelist.length < 1 || time >= this.duration) {
      return undefined;
    }
    timelist.sort((a, b) => {
      return parseFloat(a) - parseFloat(b);
    });
    for (let i = 0; i < timelist.length; i++) {
      if (time >= parseInt(timelist[i])) {
        let url = this._list[timelist[i]];
        let downloaded = this._ts[url].downloaded;
        let downloading = this._ts[url].downloading;
        ts = { url, downloaded, downloading, time: parseInt(timelist[i]), duration: parseInt(this._ts[url].duration) };
        if (this.autoclear) {
          delete this._ts[this._lastget.url];
          delete this._list[this._lastget.time];
        }
        this._lastget = ts;
      } else {
        break;
      }
    }
    return ts;
  }

  clear() {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
  }

  clearDownloaded() {
    for (let i = 0, l = Object.keys(this._ts).length; i < l; i++) {
      let ts = this._ts[Object.keys(this._ts)[i]];
      ts.downloaded = false;
      ts.downloading = false;
    }
  }

  destroy() {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
    this.fragLength = 0;
    this._lastget = undefined;
    this._audoclear = false;
  }
}

exports.default = Playlist;

/***/ }),

/***/ "../xgplayer-loader/index.js":
/*!***********************************!*\
  !*** ../xgplayer-loader/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  FetchLoader: __webpack_require__(/*! ./src/fetch-loader */ "../xgplayer-loader/src/fetch-loader.js").default
};

/***/ }),

/***/ "../xgplayer-loader/src/fetch-loader.js":
/*!**********************************************!*\
  !*** ../xgplayer-loader/src/fetch-loader.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const LOADER_EVENTS = _xgplayerUtils.EVENTS.LOADER_EVENTS;
const READ_STREAM = 0;
const READ_TEXT = 1;
const READ_JSON = 2;
const READ_BUFFER = 3;
class FetchLoader {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.url = null;
    this.status = 0;
    this.error = null;
    this._reader = null;
    this._canceled = false;
    this._destroyed = false;
    this.readtype = this.configs.readtype;
    this.buffer = this.configs.buffer || 'LOADER_BUFFER';
    this._loaderTaskNo = 0;
  }

  init() {
    this.on(LOADER_EVENTS.LADER_START, this.load.bind(this));
  }

  static get type() {
    return 'loader';
  }

  load(url, opts) {
    let _this = this;
    this.url = url;
    this._canceled = false;

    // TODO: Add Ranges
    let params = this.getParams(opts);
    _this.loading = true;
    return fetch(this.url, params).then(function (response) {
      if (response.ok) {
        _this.status = response.status;
        return _this._onFetchResponse(response);
      }
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, new Error(`invalid response.`));
    }).catch(function (error) {
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, error);
      throw new Error(error.message);
    });
  }

  _onFetchResponse(response) {
    let _this = this;
    let buffer = this._context.getInstance(this.buffer);
    this._loaderTaskNo++;
    let taskno = this._loaderTaskNo;
    if (response.ok === true) {
      switch (this.readtype) {
        case READ_JSON:
          response.json().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(data);
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_TEXT:
          response.text().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(data);
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_BUFFER:
          response.arrayBuffer().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(new Uint8Array(data));
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_STREAM:
        default:
          return this._onReader(response.body.getReader(), taskno);
      }
    }
  }

  _onReader(reader, taskno) {
    let buffer = this._context.getInstance(this.buffer);
    if (!buffer && this._reader || this._destroyed) {
      try {
        this._reader.cancel();
      } catch (e) {
        // DO NOTHING
      }
    }

    this._reader = reader;
    if (this.loading === false) {
      return;
    }

    let _this = this;
    // reader read function returns a Promise. get data when callback and has value.done when disconnected.
    // read方法返回一个Promise. 回调中可以获取到数据。当value.done存在时，说明链接断开。
    this._reader && this._reader.read().then(function (val) {
      if (val.done) {
        // TODO: 完成处理
        _this.loading = false;
        _this.status = 0;
        _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
        return;
      }

      if (_this._canceled || _this._destroyed) {
        if (_this._reader) {
          try {
            _this._reader.cancel();
          } catch (e) {
            // DO NOTHING
          }
        }

        return;
      }
      buffer.push(val.value);
      _this.emit(LOADER_EVENTS.LOADER_DATALOADED, buffer);
      return _this._onReader(reader, taskno);
    }).catch(error => {
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, error);
    });
  }

  getParams(opts) {
    let options = Object.assign({}, opts);
    let headers = new Headers();

    let params = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default'

      // add custmor headers
      // 添加自定义头
    };if (typeof this.configs.headers === 'object') {
      let configHeaders = this.configs.headers;
      for (let key in configHeaders) {
        if (configHeaders.hasOwnProperty(key)) {
          headers.append(key, configHeaders[key]);
        }
      }
    }

    if (typeof options.headers === 'object') {
      let optHeaders = options.headers;
      for (let key in optHeaders) {
        if (optHeaders.hasOwnProperty(key)) {
          headers.append(key, optHeaders[key]);
        }
      }
    }

    if (options.cors === false) {
      params.mode = 'same-origin';
    }

    // withCredentials is disabled by default
    // withCredentials 在默认情况下不被使用。
    if (options.withCredentials) {
      params.credentials = 'include';
    }

    // TODO: Add ranges;
    return params;
  }

  cancel() {
    if (this._reader) {
      try {
        this._reader.cancel();
      } catch (e) {
        // 防止failed: 200错误被打印到控制台上
      }
      this._reader = null;
      this.loading = false;
      this._canceled = true;
    }
  }

  destroy() {
    this._destroyed = true;
    this.cancel();
  }
}

exports.default = FetchLoader;

/***/ }),

/***/ "../xgplayer-remux/index.js":
/*!**********************************!*\
  !*** ../xgplayer-remux/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Mp4Remuxer: __webpack_require__(/*! ./src/mp4 */ "../xgplayer-remux/src/mp4/index.js").default
};

/***/ }),

/***/ "../xgplayer-remux/src/mp4/fmp4.js":
/*!*****************************************!*\
  !*** ../xgplayer-remux/src/mp4/fmp4.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

// const UINT32_MAX = Math.pow(2, 32) - 1;
class Fmp4 {
  static size(value) {
    return _xgplayerUtils.Buffer.writeUint32(value);
  }
  static initBox(size, name, ...content) {
    const buffer = new _xgplayerUtils.Buffer();
    buffer.write(Fmp4.size(size), Fmp4.type(name), ...content);
    return buffer.buffer;
  }
  static extension(version, flag) {
    return new Uint8Array([version, flag >> 16 & 0xff, flag >> 8 & 0xff, flag & 0xff]);
  }
  static ftyp() {
    return Fmp4.initBox(24, 'ftyp', new Uint8Array([0x69, 0x73, 0x6F, 0x6D, // isom,
    0x0, 0x0, 0x00, 0x01, // minor_version: 0x01
    0x69, 0x73, 0x6F, 0x6D, // isom
    0x61, 0x76, 0x63, 0x31 // avc1
    ]));
  }
  static moov({ type, meta }) {
    let size = 8;
    let mvhd = Fmp4.mvhd(meta.duration, meta.timescale);
    let trak;

    if (type === 'video') {
      trak = Fmp4.videoTrak(meta);
    } else {
      trak = Fmp4.audioTrak(meta);
    }

    let mvex = Fmp4.mvex(meta.duration, meta.timescale || 1000, meta.id);
    [mvhd, trak, mvex].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'moov', mvhd, trak, mvex);
  }
  static mvhd(duration, timescale = 1000) {
    // duration *= timescale;
    let bytes = new Uint8Array([0x00, 0x00, 0x00, 0x00, // version(0) + flags     1位的box版本+3位flags   box版本，0或1，一般为0。（以下字节数均按version=0）
    0x00, 0x00, 0x00, 0x00, // creation_time    创建时间  （相对于UTC时间1904-01-01零点的秒数）
    0x00, 0x00, 0x00, 0x00, // modification_time   修改时间

    /**
           * timescale: 4 bytes文件媒体在1秒时间内的刻度值，可以理解为1秒长度
           */
    timescale >>> 24 & 0xFF, timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF,

    /**
           * duration: 4 bytes该track的时间长度，用duration和time scale值可以计算track时长，比如audio track的time scale = 8000,
           * duration = 560128，时长为70.016，video track的time scale = 600, duration = 42000，时长为70
           */
    duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x01, 0x00, 0x00, // Preferred rate: 1.0   推荐播放速率，高16位和低16位分别为小数点整数部分和小数部分，即[16.16] 格式，该值为1.0（0x00010000）表示正常前向播放
    /**
           * PreferredVolume(1.0, 2bytes) + reserved(2bytes)
           * 与rate类似，[8.8] 格式，1.0（0x0100）表示最大音量
           */
    0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //  reserved: 4 + 4 bytes保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 视频变换矩阵   线性代数
    0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
    0x00, 0x00, 0x00, 0x00, // ----begin pre_defined 6 * 4 bytes----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre-defined 保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // ----end pre_defined 6 * 4 bytes----
    0xFF, 0xFF, 0xFF, 0xFF // next_track_ID 下一个track使用的id号
    ]);
    return Fmp4.initBox(8 + bytes.length, 'mvhd', new Uint8Array(bytes));
  }
  static videoTrak(data) {
    let size = 8;

    let tkhd = Fmp4.tkhd({
      id: 1,
      duration: data.duration,
      timescale: data.timescale || 1000,
      width: data.presentWidth,
      height: data.presentHeight,
      type: 'video'
    });
    let mdia = Fmp4.mdia({
      type: 'video',
      timescale: data.timescale || 1000,
      duration: data.duration,
      avcc: data.avcc,
      parRatio: data.parRatio,
      width: data.presentWidth,
      height: data.presentHeight
    });
    [tkhd, mdia].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'trak', tkhd, mdia);
  }
  static audioTrak(data) {
    let size = 8;
    let tkhd = Fmp4.tkhd({
      id: 2,
      duration: data.duration,
      timescale: data.timescale || 1000,
      width: 0,
      height: 0,
      type: 'audio'
    });
    let mdia = Fmp4.mdia({
      type: 'audio',
      timescale: data.timescale || 1000,
      duration: data.duration,
      channelCount: data.channelCount,
      samplerate: data.sampleRate,
      config: data.config
    });
    [tkhd, mdia].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'trak', tkhd, mdia);
  }
  static tkhd(data) {
    let id = data.id;
    let duration = data.duration;
    let width = data.width;
    let height = data.height;
    let content = new Uint8Array([0x00, 0x00, 0x00, 0x07, // version(0) + flags 1位版本 box版本，0或1，一般为0。（以下字节数均按version=0）按位或操作结果值，预定义如下：
    // 0x000001 track_enabled，否则该track不被播放；
    // 0x000002 track_in_movie，表示该track在播放中被引用；
    // 0x000004 track_in_preview，表示该track在预览时被引用。
    // 一般该值为7，1+2+4 如果一个媒体所有track均未设置track_in_movie和track_in_preview，将被理解为所有track均设置了这两项；对于hint track，该值为0
    // hint track 这个特殊的track并不包含媒体数据，而是包含了一些将其他数据track打包成流媒体的指示信息。
    0x00, 0x00, 0x00, 0x00, // creation_time创建时间（相对于UTC时间1904-01-01零点的秒数）
    0x00, 0x00, 0x00, 0x00, // modification time 修改时间
    id >>> 24 & 0xFF, // track_ID: 4 bytes id号，不能重复且不能为0
    id >>> 16 & 0xFF, id >>> 8 & 0xFF, id & 0xFF, 0x00, 0x00, 0x00, 0x00, // reserved: 4 bytes    保留位
    duration >>> 24 & 0xFF, // duration: 4 bytes track的时间长度
    duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x00, 0x00, 0x00, // reserved: 2 * 4 bytes    保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // layer(2bytes) + alternate_group(2bytes)  视频层，默认为0，值小的在上层.track分组信息，默认为0表示该track未与其他track有群组关系
    0x00, 0x00, 0x00, 0x00, // volume(2bytes) + reserved(2bytes)    [8.8] 格式，如果为音频track，1.0（0x0100）表示最大音量；否则为0   +保留位
    0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, // 视频变换矩阵
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
    width >>> 8 & 0xFF, // //宽度
    width & 0xFF, 0x00, 0x00, height >>> 8 & 0xFF, // 高度
    height & 0xFF, 0x00, 0x00]);
    return Fmp4.initBox(8 + content.byteLength, 'tkhd', content);
  }
  static edts(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let duration = data.duration;
    let mediaTime = data.mediaTime;
    buffer.write(Fmp4.size(36), Fmp4.type('edts'));
    // elst
    buffer.write(Fmp4.size(28), Fmp4.type('elst'));
    buffer.write(new Uint8Array([0x00, 0x00, 0x00, 0x01, // entry count
    duration >> 24 & 0xff, duration >> 16 & 0xff, duration >> 8 & 0xff, duration & 0xff, mediaTime >> 24 & 0xff, mediaTime >> 16 & 0xff, mediaTime >> 8 & 0xff, mediaTime & 0xff, 0x00, 0x00, 0x00, 0x01 // media rate
    ]));
    return buffer.buffer;
  }
  static mdia(data) {
    let size = 8;
    let mdhd = Fmp4.mdhd(data.timescale, data.duration);
    let hdlr = Fmp4.hdlr(data.type);
    let minf = Fmp4.minf(data);
    [mdhd, hdlr, minf].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'mdia', mdhd, hdlr, minf);
  }
  static mdhd(timescale = 1000, duration) {
    let content = new Uint8Array([0x00, 0x00, 0x00, 0x00, // creation_time    创建时间
    0x00, 0x00, 0x00, 0x00, // modification_time修改时间
    timescale >>> 24 & 0xFF, // timescale: 4 bytes    文件媒体在1秒时间内的刻度值，可以理解为1秒长度
    timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF, duration >>> 24 & 0xFF, // duration: 4 bytes  track的时间长度
    duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x55, 0xC4, // language: und (undetermined) 媒体语言码。最高位为0，后面15位为3个字符（见ISO 639-2/T标准中定义）
    0x00, 0x00 // pre_defined = 0
    ]);
    return Fmp4.initBox(12 + content.byteLength, 'mdhd', Fmp4.extension(0, 0), content);
  }
  static hdlr(type) {
    let value = [0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, // pre_defined
    0x76, 0x69, 0x64, 0x65, // handler_type: 'vide'
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x56, 0x69, 0x64, 0x65, 0x6f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'VideoHandler'
    ];
    if (type === 'audio') {
      value.splice(8, 4, ...[0x73, 0x6f, 0x75, 0x6e]);
      value.splice(24, 13, ...[0x53, 0x6f, 0x75, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00]);
    }
    return Fmp4.initBox(8 + value.length, 'hdlr', new Uint8Array(value));
  }
  static minf(data) {
    let size = 8;
    let vmhd = data.type === 'video' ? Fmp4.vmhd() : Fmp4.smhd();
    let dinf = Fmp4.dinf();
    let stbl = Fmp4.stbl(data);
    [vmhd, dinf, stbl].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'minf', vmhd, dinf, stbl);
  }
  static vmhd() {
    return Fmp4.initBox(20, 'vmhd', new Uint8Array([0x00, // version
    0x00, 0x00, 0x01, // flags
    0x00, 0x00, // graphicsmode
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // opcolor
    ]));
  }
  static smhd() {
    return Fmp4.initBox(16, 'smhd', new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, // balance
    0x00, 0x00 // reserved
    ]));
  }
  static dinf() {
    let buffer = new _xgplayerUtils.Buffer();
    let dref = [0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x01, // entry_count
    0x00, 0x00, 0x00, 0x0c, // entry_size
    0x75, 0x72, 0x6c, 0x20, // 'url' type
    0x00, // version 0
    0x00, 0x00, 0x01 // entry_flags
    ];
    buffer.write(Fmp4.size(36), Fmp4.type('dinf'), Fmp4.size(28), Fmp4.type('dref'), new Uint8Array(dref));
    return buffer.buffer;
  }
  static stbl(data) {
    let size = 8;
    let stsd = Fmp4.stsd(data);
    let stts = Fmp4.stts();
    let stsc = Fmp4.stsc();
    let stsz = Fmp4.stsz();
    let stco = Fmp4.stco();
    [stsd, stts, stsc, stsz, stco].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'stbl', stsd, stts, stsc, stsz, stco);
  }
  static stsd(data) {
    let content;
    if (data.type === 'audio') {
      // if (!data.isAAC && data.codec === 'mp4') {
      //     content = FMP4.mp3(data);
      // } else {
      //
      // }
      // 支持mp4a
      content = Fmp4.mp4a(data);
    } else {
      content = Fmp4.avc1(data);
    }
    return Fmp4.initBox(16 + content.byteLength, 'stsd', Fmp4.extension(0, 0), new Uint8Array([0x00, 0x00, 0x00, 0x01]), content);
  }
  static mp4a(data) {
    let content = new Uint8Array([0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // data_reference_index
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // reserved
    0x00, data.channelCount, // channelcount
    0x00, 0x10, // sampleSize:16bits
    0x00, 0x00, 0x00, 0x00, // reserved2
    data.samplerate >> 8 & 0xff, data.samplerate & 0xff, //
    0x00, 0x00]);
    let esds = Fmp4.esds(data.config);
    return Fmp4.initBox(8 + content.byteLength + esds.byteLength, 'mp4a', content, esds);
  }
  static esds(config = [43, 146, 8, 0]) {
    const configlen = config.length;
    let buffer = new _xgplayerUtils.Buffer();
    let content = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags

    0x03, // descriptor_type
    0x17 + configlen, // length
    0x00, 0x01, // es_id
    0x00, // stream_priority

    0x04, // descriptor_type
    0x0f + configlen, // length
    0x40, // codec : mpeg4_audio
    0x15, // stream_type
    0x00, 0x00, 0x00, // buffer_size
    0x00, 0x00, 0x00, 0x00, // maxBitrate
    0x00, 0x00, 0x00, 0x00, // avgBitrate

    0x05 // descriptor_type
    ].concat([configlen]).concat(config).concat([0x06, 0x01, 0x02]));
    buffer.write(Fmp4.size(8 + content.byteLength), Fmp4.type('esds'), content);
    return buffer.buffer;
  }
  static avc1(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let size = 40; // 8(avc1)+8(avcc)+8(btrt)+16(pasp)
    // let sps = data.sps
    // let pps = data.pps
    let width = data.width;
    let height = data.height;
    let hSpacing = data.parRatio.height;
    let vSpacing = data.parRatio.width;
    // let avccBuffer = new Buffer()
    // avccBuffer.write(new Uint8Array([
    //   0x01, // version
    //   sps[1], // profile
    //   sps[2], // profile compatible
    //   sps[3], // level
    //   0xfc | 3,
    //   0xE0 | 1 // 目前只处理一个sps
    // ].concat([sps.length >>> 8 & 0xff, sps.length & 0xff])))
    // avccBuffer.write(sps, new Uint8Array([1, pps.length >>> 8 & 0xff, pps.length & 0xff]), pps)

    let avcc = data.avcc;
    let avc1 = new Uint8Array([0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // data_reference_index
    0x00, 0x00, // pre_defined
    0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre_defined
    width >> 8 & 0xff, width & 0xff, // width
    height >> 8 & 0xff, height & 0xff, // height
    0x00, 0x48, 0x00, 0x00, // horizresolution
    0x00, 0x48, 0x00, 0x00, // vertresolution
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // frame_count
    0x12, 0x64, 0x61, 0x69, 0x6C, // dailymotion/hls.js
    0x79, 0x6D, 0x6F, 0x74, 0x69, 0x6F, 0x6E, 0x2F, 0x68, 0x6C, 0x73, 0x2E, 0x6A, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // compressorname
    0x00, 0x18, // depth = 24
    0x11, 0x11]); // pre_defined = -1
    let btrt = new Uint8Array([0x00, 0x1c, 0x9c, 0x80, // bufferSizeDB
    0x00, 0x2d, 0xc6, 0xc0, // maxBitrate
    0x00, 0x2d, 0xc6, 0xc0 // avgBitrate
    ]);
    let pasp = new Uint8Array([hSpacing >> 24, // hSpacing
    hSpacing >> 16 & 0xff, hSpacing >> 8 & 0xff, hSpacing & 0xff, vSpacing >> 24, // vSpacing
    vSpacing >> 16 & 0xff, vSpacing >> 8 & 0xff, vSpacing & 0xff]);

    buffer.write(Fmp4.size(size + avc1.byteLength + avcc.byteLength + btrt.byteLength), Fmp4.type('avc1'), avc1, Fmp4.size(8 + avcc.byteLength), Fmp4.type('avcC'), avcc, Fmp4.size(20), Fmp4.type('btrt'), btrt, Fmp4.size(16), Fmp4.type('pasp'), pasp);
    return buffer.buffer;
  }
  static stts() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stts', content);
  }
  static stsc() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stsc', content);
  }
  static stco() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stco', content);
  }
  static stsz() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, // sample_size
    0x00, 0x00, 0x00, 0x00 // sample_count
    ]);
    return Fmp4.initBox(20, 'stsz', content);
  }
  static mvex(duration, timescale = 1000, trackID) {
    let buffer = new _xgplayerUtils.Buffer();
    let mehd = _xgplayerUtils.Buffer.writeUint32(duration);
    buffer.write(Fmp4.size(56), Fmp4.type('mvex'), Fmp4.size(16), Fmp4.type('mehd'), Fmp4.extension(0, 0), mehd, Fmp4.trex(trackID));
    return buffer.buffer;
  }
  static trex(id) {
    let content = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags
    id >> 24, id >> 16 & 0xff, id >> 8 & 0xff, id & 0xff, // track_ID
    0x00, 0x00, 0x00, 0x01, // default_sample_description_index
    0x00, 0x00, 0x00, 0x00, // default_sample_duration
    0x00, 0x00, 0x00, 0x00, // default_sample_size
    0x00, 0x01, 0x00, 0x01 // default_sample_flags
    ]);
    return Fmp4.initBox(8 + content.byteLength, 'trex', content);
  }
  static moof(data) {
    let size = 8;
    let mfhd = Fmp4.mfhd();
    let traf = Fmp4.traf(data);
    [mfhd, traf].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'moof', mfhd, traf);
  }
  static mfhd() {
    let content = _xgplayerUtils.Buffer.writeUint32(Fmp4.sequence);
    Fmp4.sequence += 1;
    return Fmp4.initBox(16, 'mfhd', Fmp4.extension(0, 0), content);
  }
  static traf(data) {
    let size = 8;
    let tfhd = Fmp4.tfhd(data.id);
    let tfdt = Fmp4.tfdt(data.time);
    let sdtp = Fmp4.sdtp(data);
    let trun = Fmp4.trun(data, sdtp.byteLength);

    [tfhd, tfdt, trun, sdtp].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'traf', tfhd, tfdt, trun, sdtp);
  }
  static tfhd(id) {
    let content = _xgplayerUtils.Buffer.writeUint32(id);
    return Fmp4.initBox(16, 'tfhd', Fmp4.extension(0, 0), content);
  }
  static tfdt(time) {
    // let upper = Math.floor(time / (UINT32_MAX + 1)),
    //     lower = Math.floor(time % (UINT32_MAX + 1));
    return Fmp4.initBox(16, 'tfdt', Fmp4.extension(0, 0), _xgplayerUtils.Buffer.writeUint32(time));
  }
  static trun(data, sdtpLength) {
    // let id = data.id;
    // let ceil = id === 1 ? 16 : 12;
    let buffer = new _xgplayerUtils.Buffer();
    let sampleCount = _xgplayerUtils.Buffer.writeUint32(data.samples.length);
    // mdat-header 8
    // moof-header 8
    // mfhd 16
    // traf-header 8
    // thhd 16
    // tfdt 20
    // trun-header 12
    // sampleCount 4
    // data-offset 4
    // samples.length
    let offset = _xgplayerUtils.Buffer.writeUint32(8 + 8 + 16 + 8 + 16 + 16 + 12 + 4 + 4 + 16 * data.samples.length + sdtpLength);
    buffer.write(Fmp4.size(20 + 16 * data.samples.length), Fmp4.type('trun'), new Uint8Array([0x00, 0x00, 0x0F, 0x01]), sampleCount, offset);

    // let size = buffer.buffer.byteLength
    // let writeOffset = 0
    // data.samples.forEach(() => {
    //   size += 16
    // })
    //
    // let trunBox = new Uint8Array(size)

    // trunBox.set(buffer.buffer, 0)

    data.samples.forEach(item => {
      const flags = item.flags;
      // console.log(item.type, item.dts, item.duration)

      buffer.write(new Uint8Array([item.duration >>> 24 & 0xFF, // sample_duration
      item.duration >>> 16 & 0xFF, item.duration >>> 8 & 0xFF, item.duration & 0xFF, item.size >>> 24 & 0xFF, // sample_size
      item.size >>> 16 & 0xFF, item.size >>> 8 & 0xFF, item.size & 0xFF, flags.isLeading << 2 | flags.dependsOn, // sample_flags
      flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.isNonSync, 0x00, 0x00, // sample_degradation_priority
      item.cts >>> 24 & 0xFF, // sample_composition_time_offset
      item.cts >>> 16 & 0xFF, item.cts >>> 8 & 0xFF, item.cts & 0xFF]));
      // writeOffset += 16
      // buffer.write(Buffer.writeUint32(0));
    });
    return buffer.buffer;
  }
  static sdtp(data) {
    let buffer = new _xgplayerUtils.Buffer();
    buffer.write(Fmp4.size(12 + data.samples.length), Fmp4.type('sdtp'), Fmp4.extension(0, 0));
    data.samples.forEach(item => {
      const flags = item.flags;
      const num = flags.isLeading << 6 | // is_leading: 2 (bit)
      flags.dependsOn << 4 | // sample_depends_on
      flags.isDependedOn << 2 | // sample_is_depended_on
      flags.hasRedundancy; // sample_has_redundancy

      buffer.write(new Uint8Array([num]));
    });
    return buffer.buffer;
  }
  static mdat(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let size = 8;
    data.samples.forEach(item => {
      size += item.size;
    });
    buffer.write(Fmp4.size(size), Fmp4.type('mdat'));
    let mdatBox = new Uint8Array(size);
    let offset = 0;
    mdatBox.set(buffer.buffer, offset);
    offset += 8;
    data.samples.forEach(item => {
      item.buffer.forEach(unit => {
        mdatBox.set(unit, offset);
        offset += unit.byteLength;
        // buffer.write(unit.data);
      });
    });
    return mdatBox;
  }
}
Fmp4.type = name => {
  return new Uint8Array([name.charCodeAt(0), name.charCodeAt(1), name.charCodeAt(2), name.charCodeAt(3)]);
};
Fmp4.sequence = 1;

exports.default = Fmp4;

/***/ }),

/***/ "../xgplayer-remux/src/mp4/index.js":
/*!******************************************!*\
  !*** ../xgplayer-remux/src/mp4/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _fmp = __webpack_require__(/*! ./fmp4 */ "../xgplayer-remux/src/mp4/fmp4.js");

var _fmp2 = _interopRequireDefault(_fmp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const REMUX_EVENTS = _xgplayerUtils.EVENTS.REMUX_EVENTS;

class Mp4Remuxer {
  constructor() {
    this._dtsBase = 0;
    this._isDtsBaseInited = false;

    this.isFirstVideo = true;
    this.isFirstAudio = true;

    this.videoAllDuration = 0;
    this.audioAllDuration = 0;
  }

  init() {
    this.on(REMUX_EVENTS.REMUX_MEDIA, this.remux.bind(this));
    this.on(REMUX_EVENTS.REMUX_METADATA, this.onMetaDataReady.bind(this));
    this.on(REMUX_EVENTS.DETECT_CHANGE_STREAM, this.resetDtsBase.bind(this));
  }

  destroy() {
    this._dtsBase = -1;
    this._dtsBaseInited = false;
  }

  reset() {
    this._dtsBase = 0;
    this._isDtsBaseInited = false;
  }

  remux() {
    const { audioTrack, videoTrack } = this._context.getInstance('TRACKS');
    !this._isDtsBaseInited && this.calcDtsBase(audioTrack, videoTrack);

    this._remuxVideo(videoTrack);
    this._remuxAudio(audioTrack);
  }

  resetDtsBase() {
    // for hls 中途切换 meta后seek
    this._dtsBase = 0;
    this._dtsBaseInited = false;
  }

  seek() {}

  onMetaDataReady(type) {
    let track;

    if (type === 'audio') {
      const { audioTrack } = this._context.getInstance('TRACKS');
      track = audioTrack;
    } else {
      const { videoTrack } = this._context.getInstance('TRACKS');
      track = videoTrack;
    }

    let presourcebuffer = this._context.getInstance('PRE_SOURCE_BUFFER');
    let source = presourcebuffer.getSource(type);
    if (!source) {
      source = presourcebuffer.createSource(type);
    }

    source.mimetype = track.meta.codec;
    source.init = this.remuxInitSegment(type, track.meta);
    // source.inited = false;

    // this.resetDtsBase()
    this.emit(REMUX_EVENTS.INIT_SEGMENT, type);
  }

  remuxInitSegment(type, meta) {
    let initSegment = new _xgplayerUtils.Buffer();
    let ftyp = _fmp2.default.ftyp();
    let moov = _fmp2.default.moov({ type, meta: meta });

    initSegment.write(ftyp, moov);
    return initSegment;
  }

  calcDtsBase(audioTrack, videoTrack) {
    if (!audioTrack.samples.length && !videoTrack.samples.length) {
      return;
    }

    let audioBase = Infinity;
    let videoBase = Infinity;

    if (audioTrack.samples && audioTrack.samples.length) {
      audioBase = audioTrack.samples[0].dts;
    }
    if (videoTrack.samples && videoTrack.samples.length) {
      videoBase = videoTrack.samples[0].dts;
    }

    this._dtsBase = Math.min(audioBase, videoBase);
    this._isDtsBaseInited = true;
  }

  _remuxVideo(videoTrack) {
    const track = videoTrack;

    if (!videoTrack.samples || !videoTrack.samples.length) {
      return;
    }

    let { samples } = track;
    let firstDts = -1;

    let initSegment = null;
    const mp4Samples = [];
    const mdatBox = {
      samples: []
    };

    while (samples.length) {
      const avcSample = samples.shift();

      const { isKeyframe, options } = avcSample;
      if (!this.isFirstAudio && options && options.meta) {
        initSegment = this.remuxInitSegment('video', options.meta);
        options.meta = null;
        samples.unshift(avcSample);
        if (!options.isContinue) {
          this.resetDtsBase();
        }
        break;
      }

      let dts = avcSample.dts - this._dtsBase;

      if (firstDts === -1) {
        firstDts = dts;
      }

      let cts;
      let pts;
      if (avcSample.pts !== undefined) {
        pts = avcSample.pts - this._dtsBase;
        cts = pts - dts;
      }
      if (avcSample.cts !== undefined) {
        pts = avcSample.cts + dts;
        cts = avcSample.cts;
      }

      let mdatSample = {
        buffer: [],
        size: 0
      };
      mdatBox.samples.push(mdatSample);
      mdatSample.buffer.push(avcSample.data);
      mdatSample.size += avcSample.data.byteLength;

      let sampleDuration = 0;
      if (samples.length >= 1) {
        const nextDts = samples[0].dts - this._dtsBase;
        sampleDuration = nextDts - dts;
      } else {
        if (mp4Samples.length >= 1) {
          // lastest sample, use second last duration
          sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
        } else {
          // the only one sample, use reference duration
          sampleDuration = this.videoMeta.refSampleDuration;
        }
      }
      this.videoAllDuration += sampleDuration;
      // console.log(`dts ${dts}`, `pts ${pts}`, `cts: ${cts}`, `duration: ${sampleDuration}`, avcSample)
      mp4Samples.push({
        dts,
        cts,
        pts,
        data: avcSample.data,
        size: avcSample.data.byteLength,
        isKeyframe,
        duration: sampleDuration,
        flags: {
          isLeading: 0,
          dependsOn: isKeyframe ? 2 : 1,
          isDependedOn: isKeyframe ? 1 : 0,
          hasRedundancy: 0,
          isNonSync: isKeyframe ? 0 : 1
        },
        originDts: dts,
        type: 'video'
      });
    }

    let moofMdat = new _xgplayerUtils.Buffer();
    if (mp4Samples.length) {
      const moof = _fmp2.default.moof({
        id: track.meta.id,
        time: firstDts,
        samples: mp4Samples
      });
      const mdat = _fmp2.default.mdat(mdatBox);
      moofMdat.write(moof, mdat);

      this.writeToSource('video', moofMdat);
    }

    if (initSegment) {
      this.writeToSource('video', initSegment);

      if (samples.length) {
        // second part of stream change
        track.samples = samples;
        return this._remuxVideo(track);
      }
    }

    this.isFirstVideo = false;
    this.emit(REMUX_EVENTS.MEDIA_SEGMENT, 'video');

    const lastSample = mp4Samples[mp4Samples.length - 1];
    this._videoNextDts = lastSample.dts + lastSample.duration;
    track.samples = [];
    track.length = 0;
  }

  _remuxAudio(track) {
    const { samples } = track;
    let firstDts = -1;
    let mp4Samples = [];

    let initSegment = null;
    const mdatBox = {
      samples: []
    };
    if (!samples || !samples.length) {
      return;
    }
    let isFirstDtsInited = false;
    while (samples.length) {
      let sample = samples.shift();
      const { data, options } = sample;
      if (!this.isFirstAudio && options && options.meta) {
        initSegment = this.remuxInitSegment('audio', options.meta);
        options.meta = null;
        samples.unshift(sample);
        if (!options.isContinue) {
          this.resetDtsBase();
        }
        break;
      }

      let dts = sample.dts - this._dtsBase;
      const originDts = dts;
      if (!isFirstDtsInited) {
        firstDts = dts;
        isFirstDtsInited = true;
      }

      let sampleDuration = 0;

      if (this.audioMeta.refSampleDurationFixed) {
        sampleDuration = this.audioMeta.refSampleDurationFixed;
      } else if (samples.length >= 1) {
        const nextDts = samples[0].dts - this._dtsBase;
        sampleDuration = nextDts - dts;
      } else {
        if (mp4Samples.length >= 1) {
          // use second last sample duration
          sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
        } else {
          // the only one sample, use reference sample duration
          sampleDuration = this.audioMeta.refSampleDuration;
        }
      }

      // console.log('remux audio ', dts)
      this.audioAllDuration += sampleDuration;
      const mp4Sample = {
        dts,
        pts: dts,
        cts: 0,
        size: data.byteLength,
        duration: sample.duration ? sample.duration : sampleDuration,
        flags: {
          isLeading: 0,
          dependsOn: 2,
          isDependedOn: 1,
          hasRedundancy: 0,
          isNonSync: 0
        },
        isKeyframe: true,
        originDts,
        type: 'audio'
      };

      let mdatSample = {
        buffer: [],
        size: 0
      };
      mdatSample.buffer.push(data);
      mdatSample.size += data.byteLength;

      mdatBox.samples.push(mdatSample);

      mp4Samples.push(mp4Sample);
    }

    const moofMdat = new _xgplayerUtils.Buffer();

    if (mp4Samples.length) {
      const moof = _fmp2.default.moof({
        id: track.meta.id,
        time: firstDts,
        samples: mp4Samples
      });
      const mdat = _fmp2.default.mdat(mdatBox);
      moofMdat.write(moof, mdat);

      this.writeToSource('audio', moofMdat);
    }

    if (initSegment) {
      this.writeToSource('audio', initSegment);
      if (samples.length) {
        // second part of stream change
        track.samples = samples;
        return this._remuxAudio(track);
      }
    }

    this.isFirstAudio = false;
    this.emit(REMUX_EVENTS.MEDIA_SEGMENT, 'audio', moofMdat);

    const lastSample = mp4Samples[mp4Samples.length - 1];
    this._videoNextDts = lastSample.dts + lastSample.duration;
    track.samples = [];
    track.length = 0;
  }

  writeToSource(type, buffer) {
    let presourcebuffer = this._context.getInstance('PRE_SOURCE_BUFFER');
    let source = presourcebuffer.getSource(type);
    if (!source) {
      source = presourcebuffer.createSource(type);
    }

    source.data.push(buffer);
  }

  initSilentAudio(dts, duration) {
    const unit = Mp4Remuxer.getSilentFrame(this.audioMeta.channelCount);
    return {
      dts,
      pts: dts,
      cts: 0,
      duration,
      unit,
      size: unit.byteLength,
      originDts: dts,
      type: 'video'
    };
  }

  get videoMeta() {
    return this._context.getInstance('TRACKS').videoTrack.meta;
  }
  get audioMeta() {
    return this._context.getInstance('TRACKS').audioTrack.meta;
  }

  static getSilentFrame(channelCount) {
    if (channelCount === 1) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
    } else if (channelCount === 2) {
      return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
    } else if (channelCount === 3) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
    } else if (channelCount === 4) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
    } else if (channelCount === 5) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
    } else if (channelCount === 6) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
    }
    return null;
  }
}
exports.default = Mp4Remuxer;

/***/ }),

/***/ "../xgplayer-utils/index.js":
/*!**********************************!*\
  !*** ../xgplayer-utils/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Context: __webpack_require__(/*! ./src/context */ "../xgplayer-utils/src/context.js").default,

  // Modules from constants
  EVENTS: __webpack_require__(/*! ./src/constants/events */ "../xgplayer-utils/src/constants/events.js").default,
  WORKER_COMMANDS: __webpack_require__(/*! ./src/constants/worker-commands */ "../xgplayer-utils/src/constants/worker-commands.js").default,

  // Modules from env
  sniffer: __webpack_require__(/*! ./src/env/sniffer */ "../xgplayer-utils/src/env/sniffer.js").default,
  isLe: __webpack_require__(/*! ./src/env/isle */ "../xgplayer-utils/src/env/isle.js").default,
  UTF8: __webpack_require__(/*! ./src/env/utf8 */ "../xgplayer-utils/src/env/utf8.js").default,
  PageVisibility: __webpack_require__(/*! ./src/env/PageVisibility */ "../xgplayer-utils/src/env/PageVisibility.js").default,

  // Models
  MediaInfo: __webpack_require__(/*! ./src/models/media-info */ "../xgplayer-utils/src/models/media-info.js").default,
  MediaSample: __webpack_require__(/*! ./src/models/media-sample */ "../xgplayer-utils/src/models/media-sample.js").default,
  MediaSegment: __webpack_require__(/*! ./src/models/media-segment */ "../xgplayer-utils/src/models/media-segment.js").default,
  MediaSegmentList: __webpack_require__(/*! ./src/models/media-segment-list */ "../xgplayer-utils/src/models/media-segment-list.js").default,
  AudioTrackMeta: __webpack_require__(/*! ./src/models/track-meta */ "../xgplayer-utils/src/models/track-meta.js").AudioTrackMeta,
  VideoTrackMeta: __webpack_require__(/*! ./src/models/track-meta */ "../xgplayer-utils/src/models/track-meta.js").VideoTrackMeta,
  AudioTrackSample: __webpack_require__(/*! ./src/models/track-sample */ "../xgplayer-utils/src/models/track-sample.js").AudioTrackSample,
  VideoTrackSample: __webpack_require__(/*! ./src/models/track-sample */ "../xgplayer-utils/src/models/track-sample.js").VideoTrackSample,

  // Modules from mse
  Mse: __webpack_require__(/*! ./src/mse/index */ "../xgplayer-utils/src/mse/index.js").default,

  // Modules from write
  Stream: __webpack_require__(/*! ./src/write/stream */ "../xgplayer-utils/src/write/stream.js").default,
  Buffer: __webpack_require__(/*! ./src/write/buffer */ "../xgplayer-utils/src/write/buffer.js").default,

  MobileVideo: __webpack_require__(/*! ./src/mobile/mobile-video */ "../xgplayer-utils/src/mobile/mobile-video.js"),
  // Crypto
  Crypto: __webpack_require__(/*! ./src/crypto */ "../xgplayer-utils/src/crypto/index.js").default
};

/***/ }),

/***/ "../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js":
/*!***********************************************************************!*\
  !*** ../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ResultConstructor) {
  var totalLength = 0;

  for (var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arr = _step.value;

      totalLength += arr.length;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var result = new ResultConstructor(totalLength);
  var offset = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arrays[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _arr = _step2.value;

      result.set(_arr, offset);
      offset += _arr.length;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
};

/***/ }),

/***/ "../xgplayer-utils/node_modules/concat-typed-array/lib/index.js":
/*!**********************************************************************!*\
  !*** ../xgplayer-utils/node_modules/concat-typed-array/lib/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _concat = __webpack_require__(/*! ./concat */ "../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js");

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = _concat2.default;

/***/ }),

/***/ "../xgplayer-utils/node_modules/webworkify-webpack/index.js":
/*!******************************************************************!*\
  !*** ../xgplayer-utils/node_modules/webworkify-webpack/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function webpackBootstrapFunc(modules) {
  /******/ // The module cache
  /******/var installedModules = {};

  /******/ // The require function
  /******/function __webpack_require__(moduleId) {

    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId])
      /******/return installedModules[moduleId].exports;

    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };

    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    /******/ // Flag the module as loaded
    /******/module.l = true;

    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }

  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;

  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;

  /******/ // identity function for calling harmony imports with the correct context
  /******/__webpack_require__.i = function (value) {
    return value;
  };

  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };

  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };

  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };

  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "/";

  /******/ // on error function for async loading
  /******/__webpack_require__.oe = function (err) {
    console.error(err);throw err;
  };

  var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE);
  return f.default || f; // try to call default if defined to also support babel esmodule exports
}

var moduleNameReqExp = '[\\.|\\-|\\+|\\w|\/|@]+';
var dependencyRegExp = '\\(\\s*(\/\\*.*?\\*\/)?\\s*.*?(' + moduleNameReqExp + ').*?\\)'; // additional chars when output.pathinfo is true

// http://stackoverflow.com/a/2593661/130442
function quoteRegExp(str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}

function isNumeric(n) {
  return !isNaN(1 * n); // 1 * n converts integers, integers as string ("123"), 1e3 and "1e3" to integers and strings to NaN
}

function getModuleDependencies(sources, module, queueName) {
  var retval = {};
  retval[queueName] = [];

  var fnString = module.toString();
  var wrapperSignature = fnString.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
  if (!wrapperSignature) return retval;
  var webpackRequireName = wrapperSignature[1];

  // main bundle deps
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + dependencyRegExp, 'g');
  var match;
  while (match = re.exec(fnString)) {
    if (match[3] === 'dll-reference') continue;
    retval[queueName].push(match[3]);
  }

  // dll deps
  re = new RegExp('\\(' + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, 'g');
  while (match = re.exec(fnString)) {
    if (!sources[match[2]]) {
      retval[queueName].push(match[1]);
      sources[match[2]] = __webpack_require__(match[1]).m;
    }
    retval[match[2]] = retval[match[2]] || [];
    retval[match[2]].push(match[4]);
  }

  // convert 1e3 back to 1000 - this can be important after uglify-js converted 1000 to 1e3
  var keys = Object.keys(retval);
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < retval[keys[i]].length; j++) {
      if (isNumeric(retval[keys[i]][j])) {
        retval[keys[i]][j] = 1 * retval[keys[i]][j];
      }
    }
  }

  return retval;
}

function hasValuesInQueues(queues) {
  var keys = Object.keys(queues);
  return keys.reduce(function (hasValues, key) {
    return hasValues || queues[key].length > 0;
  }, false);
}

function getRequiredModules(sources, moduleId) {
  var modulesQueue = {
    main: [moduleId]
  };
  var requiredModules = {
    main: []
  };
  var seenModules = {
    main: {}
  };

  while (hasValuesInQueues(modulesQueue)) {
    var queues = Object.keys(modulesQueue);
    for (var i = 0; i < queues.length; i++) {
      var queueName = queues[i];
      var queue = modulesQueue[queueName];
      var moduleToCheck = queue.pop();
      seenModules[queueName] = seenModules[queueName] || {};
      if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck]) continue;
      seenModules[queueName][moduleToCheck] = true;
      requiredModules[queueName] = requiredModules[queueName] || [];
      requiredModules[queueName].push(moduleToCheck);
      var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName);
      var newModulesKeys = Object.keys(newModules);
      for (var j = 0; j < newModulesKeys.length; j++) {
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || [];
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]]);
      }
    }
  }

  return requiredModules;
}

module.exports = function (moduleId, options) {
  options = options || {};
  var sources = {
    main: __webpack_require__.m
  };

  var requiredModules = options.all ? { main: Object.keys(sources.main) } : getRequiredModules(sources, moduleId);

  var src = '';

  Object.keys(requiredModules).filter(function (m) {
    return m !== 'main';
  }).forEach(function (module) {
    var entryModule = 0;
    while (requiredModules[module][entryModule]) {
      entryModule++;
    }
    requiredModules[module].push(entryModule);
    sources[module][entryModule] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })';
    src = src + 'var ' + module + ' = (' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(entryModule)) + ')({' + requiredModules[module].map(function (id) {
      return '' + JSON.stringify(id) + ': ' + sources[module][id].toString();
    }).join(',') + '});\n';
  });

  src = src + 'new ((' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.main.map(function (id) {
    return '' + JSON.stringify(id) + ': ' + sources.main[id].toString();
  }).join(',') + '}))(self);';

  var blob = new window.Blob([src], { type: 'text/javascript' });
  if (options.bare) {
    return blob;
  }

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

  var workerUrl = URL.createObjectURL(blob);
  var worker = new window.Worker(workerUrl);
  worker.objectURL = workerUrl;

  return worker;
};

/***/ }),

/***/ "../xgplayer-utils/src/constants/events.js":
/*!*************************************************!*\
  !*** ../xgplayer-utils/src/constants/events.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const LOADER_EVENTS = {
  LADER_START: 'LOADER_START',
  LOADER_DATALOADED: 'LOADER_DATALOADED',
  LOADER_COMPLETE: 'LOADER_COMPLETE',
  LOADER_ERROR: 'LOADER_ERROR'
};

const DEMUX_EVENTS = {
  DEMUX_START: 'DEMUX_START',
  DEMUX_COMPLETE: 'DEMUX_COMPLETE',
  DEMUX_ERROR: 'DEMUX_ERROR',
  METADATA_PARSED: 'METADATA_PARSED',
  VIDEO_METADATA_CHANGE: 'VIDEO_METADATA_CHANGE',
  AUDIO_METADATA_CHANGE: 'AUDIO_METADATA_CHANGE',
  MEDIA_INFO: 'MEDIA_INFO'
};

const REMUX_EVENTS = {
  REMUX_METADATA: 'REMUX_METADATA',
  REMUX_MEDIA: 'REMUX_MEDIA',
  MEDIA_SEGMENT: 'MEDIA_SEGMENT',
  REMUX_ERROR: 'REMUX_ERROR',
  INIT_SEGMENT: 'INIT_SEGMENT',
  DETECT_CHANGE_STREAM: 'DETECT_CHANGE_STREAM'
};

const MSE_EVENTS = {
  SOURCE_UPDATE_END: 'SOURCE_UPDATE_END'

  // hls专有events
};const HLS_EVENTS = {
  RETRY_TIME_EXCEEDED: 'RETRY_TIME_EXCEEDED'
};

const CRYTO_EVENTS = {
  START_DECRYPT: 'START_DECRYPT',
  DECRYPTED: 'DECRYPTED'
};

const BROWSER_EVENTS = {
  VISIBILITY_CHANGE: 'VISIBILITY_CHANGE'
};

const ALLEVENTS = Object.assign({}, LOADER_EVENTS, DEMUX_EVENTS, REMUX_EVENTS, MSE_EVENTS, HLS_EVENTS, BROWSER_EVENTS);

const FlvAllowedEvents = [];
const HlsAllowedEvents = [];

for (let key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(key)) {
    FlvAllowedEvents.push(ALLEVENTS[key]);
  }
}

for (let key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(key)) {
    HlsAllowedEvents.push(ALLEVENTS[key]);
  }
}

exports.default = {
  ALLEVENTS,
  HLS_EVENTS,
  REMUX_EVENTS,
  DEMUX_EVENTS,
  MSE_EVENTS,
  LOADER_EVENTS,
  FlvAllowedEvents,
  HlsAllowedEvents,
  CRYTO_EVENTS,
  BROWSER_EVENTS
};

/***/ }),

/***/ "../xgplayer-utils/src/constants/worker-commands.js":
/*!**********************************************************!*\
  !*** ../xgplayer-utils/src/constants/worker-commands.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const CONTEXT_COMOMANDS = exports.CONTEXT_COMOMANDS = {
  ON: 'on',
  ONCE: 'once',
  OFF: 'off',
  EMIT: 'emit',
  DESTROY: 'destroy'
};

/***/ }),

/***/ "../xgplayer-utils/src/context.js":
/*!****************************************!*\
  !*** ../xgplayer-utils/src/context.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mediaInfo = __webpack_require__(/*! ./models/media-info */ "../xgplayer-utils/src/models/media-info.js");

var _mediaInfo2 = _interopRequireDefault(_mediaInfo);

var _events = __webpack_require__(/*! events */ "../../node_modules/events/events.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DIRECT_EMIT_FLAG = '__TO__';

class Context {
  constructor(allowedEvents = []) {
    this._emitter = new _events.EventEmitter();
    this._instanceMap = {}; // 所有的解码流程实例
    this._clsMap = {}; // 构造函数的map
    this._inited = false;
    this.mediaInfo = new _mediaInfo2.default();
    this.allowedEvents = allowedEvents;
    this._hooks = {}; // 注册在事件前/后的钩子，例如 before('DEMUX_COMPLETE')
  }

  /**
   * 从上下文中获取解码流程实例，如果没有实例，构造一个
   * @param tag
   * @param args
   * @returns {*}
   */
  getInstance(tag) {
    const instance = this._instanceMap[tag];
    if (instance) {
      return instance;
    } else {
      // throw new Error(`${tag}实例尚未初始化`)
      return null;
    }
  }

  /**
   * 初始化具体实例
   * @param tag
   * @param args
   */
  initInstance(tag, ...args) {
    if (this._clsMap[tag]) {
      const newInstance = new this._clsMap[tag](...args);
      this._instanceMap[tag] = newInstance;
      if (newInstance.init) {
        newInstance.init(); // TODO: lifecircle
      }
      return newInstance;
    } else {
      throw new Error(`${tag}未在context中注册`);
    }
  }

  /**
   * 避免大量的initInstance调用，初始化所有的组件
   * @param config
   */
  init(config) {
    if (this._inited) {
      return;
    }
    for (let tag in this._clsMap) {
      // if not inited, init an instance
      if (this._clsMap.hasOwnProperty(tag) && !this._instanceMap[tag]) {
        this.initInstance(tag, config);
      }
    }
    this._inited = true;
  }

  /**
   * 注册一个上下文流程，提供安全的事件发送机制
   * @param tag
   * @param cls
   */
  registry(tag, cls) {
    const emitter = this._emitter;
    const checkMessageName = this._isMessageNameValid.bind(this);
    const self = this;
    const enhanced = class extends cls {
      constructor(...args) {
        super(...args);
        this.listeners = {};
        this.onceListeners = {};
        this.TAG = tag;
        this._context = self;
      }

      on(messageName, callback) {
        checkMessageName(messageName);

        if (this.listeners[messageName]) {
          this.listeners[messageName].push(callback);
        } else {
          this.listeners[messageName] = [callback];
        }

        emitter.on(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback); // 建立定向通信监听
        return emitter.on(messageName, callback);
      }

      /**
       * 在某个事件触发前执行
       * @param messageName
       * @param callback
       */
      before(messageName, callback) {
        checkMessageName(messageName);
        if (self._hooks[messageName]) {
          self._hooks[messageName].push(callback);
        } else {
          self._hooks[messageName] = [callback];
        }
      }

      once(messageName, callback) {
        checkMessageName(messageName);

        if (this.onceListeners[messageName]) {
          this.onceListeners[messageName].push(callback);
        } else {
          this.onceListeners[messageName] = [callback];
        }

        emitter.once(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
        return emitter.once(messageName, callback);
      }

      emit(messageName, ...args) {
        checkMessageName(messageName);

        const beforeList = self._hooks ? self._hooks[messageName] : null;

        if (beforeList) {
          for (let i = 0, len = beforeList.length; i < len; i++) {
            const callback = beforeList[i];
            callback();
          }
        }
        return emitter.emit(messageName, ...args);
      }

      /**
       * 定向发送给某个组件单例的消息
       * @param messageName
       * @param args
       */
      emitTo(tag, messageName, ...args) {
        checkMessageName(messageName);

        return emitter.emit(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, ...args);
      }

      off(messageName, callback) {
        checkMessageName(messageName);
        return emitter.off(messageName, callback);
      }

      removeListeners() {
        const hasOwn = Object.prototype.hasOwnProperty.bind(this.listeners);

        for (let messageName in this.listeners) {
          if (hasOwn(messageName)) {
            const callbacks = this.listeners[messageName] || [];
            for (let i = 0; i < callbacks.length; i++) {
              const callback = callbacks[i];
              emitter.off(messageName, callback);
              emitter.off(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
            }
          }
        }

        for (let messageName in this.onceListeners) {
          if (hasOwn(messageName)) {
            const callbacks = this.onceListeners[messageName] || [];
            for (let i = 0; i < callbacks.length; i++) {
              const callback = callbacks[i];
              emitter.off(messageName, callback);
              emitter.off(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
            }
          }
        }
      }

      /**
       * 在组件销毁时，默认将它注册的事件全部卸载，确保不会造成内存泄漏
       */
      destroy() {
        // step1 unlisten events
        this.removeListeners();
        this.listeners = {};

        // step2 release from context
        delete self._instanceMap[tag];
        if (super.destroy) {
          return super.destroy();
        }
      }
    };
    this._clsMap[tag] = enhanced;

    /**
     * get instance immediately
     * e.g const instance = context.registry(tag, Cls)(config)
     * */
    return (...args) => {
      return this.initInstance(tag, ...args);
    };
  }

  /**
   * 对存在的实例进行
   */
  destroyInstances() {
    Object.keys(this._instanceMap).forEach(tag => {
      if (this._instanceMap[tag].destroy) {
        this._instanceMap[tag].destroy();
      }
    });
  }

  /**
   * 编解码流程无需关注事件的解绑
   */
  destroy() {
    this._emitter = null;
    this.allowedEvents = [];
    this._clsMap = null;
    this._context = null;
    this._hooks = null;
    this.destroyInstances();
  }

  /**
   * 对信道进行收拢
   * @param messageName
   * @private
   */
  _isMessageNameValid(messageName) {
    if (!this.allowedEvents.indexOf(messageName) < 0) {
      throw new Error(`unregistered message name: ${messageName}`);
    }
  }
}

exports.default = Context;

/***/ }),

/***/ "../xgplayer-utils/src/crypto/index.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/crypto/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _events = __webpack_require__(/*! ../constants/events */ "../xgplayer-utils/src/constants/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CRYTO_EVENTS = _events2.default.CRYTO_EVENTS;
class Crypto {
    constructor(config) {
        this.inputBuffer = config.inputbuffer;
        this.outputBuffer = config.outputbuffer;
        this.key = config.key;
        this.iv = config.iv;
        this.method = config.method;

        this.crypto = window.crypto || window.msCrypto;
    }

    init() {
        this.on(CRYTO_EVENTS.START_DECRYPT, this.decript.bind(this));
    }

    decript() {
        if (!this.aeskey) {
            let sbkey = this.crypto.subtle.importKey('raw', this.key.buffer, { name: 'AES-CBC' }, false, ['encrypt', 'decrypt']);
            sbkey.then(key => {
                this.aeskey = key;
                this.decriptData();
            });
        } else {
            this.decriptData();
        }
    }

    decriptData() {
        let inputbuffer = this._context.getInstance(this.inputBuffer);
        let outputbuffer = this._context.getInstance(this.outputBuffer);
        let data = inputbuffer.shift();
        if (data) {
            this.crypto.subtle.decrypt({ name: 'AES-CBC', iv: this.iv.buffer }, this.aeskey, data).then(res => {
                outputbuffer.push(new Uint8Array(res));
                this.emit(CRYTO_EVENTS.DECRYPTED);
                this.decriptData(data);
            });
        }
    }
}
exports.default = Crypto;

/***/ }),

/***/ "../xgplayer-utils/src/env/PageVisibility.js":
/*!***************************************************!*\
  !*** ../xgplayer-utils/src/env/PageVisibility.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ../constants/events */ "../xgplayer-utils/src/constants/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BROWSER_EVENTS = _events2.default.BROWSER_EVENTS;

let hidden;
let visibilityChange;
if (typeof document.hidden !== 'undefined') {
  // Opera 12.10 and Firefox 18 and later support
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

class PageVisibility {

  constructor() {
    this.callbacks = {
      onShow: [],
      onHidden: []
    };
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.init();
  }

  init() {
    document.addEventListener(visibilityChange, this.handleVisibilityChange, false);
  }

  handleVisibilityChange() {
    this.emit(BROWSER_EVENTS.VISIBILITY_CHANGE, document[hidden]);
  }

  destroy() {
    document.removeEventListener(visibilityChange, this.handleVisibilityChange);
  }

}

exports.default = PageVisibility;

/***/ }),

/***/ "../xgplayer-utils/src/env/isle.js":
/*!*****************************************!*\
  !*** ../xgplayer-utils/src/env/isle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const le = function () {
  const buf = new ArrayBuffer(2);
  new DataView(buf).setInt16(0, 256, true); // little-endian write
  return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
}();

exports.default = le;

/***/ }),

/***/ "../xgplayer-utils/src/env/sniffer.js":
/*!********************************************!*\
  !*** ../xgplayer-utils/src/env/sniffer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const le = function () {
  const buf = new ArrayBuffer(2);
  new DataView(buf).setInt16(0, 256, true); // little-endian write
  return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
}();

const sniffer = {
  get device() {
    let r = sniffer.os;
    return r.isPc ? 'pc' : r.isTablet ? 'tablet' : 'mobile';
  },
  get browser() {
    let ua = navigator.userAgent.toLowerCase();
    let reg = {
      ie: /rv:([\d.]+)\) like gecko/,
      firfox: /firefox\/([\d.]+)/,
      chrome: /chrome\/([\d.]+)/,
      opera: /opera.([\d.]+)/,
      safari: /version\/([\d.]+).*safari/
    };
    return [].concat(Object.keys(reg).filter(key => reg[key].test(ua)))[0];
  },
  get os() {
    let ua = navigator.userAgent;
    let isWindowsPhone = /(?:Windows Phone)/.test(ua);
    let isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    let isAndroid = /(?:Android)/.test(ua);
    let isFireFox = /(?:Firefox)/.test(ua);
    let isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua);
    let isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    let isPc = !isPhone && !isAndroid && !isSymbian;
    return {
      isTablet,
      isPhone,
      isAndroid,
      isPc,
      isSymbian,
      isWindowsPhone,
      isFireFox
    };
  },

  get isLe() {
    return le;
  }
};

exports.default = sniffer;

/***/ }),

/***/ "../xgplayer-utils/src/env/utf8.js":
/*!*****************************************!*\
  !*** ../xgplayer-utils/src/env/utf8.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class UTF8 {
  static decode(uint8array) {
    const out = [];
    const input = uint8array;
    let i = 0;
    const length = uint8array.length;

    while (i < length) {
      if (input[i] < 0x80) {
        out.push(String.fromCharCode(input[i]));
        ++i;
        continue;
      } else if (input[i] < 0xC0) {
        // fallthrough
      } else if (input[i] < 0xE0) {
        if (UTF8._checkContinuation(input, i, 1)) {
          const ucs4 = (input[i] & 0x1F) << 6 | input[i + 1] & 0x3F;
          if (ucs4 >= 0x80) {
            out.push(String.fromCharCode(ucs4 & 0xFFFF));
            i += 2;
            continue;
          }
        }
      } else if (input[i] < 0xF0) {
        if (UTF8._checkContinuation(input, i, 2)) {
          const ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
          if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
            out.push(String.fromCharCode(ucs4 & 0xFFFF));
            i += 3;
            continue;
          }
        }
      } else if (input[i] < 0xF8) {
        if (UTF8._checkContinuation(input, i, 3)) {
          let ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 | (input[i + 2] & 0x3F) << 6 | input[i + 3] & 0x3F;
          if (ucs4 > 0x10000 && ucs4 < 0x110000) {
            ucs4 -= 0x10000;
            out.push(String.fromCharCode(ucs4 >>> 10 | 0xD800));
            out.push(String.fromCharCode(ucs4 & 0x3FF | 0xDC00));
            i += 4;
            continue;
          }
        }
      }
      out.push(String.fromCharCode(0xFFFD));
      ++i;
    }

    return out.join('');
  }

  static _checkContinuation(uint8array, start, checkLength) {
    let array = uint8array;
    if (start + checkLength < array.length) {
      while (checkLength--) {
        if ((array[++start] & 0xC0) !== 0x80) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}

exports.default = UTF8;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/audio-context.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/audio-context.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! events */ "../../node_modules/events/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AudioCtx extends _events2.default {
  constructor(config) {
    super();
    this.config = Object.assign({}, config);
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = new AudioContext();
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.context.destination);
    this.meta = undefined;
    this.samples = [];
    this.preloadTime = this.config.preloadTime || 3;
    this.duration = 0;

    this._currentBuffer = undefined;
    this._nextBuffer = undefined;
    this._lastpts = undefined;
    this._preDecode = [];
    this._currentTime = 0;
    this._decoding = false;
    this._volume = this.config.volume || 0.6;
    // 记录外部传输的状态
    this._played = false;
    this.playFinish = null; // pending play task
    this.waitNextID = null; // audio source end and next source not loaded
  }

  get currentTime() {
    return this._currentTime;
  }

  decodeAudio(audioTrack) {
    let { samples } = audioTrack;
    let data = samples;
    audioTrack.samples = [];
    this.setAudioData(data);
  }
  setAudioData(data) {
    for (let i = 0; i < data.length; i++) {
      data[i].pts = data[i].pts === undefined ? data[i].dts : data[i].pts;
      this._preDecode.push(data[i]);
    }
    if (this._preDecode.length > 0) {
      if (this._lastpts === undefined) {
        this._lastpts = this._preDecode[0].pts;
      }
      if ((this._preDecode[this._preDecode.length - 1].pts - this._lastpts) / 1000 > this.preloadTime) {
        this.decodeAAC();
      }
    }
  }

  decodeAAC() {
    if (this._decoding) {
      return;
    }
    this._decoding = true;
    let data = this._preDecode;
    let samples = [];
    let _this = this;
    let sample = data.shift();
    while (sample) {
      let sampleData = AudioCtx.getAACData(this.meta, sample);
      samples.push(sampleData);
      this._lastpts = sample.pts;
      sample = data.shift();
    }
    let buffer = AudioCtx.combileData(samples);
    try {
      this.context.decodeAudioData(buffer.buffer, function (buffer) {
        let audioSource = _this.context.createBufferSource();
        audioSource.buffer = buffer;
        audioSource.onended = _this.onSourceEnded.bind(_this);
        _this.samples.push({
          time: _this.duration,
          duration: buffer.duration,
          data: audioSource
        });

        _this.duration += buffer.duration;

        if (!_this._currentBuffer) {
          _this._currentBuffer = _this.getTimeBuffer(_this.currentTime);
        }

        if (!_this._nextBuffer && _this._currentBuffer) {
          _this._nextBuffer = _this.getTimeBuffer(_this.currentTime + _this._currentBuffer.duration);
        }
        _this._decoding = false;

        if ((_this._preDecode.length > 0 && _this._preDecode[_this._preDecode.length - 1].pts - _this._lastpts) / 1000 >= _this.preloadTime) {
          _this.decodeAAC();
        }

        if (_this.playFinish) {
          _this.playFinish();
        }
      }, e => {
        console.error(e);
      });
    } catch (err) {
      console.error(err);
    }
  }

  onSourceEnded() {
    if (!this._nextBuffer || !this._played) {
      this.waitNextID = setTimeout(() => {
        this.onSourceEnded();
      }, 200);
      return;
    }
    let audioSource = this._nextBuffer.data;
    audioSource.start();
    audioSource.connect(this.gainNode);
    this._currentBuffer = this._nextBuffer;
    this._currentTime = this._currentBuffer.time;
    this._nextBuffer = this.getTimeBuffer(this.currentTime);
    if (this._currentBuffer) {
      this._nextBuffer = this.getTimeBuffer(this.currentTime + this._currentBuffer.duration);
    }
    this.emit('AUDIO_SOURCE_END');
  }

  play() {
    if (this.playFinish) {
      return;
    }
    this._played = true;
    if (this.context.state === 'suspended') {
      this.context.resume();
    }

    const playStart = () => {
      let audioSource = this._currentBuffer.data;
      audioSource.connect(this.gainNode);
      audioSource.start();
    };

    if (!this._currentBuffer) {
      return new Promise(resolve => {
        this.playFinish = resolve;
      }).then(() => {
        this.playFinish = null;
        playStart();
      });
    } else {
      playStart();
      return Promise.resolve();
    }
  }

  pause() {
    const audioCtx = this.context;
    if (audioCtx.state === 'running') {
      audioCtx.suspend();
    }
  }

  destroy() {
    this.context.close();
  }

  getTimeBuffer(time) {
    let ret;
    for (let i = 0; i < this.samples.length; i++) {
      let sample = this.samples[i];
      if (sample.time <= time && sample.time + sample.duration > time) {
        ret = sample;
        break;
      }
    }
    return ret;
  }

  setAudioMetaData(meta) {
    this.meta = meta;
  }

  destroy() {
    if (this.waitNextID) {
      window.clearTimeout(this.waitNextID);
    }
  }

  set muted(val) {
    if (val) {
      this.gainNode.gain.value = 0;
    } else {
      this.gainNode.gain.value = this._volume;
    }
  }

  get volume() {
    return this._volume;
  }

  set volume(val) {
    if (val < 0) {
      this._volume = 0;
      this.gainNode.gain.value = 0;
      return;
    } else if (val > 1) {
      this._volume = 1;
      this.gainNode.gain.value = 1;
      return;
    }

    this._volume = val;
    this.gainNode.gain.value = val;
  }

  static getAACData(meta, sample) {
    let buffer = new Uint8Array(sample.data.byteLength + 7);
    let adts = AudioCtx.getAdts(meta, sample.data);
    buffer.set(adts);
    buffer.set(sample.data, 7);
    return buffer;
  }

  static combileData(samples) {
    // get length
    let length = 0;
    for (let i = 0, k = samples.length; i < k; i++) {
      length += samples[i].byteLength;
    }

    let ret = new Uint8Array(length);
    let offset = 0;
    // combile data;
    for (let i = 0, k = samples.length; i < k; i++) {
      ret.set(samples[i], offset);
      offset += samples[i].byteLength;
    }
    return ret;
  }

  static getAdts(meta, data) {
    let adts = new Uint8Array(7);

    // 设置同步位 0xfff 12bit
    adts[0] = 0xff;
    adts[1] = 0xf0;

    // Object data (没什么人用MPEG-2了，HLS和FLV也全是MPEG-4，这里直接0)  1bit
    // Level always 00 2bit
    // CRC always 1 1bit
    adts[1] = adts[1] | 0x01;

    // profile 2bit
    adts[2] = 0xc0 & meta.objectType - 1 << 6;

    // sampleFrequencyIndex
    adts[2] = adts[2] | 0x3c & meta.sampleRateIndex << 2;

    // private bit 0 1bit
    // chanel configuration 3bit
    adts[2] = adts[2] | 0x01 & meta.channelCount >> 2;
    adts[3] = 0xc0 & meta.channelCount << 6;

    // original_copy: 0 1bit
    // home: 0 1bit

    // adts_variable_header()
    // copyrighted_id_bit 0 1bit
    // copyrighted_id_start 0 1bit

    // aac_frame_length 13bit;
    let aacframelength = data.byteLength + 7;

    adts[3] = adts[3] | 0x03 & aacframelength >> 11;
    adts[4] = 0xff & aacframelength >> 3;
    adts[5] = 0xe0 & aacframelength << 5;

    // adts_buffer_fullness 0x7ff 11bit
    adts[5] = adts[5] | 0x1f;
    adts[6] = 0xfc;

    // number_of_raw_data_blocks_in_frame 0 2bit;
    return adts;
  }
}

exports.default = AudioCtx;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/mobile-video.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/mobile-video.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _videoContext = __webpack_require__(/*! ./video-context */ "../xgplayer-utils/src/mobile/video-context.js");

var _videoContext2 = _interopRequireDefault(_videoContext);

var _audioContext = __webpack_require__(/*! ./audio-context */ "../xgplayer-utils/src/mobile/audio-context.js");

var _audioContext2 = _interopRequireDefault(_audioContext);

var _ticker = __webpack_require__(/*! ./ticker */ "../xgplayer-utils/src/mobile/ticker.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 音画同步调和器
 */
class AVReconciler {
  constructor(props) {
    this.aCtx = props.aCtx;
    this.vCtx = props.vCtx;
    this.video = props.video;
    this.timeoutId = null;
    this.start = null;
  }

  doReconcile() {
    const vCurTime = this.vCtx.currentTime || 0;
    const aCurTime = (this.aCtx.currentTime || 0) * 1000;

    const gap = vCurTime - aCurTime;
    if (this.timeoutId) {
      return;
    }
    if (gap > 200) {
      // audio delayed for more than 100ms
      this.video.start += gap;
      this.vCtx.pause();
      this.timeoutId = setTimeout(() => {
        this.vCtx.play();
        this.timeoutId = null;
      }, gap);
    } else if (gap < -120) {
      this.video.start += gap;
    }
  }

  destroy() {
    this.start = null;
    this.aCtx = null;
    this.vCtx = null;
  }
}

// eslint-disable-next-line no-undef
class MobileVideo extends HTMLElement {
  constructor() {
    super();
    this._canvas = document.createElement('canvas');
    this.handleAudioSourceEnd = this.handleAudioSourceEnd.bind(this);
    this.played = false;
    this.pendingPlayTask = null;
    this._paused = true;
    this.videoMetaInited = false;
    this.audioMetaInited = false;
    this.init();
  }

  init() {
    this.vCtx = new _videoContext2.default(Object.assign({
      canvas: this._canvas
    }, { style: { width: this.width, height: this.height } }));
    this.aCtx = new _audioContext2.default({});
    this.ticker = new ((0, _ticker.getTicker)())();
    this.reconciler = new AVReconciler({
      vCtx: this.vCtx,
      aCtx: this.aCtx,
      video: this
    });
    this.vCtx.oncanplay = () => {
      if (!this.played) {
        this.appendChild(this._canvas);
      }
      this.dispatchEvent(new Event('canplay'));
    };

    this.aCtx.on('AUDIO_SOURCE_END', this.handleAudioSourceEnd);
  }

  handleAudioSourceEnd() {
    this.reconciler.doReconcile();
    this.vCtx.cleanBuffer();
  }

  _cleanBuffer() {
    this.vCtx.cleanBuffer();
  }

  destroy() {
    this.aCtx.destroy();
    this.vCtx.destroy();
    this.ticker.stop();
    this.start = null;
    this.reconciler.destroy();
    this.aCtx = null;
    this.vCtx = null;
    this.ticker = null;
  }

  onDemuxComplete(videoTrack, audioTrack) {
    this.aCtx.decodeAudio(audioTrack);
    this.vCtx.decodeVideo(videoTrack);
  }

  setAudioMeta(meta) {
    this.aCtx.setAudioMetaData(meta);
    this.audioMetaInited = true;
  }

  setVideoMeta(meta) {
    this.vCtx.setVideoMetaData(meta);
    this.videoMetaInited = true;
  }

  get width() {
    return this.getAttribute('width') || this.videoWidth;
  }

  set width(val) {
    this.style.display = 'inline-block';
    const pxVal = typeof val === 'number' ? `${val}px` : val;
    this.setAttribute('width', pxVal);
    this.style.width = pxVal;
    this._canvas.style.width = pxVal;
    this._canvas.width = val;
  }

  get height() {
    return this.getAttribute('height');
  }

  set height(val) {
    this.style.display = 'inline-block';
    const pxVal = typeof val === 'number' ? `${val}px` : val;
    this.setAttribute('height', pxVal);
    this.style.height = pxVal;
    this._canvas.style.height = pxVal;
    this._canvas.height = val;
  }

  get videoWidth() {
    if (this.vCtx && this.vCtx.videoWidth) {
      return this.vCtx.videoWidth;
    }
    return 0;
  }

  get videoHeight() {
    if (this.vCtx && this.vCtx.videoHeight) {
      return this.vCtx.videoHeight;
    }
    return 0;
  }

  get src() {
    return this.getAttribute('src');
  }

  set src(val) {
    // do nothing
  }

  get readyState() {
    return this.videoMetaInited ? this.vCtx.readyState : 0;
  }

  get seeking() {
    return this.videoMetaInited ? this.vCtx.seeking : false;
  }

  get currentTime() {
    return this.videoMetaInited ? this.vCtx.currentTime / 1000 : 0;
  }

  get duration() {
    return this.audioMetaInited ? this.aCtx.duration : 0;
  }

  get paused() {
    return this._paused;
  }

  get playbackRate() {
    if (this.hasAttribute('playbackRate')) {
      return this.getAttribute('playbackRate');
    } else {
      return 1.0;
    }
  }

  set playbackRate(val) {
    this.setAttribute('playbackrate', val);
    this.aCtx.playbackRate = val;
    this.vCtx.playbackRate = val;

    this.dispatchEvent(new Event('ratechange'));
  }

  get ended() {
    if (this.audioMetaInited) {
      return this.aCtx.ended;
    }
    return false;
  }

  get autoplay() {
    if (this.hasAttribute('autoplay')) {
      return this.getAttribute('autoplay');
    } else {
      return false;
    }
  }

  play() {
    if (this.pendingPlayTask) {
      return;
    }

    if (this.played) {
      this.destroy();
      this.init();
    }
    this.pendingPlayTask = Promise.all([this.vCtx.play(), this.aCtx.play()]).then(() => {
      this.ticker.start(() => {
        if (!this.start) {
          this.start = Date.now();
        }
        this._currentTime = Date.now() - this.start;
        this.vCtx._onTimer(this._currentTime);
      });

      this.pendingPlayTask = null;
      this.played = true;
      this.dispatchEvent(new Event('play'));
      this._paused = false;
    });
  }

  pause() {
    this._paused = true;
    this.aCtx.pause();
    this.vCtx.pause();

    this.dispatchEvent(new Event('pause'));
  }

  get volume() {
    return this.aCtx.volume;
  }

  set volume(vol) {
    this.setAttribute('volume', vol);
    this.aCtx.volume = vol;
  }

  get muted() {
    const attrMuted = this.getAttribute('muted') === 'true';
    if (attrMuted !== undefined) {
      return attrMuted;
    } else if (this.getAttribute('volume')) {
      return Number.parseInt(this.getAttribute('volume')) === 0;
    } else {
      return false;
    }
  }

  set muted(val) {
    this.setAttribute('muted', val);
    if (!val) {
      this.aCtx.muted = false;
    } else {
      this.aCtx.muted = true;
    }
  }

  get error() {
    return this.vCtx.error || this.aCtx.error;
  }

  get buffered() {
    return this.vCtx.buffered;
  }
}
// eslint-disable-next-line no-undef
customElements.define('mobile-video', MobileVideo);

/***/ }),

/***/ "../xgplayer-utils/src/mobile/sourcebuffer.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/sourcebuffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class SourceBuffer {
  constructor(config) {
    this.config = Object.assign({}, config);
    this.type = this.config.type;
    this.buffer = [];
    this.currentGop = undefined;
    this._lastGet = undefined;
  }

  push(frame) {
    if (this.type === 'video') {
      if (frame.isKeyframe) {
        let currentGop = {
          samples: [],
          start: frame.dts,
          end: frame.dts,
          nextGop: undefined
        };
        if (this.currentGop) {
          this.currentGop.nextGop = currentGop;
        }
        this.currentGop = currentGop;
        this.buffer.push(this.currentGop);
      }

      if (this.currentGop) {
        this.currentGop.samples.push(frame);

        if (frame.dts < this.currentGop.start) {
          this.currentGop.start = frame.dts;
        }

        if (frame.dts > this.currentGop.end) {
          this.currentGop.end = frame.dts;
        }
      }
    }
  }

  get(time) {
    if (this.type === 'video') {
      if (this.buffer.length < 1) {
        return;
      }

      if (time === undefined) {
        let sample = this._getNext();
        return sample;
      }
    }
  }

  _getNext() {
    if (!this._lastGet) {
      let gop = this.buffer[0];
      if (gop.samples.length < 1) {
        return;
      }

      this._lastGet = {
        gop,
        index: 0
      };
      return gop.samples[0];
    } else {
      let gop = this._lastGet.gop;
      let sample = gop.samples[this._lastGet.index + 1];
      if (sample) {
        this._lastGet.index = this._lastGet.index + 1;
        return sample;
      } else {
        gop = gop.nextGop;
        if (!gop || gop.samples.length < 1) {
          return;
        }
        sample = gop.samples[0];
        this._lastGet = {
          gop,
          index: 0
        };
        return sample;
      }
    }
  }

  remove(start, end) {
    if (this.buffer.length < 0) {
      return;
    }

    let i = 0;
    let gop = this.buffer[0];
    while (gop) {
      if (gop.end < end && gop.start >= start) {
        this.buffer.splice(i, 1);
        gop = this.buffer[i];
      } else {
        i += 1;
        gop = this.buffer[i];
      }
    }
  }
}

exports.default = SourceBuffer;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/ticker.js":
/*!**********************************************!*\
  !*** ../xgplayer-utils/src/mobile/ticker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author fuyuhao@bytedance.com
 */

class Ticker {
  constructor(options) {
    this.options = Object.assign({}, options || {}, {
      interval: 16
    });

    this.callbacks = [];
  }

  start(...callbacks) {
    this.callbacks = callbacks;
  }

  onTick() {
    for (let i = 0, len = this.callbacks.length; i < len; i++) {
      const callback = this.callbacks[i];
      callback();
    }
  }

  setInterval(interval) {
    this.options.interval = interval;
    return this;
  }
}

/**
 * ticker use requestAnimationFrame
 */
class RafTicker extends Ticker {
  constructor(props) {
    super(props);
    this.prev = null;
    this.timerId = null;
    this._subTimerId = null;

    this._tickFunc = RafTicker.getTickFunc();
    this.tick = this.tick.bind(this);
  }

  start(...callbacks) {
    super.start(...callbacks);
    this.tick();
  }

  tick() {
    this.nextTick();
    this.onTick();
  }

  nextTick() {
    const { _tickFunc } = this;
    this.timerId = _tickFunc(this.tick);
  }

  stop() {
    if (this.timerId) {
      const cancelFunc = RafTicker.getCancelFunc();

      cancelFunc(this.timerId);
    }
  }

  resume() {
    this.nextTick();
  }

  static getTickFunc() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }

  static getCancelFunc() {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame;
  }

  static isSupported() {
    return RafTicker.getTickFunc() !== undefined;
  }
}

/**
 * use setTimeout for browsers without raf support
 */
class TimeoutTicker extends Ticker {
  constructor(config) {
    super(config);
    this.timeoutId = null;
  }

  start(...callbacks) {
    super.nextTick(...callbacks);
    this.timeoutId = window.setInterval(() => {
      this.onTick();
    }, this.options.interval || 16);
  }

  stop() {
    if (this.timeoutId) {
      window.clearInterval(this.timeoutId);
    }
  }

}

/**
 * 返回Ticker构造函数
 * @returns {Ticker}
 */
const getTicker = exports.getTicker = () => {
  if (RafTicker.isSupported()) {
    return RafTicker;
  } else {
    return TimeoutTicker;
  }
};

/***/ }),

/***/ "../xgplayer-utils/src/mobile/video-context.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/video-context.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webworkifyWebpack = __webpack_require__(/*! webworkify-webpack */ "../xgplayer-utils/node_modules/webworkify-webpack/index.js");

var _webworkifyWebpack2 = _interopRequireDefault(_webworkifyWebpack);

var _stream = __webpack_require__(/*! ../write/stream */ "../xgplayer-utils/src/write/stream.js");

var _stream2 = _interopRequireDefault(_stream);

var _nalunit = __webpack_require__(/*! ../../../xgplayer-codec/src/h264/nalunit */ "../xgplayer-codec/src/h264/nalunit/index.js");

var _nalunit2 = _interopRequireDefault(_nalunit);

var _yuvCanvas = __webpack_require__(/*! ./yuv-canvas */ "../xgplayer-utils/src/mobile/yuv-canvas.js");

var _yuvCanvas2 = _interopRequireDefault(_yuvCanvas);

var _sourcebuffer = __webpack_require__(/*! ./sourcebuffer */ "../xgplayer-utils/src/mobile/sourcebuffer.js");

var _sourcebuffer2 = _interopRequireDefault(_sourcebuffer);

var _TimeRanges = __webpack_require__(/*! ../models/TimeRanges */ "../xgplayer-utils/src/models/TimeRanges.js");

var _TimeRanges2 = _interopRequireDefault(_TimeRanges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VideoCanvas {
  constructor(config) {
    this.config = Object.assign({}, config);
    this.canvas = this.config.canvas ? this.config.canvas : document.createElement('canvas');
    this.source = new _sourcebuffer2.default({ type: 'video' });
    this.preloadTime = this.config.preloadTime || 3;
    this.oncanplay = undefined;
    this.onFirstFrame = undefined;
    this.meta = undefined;
    this.readyStatus = 0;
    this.paused = true;
    this.count = 0;
    this.currentTime = 0;
    this.lastPlayed = 0;

    this._decoderInited = false;
    this._avccpushed = false;
    this._decodedFrames = {};
    this._lastSampleDts = undefined;
    this._baseDts = undefined;
    this._lastRenderTime = null;
    this.playFinish = null;
  }

  pause() {
    this.paused = true;
  }

  initWasmWorker() {
    let _this = this;
    this.wasmworker = (0, _webworkifyWebpack2.default)(/*require.resolve*/(/*! ./worker.js */ "../xgplayer-utils/src/mobile/worker.js"));
    this.wasmworker.postMessage({
      msg: 'init',
      meta: this.meta
    });
    this.wasmworker.addEventListener('message', msg => {
      switch (msg.data.msg) {
        case 'DECODER_READY':
          _this._decoderInited = true;
          break;
        case 'DECODED':
          this._onDecoded(msg.data);
          break;
      }
    });
  }

  setVideoMetaData(meta) {
    this.meta = meta;
    if (!this._decoderInited) {
      this.initWasmWorker();
      return;
    }
    this._avccpushed = true;
    let data = new Uint8Array(meta.sps.byteLength + 4);
    data.set([0, 0, 0, 1]);
    data.set(meta.sps, 4);
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data
    });

    data = new Uint8Array(meta.pps.byteLength + 4);
    data.set([0, 0, 0, 1]);
    data.set(meta.pps, 4);
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data
    });

    if (!this.yuvCanvas) {
      let config = Object.assign({ meta, canvas: this.canvas }, this.config);
      this.yuvCanvas = new _yuvCanvas2.default(config);
    }
    this.readyStatus = 1;
  }

  decodeVideo(videoTrack) {
    if (!this._decoderInited) {
      return;
    }

    if (!this._avccpushed) {
      this.setVideoMetaData(this.meta);
    }
    let { samples } = videoTrack;
    let sample = samples.shift();

    while (sample) {
      if (!this._baseDts) {
        this._baseDts = sample.dts;
      }
      this.source.push(sample);
      sample = samples.shift();
    }

    this._preload();
  }

  _preload() {
    if (!this._lastSampleDts || this._lastSampleDts - this._baseDts < this.currentTime + this.preloadTime * 1000) {
      let sample = this.source.get();
      if (sample) {
        this._lastSampleDts = sample.dts;
        this._analyseNal(sample);
      }

      while (sample && this._lastSampleDts - this._baseDts < this.currentTime + this.preloadTime * 1000) {
        sample = this.source.get();
        if (sample) {
          this._analyseNal(sample);
          this._lastSampleDts = sample.dts;
        }
      }
    }
  }

  _analyseNal(sample) {
    let nals = _nalunit2.default.getAvccNals(new _stream2.default(sample.data.buffer));

    let length = 0;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      length += nal.body.byteLength + 4;
    }
    let offset = 0;
    let data = new Uint8Array(length);
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      data.set([0, 0, 0, 1], offset);
      offset += 4;
      data.set(new Uint8Array(nal.body), offset);
      offset += nal.body.byteLength;
    }
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data,
      info: {
        dts: sample.dts,
        pts: sample.pts ? sample.pts : sample.dts + sample.cts,
        key: sample.isKeyframe
      }
    });
  }

  _onDecoded(data) {
    let { dts } = data.info;
    this._decodedFrames[dts] = data;
    if (Object.keys(this._decodedFrames).length > 10) {
      if (this.playFinish) {
        this.playFinish();
      }
      if (this.oncanplay) {
        this.oncanplay();
      }
    }
  }

  play() {
    this.paused = false;
    return new Promise(resolve => {
      this.playFinish = resolve;
    }).then(() => {
      this.playFinish = null;
    });
  }

  _onTimer(currentTime) {
    if (this.paused) {
      return;
    }
    if (this.meta) {
      if (this.meta.frameRate && this.meta.frameRate.fixed && this.meta.frameRate.fps) {}
      let frameTimes = Object.keys(this._decodedFrames);
      if (frameTimes.length > 0) {
        this.currentTime = currentTime;
        let frameTime = -1;
        for (let i = 0; i < frameTimes.length && Number.parseInt(frameTimes[i]) - this._baseDts <= this.currentTime; i++) {
          frameTime = Number.parseInt(frameTimes[i - 1]);
        }

        let frame = this._decodedFrames[frameTime];
        if (frame) {
          this.yuvCanvas.render(frame.buffer, frame.width, frame.height, frame.yLinesize, frame.uvLinesize);
        }
        for (let i = 0; i < frameTimes.length; i++) {
          if (Number.parseInt(frameTimes[i]) < frameTime) {
            delete this._decodedFrames[frameTimes[i]];
          }
        }
      }
    }
    this._lastRenderTime = Date.now();
  }

  cleanBuffer() {
    if (this.currentTime > 1) {
      this.source.remove(0, this.currentTime - 1);
    }
  }

  destroy() {
    this.wasmworker = null;
    this.canvas = null;
    this.source = null;
    this._decoderInited = false;
  }

  get buffered() {
    const ranges = [];
    let currentRange = {
      start: null,
      end: null
    };
    for (let i = 0; i < this.source.buffer.length; i++) {
      const { start, end } = this.source.buffer[i];
      if (!currentRange.start) {
        currentRange.start = start;
      }
      if (!currentRange.end) {
        currentRange.end = end;
      }

      if (start - currentRange.end > 1000) {
        currentRange.start = currentRange.start / 1000;
        currentRange.end = currentRange.end / 1000;
        currentRange = {
          start,
          end
        };
      } else {
        currentRange.end = end;
      }
    }

    if (currentRange.start !== null && currentRange.end !== null) {
      currentRange.start = currentRange.start / 1000;
      currentRange.end = currentRange.end / 1000;
      ranges.push(currentRange);
    }

    return new _TimeRanges2.default(ranges);
  }

}
exports.default = VideoCanvas;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/worker.js":
/*!**********************************************!*\
  !*** ../xgplayer-utils/src/mobile/worker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const MAX_STREAM_BUFFER_LENGTH = 1024 * 1024;
var Decoder = function (self) {
  this.inited = false;
  this.self = self;
  this.meta = this.self.meta;
  this.infolist = {};
  self.par_broadwayOnBroadwayInited = this.broadwayOnBroadwayInited.bind(this);
  self.par_broadwayOnPictureDecoded = this.broadwayOnPictureDecoded.bind(this);
};

Decoder.prototype.toU8Array = function (ptr, length) {
  return this.self.HEAPU8.subarray(ptr, ptr + length);
};

Decoder.prototype.init = function () {
  Module._broadwayInit();
  this.streamBuffer = this.toU8Array(Module._broadwayCreateStream(MAX_STREAM_BUFFER_LENGTH), MAX_STREAM_BUFFER_LENGTH);
};

Decoder.prototype.broadwayOnPictureDecoded = function (offset, width, height, yLinesize, uvLinesize, infoid) {
  let info = Object.assign({}, this.infolist[infoid]);
  let yRowcount = height;
  let uvRowcount = height / 2;
  if (this.meta.chromaFormat === 444 || this.meta.chromaFormat === 422) {
    uvRowcount = height;
  }
  let data = this.toU8Array(offset, yLinesize * yRowcount + 2 * (uvLinesize * uvRowcount));
  this.infolist[infoid] = null;
  let datetemp = new Uint8Array(data.length);
  datetemp.set(data);
  let buffer = datetemp.buffer;
  this.self.postMessage({
    msg: 'DECODED',
    width,
    height,
    yLinesize,
    uvLinesize,
    info,
    buffer
  }, [buffer]);
};

Decoder.prototype.broadwayOnBroadwayInited = function () {
  this.inited = true;
  this.self.postMessage({ msg: 'DECODER_READY' });
};

Decoder.prototype.decode = function (data, info) {
  let time = parseInt(new Date().getTime());
  let infoid = time - Math.floor(time / 10e8) * 10e8;
  this.infolist[infoid] = info;
  this.streamBuffer.set(data);
  Module._broadwayPlayStream(data.length, infoid);
};

var decoder;

function onPostRun() {
  decoder = new Decoder(this);
  decoder.init();
}

function init(meta) {
  self.importScripts('https://sf1-vcloudcdn.pstatp.com/obj/ttfe/media/decoder/h264/decoder.js');
  addOnPostRun(onPostRun.bind(self));
}

module.exports = function (self) {
  self.addEventListener('message', function (e) {
    var data = e.data;
    if (!data.msg) {
      self.postMessage({
        msg: 'ERROR:invalid message'
      });
    } else {
      switch (data.msg) {
        case 'init':
          console.log(data);
          self.meta = data.meta;
          init();
          break;
        case 'decode':
          decoder.decode(data.data, data.info);
          break;
        default:
          break;
      }
    }
  }, false);
};

/***/ }),

/***/ "../xgplayer-utils/src/mobile/yuv-canvas.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/mobile/yuv-canvas.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class YUVCanvas {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.canvas = this.configs.canvas;
    this.meta = Object.assign({}, this.configs.meta);
    this.chroma = this.meta.chromaFormat;
    this.height = this.meta.presentHeight;
    this.width = this.meta.presentWidth;
    // this.canvas.width = this.meta.presentWidth;
    // this.canvas.height = this.meta.presentHeight;
    // this.canvas.style.width = configs.style.width;
    // this.canvas.style.height = configs.style.height;
    this._initContextGL();
    if (this.contextGL) {
      this._initProgram();
      this._initBuffers();
      this._initTextures();
    };
  }

  _initContextGL() {
    var canvas = this.canvas;
    var gl = null;

    var validContextNames = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'];
    var nameIndex = 0;

    while (!gl && nameIndex < validContextNames.length) {
      var contextName = validContextNames[nameIndex];

      try {
        if (this.contextOptions) {
          gl = canvas.getContext(contextName, this.contextOptions);
        } else {
          gl = canvas.getContext(contextName);
        };
      } catch (e) {
        gl = null;
      }

      if (!gl || typeof gl.getParameter !== 'function') {
        gl = null;
      }

      ++nameIndex;
    };

    this.contextGL = gl;
  }

  _initProgram() {
    var gl = this.contextGL;

    // vertex shader is the same for all types
    var vertexShaderScript;
    var fragmentShaderScript;
    vertexShaderScript = ['attribute vec4 vertexPos;', 'attribute vec4 texturePos;', 'attribute vec4 uTexturePos;', 'attribute vec4 vTexturePos;', 'varying vec2 textureCoord;', 'varying vec2 uTextureCoord;', 'varying vec2 vTextureCoord;', 'void main()', '{', '  gl_Position = vertexPos;', '  textureCoord = texturePos.xy;', '  uTextureCoord = uTexturePos.xy;', '  vTextureCoord = vTexturePos.xy;', '}'].join('\n');

    fragmentShaderScript = ['precision highp float;', 'varying highp vec2 textureCoord;', 'varying highp vec2 uTextureCoord;', 'varying highp vec2 vTextureCoord;', 'uniform sampler2D ySampler;', 'uniform sampler2D uSampler;', 'uniform sampler2D vSampler;', 'uniform mat4 YUV2RGB;', 'void main(void) {', '  highp float y = texture2D(ySampler,  textureCoord).r;', '  highp float u = texture2D(uSampler,  uTextureCoord).r;', '  highp float v = texture2D(vSampler,  vTextureCoord).r;', '  gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;', '}'].join('\n');

    var YUV2RGB = [1.16438, 0.00000, 1.59603, -0.87079, 1.16438, -0.39176, -0.81297, 0.52959, 1.16438, 2.01723, 0.00000, -1.08139, 0, 0, 0, 1];
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderScript);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.log('Vertex shader failed to compile: ' + gl.getShaderInfoLog(vertexShader));
    }

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderScript);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.log('Fragment shader failed to compile: ' + gl.getShaderInfoLog(fragmentShader));
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.log('Program failed to compile: ' + gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);

    var YUV2RGBRef = gl.getUniformLocation(program, 'YUV2RGB');
    gl.uniformMatrix4fv(YUV2RGBRef, false, YUV2RGB);

    this.shaderProgram = program;
  }

  _initBuffers() {
    var gl = this.contextGL;
    var program = this.shaderProgram;

    var vertexPosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);

    var vertexPosRef = gl.getAttribLocation(program, 'vertexPos');
    gl.enableVertexAttribArray(vertexPosRef);
    gl.vertexAttribPointer(vertexPosRef, 2, gl.FLOAT, false, 0, 0);

    var texturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var texturePosRef = gl.getAttribLocation(program, 'texturePos');
    gl.enableVertexAttribArray(texturePosRef);
    gl.vertexAttribPointer(texturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.texturePosBuffer = texturePosBuffer;

    var uTexturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var uTexturePosRef = gl.getAttribLocation(program, 'uTexturePos');
    gl.enableVertexAttribArray(uTexturePosRef);
    gl.vertexAttribPointer(uTexturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.uTexturePosBuffer = uTexturePosBuffer;

    var vTexturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var vTexturePosRef = gl.getAttribLocation(program, 'vTexturePos');
    gl.enableVertexAttribArray(vTexturePosRef);
    gl.vertexAttribPointer(vTexturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.vTexturePosBuffer = vTexturePosBuffer;
  }

  _initTextures() {
    var gl = this.contextGL;
    var program = this.shaderProgram;
    var yTextureRef = this._initTexture();
    var ySamplerRef = gl.getUniformLocation(program, 'ySampler');
    gl.uniform1i(ySamplerRef, 0);
    this.yTextureRef = yTextureRef;

    var uTextureRef = this._initTexture();
    var uSamplerRef = gl.getUniformLocation(program, 'uSampler');
    gl.uniform1i(uSamplerRef, 1);
    this.uTextureRef = uTextureRef;

    var vTextureRef = this._initTexture();
    var vSamplerRef = gl.getUniformLocation(program, 'vSampler');
    gl.uniform1i(vSamplerRef, 2);
    this.vTextureRef = vTextureRef;
  }

  _initTexture() {
    var gl = this.contextGL;

    var textureRef = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, textureRef);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);

    return textureRef;
  }

  _drawPictureGL(data, width, height, yLinesize, uvLinesize) {
    var ylen = yLinesize * height;
    var uvlen = uvLinesize * height / 2;
    if (this.chroma === 444 || this.chroma === 422) {
      uvlen *= 2;
    }
    data = new Uint8Array(data);
    let renderData = {
      yData: data.subarray(0, ylen),
      uData: data.subarray(ylen, ylen + uvlen),
      vData: data.subarray(ylen + uvlen, ylen + uvlen + uvlen)
    };
    this._drawPictureGL420(renderData, width, height, yLinesize, uvLinesize);
  }

  _drawPictureGL420(data, width, height, yLinesize, uvLinesize) {
    var gl = this.contextGL;
    var texturePosBuffer = this.texturePosBuffer;
    var uTexturePosBuffer = this.uTexturePosBuffer;
    var vTexturePosBuffer = this.vTexturePosBuffer;

    var yTextureRef = this.yTextureRef;
    var uTextureRef = this.uTextureRef;
    var vTextureRef = this.vTextureRef;

    var yData = data.yData;
    var uData = data.uData;
    var vData = data.vData;

    var yDataPerRow = yLinesize;
    var yRowCnt = height;

    var uDataPerRow = width / 2;
    var uRowCnt = height / 2;

    if (this.chroma === 422 || this.chroma === 444) {
      uRowCnt = height;
    }

    var vDataPerRow = uvLinesize;
    var vRowCnt = uRowCnt;

    let ratiow = this.canvas.width / this.width;
    let ratioh = this.canvas.height / this.height;
    let left = 0;
    let top = 0;
    let w = this.canvas.width;
    let h = this.canvas.height;
    if (ratiow < ratioh) {
      h = this.height * this.canvas.width / this.width;
      top = parseInt((this.canvas.height - this.height * this.canvas.width / this.width) / 2);
    } else {
      w = this.width * this.canvas.height / this.height;
      left = parseInt((this.canvas.width - this.width * this.canvas.height / this.height) / 2);
    }
    gl.viewport(left, top, w, h);

    var texturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texturePosValues, gl.DYNAMIC_DRAW);

    var uTexturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, uTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uTexturePosValues, gl.DYNAMIC_DRAW);

    var vTexturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, vTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vTexturePosValues, gl.DYNAMIC_DRAW);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, yTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, yDataPerRow, yRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, yData);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, uTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, uDataPerRow, uRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, uData);

    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, vTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, vDataPerRow, vRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, vData);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  _drawPictureRGB(data) {}

  render(data, width, height, yLinesize, uvLinesize) {
    var gl = this.contextGL;
    if (gl) {
      this._drawPictureGL(data, width, height, yLinesize, uvLinesize);
    } else {
      this._drawPictureRGB(data);
    }
  }
}

exports.default = YUVCanvas;

/***/ }),

/***/ "../xgplayer-utils/src/models/TimeRanges.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/TimeRanges.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class TimeRanges {
  constructor(ranges) {
    this.ranges = ranges || [];
  }

  start(idx) {
    return this.ranges[idx] ? this.ranges[idx].start : 0;
  }

  end(idx) {
    return this.ranges[idx] ? this.ranges[idx].end : 0;
  }

  add(range) {
    this.ranges.push(range);
  }

  get length() {
    return this.ranges.length;
  }
}
exports.default = TimeRanges;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-info.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/media-info.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const isObjectFilled = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null) {
        return false;
      }
    }
  }
  return true;
};

class MediaInfo {
  constructor() {
    this.mimeType = null;
    this.duration = null;

    this.hasVideo = null;
    this.video = {
      codec: null,
      width: null,
      height: null,
      profile: null,
      level: null,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25000,
        fps_den: 1000
      },
      chromaFormat: null,
      parRatio: {
        width: 1,
        height: 1
      }
    };

    this.hasAudio = null;

    this.audio = {
      codec: null,
      sampleRate: null,
      sampleRateIndex: null,
      channelCount: null
    };
  }

  isComplete() {
    return MediaInfo.isBaseInfoReady(this) && MediaInfo.isVideoReady(this) && MediaInfo.isAudioReady(this);
  }

  static isBaseInfoReady(mediaInfo) {
    return isObjectFilled(mediaInfo);
  }

  static isVideoReady(mediaInfo) {
    if (!mediaInfo.hasVideo) {
      return true;
    }

    return isObjectFilled(mediaInfo.video);
  }

  static isAudioReady(mediaInfo) {
    if (!mediaInfo.hasAudio) {
      return true;
    }

    return isObjectFilled(mediaInfo.video);
  }
}
exports.default = MediaInfo;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-sample.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/models/media-sample.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class MediaSample {
  constructor(info) {
    let _default = MediaSample.getDefaultInf();

    if (!info || Object.prototype.toString.call(info) !== '[object Object]') {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    Object.entries(sample).forEach(([k, v]) => {
      this[k] = v;
    });
  }

  static getDefaultInf() {
    return {
      dts: null,
      pts: null,
      duration: null,
      position: null,
      isRAP: false, // is Random access point
      originDts: null
    };
  }
}
exports.default = MediaSample;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-segment-list.js":
/*!**********************************************************!*\
  !*** ../xgplayer-utils/src/models/media-segment-list.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
class MediaSegmentList {

    constructor(type) {
        this._type = type;
        this._list = [];
        this._lastAppendLocation = -1; // cached last insert location
    }

    get type() {
        return this._type;
    }

    get length() {
        return this._list.length;
    }

    isEmpty() {
        return this._list.length === 0;
    }

    clear() {
        this._list = [];
        this._lastAppendLocation = -1;
    }

    _searchNearestSegmentBefore(beginDts) {
        let list = this._list;
        if (list.length === 0) {
            return -2;
        }
        let last = list.length - 1;
        let mid = 0;
        let lbound = 0;
        let ubound = last;

        let idx = 0;

        if (beginDts < list[0].originDts) {
            idx = -1;
            return idx;
        }

        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || beginDts > list[mid].lastSample.originDts && beginDts < list[mid + 1].originDts) {
                idx = mid;
                break;
            } else if (list[mid].originDts < beginDts) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }
        return idx;
    }

    _searchNearestSegmentAfter(beginDts) {
        return this._searchNearestSegmentBefore(beginDts) + 1;
    }

    append(segment) {
        let list = this._list;
        let lastAppendIdx = this._lastAppendLocation;
        let insertIdx = 0;

        if (lastAppendIdx !== -1 && lastAppendIdx < list.length && segment.originStartDts >= list[lastAppendIdx].lastSample.originDts && (lastAppendIdx === list.length - 1 || lastAppendIdx < list.length - 1 && segment.originStartDts < list[lastAppendIdx + 1].originStartDts)) {
            insertIdx = lastAppendIdx + 1; // use cached location idx
        } else {
            if (list.length > 0) {
                insertIdx = this._searchNearestSegmentBefore(segment.originStartDts) + 1;
            }
        }

        this._lastAppendLocation = insertIdx;
        this._list.splice(insertIdx, 0, segment);
    }

    getLastSegmentBefore(beginDts) {
        let idx = this._searchNearestSegmentBefore(beginDts);
        if (idx >= 0) {
            return this._list[idx];
        } else {
            // -1
            return null;
        }
    }

    getLastSampleBefore(beginDts) {
        let segment = this.getLastSegmentBefore(beginDts);
        if (segment !== null) {
            return segment.lastSample;
        } else {
            return null;
        }
    }

    getLastRAPBefore(beginDts) {
        let segmentIdx = this._searchNearestSegmentBefore(beginDts);
        let randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
        while (randomAccessPoints.length === 0 && segmentIdx > 0) {
            segmentIdx--;
            randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
        }
        if (randomAccessPoints.length > 0) {
            return randomAccessPoints[randomAccessPoints.length - 1];
        } else {
            return null;
        }
    }

}
exports.default = MediaSegmentList;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-segment.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/models/media-segment.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
class MediaSegment {
    constructor() {
        this.startDts = -1;
        this.endDts = -1;
        this.startPts = -1;
        this.endPts = -1;
        this.originStartDts = -1;
        this.originEndDts = -1;
        this.randomAccessPoints = [];
        this.firstSample = null;
        this.lastSample = null;
    }

    addRAP(sample) {
        sample.isRAP = true;
        this.randomAccessPoints.push(sample);
    }
}
exports.default = MediaSegment;

/***/ }),

/***/ "../xgplayer-utils/src/models/track-meta.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/track-meta.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class AudioTrackMeta {
  constructor(meta) {
    const _default = {
      sampleRate: 48000,
      channelCount: 2,
      codec: 'mp4a.40.2',
      config: [41, 401, 136, 0],
      duration: 0,
      id: 2,
      refSampleDuration: 21,
      sampleRateIndex: 3,
      timescale: 1000,
      type: 'audio'
    };
    if (meta) {
      return Object.assign({}, _default, meta);
    }
    return _default;
  }

  destroy() {
    this.init = null;
  }
}

exports.AudioTrackMeta = AudioTrackMeta;
class VideoTrackMeta {
  constructor(meta) {
    const _default = {
      avcc: null,
      sps: new Uint8Array(0),
      pps: new Uint8Array(0),
      chromaFormat: 420,
      codec: 'avc1.640020',
      codecHeight: 720,
      codecWidth: 1280,
      duration: 0,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25000,
        fps_den: 1000
      },
      id: 1,
      level: '3.2',
      presentHeight: 720,
      presentWidth: 1280,
      profile: 'High',
      refSampleDuration: 40,
      parRatio: {
        height: 1,
        width: 1
      },
      timescale: 1000,
      type: 'video'
    };

    if (meta) {
      return Object.assign({}, _default, meta);
    }
    return _default;
  }

  destroy() {
    this.init = null;
    this.sps = null;
    this.pps = null;
  }
}
exports.VideoTrackMeta = VideoTrackMeta;

/***/ }),

/***/ "../xgplayer-utils/src/models/track-sample.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/models/track-sample.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class AudioTrackSample {
  constructor(info) {
    let _default = AudioTrackSample.getDefault();
    if (!info) {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    return sample;
  }

  static getDefault() {
    return {
      dts: null,
      pts: null,
      data: new Uint8Array()
    };
  }
}

exports.AudioTrackSample = AudioTrackSample;
class VideoTrackSample {
  constructor(info) {
    let _default = VideoTrackSample.getDefault();

    if (!info) {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    return sample;
  }

  static getDefault() {
    return {
      dts: null,
      pts: null,
      isKeyframe: false, // is Random access point
      originDts: null,
      data: new Uint8Array()
    };
  }
}
exports.VideoTrackSample = VideoTrackSample;

/***/ }),

/***/ "../xgplayer-utils/src/mse/index.js":
/*!******************************************!*\
  !*** ../xgplayer-utils/src/mse/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class MSE {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.container = this.configs.container;
    this.mediaSource = null;
    this.sourceBuffers = {};
    this.preloadTime = this.configs.preloadTime || 1;
    this.onSourceOpen = this.onSourceOpen.bind(this);
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onUpdateEnd = this.onUpdateEnd.bind(this);
    this.onWaiting = this.onWaiting.bind(this);
  }

  init() {
    // eslint-disable-next-line no-undef
    this.mediaSource = new self.MediaSource();
    this.mediaSource.addEventListener('sourceopen', this.onSourceOpen);
    this.container.src = URL.createObjectURL(this.mediaSource);
    this.url = this.container.src;
    this.container.addEventListener('timeupdate', this.onTimeUpdate);
    this.container.addEventListener('waiting', this.onWaiting);
  }

  onTimeUpdate() {
    this.emit('TIME_UPDATE', this.container);
  }

  onWaiting() {
    this.emit('WAITING', this.container);
  }

  onSourceOpen() {
    this.addSourceBuffers();
  }

  onUpdateEnd() {
    this.emit('SOURCE_UPDATE_END');
    this.doAppend();
  }
  addSourceBuffers() {
    if (this.mediaSource.readyState !== 'open') {
      return;
    }
    let sources = this._context.getInstance('PRE_SOURCE_BUFFER');
    let tracks = this._context.getInstance('TRACKS');
    let track;

    sources = sources.sources;
    let add = false;
    for (let i = 0, k = Object.keys(sources).length; i < k; i++) {
      let type = Object.keys(sources)[i];
      if (type === 'audio') {
        track = tracks.audioTrack;
      } else if (type === 'video') {
        track = tracks.videoTrack;
        // return;
      }
      if (track) {
        let dur = type === 'audio' ? 21 : 40;
        if (track.meta && track.meta.refSampleDuration) dur = track.meta.refSampleDuration;
        if (sources[type].data.length >= this.preloadTime / dur) {
          add = true;
        }
      }
    }

    if (add) {
      if (Object.keys(this.sourceBuffers).length > 0) {
        return;
      }
      for (let i = 0, k = Object.keys(sources).length; i < k; i++) {
        let type = Object.keys(sources)[i];
        let source = sources[type];
        let mime = type === 'video' ? 'video/mp4;codecs=' + source.mimetype : 'audio/mp4;codecs=' + source.mimetype;
        let sourceBuffer = this.mediaSource.addSourceBuffer(mime);
        this.sourceBuffers[type] = sourceBuffer;
        sourceBuffer.addEventListener('updateend', this.onUpdateEnd);
        this.doAppend();
      }
    }
  }

  doAppend() {
    let sources = this._context.getInstance('PRE_SOURCE_BUFFER');
    if (sources) {
      for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        let type = Object.keys(this.sourceBuffers)[i];
        let sourceBuffer = this.sourceBuffers[type];
        if (!sourceBuffer.updating) {
          let source = sources.sources[type];
          if (source && !source.inited) {
            // console.log('append initial segment')
            sourceBuffer.appendBuffer(source.init.buffer.buffer);
            source.inited = true;
          } else if (source) {
            let data = source.data.shift();
            if (data) {
              sourceBuffer.appendBuffer(data.buffer.buffer);
            }
          }
        }
      }
    }
  }

  endOfStream() {
    const { readyState, activeSourceBuffers } = this.mediaSource;
    if (readyState === 'open' && activeSourceBuffers.length === 0) {
      try {
        this.mediaSource.endOfStream();
      } catch (e) {
        // log
      }
    }
  }

  remove(end, start = 0) {
    for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
      let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      if (!buffer.updating) {
        // console.log(start, end)
        buffer.remove(start, end);
      }
    }
  }
  removeBuffers() {
    const taskList = [];
    for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
      let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      buffer.removeEventListener('updateend', this.onUpdateEnd);

      let task;
      if (buffer.updating) {
        task = new Promise(resolve => {
          const doCleanBuffer = function () {
            let retryTime = 3;

            const clean = () => {
              if (!buffer.updating) {
                MSE.clearBuffer(buffer);
                resolve();
              } else if (retryTime > 0) {
                setTimeout(clean, 200);
                retryTime--;
              } else {
                resolve();
              }
            };

            setTimeout(clean, 200);
            buffer.removeEventListener('updateend', doCleanBuffer);
          };
          buffer.addEventListener('updateend', doCleanBuffer);
        });
      } else {
        MSE.clearBuffer(buffer);
        task = Promise.resolve();
      }

      taskList.push(task);
    }

    return Promise.all(taskList);
  }

  destroy() {
    return this.removeBuffers().then(() => {
      for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
        this.mediaSource.removeSourceBuffer(buffer);
        delete this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      }

      this.container.removeEventListener('timeupdate', this.onTimeUpdate);
      this.container.removeEventListener('waiting', this.onWaiting);
      this.mediaSource.removeEventListener('sourceopen', this.onSourceOpen);

      this.endOfStream();
      window.URL.revokeObjectURL(this.url);

      this.url = null;
      this.configs = {};
      this.container = null;
      this.mediaSource = null;
      this.sourceBuffers = {};
      this.preloadTime = 1;
    });
  }

  static clearBuffer(buffer) {
    const buffered = buffer.buffered;
    let bEnd = 0.1;
    for (let i = 0, len = buffered.length; i < len; i++) {
      bEnd = buffered.end(i);
    }
    try {
      buffer.remove(0, bEnd);
    } catch (e) {
      // DO NOTHING
    }
  }
}
exports.default = MSE;

/***/ }),

/***/ "../xgplayer-utils/src/write/buffer.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/write/buffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _concatTypedArray = __webpack_require__(/*! concat-typed-array */ "../xgplayer-utils/node_modules/concat-typed-array/lib/index.js");

var _concatTypedArray2 = _interopRequireDefault(_concatTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Buffer {
  constructor(buffer) {
    this.buffer = buffer || new Uint8Array(0);
  }

  write(...buffer) {
    buffer.forEach(item => {
      this.buffer = (0, _concatTypedArray2.default)(Uint8Array, this.buffer, item);
    });
  }

  static writeUint32(value) {
    return new Uint8Array([value >> 24, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff]);
  }

  static readAsInt(arr) {
    let temp = '';

    function padStart4Hex(hexNum) {
      let hexStr = hexNum.toString(16);
      return hexStr.padStart(2, '0');
    }

    arr.forEach(num => {
      temp += padStart4Hex(num);
    });
    return parseInt(temp, 16);
  }
}

exports.default = Buffer;

/***/ }),

/***/ "../xgplayer-utils/src/write/stream.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/write/stream.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Stream {
  constructor(buffer) {
    if (buffer instanceof ArrayBuffer) {
      this.buffer = buffer;
      this.dataview = new DataView(buffer);
      this.dataview.position = 0;
    } else {
      throw new Error('data is invalid');
    }
  }

  get length() {
    return this.buffer.byteLength;
  }

  set position(value) {
    this.dataview.position = value;
  }

  get position() {
    return this.dataview.position;
  }

  back(count) {
    this.position -= count;
  }

  skip(count) {
    let loop = Math.floor(count / 4);
    let last = count % 4;
    for (let i = 0; i < loop; i++) {
      Stream.readByte(this.dataview, 4);
    }
    if (last > 0) {
      Stream.readByte(this.dataview, last);
    }
  }

  /**
   * [readByte 从DataView中读取数据]
   * @param  {DataView} buffer [DataView实例]
   * @param  {Number} size   [读取字节数]
   * @return {Number}        [整数]
   */
  static readByte(buffer, size, sign) {
    let res;
    switch (size) {
      case 1:
        if (sign) {
          res = buffer.getInt8(buffer.position);
        } else {
          res = buffer.getUint8(buffer.position);
        }
        break;
      case 2:
        if (sign) {
          res = buffer.getInt16(buffer.position);
        } else {
          res = buffer.getUint16(buffer.position);
        }
        break;
      case 3:
        if (sign) {
          throw new Error('not supported for readByte 3');
        } else {
          res = buffer.getUint8(buffer.position) << 16;
          res |= buffer.getUint8(buffer.position + 1) << 8;
          res |= buffer.getUint8(buffer.position + 2);
        }
        break;
      case 4:
        if (sign) {
          res = buffer.getInt32(buffer.position);
        } else {
          res = buffer.getUint32(buffer.position);
        }
        break;
      case 8:
        if (sign) {
          throw new Error('not supported for readBody 8');
        } else {
          res = buffer.getUint32(buffer.position) << 32;
          res |= buffer.getUint32(buffer.position + 4);
        }
        break;
      default:
        res = '';
    }
    buffer.position += size;
    return res;
  }

  readUint8() {
    return Stream.readByte(this.dataview, 1);
  }

  readUint16() {
    return Stream.readByte(this.dataview, 2);
  }

  readUint24() {
    return Stream.readByte(this.dataview, 3);
  }

  readUint32() {
    return Stream.readByte(this.dataview, 4);
  }

  readUint64() {
    return Stream.readByte(this.dataview, 8);
  }

  readInt8() {
    return Stream.readByte(this.dataview, 1, true);
  }
  readInt16() {
    return Stream.readByte(this.dataview, 2, true);
  }

  readInt32() {
    return Stream.readByte(this.dataview, 4, true);
  }

  writeUint32(value) {
    return new Uint8Array([value >>> 24 & 0xff, value >>> 16 & 0xff, value >>> 8 & 0xff, value & 0xff]);
  }
}

exports.default = Stream;

/***/ }),

/***/ "./src/flv-live-mobile.js":
/*!********************************!*\
  !*** ./src/flv-live-mobile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerLoader = __webpack_require__(/*! xgplayer-loader */ "../xgplayer-loader/index.js");

var _xgplayerDemux = __webpack_require__(/*! xgplayer-demux */ "../xgplayer-demux/index.js");

var _xgplayerRemux = __webpack_require__(/*! xgplayer-remux */ "../xgplayer-remux/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayer = __webpack_require__(/*! xgplayer */ "xgplayer");

var _xgplayer2 = _interopRequireDefault(_xgplayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;
const LOADER_EVENTS = _xgplayerUtils.EVENTS.LOADER_EVENTS;
const BROWSER_EVENTS = _xgplayerUtils.EVENTS.BROWSER_EVENTS;

const Tag = 'FLVController';

class Logger {
  warn() {}
}

class FlvController {
  constructor(player) {
    this.TAG = Tag;
    this._player = player;

    this.video = this._player.video;
    this.state = {
      initSegmentArrived: false
    };
  }

  init() {
    this._context.registry('FETCH_LOADER', _xgplayerLoader.FetchLoader);
    this._context.registry('LOADER_BUFFER', _xgplayerBuffer.XgBuffer);
    this._context.registry('PRE_SOURCE_BUFFER', _xgplayerBuffer.PreSource);

    this._context.registry('FLV_DEMUXER', _xgplayerDemux.FlvDemuxer);

    this._context.registry('MP4_REMUXER', _xgplayerRemux.Mp4Remuxer);
    this._context.registry('TRACKS', _xgplayerBuffer.Tracks);

    this._context.registry('COMPATIBILITY', _xgplayerCodec.Compatibility);
    this._context.registry('PAGE_VISIBILITY', _xgplayerUtils.PageVisibility);

    this._context.registry('LOGGER', Logger);

    this.initListeners();
  }

  initListeners() {
    this.on(LOADER_EVENTS.LOADER_DATALOADED, this._handleLoaderDataLoaded.bind(this));
    this.on(LOADER_EVENTS.LOADER_ERROR, this._handleNetworkError.bind(this));

    this.on(DEMUX_EVENTS.MEDIA_INFO, this._handleMediaInfo.bind(this));
    this.on(DEMUX_EVENTS.METADATA_PARSED, this._handleMetadataParsed.bind(this));
    this.on(DEMUX_EVENTS.DEMUX_COMPLETE, this._handleDemuxComplete.bind(this));
    this.on(DEMUX_EVENTS.DEMUX_ERROR, this._handleDemuxError.bind(this));
  }

  _handleMediaInfo() {
    if (!this._context.mediaInfo) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('failed to get mediainfo'));
    }
  }

  _handleLoaderDataLoaded() {
    this.emitTo('FLV_DEMUXER', DEMUX_EVENTS.DEMUX_START);
  }

  _handleMetadataParsed(type) {
    if (type === 'audio') {
      // 将音频meta信息交给audioContext，不走remux封装
      const { audioTrack } = this._context.getInstance('TRACKS');
      if (audioTrack && audioTrack.meta) {
        this._setMetaToAudio(audioTrack.meta);
      }
    } else {
      const { videoTrack } = this._context.getInstance('TRACKS');
      if (videoTrack && videoTrack.meta) {
        this._setMetaToVideo(videoTrack.meta);
      }
    }
  }

  _handleDemuxComplete() {
    if (this._player.video) {
      const { videoTrack, audioTrack } = this._context.getInstance('TRACKS');
      this._player.video.onDemuxComplete(videoTrack, audioTrack);
    }
  }

  _handleAppendInitSegment() {
    this.state.initSegmentArrived = true;
    //  this.mse.addSourceBuffers()
  }

  _handleNetworkError() {
    this._player.emit('error', new _xgplayer2.default.Errors('network', this._player.config.url));
  }

  _handleDemuxError() {
    this._player.emit('error', new _xgplayer2.default.Errors('parse', this._player.config.url));
  }

  _setMetaToAudio(audioMeta) {
    if (this._player.video) {
      this._player.video.setAudioMeta(audioMeta);
    }
  }

  _setMetaToVideo(videoMeta) {
    if (this._player.video) {
      this._player.video.setVideoMeta(videoMeta);
    }
  }

  seek() {
    if (!this.state.initSegmentArrived) {
      this.loadData();
    }
  }

  loadData() {
    this.emit(LOADER_EVENTS.LADER_START, this._player.config.url);
  }

  pause() {
    const loader = this._context.getInstance('FETCH_LOADER');

    if (loader) {
      loader.cancel();
    }
  }

  /**
   * 保证当前播放的视频以gop为单位
   * @param videoTrack
   */
  static resolveVideoGOP(videoTrack) {
    const { samples } = videoTrack;
    if (!samples.length) {
      return;
    }

    let firstIframeIdx = null;
    let lastIframeIdx = null;

    if (videoTrack.tempSamples && videoTrack.tempSamples.length) {
      // 将缓存帧放置到队列的头部
      samples.unshift.apply(samples, videoTrack.tempSamples);
    }

    // 寻找第一个I帧
    for (let i = 0, len = samples.length; i < len; i++) {
      const current = samples[i];
      if (current.isKeyframe) {
        firstIframeIdx = i;
        break;
      }
    }

    // 寻找最后一个I帧
    for (let i = samples.length - 1; i > 0; i++) {
      const current = samples[i];

      if (current.isKeyframe) {
        lastIframeIdx = i;
        break;
      }
    }

    if (firstIframeIdx !== 0) {
      samples.splice(0, firstIframeIdx - 1);
    }

    videoTrack.samples = samples.slice(0, lastIframeIdx);
    const rest = samples.slice(lastIframeIdx);
    if (videoTrack.tempSamples) {
      videoTrack.tempSamples.push.apply(videoTrack.tempSamples, rest);
    } else {
      // 将剩下的帧缓存，等待一个完整的gop
      videoTrack.tempSamples = rest;
    }
  }
}
exports.default = FlvController;

/***/ }),

/***/ "./src/mobile.js":
/*!***********************!*\
  !*** ./src/mobile.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xgplayer = __webpack_require__(/*! xgplayer */ "xgplayer");

var _xgplayer2 = _interopRequireDefault(_xgplayer);

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _flvLiveMobile = __webpack_require__(/*! ./flv-live-mobile */ "./src/flv-live-mobile.js");

var _flvLiveMobile2 = _interopRequireDefault(_flvLiveMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const flvAllowedEvents = _xgplayerUtils.EVENTS.FlvAllowedEvents;

class FlvPlayer extends _xgplayer2.default {
  constructor(config) {
    if (!config.mediaType) {
      config.mediaType = 'mobile-video';
    }
    super(config);
    this.video.width = Number.parseInt(config.width || 600);
    this.video.height = Number.parseInt(config.height || 337.5);
    this.video.style.outline = 'none';
    this.context = new _xgplayerUtils.Context(flvAllowedEvents);
    this.initEvents();
  }

  start() {
    this.initFlv();
    this.context.init();
    this.flv.seek(0);
    super.start(this.config.url);
    this.play();
  }

  initFlvEvents(flv) {
    const player = this;
    flv.once(_xgplayerUtils.EVENTS.REMUX_EVENTS.INIT_SEGMENT, () => {
      _xgplayer2.default.util.addClass(player.root, 'xgplayer-is-live');
      if (!_xgplayer2.default.util.findDom(this.root, 'xg-live')) {
        const live = _xgplayer2.default.util.createDom('xg-live', '正在直播', {}, 'xgplayer-live');
        player.controls.appendChild(live);
      }
    });

    flv.once(_xgplayerUtils.EVENTS.LOADER_EVENTS.LOADER_COMPLETE, () => {
      // 直播完成，待播放器播完缓存后发送关闭事件
      if (!player.paused) {
        const timer = setInterval(() => {
          const end = player.getBufferedRange()[1];
          if (Math.abs(player.currentTime - end) < 0.5) {
            player.emit('ended');
            window.clearInterval(timer);
          }
        }, 200);
      }
    });
    flv.on(_xgplayerUtils.EVENTS.BROWSER_EVENTS.VISIBILITY_CHANGE, hidden => {
      if (hidden) {
        this.pause();
      }
    });
  }

  initEvents() {
    this.on('timeupdate', () => {
      this.loadData();
    });

    this.on('seeking', () => {
      const time = this.currentTime;
      const range = this.getBufferedRange();
      if (time > range[1] || time < range[0]) {
        this.flv.seek(this.currentTime);
      }
    });
  }

  initFlv() {
    const flv = this.context.registry('FLV_CONTROLLER', _flvLiveMobile2.default)(this);
    this.initFlvEvents(flv);
    this.flv = flv;
  }

  play() {
    if (this._hasStart && this.paused) {
      this._destroy();
      this.context = new _xgplayerUtils.Context(flvAllowedEvents);
      const flv = this.context.registry('FLV_CONTROLLER', _flvLiveMobile2.default)(this);
      this.initFlvEvents(flv);
      this.flv = flv;
      this.context.init();
      this.loadData();
      super.start();
      super.play();
    } else {
      super.play();
      this.addLiveFlag();
    }
  }

  pause() {
    super.pause();
    if (this.flv) {
      this.flv.pause();
    }
  }

  loadData(time = this.currentTime) {
    if (this.flv) {
      this.flv.seek(time);
    }
  }
  destroy() {
    this._destroy();
    super.destroy();
  }

  addLiveFlag() {
    const player = this;
    _xgplayer2.default.util.addClass(player.root, 'xgplayer-is-live');
    if (!_xgplayer2.default.util.findDom(this.root, 'xg-live')) {
      const live = _xgplayer2.default.util.createDom('xg-live', '正在直播', {}, 'xgplayer-live');
      player.controls.appendChild(live);
    }
  }

  _destroy() {
    this.context.destroy();
    this.flv = null;
    this.context = null;
  }

  get src() {
    return this.currentSrc;
  }

  set src(url) {
    this.player.config.url = url;
    if (!this.paused) {
      this.pause();
      this.once('pause', () => {
        this.start(url);
      });
      this.once('canplay', () => {
        this.play();
      });
    } else {
      this.start(url);
    }
    this.once('canplay', () => {
      this.currentTime = 0;
    });
  }
}

module.exports = FlvPlayer;

/***/ }),

/***/ 1:
/*!*****************************!*\
  !*** multi ./src/mobile.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/mobile.js */"./src/mobile.js");


/***/ }),

/***/ "xgplayer":
/*!*************************!*\
  !*** external "Player" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["Player"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GbHZQbGF5ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy9Vc2Vycy9sZW9uYXJkby9Eb2N1bWVudHMvZnJvbnQtZW5kL3BsYXllci94Z3BsYXllci9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1idWZmZXIvc3JjL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItYnVmZmVyL3NyYy9wcmVzb3VjZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItYnVmZmVyL3NyYy90cmFjay5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItY29kZWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWNvZGVjL3NyYy9hYWMvYWFjLWhlbHBlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItY29kZWMvc3JjL2NvbXBhdGliaWxpdHkuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWNvZGVjL3NyYy9oMjY0L25hbHVuaXQvZ29sb21iLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1jb2RlYy9zcmMvaDI2NC9uYWx1bml0L2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1jb2RlYy9zcmMvaDI2NC9uYWx1bml0L3Nwcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWRlbXV4L3NyYy9mbHYvYW1mLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvc3JjL2Zsdi9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvc3JjL2hscy9kZW11eGVyL20zdThwYXJzZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWRlbXV4L3NyYy9obHMvZGVtdXhlci90cy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvc3JjL2hscy9wbGF5bGlzdC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItbG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1sb2FkZXIvc3JjL2ZldGNoLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItcmVtdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXJlbXV4L3NyYy9tcDQvZm1wNC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItcmVtdXgvc3JjL21wNC9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL25vZGVfbW9kdWxlcy9jb25jYXQtdHlwZWQtYXJyYXkvbGliL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvbm9kZV9tb2R1bGVzL2NvbmNhdC10eXBlZC1hcnJheS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL25vZGVfbW9kdWxlcy93ZWJ3b3JraWZ5LXdlYnBhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9jb25zdGFudHMvZXZlbnRzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvY29uc3RhbnRzL3dvcmtlci1jb21tYW5kcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9jcnlwdG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9lbnYvUGFnZVZpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9lbnYvaXNsZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL2Vudi9zbmlmZmVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvZW52L3V0ZjguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2JpbGUvYXVkaW8tY29udGV4dC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vYmlsZS9tb2JpbGUtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2JpbGUvc291cmNlYnVmZmVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9iaWxlL3RpY2tlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vYmlsZS92aWRlby1jb250ZXh0LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9iaWxlL3dvcmtlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vYmlsZS95dXYtY2FudmFzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9kZWxzL1RpbWVSYW5nZXMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2RlbHMvbWVkaWEtaW5mby5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vZGVscy9tZWRpYS1zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2RlbHMvbWVkaWEtc2VnbWVudC1saXN0LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9kZWxzL21lZGlhLXNlZ21lbnQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2RlbHMvdHJhY2stbWV0YS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vZGVscy90cmFjay1zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy93cml0ZS9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy93cml0ZS9zdHJlYW0uanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL2Zsdi1saXZlLW1vYmlsZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvbW9iaWxlLmpzIiwid2VicGFjazovL0ZsdlBsYXllci9leHRlcm5hbCBcIlBsYXllclwiIl0sIm5hbWVzIjpbIlIiLCJSZWZsZWN0IiwiUmVmbGVjdEFwcGx5IiwiYXBwbHkiLCJ0YXJnZXQiLCJyZWNlaXZlciIsImFyZ3MiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImNhbGwiLCJSZWZsZWN0T3duS2V5cyIsIm93bktleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiY29uY2F0IiwiUHJvY2Vzc0VtaXRXYXJuaW5nIiwid2FybmluZyIsImNvbnNvbGUiLCJ3YXJuIiwiTnVtYmVySXNOYU4iLCJOdW1iZXIiLCJpc05hTiIsInZhbHVlIiwiRXZlbnRFbWl0dGVyIiwiaW5pdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfZXZlbnRzIiwidW5kZWZpbmVkIiwiX2V2ZW50c0NvdW50IiwiX21heExpc3RlbmVycyIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJzZXQiLCJhcmciLCJSYW5nZUVycm9yIiwiZ2V0UHJvdG90eXBlT2YiLCJjcmVhdGUiLCJzZXRNYXhMaXN0ZW5lcnMiLCJuIiwiJGdldE1heExpc3RlbmVycyIsInRoYXQiLCJnZXRNYXhMaXN0ZW5lcnMiLCJlbWl0IiwidHlwZSIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwdXNoIiwiZG9FcnJvciIsImV2ZW50cyIsImVycm9yIiwiZXIiLCJFcnJvciIsImVyciIsIm1lc3NhZ2UiLCJjb250ZXh0IiwiaGFuZGxlciIsImxlbiIsImxpc3RlbmVycyIsImFycmF5Q2xvbmUiLCJfYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsInByZXBlbmQiLCJtIiwiZXhpc3RpbmciLCJUeXBlRXJyb3IiLCJuZXdMaXN0ZW5lciIsInVuc2hpZnQiLCJ3YXJuZWQiLCJ3IiwiU3RyaW5nIiwibmFtZSIsImVtaXR0ZXIiLCJjb3VudCIsImFkZExpc3RlbmVyIiwib24iLCJwcmVwZW5kTGlzdGVuZXIiLCJvbmNlV3JhcHBlciIsImZpcmVkIiwicmVtb3ZlTGlzdGVuZXIiLCJ3cmFwRm4iLCJfb25jZVdyYXAiLCJzdGF0ZSIsIndyYXBwZWQiLCJiaW5kIiwib25jZSIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0IiwicG9zaXRpb24iLCJvcmlnaW5hbExpc3RlbmVyIiwic2hpZnQiLCJzcGxpY2VPbmUiLCJvZmYiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJrZXlzIiwia2V5IiwiX2xpc3RlbmVycyIsInVud3JhcCIsImV2bGlzdGVuZXIiLCJ1bndyYXBMaXN0ZW5lcnMiLCJyYXdMaXN0ZW5lcnMiLCJsaXN0ZW5lckNvdW50IiwiZXZlbnROYW1lcyIsImFyciIsImNvcHkiLCJBcnJheSIsImluZGV4IiwicG9wIiwicmV0IiwiVHJhY2siLCJyZXF1aXJlIiwiZGVmYXVsdCIsIlRyYWNrcyIsIkF1ZGlvVHJhY2siLCJWaWRlb1RyYWNrIiwiWGdCdWZmZXIiLCJSZW11eEJ1ZmZlciIsIlByZVNvdXJjZSIsImNvbnN0cnVjdG9yIiwiaGlzdG9yeUxlbiIsImFycmF5Iiwib2Zmc2V0IiwiZGF0YSIsImJ5dGVMZW5ndGgiLCJVaW50OEFycmF5IiwiX3NoaWZ0QnVmZmVyIiwic2xpY2UiLCJ0bXBvZmYiLCJ0bXAiLCJ0ZW1wbGVuZ3RoIiwiY2xlYXIiLCJkZXN0cm95IiwidG9JbnQiLCJzdGFydCIsInJldEludCIsInZpZGVvIiwiYXVkaW8iLCJTb3VyY2UiLCJtaW1ldHlwZSIsInNvdXJjZXMiLCJnZXRTb3VyY2UiLCJzb3VyY2UiLCJjcmVhdGVTb3VyY2UiLCJpZCIsInNlcXVlbmNlTnVtYmVyIiwic2FtcGxlcyIsImRyb3BwZWRTYW1wbGVzIiwicmVzZXQiLCJkaXN0cm95IiwiVEFHIiwiZHJvcHBlZCIsImF1ZGlvVHJhY2siLCJ2aWRlb1RyYWNrIiwiTmFsdW5pdCIsIlNwc1BhcnNlciIsIkNvbXBhdGliaWxpdHkiLCJBQUMiLCJnZXRTaWxlbnRGcmFtZSIsImNvZGVjIiwiY2hhbm5lbENvdW50IiwiUkVNVVhfRVZFTlRTIiwiREVNVVhfRVZFTlRTIiwiRVZFTlRTIiwibmV4dEF1ZGlvRHRzIiwibmV4dFZpZGVvRHRzIiwibGFzdEF1ZGlvU2FtcGxlc0xlbiIsImxhc3RWaWRlb1NhbXBsZXNMZW4iLCJsYXN0VmlkZW9EdHMiLCJsYXN0QXVkaW9EdHMiLCJhbGxBdWRpb1NhbXBsZXNDb3VudCIsImFsbFZpZGVvU2FtcGxlc0NvdW50IiwiX2ZpcnN0QXVkaW9TYW1wbGUiLCJfZmlyc3RWaWRlb1NhbXBsZSIsImZpbGxlZEF1ZGlvU2FtcGxlcyIsImZpbGxlZFZpZGVvU2FtcGxlcyIsIl92aWRlb0xhcmdlR2FwIiwiX2F1ZGlvTGFyZ2VHYXAiLCJiZWZvcmUiLCJSRU1VWF9NRURJQSIsImRvRml4IiwiaXNGaXJzdEF1ZGlvU2FtcGxlcyIsImlzRmlyc3RWaWRlb1NhbXBsZXMiLCJnZXRGaXJzdFNhbXBsZSIsInJlY29yZFNhbXBsZXNDb3VudCIsImZpeFJlZlNhbXBsZUR1cmF0aW9uIiwibWV0YSIsImNoYW5nZWQiLCJ2aWRlb0NoYW5nZWQiLCJjaGFuZ2VkSWR4IiwidmlkZW9DaGFuZ2VkSWR4IiwiZGV0YWN0Q2hhbmdlU3RyZWFtIiwiZml4Q2hhbmdlU3RyZWFtVmlkZW8iLCJkb0ZpeFZpZGVvIiwiYXVkaW9DaGFuZ2VkIiwiYXVkaW9DaGFuZ2VkSWR4IiwiZml4Q2hhbmdlU3RyZWFtQXVkaW8iLCJkb0ZpeEF1ZGlvIiwiZmlyc3QiLCJzdHJlYW1DaGFuZ2VTdGFydCIsInZpZGVvU2FtcGxlcyIsImZyYW1lUmF0ZSIsImZpeGVkIiwiZmlyc3RTYW1wbGUiLCJzYW1wbGVzTGVuIiwiZG9GaXhMYXJnZUdhcCIsImR0cyIsImRldGVjdExhcmdlR2FwIiwiZmlyc3REdHMiLCJ2aWRlb0ZpcnN0RHRzIiwiYXVkaW9GaXJzdER0cyIsImdhcCIsInJlZlNhbXBsZUR1cmF0aW9uIiwiZmlsbENvdW50IiwiTWF0aCIsImZsb29yIiwiY2xvbmVkRmlyc3RTYW1wbGUiLCJhc3NpZ24iLCJwdHMiLCJjdHMiLCJzaXplIiwiYWJzR2FwIiwiYWJzIiwiZmlsbEZyYW1lQ291bnQiLCJjbG9uZWRTYW1wbGUiLCJjb21wdXRlZCIsIm9yaWdpbkR0cyIsImxhc3REdHMiLCJsYXN0U2FtcGxlRHVyYXRpb24iLCJjdXJyZW50IiwibmV4dCIsImR1cmF0aW9uIiwiZmlsbEZyYW1lSWR4IiwiZmlsbEZyYW1lIiwic3BsaWNlIiwiYXVkaW9TYW1wbGVzIiwic2lsZW50RnJhbWUiLCJfZmlyc3RTYW1wbGUiLCJ2aWRlb0ZpcnN0UHRzIiwic2lsZW50U2FtcGxlQ291bnQiLCJzaWxlbnRTYW1wbGUiLCJkYXRhc2l6ZSIsImZpbHRlcmVkIiwicmVmU2FtcGxlRHVyYXRpb25GaXhlZCIsInNpbGVudEZyYW1lQ291bnQiLCJzb3J0QXVkaW9TYW1wbGVzIiwiY2hhbmdlSWR4IiwicHJldkR0cyIsImdldFN0cmVhbUNoYW5nZVN0YXJ0IiwiY3VyRHRzIiwiaXNDb250aW51ZSIsIm9wdGlvbnMiLCJmaXJzdFBhcnRTYW1wbGVzIiwic2Vjb25kUGFydFNhbXBsZXMiLCJjaGFuZ2VTYW1wbGUiLCJmaXJzdFBhcnREdXJhdGlvbiIsImZpbmRGaXJzdFZpZGVvU2FtcGxlIiwiZmluZEZpcnN0QXVkaW9TYW1wbGUiLCJpc1ZpZGVvIiwiYWxsU2FtcGxlc0NvdW50IiwiZmlsbGVkU2FtcGxlc0NvdW50IiwiZHVyYXRpb25BdmciLCJyZW1vdmVJbnZhbGlkU2FtcGxlcyIsImZpbHRlciIsInNhbXBsZSIsImR0c0Jhc2UiLCJJbmZpbml0eSIsInNvcnQiLCJhIiwiYiIsInNvcnRlZCIsImlzS2V5ZnJhbWUiLCJuZXh0RHRzIiwiY29uZDEiLCJjb25kMiIsImRpc2NvbnRpbnVlIiwidHJhY2tzIiwiX2NvbnRleHQiLCJnZXRJbnN0YW5jZSIsInJlbXV4ZXIiLCJfZHRzQmFzZSIsIkdvbG9tYiIsInVpbnQ4YXJyYXkiLCJfYnVmZmVyIiwiX2J1ZmZlckluZGV4IiwiX3RvdGFsQnl0ZXMiLCJfdG90YWxCaXRzIiwiX2N1cnJlbnRXb3JkIiwiX2N1cnJlbnRXb3JkQml0c0xlZnQiLCJfZmlsbEN1cnJlbnRXb3JkIiwiYnVmZmVyQnl0ZXNMZWZ0IiwiYnl0ZXNSZWFkIiwibWluIiwid29yZCIsInN1YmFycmF5IiwiRGF0YVZpZXciLCJidWZmZXIiLCJnZXRVaW50MzIiLCJyZWFkQml0cyIsImJpdHMiLCJ2YWx1IiwicmVhZEJvb2wiLCJyZWFkQnl0ZSIsIl9za2lwTGVhZGluZ1plcm8iLCJ6ZXJvQ291bnQiLCJyZWFkVUVHIiwibGVhZGluZ1plcm9zIiwicmVhZFNFRyIsImdldE5hbHVuaXRzIiwiYnVmIiwiZGF0YXZpZXciLCJnZXRJbnQzMiIsImdldEludDE2IiwiZ2V0SW50OCIsImdldEFubmV4Yk5hbHMiLCJnZXRBdmNjTmFscyIsIm5hbHMiLCJnZXRIZWFkZXJQb3NpdGlvbkFubmV4QiIsInBvcyIsImVuZCIsImhlYWRlciIsImhlYWRlckxlbmd0aCIsInNraXAiLCJib2R5IiwidW5pdCIsImFuYWx5c2VOYWwiLCJuZHIiLCJpZHIiLCJzcHMiLCJwYXJzZVNQUyIsInBwcyIsImdldEF2Y2MiLCJTUFNQYXJzZXIiLCJfZWJzcDJyYnNwIiwic3JjIiwic3JjTGVuZ3RoIiwiZHN0IiwiZHN0SWR4IiwicmJzcCIsImdiIiwicHJvZmlsZUlkYyIsImxldmVsSWRjIiwicHJvZmlsZV9zdHJpbmciLCJnZXRQcm9maWxlU3RyaW5nIiwibGV2ZWxfc3RyaW5nIiwiZ2V0TGV2ZWxTdHJpbmciLCJjaHJvbWFfZm9ybWF0X2lkYyIsImNocm9tYV9mb3JtYXQiLCJjaHJvbWFfZm9ybWF0X3RhYmxlIiwiYml0X2RlcHRoIiwic2NhbGluZ19saXN0X2NvdW50IiwiX3NraXBTY2FsaW5nTGlzdCIsInBpY19vcmRlcl9jbnRfdHlwZSIsIm51bV9yZWZfZnJhbWVzX2luX3BpY19vcmRlcl9jbnRfY3ljbGUiLCJwaWNfd2lkdGhfaW5fbWJzX21pbnVzMSIsInBpY19oZWlnaHRfaW5fbWFwX3VuaXRzX21pbnVzMSIsImZyYW1lX21ic19vbmx5X2ZsYWciLCJmcmFtZV9jcm9wX2xlZnRfb2Zmc2V0IiwiZnJhbWVfY3JvcF9yaWdodF9vZmZzZXQiLCJmcmFtZV9jcm9wX3RvcF9vZmZzZXQiLCJmcmFtZV9jcm9wX2JvdHRvbV9vZmZzZXQiLCJmcmFtZV9jcm9wcGluZ19mbGFnIiwicGFyX3dpZHRoIiwicGFyX2hlaWdodCIsImZwcyIsImZwc19maXhlZCIsImZwc19udW0iLCJmcHNfZGVuIiwidnVpX3BhcmFtZXRlcnNfcHJlc2VudF9mbGFnIiwiYXNwZWN0X3JhdGlvX2lkYyIsInBhcl93X3RhYmxlIiwicGFyX2hfdGFibGUiLCJudW1fdW5pdHNfaW5fdGljayIsInRpbWVfc2NhbGUiLCJwYXJTY2FsZSIsImNyb3BfdW5pdF94IiwiY3JvcF91bml0X3kiLCJzdWJfd2MiLCJzdWJfaGMiLCJjb2RlY193aWR0aCIsImNvZGVjX2hlaWdodCIsInByZXNlbnRfd2lkdGgiLCJjZWlsIiwiY2hyb21hX2Zvcm1hdF9zdHJpbmciLCJnZXRDaHJvbWFGb3JtYXRTdHJpbmciLCJmcmFtZV9yYXRlIiwicGFyX3JhdGlvIiwid2lkdGgiLCJoZWlnaHQiLCJjb2RlY19zaXplIiwicHJlc2VudF9zaXplIiwibGFzdF9zY2FsZSIsIm5leHRfc2NhbGUiLCJkZWx0YV9zY2FsZSIsInRvRml4ZWQiLCJjaHJvbWEiLCJ0b1ZpZGVvTWV0YSIsInNwc0NvbmZpZyIsImNvZGVjV2lkdGgiLCJjb2RlY0hlaWdodCIsInByZXNlbnRXaWR0aCIsInByZXNlbnRIZWlnaHQiLCJwcm9maWxlIiwibGV2ZWwiLCJiaXREZXB0aCIsImNocm9tYUZvcm1hdCIsInBhclJhdGlvIiwiZnBzRGVuIiwiZnBzTnVtIiwidGltZXNjYWxlIiwiTTNVOFBhcnNlciIsIlRzRGVtdXhlciIsIlBsYXlsaXN0IiwiRmx2RGVtdXhlciIsIkRBVEFfVFlQRVMiLCJOVU1CRVIiLCJCT09MRUFOIiwiU1RSSU5HIiwiT0JKRUNUIiwiTUlYX0FSUkFZIiwiT0JKRUNUX0VORCIsIlNUUklDVF9BUlJBWSIsIkRBVEUiLCJMT05FX1NUUklORyIsIkFNRlBhcnNlciIsInJlYWRPZmZzZXQiLCJyZXNvbHZlIiwibWV0YURhdGEiLCJwYXJzZVZhbHVlIiwiYm9keVNpemUiLCJyZXNldFN0YXR1cyIsInBhcnNlU3RyaW5nIiwiZHYiLCJzdHJMZW4iLCJnZXRVaW50MTYiLCJpc0xlIiwic3RyIiwiVVRGOCIsImRlY29kZSIsInBhcnNlRGF0ZSIsInRzIiwiZ2V0RmxvYXQ2NCIsInRpbWVPZmZzZXQiLCJEYXRlIiwicGFyc2VPYmplY3QiLCJpc09iakVuZCIsInBhcnNlTG9uZ1N0cmluZyIsIkFycmF5QnVmZmVyIiwiZGF0YVZpZXciLCJnZXRVaW50OCIsImJvb2xOdW0iLCJvYmpFbmRTaXplIiwiYW1mT2JqIiwiaXNPYmplY3RFbmQiLCJtYXJrIiwiYW1mVmFyIiwibWFya2VyIiwiYXJyTGVuZ3RoIiwic2NyaXB0IiwiZGF0ZSIsImxvbmdTdHIiLCJfZmlyc3RGcmFnbWVudExvYWRlZCIsIl90cmFja051bSIsIl9oYXNTY3JpcHQiLCJERU1VWF9TVEFSVCIsImRvUGFyc2VGbHYiLCJpc0ZsdkZpbGUiLCJnZXRQbGF5VHlwZSIsInN0cmVhbUZsYWciLCJyZXN1bHQiLCJoYXNWaWRlbyIsImhhc0F1ZGlvIiwibG9hZGVyQnVmZmVyIiwicGFyc2VGbHZIZWFkZXIiLCJjaHVuayIsImxvb3BNYXgiLCJfcGFyc2VGbHZUYWciLCJERU1VWF9DT01QTEVURSIsIkRFTVVYX0VSUk9SIiwicGxheVR5cGUiLCJpbml0VmlkZW9UcmFjayIsImluaXRBdWRpb1RyYWNrIiwiVmlkZW9UcmFja01ldGEiLCJBdWRpb1RyYWNrTWV0YSIsIl9wYXJzZUZsdlRhZ0hlYWRlciIsIl9wcm9jZXNzQ2h1bmsiLCJ0YWdUeXBlIiwidGltZXN0YW1wIiwidGltZXN0YW1wRXh0IiwiX3BhcnNlU2NyaXB0RGF0YSIsIl9wYXJzZUFBQ0RhdGEiLCJfcGFyc2VIZXZjRGF0YSIsImluZm8iLCJvbk1ldGFEYXRhIiwibWVkaWFJbmZvIiwiaHNhQXVkaW8iLCJ2YWxpZGF0ZSIsIl9kYXRhc2l6ZVZhbGlkYXRvciIsIk1FRElBX0lORk8iLCJoYXNTcGVjaWZpY0NvbmZpZyIsImF1ZGlvc2FtcGxlcmF0ZSIsInNhbXBsZVJhdGUiLCJhdWRpb2NoYW5uZWxzIiwic2FtcGxlUmF0ZUluZGV4IiwiZnJhbWVyYXRlIiwiX2FhY1NlcXVlbmNlSGVhZGVyUGFyc2VyIiwib2JqZWN0VHlwZSIsIl9zd2l0Y2hBdWRpb1NhbXBsZVJhdGUiLCJmcmFtZUxlbmd0aCIsImRlcGVuZHNPbkNvcmVDb2RlciIsImV4dGVuc2lvbkZsYWdJbmRleCIsInVzZXJBZ2VudCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInRvTG93ZXJDYXNlIiwiZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCIsImNvbmZpZyIsInNhbXBsaW5nSW5kZXgiLCJpbmRleE9mIiwic25pZmZlciIsImJyb3dzZXIiLCJ0cmFjayIsImZvcm1hdCIsIl9oYXNBdWRpb1NlcXVlbmNlIiwiX3N3aXRjaEF1ZGlvU2FtcGxpbmdGcmVxdWVuY3kiLCJmcmFtZUxlbnRoIiwiYXVkaW9TYW1wbGVSYXRlIiwiYXVkaW9TYW1wbGVSYXRlSW5kZXgiLCJhYWNIZWFkZXIiLCJhdWRpb01lZGlhIiwiTUVUQURBVEFfUEFSU0VEIiwiQVVESU9fTUVUQURBVEFfQ0hBTkdFIiwiX21ldGFDaGFuZ2UiLCJmcmFtZVR5cGUiLCJjb2RlY0lEIiwiYXZjUGFja2V0VHlwZSIsInBhcnNlSW50IiwibmFsdSIsInIiLCJzaXplcyIsImF2Y2NsZW5ndGgiLCJfYXZjU2VxdWVuY2VIZWFkZXJQYXJzZXIiLCJfaGFzVmlkZW9TZXF1ZW5jZSIsIlZJREVPX01FVEFEQVRBX0NIQU5HRSIsImNvbmZpZ3VyYXRpb25WZXJzaW9uIiwiYXZjUHJvZmlsZUluZGljYXRpb24iLCJwcm9maWxlQ29tcGF0aWJpbGl0eSIsImF2Y0xldmVsSW5kaWNhdGlvbiIsIm5hbFVuaXRMZW5ndGgiLCJudW1PZlNwcyIsImoiLCJjb2RlY1N0cmluZyIsImgiLCJ0b1N0cmluZyIsIm51bU9mUHBzIiwidmlkZW9NZWRpYSIsImF2Y2MiLCJzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4Iiwic2FtcGxpbmdGcmVxdWVuY3lMaXN0IiwiX3N3aXRjaEF1ZGlvQ2hhbm5lbCIsInNhbXBsZVRyYWNrTnVtSW5kZXgiLCJzYW1wbGVUcmFja051bUxpc3QiLCJkYXRhc2l6ZUNvbmZpcm0iLCJsb2dnZXIiLCJwYXJzZSIsInRleHQiLCJiYXNldXJsIiwic3BsaXQiLCJyZWZzIiwicmVmIiwibWF0Y2giLCJyZWZtIiwicmVmZCIsInZlcnNpb24iLCJzZXF1ZW5jZSIsInRhcmdldGR1cmF0aW9uIiwicGFyc2VGbG9hdCIsInBhcnNlRnJhZyIsInBhcnNlRGVjcnlwdCIsImZyYWdzIiwiZnJlZyIsIm5leHRsaW5lIiwiY2hhckF0IiwidXJsIiwicGFyc2VVUkwiLCJ1cmxzIiwiZW5jcnlwdCIsImNtZCIsIm1ldGhvZCIsInVyaSIsIml2IiwiaXZiIiwiaW0iLCJzdWJzdHIiLCJTdHJlYW1UeXBlIiwiY29uZmlncyIsImRlbXV4aW5nIiwicGF0IiwicG10IiwiX2hhc1ZpZGVvTWV0YSIsIl9oYXNBdWRpb01ldGEiLCJkZW11eCIsImZyYWciLCJpbnB1dEJ1ZmZlciIsInBlc2VzIiwidHNTdHJlYW0iLCJTdHJlYW0iLCJyZWFkIiwicGVzIiwicGlkIiwiRVMiLCJwYXlsb2FkIiwic3RyZWFtIiwiQXVkaW9PcHRpb25zIiwiVmlkZW9PcHRpb25zIiwiZXBlc2VzIiwiTWVyZ2UiLCJwdXNoQXVkaW9TYW1wbGUiLCJwdXNoVmlkZW9TYW1wbGUiLCJfdHJhY2tzIiwiZnJlcXVlbmNlIiwiY2hhbm5lbCIsImF1ZGlvT2JqZWN0VHlwZSIsImF1ZGlvQ29uZmlnIiwiZnJlcXVlbmN5SW5kZXgiLCJtZXRhRXF1YWwiLCJjb21wYWlyZU1ldGEiLCJBdWRpb1RyYWNrU2FtcGxlIiwic2FtcGxlTGVuZ3RoIiwibmFsIiwic2FyUmF0aW8iLCJzYXJfcmF0aW8iLCJWaWRlb1RyYWNrU2FtcGxlIiwiZGVzdG9yeSIsImNvbXBhaXJlQXJyYXkiLCJhbCIsImJsIiwiaWdub3JlRHVyYXRpb24iLCJrIiwiaXRlbWEiLCJpdGVtYiIsImJ1ZmZlcnMiLCJyZWFkSGVhZGVyIiwicmVhZFBheWxvYWQiLCJwYWNrZXQiLCJ1bmtub3duUElEcyIsIlBFUyIsIlBBVCIsIkNBVCIsIlRTRFQiLCJzb21lIiwiaXRlbSIsIlBNVCIsInN0cyIsIk1lZGlhIiwic3RyZWFtVHlwZSIsInN5bmMiLCJyZWFkVWludDgiLCJyZWFkVWludDE2IiwicHJpb3JpdHkiLCJzY3JhbWJsaW5nIiwiYWRhcHRhdGlvbiIsImNvbnRpbnVpdHkiLCJ0YWJlbElEIiwiemVybyIsInNlY3Rpb25MZW5ndGgiLCJzdHJlYW1JRCIsInNlY3Rpb25OdW1iZXIiLCJsYXN0U2VjdGlvbk51bWJlciIsIk4iLCJwcm9ncmFtTnVtYmVyIiwicHJvZ3JhbSIsInRhYmxlSUQiLCJvcmRlciIsImxhc3RPcmRlciIsIlBDUl9QSUQiLCJwcm9ncmFtTGVuZ3RoIiwiZXMiLCJtYXAiLCJhZGFwdGF0aW9uTGVuZ3RoIiwiYWNjZXNzIiwiUENSIiwiT1BDUiIsInNwbGljZVBvaW50IiwidHJhbnNwb3J0UHJpdmF0ZSIsImFkYXB0YXRpb25GaWVsZCIsIl9zdGFydCIsInByb2dyYW1DbG9ja0Jhc2UiLCJyZWFkVWludDMyIiwicHJvZ3JhbUNsb2NrRXh0ZW5zaW9uIiwib3JpZ2luUHJvZ3JhbUNsb2NrQmFzZSIsIm9yaWdpblByb2dyYW1DbG9ja0V4dGVuc2lvbiIsInNwbGljZUNvdW50ZG93biIsInRyYW5zcG9ydFByaXZhdGVEYXRhIiwibHR3IiwicGllY2V3aXNlIiwic2VhbWxlc3MiLCJsdHdWYWxpZCIsImx0d09mZnNldCIsInJlYWRVaW50MjQiLCJwaWVjZXdpc2VSYXRlIiwicmVhZEludDgiLCJzcGxpY2VUeXBlIiwiZHRzTmV4dEFVMSIsIm1hcmtlcjEiLCJkdHNOZXh0QVUyIiwibWFya2VyMiIsImR0c05leHRBVTMiLCJsYXN0U3R1ZmZpbmciLCJwYWNrZXRMZW5ndGgiLCJwdHNEVFNGbGFnIiwiZXNjckZsYWciLCJlc1JhdGVGbGFnIiwiZHNtRmxhZyIsImFkZGl0aW9uYWxGbGFnIiwiY3JjRmxhZyIsImV4dGVuc2lvbkZsYWciLCJwZXNIZWFkZXJMZW5ndGgiLCJOMSIsImVzY3IiLCJleCIsImVzUmF0ZSIsImFkZGl0aW9uYWxDb3B5SW5mbyIsInBlc0NSQyIsImJhY2siLCJmcSIsImxheWVyIiwiYWJzZW50IiwiZ2V0QXVkaW9Db25maWciLCJzZWN0aW9uSW5kaWNhdG9yIiwiY3VycmVudE5leHRJbmRpY2F0b3IiLCJjcmMzMiIsImV4dGVuc2lvblNhbXBsZUluZGV4IiwidGVzdCIsImlucHV0YnVmZmVyIiwiX2Jhc2VVUkwiLCJfbGlzdCIsIl90cyIsImZyYWdMZW5ndGgiLCJfbGFzdGdldCIsIl9hdWRvY2xlYXIiLCJhdXRvY2xlYXIiLCJiYXNlVVJMIiwiZG93bmxvYWRlZCIsImRvd25sb2FkaW5nIiwiZGVsZXRlRnJhZyIsInRpbWUiLCJwdXNoTTNVOCIsImRlbGV0ZXByZSIsIm5ld2ZyYWdsaXN0IiwidHNsaXN0IiwiZ2V0VHNMaXN0IiwidHNuYW1lIiwiaXNsb2FkZWQiLCJsb2FkaW5nIiwiZ2V0VHNCeU5hbWUiLCJnZXRUcyIsInRpbWVsaXN0IiwiY2xlYXJEb3dubG9hZGVkIiwibCIsIkZldGNoTG9hZGVyIiwiTE9BREVSX0VWRU5UUyIsIlJFQURfU1RSRUFNIiwiUkVBRF9URVhUIiwiUkVBRF9KU09OIiwiUkVBRF9CVUZGRVIiLCJzdGF0dXMiLCJfcmVhZGVyIiwiX2NhbmNlbGVkIiwiX2Rlc3Ryb3llZCIsInJlYWR0eXBlIiwiX2xvYWRlclRhc2tObyIsIkxBREVSX1NUQVJUIiwibG9hZCIsIm9wdHMiLCJfdGhpcyIsInBhcmFtcyIsImdldFBhcmFtcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJfb25GZXRjaFJlc3BvbnNlIiwiTE9BREVSX0VSUk9SIiwiY2F0Y2giLCJ0YXNrbm8iLCJqc29uIiwiTE9BREVSX0NPTVBMRVRFIiwiYXJyYXlCdWZmZXIiLCJfb25SZWFkZXIiLCJnZXRSZWFkZXIiLCJyZWFkZXIiLCJjYW5jZWwiLCJlIiwidmFsIiwiZG9uZSIsIkxPQURFUl9EQVRBTE9BREVEIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJtb2RlIiwiY2FjaGUiLCJjb25maWdIZWFkZXJzIiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmQiLCJvcHRIZWFkZXJzIiwiY29ycyIsIndpdGhDcmVkZW50aWFscyIsImNyZWRlbnRpYWxzIiwiTXA0UmVtdXhlciIsIkZtcDQiLCJCdWZmZXIiLCJ3cml0ZVVpbnQzMiIsImluaXRCb3giLCJjb250ZW50Iiwid3JpdGUiLCJleHRlbnNpb24iLCJmbGFnIiwiZnR5cCIsIm1vb3YiLCJtdmhkIiwidHJhayIsInZpZGVvVHJhayIsImF1ZGlvVHJhayIsIm12ZXgiLCJmb3JFYWNoIiwiYnl0ZXMiLCJ0a2hkIiwibWRpYSIsInNhbXBsZXJhdGUiLCJlZHRzIiwibWVkaWFUaW1lIiwibWRoZCIsImhkbHIiLCJtaW5mIiwidm1oZCIsInNtaGQiLCJkaW5mIiwic3RibCIsImRyZWYiLCJzdHNkIiwic3R0cyIsInN0c2MiLCJzdHN6Iiwic3RjbyIsIm1wNGEiLCJhdmMxIiwiZXNkcyIsImNvbmZpZ2xlbiIsImhTcGFjaW5nIiwidlNwYWNpbmciLCJidHJ0IiwicGFzcCIsInRyYWNrSUQiLCJtZWhkIiwidHJleCIsIm1vb2YiLCJtZmhkIiwidHJhZiIsInRmaGQiLCJ0ZmR0Iiwic2R0cCIsInRydW4iLCJzZHRwTGVuZ3RoIiwic2FtcGxlQ291bnQiLCJmbGFncyIsImlzTGVhZGluZyIsImRlcGVuZHNPbiIsImlzRGVwZW5kZWRPbiIsImhhc1JlZHVuZGFuY3kiLCJpc05vblN5bmMiLCJudW0iLCJtZGF0IiwibWRhdEJveCIsImNoYXJDb2RlQXQiLCJfaXNEdHNCYXNlSW5pdGVkIiwiaXNGaXJzdFZpZGVvIiwiaXNGaXJzdEF1ZGlvIiwidmlkZW9BbGxEdXJhdGlvbiIsImF1ZGlvQWxsRHVyYXRpb24iLCJyZW11eCIsIlJFTVVYX01FVEFEQVRBIiwib25NZXRhRGF0YVJlYWR5IiwiREVURUNUX0NIQU5HRV9TVFJFQU0iLCJyZXNldER0c0Jhc2UiLCJfZHRzQmFzZUluaXRlZCIsImNhbGNEdHNCYXNlIiwiX3JlbXV4VmlkZW8iLCJfcmVtdXhBdWRpbyIsInNlZWsiLCJwcmVzb3VyY2VidWZmZXIiLCJyZW11eEluaXRTZWdtZW50IiwiSU5JVF9TRUdNRU5UIiwiaW5pdFNlZ21lbnQiLCJhdWRpb0Jhc2UiLCJ2aWRlb0Jhc2UiLCJtcDRTYW1wbGVzIiwiYXZjU2FtcGxlIiwibWRhdFNhbXBsZSIsInNhbXBsZUR1cmF0aW9uIiwidmlkZW9NZXRhIiwibW9vZk1kYXQiLCJ3cml0ZVRvU291cmNlIiwiTUVESUFfU0VHTUVOVCIsImxhc3RTYW1wbGUiLCJfdmlkZW9OZXh0RHRzIiwiaXNGaXJzdER0c0luaXRlZCIsImF1ZGlvTWV0YSIsIm1wNFNhbXBsZSIsImluaXRTaWxlbnRBdWRpbyIsIkNvbnRleHQiLCJXT1JLRVJfQ09NTUFORFMiLCJQYWdlVmlzaWJpbGl0eSIsIk1lZGlhSW5mbyIsIk1lZGlhU2FtcGxlIiwiTWVkaWFTZWdtZW50IiwiTWVkaWFTZWdtZW50TGlzdCIsIk1zZSIsIk1vYmlsZVZpZGVvIiwiQ3J5cHRvIiwiUmVzdWx0Q29uc3RydWN0b3IiLCJ0b3RhbExlbmd0aCIsIl9sZW4iLCJhcnJheXMiLCJfa2V5IiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiIsIl9kaWRJdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3IiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9zdGVwIiwicmV0dXJuIiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIiLCJfZGlkSXRlcmF0b3JFcnJvcjIiLCJfaXRlcmF0b3JFcnJvcjIiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2FyciIsIl9jb25jYXQiLCJfY29uY2F0MiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJfX2VzTW9kdWxlIiwid2VicGFja0Jvb3RzdHJhcEZ1bmMiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImMiLCJkIiwiZ2V0dGVyIiwibyIsImNvbmZpZ3VyYWJsZSIsImdldERlZmF1bHQiLCJnZXRNb2R1bGVFeHBvcnRzIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwib2UiLCJmIiwicyIsIkVOVFJZX01PRFVMRSIsIm1vZHVsZU5hbWVSZXFFeHAiLCJkZXBlbmRlbmN5UmVnRXhwIiwicXVvdGVSZWdFeHAiLCJyZXBsYWNlIiwiaXNOdW1lcmljIiwiZ2V0TW9kdWxlRGVwZW5kZW5jaWVzIiwicXVldWVOYW1lIiwicmV0dmFsIiwiZm5TdHJpbmciLCJ3cmFwcGVyU2lnbmF0dXJlIiwid2VicGFja1JlcXVpcmVOYW1lIiwicmUiLCJSZWdFeHAiLCJleGVjIiwiaGFzVmFsdWVzSW5RdWV1ZXMiLCJxdWV1ZXMiLCJyZWR1Y2UiLCJoYXNWYWx1ZXMiLCJnZXRSZXF1aXJlZE1vZHVsZXMiLCJtb2R1bGVzUXVldWUiLCJtYWluIiwicmVxdWlyZWRNb2R1bGVzIiwic2Vlbk1vZHVsZXMiLCJxdWV1ZSIsIm1vZHVsZVRvQ2hlY2siLCJuZXdNb2R1bGVzIiwibmV3TW9kdWxlc0tleXMiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiYWxsIiwiZW50cnlNb2R1bGUiLCJKU09OIiwic3RyaW5naWZ5Iiwiam9pbiIsImJsb2IiLCJCbG9iIiwiYmFyZSIsIlVSTCIsIndlYmtpdFVSTCIsIm1velVSTCIsIm1zVVJMIiwid29ya2VyVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwid29ya2VyIiwiV29ya2VyIiwib2JqZWN0VVJMIiwiUkVNVVhfRVJST1IiLCJNU0VfRVZFTlRTIiwiU09VUkNFX1VQREFURV9FTkQiLCJITFNfRVZFTlRTIiwiUkVUUllfVElNRV9FWENFRURFRCIsIkNSWVRPX0VWRU5UUyIsIlNUQVJUX0RFQ1JZUFQiLCJERUNSWVBURUQiLCJCUk9XU0VSX0VWRU5UUyIsIlZJU0lCSUxJVFlfQ0hBTkdFIiwiQUxMRVZFTlRTIiwiRmx2QWxsb3dlZEV2ZW50cyIsIkhsc0FsbG93ZWRFdmVudHMiLCJDT05URVhUX0NPTU9NQU5EUyIsIk9OIiwiT05DRSIsIk9GRiIsIkVNSVQiLCJERVNUUk9ZIiwiRElSRUNUX0VNSVRfRkxBRyIsImFsbG93ZWRFdmVudHMiLCJfZW1pdHRlciIsIl9pbnN0YW5jZU1hcCIsIl9jbHNNYXAiLCJfaW5pdGVkIiwiX2hvb2tzIiwidGFnIiwiaW5zdGFuY2UiLCJpbml0SW5zdGFuY2UiLCJuZXdJbnN0YW5jZSIsInJlZ2lzdHJ5IiwiY2xzIiwiY2hlY2tNZXNzYWdlTmFtZSIsIl9pc01lc3NhZ2VOYW1lVmFsaWQiLCJzZWxmIiwiZW5oYW5jZWQiLCJvbmNlTGlzdGVuZXJzIiwibWVzc2FnZU5hbWUiLCJjYWxsYmFjayIsImJlZm9yZUxpc3QiLCJlbWl0VG8iLCJyZW1vdmVMaXN0ZW5lcnMiLCJoYXNPd24iLCJjYWxsYmFja3MiLCJkZXN0cm95SW5zdGFuY2VzIiwib3V0cHV0QnVmZmVyIiwib3V0cHV0YnVmZmVyIiwiY3J5cHRvIiwibXNDcnlwdG8iLCJkZWNyaXB0IiwiYWVza2V5Iiwic2JrZXkiLCJzdWJ0bGUiLCJpbXBvcnRLZXkiLCJkZWNyaXB0RGF0YSIsImRlY3J5cHQiLCJyZXMiLCJFdmVudHMiLCJoaWRkZW4iLCJ2aXNpYmlsaXR5Q2hhbmdlIiwiZG9jdW1lbnQiLCJtc0hpZGRlbiIsIndlYmtpdEhpZGRlbiIsIm9uU2hvdyIsIm9uSGlkZGVuIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGUiLCJzZXRJbnQxNiIsIkludDE2QXJyYXkiLCJkZXZpY2UiLCJvcyIsImlzUGMiLCJpc1RhYmxldCIsInVhIiwicmVnIiwiaWUiLCJmaXJmb3giLCJjaHJvbWUiLCJvcGVyYSIsInNhZmFyaSIsImlzV2luZG93c1Bob25lIiwiaXNTeW1iaWFuIiwiaXNBbmRyb2lkIiwiaXNGaXJlRm94IiwiaXNQaG9uZSIsIm91dCIsImlucHV0IiwiZnJvbUNoYXJDb2RlIiwiX2NoZWNrQ29udGludWF0aW9uIiwidWNzNCIsImNoZWNrTGVuZ3RoIiwiQXVkaW9DdHgiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJwcmVsb2FkVGltZSIsIl9jdXJyZW50QnVmZmVyIiwiX25leHRCdWZmZXIiLCJfbGFzdHB0cyIsIl9wcmVEZWNvZGUiLCJfY3VycmVudFRpbWUiLCJfZGVjb2RpbmciLCJfdm9sdW1lIiwidm9sdW1lIiwiX3BsYXllZCIsInBsYXlGaW5pc2giLCJ3YWl0TmV4dElEIiwiY3VycmVudFRpbWUiLCJkZWNvZGVBdWRpbyIsInNldEF1ZGlvRGF0YSIsImRlY29kZUFBQyIsInNhbXBsZURhdGEiLCJnZXRBQUNEYXRhIiwiY29tYmlsZURhdGEiLCJkZWNvZGVBdWRpb0RhdGEiLCJhdWRpb1NvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsIm9uZW5kZWQiLCJvblNvdXJjZUVuZGVkIiwiZ2V0VGltZUJ1ZmZlciIsInNldFRpbWVvdXQiLCJwbGF5IiwicmVzdW1lIiwicGxheVN0YXJ0IiwiUHJvbWlzZSIsInBhdXNlIiwiYXVkaW9DdHgiLCJzdXNwZW5kIiwiY2xvc2UiLCJzZXRBdWRpb01ldGFEYXRhIiwiY2xlYXJUaW1lb3V0IiwibXV0ZWQiLCJnYWluIiwiYWR0cyIsImdldEFkdHMiLCJhYWNmcmFtZWxlbmd0aCIsIkFWUmVjb25jaWxlciIsInByb3BzIiwiYUN0eCIsInZDdHgiLCJ0aW1lb3V0SWQiLCJkb1JlY29uY2lsZSIsInZDdXJUaW1lIiwiYUN1clRpbWUiLCJIVE1MRWxlbWVudCIsIl9jYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiaGFuZGxlQXVkaW9Tb3VyY2VFbmQiLCJwbGF5ZWQiLCJwZW5kaW5nUGxheVRhc2siLCJfcGF1c2VkIiwidmlkZW9NZXRhSW5pdGVkIiwiYXVkaW9NZXRhSW5pdGVkIiwiVmlkZW9DdHgiLCJjYW52YXMiLCJzdHlsZSIsInRpY2tlciIsInJlY29uY2lsZXIiLCJvbmNhbnBsYXkiLCJhcHBlbmRDaGlsZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImNsZWFuQnVmZmVyIiwiX2NsZWFuQnVmZmVyIiwic3RvcCIsIm9uRGVtdXhDb21wbGV0ZSIsImRlY29kZVZpZGVvIiwic2V0QXVkaW9NZXRhIiwic2V0VmlkZW9NZXRhIiwic2V0VmlkZW9NZXRhRGF0YSIsImdldEF0dHJpYnV0ZSIsInZpZGVvV2lkdGgiLCJkaXNwbGF5IiwicHhWYWwiLCJzZXRBdHRyaWJ1dGUiLCJ2aWRlb0hlaWdodCIsInJlYWR5U3RhdGUiLCJzZWVraW5nIiwicGF1c2VkIiwicGxheWJhY2tSYXRlIiwiaGFzQXR0cmlidXRlIiwiZW5kZWQiLCJhdXRvcGxheSIsIm5vdyIsIl9vblRpbWVyIiwidm9sIiwiYXR0ck11dGVkIiwiYnVmZmVyZWQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIlNvdXJjZUJ1ZmZlciIsImN1cnJlbnRHb3AiLCJfbGFzdEdldCIsImZyYW1lIiwibmV4dEdvcCIsIl9nZXROZXh0IiwiZ29wIiwicmVtb3ZlIiwiVGlja2VyIiwiaW50ZXJ2YWwiLCJvblRpY2siLCJzZXRJbnRlcnZhbCIsIlJhZlRpY2tlciIsInByZXYiLCJ0aW1lcklkIiwiX3N1YlRpbWVySWQiLCJfdGlja0Z1bmMiLCJnZXRUaWNrRnVuYyIsInRpY2siLCJuZXh0VGljayIsImNhbmNlbEZ1bmMiLCJnZXRDYW5jZWxGdW5jIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsImlzU3VwcG9ydGVkIiwiVGltZW91dFRpY2tlciIsImNsZWFySW50ZXJ2YWwiLCJnZXRUaWNrZXIiLCJWaWRlb0NhbnZhcyIsIm9uRmlyc3RGcmFtZSIsInJlYWR5U3RhdHVzIiwibGFzdFBsYXllZCIsIl9kZWNvZGVySW5pdGVkIiwiX2F2Y2NwdXNoZWQiLCJfZGVjb2RlZEZyYW1lcyIsIl9sYXN0U2FtcGxlRHRzIiwiX2Jhc2VEdHMiLCJfbGFzdFJlbmRlclRpbWUiLCJpbml0V2FzbVdvcmtlciIsIndhc213b3JrZXIiLCJwb3N0TWVzc2FnZSIsIm1zZyIsIl9vbkRlY29kZWQiLCJ5dXZDYW52YXMiLCJZVVZDYW52YXMiLCJfcHJlbG9hZCIsIl9hbmFseXNlTmFsIiwiZnJhbWVUaW1lcyIsImZyYW1lVGltZSIsInJlbmRlciIsInlMaW5lc2l6ZSIsInV2TGluZXNpemUiLCJyYW5nZXMiLCJjdXJyZW50UmFuZ2UiLCJUaW1lUmFuZ2VzIiwiTUFYX1NUUkVBTV9CVUZGRVJfTEVOR1RIIiwiRGVjb2RlciIsImluaXRlZCIsImluZm9saXN0IiwicGFyX2Jyb2Fkd2F5T25Ccm9hZHdheUluaXRlZCIsImJyb2Fkd2F5T25Ccm9hZHdheUluaXRlZCIsInBhcl9icm9hZHdheU9uUGljdHVyZURlY29kZWQiLCJicm9hZHdheU9uUGljdHVyZURlY29kZWQiLCJ0b1U4QXJyYXkiLCJwdHIiLCJIRUFQVTgiLCJNb2R1bGUiLCJfYnJvYWR3YXlJbml0Iiwic3RyZWFtQnVmZmVyIiwiX2Jyb2Fkd2F5Q3JlYXRlU3RyZWFtIiwiaW5mb2lkIiwieVJvd2NvdW50IiwidXZSb3djb3VudCIsImRhdGV0ZW1wIiwiZ2V0VGltZSIsIl9icm9hZHdheVBsYXlTdHJlYW0iLCJkZWNvZGVyIiwib25Qb3N0UnVuIiwiaW1wb3J0U2NyaXB0cyIsImFkZE9uUG9zdFJ1biIsImxvZyIsIl9pbml0Q29udGV4dEdMIiwiY29udGV4dEdMIiwiX2luaXRQcm9ncmFtIiwiX2luaXRCdWZmZXJzIiwiX2luaXRUZXh0dXJlcyIsImdsIiwidmFsaWRDb250ZXh0TmFtZXMiLCJuYW1lSW5kZXgiLCJjb250ZXh0TmFtZSIsImNvbnRleHRPcHRpb25zIiwiZ2V0Q29udGV4dCIsImdldFBhcmFtZXRlciIsInZlcnRleFNoYWRlclNjcmlwdCIsImZyYWdtZW50U2hhZGVyU2NyaXB0IiwiWVVWMlJHQiIsInZlcnRleFNoYWRlciIsImNyZWF0ZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJnZXRTaGFkZXJJbmZvTG9nIiwiZnJhZ21lbnRTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJjcmVhdGVQcm9ncmFtIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwiTElOS19TVEFUVVMiLCJnZXRQcm9ncmFtSW5mb0xvZyIsInVzZVByb2dyYW0iLCJZVVYyUkdCUmVmIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidW5pZm9ybU1hdHJpeDRmdiIsInNoYWRlclByb2dyYW0iLCJ2ZXJ0ZXhQb3NCdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwiYnVmZmVyRGF0YSIsIkZsb2F0MzJBcnJheSIsIlNUQVRJQ19EUkFXIiwidmVydGV4UG9zUmVmIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsInRleHR1cmVQb3NCdWZmZXIiLCJ0ZXh0dXJlUG9zUmVmIiwidVRleHR1cmVQb3NCdWZmZXIiLCJ1VGV4dHVyZVBvc1JlZiIsInZUZXh0dXJlUG9zQnVmZmVyIiwidlRleHR1cmVQb3NSZWYiLCJ5VGV4dHVyZVJlZiIsIl9pbml0VGV4dHVyZSIsInlTYW1wbGVyUmVmIiwidW5pZm9ybTFpIiwidVRleHR1cmVSZWYiLCJ1U2FtcGxlclJlZiIsInZUZXh0dXJlUmVmIiwidlNhbXBsZXJSZWYiLCJ0ZXh0dXJlUmVmIiwiY3JlYXRlVGV4dHVyZSIsImJpbmRUZXh0dXJlIiwiVEVYVFVSRV8yRCIsInRleFBhcmFtZXRlcmkiLCJURVhUVVJFX01BR19GSUxURVIiLCJORUFSRVNUIiwiVEVYVFVSRV9NSU5fRklMVEVSIiwiVEVYVFVSRV9XUkFQX1MiLCJDTEFNUF9UT19FREdFIiwiVEVYVFVSRV9XUkFQX1QiLCJfZHJhd1BpY3R1cmVHTCIsInlsZW4iLCJ1dmxlbiIsInJlbmRlckRhdGEiLCJ5RGF0YSIsInVEYXRhIiwidkRhdGEiLCJfZHJhd1BpY3R1cmVHTDQyMCIsInlEYXRhUGVyUm93IiwieVJvd0NudCIsInVEYXRhUGVyUm93IiwidVJvd0NudCIsInZEYXRhUGVyUm93IiwidlJvd0NudCIsInJhdGlvdyIsInJhdGlvaCIsImxlZnQiLCJ0b3AiLCJ2aWV3cG9ydCIsInRleHR1cmVQb3NWYWx1ZXMiLCJEWU5BTUlDX0RSQVciLCJ1VGV4dHVyZVBvc1ZhbHVlcyIsInZUZXh0dXJlUG9zVmFsdWVzIiwiYWN0aXZlVGV4dHVyZSIsIlRFWFRVUkUwIiwidGV4SW1hZ2UyRCIsIkxVTUlOQU5DRSIsIlVOU0lHTkVEX0JZVEUiLCJURVhUVVJFMSIsIlRFWFRVUkUyIiwiZHJhd0FycmF5cyIsIlRSSUFOR0xFX1NUUklQIiwiX2RyYXdQaWN0dXJlUkdCIiwiaWR4IiwiYWRkIiwicmFuZ2UiLCJpc09iamVjdEZpbGxlZCIsIm1pbWVUeXBlIiwiaXNDb21wbGV0ZSIsImlzQmFzZUluZm9SZWFkeSIsImlzVmlkZW9SZWFkeSIsImlzQXVkaW9SZWFkeSIsIl9kZWZhdWx0IiwiZ2V0RGVmYXVsdEluZiIsImVudHJpZXMiLCJ2IiwiaXNSQVAiLCJfdHlwZSIsIl9sYXN0QXBwZW5kTG9jYXRpb24iLCJpc0VtcHR5IiwiX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlIiwiYmVnaW5EdHMiLCJsYXN0IiwibWlkIiwibGJvdW5kIiwidWJvdW5kIiwiX3NlYXJjaE5lYXJlc3RTZWdtZW50QWZ0ZXIiLCJzZWdtZW50IiwibGFzdEFwcGVuZElkeCIsImluc2VydElkeCIsIm9yaWdpblN0YXJ0RHRzIiwiZ2V0TGFzdFNlZ21lbnRCZWZvcmUiLCJnZXRMYXN0U2FtcGxlQmVmb3JlIiwiZ2V0TGFzdFJBUEJlZm9yZSIsInNlZ21lbnRJZHgiLCJyYW5kb21BY2Nlc3NQb2ludHMiLCJzdGFydER0cyIsImVuZER0cyIsInN0YXJ0UHRzIiwiZW5kUHRzIiwib3JpZ2luRW5kRHRzIiwiYWRkUkFQIiwiTVNFIiwiY29udGFpbmVyIiwibWVkaWFTb3VyY2UiLCJzb3VyY2VCdWZmZXJzIiwib25Tb3VyY2VPcGVuIiwib25UaW1lVXBkYXRlIiwib25VcGRhdGVFbmQiLCJvbldhaXRpbmciLCJNZWRpYVNvdXJjZSIsImFkZFNvdXJjZUJ1ZmZlcnMiLCJkb0FwcGVuZCIsImR1ciIsIm1pbWUiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJ1cGRhdGluZyIsImFwcGVuZEJ1ZmZlciIsImVuZE9mU3RyZWFtIiwiYWN0aXZlU291cmNlQnVmZmVycyIsInJlbW92ZUJ1ZmZlcnMiLCJ0YXNrTGlzdCIsInRhc2siLCJkb0NsZWFuQnVmZmVyIiwicmV0cnlUaW1lIiwiY2xlYW4iLCJjbGVhckJ1ZmZlciIsInJlbW92ZVNvdXJjZUJ1ZmZlciIsInJldm9rZU9iamVjdFVSTCIsImJFbmQiLCJyZWFkQXNJbnQiLCJ0ZW1wIiwicGFkU3RhcnQ0SGV4IiwiaGV4TnVtIiwiaGV4U3RyIiwicGFkU3RhcnQiLCJsb29wIiwic2lnbiIsInJlYWRVaW50NjQiLCJyZWFkSW50MTYiLCJyZWFkSW50MzIiLCJUYWciLCJMb2dnZXIiLCJGbHZDb250cm9sbGVyIiwicGxheWVyIiwiX3BsYXllciIsImluaXRTZWdtZW50QXJyaXZlZCIsImluaXRMaXN0ZW5lcnMiLCJfaGFuZGxlTG9hZGVyRGF0YUxvYWRlZCIsIl9oYW5kbGVOZXR3b3JrRXJyb3IiLCJfaGFuZGxlTWVkaWFJbmZvIiwiX2hhbmRsZU1ldGFkYXRhUGFyc2VkIiwiX2hhbmRsZURlbXV4Q29tcGxldGUiLCJfaGFuZGxlRGVtdXhFcnJvciIsIl9zZXRNZXRhVG9BdWRpbyIsIl9zZXRNZXRhVG9WaWRlbyIsIl9oYW5kbGVBcHBlbmRJbml0U2VnbWVudCIsIlBsYXllciIsIkVycm9ycyIsImxvYWREYXRhIiwibG9hZGVyIiwicmVzb2x2ZVZpZGVvR09QIiwiZmlyc3RJZnJhbWVJZHgiLCJsYXN0SWZyYW1lSWR4IiwidGVtcFNhbXBsZXMiLCJyZXN0IiwiZmx2QWxsb3dlZEV2ZW50cyIsIkZsdlBsYXllciIsIm1lZGlhVHlwZSIsIm91dGxpbmUiLCJpbml0RXZlbnRzIiwiaW5pdEZsdiIsImZsdiIsImluaXRGbHZFdmVudHMiLCJ1dGlsIiwiYWRkQ2xhc3MiLCJyb290IiwiZmluZERvbSIsImxpdmUiLCJjcmVhdGVEb20iLCJjb250cm9scyIsInRpbWVyIiwiZ2V0QnVmZmVyZWRSYW5nZSIsIkZMViIsIl9oYXNTdGFydCIsIl9kZXN0cm95IiwiYWRkTGl2ZUZsYWciLCJjdXJyZW50U3JjIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLElBQUlBLElBQUksT0FBT0MsT0FBUCxLQUFtQixRQUFuQixHQUE4QkEsT0FBOUIsR0FBd0MsSUFBaEQ7QUFDQSxJQUFJQyxlQUFlRixLQUFLLE9BQU9BLEVBQUVHLEtBQVQsS0FBbUIsVUFBeEIsR0FDZkgsRUFBRUcsS0FEYSxHQUVmLFNBQVNELFlBQVQsQ0FBc0JFLE1BQXRCLEVBQThCQyxRQUE5QixFQUF3Q0MsSUFB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QUFzQixTQUF0QixFQUFpQyxNQUFqQyxFQUF5QyxFQUF6QyxFQUE2QyxlQUE3QyxDQUFiO0FBQ0FuQyxhQUFPb0MsUUFBUCxDQUFnQmxWLFdBQWhCLENBQTRCZ1YsSUFBNUI7QUFDRDtBQUNGOztBQUVETyxhQUFZO0FBQ1YsU0FBS2w3QyxPQUFMLENBQWE0RSxPQUFiO0FBQ0EsU0FBS3kxQyxHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtyNkMsT0FBTCxHQUFlLElBQWY7QUFDRDs7QUFFRCxNQUFJc1IsR0FBSixHQUFXO0FBQ1QsV0FBTyxLQUFLOHBDLFVBQVo7QUFDRDs7QUFFRCxNQUFJOXBDLEdBQUosQ0FBU3lQLEdBQVQsRUFBYztBQUNaLFNBQUswM0IsTUFBTCxDQUFZNzdCLE1BQVosQ0FBbUJtRSxHQUFuQixHQUF5QkEsR0FBekI7QUFDQSxRQUFJLENBQUMsS0FBSytsQixNQUFWLEVBQWtCO0FBQ2hCLFdBQUtyRCxLQUFMO0FBQ0EsV0FBSzNoQyxJQUFMLENBQVUsT0FBVixFQUFtQixNQUFNO0FBQ3ZCLGFBQUtnRCxLQUFMLENBQVdpYyxHQUFYO0FBQ0QsT0FGRDtBQUdBLFdBQUtqZixJQUFMLENBQVUsU0FBVixFQUFxQixNQUFNO0FBQ3pCLGFBQUt1aEMsSUFBTDtBQUNELE9BRkQ7QUFHRCxLQVJELE1BUU87QUFDTCxXQUFLditCLEtBQUwsQ0FBV2ljLEdBQVg7QUFDRDtBQUNELFNBQUtqZixJQUFMLENBQVUsU0FBVixFQUFxQixNQUFNO0FBQ3pCLFdBQUt5Z0MsV0FBTCxHQUFtQixDQUFuQjtBQUNELEtBRkQ7QUFHRDtBQTNJNEI7O0FBOEkvQnhrQyxPQUFPQyxPQUFQLEdBQWlCZzhDLFNBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkpBLGFBQWEsbUNBQW1DLEVBQUUsSSIsImZpbGUiOiJtb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gJGdldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gJGdldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9ICRnZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBSZWZsZWN0QXBwbHkodGhpcy5saXN0ZW5lciwgdGhpcy50YXJnZXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBUcmFjazogcmVxdWlyZSgnLi9zcmMvdHJhY2snKS5kZWZhdWx0LFxuICBUcmFja3M6IHJlcXVpcmUoJy4vc3JjL3RyYWNrJykuVHJhY2tzLFxuICBBdWRpb1RyYWNrOiByZXF1aXJlKCcuL3NyYy90cmFjaycpLkF1ZGlvVHJhY2ssXG4gIFZpZGVvVHJhY2s6IHJlcXVpcmUoJy4vc3JjL3RyYWNrJykuVmlkZW9UcmFjayxcblxuICBYZ0J1ZmZlcjogcmVxdWlyZSgnLi9zcmMvYnVmZmVyJykuWGdCdWZmZXIsXG4gIFJlbXV4QnVmZmVyOiByZXF1aXJlKCcuL3NyYy9idWZmZXInKS5SZW11eEJ1ZmZlcixcblxuICBQcmVTb3VyY2U6IHJlcXVpcmUoJy4vc3JjL3ByZXNvdWNlJykuZGVmYXVsdFxufTtcbiIsImV4cG9ydCBjbGFzcyBYZ0J1ZmZlciB7XG4gIC8qKlxuICAgKiBBIGJ1ZmZlciB0byBzdG9yZSBsb2FkZWQgZGF0YS5cbiAgICpcbiAgICogQGNsYXNzIExvYWRlckJ1ZmZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gT3B0aW9uYWwgdGhlIGJ1ZmZlciBzaXplXG4gICAqL1xuICBjb25zdHJ1Y3RvciAobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGggfHwgMFxuICAgIHRoaXMuaGlzdG9yeUxlbiA9IGxlbmd0aCB8fCAwXG4gICAgdGhpcy5hcnJheSA9IFtdXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gIH1cblxuICAvKipcbiAgICogVGhlIGZ1bmN0aW9uIHRvIHB1c2ggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEgLSBUaGUgZGF0YSB0byBwdXNoIGludG8gdGhlIGJ1ZmZlclxuICAgKi9cbiAgcHVzaCAoZGF0YSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChkYXRhKVxuICAgIHRoaXMubGVuZ3RoICs9IGRhdGEuYnl0ZUxlbmd0aFxuICAgIHRoaXMuaGlzdG9yeUxlbiArPSBkYXRhLmJ5dGVMZW5ndGhcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb24gdG8gc2hpZnQgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIFRoZSBzaXplIG9mIHNoaWZ0LlxuICAgKi9cbiAgc2hpZnQgKGxlbmd0aCkge1xuICAgIGlmICh0aGlzLmFycmF5Lmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSgwKVxuICAgIH1cblxuICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NoaWZ0QnVmZmVyKClcbiAgICB9XG4gICAgaWYgKCh0aGlzLm9mZnNldCArIGxlbmd0aCkgPT09IHRoaXMuYXJyYXlbMF0ubGVuZ3RoKSB7XG4gICAgICBsZXQgcmV0ID0gdGhpcy5hcnJheVswXS5zbGljZSh0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKyBsZW5ndGgpXG4gICAgICB0aGlzLm9mZnNldCA9IDBcbiAgICAgIHRoaXMuYXJyYXkuc2hpZnQoKVxuICAgICAgdGhpcy5sZW5ndGggLT0gbGVuZ3RoXG4gICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgaWYgKCh0aGlzLm9mZnNldCArIGxlbmd0aCkgPCB0aGlzLmFycmF5WzBdLmxlbmd0aCkge1xuICAgICAgbGV0IHJldCA9IHRoaXMuYXJyYXlbMF0uc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgbGVuZ3RoKVxuICAgICAgdGhpcy5vZmZzZXQgKz0gbGVuZ3RoXG4gICAgICB0aGlzLmxlbmd0aCAtPSBsZW5ndGhcbiAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICBsZXQgcmV0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIGxldCB0bXBvZmYgPSAwXG4gICAgd2hpbGUgKHRoaXMuYXJyYXkubGVuZ3RoID4gMCAmJiBsZW5ndGggPiAwKSB7XG4gICAgICBpZiAoKHRoaXMub2Zmc2V0ICsgbGVuZ3RoKSA8IHRoaXMuYXJyYXlbMF0ubGVuZ3RoKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmFycmF5WzBdLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArIGxlbmd0aClcbiAgICAgICAgcmV0LnNldCh0bXAsIHRtcG9mZilcbiAgICAgICAgdGhpcy5vZmZzZXQgKz0gbGVuZ3RoXG4gICAgICAgIHRoaXMubGVuZ3RoIC09IGxlbmd0aFxuICAgICAgICBsZW5ndGggPSAwXG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdGVtcGxlbmd0aCA9IHRoaXMuYXJyYXlbMF0ubGVuZ3RoIC0gdGhpcy5vZmZzZXRcbiAgICAgICAgcmV0LnNldCh0aGlzLmFycmF5WzBdLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLmFycmF5WzBdLmxlbmd0aCksIHRtcG9mZilcbiAgICAgICAgdGhpcy5hcnJheS5zaGlmdCgpXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgICAgICB0bXBvZmYgKz0gdGVtcGxlbmd0aFxuICAgICAgICB0aGlzLmxlbmd0aCAtPSB0ZW1wbGVuZ3RoXG4gICAgICAgIGxlbmd0aCAtPSB0ZW1wbGVuZ3RoXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBjbGVhciB0aGUgYnVmZmVyLlxuICAgKi9cbiAgY2xlYXIgKCkge1xuICAgIHRoaXMuYXJyYXkgPSBbXVxuICAgIHRoaXMubGVuZ3RoID0gMFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jbGVhcigpXG4gICAgdGhpcy5oaXN0b3J5TGVuID0gMFxuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIHNoaWZ0IG9uZSB1bml0OEFycmF5LlxuICAgKi9cbiAgX3NoaWZ0QnVmZmVyICgpIHtcbiAgICB0aGlzLmxlbmd0aCAtPSB0aGlzLmFycmF5WzBdLmxlbmd0aFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHJldHVybiB0aGlzLmFycmF5LnNoaWZ0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHVpbnQ4IGRhdGEgdG8gbnVtYmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgLSB0aGUgc3RhcnQgcG9zdGlvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIHRoZSBsZW5ndGggb2YgZGF0YS5cbiAgICovXG4gIHRvSW50IChzdGFydCwgbGVuZ3RoKSB7XG4gICAgbGV0IHJldEludCA9IDBcbiAgICBsZXQgaSA9IHRoaXMub2Zmc2V0ICsgc3RhcnRcbiAgICB3aGlsZSAoaSA8IHRoaXMub2Zmc2V0ICsgbGVuZ3RoICsgc3RhcnQpIHtcbiAgICAgIGlmIChpIDwgdGhpcy5hcnJheVswXS5sZW5ndGgpIHtcbiAgICAgICAgcmV0SW50ID0gcmV0SW50ICogMjU2ICsgdGhpcy5hcnJheVswXVtpXVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFycmF5WzFdKSB7XG4gICAgICAgIHJldEludCA9IHJldEludCAqIDI1NiArIHRoaXMuYXJyYXlbMV1baSAtIHRoaXMuYXJyYXlbMF0ubGVuZ3RoXVxuICAgICAgfVxuXG4gICAgICBpKytcbiAgICB9XG4gICAgcmV0dXJuIHJldEludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW11eEJ1ZmZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnZpZGVvID0gW11cbiAgICB0aGlzLmF1ZGlvID0gW11cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMudmlkZW8gPSBbXVxuICAgIHRoaXMuYXVkaW8gPSBbXVxuICB9XG59XG4iLCJjbGFzcyBTb3VyY2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5taW1ldHlwZSA9ICcnO1xuICAgIHRoaXMuaW5pdCA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gW107XG4gIH1cbn1cblxuY2xhc3MgUHJlU291cmNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuc291cmNlcyA9IHt9O1xuICB9XG5cbiAgZ2V0U291cmNlIChzb3VyY2UpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VzW3NvdXJjZV07XG4gIH1cblxuICBjcmVhdGVTb3VyY2UgKG5hbWUpIHtcbiAgICB0aGlzLnNvdXJjZXNbbmFtZV0gPSBuZXcgU291cmNlKCk7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlc1tuYW1lXTtcbiAgfVxuXG4gIGNsZWFyICgpIHtcbiAgICB0aGlzLnNvdXJjZXMgPSB7fTtcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuc291cmNlcyA9IHt9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZVNvdXJjZTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIHtcbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmlkID0gLTFcbiAgICB0aGlzLnNlcXVlbmNlTnVtYmVyID0gMFxuICAgIHRoaXMuc2FtcGxlcyA9IFtdXG4gICAgdGhpcy5kcm9wcGVkU2FtcGxlcyA9IFtdXG4gICAgdGhpcy5sZW5ndGggPSAwXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHRyYWNrLlxuICAgKi9cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuc2VxdWVuY2VOdW1iZXIgPSAwXG4gICAgdGhpcy5zYW1wbGVzID0gW11cbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgfVxuICAvKipcbiAgICogZGVzdHJveSB0aGUgdHJhY2suXG4gICAqL1xuICBkaXN0cm95ICgpIHtcbiAgICB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmlkID0gLTFcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXVkaW9UcmFjayBleHRlbmRzIFRyYWNrIHtcbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBmb3IgYXVkaW8gdHJhY2suXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuVEFHID0gJ0F1ZGlvVHJhY2snXG4gICAgdGhpcy50eXBlID0gJ2F1ZGlvJ1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb1RyYWNrIGV4dGVuZHMgVHJhY2sge1xuICAvKipcbiAgICogVGhlIGNvbnN0cnVjdG9yIGZvciB2aWRlbyB0cmFjay5cbiAgICovXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5UQUcgPSAnVmlkZW9UcmFjaydcbiAgICB0aGlzLnR5cGUgPSAndmlkZW8nXG4gICAgdGhpcy5kcm9wcGVkID0gMFxuICB9XG4gIC8qKlxuICAgKiByZXNldCB0aGUgdmlkZW8gdHJhY2suXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5zZXF1ZW5jZU51bWJlciA9IDBcbiAgICB0aGlzLnNhbXBsZXMgPSBbXVxuICAgIHRoaXMubGVuZ3RoID0gMFxuICAgIHRoaXMuZHJvcHBlZCA9IDBcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJhY2tzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuYXVkaW9UcmFjayA9IG51bGxcbiAgICB0aGlzLnZpZGVvVHJhY2sgPSBudWxsXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmF1ZGlvVHJhY2sgPSBudWxsXG4gICAgdGhpcy52aWRlb1RyYWNrID0gbnVsbFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgTmFsdW5pdDogcmVxdWlyZSgnLi9zcmMvaDI2NC9uYWx1bml0JykuZGVmYXVsdCxcbiAgU3BzUGFyc2VyOiByZXF1aXJlKCcuL3NyYy9oMjY0L25hbHVuaXQvc3BzJykuZGVmYXVsdCxcblxuICBDb21wYXRpYmlsaXR5OiByZXF1aXJlKCcuL3NyYy9jb21wYXRpYmlsaXR5JykuZGVmYXVsdFxufTtcbiIsIlxuY2xhc3MgQUFDIHtcblxuICBzdGF0aWMgZ2V0U2lsZW50RnJhbWUoY29kZWMsIGNoYW5uZWxDb3VudCkge1xuICAgIGlmIChjb2RlYyA9PT0gJ21wNGEuNDAuMicpIHtcbiAgICAgIC8vIGhhbmRsZSBMQy1BQUNcbiAgICAgIGlmIChjaGFubmVsQ291bnQgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIzLCAweDgwXSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gMikge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MjEsIDB4MDAsIDB4NDksIDB4OTAsIDB4MDIsIDB4MTksIDB4MDAsIDB4MjMsIDB4ODBdKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAzKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4ZV0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIwLCAweDg0LCAweDAxLCAweDI2LCAweDQwLCAweDA4LCAweDY0LCAweDAwLCAweDgwLCAweDJjLCAweDgwLCAweDA4LCAweDAyLCAweDM4XSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gNSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODIsIDB4MzAsIDB4MDQsIDB4OTksIDB4MDAsIDB4MjEsIDB4OTAsIDB4MDIsIDB4MzhdKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA2KSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MiwgMHgzMCwgMHgwNCwgMHg5OSwgMHgwMCwgMHgyMSwgMHg5MCwgMHgwMiwgMHgwMCwgMHhiMiwgMHgwMCwgMHgyMCwgMHgwOCwgMHhlMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYW5kbGUgSEUtQUFDIChtcDRhLjQwLjUgLyBtcDRhLjQwLjI5KVxuICAgICAgaWYgKGNoYW5uZWxDb3VudCA9PT0gMSkge1xuICAgICAgICAvLyBmZm1wZWcgLXkgLWYgbGF2ZmkgLWkgXCJhZXZhbHNyYz0wOmQ9MC4wNVwiIC1jOmEgbGliZmRrX2FhYyAtcHJvZmlsZTphIGFhY19oZSAtYjphIDRrIG91dHB1dC5hYWMgJiYgaGV4ZHVtcCAtdiAtZSAnMTYvMSBcIjB4JXgsXCIgXCJcXG5cIicgLXYgb3V0cHV0LmFhY1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MSwgMHg0MCwgMHgyMiwgMHg4MCwgMHhhMywgMHg0ZSwgMHhlNiwgMHg4MCwgMHhiYSwgMHg4LCAweDAsIDB4MCwgMHgwLCAweDFjLCAweDYsIDB4ZjEsIDB4YzEsIDB4YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1ZV0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDIpIHtcbiAgICAgICAgLy8gZmZtcGVnIC15IC1mIGxhdmZpIC1pIFwiYWV2YWxzcmM9MHwwOmQ9MC4wNVwiIC1jOmEgbGliZmRrX2FhYyAtcHJvZmlsZTphIGFhY19oZV92MiAtYjphIDRrIG91dHB1dC5hYWMgJiYgaGV4ZHVtcCAtdiAtZSAnMTYvMSBcIjB4JXgsXCIgXCJcXG5cIicgLXYgb3V0cHV0LmFhY1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MSwgMHg0MCwgMHgyMiwgMHg4MCwgMHhhMywgMHg1ZSwgMHhlNiwgMHg4MCwgMHhiYSwgMHg4LCAweDAsIDB4MCwgMHgwLCAweDAsIDB4OTUsIDB4MCwgMHg2LCAweGYxLCAweGExLCAweGEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWVdKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAzKSB7XG4gICAgICAgIC8vIGZmbXBlZyAteSAtZiBsYXZmaSAtaSBcImFldmFsc3JjPTB8MHwwOmQ9MC4wNVwiIC1jOmEgbGliZmRrX2FhYyAtcHJvZmlsZTphIGFhY19oZV92MiAtYjphIDRrIG91dHB1dC5hYWMgJiYgaGV4ZHVtcCAtdiAtZSAnMTYvMSBcIjB4JXgsXCIgXCJcXG5cIicgLXYgb3V0cHV0LmFhY1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MSwgMHg0MCwgMHgyMiwgMHg4MCwgMHhhMywgMHg1ZSwgMHhlNiwgMHg4MCwgMHhiYSwgMHg4LCAweDAsIDB4MCwgMHgwLCAweDAsIDB4OTUsIDB4MCwgMHg2LCAweGYxLCAweGExLCAweGEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWVdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBQUM7XG4iLCJpbXBvcnQge0VWRU5UU30gZnJvbSAneGdwbGF5ZXItdXRpbHMnXG5pbXBvcnQgQUFDIGZyb20gJy4vYWFjL2FhYy1oZWxwZXInXG5cbmNvbnN0IHtSRU1VWF9FVkVOVFMsIERFTVVYX0VWRU5UU30gPSBFVkVOVFNcblxuY2xhc3MgQ29tcGF0aWJpbGl0eSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLm5leHRBdWRpb0R0cyA9IDAgLy8g5qih5ouf5LiL5LiA5q616Z+z6aKR5pWw5o2u55qEZHRzXG4gICAgdGhpcy5uZXh0VmlkZW9EdHMgPSAwIC8vIOaooeaLn+S4i+S4gOauteinhumikeaVsOaNrueahGR0c1xuXG4gICAgdGhpcy5sYXN0QXVkaW9TYW1wbGVzTGVuID0gMCAvLyDkuIrkuIDmrrXpn7PpopHmlbDmja7nmoTplb/luqZcbiAgICB0aGlzLmxhc3RWaWRlb1NhbXBsZXNMZW4gPSAwIC8vIOS4iuS4gOauteinhumikeaVsOaNrueahOmVv+W6plxuXG4gICAgdGhpcy5sYXN0VmlkZW9EdHMgPSB1bmRlZmluZWQgLy8g5LiK5LiA5q616Z+z6aKR5pWw5o2u55qE6ZW/5bqmXG4gICAgdGhpcy5sYXN0QXVkaW9EdHMgPSB1bmRlZmluZWQgLy8g5LiK5LiA5q616KeG6aKR5pWw5o2u55qE6ZW/5bqmXG5cbiAgICB0aGlzLmFsbEF1ZGlvU2FtcGxlc0NvdW50ID0gMCAvLyDpn7PpopHmgLvmlbDmja7ph48o5Y6f5aeL5binKVxuICAgIHRoaXMuYWxsVmlkZW9TYW1wbGVzQ291bnQgPSAwIC8vIOinhumikeaAu+aVsOaNrumHjyjljp/lp4vluKcpXG5cbiAgICB0aGlzLl9maXJzdEF1ZGlvU2FtcGxlID0gbnVsbFxuICAgIHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUgPSBudWxsXG5cbiAgICB0aGlzLmZpbGxlZEF1ZGlvU2FtcGxlcyA9IFtdIC8vIOihpeWFhemfs+mikeW4p++8iO+8iVxuICAgIHRoaXMuZmlsbGVkVmlkZW9TYW1wbGVzID0gW10gLy8g6KGl5YWF6KeG6aKR5bin77yI77yJXG5cbiAgICB0aGlzLl92aWRlb0xhcmdlR2FwID0gMFxuICAgIHRoaXMuX2F1ZGlvTGFyZ2VHYXAgPSAwXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLmJlZm9yZShSRU1VWF9FVkVOVFMuUkVNVVhfTUVESUEsIHRoaXMuZG9GaXguYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLm5leHRBdWRpb0R0cyA9IG51bGwgLy8g5Lyw566X5LiL5LiA5q616Z+z6aKR5pWw5o2u55qEZHRzXG4gICAgdGhpcy5uZXh0VmlkZW9EdHMgPSBudWxsIC8vIOS8sOeul+S4i+S4gOauteinhumikeaVsOaNrueahGR0c1xuXG4gICAgdGhpcy5sYXN0QXVkaW9TYW1wbGVzTGVuID0gMCAvLyDkuIrkuIDmrrXpn7PpopHmlbDmja7nmoTplb/luqZcbiAgICB0aGlzLmxhc3RWaWRlb1NhbXBsZXNMZW4gPSAwIC8vIOS4iuS4gOauteinhumikeaVsOaNrueahOmVv+W6plxuXG4gICAgdGhpcy5sYXN0VmlkZW9EdHMgPSB1bmRlZmluZWQgLy8g5LiK5LiA5q616Z+z6aKR5pWw5o2u55qE6ZW/5bqmXG4gICAgdGhpcy5sYXN0QXVkaW9EdHMgPSB1bmRlZmluZWQgLy8g5LiK5LiA5q616KeG6aKR5pWw5o2u55qE6ZW/5bqmXG5cbiAgICAvLyB0aGlzLmFsbEF1ZGlvU2FtcGxlc0NvdW50ID0gMCAvLyDpn7PpopHmgLvmlbDmja7ph48o5Y6f5aeL5binKVxuICAgIC8vIHRoaXMuYWxsVmlkZW9TYW1wbGVzQ291bnQgPSAwIC8vIOinhumikeaAu+aVsOaNrumHjyjljp/lp4vluKcpXG5cbiAgICAvLyB0aGlzLl9maXJzdEF1ZGlvU2FtcGxlID0gbnVsbFxuICAgIC8vIHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUgPSBudWxsXG5cbiAgICB0aGlzLmZpbGxlZEF1ZGlvU2FtcGxlcyA9IFtdIC8vIOihpeWFhemfs+mikeW4p++8iO+8iVxuICAgIHRoaXMuZmlsbGVkVmlkZW9TYW1wbGVzID0gW10gLy8g6KGl5YWF6KeG6aKR5bin77yI77yJXG4gIH1cblxuICBkb0ZpeCAoKSB7XG4gICAgY29uc3QgeyBpc0ZpcnN0QXVkaW9TYW1wbGVzLCBpc0ZpcnN0VmlkZW9TYW1wbGVzIH0gPSB0aGlzLmdldEZpcnN0U2FtcGxlKClcblxuICAgIC8vIHRoaXMucmVtb3ZlSW52YWxpZFNhbXBsZXMoKVxuXG4gICAgdGhpcy5yZWNvcmRTYW1wbGVzQ291bnQoKVxuXG4gICAgaWYgKHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUpIHtcbiAgICAgIHRoaXMuZml4UmVmU2FtcGxlRHVyYXRpb24odGhpcy52aWRlb1RyYWNrLm1ldGEsIHRoaXMudmlkZW9UcmFjay5zYW1wbGVzKVxuICAgIH1cbiAgICBpZiAodGhpcy5fZmlyc3RBdWRpb1NhbXBsZSkge1xuICAgICAgdGhpcy5maXhSZWZTYW1wbGVEdXJhdGlvbih0aGlzLmF1ZGlvVHJhY2subWV0YSwgdGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMpXG4gICAgfVxuXG4gICAgY29uc3QgeyBjaGFuZ2VkOiB2aWRlb0NoYW5nZWQsIGNoYW5nZWRJZHg6IHZpZGVvQ2hhbmdlZElkeCB9ID0gQ29tcGF0aWJpbGl0eS5kZXRhY3RDaGFuZ2VTdHJlYW0odGhpcy52aWRlb1RyYWNrLnNhbXBsZXMpXG4gICAgaWYgKHZpZGVvQ2hhbmdlZCAmJiAhaXNGaXJzdEF1ZGlvU2FtcGxlcykge1xuICAgICAgdGhpcy5maXhDaGFuZ2VTdHJlYW1WaWRlbyh2aWRlb0NoYW5nZWRJZHgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9GaXhWaWRlbyhpc0ZpcnN0VmlkZW9TYW1wbGVzKVxuICAgIH1cblxuICAgIGNvbnN0IHsgY2hhbmdlZDogYXVkaW9DaGFuZ2VkLCBjaGFuZ2VkSWR4OiBhdWRpb0NoYW5nZWRJZHggfSA9IENvbXBhdGliaWxpdHkuZGV0YWN0Q2hhbmdlU3RyZWFtKHRoaXMuYXVkaW9UcmFjay5zYW1wbGVzKVxuICAgIGlmIChhdWRpb0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuZml4Q2hhbmdlU3RyZWFtQXVkaW8oYXVkaW9DaGFuZ2VkSWR4KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvRml4QXVkaW8oaXNGaXJzdEF1ZGlvU2FtcGxlcylcbiAgICB9XG5cbiAgICAvLyB0aGlzLnJlbW92ZUludmFsaWRTYW1wbGVzKClcbiAgfVxuXG4gIGRvRml4VmlkZW8gKGZpcnN0LCBzdHJlYW1DaGFuZ2VTdGFydCkge1xuICAgIGxldCB7c2FtcGxlczogdmlkZW9TYW1wbGVzLCBtZXRhfSA9IHRoaXMudmlkZW9UcmFja1xuXG4gICAgaWYgKG1ldGEuZnJhbWVSYXRlICYmIG1ldGEuZnJhbWVSYXRlLmZpeGVkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdmlkZW9TYW1wbGVzIHx8ICF2aWRlb1NhbXBsZXMubGVuZ3RoIHx8ICF0aGlzLl9maXJzdFZpZGVvU2FtcGxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhgdmlkZW8gbGFzdFNhbXBsZSwgJHt2aWRlb1NhbXBsZXNbdmlkZW9TYW1wbGVzLmxlbmd0aCAtIDFdLmR0c31gKVxuXG4gICAgY29uc3QgZmlyc3RTYW1wbGUgPSB2aWRlb1NhbXBsZXNbMF1cblxuICAgIGNvbnN0IHNhbXBsZXNMZW4gPSB2aWRlb1NhbXBsZXMubGVuZ3RoO1xuXG4gICAgLy8gc3RlcDAu5L+u5aSNaGxz5rWB5Ye6546w5beo5aSnZ2Fw77yM6ZyA6KaB5by65Yi26YeN5a6a5L2N55qE6Zeu6aKYXG4gICAgaWYgKHRoaXMuX3ZpZGVvTGFyZ2VHYXAgPiAwKSB7XG4gICAgICBDb21wYXRpYmlsaXR5LmRvRml4TGFyZ2VHYXAodmlkZW9TYW1wbGVzLCB0aGlzLl92aWRlb0xhcmdlR2FwKVxuICAgIH1cblxuICAgIGlmIChmaXJzdFNhbXBsZS5kdHMgIT09IHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUuZHRzICYmIChzdHJlYW1DaGFuZ2VTdGFydCB8fCBDb21wYXRpYmlsaXR5LmRldGVjdExhcmdlR2FwKHRoaXMubmV4dFZpZGVvRHRzLCBmaXJzdFNhbXBsZSkpKSB7XG4gICAgICBpZiAoc3RyZWFtQ2hhbmdlU3RhcnQpIHtcbiAgICAgICAgdGhpcy5uZXh0VmlkZW9EdHMgPSBzdHJlYW1DaGFuZ2VTdGFydCAvLyBGSVg6IEhsc+S4remAlOWIh2NvZGVj77yM5Zyo5aaC5p6c55u05o6lc2Vla+WIsOWQjumdoueahOeCueS8muWvvOiHtGxhcmdlR2Fw6K6h566X5aSx6LSlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3ZpZGVvTGFyZ2VHYXAgPSB0aGlzLm5leHRWaWRlb0R0cyAtIGZpcnN0U2FtcGxlLmR0c1xuICAgICAgQ29tcGF0aWJpbGl0eS5kb0ZpeExhcmdlR2FwKHZpZGVvU2FtcGxlcywgdGhpcy5fdmlkZW9MYXJnZUdhcClcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdER0cyA9IGZpcnN0U2FtcGxlLmR0c1xuXG4gICAgLy8gc3RlcDEuIOS/ruWkjeS4jmF1ZGlv6aaW5bin5beu6Led5aSq5aSn55qE6Zeu6aKYXG4gICAgaWYgKGZpcnN0ICYmIHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUpIHtcbiAgICAgIGNvbnN0IHZpZGVvRmlyc3REdHMgPSB0aGlzLl9maXJzdFZpZGVvU2FtcGxlLmR0c1xuICAgICAgY29uc3QgYXVkaW9GaXJzdER0cyA9IHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUuZHRzXG4gICAgICBjb25zdCBnYXAgPSB2aWRlb0ZpcnN0RHRzIC0gYXVkaW9GaXJzdER0c1xuICAgICAgaWYgKGdhcCA+ICgyICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbikpIHtcbiAgICAgICAgY29uc3QgZmlsbENvdW50ID0gTWF0aC5mbG9vcihnYXAgLyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsbENvdW50OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjbG9uZWRGaXJzdFNhbXBsZSA9IE9iamVjdC5hc3NpZ24oe30sIGZpcnN0U2FtcGxlKSAvLyDop4bpopHlpLTpg6jluKfnvLrlpLHpnIDopoHlpI3liLbnrKzkuIDluKdcbiAgICAgICAgICAvLyDph43mlrDorqHnrpdzYW1wbGXnmoRkdHPlkoxwdHNcbiAgICAgICAgICBjbG9uZWRGaXJzdFNhbXBsZS5kdHMgPSB2aWRlb0ZpcnN0RHRzIC0gKGkgKyAxKSAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgICBjbG9uZWRGaXJzdFNhbXBsZS5wdHMgPSBjbG9uZWRGaXJzdFNhbXBsZS5kdHMgKyBjbG9uZWRGaXJzdFNhbXBsZS5jdHNcblxuICAgICAgICAgIHZpZGVvU2FtcGxlcy51bnNoaWZ0KGNsb25lZEZpcnN0U2FtcGxlKVxuXG4gICAgICAgICAgdGhpcy5maWxsZWRWaWRlb1NhbXBsZXMucHVzaCh7XG4gICAgICAgICAgICBkdHM6IGNsb25lZEZpcnN0U2FtcGxlLmR0cyxcbiAgICAgICAgICAgIHNpemU6IGNsb25lZEZpcnN0U2FtcGxlLmRhdGEuYnl0ZUxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZ2FwXG4gICAgLy8gc3RlcDIuIOS/ruWkjXNhbXBsZXPmrrXkuYvpl7TnmoTpl7Tot53pl67popjjgIFcbiAgICBpZiAodGhpcy5uZXh0VmlkZW9EdHMpIHtcbiAgICAgIC8vIHN0ZXAxLiDlpITnkIZzYW1wbGVz5q615LmL6Ze055qE5Lii5bin5oOF5Ya1XG4gICAgICAvLyDlvZPlj5HnjrBkdXJhdGlvbuW3rui3neWkp+S6jjLluKfml7bov5vooYzooaXluKdcbiAgICAgIGdhcCA9IGZpcnN0RHRzIC0gdGhpcy5uZXh0VmlkZW9EdHNcbiAgICAgIGNvbnN0IGFic0dhcCA9IE1hdGguYWJzKGdhcClcbiAgICAgIGlmIChnYXAgPiAoMiAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pKSB7XG4gICAgICAgIGNvbnN0IGZpbGxGcmFtZUNvdW50ID0gTWF0aC5mbG9vcihnYXAgLyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsbEZyYW1lQ291bnQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNsb25lZFNhbXBsZSA9IE9iamVjdC5hc3NpZ24oe30sIHZpZGVvU2FtcGxlc1swXSlcbiAgICAgICAgICBjb25zdCBjb21wdXRlZCA9IGZpcnN0RHRzIC0gKGkgKyAxKSAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb25cblxuICAgICAgICAgIGNsb25lZFNhbXBsZS5kdHMgPSBjb21wdXRlZCA+IHRoaXMubmV4dFZpZGVvRHRzID8gY29tcHV0ZWQgOiB0aGlzLm5leHRWaWRlb0R0cyAvLyDooaXnmoTnrKzkuIDluKfkuIDlrpropoHmmK9uZXh0VmlkZW9EdHNcbiAgICAgICAgICBjbG9uZWRTYW1wbGUucHRzID0gY2xvbmVkU2FtcGxlLmR0cyArIGNsb25lZFNhbXBsZS5jdHNcblxuICAgICAgICAgIHRoaXMudmlkZW9UcmFjay5zYW1wbGVzLnVuc2hpZnQoY2xvbmVkU2FtcGxlKVxuXG4gICAgICAgICAgdGhpcy5maWxsZWRWaWRlb1NhbXBsZXMucHVzaCh7XG4gICAgICAgICAgICBkdHM6IGNsb25lZFNhbXBsZS5kdHMsXG4gICAgICAgICAgICBzaXplOiBjbG9uZWRTYW1wbGUuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhYnNHYXAgPD0gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiAmJiBhYnNHYXAgPiAwKSB7XG4gICAgICAgIC8vIOW9k+W3rui3neWcqCst5LiA5bin5LmL6Ze05pe25bCG56ys5LiA5bin55qEZHRz5by66KGM5a6a5L2N5Yiw5pyf5pyb5L2N572uXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfph43lrprkvY3op4bpopHluKdkdHMnLCB2aWRlb1NhbXBsZXNbMF0uZHRzLCB0aGlzLm5leHRWaWRlb0R0cylcbiAgICAgICAgdmlkZW9TYW1wbGVzWzBdLmR0cyA9IHRoaXMubmV4dFZpZGVvRHRzXG4gICAgICAgIHZpZGVvU2FtcGxlc1swXS5vcmlnaW5EdHMgPSB2aWRlb1NhbXBsZXNbMF0uZHRzXG4gICAgICAgIHZpZGVvU2FtcGxlc1swXS5jdHMgPSB2aWRlb1NhbXBsZXNbMF0uY3RzICE9PSB1bmRlZmluZWQgPyB2aWRlb1NhbXBsZXNbMF0uY3RzIDogdmlkZW9TYW1wbGVzWzBdLnB0cyAtIHZpZGVvU2FtcGxlc1swXS5kdHNcbiAgICAgICAgdmlkZW9TYW1wbGVzWzBdLnB0cyA9IHZpZGVvU2FtcGxlc1swXS5kdHMgKyB2aWRlb1NhbXBsZXNbMF0uY3RzXG4gICAgICB9IGVsc2UgaWYgKGdhcCA8IDApIHtcbiAgICAgICAgLy8g5Ye6546w5aSn55qEZ2FwXG4gICAgICAgIENvbXBhdGliaWxpdHkuZG9GaXhMYXJnZUdhcCh2aWRlb1NhbXBsZXMsICgtMSAqIGdhcCkpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGxhc3REdHMgPSB2aWRlb1NhbXBsZXNbdmlkZW9TYW1wbGVzLmxlbmd0aCAtIDFdLmR0cztcblxuICAgIGNvbnN0IGxhc3RTYW1wbGVEdXJhdGlvbiA9IHZpZGVvU2FtcGxlcy5sZW5ndGggPj0gMiA/IGxhc3REdHMgLSB2aWRlb1NhbXBsZXNbdmlkZW9TYW1wbGVzLmxlbmd0aCAtIDJdLmR0cyA6IG1ldGEucmVmU2FtcGxlRHVyYXRpb25cblxuICAgIHRoaXMubGFzdFZpZGVvU2FtcGxlc0xlbiA9IHNhbXBsZXNMZW5cbiAgICB0aGlzLm5leHRWaWRlb0R0cyA9IGxhc3REdHMgKyBsYXN0U2FtcGxlRHVyYXRpb25cbiAgICB0aGlzLmxhc3RWaWRlb0R0cyA9IGxhc3REdHNcblxuICAgIC8vIHN0ZXAyLiDkv67lpI1zYW1wbGXmrrXkuYvlhoXnmoTpl7Tot53pl67pophcbiAgICAvLyBzdGVwMy4g5L+u5aSNc2FtcGxlc+auteWGhemDqOeahGR0c+W8guW4uOmXrumimFxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2aWRlb1NhbXBsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB2aWRlb1NhbXBsZXNbaV1cbiAgICAgIGNvbnN0IG5leHQgPSB2aWRlb1NhbXBsZXNbaSArIDFdXG5cbiAgICAgIGlmICghbmV4dCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHVyYXRpb24gPSBuZXh0LmR0cyAtIGN1cnJlbnQuZHRzO1xuXG4gICAgICBpZiAoZHVyYXRpb24gPiAoMiAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pKSB7XG4gICAgICAgIC8vIOS4pOW4p+S5i+mXtOmXtOmalOWkquWkp++8jOmcgOimgeihpeepuueZveW4p1xuICAgICAgICBsZXQgZmlsbEZyYW1lQ291bnQgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbilcblxuICAgICAgICBsZXQgZmlsbEZyYW1lSWR4ID0gMFxuICAgICAgICB3aGlsZSAoZmlsbEZyYW1lSWR4IDwgZmlsbEZyYW1lQ291bnQpIHtcbiAgICAgICAgICBjb25zdCBmaWxsRnJhbWUgPSBPYmplY3QuYXNzaWduKHt9LCBuZXh0KVxuICAgICAgICAgIGZpbGxGcmFtZS5kdHMgPSBjdXJyZW50LmR0cyArIChmaWxsRnJhbWVJZHggKyAxKSAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgICBmaWxsRnJhbWUucHRzID0gZmlsbEZyYW1lLmR0cyArIGZpbGxGcmFtZS5jdHNcbiAgICAgICAgICBpZiAoZmlsbEZyYW1lIDwgbmV4dC5kdHMpIHtcbiAgICAgICAgICAgIHZpZGVvU2FtcGxlcy5zcGxpY2UoaSwgMCwgZmlsbEZyYW1lKVxuXG4gICAgICAgICAgICB0aGlzLmZpbGxlZFZpZGVvU2FtcGxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgZHRzOiBmaWxsRnJhbWUuZHRzLFxuICAgICAgICAgICAgICBzaXplOiBmaWxsRnJhbWUuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbGxGcmFtZUlkeCsrXG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy52aWRlb1RyYWNrLnNhbXBsZXMgPSB2aWRlb1NhbXBsZXM7XG4gIH1cblxuICBkb0ZpeEF1ZGlvIChmaXJzdCwgc3RyZWFtQ2hhbmdlU3RhcnQpIHtcbiAgICBsZXQge3NhbXBsZXM6IGF1ZGlvU2FtcGxlcywgbWV0YX0gPSB0aGlzLmF1ZGlvVHJhY2tcblxuICAgIGlmICghYXVkaW9TYW1wbGVzIHx8ICFhdWRpb1NhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coYGF1ZGlvIGxhc3RTYW1wbGUsICR7YXVkaW9TYW1wbGVzW2F1ZGlvU2FtcGxlcy5sZW5ndGggLSAxXS5kdHN9YClcblxuICAgIGNvbnN0IHNhbXBsZXNMZW4gPSBhdWRpb1NhbXBsZXMubGVuZ3RoO1xuICAgIGNvbnN0IHNpbGVudEZyYW1lID0gQUFDLmdldFNpbGVudEZyYW1lKG1ldGEuY29kZWMsIG1ldGEuY2hhbm5lbENvdW50KVxuXG4gICAgY29uc3QgZmlyc3RTYW1wbGUgPSB0aGlzLl9maXJzdEF1ZGlvU2FtcGxlXG5cbiAgICBjb25zdCBfZmlyc3RTYW1wbGUgPSBhdWRpb1NhbXBsZXNbMF1cbiAgICAvLyDlr7lhdWRpb1NhbXBsZXPmjInnhadkdHPlgZrmjpLluo9cbiAgICAvLyBhdWRpb1NhbXBsZXMgPSBDb21wYXRpYmlsaXR5LnNvcnRBdWRpb1NhbXBsZXMoYXVkaW9TYW1wbGVzKVxuICAgIGlmICh0aGlzLl9hdWRpb0xhcmdlR2FwID4gMCkge1xuICAgICAgQ29tcGF0aWJpbGl0eS5kb0ZpeExhcmdlR2FwKGF1ZGlvU2FtcGxlcywgdGhpcy5fYXVkaW9MYXJnZUdhcClcbiAgICB9XG5cbiAgICBpZiAoX2ZpcnN0U2FtcGxlLmR0cyAhPT0gdGhpcy5fZmlyc3RBdWRpb1NhbXBsZS5kdHMgJiYgKHN0cmVhbUNoYW5nZVN0YXJ0IHx8IENvbXBhdGliaWxpdHkuZGV0ZWN0TGFyZ2VHYXAodGhpcy5uZXh0QXVkaW9EdHMsIF9maXJzdFNhbXBsZSkpKSB7XG4gICAgICBpZiAoc3RyZWFtQ2hhbmdlU3RhcnQpIHtcbiAgICAgICAgdGhpcy5uZXh0QXVkaW9EdHMgPSBzdHJlYW1DaGFuZ2VTdGFydCAvLyBGSVg6IEhsc+S4remAlOWIh2NvZGVj77yM5Zyo5aaC5p6c55u05o6lc2Vla+WIsOWQjumdoueahOeCueS8muWvvOiHtGxhcmdlR2Fw6K6h566X5aSx6LSlXG4gICAgICB9XG4gICAgICB0aGlzLl9hdWRpb0xhcmdlR2FwID0gdGhpcy5uZXh0QXVkaW9EdHMgLSBfZmlyc3RTYW1wbGUuZHRzXG4gICAgICBDb21wYXRpYmlsaXR5LmRvRml4TGFyZ2VHYXAoYXVkaW9TYW1wbGVzLCB0aGlzLl9hdWRpb0xhcmdlR2FwKVxuICAgIH1cbiAgICAvLyBzdGVwMC4g6aaW5bin5LiOdmlkZW/pppbluKfpl7Tot53lpKfnmoTpl67pophcbiAgICBpZiAodGhpcy5fZmlyc3RWaWRlb1NhbXBsZSAmJiBmaXJzdCkge1xuICAgICAgY29uc3QgdmlkZW9GaXJzdFB0cyA9IHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUucHRzID8gdGhpcy5fZmlyc3RWaWRlb1NhbXBsZS5wdHMgOiB0aGlzLl9maXJzdFZpZGVvU2FtcGxlLmR0cyArIHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUuY3RzXG5cbiAgICAgIGlmIChmaXJzdFNhbXBsZS5kdHMgLSB2aWRlb0ZpcnN0UHRzID4gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbikge1xuICAgICAgICBjb25zdCBzaWxlbnRTYW1wbGVDb3VudCA9IE1hdGguZmxvb3IoKGZpcnN0U2FtcGxlLmR0cyAtIHZpZGVvRmlyc3RQdHMpIC8gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbilcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpbGVudFNhbXBsZUNvdW50OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzaWxlbnRTYW1wbGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBzaWxlbnRGcmFtZSxcbiAgICAgICAgICAgIGRhdGFzaXplOiBzaWxlbnRGcmFtZS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgZHRzOiBmaXJzdFNhbXBsZS5kdHMgLSAoaSArIDEpICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbixcbiAgICAgICAgICAgIGZpbHRlcmVkOiAwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXVkaW9TYW1wbGVzLnVuc2hpZnQoc2lsZW50U2FtcGxlKVxuXG4gICAgICAgICAgdGhpcy5maWxsZWRBdWRpb1NhbXBsZXMucHVzaCh7XG4gICAgICAgICAgICBkdHM6IHNpbGVudFNhbXBsZS5kdHMsXG4gICAgICAgICAgICBzaXplOiBzaWxlbnRTYW1wbGUuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBnYXBcbiAgICBjb25zdCBmaXJzdER0cyA9IGF1ZGlvU2FtcGxlc1swXS5kdHNcblxuICAgIGlmICh0aGlzLm5leHRBdWRpb0R0cykge1xuICAgICAgLy8gc3RlcDEuIOWkhOeQhnNhbXBsZXPmrrXkuYvpl7TnmoTkuKLluKfmg4XlhrVcbiAgICAgIC8vIOW9k+WPkeeOsGR1cmF0aW9u5beu6Led5aSn5LqOMeW4p+aXtui/m+ihjOihpeW4p1xuICAgICAgZ2FwID0gZmlyc3REdHMgLSB0aGlzLm5leHRBdWRpb0R0c1xuICAgICAgY29uc3QgYWJzR2FwID0gTWF0aC5hYnMoZ2FwKVxuXG4gICAgICBpZiAoYWJzR2FwID4gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiAmJiBzYW1wbGVzTGVuID09PSAxICYmIHRoaXMubGFzdEF1ZGlvU2FtcGxlc0xlbiA9PT0gMSkge1xuICAgICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGdhcCA+ICgyICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbikpIHtcbiAgICAgICAgaWYgKHNhbXBsZXNMZW4gPT09IDEgJiYgdGhpcy5sYXN0QXVkaW9TYW1wbGVzTGVuID09PSAxKSB7XG4gICAgICAgICAgLy8g5aaC5p6cc2FtcGxl55qEbGVuZ3Ro5LiA55u05pivMe+8jOiAjOS4lOS4gOebtOS4jeespuWQiHJlZlNhbXBsZUR1cmF0aW9u77yM6ZyA6KaB5Yqo5oCB5L+u5pS5cmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQgPSBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQgIT09IHVuZGVmaW5lZCA/IG1ldGEucmVmU2FtcGxlRHVyYXRpb25GaXhlZCArIGdhcCA6IG1ldGEucmVmU2FtcGxlRHVyYXRpb24gKyBnYXBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzaWxlbnRGcmFtZUNvdW50ID0gTWF0aC5mbG9vcihnYXAgLyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKVxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWxlbnRGcmFtZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkID0gZmlyc3REdHMgLSAoaSArIDEpICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvblxuICAgICAgICAgICAgY29uc3Qgc2lsZW50U2FtcGxlID0gT2JqZWN0LmFzc2lnbih7fSwgYXVkaW9TYW1wbGVzWzBdLCB7XG4gICAgICAgICAgICAgIGR0czogY29tcHV0ZWQgPiB0aGlzLm5leHRBdWRpb0R0cyA/IGNvbXB1dGVkIDogdGhpcy5uZXh0QXVkaW9EdHNcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuZmlsbGVkQXVkaW9TYW1wbGVzLnB1c2goe1xuICAgICAgICAgICAgICBkdHM6IHNpbGVudFNhbXBsZS5kdHMsXG4gICAgICAgICAgICAgIHNpemU6IHNpbGVudFNhbXBsZS5kYXRhLmJ5dGVMZW5ndGhcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcy51bnNoaWZ0KHNpbGVudFNhbXBsZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYWJzR2FwIDw9IG1ldGEucmVmU2FtcGxlRHVyYXRpb24gJiYgYWJzR2FwID4gMCkge1xuICAgICAgICAvLyDlvZPlt67ot53mr5TovoPlsI/nmoTml7blgJnlsIbpn7PpopHluKfph43lrprkvY1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+mHjeWumuS9jemfs+mikeW4p2R0cycsIGF1ZGlvU2FtcGxlc1swXS5kdHMsIHRoaXMubmV4dEF1ZGlvRHRzKVxuICAgICAgICBhdWRpb1NhbXBsZXNbMF0uZHRzID0gdGhpcy5uZXh0QXVkaW9EdHNcbiAgICAgICAgYXVkaW9TYW1wbGVzWzBdLnB0cyA9IHRoaXMubmV4dEF1ZGlvRHRzXG4gICAgICB9IGVsc2UgaWYgKGdhcCA8IDApIHtcbiAgICAgICAgQ29tcGF0aWJpbGl0eS5kb0ZpeExhcmdlR2FwKGF1ZGlvU2FtcGxlcywgKC0xICogZ2FwKSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbGFzdER0cyA9IGF1ZGlvU2FtcGxlc1thdWRpb1NhbXBsZXMubGVuZ3RoIC0gMV0uZHRzO1xuICAgIGNvbnN0IGxhc3RTYW1wbGVEdXJhdGlvbiA9IGF1ZGlvU2FtcGxlcy5sZW5ndGggPj0gMiA/IGxhc3REdHMgLSBhdWRpb1NhbXBsZXNbYXVkaW9TYW1wbGVzLmxlbmd0aCAtIDJdLmR0cyA6IG1ldGEucmVmU2FtcGxlRHVyYXRpb25cblxuICAgIHRoaXMubGFzdEF1ZGlvU2FtcGxlc0xlbiA9IHNhbXBsZXNMZW47XG4gICAgdGhpcy5uZXh0QXVkaW9EdHMgPSBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQgPyBsYXN0RHRzICsgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbkZpeGVkIDogbGFzdER0cyArIGxhc3RTYW1wbGVEdXJhdGlvblxuICAgIHRoaXMubGFzdEF1ZGlvRHRzID0gbGFzdER0c1xuXG4gICAgLy8gc3RlcDMuIOS/ruWkjXNhbXBsZXPmrrXlhoXpg6jnmoRkdHPlvILluLjpl67pophcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXVkaW9TYW1wbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gYXVkaW9TYW1wbGVzW2ldXG4gICAgICBjb25zdCBuZXh0ID0gYXVkaW9TYW1wbGVzW2kgKyAxXVxuXG4gICAgICBpZiAoIW5leHQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gbmV4dC5kdHMgLSBjdXJyZW50LmR0cztcbiAgICAgIGF1ZGlvU2FtcGxlc1tpXS5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgLypcbiAgICAgIGlmIChkdXJhdGlvbiA+ICgyICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbikpIHtcbiAgICAgICAgLy8g5Lik5bin5LmL6Ze06Ze06ZqU5aSq5aSn77yM6ZyA6KaB6KGl56m655m95binXG4gICAgICAgIC8qKlxuICAgICAgICBsZXQgc2lsZW50RnJhbWVDb3VudCA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKVxuICAgICAgICBsZXQgZnJhbWVJZHggPSAwXG5cbiAgICAgICAgd2hpbGUgKGZyYW1lSWR4IDwgc2lsZW50RnJhbWVDb3VudCkge1xuICAgICAgICAgIGNvbnN0IHNpbGVudFNhbXBsZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IHNpbGVudEZyYW1lLFxuICAgICAgICAgICAgZGF0YXNpemU6IHNpbGVudEZyYW1lLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBkdHM6IGN1cnJlbnQuZHRzICsgKGZyYW1lSWR4ICsgMSkgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uLFxuICAgICAgICAgICAgZmlsdGVyZWQ6IDAsXG4gICAgICAgICAgICBpc1NpbGVudDogdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGF1ZGlvU2FtcGxlcy5zcGxpY2UoaSwgMCwgc2lsZW50U2FtcGxlKVxuXG4gICAgICAgICAgdGhpcy5maWxsZWRBdWRpb1NhbXBsZXMucHVzaCh7XG4gICAgICAgICAgICBkdHM6IHNpbGVudFNhbXBsZS5kdHMsXG4gICAgICAgICAgICBzaXplOiBzaWxlbnRTYW1wbGUuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGZyYW1lSWR4KytcbiAgICAgICAgICBpKysgLy8g5LiN5a+56Z2Z6Z+z5bin5YGa5q+U6L6DXG4gICAgICAgIH1cbiAgICAgIH0gKi9cbiAgICB9XG5cbiAgICB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcyA9IENvbXBhdGliaWxpdHkuc29ydEF1ZGlvU2FtcGxlcyhhdWRpb1NhbXBsZXMpXG4gIH1cblxuICBmaXhDaGFuZ2VTdHJlYW1WaWRlbyAoY2hhbmdlSWR4KSB7XG4gICAgY29uc3QgeyBzYW1wbGVzLCBtZXRhIH0gPSB0aGlzLnZpZGVvVHJhY2s7XG4gICAgY29uc3QgcHJldkR0cyA9IGNoYW5nZUlkeCA9PT0gMCA/IHRoaXMuZ2V0U3RyZWFtQ2hhbmdlU3RhcnQoc2FtcGxlc1swXSkgOiBzYW1wbGVzW2NoYW5nZUlkeCAtIDFdLmR0cztcbiAgICBjb25zdCBjdXJEdHMgPSBzYW1wbGVzW2NoYW5nZUlkeF0uZHRzO1xuICAgIGNvbnN0IGlzQ29udGludWUgPSBNYXRoLmFicyhwcmV2RHRzIC0gY3VyRHRzKSA8PSAyICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbjtcblxuICAgIGlmIChpc0NvbnRpbnVlKSB7XG4gICAgICBpZiAoIXNhbXBsZXNbY2hhbmdlSWR4XS5vcHRpb25zKSB7XG4gICAgICAgIHNhbXBsZXNbY2hhbmdlSWR4XS5vcHRpb25zID0ge1xuICAgICAgICAgIGlzQ29udGludWU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2FtcGxlc1tjaGFuZ2VJZHhdLm9wdGlvbnMuaXNDb250aW51ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kb0ZpeFZpZGVvKGZhbHNlKVxuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0UGFydFNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKDAsIGNoYW5nZUlkeCk7XG4gICAgY29uc3Qgc2Vjb25kUGFydFNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKGNoYW5nZUlkeCk7XG4gICAgY29uc3QgZmlyc3RTYW1wbGUgPSBzYW1wbGVzWzBdXG5cbiAgICBjb25zdCBjaGFuZ2VTYW1wbGUgPSBzZWNvbmRQYXJ0U2FtcGxlc1swXVxuICAgIGNvbnN0IGZpcnN0UGFydER1cmF0aW9uID0gY2hhbmdlU2FtcGxlLmR0cyAtIGZpcnN0U2FtcGxlLmR0c1xuICAgIGNvbnN0IHN0cmVhbUNoYW5nZVN0YXJ0ID0gZmlyc3RTYW1wbGUub3B0aW9ucyAmJiBmaXJzdFNhbXBsZS5vcHRpb25zLnN0YXJ0ICsgZmlyc3RQYXJ0RHVyYXRpb24gPyBmaXJzdFNhbXBsZS5vcHRpb25zLnN0YXJ0IDogbnVsbFxuXG4gICAgdGhpcy52aWRlb1RyYWNrLnNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKDAsIGNoYW5nZUlkeCk7XG5cbiAgICB0aGlzLmRvRml4VmlkZW8oZmFsc2UpO1xuXG4gICAgdGhpcy52aWRlb1RyYWNrLnNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKGNoYW5nZUlkeCk7XG5cbiAgICB0aGlzLmRvRml4VmlkZW8oZmFsc2UsIHN0cmVhbUNoYW5nZVN0YXJ0KTtcblxuICAgIHRoaXMudmlkZW9UcmFjay5zYW1wbGVzID0gZmlyc3RQYXJ0U2FtcGxlcy5jb25jYXQoc2Vjb25kUGFydFNhbXBsZXMpXG4gIH1cblxuICBmaXhDaGFuZ2VTdHJlYW1BdWRpbyAoY2hhbmdlSWR4KSB7XG4gICAgY29uc3QgeyBzYW1wbGVzLCBtZXRhIH0gPSB0aGlzLmF1ZGlvVHJhY2s7XG5cbiAgICBjb25zdCBwcmV2RHRzID0gY2hhbmdlSWR4ID09PSAwID8gdGhpcy5nZXRTdHJlYW1DaGFuZ2VTdGFydChzYW1wbGVzWzBdKSA6IHNhbXBsZXNbY2hhbmdlSWR4IC0gMV0uZHRzO1xuICAgIGNvbnN0IGN1ckR0cyA9IHNhbXBsZXNbY2hhbmdlSWR4XS5kdHM7XG4gICAgY29uc3QgaXNDb250aW51ZSA9IE1hdGguYWJzKHByZXZEdHMgLSBjdXJEdHMpIDw9IDIgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uO1xuXG4gICAgaWYgKGlzQ29udGludWUpIHtcbiAgICAgIGlmICghc2FtcGxlc1tjaGFuZ2VJZHhdLm9wdGlvbnMpIHtcbiAgICAgICAgc2FtcGxlc1tjaGFuZ2VJZHhdLm9wdGlvbnMgPSB7XG4gICAgICAgICAgaXNDb250aW51ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYW1wbGVzW2NoYW5nZUlkeF0ub3B0aW9ucy5pc0NvbnRpbnVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmRvRml4QXVkaW8oZmFsc2UpXG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RQYXJ0U2FtcGxlcyA9IHNhbXBsZXMuc2xpY2UoMCwgY2hhbmdlSWR4KTtcbiAgICBjb25zdCBzZWNvbmRQYXJ0U2FtcGxlcyA9IHNhbXBsZXMuc2xpY2UoY2hhbmdlSWR4KTtcbiAgICBjb25zdCBmaXJzdFNhbXBsZSA9IHNhbXBsZXNbMF1cblxuICAgIGNvbnN0IGNoYW5nZVNhbXBsZSA9IHNlY29uZFBhcnRTYW1wbGVzWzBdXG4gICAgY29uc3QgZmlyc3RQYXJ0RHVyYXRpb24gPSBjaGFuZ2VTYW1wbGUuZHRzIC0gZmlyc3RTYW1wbGUuZHRzXG4gICAgY29uc3Qgc3RyZWFtQ2hhbmdlU3RhcnQgPSBmaXJzdFNhbXBsZS5vcHRpb25zICYmIGZpcnN0U2FtcGxlLm9wdGlvbnMuc3RhcnQgKyBmaXJzdFBhcnREdXJhdGlvbiA/IGZpcnN0U2FtcGxlLm9wdGlvbnMuc3RhcnQgOiBudWxsXG5cbiAgICB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcyA9IGZpcnN0UGFydFNhbXBsZXM7XG5cbiAgICB0aGlzLmRvRml4QXVkaW8oZmFsc2UpO1xuXG4gICAgdGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMgPSBzZWNvbmRQYXJ0U2FtcGxlcztcblxuICAgIHRoaXMuZG9GaXhBdWRpbyhmYWxzZSwgc3RyZWFtQ2hhbmdlU3RhcnQpO1xuXG4gICAgdGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMgPSBmaXJzdFBhcnRTYW1wbGVzLmNvbmNhdChzZWNvbmRQYXJ0U2FtcGxlcylcbiAgfVxuXG4gIGdldEZpcnN0U2FtcGxlICgpIHtcbiAgICAvLyDojrflj5Z2aWRlb+WSjGF1ZGlv55qE6aaW5bin5pWw5o2uXG4gICAgbGV0IHtzYW1wbGVzOiB2aWRlb1NhbXBsZXN9ID0gdGhpcy52aWRlb1RyYWNrXG4gICAgbGV0IHtzYW1wbGVzOiBhdWRpb1NhbXBsZXN9ID0gdGhpcy5hdWRpb1RyYWNrXG5cbiAgICBsZXQgaXNGaXJzdFZpZGVvU2FtcGxlcyA9IGZhbHNlO1xuICAgIGxldCBpc0ZpcnN0QXVkaW9TYW1wbGVzID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUgJiYgdmlkZW9TYW1wbGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZmlyc3RWaWRlb1NhbXBsZSA9IENvbXBhdGliaWxpdHkuZmluZEZpcnN0VmlkZW9TYW1wbGUodmlkZW9TYW1wbGVzKVxuICAgICAgaXNGaXJzdFZpZGVvU2FtcGxlcyA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUgJiYgYXVkaW9TYW1wbGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZmlyc3RBdWRpb1NhbXBsZSA9IENvbXBhdGliaWxpdHkuZmluZEZpcnN0QXVkaW9TYW1wbGUoYXVkaW9TYW1wbGVzKSAvLyDlr7vmib5kdHPmnIDlsI/nmoTluKfkvZzkuLrpppbkuKrpn7PpopHluKdcbiAgICAgIGlzRmlyc3RBdWRpb1NhbXBsZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRmlyc3RWaWRlb1NhbXBsZXMsXG4gICAgICBpc0ZpcnN0QXVkaW9TYW1wbGVzXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWcqOayoeaciXJlZlNhbXBsZUR1cmF0aW9u55qE6Zeu6aKY5rWB5Lit77yMXG4gICAqL1xuICBmaXhSZWZTYW1wbGVEdXJhdGlvbiAobWV0YSwgc2FtcGxlcykge1xuICAgIGNvbnN0IGlzVmlkZW8gPSBtZXRhLnR5cGUgPT09ICd2aWRlbydcbiAgICBjb25zdCBhbGxTYW1wbGVzQ291bnQgPSBpc1ZpZGVvID8gdGhpcy5hbGxWaWRlb1NhbXBsZXNDb3VudCA6IHRoaXMuYWxsQXVkaW9TYW1wbGVzQ291bnRcbiAgICBjb25zdCBmaXJzdER0cyA9IGlzVmlkZW8gPyB0aGlzLl9maXJzdFZpZGVvU2FtcGxlLmR0cyA6IHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUuZHRzXG4gICAgY29uc3QgZmlsbGVkU2FtcGxlc0NvdW50ID0gaXNWaWRlbyA/IHRoaXMuZmlsbGVkVmlkZW9TYW1wbGVzLmxlbmd0aCA6IHRoaXMuZmlsbGVkQXVkaW9TYW1wbGVzLmxlbmd0aFxuXG4gICAgaWYgKCFtZXRhLnJlZlNhbXBsZUR1cmF0aW9uIHx8IG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPD0gMCB8fCBOdW1iZXIuaXNOYU4obWV0YS5yZWZTYW1wbGVEdXJhdGlvbikpIHtcbiAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGNvbnN0IGxhc3REdHMgPSBzYW1wbGVzW3NhbXBsZXMubGVuZ3RoIC0gMV0uZHRzXG5cbiAgICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoKGxhc3REdHMgLSBmaXJzdER0cykgLyAoKGFsbFNhbXBsZXNDb3VudCArIGZpbGxlZFNhbXBsZXNDb3VudCkgLSAxKSk7IC8vIOWwhnJlZlNhbXBsZUR1cmF0aW9u6YeN572u5Li66K6h566X5ZCO55qE5bmz5Z2H5YC8XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKSB7XG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPj0gNSkge1xuICAgICAgICBjb25zdCBsYXN0RHRzID0gc2FtcGxlc1tzYW1wbGVzLmxlbmd0aCAtIDFdLmR0c1xuICAgICAgICBjb25zdCBmaXJzdER0cyA9IHNhbXBsZXNbMF0uZHRzXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uQXZnID0gKGxhc3REdHMgLSBmaXJzdER0cykgLyAoc2FtcGxlcy5sZW5ndGggLSAxKVxuXG4gICAgICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGguYWJzKG1ldGEucmVmU2FtcGxlRHVyYXRpb24gLSBkdXJhdGlvbkF2ZykgPD0gNSA/IG1ldGEucmVmU2FtcGxlRHVyYXRpb24gOiBkdXJhdGlvbkF2Zyk7IC8vIOWwhnJlZlNhbXBsZUR1cmF0aW9u6YeN572u5Li66K6h566X5ZCO55qE5bmz5Z2H5YC8XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiusOW9leaIquatouebruWJjeS4gOWFseaSreaUvuS6huWkmuWwkeW4p1xuICAgKi9cbiAgcmVjb3JkU2FtcGxlc0NvdW50ICgpIHtcbiAgICBjb25zdCB7IGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2sgfSA9IHRoaXNcblxuICAgIHRoaXMuYWxsQXVkaW9TYW1wbGVzQ291bnQgKz0gYXVkaW9UcmFjay5zYW1wbGVzLmxlbmd0aFxuICAgIHRoaXMuYWxsVmlkZW9TYW1wbGVzQ291bnQgKz0gdmlkZW9UcmFjay5zYW1wbGVzLmxlbmd0aFxuICB9XG5cbiAgLyoqXG4gICAqIOWOu+mZpOS4jeWQiOazleeahOW4p++8iOWAkumAgOOAgemHjeWkjeW4p++8iVxuICAgKi9cbiAgcmVtb3ZlSW52YWxpZFNhbXBsZXMgKCkge1xuICAgIGNvbnN0IHsgX2ZpcnN0VmlkZW9TYW1wbGUsIF9maXJzdEF1ZGlvU2FtcGxlIH0gPSB0aGlzXG5cbiAgICB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcyA9IHRoaXMuYXVkaW9UcmFjay5zYW1wbGVzLmZpbHRlcigoc2FtcGxlKSA9PiB7XG4gICAgICByZXR1cm4gc2FtcGxlLmR0cyA+PSBfZmlyc3RBdWRpb1NhbXBsZS5kdHMgJiYgKHRoaXMubGFzdEF1ZGlvRHRzID09PSB1bmRlZmluZWQgfHwgc2FtcGxlLmR0cyA+IHRoaXMubGFzdEF1ZGlvRHRzKVxuICAgIH0pXG5cbiAgICB0aGlzLnZpZGVvVHJhY2suc2FtcGxlcyA9IHRoaXMudmlkZW9UcmFjay5zYW1wbGVzLmZpbHRlcigoc2FtcGxlKSA9PiB7XG4gICAgICByZXR1cm4gc2FtcGxlLmR0cyA+PSBfZmlyc3RWaWRlb1NhbXBsZS5kdHMgJiYgKHRoaXMubGFzdFZpZGVvRHRzID09PSB1bmRlZmluZWQgfHwgc2FtcGxlLmR0cyA+IHRoaXMubGFzdFZpZGVvRHRzKVxuICAgIH0pXG4gIH1cblxuICBnZXRTdHJlYW1DaGFuZ2VTdGFydCAoc2FtcGxlKSB7XG4gICAgaWYgKHNhbXBsZS5vcHRpb25zICYmIHNhbXBsZS5vcHRpb25zLnN0YXJ0KSB7XG4gICAgICByZXR1cm4gc2FtcGxlLm9wdGlvbnMuc3RhcnQgLSB0aGlzLmR0c0Jhc2U7XG4gICAgfVxuICAgIHJldHVybiBJbmZpbml0eVxuICB9XG5cbiAgc3RhdGljIHNvcnRBdWRpb1NhbXBsZXMgKHNhbXBsZXMpIHtcbiAgICBpZiAoc2FtcGxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBzYW1wbGVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbXBsZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZHRzIC0gYi5kdHNcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIOWvu+aJvmR0c+acgOWwj+eahHNhbXBsZVxuICAgKiBAcGFyYW0gc2FtcGxlc1xuICAgKi9cbiAgc3RhdGljIGZpbmRGaXJzdEF1ZGlvU2FtcGxlIChzYW1wbGVzKSB7XG4gICAgaWYgKCFzYW1wbGVzIHx8IHNhbXBsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBDb21wYXRpYmlsaXR5LnNvcnRBdWRpb1NhbXBsZXMoc2FtcGxlcylbMF1cbiAgfVxuXG4gIHN0YXRpYyBmaW5kRmlyc3RWaWRlb1NhbXBsZSAoc2FtcGxlcykge1xuICAgIGlmICghc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3Qgc29ydGVkID0gc2FtcGxlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5kdHMgLSBiLmR0cztcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNvcnRlZC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHNvcnRlZFtpXS5pc0tleWZyYW1lKSB7XG4gICAgICAgIHJldHVybiBzb3J0ZWRbaV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGV0ZWN0TGFyZ2VHYXAgKG5leHREdHMsIGZpcnN0U2FtcGxlKSB7XG4gICAgaWYgKG5leHREdHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VyRHRzID0gZmlyc3RTYW1wbGUuZHRzIHx8IDBcbiAgICBjb25zdCBjb25kMSA9IG5leHREdHMgLSBjdXJEdHMgPj0gMTAwMCB8fCBjdXJEdHMgLSBuZXh0RHRzID49IDEwMDAgLy8gZml4IGhsc+a1geWHuueOsOWkp+mHj+a1gWR0c+mXtOi3nemXrumimFxuICAgIGNvbnN0IGNvbmQyID0gZmlyc3RTYW1wbGUub3B0aW9ucyAmJiBmaXJzdFNhbXBsZS5vcHRpb25zLmRpc2NvbnRpbnVlXG5cbiAgICByZXR1cm4gY29uZDEgfHwgY29uZDJcbiAgfVxuXG4gIHN0YXRpYyBkb0ZpeExhcmdlR2FwIChzYW1wbGVzLCBnYXApIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2FtcGxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3Qgc2FtcGxlID0gc2FtcGxlc1tpXTtcbiAgICAgIHNhbXBsZS5kdHMgKz0gZ2FwXG4gICAgICBpZiAoc2FtcGxlLnB0cykge1xuICAgICAgICBzYW1wbGUucHRzICs9IGdhcFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDkuK3pgJTmjaLmtYFcbiAgICovXG4gIHN0YXRpYyBkZXRhY3RDaGFuZ2VTdHJlYW0gKHNhbXBsZXMpIHtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgIGxldCBjaGFuZ2VkSWR4ID0gLTE7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNhbXBsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChzYW1wbGVzW2ldLm9wdGlvbnMgJiYgc2FtcGxlc1tpXS5vcHRpb25zLm1ldGEpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWVcbiAgICAgICAgY2hhbmdlZElkeCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjaGFuZ2VkLFxuICAgICAgY2hhbmdlZElkeFxuICAgIH1cbiAgfVxuXG4gIGdldCB0cmFja3MgKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKVxuICB9XG5cbiAgZ2V0IGF1ZGlvVHJhY2sgKCkge1xuICAgIGlmICh0aGlzLnRyYWNrcykge1xuICAgICAgcmV0dXJuIHRoaXMudHJhY2tzLmF1ZGlvVHJhY2tcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGdldCB2aWRlb1RyYWNrICgpIHtcbiAgICBpZiAodGhpcy50cmFja3MpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNrcy52aWRlb1RyYWNrXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBnZXQgZHRzQmFzZSAoKSB7XG4gICAgY29uc3QgcmVtdXhlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ01QNF9SRU1VWEVSJyk7XG4gICAgaWYgKHJlbXV4ZXIpIHtcbiAgICAgIHJldHVybiByZW11eGVyLl9kdHNCYXNlXG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbXBhdGliaWxpdHk7XG4iLCJjbGFzcyBHb2xvbWIge1xuICBjb25zdHJ1Y3RvciAodWludDhhcnJheSkge1xuICAgIHRoaXMuVEFHID0gJ0dvbG9tYidcbiAgICB0aGlzLl9idWZmZXIgPSB1aW50OGFycmF5XG4gICAgdGhpcy5fYnVmZmVySW5kZXggPSAwXG4gICAgdGhpcy5fdG90YWxCeXRlcyA9IHVpbnQ4YXJyYXkuYnl0ZUxlbmd0aFxuICAgIHRoaXMuX3RvdGFsQml0cyA9IHVpbnQ4YXJyYXkuYnl0ZUxlbmd0aCAqIDhcbiAgICB0aGlzLl9jdXJyZW50V29yZCA9IDBcbiAgICB0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0ID0gMFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fYnVmZmVyID0gbnVsbFxuICB9XG5cbiAgX2ZpbGxDdXJyZW50V29yZCAoKSB7XG4gICAgbGV0IGJ1ZmZlckJ5dGVzTGVmdCA9IHRoaXMuX3RvdGFsQnl0ZXMgLSB0aGlzLl9idWZmZXJJbmRleFxuICAgIGlmIChidWZmZXJCeXRlc0xlZnQgPD0gMCkge1xuICAgICAgLy8gVE9ETyDlvILluLjlpITnkIZcbiAgICB9XG5cbiAgICBsZXQgYnl0ZXNSZWFkID0gTWF0aC5taW4oNCwgYnVmZmVyQnl0ZXNMZWZ0KVxuICAgIGxldCB3b3JkID0gbmV3IFVpbnQ4QXJyYXkoNClcbiAgICB3b3JkLnNldCh0aGlzLl9idWZmZXIuc3ViYXJyYXkodGhpcy5fYnVmZmVySW5kZXgsIHRoaXMuX2J1ZmZlckluZGV4ICsgYnl0ZXNSZWFkKSlcbiAgICB0aGlzLl9jdXJyZW50V29yZCA9IG5ldyBEYXRhVmlldyh3b3JkLmJ1ZmZlcikuZ2V0VWludDMyKDApXG5cbiAgICB0aGlzLl9idWZmZXJJbmRleCArPSBieXRlc1JlYWRcbiAgICB0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0ID0gYnl0ZXNSZWFkICogOFxuICB9XG5cbiAgcmVhZEJpdHMgKHNpemUpIHtcbiAgICBsZXQgYml0cyA9IE1hdGgubWluKHRoaXMuX2N1cnJlbnRXb3JkQml0c0xlZnQsIHNpemUpOy8vIDp1aW50XG4gICAgbGV0IHZhbHUgPSB0aGlzLl9jdXJyZW50V29yZCA+Pj4gKDMyIC0gYml0cyk7XG4gICAgaWYgKHNpemUgPiAzMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVhZCBtb3JlIHRoYW4gMzIgYml0cyBhdCBhIHRpbWUnKTtcbiAgICB9XG4gICAgdGhpcy5fY3VycmVudFdvcmRCaXRzTGVmdCAtPSBiaXRzO1xuICAgIGlmICh0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0ID4gMCkge1xuICAgICAgdGhpcy5fY3VycmVudFdvcmQgPDw9IGJpdHM7XG4gICAgfSBlbHNlIGlmICh0aGlzLl90b3RhbEJ5dGVzIC0gdGhpcy5fYnVmZmVySW5kZXggPiAwKSB7XG4gICAgICB0aGlzLl9maWxsQ3VycmVudFdvcmQoKTtcbiAgICB9XG5cbiAgICBiaXRzID0gc2l6ZSAtIGJpdHM7XG4gICAgaWYgKGJpdHMgPiAwICYmIHRoaXMuX2N1cnJlbnRXb3JkQml0c0xlZnQpIHtcbiAgICAgIHJldHVybiB2YWx1IDw8IGJpdHMgfCB0aGlzLnJlYWRCaXRzKGJpdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdTtcbiAgICB9XG4gIH1cblxuICByZWFkQm9vbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEJpdHMoMSkgPT09IDFcbiAgfVxuXG4gIHJlYWRCeXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFkQml0cyg4KVxuICB9XG5cbiAgX3NraXBMZWFkaW5nWmVybyAoKSB7XG4gICAgbGV0IHplcm9Db3VudFxuICAgIGZvciAoemVyb0NvdW50ID0gMDsgemVyb0NvdW50IDwgdGhpcy5fY3VycmVudFdvcmRCaXRzTGVmdDsgemVyb0NvdW50KyspIHtcbiAgICAgIGlmICgodGhpcy5fY3VycmVudFdvcmQgJiAoMHg4MDAwMDAwMCA+Pj4gemVyb0NvdW50KSkgIT09IDApIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFdvcmQgPDw9IHplcm9Db3VudFxuICAgICAgICB0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0IC09IHplcm9Db3VudFxuICAgICAgICByZXR1cm4gemVyb0NvdW50XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2ZpbGxDdXJyZW50V29yZCgpXG4gICAgcmV0dXJuIHplcm9Db3VudCArIHRoaXMuX3NraXBMZWFkaW5nWmVybygpXG4gIH1cblxuICByZWFkVUVHICgpIHsgLy8gdW5zaWduZWQgZXhwb25lbnRpYWwgZ29sb21iXG4gICAgbGV0IGxlYWRpbmdaZXJvcyA9IHRoaXMuX3NraXBMZWFkaW5nWmVybygpXG4gICAgcmV0dXJuIHRoaXMucmVhZEJpdHMobGVhZGluZ1plcm9zICsgMSkgLSAxXG4gIH1cblxuICByZWFkU0VHICgpIHsgLy8gc2lnbmVkIGV4cG9uZW50aWFsIGdvbG9tYlxuICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFVFRygpXG4gICAgaWYgKHZhbHVlICYgMHgwMSkge1xuICAgICAgcmV0dXJuICh2YWx1ZSArIDEpID4+PiAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMSAqICh2YWx1ZSA+Pj4gMSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR29sb21iXG4iLCJpbXBvcnQgU3BzUGFyc2VyIGZyb20gJy4vc3BzJztcbmNsYXNzIE5hbHVuaXQge1xuICBzdGF0aWMgZ2V0TmFsdW5pdHMgKGJ1ZmZlcikge1xuICAgIGlmIChidWZmZXIubGVuZ3RoIC0gYnVmZmVyLnBvc2l0aW9uIDwgNCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBidWYgPSBidWZmZXIuZGF0YXZpZXc7XG4gICAgbGV0IHBvc2l0aW9uID0gYnVmZmVyLnBvc2l0aW9uO1xuICAgIGlmIChidWYuZ2V0SW50MzIocG9zaXRpb24pID09PSAxIHx8XG4gICAgKGJ1Zi5nZXRJbnQxNihwb3NpdGlvbikgPT09IDAgJiYgYnVmLmdldEludDgocG9zaXRpb24gKyAyKSA9PT0gMSkpIHtcbiAgICAgIHJldHVybiBOYWx1bml0LmdldEFubmV4Yk5hbHMoYnVmZmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE5hbHVuaXQuZ2V0QXZjY05hbHMoYnVmZmVyKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0QW5uZXhiTmFscyAoYnVmZmVyKSB7XG4gICAgbGV0IG5hbHMgPSBbXTtcbiAgICBsZXQgcG9zaXRpb24gPSBOYWx1bml0LmdldEhlYWRlclBvc2l0aW9uQW5uZXhCKGJ1ZmZlcik7XG4gICAgbGV0IHN0YXJ0ID0gcG9zaXRpb24ucG9zO1xuICAgIGxldCBlbmQgPSBzdGFydDtcbiAgICB3aGlsZSAoc3RhcnQgPCBidWZmZXIubGVuZ3RoIC0gNCkge1xuICAgICAgbGV0IGhlYWRlciA9IGJ1ZmZlci5idWZmZXIuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgcG9zaXRpb24uaGVhZGVyTGVuZ3RoKTtcbiAgICAgIGlmIChwb3NpdGlvbi5wb3MgPT09IGJ1ZmZlci5wb3NpdGlvbikge1xuICAgICAgICBidWZmZXIuc2tpcChwb3NpdGlvbi5oZWFkZXJMZW5ndGgpO1xuICAgICAgfVxuICAgICAgcG9zaXRpb24gPSBOYWx1bml0LmdldEhlYWRlclBvc2l0aW9uQW5uZXhCKGJ1ZmZlcik7XG4gICAgICBlbmQgPSBwb3NpdGlvbi5wb3M7XG4gICAgICBsZXQgYm9keSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlci5idWZmZXIuc2xpY2Uoc3RhcnQgKyBoZWFkZXIuYnl0ZUxlbmd0aCwgZW5kKSk7XG4gICAgICBsZXQgdW5pdCA9IHtoZWFkZXIsIGJvZHl9O1xuICAgICAgTmFsdW5pdC5hbmFseXNlTmFsKHVuaXQpO1xuICAgICAgbmFscy5wdXNoKHVuaXQpO1xuICAgICAgYnVmZmVyLnNraXAoZW5kIC0gYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgIHN0YXJ0ID0gZW5kO1xuICAgIH1cbiAgICByZXR1cm4gbmFscztcbiAgfVxuXG4gIHN0YXRpYyBnZXRBdmNjTmFscyAoYnVmZmVyKSB7XG4gICAgbGV0IG5hbHMgPSBbXTtcbiAgICB3aGlsZSAoYnVmZmVyLnBvc2l0aW9uIDwgYnVmZmVyLmxlbmd0aCAtIDQpIHtcbiAgICAgIGxldCBsZW5ndGggPSBidWZmZXIuZGF0YXZpZXcuZ2V0SW50MzIoYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgIGlmIChidWZmZXIubGVuZ3RoIC0gYnVmZmVyLnBvc2l0aW9uID49IGxlbmd0aCkge1xuICAgICAgICBsZXQgaGVhZGVyID0gYnVmZmVyLmJ1ZmZlci5zbGljZShidWZmZXIucG9zaXRpb24sIGJ1ZmZlci5wb3NpdGlvbiArIDQpO1xuICAgICAgICBidWZmZXIuc2tpcCg0KVxuICAgICAgICBsZXQgYm9keSA9IGJ1ZmZlci5idWZmZXIuc2xpY2UoYnVmZmVyLnBvc2l0aW9uLCBidWZmZXIucG9zaXRpb24gKyBsZW5ndGgpO1xuICAgICAgICBidWZmZXIuc2tpcChsZW5ndGgpO1xuICAgICAgICBsZXQgdW5pdCA9IHtoZWFkZXIsIGJvZHl9O1xuICAgICAgICBOYWx1bml0LmFuYWx5c2VOYWwodW5pdCk7XG4gICAgICAgIG5hbHMucHVzaCh1bml0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmFscztcbiAgfVxuXG4gIHN0YXRpYyBhbmFseXNlTmFsICh1bml0KSB7XG4gICAgbGV0IHR5cGUgPSB1bml0LmJvZHlbMF0gJiAweDFmO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICAvLyBORFJcbiAgICAgICAgdW5pdC5uZHIgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgLy8gSURSXG4gICAgICAgIHVuaXQuaWRyID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIC8vIFNFSVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgLy8gU1BTXG4gICAgICAgIHVuaXQuc3BzID0gU3BzUGFyc2VyLnBhcnNlU1BTKHVuaXQuYm9keSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA4OlxuICAgICAgICAvLyBQUFNcbiAgICAgICAgdW5pdC5wcHMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgLy8gQVVEXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEhlYWRlclBvc2l0aW9uQW5uZXhCIChidWZmZXIpIHtcbiAgICAvLyBzZXBlcmF0ZVxuICAgIGxldCBwb3MgPSBidWZmZXIucG9zaXRpb247XG4gICAgbGV0IGhlYWRlckxlbmd0aCA9IDA7XG4gICAgd2hpbGUgKGhlYWRlckxlbmd0aCAhPT0gMyAmJiBoZWFkZXJMZW5ndGggIT09IDQgJiYgcG9zIDwgYnVmZmVyLmxlbmd0aCAtIDQpIHtcbiAgICAgIGlmIChidWZmZXIuZGF0YXZpZXcuZ2V0SW50MTYocG9zKSA9PT0gMCkge1xuICAgICAgICBpZiAoYnVmZmVyLmRhdGF2aWV3LmdldEludDE2KHBvcyArIDIpID09PSAxKSB7XG4gICAgICAgICAgLy8gMHgwMDAwMDFcbiAgICAgICAgICBoZWFkZXJMZW5ndGggPSA0O1xuICAgICAgICB9IGVsc2UgaWYgKGJ1ZmZlci5kYXRhdmlldy5nZXRJbnQ4KHBvcyArIDIpID09PSAxKSB7XG4gICAgICAgICAgaGVhZGVyTGVuZ3RoID0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb3MrKztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvcyA9PT0gYnVmZmVyLmxlbmd0aCAtIDQpIHtcbiAgICAgIGlmIChidWZmZXIuZGF0YXZpZXcuZ2V0SW50MTYocG9zKSA9PT0gMCkge1xuICAgICAgICBpZiAoYnVmZmVyLmRhdGF2aWV3LmdldEludDE2KHBvcyArIDIpID09PSAxKSB7XG4gICAgICAgICAgLy8gMHgwMDAwMDFcbiAgICAgICAgICBoZWFkZXJMZW5ndGggPSA0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MrKztcbiAgICAgICAgaWYgKGJ1ZmZlci5kYXRhdmlldy5nZXRJbnQxNihwb3MpID09PSAwICYmIGJ1ZmZlci5kYXRhdmlldy5nZXRJbnQ4KHBvcykgPT09IDEpIHtcbiAgICAgICAgICAvLyAweDAwMDAwMDFcbiAgICAgICAgICBoZWFkZXJMZW5ndGggPSAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvcyA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtwb3MsIGhlYWRlckxlbmd0aH07XG4gIH1cblxuICBzdGF0aWMgZ2V0QXZjYyAoc3BzLCBwcHMpIHtcbiAgICBsZXQgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoc3BzLmJ5dGVMZW5ndGggKyBwcHMuYnl0ZUxlbmd0aCArIDExKTtcbiAgICByZXRbMF0gPSAweDAxO1xuICAgIHJldFsxXSA9IHNwc1sxXTtcbiAgICByZXRbMl0gPSBzcHNbMl07XG4gICAgcmV0WzNdID0gc3BzWzNdO1xuICAgIHJldFs0XSA9IDI1NTtcbiAgICByZXRbNV0gPSAyMjU7XG5cbiAgICBsZXQgb2Zmc2V0ID0gNjtcblxuICAgIHJldC5zZXQobmV3IFVpbnQ4QXJyYXkoWyhzcHMuYnl0ZUxlbmd0aCA+Pj4gOCkgJiAweGZmLCBzcHMuYnl0ZUxlbmd0aCAmIDB4ZmZdKSwgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gMjtcbiAgICByZXQuc2V0KHNwcywgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gc3BzLmJ5dGVMZW5ndGg7XG5cbiAgICByZXRbb2Zmc2V0XSA9IDE7XG4gICAgb2Zmc2V0Kys7XG5cbiAgICByZXQuc2V0KG5ldyBVaW50OEFycmF5KFsocHBzLmJ5dGVMZW5ndGggPj4+IDgpICYgMHhmZiwgcHBzLmJ5dGVMZW5ndGggJiAweGZmXSksIG9mZnNldCk7XG4gICAgb2Zmc2V0ICs9IDI7XG4gICAgcmV0LnNldChwcHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYWx1bml0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICAqL1xuLyogZXNsaW50LWRpc2FibGUgb25lLXZhciAgKi9cbmltcG9ydCBHb2xvbWIgZnJvbSAnLi9nb2xvbWInXG5cbmNsYXNzIFNQU1BhcnNlciB7XG4gIHN0YXRpYyBfZWJzcDJyYnNwICh1aW50OGFycmF5KSB7XG4gICAgbGV0IHNyYyA9IHVpbnQ4YXJyYXlcbiAgICBsZXQgc3JjTGVuZ3RoID0gc3JjLmJ5dGVMZW5ndGhcbiAgICBsZXQgZHN0ID0gbmV3IFVpbnQ4QXJyYXkoc3JjTGVuZ3RoKVxuICAgIGxldCBkc3RJZHggPSAwXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY0xlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA+PSAyKSB7XG4gICAgICAgIGlmIChzcmNbaV0gPT09IDB4MDMgJiYgc3JjW2kgLSAxXSA9PT0gMHgwMCAmJiBzcmNbaSAtIDJdID09PSAweDAwKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZHN0W2RzdElkeF0gPSBzcmNbaV1cbiAgICAgIGRzdElkeCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRzdC5idWZmZXIsIDAsIGRzdElkeClcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZVNQUyAodWludDhhcnJheSkge1xuICAgIGxldCByYnNwID0gU1BTUGFyc2VyLl9lYnNwMnJic3AodWludDhhcnJheSlcbiAgICBsZXQgZ2IgPSBuZXcgR29sb21iKHJic3ApXG5cbiAgICBnYi5yZWFkQnl0ZSgpXG4gICAgbGV0IHByb2ZpbGVJZGMgPSBnYi5yZWFkQnl0ZSgpXG4gICAgZ2IucmVhZEJ5dGUoKVxuICAgIGxldCBsZXZlbElkYyA9IGdiLnJlYWRCeXRlKClcbiAgICBnYi5yZWFkVUVHKClcblxuICAgIGxldCBwcm9maWxlX3N0cmluZyA9IFNQU1BhcnNlci5nZXRQcm9maWxlU3RyaW5nKHByb2ZpbGVJZGMpXG4gICAgbGV0IGxldmVsX3N0cmluZyA9IFNQU1BhcnNlci5nZXRMZXZlbFN0cmluZyhsZXZlbElkYylcbiAgICBsZXQgY2hyb21hX2Zvcm1hdF9pZGMgPSAxXG4gICAgbGV0IGNocm9tYV9mb3JtYXQgPSA0MjBcbiAgICBsZXQgY2hyb21hX2Zvcm1hdF90YWJsZSA9IFswLCA0MjAsIDQyMiwgNDQ0XVxuICAgIGxldCBiaXRfZGVwdGggPSA4XG5cbiAgICBpZiAocHJvZmlsZUlkYyA9PT0gMTAwIHx8IHByb2ZpbGVJZGMgPT09IDExMCB8fCBwcm9maWxlSWRjID09PSAxMjIgfHxcbiAgICAgIHByb2ZpbGVJZGMgPT09IDI0NCB8fCBwcm9maWxlSWRjID09PSA0NCB8fCBwcm9maWxlSWRjID09PSA4MyB8fFxuICAgICAgcHJvZmlsZUlkYyA9PT0gODYgfHwgcHJvZmlsZUlkYyA9PT0gMTE4IHx8IHByb2ZpbGVJZGMgPT09IDEyOCB8fFxuICAgICAgcHJvZmlsZUlkYyA9PT0gMTM4IHx8IHByb2ZpbGVJZGMgPT09IDE0NCkge1xuICAgICAgY2hyb21hX2Zvcm1hdF9pZGMgPSBnYi5yZWFkVUVHKClcbiAgICAgIGlmIChjaHJvbWFfZm9ybWF0X2lkYyA9PT0gMykge1xuICAgICAgICBnYi5yZWFkQml0cygxKVxuICAgICAgfVxuICAgICAgaWYgKGNocm9tYV9mb3JtYXRfaWRjIDw9IDMpIHtcbiAgICAgICAgY2hyb21hX2Zvcm1hdCA9IGNocm9tYV9mb3JtYXRfdGFibGVbY2hyb21hX2Zvcm1hdF9pZGNdXG4gICAgICB9XG5cbiAgICAgIGJpdF9kZXB0aCA9IGdiLnJlYWRVRUcoKSArIDhcbiAgICAgIGdiLnJlYWRVRUcoKVxuICAgICAgZ2IucmVhZEJpdHMoMSlcbiAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7XG4gICAgICAgIGxldCBzY2FsaW5nX2xpc3RfY291bnQgPSAoY2hyb21hX2Zvcm1hdF9pZGMgIT09IDMpID8gOCA6IDEyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NhbGluZ19saXN0X2NvdW50OyBpKyspIHtcbiAgICAgICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICAgICAgaWYgKGkgPCA2KSB7XG4gICAgICAgICAgICAgIFNQU1BhcnNlci5fc2tpcFNjYWxpbmdMaXN0KGdiLCAxNilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIFNQU1BhcnNlci5fc2tpcFNjYWxpbmdMaXN0KGdiLCA2NClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ2IucmVhZFVFRygpXG4gICAgbGV0IHBpY19vcmRlcl9jbnRfdHlwZSA9IGdiLnJlYWRVRUcoKVxuICAgIGlmIChwaWNfb3JkZXJfY250X3R5cGUgPT09IDApIHtcbiAgICAgIGdiLnJlYWRVRUcoKVxuICAgIH0gZWxzZSBpZiAocGljX29yZGVyX2NudF90eXBlID09PSAxKSB7XG4gICAgICBnYi5yZWFkQml0cygxKVxuICAgICAgZ2IucmVhZFNFRygpXG4gICAgICBnYi5yZWFkU0VHKClcbiAgICAgIGxldCBudW1fcmVmX2ZyYW1lc19pbl9waWNfb3JkZXJfY250X2N5Y2xlID0gZ2IucmVhZFVFRygpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9yZWZfZnJhbWVzX2luX3BpY19vcmRlcl9jbnRfY3ljbGU7IGkrKykge1xuICAgICAgICBnYi5yZWFkU0VHKClcbiAgICAgIH1cbiAgICB9XG4gICAgZ2IucmVhZFVFRygpXG4gICAgZ2IucmVhZEJpdHMoMSlcblxuICAgIGxldCBwaWNfd2lkdGhfaW5fbWJzX21pbnVzMSA9IGdiLnJlYWRVRUcoKVxuICAgIGxldCBwaWNfaGVpZ2h0X2luX21hcF91bml0c19taW51czEgPSBnYi5yZWFkVUVHKClcblxuICAgIGxldCBmcmFtZV9tYnNfb25seV9mbGFnID0gZ2IucmVhZEJpdHMoMSlcbiAgICBpZiAoZnJhbWVfbWJzX29ubHlfZmxhZyA9PT0gMCkge1xuICAgICAgZ2IucmVhZEJpdHMoMSlcbiAgICB9XG4gICAgZ2IucmVhZEJpdHMoMSlcblxuICAgIGxldCBmcmFtZV9jcm9wX2xlZnRfb2Zmc2V0ID0gMFxuICAgIGxldCBmcmFtZV9jcm9wX3JpZ2h0X29mZnNldCA9IDBcbiAgICBsZXQgZnJhbWVfY3JvcF90b3Bfb2Zmc2V0ID0gMFxuICAgIGxldCBmcmFtZV9jcm9wX2JvdHRvbV9vZmZzZXQgPSAwXG5cbiAgICBsZXQgZnJhbWVfY3JvcHBpbmdfZmxhZyA9IGdiLnJlYWRCb29sKClcbiAgICBpZiAoZnJhbWVfY3JvcHBpbmdfZmxhZykge1xuICAgICAgZnJhbWVfY3JvcF9sZWZ0X29mZnNldCA9IGdiLnJlYWRVRUcoKVxuICAgICAgZnJhbWVfY3JvcF9yaWdodF9vZmZzZXQgPSBnYi5yZWFkVUVHKClcbiAgICAgIGZyYW1lX2Nyb3BfdG9wX29mZnNldCA9IGdiLnJlYWRVRUcoKVxuICAgICAgZnJhbWVfY3JvcF9ib3R0b21fb2Zmc2V0ID0gZ2IucmVhZFVFRygpXG4gICAgfVxuXG4gICAgbGV0IHBhcl93aWR0aCA9IDEsIHBhcl9oZWlnaHQgPSAxXG4gICAgbGV0IGZwcyA9IDAsIGZwc19maXhlZCA9IHRydWUsIGZwc19udW0gPSAwLCBmcHNfZGVuID0gMFxuXG4gICAgbGV0IHZ1aV9wYXJhbWV0ZXJzX3ByZXNlbnRfZmxhZyA9IGdiLnJlYWRCb29sKClcbiAgICBpZiAodnVpX3BhcmFtZXRlcnNfcHJlc2VudF9mbGFnKSB7XG4gICAgICBpZiAoZ2IucmVhZEJvb2woKSkgeyAvLyBhc3BlY3RfcmF0aW9faW5mb19wcmVzZW50X2ZsYWdcbiAgICAgICAgbGV0IGFzcGVjdF9yYXRpb19pZGMgPSBnYi5yZWFkQnl0ZSgpXG4gICAgICAgIGxldCBwYXJfd190YWJsZSA9IFsxLCAxMiwgMTAsIDE2LCA0MCwgMjQsIDIwLCAzMiwgODAsIDE4LCAxNSwgNjQsIDE2MCwgNCwgMywgMl1cbiAgICAgICAgbGV0IHBhcl9oX3RhYmxlID0gWzEsIDExLCAxMSwgMTEsIDMzLCAxMSwgMTEsIDExLCAzMywgMTEsIDExLCAzMywgOTksIDMsIDIsIDFdXG5cbiAgICAgICAgaWYgKGFzcGVjdF9yYXRpb19pZGMgPiAwICYmIGFzcGVjdF9yYXRpb19pZGMgPCAxNikge1xuICAgICAgICAgIHBhcl93aWR0aCA9IHBhcl93X3RhYmxlW2FzcGVjdF9yYXRpb19pZGMgLSAxXVxuICAgICAgICAgIHBhcl9oZWlnaHQgPSBwYXJfaF90YWJsZVthc3BlY3RfcmF0aW9faWRjIC0gMV1cbiAgICAgICAgfSBlbHNlIGlmIChhc3BlY3RfcmF0aW9faWRjID09PSAyNTUpIHtcbiAgICAgICAgICBwYXJfd2lkdGggPSBnYi5yZWFkQnl0ZSgpIDw8IDggfCBnYi5yZWFkQnl0ZSgpXG4gICAgICAgICAgcGFyX2hlaWdodCA9IGdiLnJlYWRCeXRlKCkgPDwgOCB8IGdiLnJlYWRCeXRlKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICBnYi5yZWFkQm9vbCgpXG4gICAgICB9XG4gICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICBnYi5yZWFkQml0cyg0KVxuICAgICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICAgIGdiLnJlYWRCaXRzKDI0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICBnYi5yZWFkVUVHKClcbiAgICAgICAgZ2IucmVhZFVFRygpXG4gICAgICB9XG4gICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICBsZXQgbnVtX3VuaXRzX2luX3RpY2sgPSBnYi5yZWFkQml0cygzMilcbiAgICAgICAgbGV0IHRpbWVfc2NhbGUgPSBnYi5yZWFkQml0cygzMilcbiAgICAgICAgZnBzX2ZpeGVkID0gZ2IucmVhZEJvb2woKVxuXG4gICAgICAgIGZwc19udW0gPSB0aW1lX3NjYWxlXG4gICAgICAgIGZwc19kZW4gPSBudW1fdW5pdHNfaW5fdGljayAqIDJcbiAgICAgICAgZnBzID0gZnBzX251bSAvIGZwc19kZW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGFyU2NhbGUgPSAxXG4gICAgaWYgKHBhcl93aWR0aCAhPT0gMSB8fCBwYXJfaGVpZ2h0ICE9PSAxKSB7XG4gICAgICBwYXJTY2FsZSA9IHBhcl93aWR0aCAvIHBhcl9oZWlnaHRcbiAgICB9XG5cbiAgICBsZXQgY3JvcF91bml0X3ggPSAwLCBjcm9wX3VuaXRfeSA9IDBcbiAgICBpZiAoY2hyb21hX2Zvcm1hdF9pZGMgPT09IDApIHtcbiAgICAgIGNyb3BfdW5pdF94ID0gMVxuICAgICAgY3JvcF91bml0X3kgPSAyIC0gZnJhbWVfbWJzX29ubHlfZmxhZ1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3ViX3djID0gKGNocm9tYV9mb3JtYXRfaWRjID09PSAzKSA/IDEgOiAyXG4gICAgICBsZXQgc3ViX2hjID0gKGNocm9tYV9mb3JtYXRfaWRjID09PSAxKSA/IDIgOiAxXG4gICAgICBjcm9wX3VuaXRfeCA9IHN1Yl93Y1xuICAgICAgY3JvcF91bml0X3kgPSBzdWJfaGMgKiAoMiAtIGZyYW1lX21ic19vbmx5X2ZsYWcpXG4gICAgfVxuXG4gICAgbGV0IGNvZGVjX3dpZHRoID0gKHBpY193aWR0aF9pbl9tYnNfbWludXMxICsgMSkgKiAxNlxuICAgIGxldCBjb2RlY19oZWlnaHQgPSAoMiAtIGZyYW1lX21ic19vbmx5X2ZsYWcpICogKChwaWNfaGVpZ2h0X2luX21hcF91bml0c19taW51czEgKyAxKSAqIDE2KVxuXG4gICAgY29kZWNfd2lkdGggLT0gKGZyYW1lX2Nyb3BfbGVmdF9vZmZzZXQgKyBmcmFtZV9jcm9wX3JpZ2h0X29mZnNldCkgKiBjcm9wX3VuaXRfeFxuICAgIGNvZGVjX2hlaWdodCAtPSAoZnJhbWVfY3JvcF90b3Bfb2Zmc2V0ICsgZnJhbWVfY3JvcF9ib3R0b21fb2Zmc2V0KSAqIGNyb3BfdW5pdF95XG5cbiAgICBsZXQgcHJlc2VudF93aWR0aCA9IE1hdGguY2VpbChjb2RlY193aWR0aCAqIHBhclNjYWxlKVxuXG4gICAgZ2IuZGVzdHJveSgpXG4gICAgZ2IgPSBudWxsXG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvZmlsZV9zdHJpbmc6IHByb2ZpbGVfc3RyaW5nLFxuICAgICAgbGV2ZWxfc3RyaW5nOiBsZXZlbF9zdHJpbmcsXG4gICAgICBiaXRfZGVwdGg6IGJpdF9kZXB0aCxcbiAgICAgIGNocm9tYV9mb3JtYXQ6IGNocm9tYV9mb3JtYXQsXG4gICAgICBjaHJvbWFfZm9ybWF0X3N0cmluZzogU1BTUGFyc2VyLmdldENocm9tYUZvcm1hdFN0cmluZyhjaHJvbWFfZm9ybWF0KSxcblxuICAgICAgZnJhbWVfcmF0ZToge1xuICAgICAgICBmaXhlZDogZnBzX2ZpeGVkLFxuICAgICAgICBmcHM6IGZwcyxcbiAgICAgICAgZnBzX2RlbjogZnBzX2RlbixcbiAgICAgICAgZnBzX251bTogZnBzX251bVxuICAgICAgfSxcblxuICAgICAgcGFyX3JhdGlvOiB7XG4gICAgICAgIHdpZHRoOiBwYXJfd2lkdGgsXG4gICAgICAgIGhlaWdodDogcGFyX2hlaWdodFxuICAgICAgfSxcblxuICAgICAgY29kZWNfc2l6ZToge1xuICAgICAgICB3aWR0aDogY29kZWNfd2lkdGgsXG4gICAgICAgIGhlaWdodDogY29kZWNfaGVpZ2h0XG4gICAgICB9LFxuXG4gICAgICBwcmVzZW50X3NpemU6IHtcbiAgICAgICAgd2lkdGg6IHByZXNlbnRfd2lkdGgsXG4gICAgICAgIGhlaWdodDogY29kZWNfaGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9za2lwU2NhbGluZ0xpc3QgKGdiLCBjb3VudCkge1xuICAgIGxldCBsYXN0X3NjYWxlID0gOCwgbmV4dF9zY2FsZSA9IDhcbiAgICBsZXQgZGVsdGFfc2NhbGUgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBpZiAobmV4dF9zY2FsZSAhPT0gMCkge1xuICAgICAgICBkZWx0YV9zY2FsZSA9IGdiLnJlYWRTRUcoKVxuICAgICAgICBuZXh0X3NjYWxlID0gKGxhc3Rfc2NhbGUgKyBkZWx0YV9zY2FsZSArIDI1NikgJSAyNTZcbiAgICAgIH1cbiAgICAgIGxhc3Rfc2NhbGUgPSAobmV4dF9zY2FsZSA9PT0gMCkgPyBsYXN0X3NjYWxlIDogbmV4dF9zY2FsZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRQcm9maWxlU3RyaW5nIChwcm9maWxlSWRjKSB7XG4gICAgc3dpdGNoIChwcm9maWxlSWRjKSB7XG4gICAgICBjYXNlIDY2OlxuICAgICAgICByZXR1cm4gJ0Jhc2VsaW5lJ1xuICAgICAgY2FzZSA3NzpcbiAgICAgICAgcmV0dXJuICdNYWluJ1xuICAgICAgY2FzZSA4ODpcbiAgICAgICAgcmV0dXJuICdFeHRlbmRlZCdcbiAgICAgIGNhc2UgMTAwOlxuICAgICAgICByZXR1cm4gJ0hpZ2gnXG4gICAgICBjYXNlIDExMDpcbiAgICAgICAgcmV0dXJuICdIaWdoMTAnXG4gICAgICBjYXNlIDEyMjpcbiAgICAgICAgcmV0dXJuICdIaWdoNDIyJ1xuICAgICAgY2FzZSAyNDQ6XG4gICAgICAgIHJldHVybiAnSGlnaDQ0NCdcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnVW5rbm93bidcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0TGV2ZWxTdHJpbmcgKGxldmVsSWRjKSB7XG4gICAgcmV0dXJuIChsZXZlbElkYyAvIDEwKS50b0ZpeGVkKDEpXG4gIH1cblxuICBzdGF0aWMgZ2V0Q2hyb21hRm9ybWF0U3RyaW5nIChjaHJvbWEpIHtcbiAgICBzd2l0Y2ggKGNocm9tYSkge1xuICAgICAgY2FzZSA0MjA6XG4gICAgICAgIHJldHVybiAnNDoyOjAnXG4gICAgICBjYXNlIDQyMjpcbiAgICAgICAgcmV0dXJuICc0OjI6MidcbiAgICAgIGNhc2UgNDQ0OlxuICAgICAgICByZXR1cm4gJzQ6NDo0J1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdVbmtub3duJ1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0b1ZpZGVvTWV0YSAoc3BzQ29uZmlnKSB7XG4gICAgbGV0IG1ldGEgPSB7fVxuICAgIGlmIChzcHNDb25maWcgJiYgc3BzQ29uZmlnLmNvZGVjX3NpemUpIHtcbiAgICAgIG1ldGEuY29kZWNXaWR0aCA9IHNwc0NvbmZpZy5jb2RlY19zaXplLndpZHRoXG4gICAgICBtZXRhLmNvZGVjSGVpZ2h0ID0gc3BzQ29uZmlnLmNvZGVjX3NpemUuaGVpZ2h0XG4gICAgICBtZXRhLnByZXNlbnRXaWR0aCA9IHNwc0NvbmZpZy5wcmVzZW50X3NpemUud2lkdGhcbiAgICAgIG1ldGEucHJlc2VudEhlaWdodCA9IHNwc0NvbmZpZy5wcmVzZW50X3NpemUuaGVpZ2h0XG4gICAgfVxuXG4gICAgbWV0YS5wcm9maWxlID0gc3BzQ29uZmlnLnByb2ZpbGVfc3RyaW5nXG4gICAgbWV0YS5sZXZlbCA9IHNwc0NvbmZpZy5sZXZlbF9zdHJpbmdcbiAgICBtZXRhLmJpdERlcHRoID0gc3BzQ29uZmlnLmJpdF9kZXB0aFxuICAgIG1ldGEuY2hyb21hRm9ybWF0ID0gc3BzQ29uZmlnLmNocm9tYV9mb3JtYXRcblxuICAgIG1ldGEucGFyUmF0aW8gPSB7XG4gICAgICB3aWR0aDogc3BzQ29uZmlnLnBhcl9yYXRpby53aWR0aCxcbiAgICAgIGhlaWdodDogc3BzQ29uZmlnLnBhcl9yYXRpby5oZWlnaHRcbiAgICB9XG5cbiAgICBtZXRhLmZyYW1lUmF0ZSA9IHNwc0NvbmZpZy5mcmFtZV9yYXRlXG5cbiAgICBsZXQgZnBzRGVuID0gbWV0YS5mcmFtZVJhdGUuZnBzX2RlblxuICAgIGxldCBmcHNOdW0gPSBtZXRhLmZyYW1lUmF0ZS5mcHNfbnVtXG4gICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IobWV0YS50aW1lc2NhbGUgKiAoZnBzRGVuIC8gZnBzTnVtKSlcbiAgICByZXR1cm4gbWV0YTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTUFNQYXJzZXJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBITFNcbiAgTTNVOFBhcnNlcjogcmVxdWlyZSgnLi9zcmMvaGxzL2RlbXV4ZXIvbTN1OHBhcnNlcicpLmRlZmF1bHQsXG4gIFRzRGVtdXhlcjogcmVxdWlyZSgnLi9zcmMvaGxzL2RlbXV4ZXIvdHMnKS5kZWZhdWx0LFxuICBQbGF5bGlzdDogcmVxdWlyZSgnLi9zcmMvaGxzL3BsYXlsaXN0JykuZGVmYXVsdCxcbiAgRmx2RGVtdXhlcjogcmVxdWlyZSgnLi9zcmMvZmx2L2luZGV4JykuZGVmYXVsdFxufTtcbiIsImltcG9ydCB7IGlzTGUsIFVURjggfSBmcm9tICd4Z3BsYXllci11dGlscydcblxuY29uc3QgREFUQV9UWVBFUyA9IHtcbiAgTlVNQkVSOiAwLFxuICBCT09MRUFOOiAxLFxuICBTVFJJTkc6IDIsXG4gIE9CSkVDVDogMyxcbiAgTUlYX0FSUkFZOiA4LFxuICBPQkpFQ1RfRU5EOiA5LFxuICBTVFJJQ1RfQVJSQVk6IDEwLFxuICBEQVRFOiAxMSxcbiAgTE9ORV9TVFJJTkc6IDEyXG59XG5cbi8qKlxuICogbWV0YeS/oeaBr+ino+aekFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBTUZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gdGhpcy5vZmZzZXRcbiAgfVxuXG4gIHJlc29sdmUgKG1ldGEsIHNpemUpIHtcbiAgICBpZiAoc2l6ZSA8IDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGVub3VnaCBkYXRhIGZvciBtZXRhaW5mbycpXG4gICAgfVxuICAgIGNvbnN0IG1ldGFEYXRhID0ge31cbiAgICBjb25zdCBuYW1lID0gdGhpcy5wYXJzZVZhbHVlKG1ldGEpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUobWV0YSwgc2l6ZSAtIG5hbWUuYm9keVNpemUpXG4gICAgbWV0YURhdGFbbmFtZS5kYXRhXSA9IHZhbHVlLmRhdGFcblxuICAgIHRoaXMucmVzZXRTdGF0dXMoKVxuICAgIHJldHVybiBtZXRhRGF0YVxuICB9XG5cbiAgcmVzZXRTdGF0dXMgKCkge1xuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMucmVhZE9mZnNldCA9IHRoaXMub2Zmc2V0XG4gIH1cblxuICBwYXJzZVN0cmluZyAoYnVmZmVyKSB7XG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQpXG4gICAgY29uc3Qgc3RyTGVuID0gZHYuZ2V0VWludDE2KDAsICFpc0xlKVxuICAgIGxldCBzdHIgPSAnJ1xuICAgIGlmIChzdHJMZW4gPiAwKSB7XG4gICAgICBzdHIgPSBVVEY4LmRlY29kZShuZXcgVWludDhBcnJheShidWZmZXIsIHRoaXMucmVhZE9mZnNldCArIDIsIHN0ckxlbikpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9ICcnXG4gICAgfVxuICAgIGxldCBzaXplID0gc3RyTGVuICsgMlxuICAgIHRoaXMucmVhZE9mZnNldCArPSBzaXplXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHN0cixcbiAgICAgIGJvZHlTaXplOiBzdHJMZW4gKyAyXG4gICAgfVxuICB9XG5cbiAgcGFyc2VEYXRlIChidWZmZXIsIHNpemUpIHtcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCwgc2l6ZSlcbiAgICBsZXQgdHMgPSBkdi5nZXRGbG9hdDY0KDAsICFpc0xlKVxuICAgIGNvbnN0IHRpbWVPZmZzZXQgPSBkdi5nZXRJbnQxNig4LCAhaXNMZSlcbiAgICB0cyArPSB0aW1lT2Zmc2V0ICogNjAgKiAxMDAwXG5cbiAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMTBcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogbmV3IERhdGUodHMpLFxuICAgICAgYm9keVNpemU6IDEwXG4gICAgfVxuICB9XG5cbiAgcGFyc2VPYmplY3QgKGJ1ZmZlciwgc2l6ZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgc2l6ZSlcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIHNpemUgLSBuYW1lLmJvZHlTaXplKVxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IG5hbWUuZGF0YSxcbiAgICAgICAgdmFsdWU6IHZhbHVlLmRhdGFcbiAgICAgIH0sXG4gICAgICBib2R5U2l6ZTogbmFtZS5ib2R5U2l6ZSArIHZhbHVlLmJvZHlTaXplLFxuICAgICAgaXNPYmpFbmQ6IHZhbHVlLmlzT2JqRW5kXG4gICAgfVxuICB9XG5cbiAgcGFyc2VMb25nU3RyaW5nIChidWZmZXIpIHtcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldClcbiAgICBjb25zdCBzdHJMZW4gPSBkdi5nZXRVaW50MzIoMCwgIWlzTGUpXG4gICAgbGV0IHN0ciA9ICcnXG4gICAgaWYgKHN0ckxlbiA+IDApIHtcbiAgICAgIHN0ciA9IFVURjguZGVjb2RlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0ICsgMiwgc3RyTGVuKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gJydcbiAgICB9XG4gICAgLy8gY29uc3Qgc2l6ZSA9IHN0ckxlbiArIDQ7XG4gICAgdGhpcy5yZWFkT2Zmc2V0ICs9IHN0ckxlbiArIDRcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogc3RyLFxuICAgICAgYm9keVNpemU6IHN0ckxlbiArIDRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6Kej5p6QbWV0YeS4reeahOWPmOmHj1xuICAgKi9cbiAgcGFyc2VWYWx1ZSAoZGF0YSwgc2l6ZSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoKVxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIGJ1ZmZlciA9IGRhdGFcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmZmVyID0gZGF0YS5idWZmZXJcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgTlVNQkVSLFxuICAgICAgQk9PTEVBTixcbiAgICAgIFNUUklORyxcbiAgICAgIE9CSkVDVCxcbiAgICAgIE1JWF9BUlJBWSxcbiAgICAgIE9CSkVDVF9FTkQsXG4gICAgICBTVFJJQ1RfQVJSQVksXG4gICAgICBEQVRFLFxuICAgICAgTE9ORV9TVFJJTkdcbiAgICB9ID0gREFUQV9UWVBFU1xuICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0LCBzaXplKVxuICAgIGxldCBpc09iakVuZCA9IGZhbHNlXG4gICAgY29uc3QgdHlwZSA9IGRhdGFWaWV3LmdldFVpbnQ4KDApXG4gICAgbGV0IG9mZnNldCA9IDFcbiAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMVxuICAgIGxldCB2YWx1ZSA9IG51bGxcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBOVU1CRVI6IHtcbiAgICAgICAgdmFsdWUgPSBkYXRhVmlldy5nZXRGbG9hdDY0KDEsICFpc0xlKVxuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gOFxuICAgICAgICBvZmZzZXQgKz0gOFxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSBCT09MRUFOOiB7XG4gICAgICAgIGNvbnN0IGJvb2xOdW0gPSBkYXRhVmlldy5nZXRVaW50OCgxKVxuICAgICAgICB2YWx1ZSA9ICEhYm9vbE51bVxuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMVxuICAgICAgICBvZmZzZXQgKz0gMVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSBTVFJJTkc6IHtcbiAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5wYXJzZVN0cmluZyhidWZmZXIpXG4gICAgICAgIHZhbHVlID0gc3RyLmRhdGFcbiAgICAgICAgb2Zmc2V0ICs9IHN0ci5ib2R5U2l6ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSBPQkpFQ1Q6IHtcbiAgICAgICAgdmFsdWUgPSB7fVxuICAgICAgICBsZXQgb2JqRW5kU2l6ZSA9IDBcbiAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQzMihzaXplIC0gNCwgIWlzTGUpICYgMHgwMEZGRkZGRikge1xuICAgICAgICAgIG9iakVuZFNpemUgPSAzXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5yZWFkT2Zmc2V0ICs9IG9mZnNldCAtIDE7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBzaXplIC0gNCkge1xuICAgICAgICAgIGNvbnN0IGFtZk9iaiA9IHRoaXMucGFyc2VPYmplY3QoYnVmZmVyLCBzaXplIC0gb2Zmc2V0IC0gb2JqRW5kU2l6ZSlcbiAgICAgICAgICBpZiAoYW1mT2JqLmlzT2JqZWN0RW5kKSB7IGJyZWFrIH1cbiAgICAgICAgICB2YWx1ZVthbWZPYmouZGF0YS5uYW1lXSA9IGFtZk9iai5kYXRhLnZhbHVlXG4gICAgICAgICAgb2Zmc2V0ICs9IGFtZk9iai5ib2R5U2l6ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZzZXQgPD0gc2l6ZSAtIDMpIHtcbiAgICAgICAgICBjb25zdCBtYXJrID0gZGF0YVZpZXcuZ2V0VWludDMyKG9mZnNldCAtIDEsICFpc0xlKSAmIDB4MDBGRkZGRkZcbiAgICAgICAgICBpZiAobWFyayA9PT0gOSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDNcbiAgICAgICAgICAgIG9mZnNldCArPSAzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlIE1JWF9BUlJBWToge1xuICAgICAgICB2YWx1ZSA9IHt9XG4gICAgICAgIG9mZnNldCArPSA0XG4gICAgICAgIHRoaXMucmVhZE9mZnNldCArPSA0XG4gICAgICAgIGxldCBvYmpFbmRTaXplID0gMFxuICAgICAgICBpZiAoKGRhdGFWaWV3LmdldFVpbnQzMihzaXplIC0gNCwgIWlzTGUpICYgMHgwMEZGRkZGRikgPT09IDkpIHtcbiAgICAgICAgICBvYmpFbmRTaXplID0gM1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IHNpemUgLSA4KSB7XG4gICAgICAgICAgY29uc3QgYW1mVmFyID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIHNpemUgLSBvZmZzZXQgLSBvYmpFbmRTaXplKVxuICAgICAgICAgIGlmIChhbWZWYXIuaXNPYmplY3RFbmQpIHsgYnJlYWsgfVxuICAgICAgICAgIHZhbHVlW2FtZlZhci5kYXRhLm5hbWVdID0gYW1mVmFyLmRhdGEudmFsdWVcbiAgICAgICAgICBvZmZzZXQgKz0gYW1mVmFyLmJvZHlTaXplXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZnNldCA8PSBzaXplIC0gMykge1xuICAgICAgICAgIGNvbnN0IG1hcmtlciA9IGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQgLSAxLCAhaXNMZSkgJiAweDAwRkZGRkZGXG4gICAgICAgICAgaWYgKG1hcmtlciA9PT0gOSkge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IDNcbiAgICAgICAgICAgIHRoaXMucmVhZE9mZnNldCArPSAzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgT0JKRUNUX0VORDoge1xuICAgICAgICB2YWx1ZSA9IG51bGxcbiAgICAgICAgaXNPYmpFbmQgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgU1RSSUNUX0FSUkFZOiB7XG4gICAgICAgIHZhbHVlID0gW11cbiAgICAgICAgY29uc3QgYXJyTGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDMyKDEsICFpc0xlKVxuICAgICAgICBvZmZzZXQgKz0gNFxuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gNFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgc2l6ZSAtIG9mZnNldClcbiAgICAgICAgICB2YWx1ZS5wdXNoKHNjcmlwdC5kYXRhKVxuICAgICAgICAgIG9mZnNldCArPSBzY3JpcHQuYm9keVNpemVcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlIERBVEU6IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMucGFyc2VEYXRlKGJ1ZmZlciwgc2l6ZSAtIDEpXG4gICAgICAgIHZhbHVlID0gZGF0ZS5kYXRhXG4gICAgICAgIG9mZnNldCArPSBkYXRlLmJvZHlTaXplXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgTE9ORV9TVFJJTkc6IHtcbiAgICAgICAgY29uc3QgbG9uZ1N0ciA9IHRoaXMucGFyc2VMb25nU3RyaW5nKGJ1ZmZlciwgc2l6ZSAtIDEpXG4gICAgICAgIHZhbHVlID0gbG9uZ1N0ci5kYXRhXG4gICAgICAgIG9mZnNldCArPSBsb25nU3RyLmJvZHlTaXplXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgb2Zmc2V0ID0gc2l6ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB2YWx1ZSxcbiAgICAgIGJvZHlTaXplOiBvZmZzZXQsXG4gICAgICBpc09iakVuZDogaXNPYmpFbmRcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEVWRU5UUywgQXVkaW9UcmFja01ldGEsIFZpZGVvVHJhY2tNZXRhLCBzbmlmZmVyIH0gZnJvbSAneGdwbGF5ZXItdXRpbHMnO1xuaW1wb3J0IHsgU3BzUGFyc2VyIH0gZnJvbSAneGdwbGF5ZXItY29kZWMnO1xuaW1wb3J0IHsgVmlkZW9UcmFjaywgQXVkaW9UcmFjayB9IGZyb20gJ3hncGxheWVyLWJ1ZmZlcidcbmltcG9ydCBBTUZQYXJzZXIgZnJvbSAnLi9hbWYtcGFyc2VyJ1xuXG5jb25zdCBERU1VWF9FVkVOVFMgPSBFVkVOVFMuREVNVVhfRVZFTlRTO1xuXG5jbGFzcyBGbHZEZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX2ZpcnN0RnJhZ21lbnRMb2FkZWQgPSBmYWxzZVxuICAgIHRoaXMuX3RyYWNrTnVtID0gMFxuICAgIHRoaXMuX2hhc1NjcmlwdCA9IGZhbHNlXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLm9uKERFTVVYX0VWRU5UUy5ERU1VWF9TVEFSVCwgdGhpcy5kb1BhcnNlRmx2LmJpbmQodGhpcykpXG4gIH1cblxuICAvKipcbiAgICogaWYgdGhlIGZsdiBoZWFkIGlzIHZhbGlkXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRmx2RmlsZSAoZGF0YSkge1xuICAgIHJldHVybiAhKGRhdGFbMF0gIT09IDB4NDYgfHwgZGF0YVsxXSAhPT0gMHg0QyB8fCBkYXRhWzJdICE9PSAweDU2IHx8IGRhdGFbM10gIT09IDB4MDEpXG4gIH1cblxuICAvKipcbiAgICogSWYgdGhlIHN0cmVhbSBoYXMgYXVkaW8gb3IgdmlkZW8uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlYW1GbGFnIC0gRGF0YSBmcm9tIHRoZSBzdHJlYW0gd2hpY2ggaXMgZGVmaW5lIHdoZXRoZXIgdGhlIGF1ZGlvIC8gdmlkZW8gdHJhY2sgaXMgZXhpc3QuXG4gICAqL1xuICBzdGF0aWMgZ2V0UGxheVR5cGUgKHN0cmVhbUZsYWcpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBoYXNWaWRlbzogZmFsc2UsXG4gICAgICBoYXNBdWRpbzogZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoc3RyZWFtRmxhZyAmIDB4MDEgPiAwKSB7XG4gICAgICByZXN1bHQuaGFzVmlkZW8gPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHN0cmVhbUZsYWcgJiAweDA0ID4gMCkge1xuICAgICAgcmVzdWx0Lmhhc0F1ZGlvID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGRvUGFyc2VGbHYgKCkge1xuICAgIGlmICghdGhpcy5fZmlyc3RGcmFnbWVudExvYWRlZCkge1xuICAgICAgaWYgKHRoaXMubG9hZGVyQnVmZmVyLmxlbmd0aCA8IDEzKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMTMpXG4gICAgICB0aGlzLnBhcnNlRmx2SGVhZGVyKGhlYWRlcilcbiAgICAgIHRoaXMuZG9QYXJzZUZsdigpIC8vIOmAkuW9kuiwg+eUqO+8jOe7p+e7reino+aekGZsdua1gVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5sb2FkZXJCdWZmZXIubGVuZ3RoIDwgMTEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgY2h1bms7XG5cbiAgICAgIGxldCBsb29wTWF4ID0gMTAwMDAwIC8vIOmYsuatouatu+W+queOr+S6p+eUn1xuICAgICAgZG8ge1xuICAgICAgICBjaHVuayA9IHRoaXMuX3BhcnNlRmx2VGFnKClcbiAgICAgIH0gd2hpbGUgKGNodW5rICYmIGxvb3BNYXgtLSA+IDApXG5cbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfQ09NUExFVEUpXG4gICAgfVxuICB9XG5cbiAgcGFyc2VGbHZIZWFkZXIgKGhlYWRlcikge1xuICAgIGlmICghRmx2RGVtdXhlci5pc0ZsdkZpbGUoaGVhZGVyKSkge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgbmV3IEVycm9yKCdpbnZhbGlkIGZsdiBmaWxlJykpXG4gICAgICB0aGlzLmRvUGFyc2VGbHYoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXJzdEZyYWdtZW50TG9hZGVkID0gdHJ1ZVxuICAgICAgY29uc3QgcGxheVR5cGUgPSBGbHZEZW11eGVyLmdldFBsYXlUeXBlKGhlYWRlcls0XSlcblxuICAgICAgaWYgKHBsYXlUeXBlLmhhc1ZpZGVvKSB7XG4gICAgICAgIHRoaXMuaW5pdFZpZGVvVHJhY2soKVxuICAgICAgfVxuXG4gICAgICBpZiAocGxheVR5cGUuaGFzQXVkaW8pIHtcbiAgICAgICAgdGhpcy5pbml0QXVkaW9UcmFjaygpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZG9QYXJzZUZsdigpXG4gIH1cblxuICAvKipcbiAgICogaW5pdCBkZWZhdWx0IHZpZGVvIHRyYWNrIGNvbmZpZ3NcbiAgICovXG4gIGluaXRWaWRlb1RyYWNrICgpIHtcbiAgICB0aGlzLl90cmFja051bSsrXG4gICAgbGV0IHZpZGVvVHJhY2sgPSBuZXcgVmlkZW9UcmFjaygpXG4gICAgdmlkZW9UcmFjay5tZXRhID0gbmV3IFZpZGVvVHJhY2tNZXRhKClcbiAgICB2aWRlb1RyYWNrLmlkID0gdmlkZW9UcmFjay5tZXRhLmlkID0gdGhpcy5fdHJhY2tOdW1cblxuICAgIHRoaXMudHJhY2tzLnZpZGVvVHJhY2sgPSB2aWRlb1RyYWNrXG4gIH1cblxuICAvKipcbiAgICogaW5pdCBkZWZhdWx0IGF1ZGlvIHRyYWNrIGNvbmZpZ3NcbiAgICovXG4gIGluaXRBdWRpb1RyYWNrICgpIHtcbiAgICB0aGlzLl90cmFja051bSsrXG4gICAgbGV0IGF1ZGlvVHJhY2sgPSBuZXcgQXVkaW9UcmFjaygpXG4gICAgYXVkaW9UcmFjay5tZXRhID0gbmV3IEF1ZGlvVHJhY2tNZXRhKClcbiAgICBhdWRpb1RyYWNrLmlkID0gYXVkaW9UcmFjay5tZXRhLmlkID0gdGhpcy5fdHJhY2tOdW1cblxuICAgIHRoaXMudHJhY2tzLmF1ZGlvVHJhY2sgPSBhdWRpb1RyYWNrXG4gIH1cblxuICAvKipcbiAgICogUGFja2FnZSB0aGUgZGF0YSBhcyB0aGUgZm9sbG93aW5nIGRhdGEgc3RydWN0dXJlXG4gICAqIHtcbiAgICogICAgZGF0YTogVWludDhBcnJheS4gdGhlIFN0cmVhbSBkYXRhLlxuICAgKiAgICBpbmZvOiBUaGUgZmlyc3QgYnl0ZSBpbmZvIG9mIHRoZSBUYWcuXG4gICAqICAgIHRhZ1R5cGU6IDjjgIE544CBMThcbiAgICogICAgdGltZVN0YW1wOiB0aGUgdGltZXN0ZW1wXG4gICAqIH1cbiAgICovXG4gIF9wYXJzZUZsdlRhZyAoKSB7XG4gICAgaWYgKHRoaXMubG9hZGVyQnVmZmVyLmxlbmd0aCA8IDExKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgY2h1bmsgPSB0aGlzLl9wYXJzZUZsdlRhZ0hlYWRlcigpXG4gICAgaWYgKGNodW5rKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzQ2h1bmsoY2h1bmspXG4gICAgfVxuICAgIHJldHVybiBjaHVua1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSAxMSBieXRlIHRhZyBIZWFkZXJcbiAgICovXG4gIF9wYXJzZUZsdlRhZ0hlYWRlciAoKSB7XG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBsZXQgY2h1bmsgPSB7fVxuXG4gICAgbGV0IHRhZ1R5cGUgPSB0aGlzLmxvYWRlckJ1ZmZlci50b0ludChvZmZzZXQsIDEpXG4gICAgb2Zmc2V0ICs9IDFcblxuICAgIC8vIDIgYml0IEZNUyByZXNlcnZlZCwgMSBiaXQgZmlsdGVyZWQsIDUgYml0IHRhZyB0eXBlXG4gICAgY2h1bmsuZmlsdGVyZWQgPSAodGFnVHlwZSAmIDMyKSA+Pj4gNVxuICAgIGNodW5rLnRhZ1R5cGUgPSB0YWdUeXBlICYgMzFcblxuICAgIC8vIDMgQnl0ZSBkYXRhc2l6ZVxuICAgIGNodW5rLmRhdGFzaXplID0gdGhpcy5sb2FkZXJCdWZmZXIudG9JbnQob2Zmc2V0LCAzKVxuICAgIG9mZnNldCArPSAzXG5cbiAgICBpZiAoKGNodW5rLnRhZ1R5cGUgIT09IDggJiYgY2h1bmsudGFnVHlwZSAhPT0gOSAmJiBjaHVuay50YWdUeXBlICE9PSAxMSAmJiBjaHVuay50YWdUeXBlICE9PSAxOCkgfHxcbiAgICAgIHRoaXMubG9hZGVyQnVmZmVyLnRvSW50KDgsIDMpICE9PSAwKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZXJCdWZmZXIgJiYgdGhpcy5sb2FkZXJCdWZmZXIubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgxKVxuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcigndGFnVHlwZSAnICsgY2h1bmsudGFnVHlwZSksIGZhbHNlKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb2FkZXJCdWZmZXIubGVuZ3RoIDwgY2h1bmsuZGF0YXNpemUgKyAxNSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyByZWFkIHRoZSBkYXRhLlxuICAgIHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDQpXG5cbiAgICAvLyAzIEJ5dGUgdGltZXN0YW1wXG4gICAgbGV0IHRpbWVzdGFtcCA9IHRoaXMubG9hZGVyQnVmZmVyLnRvSW50KDAsIDMpXG4gICAgdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMylcblxuICAgIC8vIDEgQnl0ZSB0aW1lc3RhbXBFeHRcbiAgICBsZXQgdGltZXN0YW1wRXh0ID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMSlbMF1cbiAgICBpZiAodGltZXN0YW1wRXh0ID4gMCkge1xuICAgICAgdGltZXN0YW1wICs9IHRpbWVzdGFtcEV4dCAqIDB4MTAwMDAwMFxuICAgIH1cblxuICAgIGNodW5rLmR0cyA9IHRpbWVzdGFtcFxuXG4gICAgLy8gc3RyZWFtSWRcbiAgICB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgzKVxuICAgIHJldHVybiBjaHVua1xuICB9XG5cbiAgX3Byb2Nlc3NDaHVuayAoY2h1bmspIHtcbiAgICBzd2l0Y2ggKGNodW5rLnRhZ1R5cGUpIHtcbiAgICAgIGNhc2UgMTg6XG4gICAgICAgIHRoaXMuX3BhcnNlU2NyaXB0RGF0YShjaHVuaylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgdGhpcy5fcGFyc2VBQUNEYXRhKGNodW5rKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSA5OlxuICAgICAgICB0aGlzLl9wYXJzZUhldmNEYXRhKGNodW5rKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAxMTpcbiAgICAgICAgLy8gZm9yIHNvbWUgQ0ROIHRoYXQgZGlkIG5vdCBwcm9jZXNzIHRoZSBjdXJyZWN0IFJUTVAgbWVzc2FnZXNcbiAgICAgICAgdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMylcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcnNlIGZsdiBzY3JpcHQgZGF0YVxuICAgKiBAcGFyYW0gY2h1bmtcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9wYXJzZVNjcmlwdERhdGEgKGNodW5rKSB7XG4gICAgbGV0IGF1ZGlvVHJhY2sgPSB0aGlzLnRyYWNrcy5hdWRpb1RyYWNrXG4gICAgbGV0IHZpZGVvVHJhY2sgPSB0aGlzLnRyYWNrcy52aWRlb1RyYWNrXG5cbiAgICBsZXQgZGF0YSA9IHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KGNodW5rLmRhdGFzaXplKVxuXG4gICAgY29uc3QgaW5mbyA9IG5ldyBBTUZQYXJzZXIoKS5yZXNvbHZlKGRhdGEsIGRhdGEubGVuZ3RoKVxuXG4gICAgY29uc3Qgb25NZXRhRGF0YSA9IHRoaXMuX2NvbnRleHQub25NZXRhRGF0YSA9IGluZm8gPyBpbmZvLm9uTWV0YURhdGEgOiB1bmRlZmluZWRcblxuICAgIC8vIGZpbGwgbWVkaWFJbmZvXG4gICAgdGhpcy5fY29udGV4dC5tZWRpYUluZm8uZHVyYXRpb24gPSBvbk1ldGFEYXRhLmR1cmF0aW9uXG4gICAgdGhpcy5fY29udGV4dC5tZWRpYUluZm8uaGFzVmlkZW8gPSBvbk1ldGFEYXRhLmhhc1ZpZGVvXG4gICAgdGhpcy5fY29udGV4dC5tZWRpYUluZm8uaHNhQXVkaW8gPSBvbk1ldGFEYXRhLmhhc0F1ZGlvXG5cbiAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSlcbiAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVESUFfSU5GTylcbiAgICAgIHRoaXMuX2hhc1NjcmlwdCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBFZGl0IGRlZmF1bHQgbWV0YS5cbiAgICBpZiAoYXVkaW9UcmFjayAmJiAhYXVkaW9UcmFjay5oYXNTcGVjaWZpY0NvbmZpZykge1xuICAgICAgbGV0IG1ldGEgPSBhdWRpb1RyYWNrLm1ldGFcbiAgICAgIGlmIChvbk1ldGFEYXRhLmF1ZGlvc2FtcGxlcmF0ZSkge1xuICAgICAgICBtZXRhLnNhbXBsZVJhdGUgPSBvbk1ldGFEYXRhLmF1ZGlvc2FtcGxlcmF0ZVxuICAgICAgfVxuXG4gICAgICBpZiAob25NZXRhRGF0YS5hdWRpb2NoYW5uZWxzKSB7XG4gICAgICAgIG1ldGEuY2hhbm5lbENvdW50ID0gb25NZXRhRGF0YS5hdWRpb2NoYW5uZWxzXG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAob25NZXRhRGF0YS5hdWRpb3NhbXBsZXJhdGUpIHtcbiAgICAgICAgY2FzZSA0NDEwMDpcbiAgICAgICAgICBtZXRhLnNhbXBsZVJhdGVJbmRleCA9IDRcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDIyMDUwOlxuICAgICAgICAgIG1ldGEuc2FtcGxlUmF0ZUluZGV4ID0gN1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTEwMjU6XG4gICAgICAgICAgbWV0YS5zYW1wbGVSYXRlSW5kZXggPSAxMFxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2aWRlb1RyYWNrICYmICF2aWRlb1RyYWNrLmhhc1NwZWNpZmljQ29uZmlnKSB7XG4gICAgICBsZXQgbWV0YSA9IHZpZGVvVHJhY2subWV0YVxuICAgICAgaWYgKHR5cGVvZiBvbk1ldGFEYXRhLmZyYW1lcmF0ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbGV0IGZwc051bSA9IE1hdGguZmxvb3Iob25NZXRhRGF0YS5mcmFtZXJhdGUgKiAxMDAwKVxuICAgICAgICBpZiAoZnBzTnVtID4gMCkge1xuICAgICAgICAgIGxldCBmcHMgPSBmcHNOdW0gLyAxMDAwXG4gICAgICAgICAgaWYgKCFtZXRhLmZyYW1lUmF0ZSkge1xuICAgICAgICAgICAgbWV0YS5mcmFtZVJhdGUgPSB7fVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZXRhLmZyYW1lUmF0ZS5maXhlZCA9IHRydWVcbiAgICAgICAgICBtZXRhLmZyYW1lUmF0ZS5mcHMgPSBmcHNcbiAgICAgICAgICBtZXRhLmZyYW1lUmF0ZS5mcHNfbnVtID0gZnBzTnVtXG4gICAgICAgICAgbWV0YS5mcmFtZVJhdGUuZnBzX2RlbiA9IDEwMDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hYWNTZXF1ZW5jZUhlYWRlclBhcnNlciAoZGF0YSkge1xuICAgIGxldCByZXQgPSB7fVxuICAgIHJldC5oYXNTcGVjaWZpY0NvbmZpZyA9IHRydWVcbiAgICByZXQub2JqZWN0VHlwZSA9IGRhdGFbMV0gPj4+IDNcbiAgICByZXQuc2FtcGxlUmF0ZUluZGV4ID0gKChkYXRhWzFdICYgNykgPDwgMSkgfCAoZGF0YVsyXSA+Pj4gNylcbiAgICByZXQuYXVkaW9zYW1wbGVyYXRlID0gdGhpcy5fc3dpdGNoQXVkaW9TYW1wbGVSYXRlKHJldC5zYW1wbGVSYXRlSW5kZXgpXG4gICAgcmV0LmNoYW5uZWxDb3VudCA9IChkYXRhWzJdICYgMTIwKSA+Pj4gM1xuICAgIHJldC5mcmFtZUxlbmd0aCA9IChkYXRhWzJdICYgNCkgPj4+IDJcbiAgICByZXQuZGVwZW5kc09uQ29yZUNvZGVyID0gKGRhdGFbMl0gJiAyKSA+Pj4gMVxuICAgIHJldC5leHRlbnNpb25GbGFnSW5kZXggPSBkYXRhWzJdICYgMVxuXG4gICAgcmV0LmNvZGVjID0gYG1wNGEuNDAuJHtyZXQub2JqZWN0VHlwZX1gXG4gICAgbGV0IHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGV4dGVuc2lvblNhbXBsaW5nSW5kZXg7XG5cbiAgICBsZXQgY29uZmlnO1xuICAgIGxldCBzYW1wbGluZ0luZGV4ID0gcmV0LnNhbXBsZVJhdGVJbmRleDtcblxuICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMSkge1xuICAgICAgLy8gZmlyZWZveDogdXNlIFNCUiAoSEUtQUFDKSBpZiBmcmVxIGxlc3MgdGhhbiAyNGtIelxuICAgICAgaWYgKHJldC5zYW1wbGVSYXRlSW5kZXggPj0gNikge1xuICAgICAgICByZXQub2JqZWN0VHlwZSA9IDU7XG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSg0KTtcbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSW5kZXggLSAzO1xuICAgICAgfSBlbHNlIHsgLy8gdXNlIExDLUFBQ1xuICAgICAgICByZXQub2JqZWN0VHlwZSA9IDI7XG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKTtcbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSW5kZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICE9PSAtMSB8fCBzbmlmZmVyLmJyb3dzZXIgPT09ICdzYWZhcmknKSB7XG4gICAgICAvLyBhbmRyb2lkOiBhbHdheXMgdXNlIExDLUFBQ1xuICAgICAgcmV0Lm9iamVjdFR5cGUgPSAyO1xuICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpO1xuICAgICAgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciBvdGhlciBicm93c2VycywgZS5nLiBjaHJvbWUuLi5cbiAgICAgIC8vIEFsd2F5cyB1c2UgSEUtQUFDIHRvIG1ha2UgaXQgZWFzaWVyIHRvIHN3aXRjaCBhYWMgY29kZWMgcHJvZmlsZVxuICAgICAgcmV0Lm9iamVjdFR5cGUgPSA1O1xuICAgICAgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHJldC5zYW1wbGVSYXRlSW5kZXg7XG4gICAgICBjb25maWcgPSBuZXcgQXJyYXkoNCk7XG5cbiAgICAgIGlmIChyZXQuc2FtcGxlUmF0ZUluZGV4ID49IDYpIHtcbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHJldC5zYW1wbGVSYXRlSW5kZXggLSAzO1xuICAgICAgfSBlbHNlIGlmIChyZXQuY2hhbm5lbENvdW50ID09PSAxKSB7IC8vIE1vbm8gY2hhbm5lbFxuICAgICAgICByZXQub2JqZWN0VHlwZSA9IDI7XG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKTtcbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHJldC5zYW1wbGVSYXRlSW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnWzBdID0gcmV0Lm9iamVjdFR5cGUgPDwgMztcbiAgICBjb25maWdbMF0gfD0gKHJldC5zYW1wbGVSYXRlSW5kZXggJiAweDBGKSA+Pj4gMTtcbiAgICBjb25maWdbMV0gPSAocmV0LnNhbXBsZVJhdGVJbmRleCAmIDB4MEYpIDw8IDc7XG4gICAgY29uZmlnWzFdIHw9IChyZXQuY2hhbm5lbENvdW50ICYgMHgwRikgPDwgMztcbiAgICBpZiAocmV0Lm9iamVjdFR5cGUgPT09IDUpIHtcbiAgICAgIGNvbmZpZ1sxXSB8PSAoKGV4dGVuc2lvblNhbXBsaW5nSW5kZXggJiAweDBGKSA+Pj4gMSk7XG4gICAgICBjb25maWdbMl0gPSAoZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCAmIDB4MDEpIDw8IDc7XG4gICAgICAvLyBleHRlbmRlZCBhdWRpbyBvYmplY3QgdHlwZTogZm9yY2UgdG8gMiAoTEMtQUFDKVxuICAgICAgY29uZmlnWzJdIHw9ICgyIDw8IDIpO1xuICAgICAgY29uZmlnWzNdID0gMDtcbiAgICB9XG4gICAgcmV0LmNvbmZpZyA9IGNvbmZpZ1xuICAgIHJldHVybiByZXRcbiAgfVxuXG4gIF9wYXJzZUFBQ0RhdGEgKGNodW5rKSB7XG4gICAgbGV0IHRyYWNrID0gdGhpcy50cmFja3MuYXVkaW9UcmFja1xuICAgIGlmICghdHJhY2spIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBtZXRhID0gdHJhY2subWV0YVxuXG4gICAgaWYgKCFtZXRhKSB7XG4gICAgICB0cmFjay5tZXRhID0gbmV3IEF1ZGlvVHJhY2tNZXRhKClcbiAgICAgIG1ldGEgPSB0cmFjay5tZXRhO1xuICAgIH1cblxuICAgIGxldCBpbmZvID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMSlbMF1cblxuICAgIGNodW5rLmRhdGEgPSB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdChjaHVuay5kYXRhc2l6ZSAtIDEpXG5cbiAgICBsZXQgZm9ybWF0ID0gKGluZm8gJiAyNDApID4+PiA0XG5cbiAgICB0cmFjay5mb3JtYXQgPSBmb3JtYXRcblxuICAgIGlmIChmb3JtYXQgIT09IDEwKSB7XG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCBuZXcgRXJyb3IoYGludmFsaWQgYXVkaW8gZm9ybWF0OiAke2Zvcm1hdH1gKSlcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSAxMCAmJiAhdGhpcy5faGFzQXVkaW9TZXF1ZW5jZSkge1xuICAgICAgbWV0YS5zYW1wbGVSYXRlID0gdGhpcy5fc3dpdGNoQXVkaW9TYW1wbGluZ0ZyZXF1ZW5jeShpbmZvKVxuICAgICAgbWV0YS5zYW1wbGVSYXRlSW5kZXggPSAoaW5mbyAmIDEyKSA+Pj4gMlxuICAgICAgbWV0YS5mcmFtZUxlbnRoID0gKGluZm8gJiAyKSA+Pj4gMVxuICAgICAgbWV0YS5jaGFubmVsQ291bnQgPSBpbmZvICYgMVxuICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoMTAyNCAvIG1ldGEuYXVkaW9TYW1wbGVSYXRlICogbWV0YS50aW1lc2NhbGUpXG4gICAgfVxuXG4gICAgbGV0IGF1ZGlvU2FtcGxlUmF0ZSA9IG1ldGEuYXVkaW9TYW1wbGVSYXRlXG4gICAgbGV0IGF1ZGlvU2FtcGxlUmF0ZUluZGV4ID0gbWV0YS5zYW1wbGVSYXRlSW5kZXhcbiAgICBsZXQgcmVmU2FtcGxlRHVyYXRpb24gPSBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG5cbiAgICBkZWxldGUgY2h1bmsudGFnVHlwZVxuICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuX2RhdGFzaXplVmFsaWRhdG9yKGNodW5rLmRhdGFzaXplKVxuXG4gICAgaWYgKGNodW5rLmRhdGFbMF0gPT09IDApIHsgLy8gQUFDIFNlcXVlbmNlIEhlYWRlclxuICAgICAgbGV0IGFhY0hlYWRlciA9IHRoaXMuX2FhY1NlcXVlbmNlSGVhZGVyUGFyc2VyKGNodW5rLmRhdGEpXG4gICAgICBhdWRpb1NhbXBsZVJhdGUgPSBhYWNIZWFkZXIuYXVkaW9zYW1wbGVyYXRlIHx8IG1ldGEuYXVkaW9TYW1wbGVSYXRlXG4gICAgICBhdWRpb1NhbXBsZVJhdGVJbmRleCA9IGFhY0hlYWRlci5zYW1wbGVSYXRlSW5kZXggfHwgbWV0YS5zYW1wbGVSYXRlSW5kZXhcbiAgICAgIHJlZlNhbXBsZUR1cmF0aW9uID0gTWF0aC5mbG9vcigxMDI0IC8gYXVkaW9TYW1wbGVSYXRlICogbWV0YS50aW1lc2NhbGUpXG5cbiAgICAgIG1ldGEuY2hhbm5lbENvdW50ID0gYWFjSGVhZGVyLmNoYW5uZWxDb3VudFxuICAgICAgbWV0YS5zYW1wbGVSYXRlID0gYXVkaW9TYW1wbGVSYXRlXG4gICAgICBtZXRhLnNhbXBsZVJhdGVJbmRleCA9IGF1ZGlvU2FtcGxlUmF0ZUluZGV4XG4gICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gcmVmU2FtcGxlRHVyYXRpb25cbiAgICAgIG1ldGEuZHVyYXRpb24gPSB0aGlzLl9jb250ZXh0Lm1lZGlhSW5mby5kdXJhdGlvbiAqIG1ldGEudGltZXNjYWxlXG4gICAgICBtZXRhLmNvbmZpZyA9IGFhY0hlYWRlci5jb25maWdcbiAgICAgIG1ldGEub2JqZWN0VHlwZSA9IGFhY0hlYWRlci5vYmplY3RUeXBlO1xuXG4gICAgICBjb25zdCBhdWRpb01lZGlhID0gdGhpcy5fY29udGV4dC5tZWRpYUluZm8uYXVkaW9cblxuICAgICAgLy8gZmlsbCBhdWRpbyBtZWRpYSBpbmZvXG4gICAgICBhdWRpb01lZGlhLmNvZGVjID0gYWFjSGVhZGVyLmNvZGVjXG4gICAgICBhdWRpb01lZGlhLmNoYW5uZWxDb3VudCA9IGFhY0hlYWRlci5jaGFubmVsQ291bnRcbiAgICAgIGF1ZGlvTWVkaWEuc2FtcGxlUmF0ZSA9IGF1ZGlvU2FtcGxlUmF0ZVxuICAgICAgYXVkaW9NZWRpYS5zYW1wbGVSYXRlSW5kZXggPSBhYWNIZWFkZXIuYXVkaW9TYW1wbGVSYXRlSW5kZXhcblxuICAgICAgaWYgKHRoaXMuX2hhc1NjcmlwdCAmJiAhdGhpcy5faGFzQXVkaW9TZXF1ZW5jZSkge1xuICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ2F1ZGlvJylcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5faGFzU2NyaXB0ICYmIHRoaXMuX2hhc0F1ZGlvU2VxdWVuY2UpIHtcbiAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICdhdWRpbycpXG4gICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuQVVESU9fTUVUQURBVEFfQ0hBTkdFKVxuICAgICAgICAvLyB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ2F1ZGlvJylcbiAgICAgIH1cbiAgICAgIHRoaXMuX2hhc0F1ZGlvU2VxdWVuY2UgPSB0cnVlXG5cbiAgICAgIHRoaXMuX21ldGFDaGFuZ2UgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9tZXRhQ2hhbmdlKSB7XG4gICAgICAgIGNodW5rLm9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0YTogdHJhY2subWV0YVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9tZXRhQ2hhbmdlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY2h1bmsuZGF0YSA9IGNodW5rLmRhdGEuc2xpY2UoMSwgY2h1bmsuZGF0YS5sZW5ndGgpXG4gICAgICB0cmFjay5zYW1wbGVzLnB1c2goY2h1bmspXG4gICAgfVxuICAgIGlmICghdmFsaWRhdGUpIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuVEFHLCBuZXcgRXJyb3IoJ1RBRyBsZW5ndGggZXJyb3IgYXQgJyArIGNodW5rLmRhdGFzaXplKSwgZmFsc2UpXG4gICAgICAvLyB0aGlzLmxvZ2dlci53YXJuKHRoaXMuVEFHLCBlcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJzZSBoZXZjL2F2YyB2aWRlbyBkYXRhXG4gICAqIEBwYXJhbSBjaHVua1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3BhcnNlSGV2Y0RhdGEgKGNodW5rKSB7XG4gICAgLy8gaGVhZGVyXG4gICAgbGV0IGluZm8gPSB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgxKVswXVxuICAgIGNodW5rLmZyYW1lVHlwZSA9IChpbmZvICYgMHhmMCkgPj4+IDRcbiAgICBjaHVuay5pc0tleWZyYW1lID0gY2h1bmsuZnJhbWVUeXBlID09PSAxXG4gICAgLy8gbGV0IHRlbXBDb2RlY0lEID0gdGhpcy50cmFja3MudmlkZW9UcmFjay5jb2RlY0lEXG4gICAgbGV0IGNvZGVjSUQgPSBpbmZvICYgMHgwZlxuICAgIHRoaXMudHJhY2tzLnZpZGVvVHJhY2suY29kZWNJRCA9IGNvZGVjSURcblxuICAgIC8vIGhldmPlkoxhdmPnmoRoZWFkZXLop6PmnpDmlrnlvI/kuIDmoLdcbiAgICBjaHVuay5hdmNQYWNrZXRUeXBlID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMSlbMF1cbiAgICBjaHVuay5jdHMgPSB0aGlzLmxvYWRlckJ1ZmZlci50b0ludCgwLCAzKVxuICAgIHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDMpXG5cbiAgICAvLyAxMiBmb3IgaGV2YywgNyBmb3IgYXZjXG4gICAgaWYgKGNvZGVjSUQgPT09IDEyKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoY2h1bmsuZGF0YXNpemUgLSA1KVxuICAgICAgY2h1bmsuZGF0YSA9IGRhdGFcblxuICAgICAgaWYgKE51bWJlci5wYXJzZUludChjaHVuay5hdmNQYWNrZXRUeXBlKSAhPT0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGFzaXplVmFsaWRhdG9yKGNodW5rLmRhdGFzaXplKSkge1xuICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuVEFHLCBuZXcgRXJyb3IoYGludmFsaWQgdmlkZW8gdGFnIGRhdGFzaXplOiAke2NodW5rLmRhdGFzaXplfWApLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmFsdSA9IHt9XG4gICAgICAgIGxldCByID0gMFxuICAgICAgICBuYWx1LmN0cyA9IGNodW5rLmN0c1xuICAgICAgICBuYWx1LmR0cyA9IGNodW5rLmR0c1xuICAgICAgICB3aGlsZSAoY2h1bmsuZGF0YS5sZW5ndGggPiByKSB7XG4gICAgICAgICAgbGV0IHNpemVzID0gY2h1bmsuZGF0YS5zbGljZShOdW1iZXIucGFyc2VJbnQociksIDQgKyByKVxuICAgICAgICAgIG5hbHUuc2l6ZSA9IHNpemVzWzNdXG4gICAgICAgICAgbmFsdS5zaXplICs9IHNpemVzWzJdICogMjU2XG4gICAgICAgICAgbmFsdS5zaXplICs9IHNpemVzWzFdICogMjU2ICogMjU2XG4gICAgICAgICAgbmFsdS5zaXplICs9IHNpemVzWzBdICogMjU2ICogMjU2ICogMjU2XG4gICAgICAgICAgciArPSA0XG4gICAgICAgICAgbmFsdS5kYXRhID0gY2h1bmsuZGF0YS5zbGljZShOdW1iZXIucGFyc2VJbnQociksIG5hbHUuc2l6ZSArIHIpXG4gICAgICAgICAgciArPSBuYWx1LnNpemVcbiAgICAgICAgICB0aGlzLnRyYWNrcy52aWRlb1RyYWNrLnNhbXBsZXMucHVzaChuYWx1KVxuICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAndmlkZW8nKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKE51bWJlci5wYXJzZUludChjaHVuay5hdmNQYWNrZXRUeXBlKSA9PT0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGFzaXplVmFsaWRhdG9yKGNodW5rLmRhdGFzaXplKSkge1xuICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuVEFHLCBuZXcgRXJyb3IoYGludmFsaWQgdmlkZW8gdGFnIGRhdGFzaXplOiAke2NodW5rLmRhdGFzaXplfWApLCBmYWxzZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ3ZpZGVvJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29kZWNJRCA9PT0gNykge1xuICAgICAgbGV0IGRhdGEgPSB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdChjaHVuay5kYXRhc2l6ZSAtIDUpXG4gICAgICBpZiAoZGF0YVs0XSA9PT0gMCAmJiBkYXRhWzVdID09PSAwICYmIGRhdGFbNl0gPT09IDAgJiYgZGF0YVs3XSA9PT0gMSkge1xuICAgICAgICBsZXQgYXZjY2xlbmd0aCA9IDBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICBhdmNjbGVuZ3RoID0gYXZjY2xlbmd0aCAqIDI1NiArIGRhdGFbaV1cbiAgICAgICAgfVxuICAgICAgICBhdmNjbGVuZ3RoIC09IDRcbiAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoNCwgZGF0YS5sZW5ndGgpXG4gICAgICAgIGRhdGFbM10gPSBhdmNjbGVuZ3RoICUgMjU2XG4gICAgICAgIGF2Y2NsZW5ndGggPSAoYXZjY2xlbmd0aCAtIGRhdGFbM10pIC8gMjU2XG4gICAgICAgIGRhdGFbMl0gPSBhdmNjbGVuZ3RoICUgMjU2XG4gICAgICAgIGF2Y2NsZW5ndGggPSAoYXZjY2xlbmd0aCAtIGRhdGFbMl0pIC8gMjU2XG4gICAgICAgIGRhdGFbMV0gPSBhdmNjbGVuZ3RoICUgMjU2XG4gICAgICAgIGRhdGFbMF0gPSAoYXZjY2xlbmd0aCAtIGRhdGFbMV0pIC8gMjU2XG4gICAgICB9XG5cbiAgICAgIGNodW5rLmRhdGEgPSBkYXRhXG4gICAgICAvLyBJZiBpdCBpcyBBVkMgc2VxdWVjZSBIZWFkZXIuXG4gICAgICBpZiAoY2h1bmsuYXZjUGFja2V0VHlwZSA9PT0gMCkge1xuICAgICAgICB0aGlzLl9hdmNTZXF1ZW5jZUhlYWRlclBhcnNlcihjaHVuay5kYXRhKVxuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSlcbiAgICAgICAgaWYgKHZhbGlkYXRlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2hhc1NjcmlwdCAmJiAhdGhpcy5faGFzVmlkZW9TZXF1ZW5jZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICd2aWRlbycpXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9oYXNTY3JpcHQgJiYgdGhpcy5faGFzVmlkZW9TZXF1ZW5jZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICdhdWRpbycpXG4gICAgICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLlZJREVPX01FVEFEQVRBX0NIQU5HRSlcbiAgICAgICAgICAgIC8vIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAndmlkZW8nKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9oYXNWaWRlb1NlcXVlbmNlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21ldGFDaGFuZ2UgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGFzaXplVmFsaWRhdG9yKGNodW5rLmRhdGFzaXplKSkge1xuICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuVEFHLCBuZXcgRXJyb3IoYGludmFsaWQgdmlkZW8gdGFnIGRhdGFzaXplOiAke2NodW5rLmRhdGFzaXplfWApLCBmYWxzZSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX21ldGFDaGFuZ2UpIHtcbiAgICAgICAgICBjaHVuay5vcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50cmFja3MudmlkZW9UcmFjay5tZXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9tZXRhQ2hhbmdlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYWNrcy52aWRlb1RyYWNrLnNhbXBsZXMucHVzaChjaHVuaylcbiAgICAgICAgLy8gdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9DT01QTEVURSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcihgdmlkZW8gY29kZWlkIGlzICR7Y29kZWNJRH1gKSwgZmFsc2UpXG4gICAgICBjaHVuay5kYXRhID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoY2h1bmsuZGF0YXNpemUgLSAxKVxuICAgICAgaWYgKCF0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSkpIHtcbiAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcihgaW52YWxpZCB2aWRlbyB0YWcgZGF0YXNpemU6ICR7Y2h1bmsuZGF0YXNpemV9YCksIGZhbHNlKVxuICAgICAgfVxuICAgICAgdGhpcy50cmFja3MudmlkZW9UcmFjay5zYW1wbGVzLnB1c2goY2h1bmspXG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0NPTVBMRVRFKVxuICAgIH1cbiAgICBkZWxldGUgY2h1bmsudGFnVHlwZVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcnNlIGF2YyBtZXRhZGF0YVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2F2Y1NlcXVlbmNlSGVhZGVyUGFyc2VyIChkYXRhKSB7XG4gICAgbGV0IHRyYWNrID0gdGhpcy50cmFja3MudmlkZW9UcmFja1xuXG4gICAgaWYgKCF0cmFjaykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IG9mZnNldCA9IDBcblxuICAgIGlmICghdHJhY2subWV0YSkge1xuICAgICAgdHJhY2subWV0YSA9IG5ldyBWaWRlb1RyYWNrTWV0YSgpXG4gICAgfVxuICAgIGxldCBtZXRhID0gdHJhY2subWV0YVxuXG4gICAgbWV0YS5jb25maWd1cmF0aW9uVmVyc2lvbiA9IGRhdGFbMF1cbiAgICBtZXRhLmF2Y1Byb2ZpbGVJbmRpY2F0aW9uID0gZGF0YVsxXVxuICAgIG1ldGEucHJvZmlsZUNvbXBhdGliaWxpdHkgPSBkYXRhWzJdXG4gICAgbWV0YS5hdmNMZXZlbEluZGljYXRpb24gPSBkYXRhWzNdIC8gMTBcbiAgICBtZXRhLm5hbFVuaXRMZW5ndGggPSAoZGF0YVs0XSAmIDB4MDMpICsgMVxuXG4gICAgbGV0IG51bU9mU3BzID0gZGF0YVs1XSAmIDB4MWZcbiAgICBvZmZzZXQgPSA2XG4gICAgbGV0IGNvbmZpZyA9IHt9XG5cbiAgICAvLyBwYXJzZSBTUFNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mU3BzOyBpKyspIHtcbiAgICAgIGxldCBzaXplID0gZGF0YVtvZmZzZXRdICogMjU1ICsgZGF0YVtvZmZzZXQgKyAxXVxuICAgICAgb2Zmc2V0ICs9IDJcblxuICAgICAgbGV0IHNwcyA9IG5ldyBVaW50OEFycmF5KHNpemUpXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICBzcHNbal0gPSBkYXRhW29mZnNldCArIGpdXG4gICAgICB9XG5cbiAgICAgIC8vIGNvZGVjIHN0cmluZ1xuICAgICAgbGV0IGNvZGVjU3RyaW5nID0gJ2F2YzEuJ1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA0OyBqKyspIHtcbiAgICAgICAgbGV0IGggPSBzcHNbal0udG9TdHJpbmcoMTYpXG4gICAgICAgIGlmIChoLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICBoID0gJzAnICsgaFxuICAgICAgICB9XG4gICAgICAgIGNvZGVjU3RyaW5nICs9IGhcbiAgICAgIH1cblxuICAgICAgbWV0YS5jb2RlYyA9IGNvZGVjU3RyaW5nXG5cbiAgICAgIG9mZnNldCArPSBzaXplXG4gICAgICB0aGlzLnRyYWNrcy52aWRlb1RyYWNrLm1ldGEuc3BzID0gc3BzXG4gICAgICBjb25maWcgPSBTcHNQYXJzZXIucGFyc2VTUFMoc3BzKVxuICAgIH1cblxuICAgIGxldCBudW1PZlBwcyA9IGRhdGFbb2Zmc2V0XVxuXG4gICAgb2Zmc2V0KytcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZQcHM7IGkrKykge1xuICAgICAgbGV0IHNpemUgPSBkYXRhW29mZnNldF0gKiAyNTUgKyBkYXRhW29mZnNldCArIDFdXG4gICAgICBvZmZzZXQgKz0gMlxuICAgICAgbGV0IHBwcyA9IG5ldyBVaW50OEFycmF5KHNpemUpXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICBwcHNbal0gPSBkYXRhW29mZnNldCArIGpdXG4gICAgICB9XG4gICAgICBvZmZzZXQgKz0gc2l6ZVxuICAgICAgdGhpcy50cmFja3MudmlkZW9UcmFjay5tZXRhLnBwcyA9IHBwc1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24obWV0YSwgU3BzUGFyc2VyLnRvVmlkZW9NZXRhKGNvbmZpZykpXG5cbiAgICAvLyBmaWxsIHZpZGVvIG1lZGlhIGluZm9cbiAgICBjb25zdCB2aWRlb01lZGlhID0gdGhpcy5fY29udGV4dC5tZWRpYUluZm8udmlkZW9cblxuICAgIHZpZGVvTWVkaWEuY29kZWMgPSBtZXRhLmNvZGVjXG4gICAgdmlkZW9NZWRpYS5wcm9maWxlID0gbWV0YS5wcm9maWxlXG4gICAgdmlkZW9NZWRpYS5sZXZlbCA9IG1ldGEubGV2ZWxcbiAgICB2aWRlb01lZGlhLmNocm9tYUZvcm1hdCA9IG1ldGEuY2hyb21hRm9ybWF0XG4gICAgdmlkZW9NZWRpYS5mcmFtZVJhdGUgPSBtZXRhLmZyYW1lUmF0ZVxuICAgIHZpZGVvTWVkaWEucGFyUmF0aW8gPSBtZXRhLnBhclJhdGlvXG4gICAgdmlkZW9NZWRpYS53aWR0aCA9IHZpZGVvTWVkaWEud2lkdGggPT09IG1ldGEucHJlc2VudFdpZHRoID8gdmlkZW9NZWRpYS53aWR0aCA6IG1ldGEucHJlc2VudFdpZHRoXG4gICAgdmlkZW9NZWRpYS5oZWlnaHQgPSB2aWRlb01lZGlhLmhlaWdodCA9PT0gbWV0YS5wcmVzZW50SGVpZ2h0ID8gdmlkZW9NZWRpYS53aWR0aCA6IG1ldGEucHJlc2VudEhlaWdodFxuXG4gICAgbWV0YS5kdXJhdGlvbiA9IHRoaXMuX2NvbnRleHQubWVkaWFJbmZvLmR1cmF0aW9uICogbWV0YS50aW1lc2NhbGVcbiAgICBtZXRhLmF2Y2MgPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aClcbiAgICBtZXRhLmF2Y2Muc2V0KGRhdGEpXG4gICAgdHJhY2subWV0YSA9IG1ldGFcbiAgfVxuXG4gIC8qKlxuICAgKiBjaG9vc2UgYXVkaW8gc2FtcGxlIHJhdGVcbiAgICogQHBhcmFtIHNhbXBsaW5nRnJlcXVlbmN5SW5kZXhcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zd2l0Y2hBdWRpb1NhbXBsZVJhdGUgKHNhbXBsaW5nRnJlcXVlbmN5SW5kZXgpIHtcbiAgICBsZXQgc2FtcGxpbmdGcmVxdWVuY3lMaXN0ID0gWzk2MDAwLCA4ODIwMCwgNjQwMDAsIDQ4MDAwLCA0NDEwMCwgMzIwMDAsIDI0MDAwLCAyMjA1MCwgMTYwMDAsIDEyMDAwLCAxMTAyNSwgODAwMCwgNzM1MF1cbiAgICByZXR1cm4gc2FtcGxpbmdGcmVxdWVuY3lMaXN0W3NhbXBsaW5nRnJlcXVlbmN5SW5kZXhdXG4gIH1cblxuICAvKipcbiAgICogY2hvb3NlIGF1ZGlvIHNhbXBsaW5nIGZyZXF1ZW5jZVxuICAgKiBAcGFyYW0gaW5mb1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3N3aXRjaEF1ZGlvU2FtcGxpbmdGcmVxdWVuY3kgKGluZm8pIHtcbiAgICBsZXQgc2FtcGxpbmdGcmVxdWVuY3lJbmRleCA9IChpbmZvICYgMTIpID4+PiAyXG4gICAgbGV0IHNhbXBsaW5nRnJlcXVlbmN5TGlzdCA9IFs1NTAwLCAxMTAyNSwgMjIwNTAsIDQ0MTAwLCA0ODAwMF1cbiAgICByZXR1cm4gc2FtcGxpbmdGcmVxdWVuY3lMaXN0W3NhbXBsaW5nRnJlcXVlbmN5SW5kZXhdXG4gIH1cblxuICAvKipcbiAgICogY2hvb3NlIGF1ZGlvIGNoYW5uZWwgY291bnRcbiAgICogQHBhcmFtIGluZm9cbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zd2l0Y2hBdWRpb0NoYW5uZWwgKGluZm8pIHtcbiAgICBsZXQgc2FtcGxlVHJhY2tOdW1JbmRleCA9IGluZm8gJiAxXG4gICAgbGV0IHNhbXBsZVRyYWNrTnVtTGlzdCA9IFsxLCAyXVxuICAgIHJldHVybiBzYW1wbGVUcmFja051bUxpc3Rbc2FtcGxlVHJhY2tOdW1JbmRleF1cbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBkYXRhc2l6ZSBpcyB2YWxpZCB1c2UgNCBCeXRlIGFmdGVyIGN1cnJlbnQgdGFnXG4gICAqIEBwYXJhbSBkYXRhc2l6ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9kYXRhc2l6ZVZhbGlkYXRvciAoZGF0YXNpemUpIHtcbiAgICBsZXQgZGF0YXNpemVDb25maXJtID0gdGhpcy5sb2FkZXJCdWZmZXIudG9JbnQoMCwgNClcbiAgICB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCg0KVxuICAgIHJldHVybiBkYXRhc2l6ZUNvbmZpcm0gPT09IGRhdGFzaXplICsgMTFcbiAgfVxuXG4gIGdldCBsb2FkZXJCdWZmZXIgKCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ0xPQURFUl9CVUZGRVInKVxuICAgIGlmIChidWZmZXIpIHtcbiAgICAgIHJldHVybiBidWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgbmV3IEVycm9yKCfmib7kuI3liLAgbG9hZGVyQnVmZmVyIOWunuS+iycpKVxuICAgIH1cbiAgfVxuXG4gIGdldCB0cmFja3MgKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKVxuICB9XG5cbiAgZ2V0IGxvZ2dlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ0xPR0dFUicpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmx2RGVtdXhlclxuIiwiLyoqXG4gKiBSZWZlcmVuY2U6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM4MjE2I3NlY3Rpb24tNC4zXG4gKi9cbmNsYXNzIE0zVThQYXJzZXIge1xuICBzdGF0aWMgcGFyc2UgKHRleHQsIGJhc2V1cmwgPSAnJykge1xuICAgIGxldCByZXQgPSB7XG4gICAgICBkdXJhdGlvbjogMFxuICAgIH07XG4gICAgaWYgKCF0ZXh0IHx8ICF0ZXh0LnNwbGl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByZWZzID0gdGV4dC5zcGxpdCgvXFxyfFxcbi8pO1xuICAgIHJlZnMgPSByZWZzLmZpbHRlcigocmVmKSA9PiB7XG4gICAgICByZXR1cm4gcmVmO1xuICAgIH0pXG4gICAgbGV0IHJlZiA9IHJlZnMuc2hpZnQoKVxuICAgIGlmICghcmVmLm1hdGNoKCcjRVhUTTNVJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtM3U4IGZpbGU6IG5vdCBcIiNFWFRNM1VcImApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJlZiA9IHJlZnMuc2hpZnQoKVxuICAgIHdoaWxlIChyZWYpIHtcbiAgICAgIGxldCByZWZtID0gcmVmLm1hdGNoKC8jKC5bQS1afC1dKik6KC4qKS8pO1xuICAgICAgbGV0IHJlZmQgPSByZWYubWF0Y2goLyMoLltBLVp8LV0qKS8pO1xuICAgICAgaWYgKHJlZmQgJiYgcmVmbSAmJiByZWZtLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgc3dpdGNoIChyZWZtWzFdKSB7XG4gICAgICAgICAgY2FzZSAnRVhULVgtVkVSU0lPTic6XG4gICAgICAgICAgICByZXQudmVyc2lvbiA9IHBhcnNlSW50KHJlZm1bMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnRVhULVgtTUVESUEtU0VRVUVOQ0UnOlxuICAgICAgICAgICAgcmV0LnNlcXVlbmNlID0gcGFyc2VJbnQocmVmbVsyXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdFWFQtWC1UQVJHRVREVVJBVElPTic6XG4gICAgICAgICAgICByZXQudGFyZ2V0ZHVyYXRpb24gPSBwYXJzZUZsb2F0KHJlZm1bMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnRVhUSU5GJzpcbiAgICAgICAgICAgIE0zVThQYXJzZXIucGFyc2VGcmFnKHJlZm0sIHJlZnMsIHJldCwgYmFzZXVybCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdFWFQtWC1LRVknOlxuICAgICAgICAgICAgTTNVOFBhcnNlci5wYXJzZURlY3J5cHQocmVmbVsyXSxyZXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGlmKHJlZmQgJiYgcmVmZC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHN3aXRjaChyZWZkWzFdKSB7XG4gICAgICAgICAgY2FzZSAnRVhULVgtRElTQ09OVElOVUlUWSc6XG4gICAgICAgICAgICByZWYgPSByZWZzLnNoaWZ0KCk7XG4gICAgICAgICAgICBsZXQgcmVmbSA9IHJlZi5tYXRjaCgvIyguW0EtWnwtXSopOiguKikvKTtcbiAgICAgICAgICAgIGlmKHJlZm0ubGVuZ3RoID4yICYmIHJlZm1bMV0gPT09ICdFWFRJTkYnKSB7XG4gICAgICAgICAgICAgIE0zVThQYXJzZXIucGFyc2VGcmFnKHJlZm0sIHJlZnMsIHJldCwgYmFzZXVybCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlZiA9IHJlZnMuc2hpZnQoKVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIHBhcnNlRnJhZyAocmVmbSwgcmVmcywgcmV0LCBiYXNldXJsLCBkaXNjb250aW51ZSkge1xuICAgIGlmICghcmV0LmZyYWdzKSB7XG4gICAgICByZXQuZnJhZ3MgPSBbXVxuICAgIH1cblxuICAgIGxldCBmcmVnID0ge1xuICAgICAgc3RhcnQ6IHJldC5kdXJhdGlvbixcbiAgICAgIGR1cmF0aW9uOiBwYXJzZUZsb2F0KHJlZm1bMl0pICogMTAwMFxuICAgIH1cblxuICAgIHJldC5kdXJhdGlvbiArPSBmcmVnLmR1cmF0aW9uO1xuICAgIGxldCBuZXh0bGluZSA9IHJlZnMuc2hpZnQoKTtcbiAgICBpZiAobmV4dGxpbmUubWF0Y2goLyMoLiopOiguKikvKSkge1xuICAgICAgbmV4dGxpbmUgPSByZWZzLnNoaWZ0KCk7XG4gICAgfVxuICAgIGlmIChuZXh0bGluZS5sZW5ndGggPiAwICYmIG5leHRsaW5lLmNoYXJBdCgwKSA9PT0gJy8nICYmIGJhc2V1cmwubWF0Y2goLy4qXFwvXFwvLipcXC5cXHcrL2cpKSB7XG4gICAgICBiYXNldXJsID0gYmFzZXVybC5tYXRjaCgvLipcXC9cXC8uKlxcLlxcdysvZylbMF07XG4gICAgfVxuICAgIGlmIChuZXh0bGluZS5tYXRjaCgvLio6XFwvXFwvLiovKSkge1xuICAgICAgZnJlZy51cmwgPSBuZXh0bGluZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJlZy51cmwgPSBiYXNldXJsICsgbmV4dGxpbmU7XG4gICAgfVxuICAgIGZyZWcuZGlzY29udGludWUgPSBkaXNjb250aW51ZTtcbiAgICByZXQuZnJhZ3MucHVzaChmcmVnKTtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZVVSTCAodXJsKSB7XG4gICAgbGV0IGJhc2V1cmwgPSAnJztcbiAgICBsZXQgdXJscyA9IHVybC5tYXRjaCgvKC4qXFwvKS4qXFwubTN1OC8pO1xuICAgIGlmICh1cmxzICYmIHVybHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh1cmxzW2ldLm1hdGNoKC8uKlxcLyQvZykgJiYgdXJsc1tpXS5sZW5ndGggPiBiYXNldXJsLmxlbmd0aCkge1xuICAgICAgICAgIGJhc2V1cmwgPSB1cmxzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiYXNldXJsO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlRGVjcnlwdChyZWZtLCByZXQpIHtcbiAgICByZXQuZW5jcnlwdCA9IHt9O1xuICAgIGxldCByZWZzID0gcmVmbS5zcGxpdCgnLCcpO1xuICAgIGZvciAobGV0IGkgaW4gcmVmcykgeyBcbiAgICAgIGxldCBjbWQgPSByZWZzW2ldO1xuICAgICAgaWYoY21kLm1hdGNoKC9NRVRIT0Q9KC4qKS8pKSB7XG4gICAgICAgIHJldC5lbmNyeXB0Lm1ldGhvZCA9IGNtZC5tYXRjaCgvTUVUSE9EPSguKikvKVsxXTtcbiAgICAgIH1cbiAgICAgIGlmKGNtZC5tYXRjaCgvVVJJPVwiKC4qKVwiLykpIHtcbiAgICAgICAgcmV0LmVuY3J5cHQudXJpID0gY21kLm1hdGNoKC9VUkk9XCIoLiopXCIvKVsxXTtcbiAgICAgIH1cblxuICAgICAgaWYoY21kLm1hdGNoKC9JVj0weCguKikvKSkge1xuICAgICAgICBsZXQgaXYgPSBjbWQubWF0Y2goL0lWPTB4KC4qKS8pWzFdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gTWF0aC5jZWlsKGl2Lmxlbmd0aCAvIDIpO1xuICAgICAgICByZXQuZW5jcnlwdC5pdmIgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICAgICAgICBmb3IobGV0IGkgPSBsZW5ndGggLSAxOyBpID49MDsgaS0tKSB7XG4gICAgICAgICAgbGV0IGltID0gcGFyc2VJbnQoaXYuc3Vic3RyKGkgKiAyLCAyKSwgMTYpO1xuICAgICAgICAgIHJldC5lbmNyeXB0Lml2YltpXSA9IGltO1xuICAgICAgICB9IFxuICAgICAgICByZXQuZW5jcnlwdC5pdiA9IGl2O1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTTNVOFBhcnNlcjtcbiIsImltcG9ydCB7IE5hbHVuaXQgfSBmcm9tICd4Z3BsYXllci1jb2RlYyc7XG5pbXBvcnQgeyBBdWRpb1RyYWNrLCBWaWRlb1RyYWNrIH0gZnJvbSAneGdwbGF5ZXItYnVmZmVyJztcbmltcG9ydCB7XG4gIEF1ZGlvVHJhY2tNZXRhLFxuICBWaWRlb1RyYWNrTWV0YSxcbiAgQXVkaW9UcmFja1NhbXBsZSxcbiAgVmlkZW9UcmFja1NhbXBsZSxcbiAgRVZFTlRTLFxuICBTdHJlYW1cbn0gZnJvbSAneGdwbGF5ZXItdXRpbHMnO1xuXG5jb25zdCBERU1VWF9FVkVOVFMgPSBFVkVOVFMuREVNVVhfRVZFTlRTO1xuY29uc3QgU3RyZWFtVHlwZSA9IHtcbiAgMHgwMTogWyd2aWRlbycsICdNUEVHLTEnXSxcbiAgMHgwMjogWyd2aWRlbycsICdNUEVHLTInXSxcbiAgMHgxYjogWyd2aWRlbycsICdBVkMuSDI2NCddLFxuICAweGVhOiBbJ3ZpZGVvJywgJ1ZDLTEnXSxcbiAgMHgwMzogWydhdWRpbycsICdNUEVHLTEnXSxcbiAgMHgwNDogWydhdWRpbycsICdNUEVHLTInXSxcbiAgMHgwZjogWydhdWRpbycsICdNUEVHLTIuQUFDJ10sXG4gIDB4MTE6IFsnYXVkaW8nLCAnTVBFRy00LkFBQyddLFxuICAweDgwOiBbJ2F1ZGlvJywgJ0xQQ00nXSxcbiAgMHg4MTogWydhdWRpbycsICdBQzMnXSxcbiAgMHgwNjogWydhdWRpbycsICdBQzMnXSxcbiAgMHg4MjogWydhdWRpbycsICdEVFMnXSxcbiAgMHg4MzogWydhdWRpbycsICdEb2xieSBUcnVlSEQnXSxcbiAgMHg4NDogWydhdWRpbycsICdBQzMtUGx1cyddLFxuICAweDg1OiBbJ2F1ZGlvJywgJ0RUUy1IRCddLFxuICAweDg2OiBbJ2F1ZGlvJywgJ0RUUy1NQSddLFxuICAweGExOiBbJ2F1ZGlvJywgJ0FDMy1QbHVzLVNFQyddLFxuICAweGEyOiBbJ2F1ZGlvJywgJ0RUUy1IRC1TRUMnXVxufTtcblxuY2xhc3MgVHNEZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZ3MpIHtcbiAgICB0aGlzLmNvbmZpZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWdzKTtcbiAgICB0aGlzLmRlbXV4aW5nID0gZmFsc2U7XG4gICAgdGhpcy5wYXQgPSBbXTtcbiAgICB0aGlzLnBtdCA9IFtdO1xuICAgIHRoaXMuX2hhc1ZpZGVvTWV0YSA9IGZhbHNlO1xuICAgIHRoaXMuX2hhc0F1ZGlvTWV0YSA9IGZhbHNlO1xuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5vbihERU1VWF9FVkVOVFMuREVNVVhfU1RBUlQsIHRoaXMuZGVtdXguYmluZCh0aGlzKSlcbiAgfVxuXG4gIGRlbXV4IChmcmFnKSB7XG4gICAgaWYgKHRoaXMuZGVtdXhpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBidWZmZXIgPSB0aGlzLmlucHV0QnVmZmVyO1xuICAgIGxldCBmcmFncyA9IHsgcGF0OiBbXSwgcG10OiBbXSB9O1xuICAgIGxldCBwZXNlcyA9IHt9O1xuXG4gICAgLy8gUmVhZCBUUyBzZWdtZW50XG4gICAgd2hpbGUgKGJ1ZmZlci5sZW5ndGggPj0gMTg4KSB7XG4gICAgICBpZiAoYnVmZmVyLmxlbmd0aCA+PSAxICYmIGJ1ZmZlci5hcnJheVswXVtidWZmZXIub2Zmc2V0XSAhPT0gNzEpIHtcbiAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcihgVW50cnVzdCBzeW5jIGNvZGU6ICR7YnVmZmVyLmFycmF5WzBdW2J1ZmZlci5vZmZzZXRdfSwgdHJ5IHRvIHJlY292ZXI7YCksIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChidWZmZXIubGVuZ3RoID49IDEgJiYgYnVmZmVyLmFycmF5WzBdW2J1ZmZlci5vZmZzZXRdICE9PSA3MSkge1xuICAgICAgICBidWZmZXIuc2hpZnQoMSk7XG4gICAgICB9XG4gICAgICBsZXQgYnVmID0gYnVmZmVyLnNoaWZ0KDE4OCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhidWYpO1xuICAgICAgbGV0IHRzU3RyZWFtID0gbmV3IFN0cmVhbShidWYuYnVmZmVyKTtcbiAgICAgIGxldCB0cyA9IHt9O1xuICAgICAgVHNEZW11eGVyLnJlYWQodHNTdHJlYW0sIHRzLCBmcmFncyk7XG4gICAgICBpZiAodHMucGVzKSB7XG4gICAgICAgIGlmICghcGVzZXNbdHMuaGVhZGVyLnBpZF0pIHtcbiAgICAgICAgICBwZXNlc1t0cy5oZWFkZXIucGlkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHBlc2VzW3RzLmhlYWRlci5waWRdLnB1c2godHMucGVzKTtcbiAgICAgICAgdHMucGVzLkVTLmJ1ZmZlciA9IFt0cy5wZXMuRVMuYnVmZmVyXTtcbiAgICAgIH0gZWxzZSBpZiAocGVzZXNbdHMuaGVhZGVyLnBpZF0pIHtcbiAgICAgICAgcGVzZXNbdHMuaGVhZGVyLnBpZF1bcGVzZXNbdHMuaGVhZGVyLnBpZF0ubGVuZ3RoIC0gMV0uRVMuYnVmZmVyLnB1c2godHMucGF5bG9hZC5zdHJlYW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBBdWRpb09wdGlvbnMgPSBmcmFnO1xuICAgIGxldCBWaWRlb09wdGlvbnMgPSBmcmFnO1xuXG4gICAgLy8gR2V0IEZyYW1lcyBkYXRhXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhwZXNlcykubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlcGVzZXMgPSBwZXNlc1tPYmplY3Qua2V5cyhwZXNlcylbaV1dO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlcGVzZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZXBlc2VzW2pdLmlkID0gT2JqZWN0LmtleXMocGVzZXMpW2ldO1xuICAgICAgICBlcGVzZXNbal0uRVMuYnVmZmVyID0gVHNEZW11eGVyLk1lcmdlKGVwZXNlc1tqXS5FUy5idWZmZXIpO1xuICAgICAgICBpZiAoZXBlc2VzW2pdLnR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICB0aGlzLnB1c2hBdWRpb1NhbXBsZShlcGVzZXNbal0sIEF1ZGlvT3B0aW9ucyk7XG4gICAgICAgICAgQXVkaW9PcHRpb25zID0ge307XG4gICAgICAgIH0gZWxzZSBpZiAoZXBlc2VzW2pdLnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICB0aGlzLnB1c2hWaWRlb1NhbXBsZShlcGVzZXNbal0sIFZpZGVvT3B0aW9ucyk7XG4gICAgICAgICAgVmlkZW9PcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGFzQXVkaW9NZXRhKSB7XG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0NPTVBMRVRFLCAnYXVkaW8nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc1ZpZGVvTWV0YSkge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9DT01QTEVURSwgJ3ZpZGVvJyk7XG4gICAgfVxuICB9XG5cbiAgcHVzaEF1ZGlvU2FtcGxlIChwZXMsIG9wdGlvbnMpIHtcbiAgICBsZXQgdHJhY2s7XG4gICAgaWYgKCF0aGlzLl90cmFja3MuYXVkaW9UcmFjaykge1xuICAgICAgdGhpcy5fdHJhY2tzLmF1ZGlvVHJhY2sgPSBuZXcgQXVkaW9UcmFjaygpO1xuICAgICAgdHJhY2sgPSB0aGlzLl90cmFja3MuYXVkaW9UcmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhY2sgPSB0aGlzLl90cmFja3MuYXVkaW9UcmFjaztcbiAgICB9XG4gICAgbGV0IG1ldGEgPSBuZXcgQXVkaW9UcmFja01ldGEoe1xuICAgICAgYXVkaW9TYW1wbGVSYXRlOiBwZXMuRVMuZnJlcXVlbmNlLFxuICAgICAgc2FtcGxlUmF0ZTogcGVzLkVTLmZyZXF1ZW5jZSxcbiAgICAgIGNoYW5uZWxDb3VudDogcGVzLkVTLmNoYW5uZWwsXG4gICAgICBjb2RlYzogJ21wNGEuNDAuJyArIHBlcy5FUy5hdWRpb09iamVjdFR5cGUsXG4gICAgICBjb25maWc6IHBlcy5FUy5hdWRpb0NvbmZpZyxcbiAgICAgIGlkOiAyLFxuICAgICAgc2FtcGxlUmF0ZUluZGV4OiBwZXMuRVMuZnJlcXVlbmN5SW5kZXhcbiAgICB9KTtcbiAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gTWF0aC5mbG9vcigxMDI0IC8gbWV0YS5hdWRpb1NhbXBsZVJhdGUgKiBtZXRhLnRpbWVzY2FsZSk7XG5cbiAgICBsZXQgbWV0YUVxdWFsID0gVHNEZW11eGVyLmNvbXBhaXJlTWV0YSh0cmFjay5tZXRhLCBtZXRhLCB0cnVlKTtcblxuICAgIGlmICghdGhpcy5faGFzQXVkaW9NZXRhIHx8ICFtZXRhRXF1YWwpIHtcbiAgICAgIHRyYWNrLm1ldGEgPSBtZXRhO1xuICAgICAgdGhpcy5faGFzQXVkaW9NZXRhID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICdhdWRpbycpO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkocGVzLkVTLmJ1ZmZlci5idWZmZXIuc2xpY2UocGVzLkVTLmJ1ZmZlci5wb3NpdGlvbiwgcGVzLkVTLmJ1ZmZlci5sZW5ndGgpKTtcbiAgICBsZXQgZHRzID0gcGFyc2VJbnQocGVzLnB0cyAvIDkwKTtcbiAgICBsZXQgcHRzID0gcGFyc2VJbnQocGVzLnB0cyAvIDkwKTtcbiAgICBsZXQgc2FtcGxlID0gbmV3IEF1ZGlvVHJhY2tTYW1wbGUoe2R0cywgcHRzLCBkYXRhLCBvcHRpb25zfSk7XG4gICAgdHJhY2suc2FtcGxlcy5wdXNoKHNhbXBsZSk7XG4gIH1cblxuICBwdXNoVmlkZW9TYW1wbGUgKHBlcywgb3B0aW9ucykge1xuICAgIGxldCBuYWxzID0gTmFsdW5pdC5nZXROYWx1bml0cyhwZXMuRVMuYnVmZmVyKTtcbiAgICBsZXQgdHJhY2s7XG4gICAgbGV0IG1ldGEgPSBuZXcgVmlkZW9UcmFja01ldGEoKTtcbiAgICBpZiAoIXRoaXMuX3RyYWNrcy52aWRlb1RyYWNrKSB7XG4gICAgICB0aGlzLl90cmFja3MudmlkZW9UcmFjayA9IG5ldyBWaWRlb1RyYWNrKCk7XG4gICAgICB0cmFjayA9IHRoaXMuX3RyYWNrcy52aWRlb1RyYWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFjayA9IHRoaXMuX3RyYWNrcy52aWRlb1RyYWNrO1xuICAgIH1cbiAgICBsZXQgc2FtcGxlTGVuZ3RoID0gMDtcbiAgICBsZXQgc3BzID0gZmFsc2U7XG4gICAgbGV0IHBwcyA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5hbCA9IG5hbHNbaV07XG4gICAgICBpZiAobmFsLnNwcykge1xuICAgICAgICBzcHMgPSBuYWw7XG4gICAgICAgIHRyYWNrLnNwcyA9IG5hbC5ib2R5O1xuICAgICAgICBtZXRhLmNocm9tYUZvcm1hdCA9IHNwcy5zcHMuY2hyb21hX2Zvcm1hdFxuICAgICAgICBtZXRhLmNvZGVjID0gJ2F2YzEuJztcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICB2YXIgaCA9IHNwcy5ib2R5W2pdLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICBpZiAoaC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBoID0gJzAnICsgaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWV0YS5jb2RlYyArPSBoO1xuICAgICAgICB9XG4gICAgICAgIG1ldGEuY29kZWNIZWlnaHQgPSBzcHMuc3BzLmNvZGVjX3NpemUuaGVpZ2h0O1xuICAgICAgICBtZXRhLmNvZGVjV2lkdGggPSBzcHMuc3BzLmNvZGVjX3NpemUud2lkdGg7XG4gICAgICAgIG1ldGEuZnJhbWVSYXRlID0gc3BzLnNwcy5mcmFtZV9yYXRlO1xuICAgICAgICBtZXRhLmlkID0gMTtcbiAgICAgICAgbWV0YS5sZXZlbCA9IHNwcy5zcHMubGV2ZWxfc3RyaW5nO1xuICAgICAgICBtZXRhLnByZXNlbnRIZWlnaHQgPSBzcHMuc3BzLnByZXNlbnRfc2l6ZS5oZWlnaHQ7XG4gICAgICAgIG1ldGEucHJlc2VudFdpZHRoID0gc3BzLnNwcy5wcmVzZW50X3NpemUud2lkdGg7XG4gICAgICAgIG1ldGEucHJvZmlsZSA9IHNwcy5zcHMucHJvZmlsZV9zdHJpbmc7XG4gICAgICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKG1ldGEudGltZXNjYWxlICogKHNwcy5zcHMuZnJhbWVfcmF0ZS5mcHNfZGVuIC8gc3BzLnNwcy5mcmFtZV9yYXRlLmZwc19udW0pKTtcbiAgICAgICAgbWV0YS5zYXJSYXRpbyA9IHNwcy5zcHMuc2FyX3JhdGlvID8gc3BzLnNwcy5zYXJfcmF0aW8gOiBzcHMuc3BzLnBhcl9yYXRpbztcbiAgICAgIH0gZWxzZSBpZiAobmFsLnBwcykge1xuICAgICAgICB0cmFjay5wcHMgPSBuYWwuYm9keTtcbiAgICAgICAgcHBzID0gbmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2FtcGxlTGVuZ3RoICs9ICg0ICsgbmFsLmJvZHkuYnl0ZUxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNwcyAmJiBwcHMpIHtcbiAgICAgIG1ldGEuYXZjYyA9IE5hbHVuaXQuZ2V0QXZjYyhzcHMuYm9keSwgcHBzLmJvZHkpO1xuICAgICAgbGV0IG1ldGFFcXVhbCA9IFRzRGVtdXhlci5jb21wYWlyZU1ldGEodHJhY2subWV0YSwgbWV0YSwgdHJ1ZSk7XG4gICAgICBpZiAoIXRoaXMuX2hhc1ZpZGVvTWV0YSB8fCAhbWV0YUVxdWFsKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucy5tZXRhID0gT2JqZWN0LmFzc2lnbih7fSwgbWV0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGE6IE9iamVjdC5hc3NpZ24oe30sIG1ldGEpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyYWNrLm1ldGEgPSBtZXRhO1xuICAgICAgICB0aGlzLl9oYXNWaWRlb01ldGEgPSB0cnVlXG4gICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAndmlkZW8nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KHNhbXBsZUxlbmd0aCk7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgbGV0IGlzS2V5ZnJhbWUgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBuYWwgPSBuYWxzW2ldO1xuICAgICAgbGV0IGxlbmd0aCA9IG5hbC5ib2R5LmJ5dGVMZW5ndGg7XG4gICAgICBpZiAobmFsLmlkcikge1xuICAgICAgICBpc0tleWZyYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghbmFsLnBwcyAmJiAhbmFsLnNwcykge1xuICAgICAgICBkYXRhLnNldChuZXcgVWludDhBcnJheShbbGVuZ3RoID4+PiAyNCAmIDB4ZmYsXG4gICAgICAgICAgbGVuZ3RoID4+PiAxNiAmIDB4ZmYsXG4gICAgICAgICAgbGVuZ3RoID4+PiA4ICYgMHhmZixcbiAgICAgICAgICBsZW5ndGggJiAweGZmXG4gICAgICAgIF0pLCBvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgICAgZGF0YS5zZXQobmFsLmJvZHksIG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBsZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzYW1wbGUgPSBuZXcgVmlkZW9UcmFja1NhbXBsZSh7XG4gICAgICBkdHM6IHBhcnNlSW50KHBlcy5kdHMgLyA5MCksXG4gICAgICBwdHM6IHBhcnNlSW50KHBlcy5wdHMgLyA5MCksXG4gICAgICBjdHM6IChwZXMucHRzIC0gcGVzLmR0cykgLyA5MCxcbiAgICAgIG9yaWdpbkR0czogcGVzLmR0cyxcbiAgICAgIGlzS2V5ZnJhbWUsXG4gICAgICBkYXRhLFxuICAgICAgb3B0aW9uc1xuICAgIH0pXG4gICAgdHJhY2suc2FtcGxlcy5wdXNoKHNhbXBsZSk7XG4gIH1cblxuICBkZXN0b3J5ICgpIHtcbiAgICB0aGlzLm9mZihERU1VWF9FVkVOVFMuREVNVVhfU1RBUlQsIHRoaXMuZGVtdXgpO1xuICAgIHRoaXMuY29uZmlncyA9IHt9O1xuICAgIHRoaXMuZGVtdXhpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBhdCA9IFtdO1xuICAgIHRoaXMucG10ID0gW107XG4gICAgdGhpcy5faGFzVmlkZW9NZXRhID0gZmFsc2U7XG4gICAgdGhpcy5faGFzQXVkaW9NZXRhID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgY29tcGFpcmVBcnJheSAoYSwgYiwgdHlwZSkge1xuICAgIGxldCBhbCA9IDA7XG4gICAgbGV0IGJsID0gMDtcbiAgICBpZiAodHlwZSA9PT0gJ1VpbnQ4QXJyYXknKSB7XG4gICAgICBhbCA9IGEuYnl0ZUxlbmd0aDtcbiAgICAgIGJsID0gYi5ieXRlTGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0FycmF5Jykge1xuICAgICAgYWwgPSBhLmxlbmd0aDtcbiAgICAgIGJsID0gYi5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChhbCAhPT0gYmwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsOyBpKyspIHtcbiAgICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgY29tcGFpcmVNZXRhIChhLCBiLCBpZ25vcmVEdXJhdGlvbikge1xuICAgIGlmICghYSB8fCAhYikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBrID0gT2JqZWN0LmtleXMoYSkubGVuZ3RoOyBpIDwgazsgaSsrKSB7XG4gICAgICBsZXQgaXRlbWEgPSBhW09iamVjdC5rZXlzKGEpW2ldXTtcbiAgICAgIGxldCBpdGVtYiA9IGJbT2JqZWN0LmtleXMoYSlbaV1dO1xuICAgICAgaWYgKHR5cGVvZiBpdGVtYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKChpZ25vcmVEdXJhdGlvbiAmJiBPYmplY3Qua2V5cyhhKVtpXSAhPT0gJ2R1cmF0aW9uJyAmJiBPYmplY3Qua2V5cyhhKVtpXSAhPT0gJ3JlZlNhbXBsZUR1cmF0aW9uJyAmJiBPYmplY3Qua2V5cyhhKVtpXSAhPT0gJ3JlZlNhbXBsZUR1cmF0aW9uRml4ZWQnKSAmJiBpdGVtYSAhPT0gaXRlbWIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXRlbWEuYnl0ZUxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpdGVtYi5ieXRlTGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFUc0RlbXV4ZXIuY29tcGFpcmVBcnJheShpdGVtYSwgaXRlbWIsICdVaW50OEFycmF5JykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXRlbWEubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGl0ZW1iLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVHNEZW11eGVyLmNvbXBhaXJlQXJyYXkoaXRlbWEsIGl0ZW1iLCAnQXJyYXknKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFUc0RlbXV4ZXIuY29tcGFpcmVNZXRhKGl0ZW1hLCBpdGVtYikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgTWVyZ2UgKGJ1ZmZlcnMpIHtcbiAgICBsZXQgZGF0YTtcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxlbmd0aCArPSAoYnVmZmVyc1tpXS5sZW5ndGggLSBidWZmZXJzW2ldLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBidWZmZXIgPSBidWZmZXJzW2ldO1xuICAgICAgZGF0YS5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLmJ1ZmZlciwgYnVmZmVyLnBvc2l0aW9uKSwgb2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSBidWZmZXIubGVuZ3RoIC0gYnVmZmVyLnBvc2l0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFN0cmVhbShkYXRhLmJ1ZmZlcik7XG4gIH1cblxuICBzdGF0aWMgcmVhZCAoc3RyZWFtLCB0cywgZnJhZ3MpIHtcbiAgICBUc0RlbXV4ZXIucmVhZEhlYWRlcihzdHJlYW0sIHRzKTtcbiAgICBUc0RlbXV4ZXIucmVhZFBheWxvYWQoc3RyZWFtLCB0cywgZnJhZ3MpO1xuICAgIGlmICh0cy5oZWFkZXIucGFja2V0ID09PSAnTUVESUEnICYmIHRzLmhlYWRlci5wYXlsb2FkID09PSAxICYmICF0cy51bmtub3duUElEcykge1xuICAgICAgdHMucGVzID0gVHNEZW11eGVyLlBFUyh0cyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlYWRQYXlsb2FkIChzdHJlYW0sIHRzLCBmcmFncykge1xuICAgIGxldCBoZWFkZXIgPSB0cy5oZWFkZXJcbiAgICBsZXQgcGlkID0gaGVhZGVyLnBpZDtcbiAgICBzd2l0Y2ggKHBpZCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBUc0RlbXV4ZXIuUEFUKHN0cmVhbSwgdHMsIGZyYWdzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIFRzRGVtdXhlci5DQVQoc3RyZWFtLCB0cywgZnJhZ3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgVHNEZW11eGVyLlRTRFQoc3RyZWFtLCB0cywgZnJhZ3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMHgxZmZmOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIFRPRE86IHNvbWXnmoTlhpnms5XkuI3lpKrlpb3vvIzlvpfmlLlcbiAgICAgICAgaWYgKGZyYWdzLnBhdC5zb21lKChpdGVtKSA9PiB7IHJldHVybiBpdGVtLnBpZCA9PT0gcGlkOyB9KSkge1xuICAgICAgICAgIFRzRGVtdXhlci5QTVQoc3RyZWFtLCB0cywgZnJhZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBzdHMgPSBmcmFncy5wbXQgPyBmcmFncy5wbXQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnBpZCA9PT0gcGlkKSA6IFtdO1xuICAgICAgICAgIGlmIChzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgVHNEZW11eGVyLk1lZGlhKHN0cmVhbSwgdHMsIFN0cmVhbVR5cGVbc3RzWzBdLnN0cmVhbVR5cGVdWzBdKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cy51bmtub3duUElEcyA9IHRydWU7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZWFkSGVhZGVyIChzdHJlYW0sIHRzKSB7XG4gICAgbGV0IGhlYWRlciA9IHt9O1xuICAgIGhlYWRlci5zeW5jID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIGxldCBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICBoZWFkZXIuZXJyb3IgPSBuZXh0ID4+PiAxNTtcbiAgICBoZWFkZXIucGF5bG9hZCA9IG5leHQgPj4+IDE0ICYgMTtcbiAgICBoZWFkZXIucHJpb3JpdHkgPSBuZXh0ID4+PiAxMyAmIDE7XG4gICAgaGVhZGVyLnBpZCA9IG5leHQgJiAweDFmZmY7XG5cbiAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuXG4gICAgaGVhZGVyLnNjcmFtYmxpbmcgPSBuZXh0ID4+IDYgJiAweDM7IC8vIOaYr+WQpuWKoOWvhu+8jDAw6KGo56S65LiN5Yqg5a+GXG5cbiAgICAvKipcbiAgICAgKiAwMCBJU08vSUVD5pyq5p2l5L2/55So5L+d55WZXG4gICAgICogMDEg5rKh5pyJ6LCD5pW05a2X5q6177yM5LuF5ZCr5pyJMTg0QuacieaViOWHgOiNt1xuICAgICAqIDAyIOayoeacieacieaViOWHgOiNt++8jOS7heWQq+aciTE4M0LosIPmlbTlrZfmrrVcbiAgICAgKiAwMyAwfjE4MkLosIPmlbTlrZfmrrXlkI7kuLrmnInmlYjlh4DojbdcbiAgICAgKi9cbiAgICBoZWFkZXIuYWRhcHRhdGlvbiA9IG5leHQgPj4gNCAmIDB4MztcbiAgICBoZWFkZXIuY29udGludWl0eSA9IG5leHQgJiAxNTtcbiAgICBoZWFkZXIucGFja2V0ID0gaGVhZGVyLnBpZCA9PT0gMCA/ICdQQVQnIDogJ01FRElBJztcbiAgICB0cy5oZWFkZXIgPSBoZWFkZXI7XG4gIH1cblxuICBzdGF0aWMgUEFUIChzdHJlYW0sIHRzLCBmcmFncykge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBsZXQgbmV4dCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICBzdHJlYW0uc2tpcChuZXh0KTtcbiAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHJldC50YWJlbElEID0gbmV4dDtcbiAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICByZXQuZXJyb3IgPSBuZXh0ID4+PiA3O1xuICAgIHJldC56ZXJvID0gbmV4dCA+Pj4gNiAmIDE7XG4gICAgcmV0LnNlY3Rpb25MZW5ndGggPSBuZXh0ICYgMHhmZmY7XG4gICAgcmV0LnN0cmVhbUlEID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICByZXQuY3VycmVudCA9IHN0cmVhbS5yZWFkVWludDgoKSAmIDE7XG4gICAgcmV0LnNlY3Rpb25OdW1iZXIgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgcmV0Lmxhc3RTZWN0aW9uTnVtYmVyID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIGxldCBOID0gKHJldC5zZWN0aW9uTGVuZ3RoIC0gOSkgLyA0O1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgIGxldCBwcm9ncmFtTnVtYmVyID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICAgIGxldCBwaWQgPSBzdHJlYW0ucmVhZFVpbnQxNigpICYgMHgxZmZmO1xuICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgcHJvZ3JhbTogcHJvZ3JhbU51bWJlcixcbiAgICAgICAgcGlkLFxuICAgICAgICB0eXBlOiBwcm9ncmFtTnVtYmVyID09PSAwID8gJ25ldHdvcmsnIDogJ21hcFBJRCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBmcmFncy5wYXQgPSBmcmFncy5wYXQuY29uY2F0KGxpc3QpO1xuICAgIH1cbiAgICByZXQubGlzdCA9IGxpc3Q7XG4gICAgcmV0LnByb2dyYW0gPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgIHJldC5waWQgPSBzdHJlYW0ucmVhZFVpbnQxNigpICYgMHgxZmZmO1xuICAgIHRzLnBheWxvYWQgPSByZXQ7XG4gICAgLy8gVE9ETyBDUkNcbiAgfVxuXG4gIHN0YXRpYyBQTVQgKHN0cmVhbSwgdHMsIGZyYWdzKSB7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGxldCBoZWFkZXIgPSB0cy5oZWFkZXI7XG4gICAgaGVhZGVyLnBhY2tldCA9ICdQTVQnO1xuICAgIGxldCBuZXh0ID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHN0cmVhbS5za2lwKG5leHQpO1xuICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgcmV0LnRhYmxlSUQgPSBuZXh0O1xuICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgIHJldC5zZWN0aW9uTGVuZ3RoID0gbmV4dCAmIDB4ZmZmO1xuICAgIHJldC5wcm9ncmFtID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICByZXQuY3VycmVudCA9IHN0cmVhbS5yZWFkVWludDgoKSAmIDE7XG4gICAgcmV0Lm9yZGVyID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHJldC5sYXN0T3JkZXIgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgcmV0LlBDUl9QSUQgPSBzdHJlYW0ucmVhZFVpbnQxNigpICYgMHgxZmZmO1xuICAgIHJldC5wcm9ncmFtTGVuZ3RoID0gc3RyZWFtLnJlYWRVaW50MTYoKSAmIDB4ZmZmO1xuICAgIGxldCBOID0gKHJldC5zZWN0aW9uTGVuZ3RoIC0gMTMpIC8gNTtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICBsaXN0LnB1c2goe1xuICAgICAgICBzdHJlYW1UeXBlOiBzdHJlYW0ucmVhZFVpbnQ4KCksXG4gICAgICAgIHBpZDogc3RyZWFtLnJlYWRVaW50MTYoKSAmIDB4MWZmZiwgLy8gMHgwN2U1IOinhumike+8jDB4MDdlNlxuICAgICAgICBlczogc3RyZWFtLnJlYWRVaW50MTYoKSAmIDB4ZmZmXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0Lmxpc3QgPSBsaXN0O1xuICAgIGlmICghdGhpcy5wbXQpIHtcbiAgICAgIHRoaXMucG10ID0gW107XG4gICAgfVxuICAgIGZyYWdzLnBtdCA9IHRoaXMucG10LmNvbmNhdChsaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGlkOiBpdGVtLnBpZCxcbiAgICAgICAgZXM6IGl0ZW0uZXMsXG4gICAgICAgIHN0cmVhbVR5cGU6IGl0ZW0uc3RyZWFtVHlwZSxcbiAgICAgICAgcHJvZ3JhbTogcmV0LnByb2dyYW1cbiAgICAgIH07XG4gICAgfSkpO1xuICAgIHRzLnBheWxvYWQgPSByZXQ7XG4gIH1cblxuICBzdGF0aWMgTWVkaWEgKHN0cmVhbSwgdHMsIHR5cGUpIHtcbiAgICBsZXQgaGVhZGVyID0gdHMuaGVhZGVyO1xuICAgIGxldCBwYXlsb2FkID0ge307XG4gICAgaGVhZGVyLnR5cGUgPSB0eXBlO1xuICAgIGlmIChoZWFkZXIuYWRhcHRhdGlvbiA9PT0gMHgwMykge1xuICAgICAgcGF5bG9hZC5hZGFwdGF0aW9uTGVuZ3RoID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgaWYgKHBheWxvYWQuYWRhcHRhdGlvbkxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG5leHQgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgICAgIHBheWxvYWQuZGlzY29udGludWUgPSBuZXh0ID4+PiA3O1xuICAgICAgICBwYXlsb2FkLmFjY2VzcyA9IG5leHQgPj4+IDYgJiAweDAxO1xuICAgICAgICBwYXlsb2FkLnByaW9yaXR5ID0gbmV4dCA+Pj4gNSAmIDB4MDE7XG4gICAgICAgIHBheWxvYWQuUENSID0gbmV4dCA+Pj4gNCAmIDB4MDE7XG4gICAgICAgIHBheWxvYWQuT1BDUiA9IG5leHQgPj4+IDMgJiAweDAxO1xuICAgICAgICBwYXlsb2FkLnNwbGljZVBvaW50ID0gbmV4dCA+Pj4gMiAmIDB4MDE7XG4gICAgICAgIHBheWxvYWQudHJhbnNwb3J0UHJpdmF0ZSA9IG5leHQgPj4+IDEgJiAweDAxO1xuICAgICAgICBwYXlsb2FkLmFkYXB0YXRpb25GaWVsZCA9IG5leHQgJiAweDAxO1xuICAgICAgICBsZXQgX3N0YXJ0ID0gc3RyZWFtLnBvc2l0aW9uO1xuICAgICAgICBpZiAocGF5bG9hZC5QQ1IgPT09IDEpIHtcbiAgICAgICAgICBwYXlsb2FkLnByb2dyYW1DbG9ja0Jhc2UgPSBzdHJlYW0ucmVhZFVpbnQzMigpIDw8IDE7XG4gICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgICAgICAgcGF5bG9hZC5wcm9ncmFtQ2xvY2tCYXNlIHw9IG5leHQgPj4+IDE1O1xuICAgICAgICAgIHBheWxvYWQucHJvZ3JhbUNsb2NrRXh0ZW5zaW9uID0gbmV4dCAmIDB4MWZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXlsb2FkLk9QQ1IgPT09IDEpIHtcbiAgICAgICAgICBwYXlsb2FkLm9yaWdpblByb2dyYW1DbG9ja0Jhc2UgPSBzdHJlYW0ucmVhZFVpbnQzMigpIDw8IDE7XG4gICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgICAgICAgcGF5bG9hZC5vcmlnaW5Qcm9ncmFtQ2xvY2tCYXNlICs9IG5leHQgPj4+IDE1O1xuICAgICAgICAgIHBheWxvYWQub3JpZ2luUHJvZ3JhbUNsb2NrRXh0ZW5zaW9uID0gbmV4dCAmIDB4MWZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXlsb2FkLnNwbGljZVBvaW50ID09PSAxKSB7XG4gICAgICAgICAgcGF5bG9hZC5zcGxpY2VDb3VudGRvd24gPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBheWxvYWQudHJhbnNwb3J0UHJpdmF0ZSA9PT0gMSkge1xuICAgICAgICAgIGxldCBsZW5ndGggPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgbGV0IHRyYW5zcG9ydFByaXZhdGVEYXRhID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJhbnNwb3J0UHJpdmF0ZURhdGEucHVzaChzdHJlYW0ucmVhZFVpbnQ4KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5bG9hZC5hZGFwdGF0aW9uRmllbGQgPT09IDEpIHtcbiAgICAgICAgICBsZXQgbGVuZ3RoID0gc3RyZWFtLnJlYWRVaW50OCgpXG4gICAgICAgICAgbGV0IG5leHQgPSBzdHJlYW0ucmVhZFVpbnQ4KClcbiAgICAgICAgICBsZXQgc3RhcnQgPSBzdHJlYW0ucG9zaXRpb247XG4gICAgICAgICAgbGV0IGx0dyA9IG5leHQgPj4+IDc7XG4gICAgICAgICAgbGV0IHBpZWNld2lzZSA9IG5leHQgPj4+IDYgJiAweDE7XG4gICAgICAgICAgbGV0IHNlYW1sZXNzID0gbmV4dCA+Pj4gNSAmIDB4MTtcbiAgICAgICAgICBpZiAobHR3ID09PSAxKSB7XG4gICAgICAgICAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICAgIHBheWxvYWQubHR3VmFsaWQgPSBuZXh0ID4+PiAxNTtcbiAgICAgICAgICAgIHBheWxvYWQubHR3T2Zmc2V0ID0gbmV4dCAmIDB4ZWZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBpZWNld2lzZSA9PT0gMSkge1xuICAgICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDI0KCk7XG4gICAgICAgICAgICBwYXlsb2FkLnBpZWNld2lzZVJhdGUgPSBuZXh0ICYgMHgzZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZWFtbGVzcyA9PT0gMSkge1xuICAgICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkSW50OCgpO1xuICAgICAgICAgICAgcGF5bG9hZC5zcGxpY2VUeXBlID0gbmV4dCA+Pj4gNDtcbiAgICAgICAgICAgIHBheWxvYWQuZHRzTmV4dEFVMSA9IG5leHQgPj4+IDEgJiAweDc7XG4gICAgICAgICAgICBwYXlsb2FkLm1hcmtlcjEgPSBuZXh0ICYgMHgxO1xuICAgICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgICAgICAgICBwYXlsb2FkLmR0c05leHRBVTIgPSBuZXh0ID4+PiAxO1xuICAgICAgICAgICAgcGF5bG9hZC5tYXJrZXIyID0gbmV4dCAmIDB4MTtcbiAgICAgICAgICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgICAgICAgICAgcGF5bG9hZC5kdHNOZXh0QVUzID0gbmV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RyZWFtLnNraXAobGVuZ3RoIC0gMSAtIChzdHJlYW0ucG9zaXRpb24gLSBzdGFydCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsYXN0U3R1ZmZpbmcgPSBwYXlsb2FkLmFkYXB0YXRpb25MZW5ndGggLSAxIC0gKHN0cmVhbS5wb3NpdGlvbiAtIF9zdGFydCk7XG4gICAgICAgIHN0cmVhbS5za2lwKGxhc3RTdHVmZmluZyk7XG4gICAgICB9XG4gICAgfVxuICAgIHBheWxvYWQuc3RyZWFtID0gbmV3IFN0cmVhbShzdHJlYW0uYnVmZmVyLnNsaWNlKHN0cmVhbS5wb3NpdGlvbikpO1xuICAgIHRzLnBheWxvYWQgPSBwYXlsb2FkO1xuICB9XG5cbiAgc3RhdGljIFBFUyAodHMpIHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgbGV0IGJ1ZmZlciA9IHRzLnBheWxvYWQuc3RyZWFtO1xuXG4gICAgbGV0IG5leHQgPSBidWZmZXIucmVhZFVpbnQyNCgpO1xuICAgIGlmIChuZXh0ICE9PSAxKSB7XG4gICAgICByZXQuRVMgPSB7fTtcbiAgICAgIHJldC5FUy5idWZmZXIgPSBidWZmZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdHJlYW1JRCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgIGlmIChzdHJlYW1JRCA+PSAweGUwICYmIHN0cmVhbUlEIDw9IDB4ZWYpIHtcbiAgICAgICAgcmV0LnR5cGUgPSAndmlkZW8nO1xuICAgICAgfVxuICAgICAgaWYgKHN0cmVhbUlEID49IDB4YzAgJiYgc3RyZWFtSUQgPD0gMHhkZikge1xuICAgICAgICByZXQudHlwZSA9ICdhdWRpbyc7XG4gICAgICB9XG4gICAgICBsZXQgcGFja2V0TGVuZ3RoID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgIHJldC5wYWNrZXRMZW5ndGggPSBwYWNrZXRMZW5ndGg7XG4gICAgICBpZiAocmV0LnR5cGUgPT09ICd2aWRlbycgfHwgcmV0LnR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgICAgbGV0IG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgIGxldCBmaXJzdCA9IG5leHQgPj4+IDY7XG4gICAgICAgIGlmIChmaXJzdCAhPT0gMHgwMikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3Igd2hlbiBwYXJzZSBwZXMgaGVhZGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgICAgcmV0LnB0c0RUU0ZsYWcgPSBuZXh0ID4+PiA2O1xuICAgICAgICByZXQuZXNjckZsYWcgPSBuZXh0ID4+PiA1ICYgMHgwMTtcbiAgICAgICAgcmV0LmVzUmF0ZUZsYWcgPSBuZXh0ID4+PiA0ICYgMHgwMTtcbiAgICAgICAgcmV0LmRzbUZsYWcgPSBuZXh0ID4+PiAzICYgMHgwMTtcbiAgICAgICAgcmV0LmFkZGl0aW9uYWxGbGFnID0gbmV4dCA+Pj4gMiAmIDB4MDE7XG4gICAgICAgIHJldC5jcmNGbGFnID0gbmV4dCA+Pj4gMSAmIDB4MDE7XG4gICAgICAgIHJldC5leHRlbnNpb25GbGFnID0gbmV4dCAmIDB4MDE7XG4gICAgICAgIHJldC5wZXNIZWFkZXJMZW5ndGggPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgIGxldCBOMSA9IHJldC5wZXNIZWFkZXJMZW5ndGg7XG5cbiAgICAgICAgaWYgKHJldC5wdHNEVFNGbGFnID09PSAyKSB7XG4gICAgICAgICAgbGV0IHB0cyA9IFtdO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgcHRzLnB1c2gobmV4dCA+Pj4gMSAmIDB4MDcpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIHB0cy5wdXNoKG5leHQgPj4+IDEpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIHB0cy5wdXNoKG5leHQgPj4+IDEpO1xuICAgICAgICAgIHJldC5wdHMgPSAocHRzWzBdIDw8IDMwIHwgcHRzWzFdIDw8IDE1IHwgcHRzWzJdKTtcbiAgICAgICAgICBOMSAtPSA1O1xuICAgICAgICAgIC8vIOinhumikeWmguaenOayoeaciWR0c+eUqHB0c1xuICAgICAgICAgIGlmIChyZXQudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgcmV0LmR0cyA9IHJldC5wdHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXQucHRzRFRTRmxhZyA9PT0gMykge1xuICAgICAgICAgIGxldCBwdHMgPSBbXTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50OCgpO1xuICAgICAgICAgIHB0cy5wdXNoKG5leHQgPj4+IDEgJiAweDA3KTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBwdHMucHVzaChuZXh0ID4+PiAxKTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBwdHMucHVzaChuZXh0ID4+PiAxKTtcbiAgICAgICAgICByZXQucHRzID0gKHB0c1swXSA8PCAzMCB8IHB0c1sxXSA8PCAxNSB8IHB0c1syXSk7XG4gICAgICAgICAgbGV0IGR0cyA9IFtdO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgZHRzLnB1c2gobmV4dCA+Pj4gMSAmIDB4MDcpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIGR0cy5wdXNoKG5leHQgPj4+IDEpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIGR0cy5wdXNoKG5leHQgPj4+IDEpO1xuICAgICAgICAgIHJldC5kdHMgPSAoZHRzWzBdIDw8IDMwIHwgZHRzWzFdIDw8IDE1IHwgZHRzWzJdKTtcbiAgICAgICAgICBOMSAtPSAxMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV0LmVzY3JGbGFnID09PSAxKSB7XG4gICAgICAgICAgbGV0IGVzY3IgPSBbXVxuICAgICAgICAgIGxldCBleCA9IFtdO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgZXNjci5wdXNoKG5leHQgPj4+IDMgJiAweDA3KTtcbiAgICAgICAgICBlc2NyLnB1c2gobmV4dCAmIDB4MDMpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIGVzY3IucHVzaChuZXh0ID4+PiAxMyk7XG4gICAgICAgICAgZXNjci5wdXNoKG5leHQgJiAweDAzKTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBlc2NyLnB1c2gobmV4dCA+Pj4gMTMpO1xuICAgICAgICAgIGV4LnB1c2gobmV4dCAmIDB4MDMpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgZXgucHVzaChuZXh0ID4+PiAxKTtcbiAgICAgICAgICByZXQuZXNjciA9IChlc2NyWzBdIDw8IDMwIHwgZXNjclsxXSA8PCAyOCB8IGVzY3JbMl0gPDwgMTUgfCBlc2NyWzNdIDw8IDEzIHwgZXNjcls0XSkgKiAzMDAgKyAoZXhbMF0gPDwgNyB8IGV4WzFdKTtcbiAgICAgICAgICBOMSAtPSA2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXQuZXNSYXRlRmxhZyA9PT0gMSkge1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQyNCgpO1xuICAgICAgICAgIHJldC5lc1JhdGUgPSBuZXh0ID4+PiAxICYgMHgzZmZmZmY7XG4gICAgICAgICAgTjEgLT0gMztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV0LmRzbUZsYWcgPT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBzdXBwb3J0IERTTV90cmlja19tb2RlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldC5hZGRpdGlvbmFsRmxhZyA9PT0gMSkge1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgcmV0LmFkZGl0aW9uYWxDb3B5SW5mbyA9IG5leHQgJiAweDdmO1xuICAgICAgICAgIE4xIC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldC5jcmNGbGFnID09PSAxKSB7XG4gICAgICAgICAgcmV0LnBlc0NSQyA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICAgICAgTjEgLT0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV0LmV4dGVuc2lvbkZsYWcgPT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBzdXBwb3J0IGV4dGVuc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOMSA+IDApIHtcbiAgICAgICAgICBidWZmZXIuc2tpcChOMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0LkVTID0gVHNEZW11eGVyLkVTKGJ1ZmZlciwgcmV0LnR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmb3JtYXQgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIEVTIChidWZmZXIsIHR5cGUpIHtcbiAgICBsZXQgbmV4dDtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgaWYgKHR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQzMigpO1xuICAgICAgaWYgKG5leHQgIT09IDEpIHtcbiAgICAgICAgYnVmZmVyLmJhY2soNCk7XG4gICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQyNCgpO1xuICAgICAgICBpZiAobmV4dCAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaDI2NCBuYWwgaGVhZGVyIHBhcnNlIGZhaWxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBidWZmZXIuc2tpcCgyKTsvLyAwOSBGMFxuICAgICAgLy8gVE9ETyByZWFkbmFsdVxuICAgICAgcmV0LmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgLy8gYWR0c+eahOWQjOatpeWtl+iKgu+8jDEy5L2NXG4gICAgICBpZiAobmV4dCA+Pj4gNCAhPT0gMHhmZmYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhYWMgRVMgcGFyc2UgRXJyb3InKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZxID0gWzk2MDAwLCA4ODIwMCwgNjQwMDAsIDQ4MDAwLCA0NDEwMCwgMzIwMDAsIDI0MDAwLCAyMjA1MCwgMTYwMDAsIDEyMDAwLCAxMTAyNSwgODAwMCwgNzM1MF07XG4gICAgICByZXQuaWQgPSAobmV4dCA+Pj4gMyAmIDB4MDEpID09PSAwID8gJ01QRUctNCcgOiAnTVBFRy0yJztcbiAgICAgIHJldC5sYXllciA9IG5leHQgPj4+IDEgJiAweDAzO1xuICAgICAgcmV0LmFic2VudCA9IG5leHQgJiAweDAxO1xuICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gKG5leHQgPj4+IDE0ICYgMHgwMykgKyAxO1xuICAgICAgcmV0LnByb2ZpbGUgPSByZXQuYXVkaW9PYmplY3RUeXBlIC0gMTtcbiAgICAgIHJldC5mcmVxdWVuY3lJbmRleCA9IG5leHQgPj4+IDEwICYgMHgwZjtcbiAgICAgIHJldC5mcmVxdWVuY2UgPSBmcVtyZXQuZnJlcXVlbmN5SW5kZXhdO1xuICAgICAgcmV0LmNoYW5uZWwgPSBuZXh0ID4+PiA2ICYgMHgwNztcbiAgICAgIHJldC5mcmFtZUxlbmd0aCA9IChuZXh0ICYgMHgwMykgPDwgMTEgfCAoYnVmZmVyLnJlYWRVaW50MTYoKSA+Pj4gNSk7XG4gICAgICBUc0RlbXV4ZXIuZ2V0QXVkaW9Db25maWcocmV0KTtcbiAgICAgIGJ1ZmZlci5za2lwKDEpO1xuICAgICAgcmV0LmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUyAke3R5cGV9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIFRTRFQgKHN0cmVhbSwgdHMsIGZyYWdzKSB7XG4gICAgLy8gVE9ET1xuICAgIHRzLnBheWxvYWQgPSB7fTtcbiAgfVxuXG4gIHN0YXRpYyBDQVQgKHN0cmVhbSwgdHMsIGZyYWdzKSB7XG4gICAgbGV0IHJldCA9IHt9XG4gICAgcmV0LnRhYmxlSUQgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgbGV0IG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgIHJldC5zZWN0aW9uSW5kaWNhdG9yID0gbmV4dCA+Pj4gNztcbiAgICByZXQuc2VjdGlvbkxlbmd0aCA9IG5leHQgJiAweDBmZmY7XG4gICAgc3RyZWFtLnNraXAoMik7XG4gICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICByZXQudmVyc2lvbiA9IG5leHQgPj4+IDM7XG4gICAgcmV0LmN1cnJlbnROZXh0SW5kaWNhdG9yID0gbmV4dCAmIDB4MDE7XG4gICAgcmV0LnNlY3Rpb25OdW1iZXIgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgcmV0Lmxhc3RTZWN0aW9uTnVtYmVyID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIGxldCBOID0gKHRoaXMuc2VjdGlvbkxlbmd0aCAtIDkpIC8gNDtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICBsaXN0LnB1c2goe30pO1xuICAgIH1cbiAgICByZXQuY3JjMzIgPSBzdHJlYW0ucmVhZFVpbnQzMigpO1xuICAgIHRzLnBheWxvYWQgPSByZXQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0QXVkaW9Db25maWcgKHJldCkge1xuICAgIGxldCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcbiAgICBsZXQgY29uZmlnO1xuICAgIGxldCBleHRlbnNpb25TYW1wbGVJbmRleDtcbiAgICBpZiAoL2ZpcmVmb3gvaS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgIGlmIChyZXQuZnJlcXVlbmN5SW5kZXggPj0gNikge1xuICAgICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gNTtcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDQpO1xuICAgICAgICBleHRlbnNpb25TYW1wbGVJbmRleCA9IHJldC5mcmVxdWVuY3lJbmRleCAtIDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gMjtcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpO1xuICAgICAgICBleHRlbnNpb25TYW1wbGVJbmRleCA9IHJldC5mcmVxdWVuY3lJbmRleDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgIT09IC0xKSB7XG4gICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gMjtcbiAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKTtcbiAgICAgIGV4dGVuc2lvblNhbXBsZUluZGV4ID0gcmV0LmZyZXF1ZW5jeUluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gNTtcbiAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSg0KTtcbiAgICAgIGlmIChyZXQuZnJlcXVlbmN5SW5kZXggPj0gNikge1xuICAgICAgICBleHRlbnNpb25TYW1wbGVJbmRleCA9IHJldC5mcmVxdWVuY3lJbmRleCAtIDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmV0LmNoYW5uZWwgPT09IDEpIHtcbiAgICAgICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gMjtcbiAgICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoMik7XG4gICAgICAgIH1cbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxlSW5kZXggPSByZXQuZnJlcXVlbmN5SW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnWzBdID0gcmV0LmF1ZGlvT2JqZWN0VHlwZSA8PCAzO1xuICAgIGNvbmZpZ1swXSB8PSAocmV0LmZyZXF1ZW5jeUluZGV4ICYgMHgwZSkgPj4gMTtcbiAgICBjb25maWdbMV0gPSAocmV0LmZyZXF1ZW5jeUluZGV4ICYgMHgwMSkgPDwgNztcbiAgICBjb25maWdbMV0gfD0gcmV0LmNoYW5uZWwgPDwgMztcbiAgICBpZiAocmV0LmF1ZGlvT2JqZWN0VHlwZSA9PT0gNSkge1xuICAgICAgY29uZmlnWzFdIHw9IChleHRlbnNpb25TYW1wbGVJbmRleCAmIDB4MGUpID4+IDE7XG4gICAgICBjb25maWdbMl0gPSAoZXh0ZW5zaW9uU2FtcGxlSW5kZXggJiAweDAxKSA8PCA3O1xuICAgICAgY29uZmlnWzJdIHw9IDIgPDwgMjtcbiAgICAgIGNvbmZpZ1szXSA9IDA7XG4gICAgfVxuICAgIHJldC5hdWRpb0NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGdldCBpbnB1dEJ1ZmZlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UodGhpcy5jb25maWdzLmlucHV0YnVmZmVyKTtcbiAgfVxuXG4gIGdldCBfdHJhY2tzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHNEZW11eGVyO1xuIiwiY2xhc3MgUGxheWxpc3Qge1xuICBjb25zdHJ1Y3RvciAoY29uZmlncykge1xuICAgIHRoaXMuX2Jhc2VVUkwgPSAnJztcbiAgICB0aGlzLl9saXN0ID0ge307XG4gICAgdGhpcy5fdHMgPSB7fTtcbiAgICB0aGlzLnZlcnNpb24gPSAwO1xuICAgIHRoaXMuc2VxdWVuY2UgPSAtMTtcbiAgICB0aGlzLnRhcmdldGR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmZyYWdMZW5ndGggPSAwO1xuICAgIHRoaXMuX2xhc3RnZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fYXVkb2NsZWFyID0gY29uZmlncy5hdXRvY2xlYXIgfHwgZmFsc2U7XG4gIH1cblxuICBnZXQgbGlzdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3Q7XG4gIH1cblxuICBzZXQgYmFzZVVSTCAoYmFzZVVSTCkge1xuICAgIGlmICh0aGlzLmJhc2VVUkwgIT09IGJhc2VVUkwpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHRoaXMuX2Jhc2VVUkwgPSBiYXNlVVJMO1xuICAgIH1cbiAgfVxuXG4gIGdldCBiYXNlVVJMICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZVVSTDtcbiAgfVxuXG4gIHB1c2ggKHRzLCBkdXJhdGlvbiwgZGlzY29udGludWUpIHtcbiAgICBpZiAoIXRoaXMuX3RzW3RzXSkge1xuICAgICAgdGhpcy5fdHNbdHNdID0ge2R1cmF0aW9uOiBkdXJhdGlvbiwgXG4gICAgICAgIGRvd25sb2FkZWQ6IGZhbHNlLCBcbiAgICAgICAgZG93bmxvYWRpbmc6IGZhbHNlLCBcbiAgICAgICAgc3RhcnQ6IHRoaXMuZHVyYXRpb24sIFxuICAgICAgICBkaXNjb250aW51ZTogZGlzY29udGludWUgPyB0cnVlOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHRoaXMuX2xpc3RbdGhpcy5kdXJhdGlvbl0gPSB0cztcbiAgICAgIHRoaXMuZHVyYXRpb24gKz0gZHVyYXRpb247XG4gICAgICB0aGlzLmZyYWdMZW5ndGggKz0gMTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVGcmFnICh1cmwpIHtcbiAgICBpZiAodGhpcy5fdHNbdXJsXSkge1xuICAgICAgaWYgKHRoaXMuX3RzW3VybF0uc3RhcnQgPiB0aGlzLl9sYXN0Z2V0LnRpbWUpIHtcbiAgICAgICAgdGhpcy5fbGFzdGdldCA9IHtcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5fdHNbdXJsXS5kdXJhdGlvbixcbiAgICAgICAgICB0aW1lOiB0aGlzLl90c1t1cmxdLnN0YXJ0LFxuICAgICAgICAgIGRvd25sb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgIGRvd25sb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICB1cmw6IHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5fbGlzdFt0aGlzLl90c1t1cmxdLnN0YXJ0XTtcbiAgICAgIGRlbGV0ZSB0aGlzLl90c1t1cmxdO1xuICAgICAgdGhpcy5mcmFnTGVuZ3RoIC09IDE7XG4gICAgfVxuICB9XG5cbiAgcHVzaE0zVTggKGRhdGEsIGRlbGV0ZXByZSkge1xuICAgIC8vIOW4uOinhOS/oeaBr+abv+aNolxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBtM3U4IGRhdGEgcmVjZWl2ZWQuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmVyc2lvbiA9IGRhdGEudmVyc2lvbjtcbiAgICB0aGlzLnRhcmdldGR1cmF0aW9uID0gZGF0YS50YXJnZXRkdXJhdGlvbjtcbiAgICBpZihkYXRhLmVuY3J5cHQgJiYgIXRoaXMuZW5jcnlwdCkge1xuICAgICAgdGhpcy5lbmNyeXB0ID0gZGF0YS5lbmNyeXB0O1xuICAgIH1cbiAgICAvLyDmlrDliIbniYfkv6Hmga9cbiAgICBpZiAoZGF0YS5zZXF1ZW5jZSA+IHRoaXMuc2VxdWVuY2UpIHtcbiAgICAgIHRoaXMuc2VxdWVuY2UgPSBkYXRhLnNlcXVlbmNlO1xuICAgICAgbGV0IG5ld2ZyYWdsaXN0ID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5mcmFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZnJhZyA9IGRhdGEuZnJhZ3NbaV07XG4gICAgICAgIGlmICghdGhpcy5fdHNbZnJhZy51cmxdKSB7XG4gICAgICAgICAgbmV3ZnJhZ2xpc3QucHVzaChmcmFnLnVybClcbiAgICAgICAgICB0aGlzLnB1c2goZnJhZy51cmwsIGZyYWcuZHVyYXRpb24sIGZyYWcuZGlzY29udGludWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKG5ld2ZyYWdsaXN0Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4gbm90IHJlYWQgdHMgZmlsZSBsaXN0LmApO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoZGVsZXRlcHJlKSB7XG4gICAgICAgIGxldCB0c2xpc3QgPSB0aGlzLmdldFRzTGlzdCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRzbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdmcmFnbGlzdC5pbmRleE9mKHRzbGlzdFtpXSkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUZyYWcodHNsaXN0W2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPbGQgbTN1OCBmaWxlIHJlY2VpdmVkLCAke2RhdGEuc2VxdWVuY2V9YCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VHNMaXN0ICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fdHMpO1xuICB9XG5cbiAgZG93bmxvYWRlZCAodHNuYW1lLCBpc2xvYWRlZCkge1xuICAgIGxldCB0cyA9IHRoaXMuX3RzW3RzbmFtZV07XG4gICAgaWYgKHRzKSB7XG4gICAgICB0cy5kb3dubG9hZGVkID0gaXNsb2FkZWRcbiAgICB9XG4gIH1cblxuICBkb3dubG9hZGluZyAodHNuYW1lLCBsb2FkaW5nKSB7XG4gICAgbGV0IHRzID0gdGhpcy5fdHNbdHNuYW1lXTtcbiAgICBpZiAodHMpIHtcbiAgICAgIHRzLmRvd25sb2FkaW5nID0gbG9hZGluZ1xuICAgIH1cbiAgfVxuXG4gIGdldFRzQnlOYW1lIChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RzW25hbWVdO1xuICB9XG5cbiAgZ2V0VHMgKHRpbWUpIHtcbiAgICBsZXQgdGltZWxpc3QgPSBPYmplY3Qua2V5cyh0aGlzLl9saXN0KTtcbiAgICBsZXQgdHM7XG5cbiAgICBpZiAodGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fbGFzdGdldCkge1xuICAgICAgICB0aW1lID0gdGhpcy5fbGFzdGdldC50aW1lICsgdGhpcy5fbGFzdGdldC5kdXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aW1lbGlzdC5sZW5ndGggPCAxIHx8IHRpbWUgPj0gdGhpcy5kdXJhdGlvbikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGltZWxpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoYSkgLSBwYXJzZUZsb2F0KGIpXG4gICAgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRpbWUgPj0gcGFyc2VJbnQodGltZWxpc3RbaV0pKSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLl9saXN0W3RpbWVsaXN0W2ldXTtcbiAgICAgICAgbGV0IGRvd25sb2FkZWQgPSB0aGlzLl90c1t1cmxdLmRvd25sb2FkZWQ7XG4gICAgICAgIGxldCBkb3dubG9hZGluZyA9IHRoaXMuX3RzW3VybF0uZG93bmxvYWRpbmc7XG4gICAgICAgIHRzID0ge3VybCwgZG93bmxvYWRlZCwgZG93bmxvYWRpbmcsIHRpbWU6IHBhcnNlSW50KHRpbWVsaXN0W2ldKSwgZHVyYXRpb246IHBhcnNlSW50KHRoaXMuX3RzW3VybF0uZHVyYXRpb24pfTtcbiAgICAgICAgaWYgKHRoaXMuYXV0b2NsZWFyKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX3RzW3RoaXMuX2xhc3RnZXQudXJsXTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fbGlzdFt0aGlzLl9sYXN0Z2V0LnRpbWVdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhc3RnZXQgPSB0cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHM7XG4gIH1cblxuICBjbGVhciAoKSB7XG4gICAgdGhpcy5fYmFzZVVSTCA9ICcnO1xuICAgIHRoaXMuX2xpc3QgPSB7fTtcbiAgICB0aGlzLl90cyA9IHt9O1xuICAgIHRoaXMudmVyc2lvbiA9IDA7XG4gICAgdGhpcy5zZXF1ZW5jZSA9IC0xO1xuICAgIHRoaXMudGFyZ2V0ZHVyYXRpb24gPSAwO1xuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICB9XG5cbiAgY2xlYXJEb3dubG9hZGVkICgpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IE9iamVjdC5rZXlzKHRoaXMuX3RzKS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB0cyA9IHRoaXMuX3RzW09iamVjdC5rZXlzKHRoaXMuX3RzKVtpXV07XG4gICAgICB0cy5kb3dubG9hZGVkID0gZmFsc2U7XG4gICAgICB0cy5kb3dubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2Jhc2VVUkwgPSAnJztcbiAgICB0aGlzLl9saXN0ID0ge307XG4gICAgdGhpcy5fdHMgPSB7fTtcbiAgICB0aGlzLnZlcnNpb24gPSAwO1xuICAgIHRoaXMuc2VxdWVuY2UgPSAtMTtcbiAgICB0aGlzLnRhcmdldGR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmZyYWdMZW5ndGggPSAwO1xuICAgIHRoaXMuX2xhc3RnZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fYXVkb2NsZWFyID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWxpc3Q7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgRmV0Y2hMb2FkZXI6IHJlcXVpcmUoJy4vc3JjL2ZldGNoLWxvYWRlcicpLmRlZmF1bHRcbn07XG4iLCJpbXBvcnQgeyBFVkVOVFMgfSBmcm9tICd4Z3BsYXllci11dGlscyc7XG5cbmNvbnN0IExPQURFUl9FVkVOVFMgPSBFVkVOVFMuTE9BREVSX0VWRU5UUztcbmNvbnN0IFJFQURfU1RSRUFNID0gMDtcbmNvbnN0IFJFQURfVEVYVCA9IDE7XG5jb25zdCBSRUFEX0pTT04gPSAyO1xuY29uc3QgUkVBRF9CVUZGRVIgPSAzO1xuY2xhc3MgRmV0Y2hMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlncykge1xuICAgIHRoaXMuY29uZmlncyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ3MpO1xuICAgIHRoaXMudXJsID0gbnVsbFxuICAgIHRoaXMuc3RhdHVzID0gMFxuICAgIHRoaXMuZXJyb3IgPSBudWxsXG4gICAgdGhpcy5fcmVhZGVyID0gbnVsbDtcbiAgICB0aGlzLl9jYW5jZWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMucmVhZHR5cGUgPSB0aGlzLmNvbmZpZ3MucmVhZHR5cGU7XG4gICAgdGhpcy5idWZmZXIgPSB0aGlzLmNvbmZpZ3MuYnVmZmVyIHx8ICdMT0FERVJfQlVGRkVSJztcbiAgICB0aGlzLl9sb2FkZXJUYXNrTm8gPSAwO1xuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5vbihMT0FERVJfRVZFTlRTLkxBREVSX1NUQVJULCB0aGlzLmxvYWQuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdsb2FkZXInXG4gIH1cblxuICBsb2FkICh1cmwsIG9wdHMpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMuX2NhbmNlbGVkID0gZmFsc2U7XG5cbiAgICAvLyBUT0RPOiBBZGQgUmFuZ2VzXG4gICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0UGFyYW1zKG9wdHMpXG4gICAgX3RoaXMubG9hZGluZyA9IHRydWVcbiAgICByZXR1cm4gZmV0Y2godGhpcy51cmwsIHBhcmFtcykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBfdGhpcy5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXNcbiAgICAgICAgcmV0dXJuIF90aGlzLl9vbkZldGNoUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9FUlJPUiwgX3RoaXMuVEFHLCBuZXcgRXJyb3IoYGludmFsaWQgcmVzcG9uc2UuYCkpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgIHtcbiAgICAgIF90aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfRVJST1IsIF90aGlzLlRBRywgZXJyb3IpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIF9vbkZldGNoUmVzcG9uc2UgKHJlc3BvbnNlKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgYnVmZmVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSh0aGlzLmJ1ZmZlcik7XG4gICAgdGhpcy5fbG9hZGVyVGFza05vKys7XG4gICAgbGV0IHRhc2tubyA9IHRoaXMuX2xvYWRlclRhc2tObztcbiAgICBpZiAocmVzcG9uc2Uub2sgPT09IHRydWUpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5yZWFkdHlwZSkge1xuICAgICAgICBjYXNlIFJFQURfSlNPTjpcbiAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICBpZiAoIV90aGlzLl9jYW5jZWxlZCAmJiAhX3RoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgYnVmZmVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0NPTVBMRVRFLCBkYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFJFQURfVEVYVDpcbiAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICBpZiAoIV90aGlzLl9jYW5jZWxlZCAmJiAhX3RoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgYnVmZmVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0NPTVBMRVRFLCBkYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFJFQURfQlVGRkVSOlxuICAgICAgICAgIHJlc3BvbnNlLmFycmF5QnVmZmVyKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICBpZiAoIV90aGlzLl9jYW5jZWxlZCAmJiAhX3RoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2gobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfQ09NUExFVEUsIGJ1ZmZlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgZGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBSRUFEX1NUUkVBTTpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25SZWFkZXIocmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKSwgdGFza25vKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25SZWFkZXIgKHJlYWRlciwgdGFza25vKSB7XG4gICAgbGV0IGJ1ZmZlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UodGhpcy5idWZmZXIpO1xuICAgIGlmICgoIWJ1ZmZlciAmJiB0aGlzLl9yZWFkZXIpIHx8IHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fcmVhZGVyLmNhbmNlbCgpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIERPIE5PVEhJTkdcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9yZWFkZXIgPSByZWFkZXJcbiAgICBpZiAodGhpcy5sb2FkaW5nID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIC8vIHJlYWRlciByZWFkIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLiBnZXQgZGF0YSB3aGVuIGNhbGxiYWNrIGFuZCBoYXMgdmFsdWUuZG9uZSB3aGVuIGRpc2Nvbm5lY3RlZC5cbiAgICAvLyByZWFk5pa55rOV6L+U5Zue5LiA5LiqUHJvbWlzZS4g5Zue6LCD5Lit5Y+v5Lul6I635Y+W5Yiw5pWw5o2u44CC5b2TdmFsdWUuZG9uZeWtmOWcqOaXtu+8jOivtOaYjumTvuaOpeaWreW8gOOAglxuICAgIHRoaXMuX3JlYWRlciAmJiB0aGlzLl9yZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgaWYgKHZhbC5kb25lKSB7XG4gICAgICAgIC8vIFRPRE86IOWujOaIkOWkhOeQhlxuICAgICAgICBfdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgX3RoaXMuc3RhdHVzID0gMDtcbiAgICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgYnVmZmVyKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLl9jYW5jZWxlZCB8fCBfdGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIGlmICAoX3RoaXMuX3JlYWRlcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfdGhpcy5fcmVhZGVyLmNhbmNlbCgpXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gRE8gTk9USElOR1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGJ1ZmZlci5wdXNoKHZhbC52YWx1ZSlcbiAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfREFUQUxPQURFRCwgYnVmZmVyKVxuICAgICAgcmV0dXJuIF90aGlzLl9vblJlYWRlcihyZWFkZXIsIHRhc2tubylcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIF90aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfRVJST1IsIF90aGlzLlRBRywgZXJyb3IpO1xuICAgIH0pXG4gIH1cblxuICBnZXRQYXJhbXMgKG9wdHMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMpXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG5cbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBjYWNoZTogJ2RlZmF1bHQnXG4gICAgfVxuXG4gICAgLy8gYWRkIGN1c3Rtb3IgaGVhZGVyc1xuICAgIC8vIOa3u+WKoOiHquWumuS5ieWktFxuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWdzLmhlYWRlcnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgY29uZmlnSGVhZGVycyA9IHRoaXMuY29uZmlncy5oZWFkZXJzXG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnSGVhZGVycykge1xuICAgICAgICBpZiAoY29uZmlnSGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCBjb25maWdIZWFkZXJzW2tleV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuaGVhZGVycyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBvcHRIZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzXG4gICAgICBmb3IgKGxldCBrZXkgaW4gb3B0SGVhZGVycykge1xuICAgICAgICBpZiAob3B0SGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCBvcHRIZWFkZXJzW2tleV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jb3JzID09PSBmYWxzZSkge1xuICAgICAgcGFyYW1zLm1vZGUgPSAnc2FtZS1vcmlnaW4nXG4gICAgfVxuXG4gICAgLy8gd2l0aENyZWRlbnRpYWxzIGlzIGRpc2FibGVkIGJ5IGRlZmF1bHRcbiAgICAvLyB3aXRoQ3JlZGVudGlhbHMg5Zyo6buY6K6k5oOF5Ya15LiL5LiN6KKr5L2/55So44CCXG4gICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICBwYXJhbXMuY3JlZGVudGlhbHMgPSAnaW5jbHVkZSdcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBBZGQgcmFuZ2VzO1xuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICBjYW5jZWwgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3JlYWRlci5jYW5jZWwoKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyDpmLLmraJmYWlsZWQ6IDIwMOmUmeivr+iiq+aJk+WNsOWIsOaOp+WItuWPsOS4ilxuICAgICAgfVxuICAgICAgdGhpcy5fcmVhZGVyID0gbnVsbFxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuX2NhbmNlbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlXG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZXRjaExvYWRlclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1wNFJlbXV4ZXI6IHJlcXVpcmUoJy4vc3JjL21wNCcpLmRlZmF1bHRcbn07XG4iLCJpbXBvcnQgeyBCdWZmZXIgfSBmcm9tICd4Z3BsYXllci11dGlscyc7XG5cbi8vIGNvbnN0IFVJTlQzMl9NQVggPSBNYXRoLnBvdygyLCAzMikgLSAxO1xuY2xhc3MgRm1wNCB7XG4gIHN0YXRpYyBzaXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCdWZmZXIud3JpdGVVaW50MzIodmFsdWUpXG4gIH1cbiAgc3RhdGljIGluaXRCb3ggKHNpemUsIG5hbWUsIC4uLmNvbnRlbnQpIHtcbiAgICBjb25zdCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKHNpemUpLCBGbXA0LnR5cGUobmFtZSksIC4uLmNvbnRlbnQpXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgZXh0ZW5zaW9uICh2ZXJzaW9uLCBmbGFnKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIHZlcnNpb24sXG4gICAgICAoZmxhZyA+PiAxNikgJiAweGZmLFxuICAgICAgKGZsYWcgPj4gOCkgJiAweGZmLFxuICAgICAgZmxhZyAmIDB4ZmZcbiAgICBdKVxuICB9XG4gIHN0YXRpYyBmdHlwICgpIHtcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDI0LCAnZnR5cCcsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4NjksIDB4NzMsIDB4NkYsIDB4NkQsIC8vIGlzb20sXG4gICAgICAweDAsIDB4MCwgMHgwMCwgMHgwMSwgLy8gbWlub3JfdmVyc2lvbjogMHgwMVxuICAgICAgMHg2OSwgMHg3MywgMHg2RiwgMHg2RCwgLy8gaXNvbVxuICAgICAgMHg2MSwgMHg3NiwgMHg2MywgMHgzMSAvLyBhdmMxXG4gICAgXSkpXG4gIH1cbiAgc3RhdGljIG1vb3YgKHsgdHlwZSwgbWV0YSB9KSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IG12aGQgPSBGbXA0Lm12aGQobWV0YS5kdXJhdGlvbiwgbWV0YS50aW1lc2NhbGUpXG4gICAgbGV0IHRyYWtcblxuICAgIGlmICh0eXBlID09PSAndmlkZW8nKSB7XG4gICAgICB0cmFrID0gRm1wNC52aWRlb1RyYWsobWV0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhayA9IEZtcDQuYXVkaW9UcmFrKG1ldGEpXG4gICAgfVxuXG4gICAgbGV0IG12ZXggPSBGbXA0Lm12ZXgobWV0YS5kdXJhdGlvbiwgbWV0YS50aW1lc2NhbGUgfHwgMTAwMCwgbWV0YS5pZCk7XG4gICAgW212aGQsIHRyYWssIG12ZXhdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveChzaXplLCAnbW9vdicsIG12aGQsIHRyYWssIG12ZXgpXG4gIH1cbiAgc3RhdGljIG12aGQgKGR1cmF0aW9uLCB0aW1lc2NhbGUgPSAxMDAwKSB7XG4gICAgLy8gZHVyYXRpb24gKj0gdGltZXNjYWxlO1xuICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHZlcnNpb24oMCkgKyBmbGFncyAgICAgMeS9jeeahGJveOeJiOacrCsz5L2NZmxhZ3MgICBib3jniYjmnKzvvIww5oiWMe+8jOS4gOiIrOS4ujDjgILvvIjku6XkuIvlrZfoioLmlbDlnYfmjIl2ZXJzaW9uPTDvvIlcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNyZWF0aW9uX3RpbWUgICAg5Yib5bu65pe26Ze0ICDvvIjnm7jlr7nkuo5VVEPml7bpl7QxOTA0LTAxLTAx6Zu254K555qE56eS5pWw77yJXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtb2RpZmljYXRpb25fdGltZSAgIOS/ruaUueaXtumXtFxuXG4gICAgICAvKipcbiAgICAgICAgICAgICAqIHRpbWVzY2FsZTogNCBieXRlc+aWh+S7tuWqkuS9k+WcqDHnp5Lml7bpl7TlhoXnmoTliLvluqblgLzvvIzlj6/ku6XnkIbop6PkuLox56eS6ZW/5bqmXG4gICAgICAgICAgICAgKi9cbiAgICAgICh0aW1lc2NhbGUgPj4+IDI0KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlID4+PiAxNikgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSA+Pj4gOCkgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSkgJiAweEZGLFxuXG4gICAgICAvKipcbiAgICAgICAgICAgICAqIGR1cmF0aW9uOiA0IGJ5dGVz6K+ldHJhY2vnmoTml7bpl7Tplb/luqbvvIznlKhkdXJhdGlvbuWSjHRpbWUgc2NhbGXlgLzlj6/ku6XorqHnrpd0cmFja+aXtumVv++8jOavlOWmgmF1ZGlvIHRyYWNr55qEdGltZSBzY2FsZSA9IDgwMDAsXG4gICAgICAgICAgICAgKiBkdXJhdGlvbiA9IDU2MDEyOO+8jOaXtumVv+S4ujcwLjAxNu+8jHZpZGVvIHRyYWNr55qEdGltZSBzY2FsZSA9IDYwMCwgZHVyYXRpb24gPSA0MjAwMO+8jOaXtumVv+S4ujcwXG4gICAgICAgICAgICAgKi9cbiAgICAgIChkdXJhdGlvbiA+Pj4gMjQpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gOCkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uKSAmIDB4RkYsXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLCAvLyBQcmVmZXJyZWQgcmF0ZTogMS4wICAg5o6o6I2Q5pKt5pS+6YCf546H77yM6auYMTbkvY3lkozkvY4xNuS9jeWIhuWIq+S4uuWwj+aVsOeCueaVtOaVsOmDqOWIhuWSjOWwj+aVsOmDqOWIhu+8jOWNs1sxNi4xNl0g5qC85byP77yM6K+l5YC85Li6MS4w77yIMHgwMDAxMDAwMO+8ieihqOekuuato+W4uOWJjeWQkeaSreaUvlxuICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcmVmZXJyZWRWb2x1bWUoMS4wLCAyYnl0ZXMpICsgcmVzZXJ2ZWQoMmJ5dGVzKVxuICAgICAgICAgICAgICog5LiOcmF0Zeexu+S8vO+8jFs4LjhdIOagvOW8j++8jDEuMO+8iDB4MDEwMO+8ieihqOekuuacgOWkp+mfs+mHj1xuICAgICAgICAgICAgICovXG4gICAgICAweDAxLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gIHJlc2VydmVkOiA0ICsgNCBieXRlc+S/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIC0tLS1iZWdpbiBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8g6KeG6aKR5Y+Y5o2i55+p6Zi1ICAg57q/5oCn5Luj5pWwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4NDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIC0tLS1lbmQgY29tcG9zaXRpb24gbWF0cml4LS0tLVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWJlZ2luIHByZV9kZWZpbmVkIDYgKiA0IGJ5dGVzLS0tLVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHByZS1kZWZpbmVkIOS/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyAtLS0tZW5kIHByZV9kZWZpbmVkIDYgKiA0IGJ5dGVzLS0tLVxuICAgICAgMHhGRiwgMHhGRiwgMHhGRiwgMHhGRiAvLyBuZXh0X3RyYWNrX0lEIOS4i+S4gOS4qnRyYWNr5L2/55So55qEaWTlj7dcbiAgICBdKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goOCArIGJ5dGVzLmxlbmd0aCwgJ212aGQnLCBuZXcgVWludDhBcnJheShieXRlcykpXG4gIH1cbiAgc3RhdGljIHZpZGVvVHJhayAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuXG4gICAgbGV0IHRraGQgPSBGbXA0LnRraGQoe1xuICAgICAgaWQ6IDEsXG4gICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUgfHwgMTAwMCxcbiAgICAgIHdpZHRoOiBkYXRhLnByZXNlbnRXaWR0aCxcbiAgICAgIGhlaWdodDogZGF0YS5wcmVzZW50SGVpZ2h0LFxuICAgICAgdHlwZTogJ3ZpZGVvJ1xuICAgIH0pXG4gICAgbGV0IG1kaWEgPSBGbXA0Lm1kaWEoe1xuICAgICAgdHlwZTogJ3ZpZGVvJyxcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUgfHwgMTAwMCxcbiAgICAgIGR1cmF0aW9uOiBkYXRhLmR1cmF0aW9uLFxuICAgICAgYXZjYzogZGF0YS5hdmNjLFxuICAgICAgcGFyUmF0aW86IGRhdGEucGFyUmF0aW8sXG4gICAgICB3aWR0aDogZGF0YS5wcmVzZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IGRhdGEucHJlc2VudEhlaWdodFxuICAgIH0pO1xuICAgIFt0a2hkLCBtZGlhXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goc2l6ZSwgJ3RyYWsnLCB0a2hkLCBtZGlhKVxuICB9XG4gIHN0YXRpYyBhdWRpb1RyYWsgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgdGtoZCA9IEZtcDQudGtoZCh7XG4gICAgICBpZDogMixcbiAgICAgIGR1cmF0aW9uOiBkYXRhLmR1cmF0aW9uLFxuICAgICAgdGltZXNjYWxlOiBkYXRhLnRpbWVzY2FsZSB8fCAxMDAwLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICB0eXBlOiAnYXVkaW8nXG4gICAgfSlcbiAgICBsZXQgbWRpYSA9IEZtcDQubWRpYSh7XG4gICAgICB0eXBlOiAnYXVkaW8nLFxuICAgICAgdGltZXNjYWxlOiBkYXRhLnRpbWVzY2FsZSB8fCAxMDAwLFxuICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sXG4gICAgICBjaGFubmVsQ291bnQ6IGRhdGEuY2hhbm5lbENvdW50LFxuICAgICAgc2FtcGxlcmF0ZTogZGF0YS5zYW1wbGVSYXRlLFxuICAgICAgY29uZmlnOiBkYXRhLmNvbmZpZ1xuICAgIH0pO1xuICAgIFt0a2hkLCBtZGlhXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goc2l6ZSwgJ3RyYWsnLCB0a2hkLCBtZGlhKVxuICB9XG4gIHN0YXRpYyB0a2hkIChkYXRhKSB7XG4gICAgbGV0IGlkID0gZGF0YS5pZFxuICAgIGxldCBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb25cbiAgICBsZXQgd2lkdGggPSBkYXRhLndpZHRoXG4gICAgbGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDA3LCAvLyB2ZXJzaW9uKDApICsgZmxhZ3MgMeS9jeeJiOacrCBib3jniYjmnKzvvIww5oiWMe+8jOS4gOiIrOS4ujDjgILvvIjku6XkuIvlrZfoioLmlbDlnYfmjIl2ZXJzaW9uPTDvvInmjInkvY3miJbmk43kvZznu5PmnpzlgLzvvIzpooTlrprkuYnlpoLkuIvvvJpcbiAgICAgIC8vIDB4MDAwMDAxIHRyYWNrX2VuYWJsZWTvvIzlkKbliJnor6V0cmFja+S4jeiiq+aSreaUvu+8m1xuICAgICAgLy8gMHgwMDAwMDIgdHJhY2tfaW5fbW92aWXvvIzooajnpLror6V0cmFja+WcqOaSreaUvuS4reiiq+W8leeUqO+8m1xuICAgICAgLy8gMHgwMDAwMDQgdHJhY2tfaW5fcHJldmlld++8jOihqOekuuivpXRyYWNr5Zyo6aKE6KeI5pe26KKr5byV55So44CCXG4gICAgICAvLyDkuIDoiKzor6XlgLzkuLo377yMMSsyKzQg5aaC5p6c5LiA5Liq5aqS5L2T5omA5pyJdHJhY2vlnYfmnKrorr7nva50cmFja19pbl9tb3ZpZeWSjHRyYWNrX2luX3ByZXZpZXfvvIzlsIbooqvnkIbop6PkuLrmiYDmnIl0cmFja+Wdh+iuvue9ruS6hui/meS4pOmhue+8m+WvueS6jmhpbnQgdHJhY2vvvIzor6XlgLzkuLowXG4gICAgICAvLyBoaW50IHRyYWNrIOi/meS4queJueauiueahHRyYWNr5bm25LiN5YyF5ZCr5aqS5L2T5pWw5o2u77yM6ICM5piv5YyF5ZCr5LqG5LiA5Lqb5bCG5YW25LuW5pWw5o2udHJhY2vmiZPljIXmiJDmtYHlqpLkvZPnmoTmjIfnpLrkv6Hmga/jgIJcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNyZWF0aW9uX3RpbWXliJvlu7rml7bpl7TvvIjnm7jlr7nkuo5VVEPml7bpl7QxOTA0LTAxLTAx6Zu254K555qE56eS5pWw77yJXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtb2RpZmljYXRpb24gdGltZSDkv67mlLnml7bpl7RcbiAgICAgIChpZCA+Pj4gMjQpICYgMHhGRiwgLy8gdHJhY2tfSUQ6IDQgYnl0ZXMgaWTlj7fvvIzkuI3og73ph43lpI3kuJTkuI3og73kuLowXG4gICAgICAoaWQgPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoaWQgPj4+IDgpICYgMHhGRixcbiAgICAgIChpZCkgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQ6IDQgYnl0ZXMgICAg5L+d55WZ5L2NXG4gICAgICAoZHVyYXRpb24gPj4+IDI0KSAmIDB4RkYsIC8vIGR1cmF0aW9uOiA0IGJ5dGVzIHRyYWNr55qE5pe26Ze06ZW/5bqmXG4gICAgICAoZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24gPj4+IDgpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbikgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQ6IDIgKiA0IGJ5dGVzICAgIOS/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGxheWVyKDJieXRlcykgKyBhbHRlcm5hdGVfZ3JvdXAoMmJ5dGVzKSAg6KeG6aKR5bGC77yM6buY6K6k5Li6MO+8jOWAvOWwj+eahOWcqOS4iuWxgi50cmFja+WIhue7hOS/oeaBr++8jOm7mOiupOS4ujDooajnpLror6V0cmFja+acquS4juWFtuS7lnRyYWNr5pyJ576k57uE5YWz57O7XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyB2b2x1bWUoMmJ5dGVzKSArIHJlc2VydmVkKDJieXRlcykgICAgWzguOF0g5qC85byP77yM5aaC5p6c5Li66Z+z6aKRdHJhY2vvvIwxLjDvvIgweDAxMDDvvInooajnpLrmnIDlpKfpn7Pph4/vvJvlkKbliJnkuLowICAgK+S/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCwgLy8gLS0tLWJlZ2luIGNvbXBvc2l0aW9uIG1hdHJpeC0tLS1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIOinhumikeWPmOaNouefqemYtVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHg0MCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWVuZCBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAod2lkdGggPj4+IDgpICYgMHhGRiwgLy8gLy/lrr3luqZcbiAgICAgICh3aWR0aCkgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCxcbiAgICAgIChoZWlnaHQgPj4+IDgpICYgMHhGRiwgLy8g6auY5bqmXG4gICAgICAoaGVpZ2h0KSAmIDB4RkYsXG4gICAgICAweDAwLCAweDAwXG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGgsICd0a2hkJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgZWR0cyAoZGF0YSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uXG4gICAgbGV0IG1lZGlhVGltZSA9IGRhdGEubWVkaWFUaW1lXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZSgzNiksIEZtcDQudHlwZSgnZWR0cycpKVxuICAgIC8vIGVsc3RcbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKDI4KSwgRm1wNC50eXBlKCdlbHN0JykpXG4gICAgYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGVudHJ5IGNvdW50XG4gICAgICAoZHVyYXRpb24gPj4gMjQpICYgMHhmZiwgKGR1cmF0aW9uID4+IDE2KSAmIDB4ZmYsIChkdXJhdGlvbiA+PiA4KSAmIDB4ZmYsIGR1cmF0aW9uICYgMHhmZixcbiAgICAgIChtZWRpYVRpbWUgPj4gMjQpICYgMHhmZiwgKG1lZGlhVGltZSA+PiAxNikgJiAweGZmLCAobWVkaWFUaW1lID4+IDgpICYgMHhmZiwgbWVkaWFUaW1lICYgMHhmZixcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEgLy8gbWVkaWEgcmF0ZVxuICAgIF0pKVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIG1kaWEgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgbWRoZCA9IEZtcDQubWRoZChkYXRhLnRpbWVzY2FsZSwgZGF0YS5kdXJhdGlvbilcbiAgICBsZXQgaGRsciA9IEZtcDQuaGRscihkYXRhLnR5cGUpXG4gICAgbGV0IG1pbmYgPSBGbXA0Lm1pbmYoZGF0YSk7XG4gICAgW21kaGQsIGhkbHIsIG1pbmZdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveChzaXplLCAnbWRpYScsIG1kaGQsIGhkbHIsIG1pbmYpXG4gIH1cbiAgc3RhdGljIG1kaGQgKHRpbWVzY2FsZSA9IDEwMDAsIGR1cmF0aW9uKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBjcmVhdGlvbl90aW1lICAgIOWIm+W7uuaXtumXtFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbW9kaWZpY2F0aW9uX3RpbWXkv67mlLnml7bpl7RcbiAgICAgICh0aW1lc2NhbGUgPj4+IDI0KSAmIDB4RkYsIC8vIHRpbWVzY2FsZTogNCBieXRlcyAgICDmlofku7blqpLkvZPlnKgx56eS5pe26Ze05YaF55qE5Yi75bqm5YC877yM5Y+v5Lul55CG6Kej5Li6MeenkumVv+W6plxuICAgICAgKHRpbWVzY2FsZSA+Pj4gMTYpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUgPj4+IDgpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gMjQpICYgMHhGRiwgLy8gZHVyYXRpb246IDQgYnl0ZXMgIHRyYWNr55qE5pe26Ze06ZW/5bqmXG4gICAgICAoZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24gPj4+IDgpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbikgJiAweEZGLFxuICAgICAgMHg1NSwgMHhDNCwgLy8gbGFuZ3VhZ2U6IHVuZCAodW5kZXRlcm1pbmVkKSDlqpLkvZPor63oqIDnoIHjgILmnIDpq5jkvY3kuLow77yM5ZCO6Z2iMTXkvY3kuLoz5Liq5a2X56ym77yI6KeBSVNPIDYzOS0yL1TmoIflh4bkuK3lrprkuYnvvIlcbiAgICAgIDB4MDAsIDB4MDAgLy8gcHJlX2RlZmluZWQgPSAwXG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDEyICsgY29udGVudC5ieXRlTGVuZ3RoLCAnbWRoZCcsIEZtcDQuZXh0ZW5zaW9uKDAsIDApLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBoZGxyICh0eXBlKSB7XG4gICAgbGV0IHZhbHVlID0gWzB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHByZV9kZWZpbmVkXG4gICAgICAweDc2LCAweDY5LCAweDY0LCAweDY1LCAvLyBoYW5kbGVyX3R5cGU6ICd2aWRlJ1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHg1NiwgMHg2OSwgMHg2NCwgMHg2NSxcbiAgICAgIDB4NmYsIDB4NDgsIDB4NjEsIDB4NmUsXG4gICAgICAweDY0LCAweDZjLCAweDY1LCAweDcyLCAweDAwIC8vIG5hbWU6ICdWaWRlb0hhbmRsZXInXG4gICAgXVxuICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICB2YWx1ZS5zcGxpY2UoOCwgNCwgLi4uWzB4NzMsIDB4NmYsIDB4NzUsIDB4NmVdKVxuICAgICAgdmFsdWUuc3BsaWNlKDI0LCAxMywgLi4uWzB4NTMsIDB4NmYsIDB4NzUsIDB4NmUsXG4gICAgICAgIDB4NjQsIDB4NDgsIDB4NjEsIDB4NmUsXG4gICAgICAgIDB4NjQsIDB4NmMsIDB4NjUsIDB4NzIsIDB4MDBdKVxuICAgIH1cbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDggKyB2YWx1ZS5sZW5ndGgsICdoZGxyJywgbmV3IFVpbnQ4QXJyYXkodmFsdWUpKVxuICB9XG4gIHN0YXRpYyBtaW5mIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHZtaGQgPSBkYXRhLnR5cGUgPT09ICd2aWRlbycgPyBGbXA0LnZtaGQoKSA6IEZtcDQuc21oZCgpXG4gICAgbGV0IGRpbmYgPSBGbXA0LmRpbmYoKVxuICAgIGxldCBzdGJsID0gRm1wNC5zdGJsKGRhdGEpO1xuICAgIFt2bWhkLCBkaW5mLCBzdGJsXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goc2l6ZSwgJ21pbmYnLCB2bWhkLCBkaW5mLCBzdGJsKVxuICB9XG4gIHN0YXRpYyB2bWhkICgpIHtcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDIwLCAndm1oZCcsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAvLyBncmFwaGljc21vZGVcbiAgICAgIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCAvLyBvcGNvbG9yXG4gICAgXSkpXG4gIH1cbiAgc3RhdGljIHNtaGQgKCkge1xuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTYsICdzbWhkJywgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIC8vIGJhbGFuY2VcbiAgICAgIDB4MDAsIDB4MDAgLy8gcmVzZXJ2ZWRcbiAgICBdKSlcbiAgfVxuICBzdGF0aWMgZGluZiAoKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBkcmVmID0gWzB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGVudHJ5X2NvdW50XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDBjLCAvLyBlbnRyeV9zaXplXG4gICAgICAweDc1LCAweDcyLCAweDZjLCAweDIwLCAvLyAndXJsJyB0eXBlXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uIDBcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDEgLy8gZW50cnlfZmxhZ3NcbiAgICBdXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZSgzNiksIEZtcDQudHlwZSgnZGluZicpLCBGbXA0LnNpemUoMjgpLCBGbXA0LnR5cGUoJ2RyZWYnKSwgbmV3IFVpbnQ4QXJyYXkoZHJlZikpXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgc3RibCAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBzdHNkID0gRm1wNC5zdHNkKGRhdGEpXG4gICAgbGV0IHN0dHMgPSBGbXA0LnN0dHMoKVxuICAgIGxldCBzdHNjID0gRm1wNC5zdHNjKClcbiAgICBsZXQgc3RzeiA9IEZtcDQuc3RzeigpXG4gICAgbGV0IHN0Y28gPSBGbXA0LnN0Y28oKTtcbiAgICBbc3RzZCwgc3R0cywgc3RzYywgc3Rzeiwgc3Rjb10uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KHNpemUsICdzdGJsJywgc3RzZCwgc3R0cywgc3RzYywgc3Rzeiwgc3RjbylcbiAgfVxuICBzdGF0aWMgc3RzZCAoZGF0YSkge1xuICAgIGxldCBjb250ZW50XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgLy8gaWYgKCFkYXRhLmlzQUFDICYmIGRhdGEuY29kZWMgPT09ICdtcDQnKSB7XG4gICAgICAvLyAgICAgY29udGVudCA9IEZNUDQubXAzKGRhdGEpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vXG4gICAgICAvLyB9XG4gICAgICAvLyDmlK/mjIFtcDRhXG4gICAgICBjb250ZW50ID0gRm1wNC5tcDRhKGRhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSBGbXA0LmF2YzEoZGF0YSlcbiAgICB9XG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxNiArIGNvbnRlbnQuYnl0ZUxlbmd0aCwgJ3N0c2QnLCBGbXA0LmV4dGVuc2lvbigwLCAwKSwgbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4MDAsIDB4MDAsIDB4MDFdKSwgY29udGVudClcbiAgfVxuICBzdGF0aWMgbXA0YSAoZGF0YSkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAxLCAvLyBkYXRhX3JlZmVyZW5jZV9pbmRleFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCBkYXRhLmNoYW5uZWxDb3VudCwgLy8gY2hhbm5lbGNvdW50XG4gICAgICAweDAwLCAweDEwLCAvLyBzYW1wbGVTaXplOjE2Yml0c1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQyXG4gICAgICAoZGF0YS5zYW1wbGVyYXRlID4+IDgpICYgMHhmZixcbiAgICAgIGRhdGEuc2FtcGxlcmF0ZSAmIDB4ZmYsIC8vXG4gICAgICAweDAwLCAweDAwXG4gICAgXSlcbiAgICBsZXQgZXNkcyA9IEZtcDQuZXNkcyhkYXRhLmNvbmZpZylcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGggKyBlc2RzLmJ5dGVMZW5ndGgsICdtcDRhJywgY29udGVudCwgZXNkcylcbiAgfVxuICBzdGF0aWMgZXNkcyAoY29uZmlnID0gWzQzLCAxNDYsIDgsIDBdKSB7XG4gICAgY29uc3QgY29uZmlnbGVuID0gY29uZmlnLmxlbmd0aFxuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcblxuICAgICAgMHgwMywgLy8gZGVzY3JpcHRvcl90eXBlXG4gICAgICAweDE3ICsgY29uZmlnbGVuLCAvLyBsZW5ndGhcbiAgICAgIDB4MDAsIDB4MDEsIC8vIGVzX2lkXG4gICAgICAweDAwLCAvLyBzdHJlYW1fcHJpb3JpdHlcblxuICAgICAgMHgwNCwgLy8gZGVzY3JpcHRvcl90eXBlXG4gICAgICAweDBmICsgY29uZmlnbGVuLCAvLyBsZW5ndGhcbiAgICAgIDB4NDAsIC8vIGNvZGVjIDogbXBlZzRfYXVkaW9cbiAgICAgIDB4MTUsIC8vIHN0cmVhbV90eXBlXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBidWZmZXJfc2l6ZVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbWF4Qml0cmF0ZVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gYXZnQml0cmF0ZVxuXG4gICAgICAweDA1IC8vIGRlc2NyaXB0b3JfdHlwZVxuICAgIF0uY29uY2F0KFtjb25maWdsZW5dKS5jb25jYXQoY29uZmlnKS5jb25jYXQoWzB4MDYsIDB4MDEsIDB4MDJdKSlcbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKDggKyBjb250ZW50LmJ5dGVMZW5ndGgpLCBGbXA0LnR5cGUoJ2VzZHMnKSwgY29udGVudClcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBhdmMxIChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBzaXplID0gNDAvLyA4KGF2YzEpKzgoYXZjYykrOChidHJ0KSsxNihwYXNwKVxuICAgIC8vIGxldCBzcHMgPSBkYXRhLnNwc1xuICAgIC8vIGxldCBwcHMgPSBkYXRhLnBwc1xuICAgIGxldCB3aWR0aCA9IGRhdGEud2lkdGhcbiAgICBsZXQgaGVpZ2h0ID0gZGF0YS5oZWlnaHRcbiAgICBsZXQgaFNwYWNpbmcgPSBkYXRhLnBhclJhdGlvLmhlaWdodFxuICAgIGxldCB2U3BhY2luZyA9IGRhdGEucGFyUmF0aW8ud2lkdGhcbiAgICAvLyBsZXQgYXZjY0J1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIC8vIGF2Y2NCdWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoW1xuICAgIC8vICAgMHgwMSwgLy8gdmVyc2lvblxuICAgIC8vICAgc3BzWzFdLCAvLyBwcm9maWxlXG4gICAgLy8gICBzcHNbMl0sIC8vIHByb2ZpbGUgY29tcGF0aWJsZVxuICAgIC8vICAgc3BzWzNdLCAvLyBsZXZlbFxuICAgIC8vICAgMHhmYyB8IDMsXG4gICAgLy8gICAweEUwIHwgMSAvLyDnm67liY3lj6rlpITnkIbkuIDkuKpzcHNcbiAgICAvLyBdLmNvbmNhdChbc3BzLmxlbmd0aCA+Pj4gOCAmIDB4ZmYsIHNwcy5sZW5ndGggJiAweGZmXSkpKVxuICAgIC8vIGF2Y2NCdWZmZXIud3JpdGUoc3BzLCBuZXcgVWludDhBcnJheShbMSwgcHBzLmxlbmd0aCA+Pj4gOCAmIDB4ZmYsIHBwcy5sZW5ndGggJiAweGZmXSksIHBwcylcblxuICAgIGxldCBhdmNjID0gZGF0YS5hdmNjXG4gICAgbGV0IGF2YzEgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDEsIC8vIGRhdGFfcmVmZXJlbmNlX2luZGV4XG4gICAgICAweDAwLCAweDAwLCAvLyBwcmVfZGVmaW5lZFxuICAgICAgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcHJlX2RlZmluZWRcbiAgICAgICh3aWR0aCA+PiA4KSAmIDB4ZmYsXG4gICAgICB3aWR0aCAmIDB4ZmYsIC8vIHdpZHRoXG4gICAgICAoaGVpZ2h0ID4+IDgpICYgMHhmZixcbiAgICAgIGhlaWdodCAmIDB4ZmYsIC8vIGhlaWdodFxuICAgICAgMHgwMCwgMHg0OCwgMHgwMCwgMHgwMCwgLy8gaG9yaXpyZXNvbHV0aW9uXG4gICAgICAweDAwLCAweDQ4LCAweDAwLCAweDAwLCAvLyB2ZXJ0cmVzb2x1dGlvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDEsIC8vIGZyYW1lX2NvdW50XG4gICAgICAweDEyLFxuICAgICAgMHg2NCwgMHg2MSwgMHg2OSwgMHg2QywgLy8gZGFpbHltb3Rpb24vaGxzLmpzXG4gICAgICAweDc5LCAweDZELCAweDZGLCAweDc0LFxuICAgICAgMHg2OSwgMHg2RiwgMHg2RSwgMHgyRixcbiAgICAgIDB4NjgsIDB4NkMsIDB4NzMsIDB4MkUsXG4gICAgICAweDZBLCAweDczLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBjb21wcmVzc29ybmFtZVxuICAgICAgMHgwMCwgMHgxOCwgLy8gZGVwdGggPSAyNFxuICAgICAgMHgxMSwgMHgxMV0pIC8vIHByZV9kZWZpbmVkID0gLTFcbiAgICBsZXQgYnRydCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MWMsIDB4OWMsIDB4ODAsIC8vIGJ1ZmZlclNpemVEQlxuICAgICAgMHgwMCwgMHgyZCwgMHhjNiwgMHhjMCwgLy8gbWF4Qml0cmF0ZVxuICAgICAgMHgwMCwgMHgyZCwgMHhjNiwgMHhjMCAvLyBhdmdCaXRyYXRlXG4gICAgXSlcbiAgICBsZXQgcGFzcCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIChoU3BhY2luZyA+PiAyNCksIC8vIGhTcGFjaW5nXG4gICAgICAoaFNwYWNpbmcgPj4gMTYpICYgMHhmZixcbiAgICAgIChoU3BhY2luZyA+PiA4KSAmIDB4ZmYsXG4gICAgICBoU3BhY2luZyAmIDB4ZmYsXG4gICAgICAodlNwYWNpbmcgPj4gMjQpLCAvLyB2U3BhY2luZ1xuICAgICAgKHZTcGFjaW5nID4+IDE2KSAmIDB4ZmYsXG4gICAgICAodlNwYWNpbmcgPj4gOCkgJiAweGZmLFxuICAgICAgdlNwYWNpbmcgJiAweGZmXG4gICAgXSlcblxuICAgIGJ1ZmZlci53cml0ZShcbiAgICAgIEZtcDQuc2l6ZShzaXplICsgYXZjMS5ieXRlTGVuZ3RoICsgYXZjYy5ieXRlTGVuZ3RoICsgYnRydC5ieXRlTGVuZ3RoKSwgRm1wNC50eXBlKCdhdmMxJyksIGF2YzEsXG4gICAgICBGbXA0LnNpemUoOCArIGF2Y2MuYnl0ZUxlbmd0aCksIEZtcDQudHlwZSgnYXZjQycpLCBhdmNjLFxuICAgICAgRm1wNC5zaXplKDIwKSwgRm1wNC50eXBlKCdidHJ0JyksIGJ0cnQsXG4gICAgICBGbXA0LnNpemUoMTYpLCBGbXA0LnR5cGUoJ3Bhc3AnKSwgcGFzcFxuICAgIClcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBzdHRzICgpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwIC8vIGVudHJ5X2NvdW50XG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDE2LCAnc3R0cycsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHN0c2MgKCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgLy8gZW50cnlfY291bnRcbiAgICBdKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTYsICdzdHNjJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgc3RjbyAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCAvLyBlbnRyeV9jb3VudFxuICAgIF0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxNiwgJ3N0Y28nLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBzdHN6ICgpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBzYW1wbGVfc2l6ZVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCAvLyBzYW1wbGVfY291bnRcbiAgICBdKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goMjAsICdzdHN6JywgY29udGVudClcbiAgfVxuICBzdGF0aWMgbXZleCAoZHVyYXRpb24sIHRpbWVzY2FsZSA9IDEwMDAsIHRyYWNrSUQpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IG1laGQgPSBCdWZmZXIud3JpdGVVaW50MzIoZHVyYXRpb24pXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZSg1NiksIEZtcDQudHlwZSgnbXZleCcpLCBGbXA0LnNpemUoMTYpLCBGbXA0LnR5cGUoJ21laGQnKSwgRm1wNC5leHRlbnNpb24oMCwgMCksIG1laGQsIEZtcDQudHJleCh0cmFja0lEKSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyB0cmV4IChpZCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgKGlkID4+IDI0KSxcbiAgICAgIChpZCA+PiAxNikgJiAweGZmLFxuICAgICAgKGlkID4+IDgpICYgMHhmZixcbiAgICAgIChpZCAmIDB4ZmYpLCAvLyB0cmFja19JRFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgLy8gZGVmYXVsdF9zYW1wbGVfZGVzY3JpcHRpb25faW5kZXhcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGRlZmF1bHRfc2FtcGxlX2R1cmF0aW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBkZWZhdWx0X3NhbXBsZV9zaXplXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAxIC8vIGRlZmF1bHRfc2FtcGxlX2ZsYWdzXG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGgsICd0cmV4JywgY29udGVudClcbiAgfVxuICBzdGF0aWMgbW9vZiAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBtZmhkID0gRm1wNC5tZmhkKClcbiAgICBsZXQgdHJhZiA9IEZtcDQudHJhZihkYXRhKTtcbiAgICBbbWZoZCwgdHJhZl0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KHNpemUsICdtb29mJywgbWZoZCwgdHJhZilcbiAgfVxuICBzdGF0aWMgbWZoZCAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBCdWZmZXIud3JpdGVVaW50MzIoRm1wNC5zZXF1ZW5jZSlcbiAgICBGbXA0LnNlcXVlbmNlICs9IDFcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDE2LCAnbWZoZCcsIEZtcDQuZXh0ZW5zaW9uKDAsIDApLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyB0cmFmIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHRmaGQgPSBGbXA0LnRmaGQoZGF0YS5pZClcbiAgICBsZXQgdGZkdCA9IEZtcDQudGZkdChkYXRhLnRpbWUpXG4gICAgbGV0IHNkdHAgPSBGbXA0LnNkdHAoZGF0YSlcbiAgICBsZXQgdHJ1biA9IEZtcDQudHJ1bihkYXRhLCBzZHRwLmJ5dGVMZW5ndGgpO1xuXG4gICAgW3RmaGQsIHRmZHQsIHRydW4sIHNkdHBdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveChzaXplLCAndHJhZicsIHRmaGQsIHRmZHQsIHRydW4sIHNkdHApXG4gIH1cbiAgc3RhdGljIHRmaGQgKGlkKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBCdWZmZXIud3JpdGVVaW50MzIoaWQpXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxNiwgJ3RmaGQnLCBGbXA0LmV4dGVuc2lvbigwLCAwKSwgY29udGVudClcbiAgfVxuICBzdGF0aWMgdGZkdCAodGltZSkge1xuICAgIC8vIGxldCB1cHBlciA9IE1hdGguZmxvb3IodGltZSAvIChVSU5UMzJfTUFYICsgMSkpLFxuICAgIC8vICAgICBsb3dlciA9IE1hdGguZmxvb3IodGltZSAlIChVSU5UMzJfTUFYICsgMSkpO1xuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTYsICd0ZmR0JywgRm1wNC5leHRlbnNpb24oMCwgMCksIEJ1ZmZlci53cml0ZVVpbnQzMih0aW1lKSlcbiAgfVxuICBzdGF0aWMgdHJ1biAoZGF0YSwgc2R0cExlbmd0aCkge1xuICAgIC8vIGxldCBpZCA9IGRhdGEuaWQ7XG4gICAgLy8gbGV0IGNlaWwgPSBpZCA9PT0gMSA/IDE2IDogMTI7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBzYW1wbGVDb3VudCA9IEJ1ZmZlci53cml0ZVVpbnQzMihkYXRhLnNhbXBsZXMubGVuZ3RoKVxuICAgIC8vIG1kYXQtaGVhZGVyIDhcbiAgICAvLyBtb29mLWhlYWRlciA4XG4gICAgLy8gbWZoZCAxNlxuICAgIC8vIHRyYWYtaGVhZGVyIDhcbiAgICAvLyB0aGhkIDE2XG4gICAgLy8gdGZkdCAyMFxuICAgIC8vIHRydW4taGVhZGVyIDEyXG4gICAgLy8gc2FtcGxlQ291bnQgNFxuICAgIC8vIGRhdGEtb2Zmc2V0IDRcbiAgICAvLyBzYW1wbGVzLmxlbmd0aFxuICAgIGxldCBvZmZzZXQgPSBCdWZmZXIud3JpdGVVaW50MzIoOCArIDggKyAxNiArIDggKyAxNiArIDE2ICsgMTIgKyA0ICsgNCArIDE2ICogZGF0YS5zYW1wbGVzLmxlbmd0aCArIHNkdHBMZW5ndGgpXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZSgyMCArIDE2ICogZGF0YS5zYW1wbGVzLmxlbmd0aCksIEZtcDQudHlwZSgndHJ1bicpLCBuZXcgVWludDhBcnJheShbMHgwMCwgMHgwMCwgMHgwRiwgMHgwMV0pLCBzYW1wbGVDb3VudCwgb2Zmc2V0KVxuXG4gICAgLy8gbGV0IHNpemUgPSBidWZmZXIuYnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAvLyBsZXQgd3JpdGVPZmZzZXQgPSAwXG4gICAgLy8gZGF0YS5zYW1wbGVzLmZvckVhY2goKCkgPT4ge1xuICAgIC8vICAgc2l6ZSArPSAxNlxuICAgIC8vIH0pXG4gICAgLy9cbiAgICAvLyBsZXQgdHJ1bkJveCA9IG5ldyBVaW50OEFycmF5KHNpemUpXG5cbiAgICAvLyB0cnVuQm94LnNldChidWZmZXIuYnVmZmVyLCAwKVxuXG4gICAgZGF0YS5zYW1wbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGZsYWdzID0gaXRlbS5mbGFnc1xuICAgICAgLy8gY29uc29sZS5sb2coaXRlbS50eXBlLCBpdGVtLmR0cywgaXRlbS5kdXJhdGlvbilcblxuICAgICAgYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgKGl0ZW0uZHVyYXRpb24gPj4+IDI0KSAmIDB4RkYsIC8vIHNhbXBsZV9kdXJhdGlvblxuICAgICAgICAoaXRlbS5kdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcbiAgICAgICAgKGl0ZW0uZHVyYXRpb24gPj4+IDgpICYgMHhGRixcbiAgICAgICAgKGl0ZW0uZHVyYXRpb24pICYgMHhGRixcbiAgICAgICAgKGl0ZW0uc2l6ZSA+Pj4gMjQpICYgMHhGRiwgLy8gc2FtcGxlX3NpemVcbiAgICAgICAgKGl0ZW0uc2l6ZSA+Pj4gMTYpICYgMHhGRixcbiAgICAgICAgKGl0ZW0uc2l6ZSA+Pj4gOCkgJiAweEZGLFxuICAgICAgICAoaXRlbS5zaXplKSAmIDB4RkYsXG4gICAgICAgIChmbGFncy5pc0xlYWRpbmcgPDwgMikgfCBmbGFncy5kZXBlbmRzT24sIC8vIHNhbXBsZV9mbGFnc1xuICAgICAgICAoZmxhZ3MuaXNEZXBlbmRlZE9uIDw8IDYpIHwgKGZsYWdzLmhhc1JlZHVuZGFuY3kgPDwgNCkgfCBmbGFncy5pc05vblN5bmMsXG4gICAgICAgIDB4MDAsIDB4MDAsIC8vIHNhbXBsZV9kZWdyYWRhdGlvbl9wcmlvcml0eVxuICAgICAgICAoaXRlbS5jdHMgPj4+IDI0KSAmIDB4RkYsIC8vIHNhbXBsZV9jb21wb3NpdGlvbl90aW1lX29mZnNldFxuICAgICAgICAoaXRlbS5jdHMgPj4+IDE2KSAmIDB4RkYsXG4gICAgICAgIChpdGVtLmN0cyA+Pj4gOCkgJiAweEZGLFxuICAgICAgICAoaXRlbS5jdHMpICYgMHhGRlxuICAgICAgXSkpXG4gICAgICAvLyB3cml0ZU9mZnNldCArPSAxNlxuICAgICAgLy8gYnVmZmVyLndyaXRlKEJ1ZmZlci53cml0ZVVpbnQzMigwKSk7XG4gICAgfSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBzZHRwIChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGJ1ZmZlci53cml0ZShGbXA0LnNpemUoMTIgKyBkYXRhLnNhbXBsZXMubGVuZ3RoKSwgRm1wNC50eXBlKCdzZHRwJyksIEZtcDQuZXh0ZW5zaW9uKDAsIDApKVxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgZmxhZ3MgPSBpdGVtLmZsYWdzXG4gICAgICBjb25zdCBudW0gPSAoZmxhZ3MuaXNMZWFkaW5nIDw8IDYpIHwgLy8gaXNfbGVhZGluZzogMiAoYml0KVxuICAgICAgICAoZmxhZ3MuZGVwZW5kc09uIDw8IDQpIHwgLy8gc2FtcGxlX2RlcGVuZHNfb25cbiAgICAgICAgKGZsYWdzLmlzRGVwZW5kZWRPbiA8PCAyKSB8IC8vIHNhbXBsZV9pc19kZXBlbmRlZF9vblxuICAgICAgICAoZmxhZ3MuaGFzUmVkdW5kYW5jeSkvLyBzYW1wbGVfaGFzX3JlZHVuZGFuY3lcblxuICAgICAgYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KFtudW1dKSlcbiAgICB9KVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIG1kYXQgKGRhdGEpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IHNpemUgPSA4XG4gICAgZGF0YS5zYW1wbGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uc2l6ZVxuICAgIH0pXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZShzaXplKSwgRm1wNC50eXBlKCdtZGF0JykpXG4gICAgbGV0IG1kYXRCb3ggPSBuZXcgVWludDhBcnJheShzaXplKVxuICAgIGxldCBvZmZzZXQgPSAwXG4gICAgbWRhdEJveC5zZXQoYnVmZmVyLmJ1ZmZlciwgb2Zmc2V0KVxuICAgIG9mZnNldCArPSA4XG4gICAgZGF0YS5zYW1wbGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmJ1ZmZlci5mb3JFYWNoKCh1bml0KSA9PiB7XG4gICAgICAgIG1kYXRCb3guc2V0KHVuaXQsIG9mZnNldClcbiAgICAgICAgb2Zmc2V0ICs9IHVuaXQuYnl0ZUxlbmd0aFxuICAgICAgICAvLyBidWZmZXIud3JpdGUodW5pdC5kYXRhKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gbWRhdEJveFxuICB9XG59XG5GbXA0LnR5cGUgPSAobmFtZSkgPT4ge1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW25hbWUuY2hhckNvZGVBdCgwKSwgbmFtZS5jaGFyQ29kZUF0KDEpLCBuYW1lLmNoYXJDb2RlQXQoMiksIG5hbWUuY2hhckNvZGVBdCgzKV0pXG59XG5GbXA0LnNlcXVlbmNlID0gMVxuXG5leHBvcnQgZGVmYXVsdCBGbXA0XG4iLCJpbXBvcnQge1xuICBFVkVOVFMsXG4gIHNuaWZmZXIsXG4gIE1lZGlhU2VnbWVudExpc3QsXG4gIEJ1ZmZlclxufSBmcm9tICd4Z3BsYXllci11dGlscyc7XG5pbXBvcnQgRm1wNCBmcm9tICcuL2ZtcDQnXG5cbmNvbnN0IFJFTVVYX0VWRU5UUyA9IEVWRU5UUy5SRU1VWF9FVkVOVFNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXA0UmVtdXhlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9kdHNCYXNlID0gMFxuICAgIHRoaXMuX2lzRHRzQmFzZUluaXRlZCA9IGZhbHNlXG5cbiAgICB0aGlzLmlzRmlyc3RWaWRlbyA9IHRydWVcbiAgICB0aGlzLmlzRmlyc3RBdWRpbyA9IHRydWVcblxuICAgIHRoaXMudmlkZW9BbGxEdXJhdGlvbiA9IDBcbiAgICB0aGlzLmF1ZGlvQWxsRHVyYXRpb24gPSAwXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLm9uKFJFTVVYX0VWRU5UUy5SRU1VWF9NRURJQSwgdGhpcy5yZW11eC5iaW5kKHRoaXMpKVxuICAgIHRoaXMub24oUkVNVVhfRVZFTlRTLlJFTVVYX01FVEFEQVRBLCB0aGlzLm9uTWV0YURhdGFSZWFkeS5iaW5kKHRoaXMpKVxuICAgIHRoaXMub24oUkVNVVhfRVZFTlRTLkRFVEVDVF9DSEFOR0VfU1RSRUFNLCB0aGlzLnJlc2V0RHRzQmFzZS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZHRzQmFzZSA9IC0xXG4gICAgdGhpcy5fZHRzQmFzZUluaXRlZCA9IGZhbHNlXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fZHRzQmFzZSA9IDBcbiAgICB0aGlzLl9pc0R0c0Jhc2VJbml0ZWQgPSBmYWxzZVxuICB9XG5cbiAgcmVtdXggKCkge1xuICAgIGNvbnN0IHsgYXVkaW9UcmFjaywgdmlkZW9UcmFjayB9ID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJylcbiAgICAhdGhpcy5faXNEdHNCYXNlSW5pdGVkICYmIHRoaXMuY2FsY0R0c0Jhc2UoYXVkaW9UcmFjaywgdmlkZW9UcmFjaylcblxuICAgIHRoaXMuX3JlbXV4VmlkZW8odmlkZW9UcmFjaylcbiAgICB0aGlzLl9yZW11eEF1ZGlvKGF1ZGlvVHJhY2spXG4gIH1cblxuICByZXNldER0c0Jhc2UgKCkge1xuICAgIC8vIGZvciBobHMg5Lit6YCU5YiH5o2iIG1ldGHlkI5zZWVrXG4gICAgdGhpcy5fZHRzQmFzZSA9IDBcbiAgICB0aGlzLl9kdHNCYXNlSW5pdGVkID0gZmFsc2VcbiAgfVxuXG4gIHNlZWsgKCkge1xuXG4gIH1cblxuICBvbk1ldGFEYXRhUmVhZHkgKHR5cGUpIHtcbiAgICBsZXQgdHJhY2tcblxuICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICBjb25zdCB7IGF1ZGlvVHJhY2sgfSA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpXG4gICAgICB0cmFjayA9IGF1ZGlvVHJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgdmlkZW9UcmFjayB9ID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJylcbiAgICAgIHRyYWNrID0gdmlkZW9UcmFjaztcbiAgICB9XG5cbiAgICBsZXQgcHJlc291cmNlYnVmZmVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnUFJFX1NPVVJDRV9CVUZGRVInKTtcbiAgICBsZXQgc291cmNlID0gcHJlc291cmNlYnVmZmVyLmdldFNvdXJjZSh0eXBlKTtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgc291cmNlID0gcHJlc291cmNlYnVmZmVyLmNyZWF0ZVNvdXJjZSh0eXBlKTtcbiAgICB9XG5cbiAgICBzb3VyY2UubWltZXR5cGUgPSB0cmFjay5tZXRhLmNvZGVjO1xuICAgIHNvdXJjZS5pbml0ID0gdGhpcy5yZW11eEluaXRTZWdtZW50KHR5cGUsIHRyYWNrLm1ldGEpO1xuICAgIC8vIHNvdXJjZS5pbml0ZWQgPSBmYWxzZTtcblxuICAgIC8vIHRoaXMucmVzZXREdHNCYXNlKClcbiAgICB0aGlzLmVtaXQoUkVNVVhfRVZFTlRTLklOSVRfU0VHTUVOVCwgdHlwZSlcbiAgfVxuXG4gIHJlbXV4SW5pdFNlZ21lbnQgKHR5cGUsIG1ldGEpIHtcbiAgICBsZXQgaW5pdFNlZ21lbnQgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgZnR5cCA9IEZtcDQuZnR5cCgpXG4gICAgbGV0IG1vb3YgPSBGbXA0Lm1vb3YoeyB0eXBlLCBtZXRhOiBtZXRhIH0pXG5cbiAgICBpbml0U2VnbWVudC53cml0ZShmdHlwLCBtb292KVxuICAgIHJldHVybiBpbml0U2VnbWVudDtcbiAgfVxuXG4gIGNhbGNEdHNCYXNlIChhdWRpb1RyYWNrLCB2aWRlb1RyYWNrKSB7XG4gICAgaWYgKCFhdWRpb1RyYWNrLnNhbXBsZXMubGVuZ3RoICYmICF2aWRlb1RyYWNrLnNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGF1ZGlvQmFzZSA9IEluZmluaXR5XG4gICAgbGV0IHZpZGVvQmFzZSA9IEluZmluaXR5XG5cbiAgICBpZiAoYXVkaW9UcmFjay5zYW1wbGVzICYmIGF1ZGlvVHJhY2suc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGF1ZGlvQmFzZSA9IGF1ZGlvVHJhY2suc2FtcGxlc1swXS5kdHNcbiAgICB9XG4gICAgaWYgKHZpZGVvVHJhY2suc2FtcGxlcyAmJiB2aWRlb1RyYWNrLnNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICB2aWRlb0Jhc2UgPSB2aWRlb1RyYWNrLnNhbXBsZXNbMF0uZHRzXG4gICAgfVxuXG4gICAgdGhpcy5fZHRzQmFzZSA9IE1hdGgubWluKGF1ZGlvQmFzZSwgdmlkZW9CYXNlKVxuICAgIHRoaXMuX2lzRHRzQmFzZUluaXRlZCA9IHRydWVcbiAgfVxuXG4gIF9yZW11eFZpZGVvICh2aWRlb1RyYWNrKSB7XG4gICAgY29uc3QgdHJhY2sgPSB2aWRlb1RyYWNrXG5cbiAgICBpZiAoIXZpZGVvVHJhY2suc2FtcGxlcyB8fCAhdmlkZW9UcmFjay5zYW1wbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHtzYW1wbGVzfSA9IHRyYWNrXG4gICAgbGV0IGZpcnN0RHRzID0gLTFcblxuICAgIGxldCBpbml0U2VnbWVudCA9IG51bGxcbiAgICBjb25zdCBtcDRTYW1wbGVzID0gW11cbiAgICBjb25zdCBtZGF0Qm94ID0ge1xuICAgICAgc2FtcGxlczogW11cbiAgICB9XG5cbiAgICB3aGlsZSAoc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGF2Y1NhbXBsZSA9IHNhbXBsZXMuc2hpZnQoKVxuXG4gICAgICBjb25zdCB7IGlzS2V5ZnJhbWUsIG9wdGlvbnMgfSA9IGF2Y1NhbXBsZVxuICAgICAgaWYgKCF0aGlzLmlzRmlyc3RBdWRpbyAmJiBvcHRpb25zICYmIG9wdGlvbnMubWV0YSkge1xuICAgICAgICBpbml0U2VnbWVudCA9IHRoaXMucmVtdXhJbml0U2VnbWVudCgndmlkZW8nLCBvcHRpb25zLm1ldGEpXG4gICAgICAgIG9wdGlvbnMubWV0YSA9IG51bGxcbiAgICAgICAgc2FtcGxlcy51bnNoaWZ0KGF2Y1NhbXBsZSlcbiAgICAgICAgaWYgKCFvcHRpb25zLmlzQ29udGludWUpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0RHRzQmFzZSgpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGxldCBkdHMgPSBhdmNTYW1wbGUuZHRzIC0gdGhpcy5fZHRzQmFzZVxuXG4gICAgICBpZiAoZmlyc3REdHMgPT09IC0xKSB7XG4gICAgICAgIGZpcnN0RHRzID0gZHRzXG4gICAgICB9XG5cbiAgICAgIGxldCBjdHNcbiAgICAgIGxldCBwdHNcbiAgICAgIGlmIChhdmNTYW1wbGUucHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHRzID0gYXZjU2FtcGxlLnB0cyAtIHRoaXMuX2R0c0Jhc2VcbiAgICAgICAgY3RzID0gcHRzIC0gZHRzXG4gICAgICB9XG4gICAgICBpZiAoYXZjU2FtcGxlLmN0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHB0cyA9IGF2Y1NhbXBsZS5jdHMgKyBkdHNcbiAgICAgICAgY3RzID0gYXZjU2FtcGxlLmN0c1xuICAgICAgfVxuXG4gICAgICBsZXQgbWRhdFNhbXBsZSA9IHtcbiAgICAgICAgYnVmZmVyOiBbXSxcbiAgICAgICAgc2l6ZTogMFxuICAgICAgfVxuICAgICAgbWRhdEJveC5zYW1wbGVzLnB1c2gobWRhdFNhbXBsZSlcbiAgICAgIG1kYXRTYW1wbGUuYnVmZmVyLnB1c2goYXZjU2FtcGxlLmRhdGEpXG4gICAgICBtZGF0U2FtcGxlLnNpemUgKz0gYXZjU2FtcGxlLmRhdGEuYnl0ZUxlbmd0aFxuXG4gICAgICBsZXQgc2FtcGxlRHVyYXRpb24gPSAwXG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICBjb25zdCBuZXh0RHRzID0gc2FtcGxlc1swXS5kdHMgLSB0aGlzLl9kdHNCYXNlXG4gICAgICAgIHNhbXBsZUR1cmF0aW9uID0gbmV4dER0cyAtIGR0c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1wNFNhbXBsZXMubGVuZ3RoID49IDEpIHsgLy8gbGFzdGVzdCBzYW1wbGUsIHVzZSBzZWNvbmQgbGFzdCBkdXJhdGlvblxuICAgICAgICAgIHNhbXBsZUR1cmF0aW9uID0gbXA0U2FtcGxlc1ttcDRTYW1wbGVzLmxlbmd0aCAtIDFdLmR1cmF0aW9uXG4gICAgICAgIH0gZWxzZSB7IC8vIHRoZSBvbmx5IG9uZSBzYW1wbGUsIHVzZSByZWZlcmVuY2UgZHVyYXRpb25cbiAgICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IHRoaXMudmlkZW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudmlkZW9BbGxEdXJhdGlvbiArPSBzYW1wbGVEdXJhdGlvblxuICAgICAgLy8gY29uc29sZS5sb2coYGR0cyAke2R0c31gLCBgcHRzICR7cHRzfWAsIGBjdHM6ICR7Y3RzfWAsIGBkdXJhdGlvbjogJHtzYW1wbGVEdXJhdGlvbn1gLCBhdmNTYW1wbGUpXG4gICAgICBtcDRTYW1wbGVzLnB1c2goe1xuICAgICAgICBkdHMsXG4gICAgICAgIGN0cyxcbiAgICAgICAgcHRzLFxuICAgICAgICBkYXRhOiBhdmNTYW1wbGUuZGF0YSxcbiAgICAgICAgc2l6ZTogYXZjU2FtcGxlLmRhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgaXNLZXlmcmFtZSxcbiAgICAgICAgZHVyYXRpb246IHNhbXBsZUR1cmF0aW9uLFxuICAgICAgICBmbGFnczoge1xuICAgICAgICAgIGlzTGVhZGluZzogMCxcbiAgICAgICAgICBkZXBlbmRzT246IGlzS2V5ZnJhbWUgPyAyIDogMSxcbiAgICAgICAgICBpc0RlcGVuZGVkT246IGlzS2V5ZnJhbWUgPyAxIDogMCxcbiAgICAgICAgICBoYXNSZWR1bmRhbmN5OiAwLFxuICAgICAgICAgIGlzTm9uU3luYzogaXNLZXlmcmFtZSA/IDAgOiAxXG4gICAgICAgIH0sXG4gICAgICAgIG9yaWdpbkR0czogZHRzLFxuICAgICAgICB0eXBlOiAndmlkZW8nXG4gICAgICB9KVxuICAgIH1cblxuICAgIGxldCBtb29mTWRhdCA9IG5ldyBCdWZmZXIoKVxuICAgIGlmIChtcDRTYW1wbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgbW9vZiA9IEZtcDQubW9vZih7XG4gICAgICAgIGlkOiB0cmFjay5tZXRhLmlkLFxuICAgICAgICB0aW1lOiBmaXJzdER0cyxcbiAgICAgICAgc2FtcGxlczogbXA0U2FtcGxlc1xuICAgICAgfSlcbiAgICAgIGNvbnN0IG1kYXQgPSBGbXA0Lm1kYXQobWRhdEJveClcbiAgICAgIG1vb2ZNZGF0LndyaXRlKG1vb2YsIG1kYXQpXG5cbiAgICAgIHRoaXMud3JpdGVUb1NvdXJjZSgndmlkZW8nLCBtb29mTWRhdClcbiAgICB9XG5cbiAgICBpZiAoaW5pdFNlZ21lbnQpIHtcbiAgICAgIHRoaXMud3JpdGVUb1NvdXJjZSgndmlkZW8nLCBpbml0U2VnbWVudClcblxuICAgICAgaWYgKHNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIHNlY29uZCBwYXJ0IG9mIHN0cmVhbSBjaGFuZ2VcbiAgICAgICAgdHJhY2suc2FtcGxlcyA9IHNhbXBsZXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW11eFZpZGVvKHRyYWNrKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaXNGaXJzdFZpZGVvID0gZmFsc2VcbiAgICB0aGlzLmVtaXQoUkVNVVhfRVZFTlRTLk1FRElBX1NFR01FTlQsICd2aWRlbycpXG5cbiAgICBjb25zdCBsYXN0U2FtcGxlID0gbXA0U2FtcGxlc1ttcDRTYW1wbGVzLmxlbmd0aCAtIDFdXG4gICAgdGhpcy5fdmlkZW9OZXh0RHRzID0gbGFzdFNhbXBsZS5kdHMgKyBsYXN0U2FtcGxlLmR1cmF0aW9uO1xuICAgIHRyYWNrLnNhbXBsZXMgPSBbXVxuICAgIHRyYWNrLmxlbmd0aCA9IDBcbiAgfVxuXG4gIF9yZW11eEF1ZGlvICh0cmFjaykge1xuICAgIGNvbnN0IHtzYW1wbGVzfSA9IHRyYWNrXG4gICAgbGV0IGZpcnN0RHRzID0gLTFcbiAgICBsZXQgbXA0U2FtcGxlcyA9IFtdXG5cbiAgICBsZXQgaW5pdFNlZ21lbnQgPSBudWxsXG4gICAgY29uc3QgbWRhdEJveCA9IHtcbiAgICAgIHNhbXBsZXM6IFtdXG4gICAgfVxuICAgIGlmICghc2FtcGxlcyB8fCAhc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgaXNGaXJzdER0c0luaXRlZCA9IGZhbHNlXG4gICAgd2hpbGUgKHNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgc2FtcGxlID0gc2FtcGxlcy5zaGlmdCgpXG4gICAgICBjb25zdCB7IGRhdGEsIG9wdGlvbnMgfSA9IHNhbXBsZVxuICAgICAgaWYgKCF0aGlzLmlzRmlyc3RBdWRpbyAmJiBvcHRpb25zICYmIG9wdGlvbnMubWV0YSkge1xuICAgICAgICBpbml0U2VnbWVudCA9IHRoaXMucmVtdXhJbml0U2VnbWVudCgnYXVkaW8nLCBvcHRpb25zLm1ldGEpXG4gICAgICAgIG9wdGlvbnMubWV0YSA9IG51bGw7XG4gICAgICAgIHNhbXBsZXMudW5zaGlmdChzYW1wbGUpXG4gICAgICAgIGlmICghb3B0aW9ucy5pc0NvbnRpbnVlKSB7XG4gICAgICAgICAgdGhpcy5yZXNldER0c0Jhc2UoKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZXQgZHRzID0gc2FtcGxlLmR0cyAtIHRoaXMuX2R0c0Jhc2VcbiAgICAgIGNvbnN0IG9yaWdpbkR0cyA9IGR0c1xuICAgICAgaWYgKCFpc0ZpcnN0RHRzSW5pdGVkKSB7XG4gICAgICAgIGZpcnN0RHRzID0gZHRzXG4gICAgICAgIGlzRmlyc3REdHNJbml0ZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGxldCBzYW1wbGVEdXJhdGlvbiA9IDBcblxuICAgICAgaWYgKHRoaXMuYXVkaW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQpIHtcbiAgICAgICAgc2FtcGxlRHVyYXRpb24gPSB0aGlzLmF1ZGlvTWV0YS5yZWZTYW1wbGVEdXJhdGlvbkZpeGVkXG4gICAgICB9IGVsc2UgaWYgKHNhbXBsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgY29uc3QgbmV4dER0cyA9IHNhbXBsZXNbMF0uZHRzIC0gdGhpcy5fZHRzQmFzZTtcbiAgICAgICAgc2FtcGxlRHVyYXRpb24gPSBuZXh0RHRzIC0gZHRzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobXA0U2FtcGxlcy5sZW5ndGggPj0gMSkgeyAvLyB1c2Ugc2Vjb25kIGxhc3Qgc2FtcGxlIGR1cmF0aW9uXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSBtcDRTYW1wbGVzW21wNFNhbXBsZXMubGVuZ3RoIC0gMV0uZHVyYXRpb25cbiAgICAgICAgfSBlbHNlIHsgLy8gdGhlIG9ubHkgb25lIHNhbXBsZSwgdXNlIHJlZmVyZW5jZSBzYW1wbGUgZHVyYXRpb25cbiAgICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IHRoaXMuYXVkaW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coJ3JlbXV4IGF1ZGlvICcsIGR0cylcbiAgICAgIHRoaXMuYXVkaW9BbGxEdXJhdGlvbiArPSBzYW1wbGVEdXJhdGlvblxuICAgICAgY29uc3QgbXA0U2FtcGxlID0ge1xuICAgICAgICBkdHMsXG4gICAgICAgIHB0czogZHRzLFxuICAgICAgICBjdHM6IDAsXG4gICAgICAgIHNpemU6IGRhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgZHVyYXRpb246IHNhbXBsZS5kdXJhdGlvbiA/IHNhbXBsZS5kdXJhdGlvbiA6IHNhbXBsZUR1cmF0aW9uLFxuICAgICAgICBmbGFnczoge1xuICAgICAgICAgIGlzTGVhZGluZzogMCxcbiAgICAgICAgICBkZXBlbmRzT246IDIsXG4gICAgICAgICAgaXNEZXBlbmRlZE9uOiAxLFxuICAgICAgICAgIGhhc1JlZHVuZGFuY3k6IDAsXG4gICAgICAgICAgaXNOb25TeW5jOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGlzS2V5ZnJhbWU6IHRydWUsXG4gICAgICAgIG9yaWdpbkR0cyxcbiAgICAgICAgdHlwZTogJ2F1ZGlvJ1xuICAgICAgfVxuXG4gICAgICBsZXQgbWRhdFNhbXBsZSA9IHtcbiAgICAgICAgYnVmZmVyOiBbXSxcbiAgICAgICAgc2l6ZTogMFxuICAgICAgfVxuICAgICAgbWRhdFNhbXBsZS5idWZmZXIucHVzaChkYXRhKVxuICAgICAgbWRhdFNhbXBsZS5zaXplICs9IGRhdGEuYnl0ZUxlbmd0aFxuXG4gICAgICBtZGF0Qm94LnNhbXBsZXMucHVzaChtZGF0U2FtcGxlKVxuXG4gICAgICBtcDRTYW1wbGVzLnB1c2gobXA0U2FtcGxlKVxuICAgIH1cblxuICAgIGNvbnN0IG1vb2ZNZGF0ID0gbmV3IEJ1ZmZlcigpXG5cbiAgICBpZiAobXA0U2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1vb2YgPSBGbXA0Lm1vb2Yoe1xuICAgICAgICBpZDogdHJhY2subWV0YS5pZCxcbiAgICAgICAgdGltZTogZmlyc3REdHMsXG4gICAgICAgIHNhbXBsZXM6IG1wNFNhbXBsZXNcbiAgICAgIH0pXG4gICAgICBjb25zdCBtZGF0ID0gRm1wNC5tZGF0KG1kYXRCb3gpXG4gICAgICBtb29mTWRhdC53cml0ZShtb29mLCBtZGF0KVxuXG4gICAgICB0aGlzLndyaXRlVG9Tb3VyY2UoJ2F1ZGlvJywgbW9vZk1kYXQpXG4gICAgfVxuXG4gICAgaWYgKGluaXRTZWdtZW50KSB7XG4gICAgICB0aGlzLndyaXRlVG9Tb3VyY2UoJ2F1ZGlvJywgaW5pdFNlZ21lbnQpXG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gc2Vjb25kIHBhcnQgb2Ygc3RyZWFtIGNoYW5nZVxuICAgICAgICB0cmFjay5zYW1wbGVzID0gc2FtcGxlcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbXV4QXVkaW8odHJhY2spXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pc0ZpcnN0QXVkaW8gPSBmYWxzZVxuICAgIHRoaXMuZW1pdChSRU1VWF9FVkVOVFMuTUVESUFfU0VHTUVOVCwgJ2F1ZGlvJywgbW9vZk1kYXQpXG5cbiAgICBjb25zdCBsYXN0U2FtcGxlID0gbXA0U2FtcGxlc1ttcDRTYW1wbGVzLmxlbmd0aCAtIDFdXG4gICAgdGhpcy5fdmlkZW9OZXh0RHRzID0gbGFzdFNhbXBsZS5kdHMgKyBsYXN0U2FtcGxlLmR1cmF0aW9uO1xuICAgIHRyYWNrLnNhbXBsZXMgPSBbXVxuICAgIHRyYWNrLmxlbmd0aCA9IDBcbiAgfVxuXG4gIHdyaXRlVG9Tb3VyY2UgKHR5cGUsIGJ1ZmZlcikge1xuICAgIGxldCBwcmVzb3VyY2VidWZmZXIgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdQUkVfU09VUkNFX0JVRkZFUicpO1xuICAgIGxldCBzb3VyY2UgPSBwcmVzb3VyY2VidWZmZXIuZ2V0U291cmNlKHR5cGUpO1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICBzb3VyY2UgPSBwcmVzb3VyY2VidWZmZXIuY3JlYXRlU291cmNlKHR5cGUpO1xuICAgIH1cblxuICAgIHNvdXJjZS5kYXRhLnB1c2goYnVmZmVyKVxuICB9XG5cbiAgaW5pdFNpbGVudEF1ZGlvIChkdHMsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgdW5pdCA9IE1wNFJlbXV4ZXIuZ2V0U2lsZW50RnJhbWUodGhpcy5hdWRpb01ldGEuY2hhbm5lbENvdW50KVxuICAgIHJldHVybiB7XG4gICAgICBkdHMsXG4gICAgICBwdHM6IGR0cyxcbiAgICAgIGN0czogMCxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdW5pdCxcbiAgICAgIHNpemU6IHVuaXQuYnl0ZUxlbmd0aCxcbiAgICAgIG9yaWdpbkR0czogZHRzLFxuICAgICAgdHlwZTogJ3ZpZGVvJ1xuICAgIH1cbiAgfVxuXG4gIGdldCB2aWRlb01ldGEgKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKS52aWRlb1RyYWNrLm1ldGFcbiAgfVxuICBnZXQgYXVkaW9NZXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJykuYXVkaW9UcmFjay5tZXRhXG4gIH1cblxuICBzdGF0aWMgZ2V0U2lsZW50RnJhbWUgKGNoYW5uZWxDb3VudCkge1xuICAgIGlmIChjaGFubmVsQ291bnQgPT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMywgMHg4MF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDIpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgyMSwgMHgwMCwgMHg0OSwgMHg5MCwgMHgwMiwgMHgxOSwgMHgwMCwgMHgyMywgMHg4MF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDMpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4ZV0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDQpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MCwgMHgyYywgMHg4MCwgMHgwOCwgMHgwMiwgMHgzOF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDUpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MiwgMHgzMCwgMHgwNCwgMHg5OSwgMHgwMCwgMHgyMSwgMHg5MCwgMHgwMiwgMHgzOF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDYpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MiwgMHgzMCwgMHgwNCwgMHg5OSwgMHgwMCwgMHgyMSwgMHg5MCwgMHgwMiwgMHgwMCwgMHhiMiwgMHgwMCwgMHgyMCwgMHgwOCwgMHhlMF0pXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBDb250ZXh0OiByZXF1aXJlKCcuL3NyYy9jb250ZXh0JykuZGVmYXVsdCxcblxuICAvLyBNb2R1bGVzIGZyb20gY29uc3RhbnRzXG4gIEVWRU5UUzogcmVxdWlyZSgnLi9zcmMvY29uc3RhbnRzL2V2ZW50cycpLmRlZmF1bHQsXG4gIFdPUktFUl9DT01NQU5EUzogcmVxdWlyZSgnLi9zcmMvY29uc3RhbnRzL3dvcmtlci1jb21tYW5kcycpLmRlZmF1bHQsXG5cbiAgLy8gTW9kdWxlcyBmcm9tIGVudlxuICBzbmlmZmVyOiByZXF1aXJlKCcuL3NyYy9lbnYvc25pZmZlcicpLmRlZmF1bHQsXG4gIGlzTGU6IHJlcXVpcmUoJy4vc3JjL2Vudi9pc2xlJykuZGVmYXVsdCxcbiAgVVRGODogcmVxdWlyZSgnLi9zcmMvZW52L3V0ZjgnKS5kZWZhdWx0LFxuICBQYWdlVmlzaWJpbGl0eTogcmVxdWlyZSgnLi9zcmMvZW52L1BhZ2VWaXNpYmlsaXR5JykuZGVmYXVsdCxcblxuICAvLyBNb2RlbHNcbiAgTWVkaWFJbmZvOiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvbWVkaWEtaW5mbycpLmRlZmF1bHQsXG4gIE1lZGlhU2FtcGxlOiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvbWVkaWEtc2FtcGxlJykuZGVmYXVsdCxcbiAgTWVkaWFTZWdtZW50OiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvbWVkaWEtc2VnbWVudCcpLmRlZmF1bHQsXG4gIE1lZGlhU2VnbWVudExpc3Q6IHJlcXVpcmUoJy4vc3JjL21vZGVscy9tZWRpYS1zZWdtZW50LWxpc3QnKS5kZWZhdWx0LFxuICBBdWRpb1RyYWNrTWV0YTogcmVxdWlyZSgnLi9zcmMvbW9kZWxzL3RyYWNrLW1ldGEnKS5BdWRpb1RyYWNrTWV0YSxcbiAgVmlkZW9UcmFja01ldGE6IHJlcXVpcmUoJy4vc3JjL21vZGVscy90cmFjay1tZXRhJykuVmlkZW9UcmFja01ldGEsXG4gIEF1ZGlvVHJhY2tTYW1wbGU6IHJlcXVpcmUoJy4vc3JjL21vZGVscy90cmFjay1zYW1wbGUnKS5BdWRpb1RyYWNrU2FtcGxlLFxuICBWaWRlb1RyYWNrU2FtcGxlOiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvdHJhY2stc2FtcGxlJykuVmlkZW9UcmFja1NhbXBsZSxcblxuICAvLyBNb2R1bGVzIGZyb20gbXNlXG4gIE1zZTogcmVxdWlyZSgnLi9zcmMvbXNlL2luZGV4JykuZGVmYXVsdCxcblxuICAvLyBNb2R1bGVzIGZyb20gd3JpdGVcbiAgU3RyZWFtOiByZXF1aXJlKCcuL3NyYy93cml0ZS9zdHJlYW0nKS5kZWZhdWx0LFxuICBCdWZmZXI6IHJlcXVpcmUoJy4vc3JjL3dyaXRlL2J1ZmZlcicpLmRlZmF1bHQsXG5cbiAgTW9iaWxlVmlkZW86IHJlcXVpcmUoJy4vc3JjL21vYmlsZS9tb2JpbGUtdmlkZW8nKSxcbiAgLy8gQ3J5cHRvXG4gIENyeXB0bzogcmVxdWlyZSgnLi9zcmMvY3J5cHRvJykuZGVmYXVsdFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoUmVzdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJyYXlzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFycmF5c1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBhcnJheXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgYXJyID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIHRvdGFsTGVuZ3RoICs9IGFyci5sZW5ndGg7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSBuZXcgUmVzdWx0Q29uc3RydWN0b3IodG90YWxMZW5ndGgpO1xuICB2YXIgb2Zmc2V0ID0gMDtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IGFycmF5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgdmFyIF9hcnIgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgIHJlc3VsdC5zZXQoX2Fyciwgb2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSBfYXJyLmxlbmd0aDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2NvbmNhdCcpO1xuXG52YXIgX2NvbmNhdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25jYXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25jYXQyLmRlZmF1bHQ7IiwiZnVuY3Rpb24gd2VicGFja0Jvb3RzdHJhcEZ1bmMgKG1vZHVsZXMpIHtcbi8qKioqKiovICAvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyAgdmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gIC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyAgICAvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovICAgIGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gICAgICByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gICAgLy8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovICAgICAgaTogbW9kdWxlSWQsXG4vKioqKioqLyAgICAgIGw6IGZhbHNlLFxuLyoqKioqKi8gICAgICBleHBvcnRzOiB7fVxuLyoqKioqKi8gICAgfTtcblxuLyoqKioqKi8gICAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyAgICBtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gICAgLy8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gICAgbW9kdWxlLmwgPSB0cnVlO1xuXG4vKioqKioqLyAgICAvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gIH1cblxuLyoqKioqKi8gIC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gIC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gIC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbi8qKioqKiovICAvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovICAgIGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyAgICAgICAgZ2V0OiBnZXR0ZXJcbi8qKioqKiovICAgICAgfSk7XG4vKioqKioqLyAgICB9XG4vKioqKioqLyAgfTtcblxuLyoqKioqKi8gIC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gIH07XG5cbi8qKioqKiovICAvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gICAgdmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyAgICAgIGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyAgICAgIGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyAgICByZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gIH07XG5cbi8qKioqKiovICAvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbi8qKioqKiovICAvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4vKioqKioqLyAgLy8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gIHZhciBmID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBFTlRSWV9NT0RVTEUpXG4gIHJldHVybiBmLmRlZmF1bHQgfHwgZiAvLyB0cnkgdG8gY2FsbCBkZWZhdWx0IGlmIGRlZmluZWQgdG8gYWxzbyBzdXBwb3J0IGJhYmVsIGVzbW9kdWxlIGV4cG9ydHNcbn1cblxudmFyIG1vZHVsZU5hbWVSZXFFeHAgPSAnW1xcXFwufFxcXFwtfFxcXFwrfFxcXFx3fFxcL3xAXSsnXG52YXIgZGVwZW5kZW5jeVJlZ0V4cCA9ICdcXFxcKFxcXFxzKihcXC9cXFxcKi4qP1xcXFwqXFwvKT9cXFxccyouKj8oJyArIG1vZHVsZU5hbWVSZXFFeHAgKyAnKS4qP1xcXFwpJyAvLyBhZGRpdGlvbmFsIGNoYXJzIHdoZW4gb3V0cHV0LnBhdGhpbmZvIGlzIHRydWVcblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjU5MzY2MS8xMzA0NDJcbmZ1bmN0aW9uIHF1b3RlUmVnRXhwIChzdHIpIHtcbiAgcmV0dXJuIChzdHIgKyAnJykucmVwbGFjZSgvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuICFpc05hTigxICogbik7IC8vIDEgKiBuIGNvbnZlcnRzIGludGVnZXJzLCBpbnRlZ2VycyBhcyBzdHJpbmcgKFwiMTIzXCIpLCAxZTMgYW5kIFwiMWUzXCIgdG8gaW50ZWdlcnMgYW5kIHN0cmluZ3MgdG8gTmFOXG59XG5cbmZ1bmN0aW9uIGdldE1vZHVsZURlcGVuZGVuY2llcyAoc291cmNlcywgbW9kdWxlLCBxdWV1ZU5hbWUpIHtcbiAgdmFyIHJldHZhbCA9IHt9XG4gIHJldHZhbFtxdWV1ZU5hbWVdID0gW11cblxuICB2YXIgZm5TdHJpbmcgPSBtb2R1bGUudG9TdHJpbmcoKVxuICB2YXIgd3JhcHBlclNpZ25hdHVyZSA9IGZuU3RyaW5nLm1hdGNoKC9eZnVuY3Rpb25cXHM/XFx3KlxcKFxcdyssXFxzKlxcdyssXFxzKihcXHcrKVxcKS8pXG4gIGlmICghd3JhcHBlclNpZ25hdHVyZSkgcmV0dXJuIHJldHZhbFxuICB2YXIgd2VicGFja1JlcXVpcmVOYW1lID0gd3JhcHBlclNpZ25hdHVyZVsxXVxuXG4gIC8vIG1haW4gYnVuZGxlIGRlcHNcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnKFxcXFxcXFxcbnxcXFxcVyknICsgcXVvdGVSZWdFeHAod2VicGFja1JlcXVpcmVOYW1lKSArIGRlcGVuZGVuY3lSZWdFeHAsICdnJylcbiAgdmFyIG1hdGNoXG4gIHdoaWxlICgobWF0Y2ggPSByZS5leGVjKGZuU3RyaW5nKSkpIHtcbiAgICBpZiAobWF0Y2hbM10gPT09ICdkbGwtcmVmZXJlbmNlJykgY29udGludWVcbiAgICByZXR2YWxbcXVldWVOYW1lXS5wdXNoKG1hdGNoWzNdKVxuICB9XG5cbiAgLy8gZGxsIGRlcHNcbiAgcmUgPSBuZXcgUmVnRXhwKCdcXFxcKCcgKyBxdW90ZVJlZ0V4cCh3ZWJwYWNrUmVxdWlyZU5hbWUpICsgJ1xcXFwoXCIoZGxsLXJlZmVyZW5jZVxcXFxzKCcgKyBtb2R1bGVOYW1lUmVxRXhwICsgJykpXCJcXFxcKVxcXFwpJyArIGRlcGVuZGVuY3lSZWdFeHAsICdnJylcbiAgd2hpbGUgKChtYXRjaCA9IHJlLmV4ZWMoZm5TdHJpbmcpKSkge1xuICAgIGlmICghc291cmNlc1ttYXRjaFsyXV0pIHtcbiAgICAgIHJldHZhbFtxdWV1ZU5hbWVdLnB1c2gobWF0Y2hbMV0pXG4gICAgICBzb3VyY2VzW21hdGNoWzJdXSA9IF9fd2VicGFja19yZXF1aXJlX18obWF0Y2hbMV0pLm1cbiAgICB9XG4gICAgcmV0dmFsW21hdGNoWzJdXSA9IHJldHZhbFttYXRjaFsyXV0gfHwgW11cbiAgICByZXR2YWxbbWF0Y2hbMl1dLnB1c2gobWF0Y2hbNF0pXG4gIH1cblxuICAvLyBjb252ZXJ0IDFlMyBiYWNrIHRvIDEwMDAgLSB0aGlzIGNhbiBiZSBpbXBvcnRhbnQgYWZ0ZXIgdWdsaWZ5LWpzIGNvbnZlcnRlZCAxMDAwIHRvIDFlM1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJldHZhbCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmV0dmFsW2tleXNbaV1dLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoaXNOdW1lcmljKHJldHZhbFtrZXlzW2ldXVtqXSkpIHtcbiAgICAgICAgcmV0dmFsW2tleXNbaV1dW2pdID0gMSAqIHJldHZhbFtrZXlzW2ldXVtqXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0dmFsXG59XG5cbmZ1bmN0aW9uIGhhc1ZhbHVlc0luUXVldWVzIChxdWV1ZXMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhxdWV1ZXMpXG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzVmFsdWVzLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzVmFsdWVzIHx8IHF1ZXVlc1trZXldLmxlbmd0aCA+IDBcbiAgfSwgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGdldFJlcXVpcmVkTW9kdWxlcyAoc291cmNlcywgbW9kdWxlSWQpIHtcbiAgdmFyIG1vZHVsZXNRdWV1ZSA9IHtcbiAgICBtYWluOiBbbW9kdWxlSWRdXG4gIH1cbiAgdmFyIHJlcXVpcmVkTW9kdWxlcyA9IHtcbiAgICBtYWluOiBbXVxuICB9XG4gIHZhciBzZWVuTW9kdWxlcyA9IHtcbiAgICBtYWluOiB7fVxuICB9XG5cbiAgd2hpbGUgKGhhc1ZhbHVlc0luUXVldWVzKG1vZHVsZXNRdWV1ZSkpIHtcbiAgICB2YXIgcXVldWVzID0gT2JqZWN0LmtleXMobW9kdWxlc1F1ZXVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcXVldWVOYW1lID0gcXVldWVzW2ldXG4gICAgICB2YXIgcXVldWUgPSBtb2R1bGVzUXVldWVbcXVldWVOYW1lXVxuICAgICAgdmFyIG1vZHVsZVRvQ2hlY2sgPSBxdWV1ZS5wb3AoKVxuICAgICAgc2Vlbk1vZHVsZXNbcXVldWVOYW1lXSA9IHNlZW5Nb2R1bGVzW3F1ZXVlTmFtZV0gfHwge31cbiAgICAgIGlmIChzZWVuTW9kdWxlc1txdWV1ZU5hbWVdW21vZHVsZVRvQ2hlY2tdIHx8ICFzb3VyY2VzW3F1ZXVlTmFtZV1bbW9kdWxlVG9DaGVja10pIGNvbnRpbnVlXG4gICAgICBzZWVuTW9kdWxlc1txdWV1ZU5hbWVdW21vZHVsZVRvQ2hlY2tdID0gdHJ1ZVxuICAgICAgcmVxdWlyZWRNb2R1bGVzW3F1ZXVlTmFtZV0gPSByZXF1aXJlZE1vZHVsZXNbcXVldWVOYW1lXSB8fCBbXVxuICAgICAgcmVxdWlyZWRNb2R1bGVzW3F1ZXVlTmFtZV0ucHVzaChtb2R1bGVUb0NoZWNrKVxuICAgICAgdmFyIG5ld01vZHVsZXMgPSBnZXRNb2R1bGVEZXBlbmRlbmNpZXMoc291cmNlcywgc291cmNlc1txdWV1ZU5hbWVdW21vZHVsZVRvQ2hlY2tdLCBxdWV1ZU5hbWUpXG4gICAgICB2YXIgbmV3TW9kdWxlc0tleXMgPSBPYmplY3Qua2V5cyhuZXdNb2R1bGVzKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdNb2R1bGVzS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICBtb2R1bGVzUXVldWVbbmV3TW9kdWxlc0tleXNbal1dID0gbW9kdWxlc1F1ZXVlW25ld01vZHVsZXNLZXlzW2pdXSB8fCBbXVxuICAgICAgICBtb2R1bGVzUXVldWVbbmV3TW9kdWxlc0tleXNbal1dID0gbW9kdWxlc1F1ZXVlW25ld01vZHVsZXNLZXlzW2pdXS5jb25jYXQobmV3TW9kdWxlc1tuZXdNb2R1bGVzS2V5c1tqXV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcXVpcmVkTW9kdWxlc1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgc291cmNlcyA9IHtcbiAgICBtYWluOiBfX3dlYnBhY2tfbW9kdWxlc19fXG4gIH1cblxuICB2YXIgcmVxdWlyZWRNb2R1bGVzID0gb3B0aW9ucy5hbGwgPyB7IG1haW46IE9iamVjdC5rZXlzKHNvdXJjZXMubWFpbikgfSA6IGdldFJlcXVpcmVkTW9kdWxlcyhzb3VyY2VzLCBtb2R1bGVJZClcblxuICB2YXIgc3JjID0gJydcblxuICBPYmplY3Qua2V5cyhyZXF1aXJlZE1vZHVsZXMpLmZpbHRlcihmdW5jdGlvbiAobSkgeyByZXR1cm4gbSAhPT0gJ21haW4nIH0pLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgIHZhciBlbnRyeU1vZHVsZSA9IDBcbiAgICB3aGlsZSAocmVxdWlyZWRNb2R1bGVzW21vZHVsZV1bZW50cnlNb2R1bGVdKSB7XG4gICAgICBlbnRyeU1vZHVsZSsrXG4gICAgfVxuICAgIHJlcXVpcmVkTW9kdWxlc1ttb2R1bGVdLnB1c2goZW50cnlNb2R1bGUpXG4gICAgc291cmNlc1ttb2R1bGVdW2VudHJ5TW9kdWxlXSA9ICcoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXzsgfSknXG4gICAgc3JjID0gc3JjICsgJ3ZhciAnICsgbW9kdWxlICsgJyA9ICgnICsgd2VicGFja0Jvb3RzdHJhcEZ1bmMudG9TdHJpbmcoKS5yZXBsYWNlKCdFTlRSWV9NT0RVTEUnLCBKU09OLnN0cmluZ2lmeShlbnRyeU1vZHVsZSkpICsgJykoeycgKyByZXF1aXJlZE1vZHVsZXNbbW9kdWxlXS5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiAnJyArIEpTT04uc3RyaW5naWZ5KGlkKSArICc6ICcgKyBzb3VyY2VzW21vZHVsZV1baWRdLnRvU3RyaW5nKCkgfSkuam9pbignLCcpICsgJ30pO1xcbidcbiAgfSlcblxuICBzcmMgPSBzcmMgKyAnbmV3ICgoJyArIHdlYnBhY2tCb290c3RyYXBGdW5jLnRvU3RyaW5nKCkucmVwbGFjZSgnRU5UUllfTU9EVUxFJywgSlNPTi5zdHJpbmdpZnkobW9kdWxlSWQpKSArICcpKHsnICsgcmVxdWlyZWRNb2R1bGVzLm1haW4ubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gJycgKyBKU09OLnN0cmluZ2lmeShpZCkgKyAnOiAnICsgc291cmNlcy5tYWluW2lkXS50b1N0cmluZygpIH0pLmpvaW4oJywnKSArICd9KSkoc2VsZik7J1xuXG4gIHZhciBibG9iID0gbmV3IHdpbmRvdy5CbG9iKFtzcmNdLCB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pXG4gIGlmIChvcHRpb25zLmJhcmUpIHsgcmV0dXJuIGJsb2IgfVxuXG4gIHZhciBVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkxcblxuICB2YXIgd29ya2VyVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICB2YXIgd29ya2VyID0gbmV3IHdpbmRvdy5Xb3JrZXIod29ya2VyVXJsKVxuICB3b3JrZXIub2JqZWN0VVJMID0gd29ya2VyVXJsXG5cbiAgcmV0dXJuIHdvcmtlclxufVxuIiwiY29uc3QgTE9BREVSX0VWRU5UUyA9IHtcbiAgTEFERVJfU1RBUlQ6ICdMT0FERVJfU1RBUlQnLFxuICBMT0FERVJfREFUQUxPQURFRDogJ0xPQURFUl9EQVRBTE9BREVEJyxcbiAgTE9BREVSX0NPTVBMRVRFOiAnTE9BREVSX0NPTVBMRVRFJyxcbiAgTE9BREVSX0VSUk9SOiAnTE9BREVSX0VSUk9SJ1xufVxuXG5jb25zdCBERU1VWF9FVkVOVFMgPSB7XG4gIERFTVVYX1NUQVJUOiAnREVNVVhfU1RBUlQnLFxuICBERU1VWF9DT01QTEVURTogJ0RFTVVYX0NPTVBMRVRFJyxcbiAgREVNVVhfRVJST1I6ICdERU1VWF9FUlJPUicsXG4gIE1FVEFEQVRBX1BBUlNFRDogJ01FVEFEQVRBX1BBUlNFRCcsXG4gIFZJREVPX01FVEFEQVRBX0NIQU5HRTogJ1ZJREVPX01FVEFEQVRBX0NIQU5HRScsXG4gIEFVRElPX01FVEFEQVRBX0NIQU5HRTogJ0FVRElPX01FVEFEQVRBX0NIQU5HRScsXG4gIE1FRElBX0lORk86ICdNRURJQV9JTkZPJ1xufVxuXG5jb25zdCBSRU1VWF9FVkVOVFMgPSB7XG4gIFJFTVVYX01FVEFEQVRBOiAnUkVNVVhfTUVUQURBVEEnLFxuICBSRU1VWF9NRURJQTogJ1JFTVVYX01FRElBJyxcbiAgTUVESUFfU0VHTUVOVDogJ01FRElBX1NFR01FTlQnLFxuICBSRU1VWF9FUlJPUjogJ1JFTVVYX0VSUk9SJyxcbiAgSU5JVF9TRUdNRU5UOiAnSU5JVF9TRUdNRU5UJyxcbiAgREVURUNUX0NIQU5HRV9TVFJFQU06ICdERVRFQ1RfQ0hBTkdFX1NUUkVBTSdcbn1cblxuY29uc3QgTVNFX0VWRU5UUyA9IHtcbiAgU09VUkNFX1VQREFURV9FTkQ6ICdTT1VSQ0VfVVBEQVRFX0VORCdcbn1cblxuLy8gaGxz5LiT5pyJZXZlbnRzXG5jb25zdCBITFNfRVZFTlRTID0ge1xuICBSRVRSWV9USU1FX0VYQ0VFREVEOiAnUkVUUllfVElNRV9FWENFRURFRCdcbn1cblxuY29uc3QgQ1JZVE9fRVZFTlRTID0ge1xuICBTVEFSVF9ERUNSWVBUOiAnU1RBUlRfREVDUllQVCcsXG4gIERFQ1JZUFRFRDogJ0RFQ1JZUFRFRCdcbn1cblxuY29uc3QgQlJPV1NFUl9FVkVOVFMgPSB7XG4gIFZJU0lCSUxJVFlfQ0hBTkdFOiAnVklTSUJJTElUWV9DSEFOR0UnXG59XG5cbmNvbnN0IEFMTEVWRU5UUyA9IE9iamVjdC5hc3NpZ24oe30sIExPQURFUl9FVkVOVFMsIERFTVVYX0VWRU5UUywgUkVNVVhfRVZFTlRTLCBNU0VfRVZFTlRTLCBITFNfRVZFTlRTLCBCUk9XU0VSX0VWRU5UUylcblxuY29uc3QgRmx2QWxsb3dlZEV2ZW50cyA9IFtdXG5jb25zdCBIbHNBbGxvd2VkRXZlbnRzID0gW11cblxuZm9yIChsZXQga2V5IGluIEFMTEVWRU5UUykge1xuICBpZiAoQUxMRVZFTlRTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBGbHZBbGxvd2VkRXZlbnRzLnB1c2goQUxMRVZFTlRTW2tleV0pXG4gIH1cbn1cblxuZm9yIChsZXQga2V5IGluIEFMTEVWRU5UUykge1xuICBpZiAoQUxMRVZFTlRTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBIbHNBbGxvd2VkRXZlbnRzLnB1c2goQUxMRVZFTlRTW2tleV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBBTExFVkVOVFMsXG4gIEhMU19FVkVOVFMsXG4gIFJFTVVYX0VWRU5UUyxcbiAgREVNVVhfRVZFTlRTLFxuICBNU0VfRVZFTlRTLFxuICBMT0FERVJfRVZFTlRTLFxuICBGbHZBbGxvd2VkRXZlbnRzLFxuICBIbHNBbGxvd2VkRXZlbnRzLFxuICBDUllUT19FVkVOVFMsXG4gIEJST1dTRVJfRVZFTlRTXG59O1xuIiwiZXhwb3J0IGNvbnN0IENPTlRFWFRfQ09NT01BTkRTID0ge1xuICBPTjogJ29uJyxcbiAgT05DRTogJ29uY2UnLFxuICBPRkY6ICdvZmYnLFxuICBFTUlUOiAnZW1pdCcsXG4gIERFU1RST1k6ICdkZXN0cm95J1xufVxuIiwiaW1wb3J0IE1lZGlhSW5mbyBmcm9tICcuL21vZGVscy9tZWRpYS1pbmZvJ1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJ1xuXG5jb25zdCBESVJFQ1RfRU1JVF9GTEFHID0gJ19fVE9fXydcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yIChhbGxvd2VkRXZlbnRzID0gW10pIHtcbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgdGhpcy5faW5zdGFuY2VNYXAgPSB7fSAvLyDmiYDmnInnmoTop6PnoIHmtYHnqIvlrp7kvotcbiAgICB0aGlzLl9jbHNNYXAgPSB7fSAvLyDmnoTpgKDlh73mlbDnmoRtYXBcbiAgICB0aGlzLl9pbml0ZWQgPSBmYWxzZVxuICAgIHRoaXMubWVkaWFJbmZvID0gbmV3IE1lZGlhSW5mbygpXG4gICAgdGhpcy5hbGxvd2VkRXZlbnRzID0gYWxsb3dlZEV2ZW50c1xuICAgIHRoaXMuX2hvb2tzID0ge30gLy8g5rOo5YaM5Zyo5LqL5Lu25YmNL+WQjueahOmSqeWtkO+8jOS+i+WmgiBiZWZvcmUoJ0RFTVVYX0NPTVBMRVRFJylcbiAgfVxuXG4gIC8qKlxuICAgKiDku47kuIrkuIvmlofkuK3ojrflj5bop6PnoIHmtYHnqIvlrp7kvovvvIzlpoLmnpzmsqHmnInlrp7kvovvvIzmnoTpgKDkuIDkuKpcbiAgICogQHBhcmFtIHRhZ1xuICAgKiBAcGFyYW0gYXJnc1xuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlICh0YWcpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuX2luc3RhbmNlTWFwW3RhZ11cbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYCR7dGFnfeWunuS+i+WwmuacquWIneWni+WMlmApXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3lp4vljJblhbfkvZPlrp7kvotcbiAgICogQHBhcmFtIHRhZ1xuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgaW5pdEluc3RhbmNlICh0YWcsIC4uLmFyZ3MpIHtcbiAgICBpZiAodGhpcy5fY2xzTWFwW3RhZ10pIHtcbiAgICAgIGNvbnN0IG5ld0luc3RhbmNlID0gbmV3IHRoaXMuX2Nsc01hcFt0YWddKC4uLmFyZ3MpXG4gICAgICB0aGlzLl9pbnN0YW5jZU1hcFt0YWddID0gbmV3SW5zdGFuY2VcbiAgICAgIGlmIChuZXdJbnN0YW5jZS5pbml0KSB7XG4gICAgICAgIG5ld0luc3RhbmNlLmluaXQoKSAvLyBUT0RPOiBsaWZlY2lyY2xlXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3SW5zdGFuY2VcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhZ33mnKrlnKhjb250ZXh05Lit5rOo5YaMYClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6YG/5YWN5aSn6YeP55qEaW5pdEluc3RhbmNl6LCD55So77yM5Yid5aeL5YyW5omA5pyJ55qE57uE5Lu2XG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGlmICh0aGlzLl9pbml0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBmb3IgKGxldCB0YWcgaW4gdGhpcy5fY2xzTWFwKSB7XG4gICAgICAvLyBpZiBub3QgaW5pdGVkLCBpbml0IGFuIGluc3RhbmNlXG4gICAgICBpZiAodGhpcy5fY2xzTWFwLmhhc093blByb3BlcnR5KHRhZykgJiYgIXRoaXMuX2luc3RhbmNlTWFwW3RhZ10pIHtcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UodGFnLCBjb25maWcpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2luaXRlZCA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiDms6jlhozkuIDkuKrkuIrkuIvmlofmtYHnqIvvvIzmj5DkvpvlronlhajnmoTkuovku7blj5HpgIHmnLrliLZcbiAgICogQHBhcmFtIHRhZ1xuICAgKiBAcGFyYW0gY2xzXG4gICAqL1xuICByZWdpc3RyeSAodGFnLCBjbHMpIHtcbiAgICBjb25zdCBlbWl0dGVyID0gdGhpcy5fZW1pdHRlclxuICAgIGNvbnN0IGNoZWNrTWVzc2FnZU5hbWUgPSB0aGlzLl9pc01lc3NhZ2VOYW1lVmFsaWQuYmluZCh0aGlzKVxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgZW5oYW5jZWQgPSBjbGFzcyBleHRlbmRzIGNscyB7XG4gICAgICBjb25zdHJ1Y3RvciAoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKVxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHt9XG4gICAgICAgIHRoaXMub25jZUxpc3RlbmVycyA9IHt9XG4gICAgICAgIHRoaXMuVEFHID0gdGFnXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBzZWxmXG4gICAgICB9XG5cbiAgICAgIG9uIChtZXNzYWdlTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY2hlY2tNZXNzYWdlTmFtZShtZXNzYWdlTmFtZSlcblxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnNbbWVzc2FnZU5hbWVdKSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbbWVzc2FnZU5hbWVdLnB1c2goY2FsbGJhY2spXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbbWVzc2FnZU5hbWVdID0gW2NhbGxiYWNrXVxuICAgICAgICB9XG5cbiAgICAgICAgZW1pdHRlci5vbihgJHttZXNzYWdlTmFtZX0ke0RJUkVDVF9FTUlUX0ZMQUd9JHt0YWd9YCwgY2FsbGJhY2spIC8vIOW7uueri+WumuWQkemAmuS/oeebkeWQrFxuICAgICAgICByZXR1cm4gZW1pdHRlci5vbihtZXNzYWdlTmFtZSwgY2FsbGJhY2spXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICog5Zyo5p+Q5Liq5LqL5Lu26Kem5Y+R5YmN5omn6KGMXG4gICAgICAgKiBAcGFyYW0gbWVzc2FnZU5hbWVcbiAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICovXG4gICAgICBiZWZvcmUgKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjaGVja01lc3NhZ2VOYW1lKG1lc3NhZ2VOYW1lKVxuICAgICAgICBpZiAoc2VsZi5faG9va3NbbWVzc2FnZU5hbWVdKSB7XG4gICAgICAgICAgc2VsZi5faG9va3NbbWVzc2FnZU5hbWVdLnB1c2goY2FsbGJhY2spXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5faG9va3NbbWVzc2FnZU5hbWVdID0gW2NhbGxiYWNrXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uY2UgKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjaGVja01lc3NhZ2VOYW1lKG1lc3NhZ2VOYW1lKVxuXG4gICAgICAgIGlmICh0aGlzLm9uY2VMaXN0ZW5lcnNbbWVzc2FnZU5hbWVdKSB7XG4gICAgICAgICAgdGhpcy5vbmNlTGlzdGVuZXJzW21lc3NhZ2VOYW1lXS5wdXNoKGNhbGxiYWNrKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25jZUxpc3RlbmVyc1ttZXNzYWdlTmFtZV0gPSBbY2FsbGJhY2tdXG4gICAgICAgIH1cblxuICAgICAgICBlbWl0dGVyLm9uY2UoYCR7bWVzc2FnZU5hbWV9JHtESVJFQ1RfRU1JVF9GTEFHfSR7dGFnfWAsIGNhbGxiYWNrKVxuICAgICAgICByZXR1cm4gZW1pdHRlci5vbmNlKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaylcbiAgICAgIH1cblxuICAgICAgZW1pdCAobWVzc2FnZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgY2hlY2tNZXNzYWdlTmFtZShtZXNzYWdlTmFtZSlcblxuICAgICAgICBjb25zdCBiZWZvcmVMaXN0ID0gc2VsZi5faG9va3MgPyBzZWxmLl9ob29rc1ttZXNzYWdlTmFtZV0gOiBudWxsXG5cbiAgICAgICAgaWYgKGJlZm9yZUxpc3QpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYmVmb3JlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBiZWZvcmVMaXN0W2ldXG4gICAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbWl0dGVyLmVtaXQobWVzc2FnZU5hbWUsIC4uLmFyZ3MpXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICog5a6a5ZCR5Y+R6YCB57uZ5p+Q5Liq57uE5Lu25Y2V5L6L55qE5raI5oGvXG4gICAgICAgKiBAcGFyYW0gbWVzc2FnZU5hbWVcbiAgICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICAgKi9cbiAgICAgIGVtaXRUbyAodGFnLCBtZXNzYWdlTmFtZSwgLi4uYXJncykge1xuICAgICAgICBjaGVja01lc3NhZ2VOYW1lKG1lc3NhZ2VOYW1lKVxuXG4gICAgICAgIHJldHVybiBlbWl0dGVyLmVtaXQoYCR7bWVzc2FnZU5hbWV9JHtESVJFQ1RfRU1JVF9GTEFHfSR7dGFnfWAsIC4uLmFyZ3MpXG4gICAgICB9XG5cbiAgICAgIG9mZiAobWVzc2FnZU5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNoZWNrTWVzc2FnZU5hbWUobWVzc2FnZU5hbWUpXG4gICAgICAgIHJldHVybiBlbWl0dGVyLm9mZihtZXNzYWdlTmFtZSwgY2FsbGJhY2spXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUxpc3RlbmVycyAoKSB7XG4gICAgICAgIGNvbnN0IGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZCh0aGlzLmxpc3RlbmVycylcblxuICAgICAgICBmb3IgKGxldCBtZXNzYWdlTmFtZSBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgICAgIGlmIChoYXNPd24obWVzc2FnZU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmxpc3RlbmVyc1ttZXNzYWdlTmFtZV0gfHwgW11cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldXG4gICAgICAgICAgICAgIGVtaXR0ZXIub2ZmKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaylcbiAgICAgICAgICAgICAgZW1pdHRlci5vZmYoYCR7bWVzc2FnZU5hbWV9JHtESVJFQ1RfRU1JVF9GTEFHfSR7dGFnfWAsIGNhbGxiYWNrKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IG1lc3NhZ2VOYW1lIGluIHRoaXMub25jZUxpc3RlbmVycykge1xuICAgICAgICAgIGlmIChoYXNPd24obWVzc2FnZU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLm9uY2VMaXN0ZW5lcnNbbWVzc2FnZU5hbWVdIHx8IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXVxuICAgICAgICAgICAgICBlbWl0dGVyLm9mZihtZXNzYWdlTmFtZSwgY2FsbGJhY2spXG4gICAgICAgICAgICAgIGVtaXR0ZXIub2ZmKGAke21lc3NhZ2VOYW1lfSR7RElSRUNUX0VNSVRfRkxBR30ke3RhZ31gLCBjYWxsYmFjaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiDlnKjnu4Tku7bplIDmr4Hml7bvvIzpu5jorqTlsIblroPms6jlhoznmoTkuovku7blhajpg6jljbjovb3vvIznoa7kv53kuI3kvJrpgKDmiJDlhoXlrZjms4TmvI9cbiAgICAgICAqL1xuICAgICAgZGVzdHJveSAoKSB7XG4gICAgICAgIC8vIHN0ZXAxIHVubGlzdGVuIGV2ZW50c1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0ge31cblxuICAgICAgICAvLyBzdGVwMiByZWxlYXNlIGZyb20gY29udGV4dFxuICAgICAgICBkZWxldGUgc2VsZi5faW5zdGFuY2VNYXBbdGFnXVxuICAgICAgICBpZiAoc3VwZXIuZGVzdHJveSkge1xuICAgICAgICAgIHJldHVybiBzdXBlci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jbHNNYXBbdGFnXSA9IGVuaGFuY2VkXG5cbiAgICAvKipcbiAgICAgKiBnZXQgaW5zdGFuY2UgaW1tZWRpYXRlbHlcbiAgICAgKiBlLmcgY29uc3QgaW5zdGFuY2UgPSBjb250ZXh0LnJlZ2lzdHJ5KHRhZywgQ2xzKShjb25maWcpXG4gICAgICogKi9cbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRJbnN0YW5jZSh0YWcsIC4uLmFyZ3MpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWvueWtmOWcqOeahOWunuS+i+i/m+ihjFxuICAgKi9cbiAgZGVzdHJveUluc3RhbmNlcyAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5faW5zdGFuY2VNYXApLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgaWYgKHRoaXMuX2luc3RhbmNlTWFwW3RhZ10uZGVzdHJveSkge1xuICAgICAgICB0aGlzLl9pbnN0YW5jZU1hcFt0YWddLmRlc3Ryb3koKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICog57yW6Kej56CB5rWB56iL5peg6ZyA5YWz5rOo5LqL5Lu255qE6Kej57uRXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9lbWl0dGVyID0gbnVsbFxuICAgIHRoaXMuYWxsb3dlZEV2ZW50cyA9IFtdXG4gICAgdGhpcy5fY2xzTWFwID0gbnVsbFxuICAgIHRoaXMuX2NvbnRleHQgPSBudWxsXG4gICAgdGhpcy5faG9va3MgPSBudWxsXG4gICAgdGhpcy5kZXN0cm95SW5zdGFuY2VzKClcbiAgfVxuXG4gIC8qKlxuICAgKiDlr7nkv6HpgZPov5vooYzmlLbmi6JcbiAgICogQHBhcmFtIG1lc3NhZ2VOYW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaXNNZXNzYWdlTmFtZVZhbGlkIChtZXNzYWdlTmFtZSkge1xuICAgIGlmICghdGhpcy5hbGxvd2VkRXZlbnRzLmluZGV4T2YobWVzc2FnZU5hbWUpIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bnJlZ2lzdGVyZWQgbWVzc2FnZSBuYW1lOiAke21lc3NhZ2VOYW1lfWApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRcbiIsImltcG9ydCBFVkVOVFMgZnJvbSAnLi4vY29uc3RhbnRzL2V2ZW50cyc7XG5jb25zdCBDUllUT19FVkVOVFMgPSBFVkVOVFMuQ1JZVE9fRVZFTlRTXG5jbGFzcyBDcnlwdG8ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLmlucHV0QnVmZmVyID0gY29uZmlnLmlucHV0YnVmZmVyO1xuICAgICAgICB0aGlzLm91dHB1dEJ1ZmZlciA9IGNvbmZpZy5vdXRwdXRidWZmZXI7XG4gICAgICAgIHRoaXMua2V5ID0gY29uZmlnLmtleTtcbiAgICAgICAgdGhpcy5pdiA9IGNvbmZpZy5pdjtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBjb25maWcubWV0aG9kO1xuXG4gICAgICAgIHRoaXMuY3J5cHRvID0gIHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbihDUllUT19FVkVOVFMuU1RBUlRfREVDUllQVCwgdGhpcy5kZWNyaXB0LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBcbiAgICBkZWNyaXB0KCkge1xuICAgICAgICBpZighdGhpcy5hZXNrZXkpIHtcbiAgICAgICAgICAgIGxldCBzYmtleSA9IHRoaXMuY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoJ3JhdycsIHRoaXMua2V5LmJ1ZmZlciwgeyBuYW1lOiAnQUVTLUNCQycgfSwgZmFsc2UsIFsnZW5jcnlwdCcsICdkZWNyeXB0J10pO1xuICAgICAgICAgICAgc2JrZXkudGhlbihrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWVza2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIHRoaXMuZGVjcmlwdERhdGEoKTtcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWNyaXB0RGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjcmlwdERhdGEoKSB7XG4gICAgICAgIGxldCBpbnB1dGJ1ZmZlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UodGhpcy5pbnB1dEJ1ZmZlcik7XG4gICAgICAgIGxldCBvdXRwdXRidWZmZXIgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKHRoaXMub3V0cHV0QnVmZmVyKTtcbiAgICAgICAgbGV0IGRhdGEgPSBpbnB1dGJ1ZmZlci5zaGlmdCgpO1xuICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmNyeXB0by5zdWJ0bGUuZGVjcnlwdCh7IG5hbWU6ICdBRVMtQ0JDJywgaXY6IHRoaXMuaXYuYnVmZmVyIH0sIHRoaXMuYWVza2V5LCBkYXRhKS50aGVuKHJlcz0+e1xuICAgICAgICAgICAgICAgIG91dHB1dGJ1ZmZlci5wdXNoKG5ldyBVaW50OEFycmF5KHJlcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChDUllUT19FVkVOVFMuREVDUllQVEVEKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlY3JpcHREYXRhKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDcnlwdG87IiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9jb25zdGFudHMvZXZlbnRzJ1xuY29uc3QgQlJPV1NFUl9FVkVOVFMgPSBFdmVudHMuQlJPV1NFUl9FVkVOVFNcblxubGV0IGhpZGRlbjtcbmxldCB2aXNpYmlsaXR5Q2hhbmdlO1xuaWYgKHR5cGVvZiBkb2N1bWVudC5oaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7IC8vIE9wZXJhIDEyLjEwIGFuZCBGaXJlZm94IDE4IGFuZCBsYXRlciBzdXBwb3J0XG4gIGhpZGRlbiA9ICdoaWRkZW4nO1xuICB2aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQubXNIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gIGhpZGRlbiA9ICdtc0hpZGRlbic7XG4gIHZpc2liaWxpdHlDaGFuZ2UgPSAnbXN2aXNpYmlsaXR5Y2hhbmdlJztcbn0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XG4gIHZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG59XG5cbmNsYXNzIFBhZ2VWaXNpYmlsaXR5IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSB7XG4gICAgICBvblNob3c6IFtdLFxuICAgICAgb25IaWRkZW46IFtdXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSA9IHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHZpc2liaWxpdHlDaGFuZ2UsIHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xuICB9XG5cbiAgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSAoKSB7XG4gICAgdGhpcy5lbWl0KEJST1dTRVJfRVZFTlRTLlZJU0lCSUxJVFlfQ0hBTkdFLCBkb2N1bWVudFtoaWRkZW5dKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih2aXNpYmlsaXR5Q2hhbmdlLCB0aGlzLmhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVZpc2liaWxpdHk7XG4iLCJjb25zdCBsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigyKTtcbiAgKG5ldyBEYXRhVmlldyhidWYpKS5zZXRJbnQxNigwLCAyNTYsIHRydWUpIC8vIGxpdHRsZS1lbmRpYW4gd3JpdGVcbiAgcmV0dXJuIChuZXcgSW50MTZBcnJheShidWYpKVswXSA9PT0gMjU2IC8vIHBsYXRmb3JtLXNwZWMgcmVhZCwgaWYgZXF1YWwgdGhlbiBMRVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBsZVxuIiwiY29uc3QgbGUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMik7XG4gIChuZXcgRGF0YVZpZXcoYnVmKSkuc2V0SW50MTYoMCwgMjU2LCB0cnVlKSAvLyBsaXR0bGUtZW5kaWFuIHdyaXRlXG4gIHJldHVybiAobmV3IEludDE2QXJyYXkoYnVmKSlbMF0gPT09IDI1NiAvLyBwbGF0Zm9ybS1zcGVjIHJlYWQsIGlmIGVxdWFsIHRoZW4gTEVcbn0pKClcblxuY29uc3Qgc25pZmZlciA9IHtcbiAgZ2V0IGRldmljZSAoKSB7XG4gICAgbGV0IHIgPSBzbmlmZmVyLm9zO1xuICAgIHJldHVybiByLmlzUGMgPyAncGMnIDogci5pc1RhYmxldCA/ICd0YWJsZXQnIDogJ21vYmlsZSc7XG4gIH0sXG4gIGdldCBicm93c2VyICgpIHtcbiAgICBsZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHJlZyA9IHtcbiAgICAgIGllOiAvcnY6KFtcXGQuXSspXFwpIGxpa2UgZ2Vja28vLFxuICAgICAgZmlyZm94OiAvZmlyZWZveFxcLyhbXFxkLl0rKS8sXG4gICAgICBjaHJvbWU6IC9jaHJvbWVcXC8oW1xcZC5dKykvLFxuICAgICAgb3BlcmE6IC9vcGVyYS4oW1xcZC5dKykvLFxuICAgICAgc2FmYXJpOiAvdmVyc2lvblxcLyhbXFxkLl0rKS4qc2FmYXJpL1xuICAgIH07XG4gICAgcmV0dXJuIFtdLmNvbmNhdChPYmplY3Qua2V5cyhyZWcpLmZpbHRlcihrZXkgPT4gcmVnW2tleV0udGVzdCh1YSkpKVswXTtcbiAgfSxcbiAgZ2V0IG9zICgpIHtcbiAgICBsZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgbGV0IGlzV2luZG93c1Bob25lID0gLyg/OldpbmRvd3MgUGhvbmUpLy50ZXN0KHVhKVxuICAgIGxldCBpc1N5bWJpYW4gPSAvKD86U3ltYmlhbk9TKS8udGVzdCh1YSkgfHwgaXNXaW5kb3dzUGhvbmU7XG4gICAgbGV0IGlzQW5kcm9pZCA9IC8oPzpBbmRyb2lkKS8udGVzdCh1YSk7XG4gICAgbGV0IGlzRmlyZUZveCA9IC8oPzpGaXJlZm94KS8udGVzdCh1YSk7XG4gICAgbGV0IGlzVGFibGV0ID0gLyg/OmlQYWR8UGxheUJvb2spLy50ZXN0KHVhKSB8fCAoaXNBbmRyb2lkICYmICEvKD86TW9iaWxlKS8udGVzdCh1YSkpIHx8IChpc0ZpcmVGb3ggJiYgLyg/OlRhYmxldCkvLnRlc3QodWEpKTtcbiAgICBsZXQgaXNQaG9uZSA9IC8oPzppUGhvbmUpLy50ZXN0KHVhKSAmJiAhaXNUYWJsZXQ7XG4gICAgbGV0IGlzUGMgPSAhaXNQaG9uZSAmJiAhaXNBbmRyb2lkICYmICFpc1N5bWJpYW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzVGFibGV0LFxuICAgICAgaXNQaG9uZSxcbiAgICAgIGlzQW5kcm9pZCxcbiAgICAgIGlzUGMsXG4gICAgICBpc1N5bWJpYW4sXG4gICAgICBpc1dpbmRvd3NQaG9uZSxcbiAgICAgIGlzRmlyZUZveFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0IGlzTGUgKCkge1xuICAgIHJldHVybiBsZVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbmlmZmVyO1xuIiwiY2xhc3MgVVRGOCB7XG4gIHN0YXRpYyBkZWNvZGUgKHVpbnQ4YXJyYXkpIHtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBjb25zdCBpbnB1dCA9IHVpbnQ4YXJyYXk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGxlbmd0aCA9IHVpbnQ4YXJyYXkubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIGlmIChpbnB1dFtpXSA8IDB4ODApIHtcbiAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShpbnB1dFtpXSkpO1xuICAgICAgICArK2k7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4QzApIHtcbiAgICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXRbaV0gPCAweEUwKSB7XG4gICAgICAgIGlmIChVVEY4Ll9jaGVja0NvbnRpbnVhdGlvbihpbnB1dCwgaSwgMSkpIHtcbiAgICAgICAgICBjb25zdCB1Y3M0ID0gKGlucHV0W2ldICYgMHgxRikgPDwgNiB8IChpbnB1dFtpICsgMV0gJiAweDNGKTtcbiAgICAgICAgICBpZiAodWNzNCA+PSAweDgwKSB7XG4gICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHVjczQgJiAweEZGRkYpKTtcbiAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4RjApIHtcbiAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAyKSkge1xuICAgICAgICAgIGNvbnN0IHVjczQgPSAoaW5wdXRbaV0gJiAweEYpIDw8IDEyIHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpIDw8IDYgfCBpbnB1dFtpICsgMl0gJiAweDNGO1xuICAgICAgICAgIGlmICh1Y3M0ID49IDB4ODAwICYmICh1Y3M0ICYgMHhGODAwKSAhPT0gMHhEODAwKSB7XG4gICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHVjczQgJiAweEZGRkYpKTtcbiAgICAgICAgICAgIGkgKz0gMztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4RjgpIHtcbiAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAzKSkge1xuICAgICAgICAgIGxldCB1Y3M0ID0gKGlucHV0W2ldICYgMHg3KSA8PCAxOCB8IChpbnB1dFtpICsgMV0gJiAweDNGKSA8PCAxMiB8XG4gICAgICAgICAgICAgICAgICAgIChpbnB1dFtpICsgMl0gJiAweDNGKSA8PCA2IHwgKGlucHV0W2kgKyAzXSAmIDB4M0YpO1xuICAgICAgICAgIGlmICh1Y3M0ID4gMHgxMDAwMCAmJiB1Y3M0IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgIHVjczQgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoKHVjczQgPj4+IDEwKSB8IDB4RDgwMCkpO1xuICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgodWNzNCAmIDB4M0ZGKSB8IDB4REMwMCkpO1xuICAgICAgICAgICAgaSArPSA0O1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkpO1xuICAgICAgKytpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQuam9pbignJyk7XG4gIH1cblxuICBzdGF0aWMgX2NoZWNrQ29udGludWF0aW9uICh1aW50OGFycmF5LCBzdGFydCwgY2hlY2tMZW5ndGgpIHtcbiAgICBsZXQgYXJyYXkgPSB1aW50OGFycmF5O1xuICAgIGlmIChzdGFydCArIGNoZWNrTGVuZ3RoIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICB3aGlsZSAoY2hlY2tMZW5ndGgtLSkge1xuICAgICAgICBpZiAoKGFycmF5Wysrc3RhcnRdICYgMHhDMCkgIT09IDB4ODApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVURjg7XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cydcbmNsYXNzIEF1ZGlvQ3R4IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICAgIGxldCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4gICAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIHRoaXMubWV0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNhbXBsZXMgPSBbXTtcbiAgICB0aGlzLnByZWxvYWRUaW1lID0gdGhpcy5jb25maWcucHJlbG9hZFRpbWUgfHwgMztcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcblxuICAgIHRoaXMuX2N1cnJlbnRCdWZmZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbmV4dEJ1ZmZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9sYXN0cHRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3ByZURlY29kZSA9IFtdO1xuICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gMDtcbiAgICB0aGlzLl9kZWNvZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3ZvbHVtZSA9IHRoaXMuY29uZmlnLnZvbHVtZSB8fCAwLjZcbiAgICAvLyDorrDlvZXlpJbpg6jkvKDovpPnmoTnirbmgIFcbiAgICB0aGlzLl9wbGF5ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnBsYXlGaW5pc2ggPSBudWxsOyAvLyBwZW5kaW5nIHBsYXkgdGFza1xuICAgIHRoaXMud2FpdE5leHRJRCA9IG51bGw7IC8vIGF1ZGlvIHNvdXJjZSBlbmQgYW5kIG5leHQgc291cmNlIG5vdCBsb2FkZWRcbiAgfVxuXG4gIGdldCBjdXJyZW50VGltZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUaW1lO1xuICB9XG5cbiAgZGVjb2RlQXVkaW8gKGF1ZGlvVHJhY2spIHtcbiAgICBsZXQge3NhbXBsZXN9ID0gYXVkaW9UcmFjaztcbiAgICBsZXQgZGF0YSA9IHNhbXBsZXM7XG4gICAgYXVkaW9UcmFjay5zYW1wbGVzID0gW107XG4gICAgdGhpcy5zZXRBdWRpb0RhdGEoZGF0YSk7XG4gIH1cbiAgc2V0QXVkaW9EYXRhIChkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXRhW2ldLnB0cyA9IChkYXRhW2ldLnB0cyA9PT0gdW5kZWZpbmVkKSA/IGRhdGFbaV0uZHRzIDogZGF0YVtpXS5wdHM7XG4gICAgICB0aGlzLl9wcmVEZWNvZGUucHVzaChkYXRhW2ldKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZURlY29kZS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodGhpcy5fbGFzdHB0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2xhc3RwdHMgPSB0aGlzLl9wcmVEZWNvZGVbMF0ucHRzO1xuICAgICAgfVxuICAgICAgaWYgKCh0aGlzLl9wcmVEZWNvZGVbdGhpcy5fcHJlRGVjb2RlLmxlbmd0aCAtIDFdLnB0cyAtIHRoaXMuX2xhc3RwdHMpIC8gMTAwMCA+IHRoaXMucHJlbG9hZFRpbWUpIHtcbiAgICAgICAgdGhpcy5kZWNvZGVBQUMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZWNvZGVBQUMgKCkge1xuICAgIGlmICh0aGlzLl9kZWNvZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9kZWNvZGluZyA9IHRydWU7XG4gICAgbGV0IGRhdGEgPSB0aGlzLl9wcmVEZWNvZGU7XG4gICAgbGV0IHNhbXBsZXMgPSBbXTtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBzYW1wbGUgPSBkYXRhLnNoaWZ0KCk7XG4gICAgd2hpbGUgKHNhbXBsZSkge1xuICAgICAgbGV0IHNhbXBsZURhdGEgPSBBdWRpb0N0eC5nZXRBQUNEYXRhKHRoaXMubWV0YSwgc2FtcGxlKVxuICAgICAgc2FtcGxlcy5wdXNoKHNhbXBsZURhdGEpO1xuICAgICAgdGhpcy5fbGFzdHB0cyA9IHNhbXBsZS5wdHM7XG4gICAgICBzYW1wbGUgPSBkYXRhLnNoaWZ0KClcbiAgICB9XG4gICAgbGV0IGJ1ZmZlciA9IEF1ZGlvQ3R4LmNvbWJpbGVEYXRhKHNhbXBsZXMpO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlci5idWZmZXIsIGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICAgICAgbGV0IGF1ZGlvU291cmNlID0gX3RoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgYXVkaW9Tb3VyY2UuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICBhdWRpb1NvdXJjZS5vbmVuZGVkID0gX3RoaXMub25Tb3VyY2VFbmRlZC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuc2FtcGxlcy5wdXNoKHtcbiAgICAgICAgICB0aW1lOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICBkdXJhdGlvbjogYnVmZmVyLmR1cmF0aW9uLFxuICAgICAgICAgIGRhdGE6IGF1ZGlvU291cmNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgX3RoaXMuZHVyYXRpb24gKz0gYnVmZmVyLmR1cmF0aW9uO1xuXG4gICAgICAgIGlmICghX3RoaXMuX2N1cnJlbnRCdWZmZXIpIHtcbiAgICAgICAgICBfdGhpcy5fY3VycmVudEJ1ZmZlciA9IF90aGlzLmdldFRpbWVCdWZmZXIoX3RoaXMuY3VycmVudFRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFfdGhpcy5fbmV4dEJ1ZmZlciAmJiBfdGhpcy5fY3VycmVudEJ1ZmZlcikge1xuICAgICAgICAgIF90aGlzLl9uZXh0QnVmZmVyID0gX3RoaXMuZ2V0VGltZUJ1ZmZlcihfdGhpcy5jdXJyZW50VGltZSArIF90aGlzLl9jdXJyZW50QnVmZmVyLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5fZGVjb2RpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoKF90aGlzLl9wcmVEZWNvZGUubGVuZ3RoID4gMCAmJiBfdGhpcy5fcHJlRGVjb2RlW190aGlzLl9wcmVEZWNvZGUubGVuZ3RoIC0gMV0ucHRzIC0gX3RoaXMuX2xhc3RwdHMpIC8gMTAwMCA+PSBfdGhpcy5wcmVsb2FkVGltZSkge1xuICAgICAgICAgIF90aGlzLmRlY29kZUFBQygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLnBsYXlGaW5pc2gpIHtcbiAgICAgICAgICBfdGhpcy5wbGF5RmluaXNoKClcbiAgICAgICAgfVxuICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICBvblNvdXJjZUVuZGVkICgpIHtcbiAgICBpZiAoIXRoaXMuX25leHRCdWZmZXIgfHwgIXRoaXMuX3BsYXllZCkge1xuICAgICAgdGhpcy53YWl0TmV4dElEID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25Tb3VyY2VFbmRlZCgpXG4gICAgICB9LCAyMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLl9uZXh0QnVmZmVyLmRhdGE7XG4gICAgYXVkaW9Tb3VyY2Uuc3RhcnQoKTtcbiAgICBhdWRpb1NvdXJjZS5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xuICAgIHRoaXMuX2N1cnJlbnRCdWZmZXIgPSB0aGlzLl9uZXh0QnVmZmVyO1xuICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gdGhpcy5fY3VycmVudEJ1ZmZlci50aW1lO1xuICAgIHRoaXMuX25leHRCdWZmZXIgPSB0aGlzLmdldFRpbWVCdWZmZXIodGhpcy5jdXJyZW50VGltZSk7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRCdWZmZXIpIHtcbiAgICAgIHRoaXMuX25leHRCdWZmZXIgPSB0aGlzLmdldFRpbWVCdWZmZXIodGhpcy5jdXJyZW50VGltZSArIHRoaXMuX2N1cnJlbnRCdWZmZXIuZHVyYXRpb24pO1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ0FVRElPX1NPVVJDRV9FTkQnKVxuICB9XG5cbiAgcGxheSAoKSB7XG4gICAgaWYgKHRoaXMucGxheUZpbmlzaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wbGF5ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmNvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgICB0aGlzLmNvbnRleHQucmVzdW1lKClcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5U3RhcnQgPSAoKSA9PiB7XG4gICAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLl9jdXJyZW50QnVmZmVyLmRhdGE7XG4gICAgICBhdWRpb1NvdXJjZS5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xuICAgICAgYXVkaW9Tb3VyY2Uuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2N1cnJlbnRCdWZmZXIpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aGlzLnBsYXlGaW5pc2ggPSByZXNvbHZlO1xuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucGxheUZpbmlzaCA9IG51bGw7XG4gICAgICAgIHBsYXlTdGFydCgpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheVN0YXJ0KCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgY29uc3QgYXVkaW9DdHggPSB0aGlzLmNvbnRleHQ7XG4gICAgaWYgKGF1ZGlvQ3R4LnN0YXRlID09PSAncnVubmluZycpIHtcbiAgICAgIGF1ZGlvQ3R4LnN1c3BlbmQoKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY29udGV4dC5jbG9zZSgpO1xuICB9XG5cbiAgZ2V0VGltZUJ1ZmZlciAodGltZSkge1xuICAgIGxldCByZXQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzYW1wbGUgPSB0aGlzLnNhbXBsZXNbaV1cbiAgICAgIGlmIChzYW1wbGUudGltZSA8PSB0aW1lICYmIChzYW1wbGUudGltZSArIHNhbXBsZS5kdXJhdGlvbikgPiB0aW1lKSB7XG4gICAgICAgIHJldCA9IHNhbXBsZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzZXRBdWRpb01ldGFEYXRhIChtZXRhKSB7XG4gICAgdGhpcy5tZXRhID0gbWV0YTtcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLndhaXROZXh0SUQpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy53YWl0TmV4dElEKVxuICAgIH1cbiAgfVxuXG4gIHNldCBtdXRlZCAodmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSB0aGlzLl92b2x1bWVcbiAgICB9XG4gIH1cblxuICBnZXQgdm9sdW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5fdm9sdW1lXG4gIH1cblxuICBzZXQgdm9sdW1lICh2YWwpIHtcbiAgICBpZiAodmFsIDwgMCkge1xuICAgICAgdGhpcy5fdm9sdW1lID0gMDtcbiAgICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDBcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHZhbCA+IDEpIHtcbiAgICAgIHRoaXMuX3ZvbHVtZSA9IDE7XG4gICAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAxXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdm9sdW1lID0gdmFsO1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHZhbFxuICB9XG5cbiAgc3RhdGljIGdldEFBQ0RhdGEgKG1ldGEsIHNhbXBsZSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgVWludDhBcnJheShzYW1wbGUuZGF0YS5ieXRlTGVuZ3RoICsgNyk7XG4gICAgbGV0IGFkdHMgPSBBdWRpb0N0eC5nZXRBZHRzKG1ldGEsIHNhbXBsZS5kYXRhKTtcbiAgICBidWZmZXIuc2V0KGFkdHMpO1xuICAgIGJ1ZmZlci5zZXQoc2FtcGxlLmRhdGEsIDcpO1xuICAgIHJldHVybiBidWZmZXI7XG4gIH1cblxuICBzdGF0aWMgY29tYmlsZURhdGEgKHNhbXBsZXMpIHtcbiAgICAvLyBnZXQgbGVuZ3RoXG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBzYW1wbGVzLmxlbmd0aDsgaSA8IGs7IGkrKykge1xuICAgICAgbGVuZ3RoICs9IHNhbXBsZXNbaV0uYnl0ZUxlbmd0aDtcbiAgICB9XG5cbiAgICBsZXQgcmV0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAvLyBjb21iaWxlIGRhdGE7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBzYW1wbGVzLmxlbmd0aDsgaSA8IGs7IGkrKykge1xuICAgICAgcmV0LnNldChzYW1wbGVzW2ldLCBvZmZzZXQpO1xuICAgICAgb2Zmc2V0ICs9IHNhbXBsZXNbaV0uYnl0ZUxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBZHRzIChtZXRhLCBkYXRhKSB7XG4gICAgbGV0IGFkdHMgPSBuZXcgVWludDhBcnJheSg3KTtcblxuICAgIC8vIOiuvue9ruWQjOatpeS9jSAweGZmZiAxMmJpdFxuICAgIGFkdHNbMF0gPSAweGZmO1xuICAgIGFkdHNbMV0gPSAweGYwO1xuXG4gICAgLy8gT2JqZWN0IGRhdGEgKOayoeS7gOS5iOS6uueUqE1QRUctMuS6hu+8jEhMU+WSjEZMVuS5n+WFqOaYr01QRUctNO+8jOi/memHjOebtOaOpTApICAxYml0XG4gICAgLy8gTGV2ZWwgYWx3YXlzIDAwIDJiaXRcbiAgICAvLyBDUkMgYWx3YXlzIDEgMWJpdFxuICAgIGFkdHNbMV0gPSBhZHRzWzFdIHwgMHgwMTtcblxuICAgIC8vIHByb2ZpbGUgMmJpdFxuICAgIGFkdHNbMl0gPSAweGMwICYgKChtZXRhLm9iamVjdFR5cGUgLSAxKSA8PCA2KTtcblxuICAgIC8vIHNhbXBsZUZyZXF1ZW5jeUluZGV4XG4gICAgYWR0c1syXSA9IGFkdHNbMl0gfCAoMHgzYyAmIChtZXRhLnNhbXBsZVJhdGVJbmRleCA8PCAyKSlcblxuICAgIC8vIHByaXZhdGUgYml0IDAgMWJpdFxuICAgIC8vIGNoYW5lbCBjb25maWd1cmF0aW9uIDNiaXRcbiAgICBhZHRzWzJdID0gYWR0c1syXSB8ICgweDAxICYgbWV0YS5jaGFubmVsQ291bnQgPj4gMik7XG4gICAgYWR0c1szXSA9IDB4YzAgJiAobWV0YS5jaGFubmVsQ291bnQgPDwgNik7XG5cbiAgICAvLyBvcmlnaW5hbF9jb3B5OiAwIDFiaXRcbiAgICAvLyBob21lOiAwIDFiaXRcblxuICAgIC8vIGFkdHNfdmFyaWFibGVfaGVhZGVyKClcbiAgICAvLyBjb3B5cmlnaHRlZF9pZF9iaXQgMCAxYml0XG4gICAgLy8gY29weXJpZ2h0ZWRfaWRfc3RhcnQgMCAxYml0XG5cbiAgICAvLyBhYWNfZnJhbWVfbGVuZ3RoIDEzYml0O1xuICAgIGxldCBhYWNmcmFtZWxlbmd0aCA9IGRhdGEuYnl0ZUxlbmd0aCArIDc7XG5cbiAgICBhZHRzWzNdID0gYWR0c1szXSB8ICgweDAzICYgYWFjZnJhbWVsZW5ndGggPj4gMTEpO1xuICAgIGFkdHNbNF0gPSAweGZmICYgKGFhY2ZyYW1lbGVuZ3RoID4+IDMpO1xuICAgIGFkdHNbNV0gPSAweGUwICYgKGFhY2ZyYW1lbGVuZ3RoIDw8IDUpO1xuXG4gICAgLy8gYWR0c19idWZmZXJfZnVsbG5lc3MgMHg3ZmYgMTFiaXRcbiAgICBhZHRzWzVdID0gYWR0c1s1XSB8IDB4MWZcbiAgICBhZHRzWzZdID0gMHhmYztcblxuICAgIC8vIG51bWJlcl9vZl9yYXdfZGF0YV9ibG9ja3NfaW5fZnJhbWUgMCAyYml0O1xuICAgIHJldHVybiBhZHRzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQ3R4O1xuIiwiaW1wb3J0IFZpZGVvQ3R4IGZyb20gJy4vdmlkZW8tY29udGV4dCc7XG5pbXBvcnQgQXVkaW9DdHggZnJvbSAnLi9hdWRpby1jb250ZXh0JztcbmltcG9ydCB7IGdldFRpY2tlciB9IGZyb20gJy4vdGlja2VyJztcbi8qKlxuICog6Z+z55S75ZCM5q2l6LCD5ZKM5ZmoXG4gKi9cbmNsYXNzIEFWUmVjb25jaWxlciB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHRoaXMuYUN0eCA9IHByb3BzLmFDdHg7XG4gICAgdGhpcy52Q3R4ID0gcHJvcHMudkN0eDtcbiAgICB0aGlzLnZpZGVvID0gcHJvcHMudmlkZW9cbiAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGxcbiAgICB0aGlzLnN0YXJ0ID0gbnVsbFxuICB9XG5cbiAgZG9SZWNvbmNpbGUgKCkge1xuICAgIGNvbnN0IHZDdXJUaW1lID0gKHRoaXMudkN0eC5jdXJyZW50VGltZSB8fCAwKTtcbiAgICBjb25zdCBhQ3VyVGltZSA9ICh0aGlzLmFDdHguY3VycmVudFRpbWUgfHwgMCkgKiAxMDAwO1xuXG4gICAgY29uc3QgZ2FwID0gdkN1clRpbWUgLSBhQ3VyVGltZTtcbiAgICBpZiAodGhpcy50aW1lb3V0SWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGdhcCA+IDIwMCkgeyAvLyBhdWRpbyBkZWxheWVkIGZvciBtb3JlIHRoYW4gMTAwbXNcbiAgICAgIHRoaXMudmlkZW8uc3RhcnQgKz0gZ2FwXG4gICAgICB0aGlzLnZDdHgucGF1c2UoKVxuICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy52Q3R4LnBsYXkoKVxuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGxcbiAgICAgIH0sIGdhcClcbiAgICB9IGVsc2UgaWYgKGdhcCA8IC0xMjApIHtcbiAgICAgIHRoaXMudmlkZW8uc3RhcnQgKz0gZ2FwXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5zdGFydCA9IG51bGxcbiAgICB0aGlzLmFDdHggPSBudWxsXG4gICAgdGhpcy52Q3R4ID0gbnVsbFxuICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuY2xhc3MgTW9iaWxlVmlkZW8gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgdGhpcy5oYW5kbGVBdWRpb1NvdXJjZUVuZCA9IHRoaXMuaGFuZGxlQXVkaW9Tb3VyY2VFbmQuYmluZCh0aGlzKVxuICAgIHRoaXMucGxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5wZW5kaW5nUGxheVRhc2sgPSBudWxsXG4gICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLnZpZGVvTWV0YUluaXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuYXVkaW9NZXRhSW5pdGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMudkN0eCA9IG5ldyBWaWRlb0N0eChPYmplY3QuYXNzaWduKHtcbiAgICAgIGNhbnZhczogdGhpcy5fY2FudmFzXG4gICAgfSwgeyBzdHlsZTogeyB3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodCB9IH0pKTtcbiAgICB0aGlzLmFDdHggPSBuZXcgQXVkaW9DdHgoe30pO1xuICAgIHRoaXMudGlja2VyID0gbmV3IChnZXRUaWNrZXIoKSkoKVxuICAgIHRoaXMucmVjb25jaWxlciA9IG5ldyBBVlJlY29uY2lsZXIoe1xuICAgICAgdkN0eDogdGhpcy52Q3R4LFxuICAgICAgYUN0eDogdGhpcy5hQ3R4LFxuICAgICAgdmlkZW86IHRoaXNcbiAgICB9KVxuICAgIHRoaXMudkN0eC5vbmNhbnBsYXkgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucGxheWVkKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NhbnBsYXknKSk7XG4gICAgfVxuXG4gICAgdGhpcy5hQ3R4Lm9uKCdBVURJT19TT1VSQ0VfRU5EJywgdGhpcy5oYW5kbGVBdWRpb1NvdXJjZUVuZClcbiAgfVxuXG4gIGhhbmRsZUF1ZGlvU291cmNlRW5kICgpIHtcbiAgICB0aGlzLnJlY29uY2lsZXIuZG9SZWNvbmNpbGUoKVxuICAgIHRoaXMudkN0eC5jbGVhbkJ1ZmZlcigpO1xuICB9XG5cbiAgX2NsZWFuQnVmZmVyICgpIHtcbiAgICB0aGlzLnZDdHguY2xlYW5CdWZmZXIoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5hQ3R4LmRlc3Ryb3koKVxuICAgIHRoaXMudkN0eC5kZXN0cm95KClcbiAgICB0aGlzLnRpY2tlci5zdG9wKClcbiAgICB0aGlzLnN0YXJ0ID0gbnVsbDtcbiAgICB0aGlzLnJlY29uY2lsZXIuZGVzdHJveSgpXG4gICAgdGhpcy5hQ3R4ID0gbnVsbDtcbiAgICB0aGlzLnZDdHggPSBudWxsO1xuICAgIHRoaXMudGlja2VyID0gbnVsbDtcbiAgfVxuXG4gIG9uRGVtdXhDb21wbGV0ZSAodmlkZW9UcmFjaywgYXVkaW9UcmFjaykge1xuICAgIHRoaXMuYUN0eC5kZWNvZGVBdWRpbyhhdWRpb1RyYWNrKTtcbiAgICB0aGlzLnZDdHguZGVjb2RlVmlkZW8odmlkZW9UcmFjayk7XG4gIH1cblxuICBzZXRBdWRpb01ldGEgKG1ldGEpIHtcbiAgICB0aGlzLmFDdHguc2V0QXVkaW9NZXRhRGF0YShtZXRhKTtcbiAgICB0aGlzLmF1ZGlvTWV0YUluaXRlZCA9IHRydWU7XG4gIH1cblxuICBzZXRWaWRlb01ldGEgKG1ldGEpIHtcbiAgICB0aGlzLnZDdHguc2V0VmlkZW9NZXRhRGF0YShtZXRhKTtcbiAgICB0aGlzLnZpZGVvTWV0YUluaXRlZCA9IHRydWU7XG4gIH1cblxuICBnZXQgd2lkdGggKCkge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSB8fCB0aGlzLnZpZGVvV2lkdGhcbiAgfVxuXG4gIHNldCB3aWR0aCAodmFsKSB7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICBjb25zdCBweFZhbCA9IHR5cGVvZiB2YWwgPT09ICdudW1iZXInID8gYCR7dmFsfXB4YCA6IHZhbFxuICAgIHRoaXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHB4VmFsKVxuICAgIHRoaXMuc3R5bGUud2lkdGggPSBweFZhbFxuICAgIHRoaXMuX2NhbnZhcy5zdHlsZS53aWR0aCA9IHB4VmFsO1xuICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHZhbDtcbiAgfVxuXG4gIGdldCBoZWlnaHQgKCkge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JylcbiAgfVxuXG4gIHNldCBoZWlnaHQgKHZhbCkge1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgY29uc3QgcHhWYWwgPSB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IGAke3ZhbH1weGAgOiB2YWxcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcHhWYWwpXG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBweFZhbFxuICAgIHRoaXMuX2NhbnZhcy5zdHlsZS5oZWlnaHQgPSBweFZhbDtcbiAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdmFsO1xuICB9XG5cbiAgZ2V0IHZpZGVvV2lkdGggKCkge1xuICAgIGlmICh0aGlzLnZDdHggJiYgdGhpcy52Q3R4LnZpZGVvV2lkdGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZDdHgudmlkZW9XaWR0aFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgZ2V0IHZpZGVvSGVpZ2h0ICgpIHtcbiAgICBpZiAodGhpcy52Q3R4ICYmIHRoaXMudkN0eC52aWRlb0hlaWdodCkge1xuICAgICAgcmV0dXJuIHRoaXMudkN0eC52aWRlb0hlaWdodFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgZ2V0IHNyYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgfVxuXG4gIHNldCBzcmMgKHZhbCkge1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfVxuXG4gIGdldCByZWFkeVN0YXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy52aWRlb01ldGFJbml0ZWQgPyB0aGlzLnZDdHgucmVhZHlTdGF0ZSA6IDBcbiAgfVxuXG4gIGdldCBzZWVraW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy52aWRlb01ldGFJbml0ZWQgPyB0aGlzLnZDdHguc2Vla2luZyA6IGZhbHNlXG4gIH1cblxuICBnZXQgY3VycmVudFRpbWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZpZGVvTWV0YUluaXRlZCA/IHRoaXMudkN0eC5jdXJyZW50VGltZSAvIDEwMDAgOiAwXG4gIH1cblxuICBnZXQgZHVyYXRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmF1ZGlvTWV0YUluaXRlZCA/IHRoaXMuYUN0eC5kdXJhdGlvbiA6IDBcbiAgfVxuXG4gIGdldCBwYXVzZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXVzZWRcbiAgfVxuXG4gIGdldCBwbGF5YmFja1JhdGUgKCkge1xuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgncGxheWJhY2tSYXRlJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncGxheWJhY2tSYXRlJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDEuMFxuICAgIH1cbiAgfVxuXG4gIHNldCBwbGF5YmFja1JhdGUgKHZhbCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdwbGF5YmFja3JhdGUnLCB2YWwpO1xuICAgIHRoaXMuYUN0eC5wbGF5YmFja1JhdGUgPSB2YWw7XG4gICAgdGhpcy52Q3R4LnBsYXliYWNrUmF0ZSA9IHZhbDtcblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3JhdGVjaGFuZ2UnKSlcbiAgfVxuXG4gIGdldCBlbmRlZCAoKSB7XG4gICAgaWYgKHRoaXMuYXVkaW9NZXRhSW5pdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5hQ3R4LmVuZGVkO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgYXV0b3BsYXkgKCkge1xuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnYXV0b3BsYXknKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdhdXRvcGxheScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHBsYXkgKCkge1xuICAgIGlmICh0aGlzLnBlbmRpbmdQbGF5VGFzaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBsYXllZCkge1xuICAgICAgdGhpcy5kZXN0cm95KClcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICAgIHRoaXMucGVuZGluZ1BsYXlUYXNrID0gUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy52Q3R4LnBsYXkoKSxcbiAgICAgIHRoaXMuYUN0eC5wbGF5KClcbiAgICBdKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudGlja2VyLnN0YXJ0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0KSB7XG4gICAgICAgICAgdGhpcy5zdGFydCA9IERhdGUubm93KClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jdXJyZW50VGltZSA9IERhdGUubm93KCkgLSB0aGlzLnN0YXJ0XG4gICAgICAgIHRoaXMudkN0eC5fb25UaW1lcih0aGlzLl9jdXJyZW50VGltZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucGVuZGluZ1BsYXlUYXNrID0gbnVsbFxuICAgICAgdGhpcy5wbGF5ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncGxheScpKVxuICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgdGhpcy5hQ3R4LnBhdXNlKClcbiAgICB0aGlzLnZDdHgucGF1c2UoKVxuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncGF1c2UnKSlcbiAgfVxuXG4gIGdldCB2b2x1bWUgKCkge1xuICAgIHJldHVybiB0aGlzLmFDdHgudm9sdW1lXG4gIH1cblxuICBzZXQgdm9sdW1lICh2b2wpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgndm9sdW1lJywgdm9sKTtcbiAgICB0aGlzLmFDdHgudm9sdW1lID0gdm9sXG4gIH1cblxuICBnZXQgbXV0ZWQgKCkge1xuICAgIGNvbnN0IGF0dHJNdXRlZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdtdXRlZCcpID09PSAndHJ1ZSdcbiAgICBpZiAoYXR0ck11dGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhdHRyTXV0ZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgndm9sdW1lJykpIHtcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoJ3ZvbHVtZScpKSA9PT0gMFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBzZXQgbXV0ZWQgKHZhbCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdtdXRlZCcsIHZhbCk7XG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIHRoaXMuYUN0eC5tdXRlZCA9IGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYUN0eC5tdXRlZCA9IHRydWVcbiAgICB9XG4gIH1cblxuICBnZXQgZXJyb3IgKCkge1xuICAgIHJldHVybiB0aGlzLnZDdHguZXJyb3IgfHwgdGhpcy5hQ3R4LmVycm9yO1xuICB9XG5cbiAgZ2V0IGJ1ZmZlcmVkICgpIHtcbiAgICByZXR1cm4gdGhpcy52Q3R4LmJ1ZmZlcmVkXG4gIH1cbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtb2JpbGUtdmlkZW8nLCBNb2JpbGVWaWRlbyk7XG4iLCJjbGFzcyBTb3VyY2VCdWZmZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uZmlnLnR5cGU7XG4gICAgdGhpcy5idWZmZXIgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRHb3AgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbGFzdEdldCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1c2ggKGZyYW1lKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgaWYgKGZyYW1lLmlzS2V5ZnJhbWUpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRHb3AgPSB7XG4gICAgICAgICAgc2FtcGxlczogW10sXG4gICAgICAgICAgc3RhcnQ6IGZyYW1lLmR0cyxcbiAgICAgICAgICBlbmQ6IGZyYW1lLmR0cyxcbiAgICAgICAgICBuZXh0R29wOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEdvcCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudEdvcC5uZXh0R29wID0gY3VycmVudEdvcDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRHb3AgPSBjdXJyZW50R29wO1xuICAgICAgICB0aGlzLmJ1ZmZlci5wdXNoKHRoaXMuY3VycmVudEdvcCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRHb3ApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50R29wLnNhbXBsZXMucHVzaChmcmFtZSk7XG5cbiAgICAgICAgaWYgKGZyYW1lLmR0cyA8IHRoaXMuY3VycmVudEdvcC5zdGFydCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudEdvcC5zdGFydCA9IGZyYW1lLmR0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcmFtZS5kdHMgPiB0aGlzLmN1cnJlbnRHb3AuZW5kKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50R29wLmVuZCA9IGZyYW1lLmR0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCAodGltZSkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgIGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPCAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgc2FtcGxlID0gdGhpcy5fZ2V0TmV4dCgpO1xuICAgICAgICByZXR1cm4gc2FtcGxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9nZXROZXh0ICgpIHtcbiAgICBpZiAoIXRoaXMuX2xhc3RHZXQpIHtcbiAgICAgIGxldCBnb3AgPSB0aGlzLmJ1ZmZlclswXTtcbiAgICAgIGlmIChnb3Auc2FtcGxlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9sYXN0R2V0ID0ge1xuICAgICAgICBnb3AsXG4gICAgICAgIGluZGV4OiAwXG4gICAgICB9XG4gICAgICByZXR1cm4gZ29wLnNhbXBsZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBnb3AgPSB0aGlzLl9sYXN0R2V0LmdvcDtcbiAgICAgIGxldCBzYW1wbGUgPSBnb3Auc2FtcGxlc1t0aGlzLl9sYXN0R2V0LmluZGV4ICsgMV07XG4gICAgICBpZiAoc2FtcGxlKSB7XG4gICAgICAgIHRoaXMuX2xhc3RHZXQuaW5kZXggPSB0aGlzLl9sYXN0R2V0LmluZGV4ICsgMTtcbiAgICAgICAgcmV0dXJuIHNhbXBsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdvcCA9IGdvcC5uZXh0R29wO1xuICAgICAgICBpZiAoIWdvcCB8fCBnb3Auc2FtcGxlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNhbXBsZSA9IGdvcC5zYW1wbGVzWzBdO1xuICAgICAgICB0aGlzLl9sYXN0R2V0ID0ge1xuICAgICAgICAgIGdvcCxcbiAgICAgICAgICBpbmRleDogMFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzYW1wbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlIChzdGFydCwgZW5kKSB7XG4gICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGdvcCA9IHRoaXMuYnVmZmVyWzBdO1xuICAgIHdoaWxlIChnb3ApIHtcbiAgICAgIGlmIChnb3AuZW5kIDwgZW5kICYmIGdvcC5zdGFydCA+PSBzdGFydCkge1xuICAgICAgICB0aGlzLmJ1ZmZlci5zcGxpY2UoaSwgMSlcbiAgICAgICAgZ29wID0gdGhpcy5idWZmZXJbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIGdvcCA9IHRoaXMuYnVmZmVyW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3VyY2VCdWZmZXI7XG4iLCIvKipcbiAqIEBhdXRob3IgZnV5dWhhb0BieXRlZGFuY2UuY29tXG4gKi9cblxuY2xhc3MgVGlja2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zIHx8IHt9LCB7XG4gICAgICBpbnRlcnZhbDogMTZcbiAgICB9KVxuXG4gICAgdGhpcy5jYWxsYmFja3MgPSBbXVxuICB9XG5cbiAgc3RhcnQoLi4uY2FsbGJhY2tzKSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3NcbiAgfVxuXG4gIG9uVGljayAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuY2FsbGJhY2tzW2ldXG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgc2V0SW50ZXJ2YWwgKGludGVydmFsKSB7XG4gICAgdGhpcy5vcHRpb25zLmludGVydmFsID0gaW50ZXJ2YWxcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vKipcbiAqIHRpY2tlciB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gKi9cbmNsYXNzIFJhZlRpY2tlciBleHRlbmRzIFRpY2tlciB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMudGltZXJJZCA9IG51bGxcbiAgICB0aGlzLl9zdWJUaW1lcklkID0gbnVsbFxuXG4gICAgdGhpcy5fdGlja0Z1bmMgPSBSYWZUaWNrZXIuZ2V0VGlja0Z1bmMoKVxuICAgIHRoaXMudGljayA9IHRoaXMudGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGFydCAoLi4uY2FsbGJhY2tzKSB7XG4gICAgc3VwZXIuc3RhcnQoLi4uY2FsbGJhY2tzKVxuICAgIHRoaXMudGljaygpXG4gIH1cblxuICB0aWNrICgpIHtcbiAgICB0aGlzLm5leHRUaWNrKCk7XG4gICAgdGhpcy5vblRpY2soKVxuICB9XG5cbiAgbmV4dFRpY2sgKCkge1xuICAgIGNvbnN0IHsgX3RpY2tGdW5jIH0gPSB0aGlzO1xuICAgIHRoaXMudGltZXJJZCA9IF90aWNrRnVuYyh0aGlzLnRpY2spXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICBpZiAodGhpcy50aW1lcklkKSB7XG4gICAgICBjb25zdCBjYW5jZWxGdW5jID0gUmFmVGlja2VyLmdldENhbmNlbEZ1bmMoKVxuXG4gICAgICBjYW5jZWxGdW5jKHRoaXMudGltZXJJZClcbiAgICB9XG4gIH1cblxuICByZXN1bWUoKSB7XG4gICAgdGhpcy5uZXh0VGljaygpO1xuICB9XG5cbiAgc3RhdGljIGdldFRpY2tGdW5jICgpIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIH1cblxuICBzdGF0aWMgZ2V0Q2FuY2VsRnVuYyAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCAoKSB7XG4gICAgcmV0dXJuIFJhZlRpY2tlci5nZXRUaWNrRnVuYygpICE9PSB1bmRlZmluZWRcbiAgfVxufVxuXG4vKipcbiAqIHVzZSBzZXRUaW1lb3V0IGZvciBicm93c2VycyB3aXRob3V0IHJhZiBzdXBwb3J0XG4gKi9cbmNsYXNzIFRpbWVvdXRUaWNrZXIgZXh0ZW5kcyBUaWNrZXIge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpXG4gICAgdGhpcy50aW1lb3V0SWQgPSBudWxsXG5cbiAgfVxuXG4gIHN0YXJ0ICguLi5jYWxsYmFja3MpIHtcbiAgICBzdXBlci5uZXh0VGljayguLi5jYWxsYmFja3MpXG4gICAgdGhpcy50aW1lb3V0SWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5vblRpY2soKTtcbiAgICB9LCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwgfHwgMTYpXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0SWQpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMudGltZW91dElkKVxuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICog6L+U5ZueVGlja2Vy5p6E6YCg5Ye95pWwXG4gKiBAcmV0dXJucyB7VGlja2VyfVxuICovXG5leHBvcnQgY29uc3QgZ2V0VGlja2VyID0gKCkgPT4ge1xuICBpZiAoUmFmVGlja2VyLmlzU3VwcG9ydGVkKCkpIHtcbiAgICByZXR1cm4gUmFmVGlja2VyXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFRpbWVvdXRUaWNrZXJcbiAgfVxufVxuIiwiaW1wb3J0IFdvcmtlcmlmeSBmcm9tICd3ZWJ3b3JraWZ5LXdlYnBhY2snXG5pbXBvcnQgU3RyZWFtIGZyb20gJy4uL3dyaXRlL3N0cmVhbSc7XG5pbXBvcnQgTmFsdW5pdCBmcm9tICcuLi8uLi8uLi94Z3BsYXllci1jb2RlYy9zcmMvaDI2NC9uYWx1bml0JztcbmltcG9ydCBZVVZDYW52YXMgZnJvbSAnLi95dXYtY2FudmFzJztcbmltcG9ydCBTb3VyY2VCdWZmZXIgZnJvbSAnLi9zb3VyY2VidWZmZXInO1xuaW1wb3J0IFRpbWVSYW5nZXMgZnJvbSAnLi4vbW9kZWxzL1RpbWVSYW5nZXMnO1xuXG5jbGFzcyBWaWRlb0NhbnZhcyB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNvbmZpZy5jYW52YXMgPyB0aGlzLmNvbmZpZy5jYW52YXMgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBTb3VyY2VCdWZmZXIoe3R5cGU6ICd2aWRlbyd9KTtcbiAgICB0aGlzLnByZWxvYWRUaW1lID0gdGhpcy5jb25maWcucHJlbG9hZFRpbWUgfHwgMztcbiAgICB0aGlzLm9uY2FucGxheSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uRmlyc3RGcmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1ldGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkeVN0YXR1cyA9IDA7XG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMubGFzdFBsYXllZCA9IDA7XG5cbiAgICB0aGlzLl9kZWNvZGVySW5pdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fYXZjY3B1c2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2RlY29kZWRGcmFtZXMgPSB7fTtcbiAgICB0aGlzLl9sYXN0U2FtcGxlRHRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2Jhc2VEdHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbGFzdFJlbmRlclRpbWUgPSBudWxsXG4gICAgdGhpcy5wbGF5RmluaXNoID0gbnVsbFxuXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5pdFdhc21Xb3JrZXIgKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy53YXNtd29ya2VyID0gV29ya2VyaWZ5KHJlcXVpcmUucmVzb2x2ZSgnLi93b3JrZXIuanMnKSk7XG4gICAgdGhpcy53YXNtd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgIG1zZzogJ2luaXQnLFxuICAgICAgbWV0YTogdGhpcy5tZXRhXG4gICAgfSlcbiAgICB0aGlzLndhc213b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1zZyA9PiB7XG4gICAgICBzd2l0Y2ggKG1zZy5kYXRhLm1zZykge1xuICAgICAgICBjYXNlICdERUNPREVSX1JFQURZJzpcbiAgICAgICAgICBfdGhpcy5fZGVjb2RlckluaXRlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0RFQ09ERUQnOlxuICAgICAgICAgIHRoaXMuX29uRGVjb2RlZChtc2cuZGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRWaWRlb01ldGFEYXRhIChtZXRhKSB7XG4gICAgdGhpcy5tZXRhID0gbWV0YTtcbiAgICBpZiAoIXRoaXMuX2RlY29kZXJJbml0ZWQpIHtcbiAgICAgIHRoaXMuaW5pdFdhc21Xb3JrZXIoKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLl9hdmNjcHVzaGVkID0gdHJ1ZTtcbiAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KG1ldGEuc3BzLmJ5dGVMZW5ndGggKyA0KTtcbiAgICBkYXRhLnNldChbMCwgMCwgMCwgMV0pXG4gICAgZGF0YS5zZXQobWV0YS5zcHMsIDQpO1xuICAgIHRoaXMud2FzbXdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICBtc2c6ICdkZWNvZGUnLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG5cbiAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkobWV0YS5wcHMuYnl0ZUxlbmd0aCArIDQpO1xuICAgIGRhdGEuc2V0KFswLCAwLCAwLCAxXSlcbiAgICBkYXRhLnNldChtZXRhLnBwcywgNCk7XG4gICAgdGhpcy53YXNtd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgIG1zZzogJ2RlY29kZScsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcblxuICAgIGlmICghdGhpcy55dXZDYW52YXMpIHtcbiAgICAgIGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHttZXRhLCBjYW52YXM6IHRoaXMuY2FudmFzfSwgdGhpcy5jb25maWcpO1xuICAgICAgdGhpcy55dXZDYW52YXMgPSBuZXcgWVVWQ2FudmFzKGNvbmZpZyk7XG4gICAgfVxuICAgIHRoaXMucmVhZHlTdGF0dXMgPSAxO1xuICB9XG5cbiAgZGVjb2RlVmlkZW8gKHZpZGVvVHJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2RlY29kZXJJbml0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghdGhpcy5fYXZjY3B1c2hlZCkge1xuICAgICAgdGhpcy5zZXRWaWRlb01ldGFEYXRhKHRoaXMubWV0YSk7XG4gICAgfVxuICAgIGxldCB7IHNhbXBsZXMgfSA9IHZpZGVvVHJhY2s7XG4gICAgbGV0IHNhbXBsZSA9IHNhbXBsZXMuc2hpZnQoKTtcblxuICAgIHdoaWxlIChzYW1wbGUpIHtcbiAgICAgIGlmICghdGhpcy5fYmFzZUR0cykge1xuICAgICAgICB0aGlzLl9iYXNlRHRzID0gc2FtcGxlLmR0cztcbiAgICAgIH1cbiAgICAgIHRoaXMuc291cmNlLnB1c2goc2FtcGxlKTtcbiAgICAgIHNhbXBsZSA9IHNhbXBsZXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wcmVsb2FkKCk7XG4gIH1cblxuICBfcHJlbG9hZCAoKSB7XG4gICAgaWYgKCF0aGlzLl9sYXN0U2FtcGxlRHRzIHx8IHRoaXMuX2xhc3RTYW1wbGVEdHMgLSB0aGlzLl9iYXNlRHRzIDwgdGhpcy5jdXJyZW50VGltZSArIHRoaXMucHJlbG9hZFRpbWUgKiAxMDAwKSB7XG4gICAgICBsZXQgc2FtcGxlID0gdGhpcy5zb3VyY2UuZ2V0KCk7XG4gICAgICBpZiAoc2FtcGxlKSB7XG4gICAgICAgIHRoaXMuX2xhc3RTYW1wbGVEdHMgPSBzYW1wbGUuZHRzO1xuICAgICAgICB0aGlzLl9hbmFseXNlTmFsKHNhbXBsZSk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChzYW1wbGUgJiYgdGhpcy5fbGFzdFNhbXBsZUR0cyAtIHRoaXMuX2Jhc2VEdHMgPCB0aGlzLmN1cnJlbnRUaW1lICsgdGhpcy5wcmVsb2FkVGltZSAqIDEwMDApIHtcbiAgICAgICAgc2FtcGxlID0gdGhpcy5zb3VyY2UuZ2V0KCk7XG4gICAgICAgIGlmIChzYW1wbGUpIHtcbiAgICAgICAgICB0aGlzLl9hbmFseXNlTmFsKHNhbXBsZSk7XG4gICAgICAgICAgdGhpcy5fbGFzdFNhbXBsZUR0cyA9IHNhbXBsZS5kdHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYW5hbHlzZU5hbCAoc2FtcGxlKSB7XG4gICAgbGV0IG5hbHMgPSBOYWx1bml0LmdldEF2Y2NOYWxzKG5ldyBTdHJlYW0oc2FtcGxlLmRhdGEuYnVmZmVyKSk7XG5cbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBuYWwgPSBuYWxzW2ldO1xuICAgICAgbGVuZ3RoICs9IG5hbC5ib2R5LmJ5dGVMZW5ndGggKyA0O1xuICAgIH1cbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbmFsID0gbmFsc1tpXTtcbiAgICAgIGRhdGEuc2V0KFswLCAwLCAwLCAxXSwgb2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSA0O1xuICAgICAgZGF0YS5zZXQobmV3IFVpbnQ4QXJyYXkobmFsLmJvZHkpLCBvZmZzZXQpO1xuICAgICAgb2Zmc2V0ICs9IG5hbC5ib2R5LmJ5dGVMZW5ndGg7XG4gICAgfVxuICAgIHRoaXMud2FzbXdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICBtc2c6ICdkZWNvZGUnLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGluZm86IHtcbiAgICAgICAgZHRzOiBzYW1wbGUuZHRzLFxuICAgICAgICBwdHM6IHNhbXBsZS5wdHMgPyBzYW1wbGUucHRzIDogc2FtcGxlLmR0cyArIHNhbXBsZS5jdHMsXG4gICAgICAgIGtleTogc2FtcGxlLmlzS2V5ZnJhbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX29uRGVjb2RlZCAoZGF0YSkge1xuICAgIGxldCB7ZHRzfSA9IGRhdGEuaW5mb1xuICAgIHRoaXMuX2RlY29kZWRGcmFtZXNbZHRzXSA9IGRhdGE7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX2RlY29kZWRGcmFtZXMpLmxlbmd0aCA+IDEwKSB7XG4gICAgICBpZiAodGhpcy5wbGF5RmluaXNoKSB7XG4gICAgICAgIHRoaXMucGxheUZpbmlzaCgpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vbmNhbnBsYXkpIHtcbiAgICAgICAgdGhpcy5vbmNhbnBsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwbGF5ICgpIHtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5wbGF5RmluaXNoID0gcmVzb2x2ZVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5wbGF5RmluaXNoID0gbnVsbFxuICAgIH0pXG4gIH1cblxuICBfb25UaW1lciAoY3VycmVudFRpbWUpIHtcbiAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubWV0YSkge1xuICAgICAgaWYgKHRoaXMubWV0YS5mcmFtZVJhdGUgJiYgdGhpcy5tZXRhLmZyYW1lUmF0ZS5maXhlZCAmJiB0aGlzLm1ldGEuZnJhbWVSYXRlLmZwcykge1xuICAgICAgfVxuICAgICAgbGV0IGZyYW1lVGltZXMgPSBPYmplY3Qua2V5cyh0aGlzLl9kZWNvZGVkRnJhbWVzKTtcbiAgICAgIGlmIChmcmFtZVRpbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICBsZXQgZnJhbWVUaW1lID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWVUaW1lcy5sZW5ndGggJiYgTnVtYmVyLnBhcnNlSW50KGZyYW1lVGltZXNbaV0pIC0gdGhpcy5fYmFzZUR0cyA8PSB0aGlzLmN1cnJlbnRUaW1lOyBpKyspIHtcbiAgICAgICAgICBmcmFtZVRpbWUgPSBOdW1iZXIucGFyc2VJbnQoZnJhbWVUaW1lc1tpIC0gMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5fZGVjb2RlZEZyYW1lc1tmcmFtZVRpbWVdO1xuICAgICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgICB0aGlzLnl1dkNhbnZhcy5yZW5kZXIoZnJhbWUuYnVmZmVyLCBmcmFtZS53aWR0aCwgZnJhbWUuaGVpZ2h0LCBmcmFtZS55TGluZXNpemUsIGZyYW1lLnV2TGluZXNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWVUaW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChOdW1iZXIucGFyc2VJbnQoZnJhbWVUaW1lc1tpXSkgPCBmcmFtZVRpbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9kZWNvZGVkRnJhbWVzW2ZyYW1lVGltZXNbaV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9sYXN0UmVuZGVyVGltZSA9IERhdGUubm93KClcbiAgfVxuXG4gIGNsZWFuQnVmZmVyICgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+IDEpIHtcbiAgICAgIHRoaXMuc291cmNlLnJlbW92ZSgwLCB0aGlzLmN1cnJlbnRUaW1lIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy53YXNtd29ya2VyID0gbnVsbDtcbiAgICB0aGlzLmNhbnZhcyA9IG51bGxcbiAgICB0aGlzLnNvdXJjZSA9IG51bGxcbiAgICB0aGlzLl9kZWNvZGVySW5pdGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXQgYnVmZmVyZWQgKCkge1xuICAgIGNvbnN0IHJhbmdlcyA9IFtdXG4gICAgbGV0IGN1cnJlbnRSYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiBudWxsLFxuICAgICAgZW5kOiBudWxsXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3VyY2UuYnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHRoaXMuc291cmNlLmJ1ZmZlcltpXTtcbiAgICAgIGlmICghY3VycmVudFJhbmdlLnN0YXJ0KSB7XG4gICAgICAgIGN1cnJlbnRSYW5nZS5zdGFydCA9IHN0YXJ0O1xuICAgICAgfVxuICAgICAgaWYgKCFjdXJyZW50UmFuZ2UuZW5kKSB7XG4gICAgICAgIGN1cnJlbnRSYW5nZS5lbmQgPSBlbmQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydCAtIGN1cnJlbnRSYW5nZS5lbmQgPiAxMDAwKSB7XG4gICAgICAgIGN1cnJlbnRSYW5nZS5zdGFydCA9IGN1cnJlbnRSYW5nZS5zdGFydCAvIDEwMDBcbiAgICAgICAgY3VycmVudFJhbmdlLmVuZCA9IGN1cnJlbnRSYW5nZS5lbmQgLyAxMDAwXG4gICAgICAgIGN1cnJlbnRSYW5nZSA9IHtcbiAgICAgICAgICBzdGFydCxcbiAgICAgICAgICBlbmRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFJhbmdlLmVuZCA9IGVuZFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50UmFuZ2Uuc3RhcnQgIT09IG51bGwgJiYgY3VycmVudFJhbmdlLmVuZCAhPT0gbnVsbCkge1xuICAgICAgY3VycmVudFJhbmdlLnN0YXJ0ID0gY3VycmVudFJhbmdlLnN0YXJ0IC8gMTAwMFxuICAgICAgY3VycmVudFJhbmdlLmVuZCA9IGN1cnJlbnRSYW5nZS5lbmQgLyAxMDAwXG4gICAgICByYW5nZXMucHVzaChjdXJyZW50UmFuZ2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBUaW1lUmFuZ2VzKHJhbmdlcylcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBWaWRlb0NhbnZhcztcbiIsImNvbnN0IE1BWF9TVFJFQU1fQlVGRkVSX0xFTkdUSCA9IDEwMjQgKiAxMDI0O1xudmFyIERlY29kZXIgPSBmdW5jdGlvbiAoc2VsZikge1xuICB0aGlzLmluaXRlZCA9IGZhbHNlO1xuICB0aGlzLnNlbGYgPSBzZWxmO1xuICB0aGlzLm1ldGEgPSB0aGlzLnNlbGYubWV0YTtcbiAgdGhpcy5pbmZvbGlzdCA9IHt9O1xuICBzZWxmLnBhcl9icm9hZHdheU9uQnJvYWR3YXlJbml0ZWQgPSB0aGlzLmJyb2Fkd2F5T25Ccm9hZHdheUluaXRlZC5iaW5kKHRoaXMpO1xuICBzZWxmLnBhcl9icm9hZHdheU9uUGljdHVyZURlY29kZWQgPSB0aGlzLmJyb2Fkd2F5T25QaWN0dXJlRGVjb2RlZC5iaW5kKHRoaXMpO1xufVxuXG5EZWNvZGVyLnByb3RvdHlwZS50b1U4QXJyYXkgPSBmdW5jdGlvbiAocHRyLCBsZW5ndGgpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZi5IRUFQVTguc3ViYXJyYXkocHRyLCBwdHIgKyBsZW5ndGgpO1xufVxuXG5EZWNvZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICBNb2R1bGUuX2Jyb2Fkd2F5SW5pdCgpO1xuICB0aGlzLnN0cmVhbUJ1ZmZlciA9IHRoaXMudG9VOEFycmF5KE1vZHVsZS5fYnJvYWR3YXlDcmVhdGVTdHJlYW0oTUFYX1NUUkVBTV9CVUZGRVJfTEVOR1RIKSwgTUFYX1NUUkVBTV9CVUZGRVJfTEVOR1RIKTtcbn1cblxuRGVjb2Rlci5wcm90b3R5cGUuYnJvYWR3YXlPblBpY3R1cmVEZWNvZGVkID0gZnVuY3Rpb24gKG9mZnNldCwgd2lkdGgsIGhlaWdodCwgeUxpbmVzaXplLCB1dkxpbmVzaXplLCBpbmZvaWQpIHtcbiAgbGV0IGluZm8gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluZm9saXN0W2luZm9pZF0pO1xuICBsZXQgeVJvd2NvdW50ID0gaGVpZ2h0O1xuICBsZXQgdXZSb3djb3VudCA9IGhlaWdodCAvIDI7XG4gIGlmICh0aGlzLm1ldGEuY2hyb21hRm9ybWF0ID09PSA0NDQgfHwgdGhpcy5tZXRhLmNocm9tYUZvcm1hdCA9PT0gNDIyKSB7XG4gICAgdXZSb3djb3VudCA9IGhlaWdodDtcbiAgfVxuICBsZXQgZGF0YSA9IHRoaXMudG9VOEFycmF5KG9mZnNldCwgKHlMaW5lc2l6ZSAqIHlSb3djb3VudCkgKyAyICogKHV2TGluZXNpemUgKiB1dlJvd2NvdW50KSk7XG4gIHRoaXMuaW5mb2xpc3RbaW5mb2lkXSA9IG51bGw7XG4gIGxldCBkYXRldGVtcCA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgZGF0ZXRlbXAuc2V0KGRhdGEpO1xuICBsZXQgYnVmZmVyID0gZGF0ZXRlbXAuYnVmZmVyO1xuICB0aGlzLnNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgIG1zZzogJ0RFQ09ERUQnLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB5TGluZXNpemUsXG4gICAgdXZMaW5lc2l6ZSxcbiAgICBpbmZvLFxuICAgIGJ1ZmZlclxuICB9LCBbYnVmZmVyXSk7XG59XG5cbkRlY29kZXIucHJvdG90eXBlLmJyb2Fkd2F5T25Ccm9hZHdheUluaXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB0aGlzLnNlbGYucG9zdE1lc3NhZ2Uoe21zZzogJ0RFQ09ERVJfUkVBRFknfSk7XG59XG5cbkRlY29kZXIucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChkYXRhLCBpbmZvKSB7XG4gIGxldCB0aW1lID0gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICBsZXQgaW5mb2lkID0gdGltZSAtIChNYXRoLmZsb29yKHRpbWUgLyAxMGU4KSAqIDEwZTgpO1xuICB0aGlzLmluZm9saXN0W2luZm9pZF0gPSBpbmZvO1xuICB0aGlzLnN0cmVhbUJ1ZmZlci5zZXQoZGF0YSk7XG4gIE1vZHVsZS5fYnJvYWR3YXlQbGF5U3RyZWFtKGRhdGEubGVuZ3RoLCBpbmZvaWQpO1xufVxuXG52YXIgZGVjb2RlcjtcblxuZnVuY3Rpb24gb25Qb3N0UnVuICgpIHtcbiAgZGVjb2RlciA9IG5ldyBEZWNvZGVyKHRoaXMpO1xuICBkZWNvZGVyLmluaXQoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCAobWV0YSkge1xuICBzZWxmLmltcG9ydFNjcmlwdHMoJ2h0dHBzOi8vc2YxLXZjbG91ZGNkbi5wc3RhdHAuY29tL29iai90dGZlL21lZGlhL2RlY29kZXIvaDI2NC9kZWNvZGVyLmpzJyk7XG4gIGFkZE9uUG9zdFJ1bihvblBvc3RSdW4uYmluZChzZWxmKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlbGYpIHtcbiAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZGF0YSA9IGUuZGF0YTtcbiAgICBpZiAoIWRhdGEubXNnKSB7XG4gICAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgbXNnOiAnRVJST1I6aW52YWxpZCBtZXNzYWdlJ1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChkYXRhLm1zZykge1xuICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBzZWxmLm1ldGEgPSBkYXRhLm1ldGE7XG4gICAgICAgICAgaW5pdCgpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RlY29kZSc6XG4gICAgICAgICAgZGVjb2Rlci5kZWNvZGUoZGF0YS5kYXRhLCBkYXRhLmluZm8pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSwgZmFsc2UpO1xufVxuIiwiY2xhc3MgWVVWQ2FudmFzIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZ3MpIHtcbiAgICB0aGlzLmNvbmZpZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWdzKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY29uZmlncy5jYW52YXM7XG4gICAgdGhpcy5tZXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25maWdzLm1ldGEpO1xuICAgIHRoaXMuY2hyb21hID0gdGhpcy5tZXRhLmNocm9tYUZvcm1hdDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMubWV0YS5wcmVzZW50SGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB0aGlzLm1ldGEucHJlc2VudFdpZHRoO1xuICAgIC8vIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5tZXRhLnByZXNlbnRXaWR0aDtcbiAgICAvLyB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLm1ldGEucHJlc2VudEhlaWdodDtcbiAgICAvLyB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IGNvbmZpZ3Muc3R5bGUud2lkdGg7XG4gICAgLy8gdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gY29uZmlncy5zdHlsZS5oZWlnaHQ7XG4gICAgdGhpcy5faW5pdENvbnRleHRHTCgpO1xuICAgIGlmICh0aGlzLmNvbnRleHRHTCkge1xuICAgICAgdGhpcy5faW5pdFByb2dyYW0oKTtcbiAgICAgIHRoaXMuX2luaXRCdWZmZXJzKCk7XG4gICAgICB0aGlzLl9pbml0VGV4dHVyZXMoKTtcbiAgICB9O1xuICB9XG5cbiAgX2luaXRDb250ZXh0R0wgKCkge1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICB2YXIgZ2wgPSBudWxsO1xuXG4gICAgdmFyIHZhbGlkQ29udGV4dE5hbWVzID0gWyd3ZWJnbCcsICdleHBlcmltZW50YWwtd2ViZ2wnLCAnbW96LXdlYmdsJywgJ3dlYmtpdC0zZCddO1xuICAgIHZhciBuYW1lSW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKCFnbCAmJiBuYW1lSW5kZXggPCB2YWxpZENvbnRleHROYW1lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBjb250ZXh0TmFtZSA9IHZhbGlkQ29udGV4dE5hbWVzW25hbWVJbmRleF07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRPcHRpb25zKSB7XG4gICAgICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChjb250ZXh0TmFtZSwgdGhpcy5jb250ZXh0T3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChjb250ZXh0TmFtZSk7XG4gICAgICAgIH07XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGdsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFnbCB8fCB0eXBlb2YgZ2wuZ2V0UGFyYW1ldGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGdsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgKytuYW1lSW5kZXg7XG4gICAgfTtcblxuICAgIHRoaXMuY29udGV4dEdMID0gZ2w7XG4gIH07XG5cbiAgX2luaXRQcm9ncmFtICgpIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmNvbnRleHRHTDtcblxuICAgIC8vIHZlcnRleCBzaGFkZXIgaXMgdGhlIHNhbWUgZm9yIGFsbCB0eXBlc1xuICAgIHZhciB2ZXJ0ZXhTaGFkZXJTY3JpcHQ7XG4gICAgdmFyIGZyYWdtZW50U2hhZGVyU2NyaXB0O1xuICAgIHZlcnRleFNoYWRlclNjcmlwdCA9IFtcbiAgICAgICdhdHRyaWJ1dGUgdmVjNCB2ZXJ0ZXhQb3M7JyxcbiAgICAgICdhdHRyaWJ1dGUgdmVjNCB0ZXh0dXJlUG9zOycsXG4gICAgICAnYXR0cmlidXRlIHZlYzQgdVRleHR1cmVQb3M7JyxcbiAgICAgICdhdHRyaWJ1dGUgdmVjNCB2VGV4dHVyZVBvczsnLFxuICAgICAgJ3ZhcnlpbmcgdmVjMiB0ZXh0dXJlQ29vcmQ7JyxcbiAgICAgICd2YXJ5aW5nIHZlYzIgdVRleHR1cmVDb29yZDsnLFxuICAgICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG5cbiAgICAgICd2b2lkIG1haW4oKScsXG4gICAgICAneycsXG4gICAgICAnICBnbF9Qb3NpdGlvbiA9IHZlcnRleFBvczsnLFxuICAgICAgJyAgdGV4dHVyZUNvb3JkID0gdGV4dHVyZVBvcy54eTsnLFxuICAgICAgJyAgdVRleHR1cmVDb29yZCA9IHVUZXh0dXJlUG9zLnh5OycsXG4gICAgICAnICB2VGV4dHVyZUNvb3JkID0gdlRleHR1cmVQb3MueHk7JyxcbiAgICAgICd9J1xuICAgIF0uam9pbignXFxuJyk7XG5cbiAgICBmcmFnbWVudFNoYWRlclNjcmlwdCA9IFtcbiAgICAgICdwcmVjaXNpb24gaGlnaHAgZmxvYXQ7JyxcbiAgICAgICd2YXJ5aW5nIGhpZ2hwIHZlYzIgdGV4dHVyZUNvb3JkOycsXG4gICAgICAndmFyeWluZyBoaWdocCB2ZWMyIHVUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICd2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZDsnLFxuICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHlTYW1wbGVyOycsXG4gICAgICAndW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7JyxcbiAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB2U2FtcGxlcjsnLFxuICAgICAgJ3VuaWZvcm0gbWF0NCBZVVYyUkdCOycsXG5cbiAgICAgICd2b2lkIG1haW4odm9pZCkgeycsXG4gICAgICAnICBoaWdocCBmbG9hdCB5ID0gdGV4dHVyZTJEKHlTYW1wbGVyLCAgdGV4dHVyZUNvb3JkKS5yOycsXG4gICAgICAnICBoaWdocCBmbG9hdCB1ID0gdGV4dHVyZTJEKHVTYW1wbGVyLCAgdVRleHR1cmVDb29yZCkucjsnLFxuICAgICAgJyAgaGlnaHAgZmxvYXQgdiA9IHRleHR1cmUyRCh2U2FtcGxlciwgIHZUZXh0dXJlQ29vcmQpLnI7JyxcbiAgICAgICcgIGdsX0ZyYWdDb2xvciA9IHZlYzQoeSwgdSwgdiwgMSkgKiBZVVYyUkdCOycsXG4gICAgICAnfSdcbiAgICBdLmpvaW4oJ1xcbicpO1xuXG4gICAgdmFyIFlVVjJSR0IgPSBbXG4gICAgICAxLjE2NDM4LCAwLjAwMDAwLCAxLjU5NjAzLCAtMC44NzA3OSxcbiAgICAgIDEuMTY0MzgsIC0wLjM5MTc2LCAtMC44MTI5NywgMC41Mjk1OSxcbiAgICAgIDEuMTY0MzgsIDIuMDE3MjMsIDAuMDAwMDAsIC0xLjA4MTM5LFxuICAgICAgMCwgMCwgMCwgMVxuICAgIF07XG4gICAgdmFyIHZlcnRleFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKTtcbiAgICBnbC5zaGFkZXJTb3VyY2UodmVydGV4U2hhZGVyLCB2ZXJ0ZXhTaGFkZXJTY3JpcHQpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIodmVydGV4U2hhZGVyKTtcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih2ZXJ0ZXhTaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgY29uc29sZS5sb2coJ1ZlcnRleCBzaGFkZXIgZmFpbGVkIHRvIGNvbXBpbGU6ICcgKyBnbC5nZXRTaGFkZXJJbmZvTG9nKHZlcnRleFNoYWRlcikpO1xuICAgIH1cblxuICAgIHZhciBmcmFnbWVudFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpO1xuICAgIGdsLnNoYWRlclNvdXJjZShmcmFnbWVudFNoYWRlciwgZnJhZ21lbnRTaGFkZXJTY3JpcHQpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKGZyYWdtZW50U2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdGcmFnbWVudCBzaGFkZXIgZmFpbGVkIHRvIGNvbXBpbGU6ICcgKyBnbC5nZXRTaGFkZXJJbmZvTG9nKGZyYWdtZW50U2hhZGVyKSk7XG4gICAgfVxuXG4gICAgdmFyIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcbiAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJvZ3JhbSBmYWlsZWQgdG8gY29tcGlsZTogJyArIGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKTtcbiAgICB9XG5cbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdmFyIFlVVjJSR0JSZWYgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ1lVVjJSR0InKTtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFlVVjJSR0JSZWYsIGZhbHNlLCBZVVYyUkdCKTtcblxuICAgIHRoaXMuc2hhZGVyUHJvZ3JhbSA9IHByb2dyYW07XG4gIH1cblxuICBfaW5pdEJ1ZmZlcnMgKCkge1xuICAgIHZhciBnbCA9IHRoaXMuY29udGV4dEdMO1xuICAgIHZhciBwcm9ncmFtID0gdGhpcy5zaGFkZXJQcm9ncmFtO1xuXG4gICAgdmFyIHZlcnRleFBvc0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhQb3NCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFsxLCAxLCAtMSwgMSwgMSwgLTEsIC0xLCAtMV0pLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICB2YXIgdmVydGV4UG9zUmVmID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ3ZlcnRleFBvcycpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHZlcnRleFBvc1JlZik7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih2ZXJ0ZXhQb3NSZWYsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICB2YXIgdGV4dHVyZVBvc0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0ZXh0dXJlUG9zQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICB2YXIgdGV4dHVyZVBvc1JlZiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICd0ZXh0dXJlUG9zJyk7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGV4dHVyZVBvc1JlZik7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0ZXh0dXJlUG9zUmVmLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgdGhpcy50ZXh0dXJlUG9zQnVmZmVyID0gdGV4dHVyZVBvc0J1ZmZlcjtcblxuICAgIHZhciB1VGV4dHVyZVBvc0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB1VGV4dHVyZVBvc0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgdmFyIHVUZXh0dXJlUG9zUmVmID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ3VUZXh0dXJlUG9zJyk7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodVRleHR1cmVQb3NSZWYpO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodVRleHR1cmVQb3NSZWYsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICB0aGlzLnVUZXh0dXJlUG9zQnVmZmVyID0gdVRleHR1cmVQb3NCdWZmZXI7XG5cbiAgICB2YXIgdlRleHR1cmVQb3NCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdlRleHR1cmVQb3NCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIHZhciB2VGV4dHVyZVBvc1JlZiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICd2VGV4dHVyZVBvcycpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHZUZXh0dXJlUG9zUmVmKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHZUZXh0dXJlUG9zUmVmLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgdGhpcy52VGV4dHVyZVBvc0J1ZmZlciA9IHZUZXh0dXJlUG9zQnVmZmVyO1xuICB9O1xuXG4gIF9pbml0VGV4dHVyZXMgKCkge1xuICAgIHZhciBnbCA9IHRoaXMuY29udGV4dEdMO1xuICAgIHZhciBwcm9ncmFtID0gdGhpcy5zaGFkZXJQcm9ncmFtO1xuICAgIHZhciB5VGV4dHVyZVJlZiA9IHRoaXMuX2luaXRUZXh0dXJlKCk7XG4gICAgdmFyIHlTYW1wbGVyUmVmID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd5U2FtcGxlcicpO1xuICAgIGdsLnVuaWZvcm0xaSh5U2FtcGxlclJlZiwgMCk7XG4gICAgdGhpcy55VGV4dHVyZVJlZiA9IHlUZXh0dXJlUmVmO1xuXG4gICAgdmFyIHVUZXh0dXJlUmVmID0gdGhpcy5faW5pdFRleHR1cmUoKTtcbiAgICB2YXIgdVNhbXBsZXJSZWYgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VTYW1wbGVyJyk7XG4gICAgZ2wudW5pZm9ybTFpKHVTYW1wbGVyUmVmLCAxKTtcbiAgICB0aGlzLnVUZXh0dXJlUmVmID0gdVRleHR1cmVSZWY7XG5cbiAgICB2YXIgdlRleHR1cmVSZWYgPSB0aGlzLl9pbml0VGV4dHVyZSgpO1xuICAgIHZhciB2U2FtcGxlclJlZiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndlNhbXBsZXInKTtcbiAgICBnbC51bmlmb3JtMWkodlNhbXBsZXJSZWYsIDIpO1xuICAgIHRoaXMudlRleHR1cmVSZWYgPSB2VGV4dHVyZVJlZjtcbiAgfVxuXG4gIF9pbml0VGV4dHVyZSAoKSB7XG4gICAgdmFyIGdsID0gdGhpcy5jb250ZXh0R0w7XG5cbiAgICB2YXIgdGV4dHVyZVJlZiA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlUmVmKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVSZWY7XG4gIH1cblxuICBfZHJhd1BpY3R1cmVHTCAoZGF0YSwgd2lkdGgsIGhlaWdodCwgeUxpbmVzaXplLCB1dkxpbmVzaXplKSB7XG4gICAgdmFyIHlsZW4gPSB5TGluZXNpemUgKiBoZWlnaHQ7XG4gICAgdmFyIHV2bGVuID0gdXZMaW5lc2l6ZSAqIGhlaWdodCAvIDI7XG4gICAgaWYgKHRoaXMuY2hyb21hID09PSA0NDQgfHwgdGhpcy5jaHJvbWEgPT09IDQyMikge1xuICAgICAgdXZsZW4gKj0gMjtcbiAgICB9XG4gICAgZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgIGxldCByZW5kZXJEYXRhID0ge1xuICAgICAgeURhdGE6IGRhdGEuc3ViYXJyYXkoMCwgeWxlbiksXG4gICAgICB1RGF0YTogZGF0YS5zdWJhcnJheSh5bGVuLCB5bGVuICsgdXZsZW4pLFxuICAgICAgdkRhdGE6IGRhdGEuc3ViYXJyYXkoeWxlbiArIHV2bGVuLCB5bGVuICsgdXZsZW4gKyB1dmxlbilcbiAgICB9XG4gICAgdGhpcy5fZHJhd1BpY3R1cmVHTDQyMChyZW5kZXJEYXRhLCB3aWR0aCwgaGVpZ2h0LCB5TGluZXNpemUsIHV2TGluZXNpemUpO1xuICB9XG5cbiAgX2RyYXdQaWN0dXJlR0w0MjAgKGRhdGEsIHdpZHRoLCBoZWlnaHQsIHlMaW5lc2l6ZSwgdXZMaW5lc2l6ZSkge1xuICAgIHZhciBnbCA9IHRoaXMuY29udGV4dEdMO1xuICAgIHZhciB0ZXh0dXJlUG9zQnVmZmVyID0gdGhpcy50ZXh0dXJlUG9zQnVmZmVyO1xuICAgIHZhciB1VGV4dHVyZVBvc0J1ZmZlciA9IHRoaXMudVRleHR1cmVQb3NCdWZmZXI7XG4gICAgdmFyIHZUZXh0dXJlUG9zQnVmZmVyID0gdGhpcy52VGV4dHVyZVBvc0J1ZmZlcjtcblxuICAgIHZhciB5VGV4dHVyZVJlZiA9IHRoaXMueVRleHR1cmVSZWY7XG4gICAgdmFyIHVUZXh0dXJlUmVmID0gdGhpcy51VGV4dHVyZVJlZjtcbiAgICB2YXIgdlRleHR1cmVSZWYgPSB0aGlzLnZUZXh0dXJlUmVmO1xuXG4gICAgdmFyIHlEYXRhID0gZGF0YS55RGF0YTtcbiAgICB2YXIgdURhdGEgPSBkYXRhLnVEYXRhO1xuICAgIHZhciB2RGF0YSA9IGRhdGEudkRhdGE7XG5cbiAgICB2YXIgeURhdGFQZXJSb3cgPSB5TGluZXNpemU7XG4gICAgdmFyIHlSb3dDbnQgPSBoZWlnaHQ7XG5cbiAgICB2YXIgdURhdGFQZXJSb3cgPSB3aWR0aCAvIDI7XG4gICAgdmFyIHVSb3dDbnQgPSBoZWlnaHQgLyAyO1xuXG4gICAgaWYgKHRoaXMuY2hyb21hID09PSA0MjIgfHwgdGhpcy5jaHJvbWEgPT09IDQ0NCkge1xuICAgICAgdVJvd0NudCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICB2YXIgdkRhdGFQZXJSb3cgPSB1dkxpbmVzaXplO1xuICAgIHZhciB2Um93Q250ID0gdVJvd0NudDtcblxuICAgIGxldCByYXRpb3cgPSB0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMud2lkdGg7XG4gICAgbGV0IHJhdGlvaCA9IHRoaXMuY2FudmFzLmhlaWdodCAvIHRoaXMuaGVpZ2h0O1xuICAgIGxldCBsZWZ0ID0gMDtcbiAgICBsZXQgdG9wID0gMDtcbiAgICBsZXQgdyA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgIGxldCBoID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIGlmIChyYXRpb3cgPCByYXRpb2gpIHtcbiAgICAgIGggPSAodGhpcy5oZWlnaHQgKiB0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMud2lkdGgpO1xuICAgICAgdG9wID0gcGFyc2VJbnQoKHRoaXMuY2FudmFzLmhlaWdodCAtICh0aGlzLmhlaWdodCAqIHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy53aWR0aCkpIC8gMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHcgPSAodGhpcy53aWR0aCAqIHRoaXMuY2FudmFzLmhlaWdodCAvIHRoaXMuaGVpZ2h0KTtcbiAgICAgIGxlZnQgPSBwYXJzZUludCgodGhpcy5jYW52YXMud2lkdGggLSAodGhpcy53aWR0aCAqIHRoaXMuY2FudmFzLmhlaWdodCAvIHRoaXMuaGVpZ2h0KSkgLyAyKTtcbiAgICB9XG4gICAgZ2wudmlld3BvcnQobGVmdCwgdG9wLCB3LCBoKTtcblxuICAgIHZhciB0ZXh0dXJlUG9zVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0ZXh0dXJlUG9zQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGV4dHVyZVBvc1ZhbHVlcywgZ2wuRFlOQU1JQ19EUkFXKTtcblxuICAgIHZhciB1VGV4dHVyZVBvc1ZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdVRleHR1cmVQb3NCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB1VGV4dHVyZVBvc1ZhbHVlcywgZ2wuRFlOQU1JQ19EUkFXKTtcblxuICAgIHZhciB2VGV4dHVyZVBvc1ZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdlRleHR1cmVQb3NCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB2VGV4dHVyZVBvc1ZhbHVlcywgZ2wuRFlOQU1JQ19EUkFXKTtcblxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHlUZXh0dXJlUmVmKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLkxVTUlOQU5DRSwgeURhdGFQZXJSb3csIHlSb3dDbnQsIDAsIGdsLkxVTUlOQU5DRSwgZ2wuVU5TSUdORURfQllURSwgeURhdGEpO1xuXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMSk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdVRleHR1cmVSZWYpO1xuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuTFVNSU5BTkNFLCB1RGF0YVBlclJvdywgdVJvd0NudCwgMCwgZ2wuTFVNSU5BTkNFLCBnbC5VTlNJR05FRF9CWVRFLCB1RGF0YSk7XG5cbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUyKTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB2VGV4dHVyZVJlZik7XG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5MVU1JTkFOQ0UsIHZEYXRhUGVyUm93LCB2Um93Q250LCAwLCBnbC5MVU1JTkFOQ0UsIGdsLlVOU0lHTkVEX0JZVEUsIHZEYXRhKTtcblxuICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xuICB9XG5cbiAgX2RyYXdQaWN0dXJlUkdCIChkYXRhKSB7XG5cbiAgfVxuXG4gIHJlbmRlciAoZGF0YSwgd2lkdGgsIGhlaWdodCwgeUxpbmVzaXplLCB1dkxpbmVzaXplKSB7XG4gICAgdmFyIGdsID0gdGhpcy5jb250ZXh0R0w7XG4gICAgaWYgKGdsKSB7XG4gICAgICB0aGlzLl9kcmF3UGljdHVyZUdMKGRhdGEsIHdpZHRoLCBoZWlnaHQsIHlMaW5lc2l6ZSwgdXZMaW5lc2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RyYXdQaWN0dXJlUkdCKGRhdGEpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZVVZDYW52YXM7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lUmFuZ2VzIHtcbiAgY29uc3RydWN0b3IgKHJhbmdlcykge1xuICAgIHRoaXMucmFuZ2VzID0gcmFuZ2VzIHx8IFtdO1xuICB9XG5cbiAgc3RhcnQgKGlkeCkge1xuICAgIHJldHVybiB0aGlzLnJhbmdlc1tpZHhdID8gdGhpcy5yYW5nZXNbaWR4XS5zdGFydCA6IDBcbiAgfVxuXG4gIGVuZCAoaWR4KSB7XG4gICAgcmV0dXJuIHRoaXMucmFuZ2VzW2lkeF0gPyB0aGlzLnJhbmdlc1tpZHhdLmVuZCA6IDBcbiAgfVxuXG4gIGFkZCAocmFuZ2UpIHtcbiAgICB0aGlzLnJhbmdlcy5wdXNoKHJhbmdlKVxuICB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmFuZ2VzLmxlbmd0aFxuICB9XG59XG4iLCJjb25zdCBpc09iamVjdEZpbGxlZCA9IChvYmopID0+IHtcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUluZm8ge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5taW1lVHlwZSA9IG51bGxcbiAgICB0aGlzLmR1cmF0aW9uID0gbnVsbFxuXG4gICAgdGhpcy5oYXNWaWRlbyA9IG51bGxcbiAgICB0aGlzLnZpZGVvID0ge1xuICAgICAgY29kZWM6IG51bGwsXG4gICAgICB3aWR0aDogbnVsbCxcbiAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgIHByb2ZpbGU6IG51bGwsXG4gICAgICBsZXZlbDogbnVsbCxcbiAgICAgIGZyYW1lUmF0ZToge1xuICAgICAgICBmaXhlZDogdHJ1ZSxcbiAgICAgICAgZnBzOiAyNSxcbiAgICAgICAgZnBzX251bTogMjUwMDAsXG4gICAgICAgIGZwc19kZW46IDEwMDBcbiAgICAgIH0sXG4gICAgICBjaHJvbWFGb3JtYXQ6IG51bGwsXG4gICAgICBwYXJSYXRpbzoge1xuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgaGVpZ2h0OiAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5oYXNBdWRpbyA9IG51bGxcblxuICAgIHRoaXMuYXVkaW8gPSB7XG4gICAgICBjb2RlYzogbnVsbCxcbiAgICAgIHNhbXBsZVJhdGU6IG51bGwsXG4gICAgICBzYW1wbGVSYXRlSW5kZXg6IG51bGwsXG4gICAgICBjaGFubmVsQ291bnQ6IG51bGxcbiAgICB9XG4gIH1cblxuICBpc0NvbXBsZXRlICgpIHtcbiAgICByZXR1cm4gTWVkaWFJbmZvLmlzQmFzZUluZm9SZWFkeSh0aGlzKSAmJiBNZWRpYUluZm8uaXNWaWRlb1JlYWR5KHRoaXMpICYmIE1lZGlhSW5mby5pc0F1ZGlvUmVhZHkodGhpcylcbiAgfVxuXG4gIHN0YXRpYyBpc0Jhc2VJbmZvUmVhZHkgKG1lZGlhSW5mbykge1xuICAgIHJldHVybiBpc09iamVjdEZpbGxlZChtZWRpYUluZm8pXG4gIH1cblxuICBzdGF0aWMgaXNWaWRlb1JlYWR5IChtZWRpYUluZm8pIHtcbiAgICBpZiAoIW1lZGlhSW5mby5oYXNWaWRlbykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gaXNPYmplY3RGaWxsZWQobWVkaWFJbmZvLnZpZGVvKVxuICB9XG5cbiAgc3RhdGljIGlzQXVkaW9SZWFkeSAobWVkaWFJbmZvKSB7XG4gICAgaWYgKCFtZWRpYUluZm8uaGFzQXVkaW8pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzT2JqZWN0RmlsbGVkKG1lZGlhSW5mby52aWRlbylcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTYW1wbGUge1xuICBjb25zdHJ1Y3RvciAoaW5mbykge1xuICAgIGxldCBfZGVmYXVsdCA9IE1lZGlhU2FtcGxlLmdldERlZmF1bHRJbmYoKVxuXG4gICAgaWYgKCFpbmZvIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbmZvKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgIHJldHVybiBfZGVmYXVsdFxuICAgIH1cbiAgICBsZXQgc2FtcGxlID0gT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHQsIGluZm8pXG5cbiAgICBPYmplY3QuZW50cmllcyhzYW1wbGUpLmZvckVhY2goKFtrLCB2XSkgPT4ge1xuICAgICAgdGhpc1trXSA9IHZcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGdldERlZmF1bHRJbmYgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkdHM6IG51bGwsXG4gICAgICBwdHM6IG51bGwsXG4gICAgICBkdXJhdGlvbjogbnVsbCxcbiAgICAgIHBvc2l0aW9uOiBudWxsLFxuICAgICAgaXNSQVA6IGZhbHNlLCAvLyBpcyBSYW5kb20gYWNjZXNzIHBvaW50XG4gICAgICBvcmlnaW5EdHM6IG51bGxcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2VnbWVudExpc3Qge1xuXG4gICAgY29uc3RydWN0b3IgKHR5cGUpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX2xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uID0gLTE7IC8vIGNhY2hlZCBsYXN0IGluc2VydCBsb2NhdGlvblxuICAgIH1cblxuICAgIGdldCB0eXBlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBpc0VtcHR5ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIGNsZWFyICgpIHtcbiAgICAgICAgdGhpcy5fbGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9sYXN0QXBwZW5kTG9jYXRpb24gPSAtMTtcbiAgICB9XG5cbiAgICBfc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5fbGlzdDtcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLTI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhc3QgPSBsaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBtaWQgPSAwO1xuICAgICAgICBsZXQgbGJvdW5kID0gMDtcbiAgICAgICAgbGV0IHVib3VuZCA9IGxhc3Q7XG5cbiAgICAgICAgbGV0IGlkeCA9IDA7XG5cbiAgICAgICAgaWYgKGJlZ2luRHRzIDwgbGlzdFswXS5vcmlnaW5EdHMpIHtcbiAgICAgICAgICAgIGlkeCA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChsYm91bmQgPD0gdWJvdW5kKSB7XG4gICAgICAgICAgICBtaWQgPSBsYm91bmQgKyBNYXRoLmZsb29yKCh1Ym91bmQgLSBsYm91bmQpIC8gMik7XG4gICAgICAgICAgICBpZiAobWlkID09PSBsYXN0IHx8IChiZWdpbkR0cyA+IGxpc3RbbWlkXS5sYXN0U2FtcGxlLm9yaWdpbkR0c1xuICAgICAgICAgICAgICAgICAgICAmJiAoYmVnaW5EdHMgPCBsaXN0W21pZCArIDFdLm9yaWdpbkR0cykpKSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gbWlkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0W21pZF0ub3JpZ2luRHRzIDwgYmVnaW5EdHMpIHtcbiAgICAgICAgICAgICAgICBsYm91bmQgPSBtaWQgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1Ym91bmQgPSBtaWQgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuXG4gICAgX3NlYXJjaE5lYXJlc3RTZWdtZW50QWZ0ZXIgKGJlZ2luRHRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShiZWdpbkR0cykgKyAxO1xuICAgIH1cblxuICAgIGFwcGVuZCAoc2VnbWVudCkge1xuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuX2xpc3Q7XG4gICAgICAgIGxldCBsYXN0QXBwZW5kSWR4ID0gdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uO1xuICAgICAgICBsZXQgaW5zZXJ0SWR4ID0gMDtcblxuICAgICAgICBpZiAobGFzdEFwcGVuZElkeCAhPT0gLTEgJiYgbGFzdEFwcGVuZElkeCA8IGxpc3QubGVuZ3RoXG4gICAgICAgICAgICAmJiBzZWdtZW50Lm9yaWdpblN0YXJ0RHRzID49IGxpc3RbbGFzdEFwcGVuZElkeF0ubGFzdFNhbXBsZS5vcmlnaW5EdHNcbiAgICAgICAgICAgICYmICgobGFzdEFwcGVuZElkeCA9PT0gbGlzdC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIHx8IChsYXN0QXBwZW5kSWR4IDwgbGlzdC5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICYmIHNlZ21lbnQub3JpZ2luU3RhcnREdHMgPCBsaXN0W2xhc3RBcHBlbmRJZHggKyAxXS5vcmlnaW5TdGFydER0cykpKSB7XG4gICAgICAgICAgICBpbnNlcnRJZHggPSBsYXN0QXBwZW5kSWR4ICsgMTsgLy8gdXNlIGNhY2hlZCBsb2NhdGlvbiBpZHhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRJZHggPSB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShzZWdtZW50Lm9yaWdpblN0YXJ0RHRzKSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0QXBwZW5kTG9jYXRpb24gPSBpbnNlcnRJZHg7XG4gICAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKGluc2VydElkeCwgMCwgc2VnbWVudCk7XG4gICAgfVxuXG4gICAgZ2V0TGFzdFNlZ21lbnRCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShiZWdpbkR0cyk7XG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RbaWR4XTtcbiAgICAgICAgfSBlbHNlIHsgLy8gLTFcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGFzdFNhbXBsZUJlZm9yZSAoYmVnaW5EdHMpIHtcbiAgICAgICAgbGV0IHNlZ21lbnQgPSB0aGlzLmdldExhc3RTZWdtZW50QmVmb3JlKGJlZ2luRHRzKTtcbiAgICAgICAgaWYgKHNlZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWdtZW50Lmxhc3RTYW1wbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExhc3RSQVBCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBzZWdtZW50SWR4ID0gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoYmVnaW5EdHMpO1xuICAgICAgICBsZXQgcmFuZG9tQWNjZXNzUG9pbnRzID0gdGhpcy5fbGlzdFtzZWdtZW50SWR4XS5yYW5kb21BY2Nlc3NQb2ludHM7XG4gICAgICAgIHdoaWxlIChyYW5kb21BY2Nlc3NQb2ludHMubGVuZ3RoID09PSAwICYmIHNlZ21lbnRJZHggPiAwKSB7XG4gICAgICAgICAgICBzZWdtZW50SWR4LS07XG4gICAgICAgICAgICByYW5kb21BY2Nlc3NQb2ludHMgPSB0aGlzLl9saXN0W3NlZ21lbnRJZHhdLnJhbmRvbUFjY2Vzc1BvaW50cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZG9tQWNjZXNzUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByYW5kb21BY2Nlc3NQb2ludHNbcmFuZG9tQWNjZXNzUG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNlZ21lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zdGFydER0cyA9IC0xO1xuICAgICAgICB0aGlzLmVuZER0cyA9IC0xO1xuICAgICAgICB0aGlzLnN0YXJ0UHRzID0gLTE7XG4gICAgICAgIHRoaXMuZW5kUHRzID0gLTE7XG4gICAgICAgIHRoaXMub3JpZ2luU3RhcnREdHMgPSAtMTtcbiAgICAgICAgdGhpcy5vcmlnaW5FbmREdHMgPSAtMTtcbiAgICAgICAgdGhpcy5yYW5kb21BY2Nlc3NQb2ludHMgPSBbXTtcbiAgICAgICAgdGhpcy5maXJzdFNhbXBsZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdFNhbXBsZSA9IG51bGw7XG4gICAgfVxuXG4gICAgYWRkUkFQIChzYW1wbGUpIHtcbiAgICAgICAgc2FtcGxlLmlzUkFQID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yYW5kb21BY2Nlc3NQb2ludHMucHVzaChzYW1wbGUpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQXVkaW9UcmFja01ldGEge1xuICBjb25zdHJ1Y3RvciAobWV0YSkge1xuICAgIGNvbnN0IF9kZWZhdWx0ID0ge1xuICAgICAgc2FtcGxlUmF0ZTogNDgwMDAsXG4gICAgICBjaGFubmVsQ291bnQ6IDIsXG4gICAgICBjb2RlYzogJ21wNGEuNDAuMicsXG4gICAgICBjb25maWc6IFs0MSwgNDAxLCAxMzYsIDBdLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICBpZDogMixcbiAgICAgIHJlZlNhbXBsZUR1cmF0aW9uOiAyMSxcbiAgICAgIHNhbXBsZVJhdGVJbmRleDogMyxcbiAgICAgIHRpbWVzY2FsZTogMTAwMCxcbiAgICAgIHR5cGU6ICdhdWRpbydcbiAgICB9XG4gICAgaWYgKG1ldGEpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfZGVmYXVsdCwgbWV0YSlcbiAgICB9XG4gICAgcmV0dXJuIF9kZWZhdWx0XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluaXQgPSBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvVHJhY2tNZXRhIHtcbiAgY29uc3RydWN0b3IgKG1ldGEpIHtcbiAgICBjb25zdCBfZGVmYXVsdCA9IHtcbiAgICAgIGF2Y2M6IG51bGwsXG4gICAgICBzcHM6IG5ldyBVaW50OEFycmF5KDApLFxuICAgICAgcHBzOiBuZXcgVWludDhBcnJheSgwKSxcbiAgICAgIGNocm9tYUZvcm1hdDogNDIwLFxuICAgICAgY29kZWM6ICdhdmMxLjY0MDAyMCcsXG4gICAgICBjb2RlY0hlaWdodDogNzIwLFxuICAgICAgY29kZWNXaWR0aDogMTI4MCxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgZnJhbWVSYXRlOiB7XG4gICAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgICBmcHM6IDI1LFxuICAgICAgICBmcHNfbnVtOiAyNTAwMCxcbiAgICAgICAgZnBzX2RlbjogMTAwMFxuICAgICAgfSxcbiAgICAgIGlkOiAxLFxuICAgICAgbGV2ZWw6ICczLjInLFxuICAgICAgcHJlc2VudEhlaWdodDogNzIwLFxuICAgICAgcHJlc2VudFdpZHRoOiAxMjgwLFxuICAgICAgcHJvZmlsZTogJ0hpZ2gnLFxuICAgICAgcmVmU2FtcGxlRHVyYXRpb246IDQwLFxuICAgICAgcGFyUmF0aW86IHtcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMVxuICAgICAgfSxcbiAgICAgIHRpbWVzY2FsZTogMTAwMCxcbiAgICAgIHR5cGU6ICd2aWRlbydcbiAgICB9XG5cbiAgICBpZiAobWV0YSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0LCBtZXRhKVxuICAgIH1cbiAgICByZXR1cm4gX2RlZmF1bHRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5pdCA9IG51bGxcbiAgICB0aGlzLnNwcyA9IG51bGxcbiAgICB0aGlzLnBwcyA9IG51bGxcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEF1ZGlvVHJhY2tTYW1wbGUge1xuICBjb25zdHJ1Y3RvciAoaW5mbykge1xuICAgIGxldCBfZGVmYXVsdCA9IEF1ZGlvVHJhY2tTYW1wbGUuZ2V0RGVmYXVsdCgpXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICByZXR1cm4gX2RlZmF1bHRcbiAgICB9XG4gICAgbGV0IHNhbXBsZSA9IE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0LCBpbmZvKVxuXG4gICAgcmV0dXJuIHNhbXBsZVxuICB9XG5cbiAgc3RhdGljIGdldERlZmF1bHQgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkdHM6IG51bGwsXG4gICAgICBwdHM6IG51bGwsXG4gICAgICBkYXRhOiBuZXcgVWludDhBcnJheSgpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb1RyYWNrU2FtcGxlIHtcbiAgY29uc3RydWN0b3IgKGluZm8pIHtcbiAgICBsZXQgX2RlZmF1bHQgPSBWaWRlb1RyYWNrU2FtcGxlLmdldERlZmF1bHQoKVxuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICByZXR1cm4gX2RlZmF1bHRcbiAgICB9XG4gICAgbGV0IHNhbXBsZSA9IE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0LCBpbmZvKVxuXG4gICAgcmV0dXJuIHNhbXBsZVxuICB9XG5cbiAgc3RhdGljIGdldERlZmF1bHQgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkdHM6IG51bGwsXG4gICAgICBwdHM6IG51bGwsXG4gICAgICBpc0tleWZyYW1lOiBmYWxzZSwgLy8gaXMgUmFuZG9tIGFjY2VzcyBwb2ludFxuICAgICAgb3JpZ2luRHRzOiBudWxsLFxuICAgICAgZGF0YTogbmV3IFVpbnQ4QXJyYXkoKVxuICAgIH1cbiAgfVxufVxuIiwiY2xhc3MgTVNFIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZ3MpIHtcbiAgICB0aGlzLmNvbmZpZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWdzKTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY29uZmlncy5jb250YWluZXI7XG4gICAgdGhpcy5tZWRpYVNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5zb3VyY2VCdWZmZXJzID0ge307XG4gICAgdGhpcy5wcmVsb2FkVGltZSA9IHRoaXMuY29uZmlncy5wcmVsb2FkVGltZSB8fCAxO1xuICAgIHRoaXMub25Tb3VyY2VPcGVuID0gdGhpcy5vblNvdXJjZU9wZW4uYmluZCh0aGlzKVxuICAgIHRoaXMub25UaW1lVXBkYXRlID0gdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMub25VcGRhdGVFbmQgPSB0aGlzLm9uVXBkYXRlRW5kLmJpbmQodGhpcylcbiAgICB0aGlzLm9uV2FpdGluZyA9IHRoaXMub25XYWl0aW5nLmJpbmQodGhpcylcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHRoaXMubWVkaWFTb3VyY2UgPSBuZXcgc2VsZi5NZWRpYVNvdXJjZSgpO1xuICAgIHRoaXMubWVkaWFTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignc291cmNlb3BlbicsIHRoaXMub25Tb3VyY2VPcGVuKTtcbiAgICB0aGlzLmNvbnRhaW5lci5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMubWVkaWFTb3VyY2UpO1xuICAgIHRoaXMudXJsID0gdGhpcy5jb250YWluZXIuc3JjO1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVGltZVVwZGF0ZSk7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignd2FpdGluZycsIHRoaXMub25XYWl0aW5nKTtcbiAgfVxuXG4gIG9uVGltZVVwZGF0ZSAoKSB7XG4gICAgdGhpcy5lbWl0KCdUSU1FX1VQREFURScsIHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIG9uV2FpdGluZyAoKSB7XG4gICAgdGhpcy5lbWl0KCdXQUlUSU5HJywgdGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgb25Tb3VyY2VPcGVuICgpIHtcbiAgICB0aGlzLmFkZFNvdXJjZUJ1ZmZlcnMoKTtcbiAgfVxuXG4gIG9uVXBkYXRlRW5kICgpIHtcbiAgICB0aGlzLmVtaXQoJ1NPVVJDRV9VUERBVEVfRU5EJyk7XG4gICAgdGhpcy5kb0FwcGVuZCgpXG4gIH1cbiAgYWRkU291cmNlQnVmZmVycyAoKSB7XG4gICAgaWYgKHRoaXMubWVkaWFTb3VyY2UucmVhZHlTdGF0ZSAhPT0gJ29wZW4nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzb3VyY2VzID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnUFJFX1NPVVJDRV9CVUZGRVInKTtcbiAgICBsZXQgdHJhY2tzID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJyk7XG4gICAgbGV0IHRyYWNrO1xuXG4gICAgc291cmNlcyA9IHNvdXJjZXMuc291cmNlcztcbiAgICBsZXQgYWRkID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBPYmplY3Qua2V5cyhzb3VyY2VzKS5sZW5ndGg7IGkgPCBrOyBpKyspIHtcbiAgICAgIGxldCB0eXBlID0gT2JqZWN0LmtleXMoc291cmNlcylbaV07XG4gICAgICBpZiAodHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgICB0cmFjayA9IHRyYWNrcy5hdWRpb1RyYWNrO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgIHRyYWNrID0gdHJhY2tzLnZpZGVvVHJhY2s7XG4gICAgICAgIC8vIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFjaykge1xuICAgICAgICBsZXQgZHVyID0gdHlwZSA9PT0gJ2F1ZGlvJyA/IDIxIDogNDA7XG4gICAgICAgIGlmICh0cmFjay5tZXRhICYmIHRyYWNrLm1ldGEucmVmU2FtcGxlRHVyYXRpb24pIGR1ciA9IHRyYWNrLm1ldGEucmVmU2FtcGxlRHVyYXRpb247XG4gICAgICAgIGlmIChzb3VyY2VzW3R5cGVdLmRhdGEubGVuZ3RoID49ICh0aGlzLnByZWxvYWRUaW1lIC8gZHVyKSkge1xuICAgICAgICAgIGFkZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWRkKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gT2JqZWN0LmtleXMoc291cmNlcykubGVuZ3RoOyBpIDwgazsgaSsrKSB7XG4gICAgICAgIGxldCB0eXBlID0gT2JqZWN0LmtleXMoc291cmNlcylbaV07XG4gICAgICAgIGxldCBzb3VyY2UgPSBzb3VyY2VzW3R5cGVdXG4gICAgICAgIGxldCBtaW1lID0gKHR5cGUgPT09ICd2aWRlbycpID8gJ3ZpZGVvL21wNDtjb2RlY3M9JyArIHNvdXJjZS5taW1ldHlwZSA6ICdhdWRpby9tcDQ7Y29kZWNzPScgKyBzb3VyY2UubWltZXR5cGVcbiAgICAgICAgbGV0IHNvdXJjZUJ1ZmZlciA9IHRoaXMubWVkaWFTb3VyY2UuYWRkU291cmNlQnVmZmVyKG1pbWUpO1xuICAgICAgICB0aGlzLnNvdXJjZUJ1ZmZlcnNbdHlwZV0gPSBzb3VyY2VCdWZmZXI7XG4gICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKCd1cGRhdGVlbmQnLCB0aGlzLm9uVXBkYXRlRW5kKTtcbiAgICAgICAgdGhpcy5kb0FwcGVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRvQXBwZW5kICgpIHtcbiAgICBsZXQgc291cmNlcyA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1BSRV9TT1VSQ0VfQlVGRkVSJyk7XG4gICAgaWYgKHNvdXJjZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdHlwZSA9IE9iamVjdC5rZXlzKHRoaXMuc291cmNlQnVmZmVycylbaV1cbiAgICAgICAgbGV0IHNvdXJjZUJ1ZmZlciA9IHRoaXMuc291cmNlQnVmZmVyc1t0eXBlXTtcbiAgICAgICAgaWYgKCFzb3VyY2VCdWZmZXIudXBkYXRpbmcpIHtcbiAgICAgICAgICBsZXQgc291cmNlID0gc291cmNlcy5zb3VyY2VzW3R5cGVdO1xuICAgICAgICAgIGlmIChzb3VyY2UgJiYgIXNvdXJjZS5pbml0ZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhcHBlbmQgaW5pdGlhbCBzZWdtZW50JylcbiAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hcHBlbmRCdWZmZXIoc291cmNlLmluaXQuYnVmZmVyLmJ1ZmZlcik7XG4gICAgICAgICAgICBzb3VyY2UuaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBzb3VyY2UuZGF0YS5zaGlmdCgpXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYXBwZW5kQnVmZmVyKGRhdGEuYnVmZmVyLmJ1ZmZlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW5kT2ZTdHJlYW0gKCkge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgYWN0aXZlU291cmNlQnVmZmVycyB9ID0gdGhpcy5tZWRpYVNvdXJjZTtcbiAgICBpZiAocmVhZHlTdGF0ZSA9PT0gJ29wZW4nICYmIGFjdGl2ZVNvdXJjZUJ1ZmZlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm1lZGlhU291cmNlLmVuZE9mU3RyZWFtKClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gbG9nXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlIChlbmQsIHN0YXJ0ID0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGJ1ZmZlciA9IHRoaXMuc291cmNlQnVmZmVyc1tPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpW2ldXTtcbiAgICAgIGlmICghYnVmZmVyLnVwZGF0aW5nKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0LCBlbmQpXG4gICAgICAgIGJ1ZmZlci5yZW1vdmUoc3RhcnQsIGVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlbW92ZUJ1ZmZlcnMgKCkge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHRoaXMuc291cmNlQnVmZmVycykubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBidWZmZXIgPSB0aGlzLnNvdXJjZUJ1ZmZlcnNbT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKVtpXV07XG4gICAgICBidWZmZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndXBkYXRlZW5kJywgdGhpcy5vblVwZGF0ZUVuZCk7XG5cbiAgICAgIGxldCB0YXNrO1xuICAgICAgaWYgKGJ1ZmZlci51cGRhdGluZykge1xuICAgICAgICB0YXNrID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICBjb25zdCBkb0NsZWFuQnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHJldHJ5VGltZSA9IDNcblxuICAgICAgICAgICAgY29uc3QgY2xlYW4gPSAoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghYnVmZmVyLnVwZGF0aW5nKSB7XG4gICAgICAgICAgICAgICAgTVNFLmNsZWFyQnVmZmVyKGJ1ZmZlcilcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXRyeVRpbWUgPiAwKXtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNsZWFuLCAyMDApXG4gICAgICAgICAgICAgICAgcmV0cnlUaW1lLS1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNsZWFuLCAyMDApXG4gICAgICAgICAgICBidWZmZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndXBkYXRlZW5kJywgZG9DbGVhbkJ1ZmZlcilcbiAgICAgICAgICB9XG4gICAgICAgICAgYnVmZmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZWVuZCcsIGRvQ2xlYW5CdWZmZXIpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBNU0UuY2xlYXJCdWZmZXIoYnVmZmVyKVxuICAgICAgICB0YXNrID0gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cblxuICAgICAgdGFza0xpc3QucHVzaCh0YXNrKVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0YXNrTGlzdClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUJ1ZmZlcnMoKS50aGVuKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYnVmZmVyID0gdGhpcy5zb3VyY2VCdWZmZXJzW09iamVjdC5rZXlzKHRoaXMuc291cmNlQnVmZmVycylbaV1dO1xuICAgICAgICB0aGlzLm1lZGlhU291cmNlLnJlbW92ZVNvdXJjZUJ1ZmZlcihidWZmZXIpO1xuICAgICAgICBkZWxldGUgdGhpcy5zb3VyY2VCdWZmZXJzW09iamVjdC5rZXlzKHRoaXMuc291cmNlQnVmZmVycylbaV1dO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy5vblRpbWVVcGRhdGUpO1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2FpdGluZycsIHRoaXMub25XYWl0aW5nKTtcbiAgICAgIHRoaXMubWVkaWFTb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignc291cmNlb3BlbicsIHRoaXMub25Tb3VyY2VPcGVuKTtcblxuICAgICAgdGhpcy5lbmRPZlN0cmVhbSgpXG4gICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLnVybCk7XG5cbiAgICAgIHRoaXMudXJsID0gbnVsbFxuICAgICAgdGhpcy5jb25maWdzID0ge307XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICB0aGlzLm1lZGlhU291cmNlID0gbnVsbDtcbiAgICAgIHRoaXMuc291cmNlQnVmZmVycyA9IHt9O1xuICAgICAgdGhpcy5wcmVsb2FkVGltZSA9IDE7XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhckJ1ZmZlciAoYnVmZmVyKSB7XG4gICAgY29uc3QgYnVmZmVyZWQgPSBidWZmZXIuYnVmZmVyZWQ7XG4gICAgbGV0IGJFbmQgPSAwLjFcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYnVmZmVyZWQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGJFbmQgPSBidWZmZXJlZC5lbmQoaSlcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGJ1ZmZlci5yZW1vdmUoMCwgYkVuZClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBETyBOT1RISU5HXG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNU0U7XG4iLCJpbXBvcnQgQ29uY2F0IGZyb20gJ2NvbmNhdC10eXBlZC1hcnJheSdcblxuY2xhc3MgQnVmZmVyIHtcbiAgY29uc3RydWN0b3IgKGJ1ZmZlcikge1xuICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyIHx8IG5ldyBVaW50OEFycmF5KDApXG4gIH1cblxuICB3cml0ZSAoLi4uYnVmZmVyKSB7XG4gICAgYnVmZmVyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB0aGlzLmJ1ZmZlciA9IENvbmNhdChVaW50OEFycmF5LCB0aGlzLmJ1ZmZlciwgaXRlbSlcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHdyaXRlVWludDMyICh2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICB2YWx1ZSA+PiAyNCxcbiAgICAgICh2YWx1ZSA+PiAxNikgJiAweGZmLFxuICAgICAgKHZhbHVlID4+IDgpICYgMHhmZixcbiAgICAgIHZhbHVlICYgMHhmZlxuICAgIF0pXG4gIH1cblxuICBzdGF0aWMgcmVhZEFzSW50IChhcnIpIHtcbiAgICBsZXQgdGVtcCA9ICcnXG5cbiAgICBmdW5jdGlvbiBwYWRTdGFydDRIZXggKGhleE51bSkge1xuICAgICAgbGV0IGhleFN0ciA9IGhleE51bS50b1N0cmluZygxNilcbiAgICAgIHJldHVybiBoZXhTdHIucGFkU3RhcnQoMiwgJzAnKVxuICAgIH1cblxuICAgIGFyci5mb3JFYWNoKG51bSA9PiB7XG4gICAgICB0ZW1wICs9IHBhZFN0YXJ0NEhleChudW0pXG4gICAgfSlcbiAgICByZXR1cm4gcGFyc2VJbnQodGVtcCwgMTYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVmZmVyXG4iLCJjbGFzcyBTdHJlYW0ge1xuICBjb25zdHJ1Y3RvciAoYnVmZmVyKSB7XG4gICAgaWYgKGJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgIHRoaXMuZGF0YXZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgICAgIHRoaXMuZGF0YXZpZXcucG9zaXRpb24gPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBsZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YXZpZXcucG9zaXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwb3NpdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXZpZXcucG9zaXRpb247XG4gIH1cblxuICBiYWNrIChjb3VudCkge1xuICAgIHRoaXMucG9zaXRpb24gLT0gY291bnQ7XG4gIH1cblxuICBza2lwIChjb3VudCkge1xuICAgIGxldCBsb29wID0gTWF0aC5mbG9vcihjb3VudCAvIDQpO1xuICAgIGxldCBsYXN0ID0gY291bnQgJSA0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcDsgaSsrKSB7XG4gICAgICBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgNCk7XG4gICAgfVxuICAgIGlmIChsYXN0ID4gMCkge1xuICAgICAgU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIGxhc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBbcmVhZEJ5dGUg5LuORGF0YVZpZXfkuK3or7vlj5bmlbDmja5dXG4gICAqIEBwYXJhbSAge0RhdGFWaWV3fSBidWZmZXIgW0RhdGFWaWV35a6e5L6LXVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHNpemUgICBb6K+75Y+W5a2X6IqC5pWwXVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICBb5pW05pWwXVxuICAgKi9cbiAgc3RhdGljIHJlYWRCeXRlIChidWZmZXIsIHNpemUsIHNpZ24pIHtcbiAgICBsZXQgcmVzO1xuICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpZiAoc2lnbikge1xuICAgICAgICAgIHJlcyA9IGJ1ZmZlci5nZXRJbnQ4KGJ1ZmZlci5wb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldFVpbnQ4KGJ1ZmZlci5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlmIChzaWduKSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldEludDE2KGJ1ZmZlci5wb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldFVpbnQxNihidWZmZXIucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpZiAoc2lnbikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IHN1cHBvcnRlZCBmb3IgcmVhZEJ5dGUgMycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyA9IGJ1ZmZlci5nZXRVaW50OChidWZmZXIucG9zaXRpb24pIDw8IDE2O1xuICAgICAgICAgIHJlcyB8PSBidWZmZXIuZ2V0VWludDgoYnVmZmVyLnBvc2l0aW9uICsgMSkgPDwgODtcbiAgICAgICAgICByZXMgfD0gYnVmZmVyLmdldFVpbnQ4KGJ1ZmZlci5wb3NpdGlvbiArIDIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpZiAoc2lnbikge1xuICAgICAgICAgIHJlcyA9IGJ1ZmZlci5nZXRJbnQzMihidWZmZXIucG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyA9IGJ1ZmZlci5nZXRVaW50MzIoYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaWYgKHNpZ24pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBzdXBwb3J0ZWQgZm9yIHJlYWRCb2R5IDgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMgPSBidWZmZXIuZ2V0VWludDMyKGJ1ZmZlci5wb3NpdGlvbikgPDwgMzI7XG4gICAgICAgICAgcmVzIHw9IGJ1ZmZlci5nZXRVaW50MzIoYnVmZmVyLnBvc2l0aW9uICsgNCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXMgPSAnJztcbiAgICB9XG4gICAgYnVmZmVyLnBvc2l0aW9uICs9IHNpemU7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHJlYWRVaW50OCAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCAxKTtcbiAgfVxuXG4gIHJlYWRVaW50MTYgKCkge1xuICAgIHJldHVybiBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgMik7XG4gIH1cblxuICByZWFkVWludDI0ICgpIHtcbiAgICByZXR1cm4gU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDMpO1xuICB9XG5cbiAgcmVhZFVpbnQzMiAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCA0KTtcbiAgfVxuXG4gIHJlYWRVaW50NjQgKCkge1xuICAgIHJldHVybiBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgOCk7XG4gIH1cblxuICByZWFkSW50OCAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCAxLCB0cnVlKTtcbiAgfVxuICByZWFkSW50MTYgKCkge1xuICAgIHJldHVybiBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgMiwgdHJ1ZSk7XG4gIH1cblxuICByZWFkSW50MzIgKCkge1xuICAgIHJldHVybiBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgNCwgdHJ1ZSk7XG4gIH1cblxuICB3cml0ZVVpbnQzMiAodmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgdmFsdWUgPj4+IDI0ICYgMHhmZixcbiAgICAgIHZhbHVlID4+PiAxNiAmIDB4ZmYsXG4gICAgICB2YWx1ZSA+Pj4gOCAmIDB4ZmYsXG4gICAgICB2YWx1ZSAmIDB4ZmZcbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJlYW07XG4iLCJpbXBvcnQgeyBGZXRjaExvYWRlciB9IGZyb20gJ3hncGxheWVyLWxvYWRlcidcbmltcG9ydCB7IEZsdkRlbXV4ZXIgfSBmcm9tICd4Z3BsYXllci1kZW11eCdcbmltcG9ydCB7IE1wNFJlbXV4ZXIgfSBmcm9tICd4Z3BsYXllci1yZW11eCdcbmltcG9ydCB7IFRyYWNrcywgWGdCdWZmZXIsIFByZVNvdXJjZSB9IGZyb20gJ3hncGxheWVyLWJ1ZmZlcidcbmltcG9ydCB7IEVWRU5UUywgUGFnZVZpc2liaWxpdHkgfSBmcm9tICd4Z3BsYXllci11dGlscydcbmltcG9ydCB7IENvbXBhdGliaWxpdHkgfSBmcm9tICd4Z3BsYXllci1jb2RlYydcbmltcG9ydCBQbGF5ZXIgZnJvbSAneGdwbGF5ZXInXG5cbmNvbnN0IERFTVVYX0VWRU5UUyA9IEVWRU5UUy5ERU1VWF9FVkVOVFM7XG5jb25zdCBMT0FERVJfRVZFTlRTID0gRVZFTlRTLkxPQURFUl9FVkVOVFNcbmNvbnN0IEJST1dTRVJfRVZFTlRTID0gRVZFTlRTLkJST1dTRVJfRVZFTlRTXG5cbmNvbnN0IFRhZyA9ICdGTFZDb250cm9sbGVyJ1xuXG5jbGFzcyBMb2dnZXIge1xuICB3YXJuICgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsdkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAocGxheWVyKSB7XG4gICAgdGhpcy5UQUcgPSBUYWdcbiAgICB0aGlzLl9wbGF5ZXIgPSBwbGF5ZXJcblxuICAgIHRoaXMudmlkZW8gPSB0aGlzLl9wbGF5ZXIudmlkZW87XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluaXRTZWdtZW50QXJyaXZlZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdGRVRDSF9MT0FERVInLCBGZXRjaExvYWRlcilcbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdMT0FERVJfQlVGRkVSJywgWGdCdWZmZXIpXG4gICAgdGhpcy5fY29udGV4dC5yZWdpc3RyeSgnUFJFX1NPVVJDRV9CVUZGRVInLCBQcmVTb3VyY2UpXG5cbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdGTFZfREVNVVhFUicsIEZsdkRlbXV4ZXIpXG5cbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdNUDRfUkVNVVhFUicsIE1wNFJlbXV4ZXIpXG4gICAgdGhpcy5fY29udGV4dC5yZWdpc3RyeSgnVFJBQ0tTJywgVHJhY2tzKVxuXG4gICAgdGhpcy5fY29udGV4dC5yZWdpc3RyeSgnQ09NUEFUSUJJTElUWScsIENvbXBhdGliaWxpdHkpXG4gICAgdGhpcy5fY29udGV4dC5yZWdpc3RyeSgnUEFHRV9WSVNJQklMSVRZJywgUGFnZVZpc2liaWxpdHkpXG5cbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdMT0dHRVInLCBMb2dnZXIpXG5cbiAgICB0aGlzLmluaXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgaW5pdExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5vbihMT0FERVJfRVZFTlRTLkxPQURFUl9EQVRBTE9BREVELCB0aGlzLl9oYW5kbGVMb2FkZXJEYXRhTG9hZGVkLmJpbmQodGhpcykpXG4gICAgdGhpcy5vbihMT0FERVJfRVZFTlRTLkxPQURFUl9FUlJPUiwgdGhpcy5faGFuZGxlTmV0d29ya0Vycm9yLmJpbmQodGhpcykpXG5cbiAgICB0aGlzLm9uKERFTVVYX0VWRU5UUy5NRURJQV9JTkZPLCB0aGlzLl9oYW5kbGVNZWRpYUluZm8uYmluZCh0aGlzKSlcbiAgICB0aGlzLm9uKERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsIHRoaXMuX2hhbmRsZU1ldGFkYXRhUGFyc2VkLmJpbmQodGhpcykpXG4gICAgdGhpcy5vbihERU1VWF9FVkVOVFMuREVNVVhfQ09NUExFVEUsIHRoaXMuX2hhbmRsZURlbXV4Q29tcGxldGUuYmluZCh0aGlzKSlcbiAgICB0aGlzLm9uKERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5faGFuZGxlRGVtdXhFcnJvci5iaW5kKHRoaXMpKVxuXG4gIH1cblxuICBfaGFuZGxlTWVkaWFJbmZvICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRleHQubWVkaWFJbmZvKSB7XG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBnZXQgbWVkaWFpbmZvJykpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUxvYWRlckRhdGFMb2FkZWQgKCkge1xuICAgIHRoaXMuZW1pdFRvKCdGTFZfREVNVVhFUicsIERFTVVYX0VWRU5UUy5ERU1VWF9TVEFSVClcbiAgfVxuXG4gIF9oYW5kbGVNZXRhZGF0YVBhcnNlZCAodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAvLyDlsIbpn7PpopFtZXRh5L+h5oGv5Lqk57uZYXVkaW9Db250ZXh077yM5LiN6LWwcmVtdXjlsIHoo4VcbiAgICAgIGNvbnN0IHsgYXVkaW9UcmFjayB9ID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJylcbiAgICAgIGlmIChhdWRpb1RyYWNrICYmIGF1ZGlvVHJhY2subWV0YSkge1xuICAgICAgICB0aGlzLl9zZXRNZXRhVG9BdWRpbyhhdWRpb1RyYWNrLm1ldGEpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgdmlkZW9UcmFjayB9ID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJylcbiAgICAgIGlmICh2aWRlb1RyYWNrICYmIHZpZGVvVHJhY2subWV0YSkge1xuICAgICAgICB0aGlzLl9zZXRNZXRhVG9WaWRlbyh2aWRlb1RyYWNrLm1ldGEpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZURlbXV4Q29tcGxldGUgKCkge1xuICAgIGlmKHRoaXMuX3BsYXllci52aWRlbykge1xuICAgICAgY29uc3QgeyB2aWRlb1RyYWNrLCBhdWRpb1RyYWNrIH0gPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKTtcbiAgICAgIHRoaXMuX3BsYXllci52aWRlby5vbkRlbXV4Q29tcGxldGUodmlkZW9UcmFjaywgYXVkaW9UcmFjayk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUFwcGVuZEluaXRTZWdtZW50ICgpIHtcbiAgICB0aGlzLnN0YXRlLmluaXRTZWdtZW50QXJyaXZlZCA9IHRydWVcbiAgLy8gIHRoaXMubXNlLmFkZFNvdXJjZUJ1ZmZlcnMoKVxuICB9XG5cblxuICBfaGFuZGxlTmV0d29ya0Vycm9yICgpIHtcbiAgICB0aGlzLl9wbGF5ZXIuZW1pdCgnZXJyb3InLCBuZXcgUGxheWVyLkVycm9ycygnbmV0d29yaycsIHRoaXMuX3BsYXllci5jb25maWcudXJsKSlcbiAgfVxuXG4gIF9oYW5kbGVEZW11eEVycm9yICgpIHtcbiAgICB0aGlzLl9wbGF5ZXIuZW1pdCgnZXJyb3InLCBuZXcgUGxheWVyLkVycm9ycygncGFyc2UnLCB0aGlzLl9wbGF5ZXIuY29uZmlnLnVybCkpXG4gIH1cblxuXG4gIF9zZXRNZXRhVG9BdWRpbyAoYXVkaW9NZXRhKSB7XG4gICAgaWYgKHRoaXMuX3BsYXllci52aWRlbykge1xuICAgICAgdGhpcy5fcGxheWVyLnZpZGVvLnNldEF1ZGlvTWV0YShhdWRpb01ldGEpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRNZXRhVG9WaWRlbyAodmlkZW9NZXRhKSB7XG4gICAgaWYgKHRoaXMuX3BsYXllci52aWRlbykge1xuICAgICAgdGhpcy5fcGxheWVyLnZpZGVvLnNldFZpZGVvTWV0YSh2aWRlb01ldGEpO1xuICAgIH1cbiAgfVxuXG4gIHNlZWsgKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pbml0U2VnbWVudEFycml2ZWQpIHtcbiAgICAgIHRoaXMubG9hZERhdGEoKVxuICAgIH1cbiAgfVxuXG4gIGxvYWREYXRhICgpIHtcbiAgICB0aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MQURFUl9TVEFSVCwgdGhpcy5fcGxheWVyLmNvbmZpZy51cmwpXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnRkVUQ0hfTE9BREVSJylcblxuICAgIGlmIChsb2FkZXIpIHtcbiAgICAgIGxvYWRlci5jYW5jZWwoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDkv53or4HlvZPliY3mkq3mlL7nmoTop4bpopHku6Vnb3DkuLrljZXkvY1cbiAgICogQHBhcmFtIHZpZGVvVHJhY2tcbiAgICovXG4gIHN0YXRpYyByZXNvbHZlVmlkZW9HT1AgKHZpZGVvVHJhY2spIHtcbiAgICBjb25zdCB7IHNhbXBsZXMgfSA9IHZpZGVvVHJhY2s7XG4gICAgaWYgKCFzYW1wbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmaXJzdElmcmFtZUlkeCA9IG51bGxcbiAgICBsZXQgbGFzdElmcmFtZUlkeCA9IG51bGxcblxuICAgIGlmICh2aWRlb1RyYWNrLnRlbXBTYW1wbGVzICYmIHZpZGVvVHJhY2sudGVtcFNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICAvLyDlsIbnvJPlrZjluKfmlL7nva7liLDpmJ/liJfnmoTlpLTpg6hcbiAgICAgIHNhbXBsZXMudW5zaGlmdC5hcHBseShzYW1wbGVzLCB2aWRlb1RyYWNrLnRlbXBTYW1wbGVzKTtcbiAgICB9XG5cbiAgICAvLyDlr7vmib7nrKzkuIDkuKpJ5binXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNhbXBsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBzYW1wbGVzW2ldO1xuICAgICAgaWYgKGN1cnJlbnQuaXNLZXlmcmFtZSkge1xuICAgICAgICBmaXJzdElmcmFtZUlkeCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWvu+aJvuacgOWQjuS4gOS4qknluKdcbiAgICBmb3IgKGxldCBpID0gc2FtcGxlcy5sZW5ndGggLSAxOyBpID4gMDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gc2FtcGxlc1tpXVxuXG4gICAgICBpZiAoY3VycmVudC5pc0tleWZyYW1lKSB7XG4gICAgICAgIGxhc3RJZnJhbWVJZHggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmlyc3RJZnJhbWVJZHggIT09IDApIHtcbiAgICAgIHNhbXBsZXMuc3BsaWNlKDAsIGZpcnN0SWZyYW1lSWR4IC0gMSlcbiAgICB9XG5cbiAgICB2aWRlb1RyYWNrLnNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKDAsIGxhc3RJZnJhbWVJZHgpXG4gICAgY29uc3QgcmVzdCA9IHNhbXBsZXMuc2xpY2UobGFzdElmcmFtZUlkeClcbiAgICBpZiAodmlkZW9UcmFjay50ZW1wU2FtcGxlcykge1xuICAgICAgdmlkZW9UcmFjay50ZW1wU2FtcGxlcy5wdXNoLmFwcGx5KHZpZGVvVHJhY2sudGVtcFNhbXBsZXMsIHJlc3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWwhuWJqeS4i+eahOW4p+e8k+WtmO+8jOetieW+heS4gOS4quWujOaVtOeahGdvcFxuICAgICAgdmlkZW9UcmFjay50ZW1wU2FtcGxlcyA9IHJlc3RcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAneGdwbGF5ZXInXG5pbXBvcnQgeyBDb250ZXh0LCBFVkVOVFMgfSBmcm9tICd4Z3BsYXllci11dGlscyc7XG5pbXBvcnQgRkxWIGZyb20gJy4vZmx2LWxpdmUtbW9iaWxlJ1xuY29uc3QgZmx2QWxsb3dlZEV2ZW50cyA9IEVWRU5UUy5GbHZBbGxvd2VkRXZlbnRzO1xuXG5jbGFzcyBGbHZQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKCFjb25maWcubWVkaWFUeXBlKSB7XG4gICAgICBjb25maWcubWVkaWFUeXBlID0gJ21vYmlsZS12aWRlbydcbiAgICB9XG4gICAgc3VwZXIoY29uZmlnKVxuICAgIHRoaXMudmlkZW8ud2lkdGggPSBOdW1iZXIucGFyc2VJbnQoY29uZmlnLndpZHRoIHx8IDYwMClcbiAgICB0aGlzLnZpZGVvLmhlaWdodCA9IE51bWJlci5wYXJzZUludChjb25maWcuaGVpZ2h0IHx8IDMzNy41KVxuICAgIHRoaXMudmlkZW8uc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dChmbHZBbGxvd2VkRXZlbnRzKVxuICAgIHRoaXMuaW5pdEV2ZW50cygpXG4gIH1cblxuICBzdGFydCAoKSB7XG4gICAgdGhpcy5pbml0Rmx2KClcbiAgICB0aGlzLmNvbnRleHQuaW5pdCgpXG4gICAgdGhpcy5mbHYuc2VlaygwKTtcbiAgICBzdXBlci5zdGFydCh0aGlzLmNvbmZpZy51cmwpO1xuICAgIHRoaXMucGxheSgpO1xuICB9XG5cbiAgaW5pdEZsdkV2ZW50cyAoZmx2KSB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcztcbiAgICBmbHYub25jZShFVkVOVFMuUkVNVVhfRVZFTlRTLklOSVRfU0VHTUVOVCwgKCkgPT4ge1xuICAgICAgUGxheWVyLnV0aWwuYWRkQ2xhc3MocGxheWVyLnJvb3QsICd4Z3BsYXllci1pcy1saXZlJylcbiAgICAgIGlmICghUGxheWVyLnV0aWwuZmluZERvbSh0aGlzLnJvb3QsICd4Zy1saXZlJykpIHtcbiAgICAgICAgY29uc3QgbGl2ZSA9IFBsYXllci51dGlsLmNyZWF0ZURvbSgneGctbGl2ZScsICfmraPlnKjnm7Tmkq0nLCB7fSwgJ3hncGxheWVyLWxpdmUnKVxuICAgICAgICBwbGF5ZXIuY29udHJvbHMuYXBwZW5kQ2hpbGQobGl2ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZmx2Lm9uY2UoRVZFTlRTLkxPQURFUl9FVkVOVFMuTE9BREVSX0NPTVBMRVRFLCAoKSA9PiB7XG4gICAgICAvLyDnm7Tmkq3lrozmiJDvvIzlvoXmkq3mlL7lmajmkq3lroznvJPlrZjlkI7lj5HpgIHlhbPpl63kuovku7ZcbiAgICAgIGlmICghcGxheWVyLnBhdXNlZCkge1xuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBlbmQgPSBwbGF5ZXIuZ2V0QnVmZmVyZWRSYW5nZSgpWzFdXG4gICAgICAgICAgaWYgKE1hdGguYWJzKHBsYXllci5jdXJyZW50VGltZSAtIGVuZCkgPCAwLjUpIHtcbiAgICAgICAgICAgIHBsYXllci5lbWl0KCdlbmRlZCcpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMClcbiAgICAgIH1cbiAgICB9KVxuICAgIGZsdi5vbihFVkVOVFMuQlJPV1NFUl9FVkVOVFMuVklTSUJJTElUWV9DSEFOR0UsIChoaWRkZW4pID0+IHtcbiAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGluaXRFdmVudHMgKCkge1xuICAgIHRoaXMub24oJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmxvYWREYXRhKClcbiAgICB9KVxuXG4gICAgdGhpcy5vbignc2Vla2luZycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lXG4gICAgICBjb25zdCByYW5nZSA9IHRoaXMuZ2V0QnVmZmVyZWRSYW5nZSgpXG4gICAgICBpZiAodGltZSA+IHJhbmdlWzFdIHx8IHRpbWUgPCByYW5nZVswXSkge1xuICAgICAgICB0aGlzLmZsdi5zZWVrKHRoaXMuY3VycmVudFRpbWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGluaXRGbHYgKCkge1xuICAgIGNvbnN0IGZsdiA9IHRoaXMuY29udGV4dC5yZWdpc3RyeSgnRkxWX0NPTlRST0xMRVInLCBGTFYpKHRoaXMpXG4gICAgdGhpcy5pbml0Rmx2RXZlbnRzKGZsdilcbiAgICB0aGlzLmZsdiA9IGZsdlxuICB9XG5cbiAgcGxheSAoKSB7XG4gICAgaWYgKHRoaXMuX2hhc1N0YXJ0ICYmIHRoaXMucGF1c2VkKSB7XG4gICAgICB0aGlzLl9kZXN0cm95KClcbiAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBDb250ZXh0KGZsdkFsbG93ZWRFdmVudHMpXG4gICAgICBjb25zdCBmbHYgPSB0aGlzLmNvbnRleHQucmVnaXN0cnkoJ0ZMVl9DT05UUk9MTEVSJywgRkxWKSh0aGlzKVxuICAgICAgdGhpcy5pbml0Rmx2RXZlbnRzKGZsdilcbiAgICAgIHRoaXMuZmx2ID0gZmx2XG4gICAgICB0aGlzLmNvbnRleHQuaW5pdCgpXG4gICAgICB0aGlzLmxvYWREYXRhKClcbiAgICAgIHN1cGVyLnN0YXJ0KClcbiAgICAgIHN1cGVyLnBsYXkoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdXBlci5wbGF5KClcbiAgICAgIHRoaXMuYWRkTGl2ZUZsYWcoKTtcbiAgICB9XG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgc3VwZXIucGF1c2UoKVxuICAgIGlmICh0aGlzLmZsdikge1xuICAgICAgdGhpcy5mbHYucGF1c2UoKVxuICAgIH1cbiAgfVxuXG4gIGxvYWREYXRhICh0aW1lID0gdGhpcy5jdXJyZW50VGltZSkge1xuICAgIGlmICh0aGlzLmZsdikge1xuICAgICAgdGhpcy5mbHYuc2Vlayh0aW1lKVxuICAgIH1cbiAgfVxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9kZXN0cm95KClcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuICBhZGRMaXZlRmxhZyAoKSB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcztcbiAgICBQbGF5ZXIudXRpbC5hZGRDbGFzcyhwbGF5ZXIucm9vdCwgJ3hncGxheWVyLWlzLWxpdmUnKVxuICAgIGlmICghUGxheWVyLnV0aWwuZmluZERvbSh0aGlzLnJvb3QsICd4Zy1saXZlJykpIHtcbiAgICAgIGNvbnN0IGxpdmUgPSBQbGF5ZXIudXRpbC5jcmVhdGVEb20oJ3hnLWxpdmUnLCAn5q2j5Zyo55u05pKtJywge30sICd4Z3BsYXllci1saXZlJylcbiAgICAgIHBsYXllci5jb250cm9scy5hcHBlbmRDaGlsZChsaXZlKVxuICAgIH1cbiAgfVxuXG4gIF9kZXN0cm95ICgpIHtcbiAgICB0aGlzLmNvbnRleHQuZGVzdHJveSgpXG4gICAgdGhpcy5mbHYgPSBudWxsXG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbFxuICB9XG5cbiAgZ2V0IHNyYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFNyY1xuICB9XG5cbiAgc2V0IHNyYyAodXJsKSB7XG4gICAgdGhpcy5wbGF5ZXIuY29uZmlnLnVybCA9IHVybFxuICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgdGhpcy5vbmNlKCdwYXVzZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5zdGFydCh1cmwpXG4gICAgICB9KVxuICAgICAgdGhpcy5vbmNlKCdjYW5wbGF5JywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBsYXkoKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGFydCh1cmwpXG4gICAgfVxuICAgIHRoaXMub25jZSgnY2FucGxheScsICgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwXG4gICAgfSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsdlBsYXllclxuIiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlBsYXllclwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9