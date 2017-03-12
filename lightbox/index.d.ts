declare namespace Mount {
    /**
     * Wrapper function for standard error production if element is not found
     * @param id
     * @param type
     * @returns {()=>Element}
     */
    const findByID: (id: string, type: string) => () => Element;
    const getRoot: () => Element;
    const getServiceSelector: () => Element;
    const getModalContainer: () => Element;
}
declare namespace API {
    /**
     * The universal image format to coerce every
     * thing in to.
     */
    interface Image {
        url: string;
        title: string;
    }
    /**
     * Fetch data and ensure it is parsed to the universal format
     * @param uri
     * @param cookDataFormat
     * @returns {Promise<Image[]>}
     */
    function fetchAndParse<T>(uri: string, cookDataFormat: (data: T) => Image[]): Promise<Image[]>;
}
declare namespace Giphy {
    const URI: (key?: string) => string;
    interface Gif {
        slug: string;
        images: {
            fixed_height: {
                url: string;
            };
        };
    }
    interface DataFormat {
        data: Gif[];
    }
    const cookDataFormat: ({data: images}: DataFormat) => API.Image[];
}
declare namespace Google {
    const URI: (query?: string, key?: string, context?: string) => string;
    interface Image {
        title: string;
        link: string;
    }
    interface DataFormat {
        items: Image[];
    }
    const cookDataFormat: ({items}: DataFormat) => API.Image[];
}
declare namespace Flickr {
    const URI: (key?: string, setID?: string) => string;
    interface Image {
        farm: string;
        server: string;
        id: string;
        secret: string;
        title: string;
    }
    const toImageSrc: ({farm, server, id, secret}: Image) => string;
    interface DataFormat {
        photoset: {
            photo: Image[];
        };
    }
    const cookDataFormat: ({photoset: {photo}}: DataFormat) => API.Image[];
}
declare namespace API {
    let images: API.Image[];
    /**
     * List of supported services
     */
    enum Service {
        Flickr = 0,
        Giphy = 1,
        Google = 2,
    }
    /**
     * Get the data from the service and parse
     * it to a unified format
     * @param service
     * @returns {Promise<Image[]>}
     */
    function get(service: Service): Promise<API.Image[]>;
}
declare namespace ModalUtils {
    const modalContentClassName = "modal-content";
    const modalImageContainerClassName = "modal-image-container";
    const modalImageClassName = "modal-image";
    let activeImage: number;
    /**
     * Update the innerContent
     * with the calculated values
     * @param imageContainer
     * @param innerContent
     */
    const setImageContainerStyle: (imageContainer: Element, innerContent: Element) => void;
    /**
     * Update the height of the inner content
     * for the new images.
     * @param innerContent
     * @param size
     */
    const updateInnerContainerSize: (innerContent: Element, size: number) => void;
    const isLast: () => boolean;
    const isFirst: () => boolean;
}
declare namespace ButtonFactory {
    const create: () => {
        nextButton: HTMLButtonElement;
        previousButton: HTMLButtonElement;
    };
    const next: () => void;
    const previous: () => void;
}
declare namespace ModalFactory {
    /**
     * Activate the mobile
     * and initializes the images.
     * @param id
     */
    const open: (id: number) => void;
    /**
     * Deactivate the modal.
     */
    const close: () => void;
}
declare namespace ImageFactory {
    const didClick: (index: number) => () => void;
    const create: ({url}: API.Image, index: number, openModal?: boolean) => Element;
}
declare namespace Render {
    /**
     * Based on the selected service update the view
     * with the correct API.
     * @returns {Promise<void>}
     */
    function fromServiceSelector(): Promise<void>;
}
declare namespace ServiceSelector {
    let currentService: API.Service;
    const init: () => void;
}
/**
 * First we will start by locating our mounting node
 * and adding some content to it.
 */
declare const root: Element;
