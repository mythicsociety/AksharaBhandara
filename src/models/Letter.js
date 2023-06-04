export default class Letter {
    constructor(id, key, isAvailable, forms, IASTform) {
        /** @type {number} */
        this.id = id;

        /** @type {string} */
        this.key = key;

        /** @type {boolean} */
        this.isAvailable = isAvailable;

        /** @type {string[]} */
        this.forms = forms;

        /** @type {string} */
        this.IASTform = IASTform;
    }

    /** @type {ImageDetail[]} */
    imagesDetails = [];

    
}
  