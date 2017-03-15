/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Wrapper function for standard error production if element is not found
 * @param id
 * @param type
 * @returns {()=>Element}
 */
const findByID = (id, type) => () => {

    const el = document.querySelector(`#${id}`);

    /**
     * If the element is not found querySelector will return a null value
     */

    if (el === null) {

        throw new Error(`${type} element not found`);

    }

    return el;

};
/* unused harmony export findByID */


const getRoot = findByID("root-lightbox", "Mounting");
/* harmony export (immutable) */ __webpack_exports__["a"] = getRoot;


const getServiceSelector = findByID("service", "Service Selector");
/* harmony export (immutable) */ __webpack_exports__["c"] = getServiceSelector;


const getModalContainer = findByID("modal", "ModalFactory");
/* harmony export (immutable) */ __webpack_exports__["b"] = getModalContainer;




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_giphy__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_google__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_flickr__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_api_image__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return images; });
/* harmony export (immutable) */ __webpack_exports__["a"] = get;




let images;
/**
 * List of supported services
 */
const Service = {
  Flickr: 0,
  Giphy: 1,
  Google: 2,
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Service;


/**
 * Get the data from the service and parse
 * it to a unified format
 * @param service
 * @returns {Promise<Image[]>}
 */
function get(service) {
  let uri;
  let cookDataFormat;
  switch (service) {
    case Service.Giphy:
      uri = __WEBPACK_IMPORTED_MODULE_0__config_giphy__["a" /* URI */]();
      cookDataFormat = __WEBPACK_IMPORTED_MODULE_0__config_giphy__["b" /* cookDataFormat */];
      break;
    case Service.Google:
      uri = __WEBPACK_IMPORTED_MODULE_1__config_google__["a" /* URI */]();
      cookDataFormat = __WEBPACK_IMPORTED_MODULE_1__config_google__["b" /* cookDataFormat */];
      break;
    case Service.Flickr:
      uri = __WEBPACK_IMPORTED_MODULE_2__config_flickr__["a" /* URI */]();
      cookDataFormat = __WEBPACK_IMPORTED_MODULE_2__config_flickr__["b" /* cookDataFormat */];
      break;
    default: throw new Error("This service is not supported");
  }

  return __WEBPACK_IMPORTED_MODULE_3__config_api_image__["a" /* fetchAndParse */](uri, cookDataFormat).then((imgs) => {
    images = imgs;
    return images;
  });
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return activeImage; });


const modalContentClassName = "modal-content";
/* harmony export (immutable) */ __webpack_exports__["c"] = modalContentClassName;

const modalImageContainerClassName = "modal-image-container";
/* harmony export (immutable) */ __webpack_exports__["d"] = modalImageContainerClassName;

const modalImageClassName = "modal-image";
/* harmony export (immutable) */ __webpack_exports__["a"] = modalImageClassName;

let activeImage;

const setActiveImage = (num) => activeImage = num;
/* harmony export (immutable) */ __webpack_exports__["b"] = setActiveImage;


/**
 * Calculate the width of all the images for the
 * imageContainer
 * @param clientWidth
 * @param numImages
 */
const width = (clientWidth, numImages) => clientWidth * numImages;

/**
 * Calculate the left transform
 * for the carousel position.
 * @param numImages
 * @returns {string}
 */
const leftTransform = (numImages) => `transform: translate3d(${activeImage / numImages * -100}%, 0, 0);`;

/**
 * Update the innerContent
 * with the calculated values
 * @param imageContainer
 * @param innerContent
 */
const setImageContainerStyle = (imageContainer, innerContent) => {
  const activeImageNode = document.querySelectorAll(`.${modalImageClassName}`)[activeImage];

  innerContent.setAttribute("style", `height: ${activeImageNode.clientHeight}px;`);

  imageContainer.setAttribute("style", `
    width: ${width(innerContent.clientWidth, __WEBPACK_IMPORTED_MODULE_0__api__["b" /* images */].length)}px;
    ${leftTransform(__WEBPACK_IMPORTED_MODULE_0__api__["b" /* images */].length)}
  `);
};
/* harmony export (immutable) */ __webpack_exports__["g"] = setImageContainerStyle;


/**
 * Update the height of the inner content
 * for the new images.
 * @param innerContent
 * @param size
 */
const updateInnerContainerSize = (innerContent, size) => {
  innerContent.setAttribute("style", `height: ${size}px;`);
};
/* harmony export (immutable) */ __webpack_exports__["e"] = updateInnerContainerSize;


const isLast = () => activeImage === __WEBPACK_IMPORTED_MODULE_0__api__["b" /* images */].length - 1;
/* harmony export (immutable) */ __webpack_exports__["h"] = isLast;


const isFirst = () => activeImage === 0;
/* harmony export (immutable) */ __webpack_exports__["i"] = isFirst;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mount__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_selector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_factory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = fromServiceSelector;





/**
 * Based on the selected service update the view
 * with the correct API.
 * @returns {Promise<void>}
 */
function fromServiceSelector() {
  const root = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mount__["a" /* getRoot */])();
  /*
   * Show Loading message
   */
  root.innerHTML = "<h1 class=\"loading\">Loading...</h1>";
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api__["a" /* get */])(__WEBPACK_IMPORTED_MODULE_1__service_selector__["b" /* currentService */]).then(images => {
    root.innerHTML = "";
    images.forEach((imageData, index) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("image");
      const image = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__image_factory__["a" /* create */])(imageData, index);
      wrapper.appendChild(image);
      root.appendChild(wrapper);
    });
  });
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mount__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__factories_grid_factory__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return currentService; });




let currentService = __WEBPACK_IMPORTED_MODULE_1__api__["c" /* Service */].Flickr;

const init = () => {

  const selector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mount__["c" /* getServiceSelector */])();
  [
    __WEBPACK_IMPORTED_MODULE_1__api__["c" /* Service */].Giphy,
    __WEBPACK_IMPORTED_MODULE_1__api__["c" /* Service */].Google,
    __WEBPACK_IMPORTED_MODULE_1__api__["c" /* Service */].Flickr
  ].forEach((v) => {
    const el = document.createElement("option");

    el.setAttribute("value", `${v}`);
    if (v === currentService) {

      el.setAttribute("selected", "selected");

    }
    const name = v === __WEBPACK_IMPORTED_MODULE_1__api__["c" /* Service */].Giphy
      ? "Giphy"
      : v === __WEBPACK_IMPORTED_MODULE_1__api__["c" /* Service */].Google
        ? "Google"
        : "Flickr";

    el.textContent = name;
    selector.appendChild(el);
  });

  selector.onchange = (event) => {
    currentService = parseInt(event.target.value, 10);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__factories_grid_factory__["a" /* fromServiceSelector */])();
  };

};
/* harmony export (immutable) */ __webpack_exports__["a"] = init;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_factory__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_modal_utils__ = __webpack_require__(2);



const imageClassName = "scalable-image";
/* harmony export (immutable) */ __webpack_exports__["c"] = imageClassName;


const didClick = (index) => () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modal_factory__["a" /* open */])(index);
/* unused harmony export didClick */


const create = ({url}, index, openModal = true) => {
  const image = document.createElement("img");
  image.setAttribute("src", url);
  if (openModal) {
    image.onclick = didClick(index);
  }

  return image;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = create;


const updateSize = (innerContent, imgNode) => {
  imgNode.setAttribute("style", `width: ${innerContent.clientWidth}px;`);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = updateSize;


const createAndAppendImages = (innerContent, imageContainer, images) => {
  return images.map((img, index) => {
    const directImg = create(img, index, false);
    const imgNode = document.createElement("div");
    const title = document.createElement("h3");
    title.classList.add("img-title");
    title.textContent = img.title;
    imgNode.appendChild(directImg);
    imgNode.appendChild(title);
    imgNode.classList.add(imageClassName);
    updateSize(innerContent, imgNode);
    imgNode.classList.add(__WEBPACK_IMPORTED_MODULE_1__utils_modal_utils__["a" /* modalImageClassName */]);
    imageContainer.appendChild(imgNode);
    return imgNode;
  });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = createAndAppendImages;



/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(6)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(7);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Fetch data and ensure it is parsed to the universal format
 * @param uri
 * @param cookDataFormat
 * @returns {Promise<Image[]>}
 */
const fetchAndParse = (uri, cookDataFormat) => fetch(uri)
  .then((data) => data.json())
  .then(cookDataFormat);
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchAndParse;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const URI = (
  key = "f698ceba2e65f3374501d890a8fb6354",
  setID = "72157626579923453"
) => `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${key}&photoset_id=${setID}&format=json&nojsoncallback=1`;
/* harmony export (immutable) */ __webpack_exports__["a"] = URI;


const toImageSrc = ({farm, server, id, secret}) =>
  `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
/* unused harmony export toImageSrc */


const cookDataFormat = ({"photoset": {photo}}) => (
  photo.map((image) => ({
    "title": image.title,
    "url": toImageSrc(image)
  }))
);
/* harmony export (immutable) */ __webpack_exports__["b"] = cookDataFormat;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const URI = (key = "dc6zaTOxFJmzC") => `http://api.giphy.com/v1/gifs/trending?api_key=${key}`;
/* harmony export (immutable) */ __webpack_exports__["a"] = URI;


const cookDataFormat = ({"data": images}) =>
  images.map(({slug, "images": {"fixed_height": {url}}}) => ({
    "title": slug,
    url
  }))
;
/* harmony export (immutable) */ __webpack_exports__["b"] = cookDataFormat;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const URI = (
  query = "1920x1080 dog",
  key = "AIzaSyBQk73LkIJBLB_O25Ro6q795ks8DWYQAOw",
  context = "001532126640155556502:f9o-ifgnlek"
) => `https://www.googleapis.com/customsearch/v1?q=${query}&key=${key}&cx=${context}&searchType=image`;
/* harmony export (immutable) */ __webpack_exports__["a"] = URI;


const cookDataFormat = ({items}) =>
  items.map(({title, link}) => ({
    title,
    "url": link
  })
);
/* harmony export (immutable) */ __webpack_exports__["b"] = cookDataFormat;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__ = __webpack_require__(2);


const create = () => {
  const nextButton = document.createElement("button");
  const previousButton = document.createElement("button");

  nextButton.onclick = next;
  previousButton.onclick = previous;
  /**
   * This button advances the carousel
   */
  nextButton.classList.add("next");
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["h" /* isLast */])()) {
    /**
     * Hide the next button if it is it
     *
     */
    nextButton.classList.add("hide");
  }
  /**
   * This button advances the carousel to the
   * previous image
   */
  previousButton.classList.add("previous");
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["i" /* isFirst */])()) {
    /**
     * Hide the previous button if we are already
     * on the first image.
     */
    previousButton.classList.add("hide");
  }

  return {
    nextButton,
    previousButton
  };
};
/* harmony export (immutable) */ __webpack_exports__["a"] = create;


/**
 * Advance the carousel to the next image.
 */
const next = () => {
  const previousButton = document.querySelector(".previous");

  previousButton.classList.remove("hide");
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["h" /* isLast */])()) {
    return;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["b" /* setActiveImage */])(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["f" /* activeImage */] + 1);

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["h" /* isLast */])()) {
    const nextButton = document.querySelector(".next");

    nextButton.classList.add("hide");
  }
  const innerContent = document.querySelector(`.${__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["c" /* modalContentClassName */]}`);
  const imageContainer = document.querySelector(`.${__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["d" /* modalImageContainerClassName */]}`);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["g" /* setImageContainerStyle */])(imageContainer, innerContent);
};
/* unused harmony export next */


/**
 * Advance the carousel to the previous image.
 */
const previous = () => {
  const nextButton = document.querySelector(".next");

  nextButton.classList.remove("hide");
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["i" /* isFirst */])()) {
    return;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["b" /* setActiveImage */])(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["f" /* activeImage */] - 1);
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["i" /* isFirst */])()) {
    const previousButton = document.querySelector(".previous");

    previousButton.classList.add("hide");
  }
  const innerContent = document.querySelectorAll(`.${__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["c" /* modalContentClassName */]}`)[0];
  const imageContainer = document.querySelectorAll(`.${__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["d" /* modalImageContainerClassName */]}`)[0];

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["g" /* setImageContainerStyle */])(imageContainer, innerContent);
};
/* unused harmony export previous */



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mount__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_factory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_factory__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__ = __webpack_require__(2);






/**
 * Activate the mobile
 * and initializes the images.
 * @param id
 */
const open = (id) => {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["b" /* setActiveImage */])(id);
  const modal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mount__["b" /* getModalContainer */])();

  modal.innerHTML = "";
  modal.classList.add("active");

  const innerContent = document.createElement("section");

  innerContent.classList.add(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["c" /* modalContentClassName */]);

  modal.appendChild(innerContent);

  const imageContainer = document.createElement("section");
  imageContainer.classList.add(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["d" /* modalImageContainerClassName */]);
  innerContent.appendChild(imageContainer);
  const imageNodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__image_factory__["b" /* createAndAppendImages */])(innerContent, imageContainer, __WEBPACK_IMPORTED_MODULE_1__api__["b" /* images */]);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["e" /* updateInnerContainerSize */])(innerContent, imageNodes[__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["f" /* activeImage */]].clientHeight);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["g" /* setImageContainerStyle */])(imageContainer, innerContent);

  const {nextButton, previousButton} = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__button_factory__["a" /* create */])();

  innerContent.appendChild(nextButton);
  innerContent.appendChild(previousButton);

  const modalBackground = document.createElement("section");

  modalBackground.classList.add("modal-background");
  modalBackground.onclick = close;
  modal.appendChild(modalBackground);
  /**
   * We have to wait here, otherwise
   * the animation will happen which causes
   * a jarring user experience.
   * */
  setImmediate(() => imageContainer.classList.add('animate'));

  /**
   * In reality this should be probably be debounced.
   * */
  window.onresize = resize;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = open;


/**
 * Resize the modal container and images based on the new screen size
 */
const resize = () => {
  /**
   * If the animation exists on the container there will
   * be a terrifying experience. Here we must remove the class
   * but wait for that to be rendered out before we continue.
   * */
  const innerContent = document.querySelector(`.${__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["c" /* modalContentClassName */]}`);
  const imageContainer = document.querySelector(`.${__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["d" /* modalImageContainerClassName */]}`);
  const imageNodes = document.querySelectorAll(`.${__WEBPACK_IMPORTED_MODULE_2__image_factory__["c" /* imageClassName */]}`);
  imageContainer.classList.remove('animate');
  setImmediate(() => {
    imageNodes.forEach(imgNode => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__image_factory__["d" /* updateSize */])(innerContent, imgNode));
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["e" /* updateInnerContainerSize */])(innerContent, imageNodes[__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["f" /* activeImage */]].clientHeight);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["g" /* setImageContainerStyle */])(imageContainer, innerContent);
    /**
     * If we don't wait here, it will animate regardless
     */
    setImmediate(() => imageContainer.classList.add('animate'));
  });
};
/* unused harmony export resize */

/**
 * Deactivate the modal.
 */
const close = () => {
  const modal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mount__["b" /* getModalContainer */])();
  modal.classList.remove("active");
  modal.innerHTML = "";
  /**
   * Allow the modal memory to be garbage collected
   * */
  window.onresize = null;
};
/* unused harmony export close */


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8).setImmediate))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_js_mount__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_js_service_selector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_js_factories_grid_factory__ = __webpack_require__(3);




/**
 * First we will start by locating our mounting node
 * and adding some content to it.
 */

const root = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_js_mount__["a" /* getRoot */])();

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_js_service_selector__["a" /* init */])();

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_js_factories_grid_factory__["a" /* fromServiceSelector */])();


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map