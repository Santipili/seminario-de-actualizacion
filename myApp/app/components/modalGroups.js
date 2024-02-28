import {modalGroupView } from './views/modalGroupView.js';
import {modalGroupModel } from './models/modalGroupModel.js';
import {modalGroupController } from './controllers/modalGroupController.js'


class modalGroups extends HTMLElement {
    constructor() {
      super();
        this.view = new modalGroupView();
        this.model = new modalGroupModel(this.view);
        this.controller = new modalGroupController(this.view,this.model);
        let style = document.createElement("style");
        style.innerText = `@import './app/styles/modalGroupStyle.css'`;
        this.appendChild(style);

    }
  
    connectedCallback() {        
        this.appendChild(this.view);
        this.controller.enable();
    }

    disconnectedCallback() {
        // this.controller.disabled();
    }
  
  }
  
  customElements.define('x-modalgroup', modalGroups);
  
  export { modalGroups }