import {registerView } from './view/registerView.js';
// import {registerModel } from './model/registerModel.js';
import {registerController } from './controller/registerController.js';


class register extends HTMLElement {
    constructor() {
      super();
        this.viewReference = new registerView();
        // this.modelReference = new registerModel();
        this.controller = new registerController(this.viewReference,this.modelReference);

    }
  
    connectedCallback() {
        this.appendChild(this.viewReference);
        this.controller.enable();
    }

    disconnectedCallback() {
        this.removeChild(this.viewReference);
        this.controller.disabled();
    }
  
  }
  
  customElements.define('x-register', register);
  
  export { register }