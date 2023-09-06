import { navBarController } from "./controller/navBarController.js";
import { navBarView } from "./view/navBarView.js";

class navBar extends HTMLElement {
    constructor()
    {
        super();
        this.navBar = new navBarView();
        this.navBarController = new navBarController(this.navBar);
    }


    connectedCallback()
    {    
        this.appendChild(this.navBar); 
        this.navBarController.enable();
    }

    disconnectedCallback()
    {
        this.removeChild(this.navBar);
        this.navBarController.disable();
    }

}

customElements.define('x-navbar',  navBar );

export  {navBar}