import { Application } from "./app/Application.js";
import { App } from "./app/App.js";

function startApplication() {
  let application = new Application();
  // const app = new App();
  
  document.body.appendChild(application);
}

window.onload = startApplication();