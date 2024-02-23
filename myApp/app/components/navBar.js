import {navBarView } from './views/navBarView.js';
import {navBarModel } from './models/navBarModel.js';
import {navBarController } from './controllers/navBarController.js'


class navBar extends HTMLElement {
    constructor() {
      super();
        this.view = new navBarView();
        this.model = new navBarModel(this.view);
        this.controller = new navBarController(this.view,this.model);
        let style = document.createElement("style");
        style.innerText = `@import './app/styles/navBarStyle.css'`;
        this.appendChild(style);

    }
  
    connectedCallback() {        
        this.appendChild(this.view);
        this.controller.enable();
    }

    disconnectedCallback() {
        this.controller.disable();
    }
  
  }
  
  customElements.define('x-navbar', navBar);
  
  export { navBar }