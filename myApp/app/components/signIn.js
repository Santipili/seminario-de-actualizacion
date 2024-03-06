import {signInView } from './views/signInView.js';
import {signInModel } from './models/signInModel.js';
import {signInController } from './controllers/signInController.js';


class signIn extends HTMLElement {
    constructor() {
      super();
        this.viewReference = new signInView();
        this.modelReference = new signInModel();
        this.controller = new signInController(this.viewReference,this.modelReference);
        let style = document.createElement("style");
        style.innerText = `@import './app/styles/signInStyle.css'`;
        this.appendChild(style);

    }
  
    connectedCallback() {
        
        this.appendChild(this.viewReference);
        this.controller.enable();
    }

    disconnectedCallback() {
        // this.controller.disabled();
    }
  
  }
  
  customElements.define('x-sign-in', signIn);
  
  export { signIn }