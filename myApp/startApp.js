import { view } from "./app/view/view.js";


function startApp() {

    let myApp = new view();

   document.body.appendChild(myApp);

}

 window.addEventListener('load', startApp);