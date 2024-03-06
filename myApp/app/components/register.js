import {registerView } from './views/registerView.js';
import {registerModel } from './models/registerModel.js';
import {registerController } from './controllers/registerController.js';


class register extends HTMLElement {
    constructor() {
      super();
        this.viewReference = new registerView();
        this.modelReference = new registerModel();
        this.controller = new registerController(this.viewReference,this.modelReference);
        let style = document.createElement("style");
        style.innerText = `@import './app/styles/registerStyle.css'`;
        this.appendChild(style);

    }
  
    connectedCallback() {
        this.appendChild(this.viewReference);
        this.controller.enable();
    }

    disconnectedCallback() {
      this.controller.disable();
      this.removeChild(this.viewReference);
    }
  
  }
  
  customElements.define('x-register', register);
  
  export { register }