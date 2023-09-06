import {signInView } from './signInView.js';
// import {signInModel } from './signInModel.js';
import {signInController } from './signInController.js';


class signIn extends HTMLElement {
    constructor() {
      super();
        this.viewReference = new signInView();
        // this.modelReference = new signInModel();
        this.controller = new signInController(this.viewReference,this.modelReference);

    }
  
    connectedCallback() {
        
        this.appendChild(this.viewReference);
        this.controller.enable();
    }

    disconnectedCallback() {
        this.controller.disabled();
    }
  
  }
  
  customElements.define('x-sign-in', signIn);
  
  export { signIn }