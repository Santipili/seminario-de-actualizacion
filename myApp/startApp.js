import { Application } from "./app/Application.js";

function startApplication() {
  let application = new Application();
  document.body.appendChild(application);
  document.body.style = ` background: #E8CBC0;  /* fallback for old browsers */
                          background: -webkit-linear-gradient(to right, #636FA4, #E8CBC0);  /* Chrome 10-25, Safari 5.1-6 */
                          background: linear-gradient(to right, #636FA4, #E8CBC0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    `;
}

window.onload = startApplication();