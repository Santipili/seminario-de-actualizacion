import {contactsView } from './views/contactsView.js';
import {contactsModel } from './models/contactsModel.js';
import {contactsController } from './controllers/contactsController.js'


class contacts extends HTMLElement {
    constructor() {
      super();
        this.view = new contactsView();
        this.model = new contactsModel(this.view);
        this.controller = new contactsController(this.view,this.model);
        let style = document.createElement("style");
        style.innerText = `@import './app/styles/contactsStyle.css'`;
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
  
  customElements.define('x-contacts', contacts);
  
  export { contacts }