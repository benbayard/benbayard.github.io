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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_giphy__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_google__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_flickr__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_api_image__ = __webpack_require__(6);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mount__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_selector__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_factory__ = __webpack_require__(4);
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mount__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__factories_grid_factory__ = __webpack_require__(2);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_factory__ = __webpack_require__(11);


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



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return activeImage; });


const modalContentClassName = "modal-content";
/* harmony export (immutable) */ __webpack_exports__["b"] = modalContentClassName;

const modalImageContainerClassName = "modal-image-container";
/* harmony export (immutable) */ __webpack_exports__["c"] = modalImageContainerClassName;

const modalImageClassName = "modal-image";
/* harmony export (immutable) */ __webpack_exports__["d"] = modalImageClassName;

let activeImage;

const setActiveImage = (num) => activeImage = num;
/* harmony export (immutable) */ __webpack_exports__["a"] = setActiveImage;


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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const URI = (
  query = "Puppies",
  key = "AIzaSyBQk73LkIJBLB_O25Ro6q795ks8DWYQAOw",
  context = "001532126640155556502:f9o-ifgnlek"
) => `https://www.googleapis.com/customsearch/v1?q=${query}&key=${key}&cx=${context}&searchType=image&imgSize=xxlarge`;
/* harmony export (immutable) */ __webpack_exports__["a"] = URI;


const cookDataFormat = ({items}) =>
  items.map(({title, link}) => ({
    title,
    "url": link
  })
);
/* harmony export (immutable) */ __webpack_exports__["b"] = cookDataFormat;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__ = __webpack_require__(5);


const create = () => {
  const nextButton = document.createElement("button");
  const previousButton = document.createElement("button");

  nextButton.onclick = next;
  previousButton.onclick = previous;
  nextButton.classList.add("next");
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["h" /* isLast */])()) {
    nextButton.classList.add("hide");
  }
  previousButton.classList.add("previous");
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["i" /* isFirst */])()) {
    previousButton.classList.add("hide");
  }

  return {
    nextButton,
    previousButton
  };
};
/* harmony export (immutable) */ __webpack_exports__["a"] = create;

const next = () => {
  const previousButton = document.querySelector(".previous");

  previousButton.classList.remove("hide");
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["h" /* isLast */])()) {
    return;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["a" /* setActiveImage */])(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["f" /* activeImage */] + 1);

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["h" /* isLast */])()) {
    const nextButton = document.querySelector(".next");

    nextButton.classList.add("hide");
  }
  const innerContent = document.querySelector(`.${__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["b" /* modalContentClassName */]}`);
  const imageContainer = document.querySelector(`.${__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["c" /* modalImageContainerClassName */]}`);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["g" /* setImageContainerStyle */])(imageContainer, innerContent);
};
/* unused harmony export next */


const previous = () => {
  const nextButton = document.querySelector(".next");

  nextButton.classList.remove("hide");
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["i" /* isFirst */])()) {
    return;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["a" /* setActiveImage */])(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["f" /* activeImage */] - 1);
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["i" /* isFirst */])()) {
    const previousButton = document.querySelector(".previous");

    previousButton.classList.add("hide");
  }
  const innerContent = document.querySelectorAll(`.${__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["b" /* modalContentClassName */]}`)[0];
  const imageContainer = document.querySelectorAll(`.${__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["c" /* modalImageContainerClassName */]}`)[0];

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_modal_utils__["g" /* setImageContainerStyle */])(imageContainer, innerContent);
};
/* unused harmony export previous */



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mount__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_factory__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_factory__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__ = __webpack_require__(5);






/**
 * Activate the mobile
 * and initializes the images.
 * @param id
 */
const open = (id) => {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["a" /* setActiveImage */])(id);
    const modal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mount__["b" /* getModalContainer */])();

    modal.innerHTML = "";
    modal.classList.add("active");

    const innerContent = document.createElement("section");

    innerContent.classList.add(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["b" /* modalContentClassName */]);

    modal.appendChild(innerContent);

    const imageContainer = document.createElement("section");
    const imageNodes = __WEBPACK_IMPORTED_MODULE_1__api__["b" /* images */].map((img, index) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__image_factory__["a" /* create */])(img, index, false));

    imageContainer.classList.add(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["c" /* modalImageContainerClassName */]);
    imageNodes.forEach((imgNode) => {
      imgNode.setAttribute("style", `width: ${innerContent.clientWidth}px;`);
      imgNode.classList.add(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["d" /* modalImageClassName */]);
      imageContainer.appendChild(imgNode);
    });
    innerContent.appendChild(imageContainer);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["e" /* updateInnerContainerSize */])(innerContent, imageNodes[__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["f" /* activeImage */]].clientHeight);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_modal_utils__["g" /* setImageContainerStyle */])(imageContainer, innerContent);

    const {nextButton, previousButton} = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__button_factory__["a" /* create */])();

    innerContent.appendChild(nextButton);
    innerContent.appendChild(previousButton);

    const modalBackground = document.createElement("section");

    modalBackground.innerHTML = "hi";
    modalBackground.classList.add("modal-background");
    modalBackground.onclick = close;
    modal.appendChild(modalBackground);

};
/* harmony export (immutable) */ __webpack_exports__["a"] = open;


/**
 * Deactivate the modal.
 */
const close = () => {
    const modal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mount__["b" /* getModalContainer */])();
    modal.classList.remove("active");
};
/* unused harmony export close */



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_js_mount__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_js_service_selector__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_js_factories_grid_factory__ = __webpack_require__(2);




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