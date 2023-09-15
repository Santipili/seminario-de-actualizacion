import {homeView } from './view/homeView.js';
// import {signInModel } from './model/signInModel.js';
// import {homeController } from './controller/homeController.js'


class home extends HTMLElement {
    constructor() {
      super();
        this.viewReference = new homeView();
        // this.modelReference = new homeModel();
        // this.controller = new homeController(this.viewReference,this.modelReference);

    }
  
    connectedCallback() {        
        this.appendChild(this.viewReference);
        // this.controller.enable();
    }

    disconnectedCallback() {
        // this.controller.disabled();
    }
  
  }
  
  customElements.define('x-home', home);
  
  export { home }