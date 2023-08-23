import { myApp } from "./app/myApp.js";


function startApp() {

    let startApp = new myApp();

   document.body.appendChild(startApp.innerView);

}

 window.addEventListener('load', startApp);