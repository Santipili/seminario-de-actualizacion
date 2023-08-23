import { view } from "./view/view.js";
import { controller } from "./controller/controller.js";
import { model } from "./model/model.js";

class myApp extends HTMLElement
{
    constructor()
    {
        super();
        this.innerView = new view();
        this.innerModel = new model();
        this.innerController = new controller(this.innerView,this.innerModel);
    }

    connectedCallback()
	{
		// this.controller.enable();
	}

	disconnectedCallback()
	{
		// this.controller.disable();
	}
}

customElements.define('x-myapp',  myApp );

export {myApp};