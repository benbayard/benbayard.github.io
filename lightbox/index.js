var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
"use strict";
var Mount;
(function (Mount) {
    /**
     * Wrapper function for standard error production if element is not found
     * @param id
     * @param type
     * @returns {()=>Element}
     */
    Mount.findByID = (id, type) => {
        return () => {
            const el = document.querySelector(`#${id}`);
            /**
             * If the element is not found querySelector will return a null value
             */
            if (el === null) {
                throw new Error(`${type} element not found`);
            }
            return el;
        };
    };
    Mount.getRoot = Mount.findByID("root", "Mounting");
    Mount.getServiceSelector = Mount.findByID("service", "Service Selector");
    Mount.getModalContainer = Mount.findByID("modal", "Modal");
})(Mount || (Mount = {}));
"use strict";
var API;
(function (API) {
    /**
     * Fetch data and ensure it is parsed to the universal format
     * @param uri
     * @param cookDataFormat
     * @returns {Promise<Image[]>}
     */
    function fetchAndParse(uri, cookDataFormat) {
        return fetch(uri)
            .then(data => data.json())
            .then(cookDataFormat);
    }
    API.fetchAndParse = fetchAndParse;
})(API || (API = {}));
"use strict";
/// <reference path="./api_image.ts" />
var Giphy;
(function (Giphy) {
    Giphy.URI = (key = "dc6zaTOxFJmzC") => `http://api.giphy.com/v1/gifs/trending?api_key=${key}`;
    Giphy.cookDataFormat = ({ data: images }) => (images.map(({ slug, images: { fixed_height: { url } } }) => ({
        title: slug,
        url,
    })));
    Giphy.fetchImages = () => {
        return fetch(Giphy.URI())
            .then(body => body.json())
            .then(Giphy.cookDataFormat);
    };
})(Giphy || (Giphy = {}));
"use strict";
/// <reference path="./api_image.ts" />
var Google;
(function (Google) {
    Google.URI = (query = "Puppies", key = "AIzaSyBQk73LkIJBLB_O25Ro6q795ks8DWYQAOw", context = "001532126640155556502:f9o-ifgnlek") => `https://www.googleapis.com/customsearch/v1?q=${query}&key=${key}&cx=${context}&searchType=image&imgSize=xxlarge`;
    ;
    Google.cookDataFormat = ({ items }) => (items.map(({ title, link }) => ({
        title, url: link,
    })));
    Google.fetchImages = () => {
        return fetch(Google.URI())
            .then(body => body.json())
            .then(Google.cookDataFormat);
    };
})(Google || (Google = {}));
"use strict";
/// <reference path="./api_image.ts" />
var Flickr;
(function (Flickr) {
    Flickr.URI = (key = "f698ceba2e65f3374501d890a8fb6354", setID = "72157626579923453") => `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${key}&photoset_id=${setID}&format=json&nojsoncallback=1`;
    Flickr.toImageSrc = ({ farm, server, id, secret }) => (`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`);
    ;
    Flickr.cookDataFormat = ({ photoset: { photo } }) => (photo.map((image) => ({
        title: image.title,
        url: Flickr.toImageSrc(image),
    })));
})(Flickr || (Flickr = {}));
"use strict";
/// <reference path="./config/giphy.ts" />
/// <reference path="./config/google.ts" />
/// <reference path="./config/flickr.ts" />
/// <reference path="./config/api_image.ts" />
var API;
(function (API) {
    /**
     * List of supported services
     */
    var Service;
    (function (Service) {
        Service[Service["Flickr"] = 0] = "Flickr";
        Service[Service["Giphy"] = 1] = "Giphy";
        Service[Service["Google"] = 2] = "Google";
    })(Service = API.Service || (API.Service = {}));
    /**
     * Get the data from the service and parse
     * it to a unified format
     * @param service
     * @returns {Promise<Image[]>}
     */
    function get(service) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (service) {
                case Service.Giphy:
                    API.images = yield API.fetchAndParse(Giphy.URI(), Giphy.cookDataFormat);
                    break;
                case Service.Google:
                    API.images = yield API.fetchAndParse(Google.URI(), Google.cookDataFormat);
                    break;
                case Service.Flickr:
                    API.images = yield API.fetchAndParse(Flickr.URI(), Flickr.cookDataFormat);
                    break;
                default: throw new Error("This service is not supported");
            }
            return API.images;
        });
    }
    API.get = get;
})(API || (API = {}));
"use strict";
/// <reference path="./mount.ts" />
/// <reference path="./api.ts" />
/// <reference path="./image_factory.ts" />
var Modal;
(function (Modal) {
    const modalContentClassName = "modal-content";
    const modalImageContainerClassName = "modal-image-container";
    let activeImage;
    const width = (clientWidth, numImages) => clientWidth * numImages;
    const leftTransform = (numImages) => {
        return `transform: translate3d(${activeImage / numImages * -100}%, 0, 0);`;
    };
    Modal.setImageContainerStyle = (imageContainer, innerContent) => {
        const activeImageNode = document.querySelectorAll(".modal-image")[activeImage];
        innerContent.setAttribute("style", `height: ${activeImageNode.clientHeight}px;`);
        imageContainer.setAttribute("style", `
      width: ${width(innerContent.clientWidth, API.images.length)}px;
      ${leftTransform(API.images.length)}
    `);
    };
    Modal.isLast = () => activeImage === API.images.length - 1;
    Modal.isFirst = () => activeImage === 0;
    Modal.open = (id) => {
        activeImage = id;
        const modal = Mount.getModalContainer();
        modal.innerHTML = "";
        modal.classList.add("active");
        const innerContent = document.createElement("section");
        innerContent.classList.add(modalContentClassName);
        modal.appendChild(innerContent);
        const imageContainer = document.createElement("section");
        const imageNodes = API.images.map((img, index) => ImageFactory.create(img, index, false));
        imageContainer.classList.add(modalImageContainerClassName);
        imageNodes.forEach((imgNode) => {
            imgNode.setAttribute("style", `width: ${innerContent.clientWidth}px;`);
            imgNode.classList.add("modal-image");
            imageContainer.appendChild(imgNode);
        });
        innerContent.appendChild(imageContainer);
        innerContent.setAttribute("style", `height: ${imageNodes[activeImage].clientHeight}px;`);
        Modal.setImageContainerStyle(imageContainer, innerContent);
        const closeButton = document.createElement("button");
        closeButton.textContent = "CLOSE";
        closeButton.classList.add("close");
        closeButton.onclick = Modal.close;
        modal.appendChild(closeButton);
        const nextButton = document.createElement("button");
        const previousButton = document.createElement("button");
        nextButton.onclick = next;
        previousButton.onclick = previous;
        nextButton.classList.add("next");
        if (Modal.isLast()) {
            nextButton.classList.add("hide");
        }
        previousButton.classList.add("previous");
        if (Modal.isFirst()) {
            previousButton.classList.add("hide");
        }
        innerContent.appendChild(nextButton);
        innerContent.appendChild(previousButton);
    };
    const next = () => {
        const previousButton = document.querySelector(".previous");
        previousButton.classList.remove("hide");
        if (Modal.isLast()) {
            return;
        }
        activeImage += 1;
        if (Modal.isLast()) {
            const nextButton = document.querySelector(".next");
            nextButton.classList.add("hide");
        }
        const innerContent = document.querySelector(`.${modalContentClassName}`);
        const imageContainer = document.querySelector(`.${modalImageContainerClassName}`);
        Modal.setImageContainerStyle(imageContainer, innerContent);
    };
    const previous = () => {
        const nextButton = document.querySelector(".next");
        nextButton.classList.remove("hide");
        if (Modal.isFirst()) {
            return;
        }
        activeImage -= 1;
        if (Modal.isFirst()) {
            const previousButton = document.querySelector(".previous");
            previousButton.classList.add("hide");
        }
        const innerContent = document.querySelectorAll(`.${modalContentClassName}`)[0];
        const imageContainer = document.querySelectorAll(`.${modalImageContainerClassName}`)[0];
        Modal.setImageContainerStyle(imageContainer, innerContent);
    };
    Modal.close = () => {
        const modal = Mount.getModalContainer();
        modal.classList.remove("active");
    };
})(Modal || (Modal = {}));
"use strict";
/// <reference path="./config/api_image.ts" />
/// <reference path="./modal.ts" />
var ImageFactory;
(function (ImageFactory) {
    ImageFactory.didClick = (index) => {
        return () => {
            Modal.open(index);
        };
    };
    ImageFactory.create = ({ url }, index, openModal = true) => {
        const image = document.createElement("img");
        image.setAttribute("src", url);
        if (openModal) {
            image.onclick = ImageFactory.didClick(index);
        }
        return image;
    };
})(ImageFactory || (ImageFactory = {}));
/// <reference path="./mount.ts" />
/// <reference path="./service_selector.ts" />
/// <reference path="./image_factory.ts" />
"use strict";
var Render;
(function (Render) {
    /**
     * Based on the selected service update the view
     * with the correct API.
     * @returns {Promise<void>}
     */
    function fromServiceSelector() {
        return __awaiter(this, void 0, void 0, function* () {
            const root = Mount.getRoot();
            const images = yield API.get(ServiceSelector.currentService);
            /*
             * Empty the container
             */
            root.innerHTML = "";
            images.forEach((imageData, index) => {
                const wrapper = document.createElement("div");
                wrapper.classList.add("image");
                const image = ImageFactory.create(imageData, index);
                wrapper.appendChild(image);
                root.appendChild(wrapper);
            });
        });
    }
    Render.fromServiceSelector = fromServiceSelector;
})(Render || (Render = {}));
/// <reference path="./mount.ts" />
/// <reference path="./api.ts" />
/// <reference path="./render.ts" />
"use strict";
var ServiceSelector;
(function (ServiceSelector) {
    ServiceSelector.currentService = API.Service.Flickr;
    ServiceSelector.init = () => {
        const selector = Mount.getServiceSelector();
        [
            API.Service.Giphy,
            API.Service.Google,
            API.Service.Flickr,
        ].forEach((v) => {
            const el = document.createElement("option");
            el.setAttribute("value", `${v}`);
            if (v === ServiceSelector.currentService) {
                el.setAttribute("selected", "selected");
            }
            const name = v === API.Service.Giphy
                ? "Giphy"
                : v === API.Service.Google
                    ? "Google"
                    : "Flickr";
            el.textContent = name;
            selector.appendChild(el);
        });
        selector.onchange = (event) => {
            ServiceSelector.currentService = parseInt(event.target.value, 10);
            Render.fromServiceSelector();
        };
    };
})(ServiceSelector || (ServiceSelector = {}));
/// <reference path="./src/mount.ts" />
/// <reference path="./src/api.ts" />
/// <reference path="./src/service_selector.ts" />
/// <reference path="./src/render.ts" />
"use strict";
/**
 * First we will start by locating our mounting node
 * and adding some content to it.
 */
const root = Mount.getRoot();
ServiceSelector.init();
Render.fromServiceSelector();
