import {init} from './init.js';
import {system} from './system.js';



class App extends HTMLElement {
    constructor() {
      super();
      this.container = document.createElement('div');
        this.initApp = new init();
        this.systemApp = new system();


      let style = document.createElement('style');
      style.innerText = `@import './app/styles/appStyle.css'`;
      this.appendChild(style);
    }
  
  connectedCallback() {

    this.appendChild(this.initApp);
    this.setCallbacks();

  }
  
  setCallbacks() {

        window.addEventListener('signedIn-event', () => { this.onSignedIn();});

        // window.addEventListener('adminSignedIn-event', () => { this.onAdminSignedIn();});
        window.addEventListener('signOut-event', () => { this.onLogOut();});
  }


  onSignedIn()
  {
    this.removeChild(this.initApp);
    this.appendChild(this.systemApp);
  }

  onLogOut()
  {
    this.removeChild(this.systemApp);
    this.appendChild(this.initApp);
  }

  

}
  
customElements.define('x-app', App);
  
export { App };