import {homeView } from './views/homeView.js';
import {homeModel } from './models/homeModel.js';
import {homeController } from './controllers/homeController.js'


class home extends HTMLElement {
    constructor() {
      super();
        this.view = new homeView();
        this.model = new homeModel(this.view);
        this.controller = new homeController(this.view,this.model);
        let style = document.createElement("style");
        style.innerText = `@import './app/styles/homeStyle.css'`;
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
  
  customElements.define('x-home', home);
  
  export { home }