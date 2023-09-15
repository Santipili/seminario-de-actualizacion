import { signIn } from './signInComponent/signIn.js';
import { register} from './registerComponent/register.js';
import { home } from './homeComponent/home.js';
import { navBar } from './navBarComponent/navBar.js';
import {loader} from './loaderComponent/loader.js';


class Application extends HTMLElement {
    constructor() {
      super();
      this.viewReference;
      this.loader = new loader();
      this.navBar = new navBar();
    }
  
    connectedCallback() {
      
      this.appendChild(this.loader);
  
       setTimeout(() => {
         this.removeChild(this.loader);

         this.appendChild(this.navBar);

          this.viewReference = new signIn();
          this.appendChild(this.viewReference);

         
         this.setCallbacks();
       }, 1500);
    }
  
    setCallbacks() {
        window.addEventListener('nav-signin-event', () => { this.onSignInView();});
        window.addEventListener('nav-register-event', () => { this.onRegisterView();});
        window.addEventListener('nav-home-event', () => { this.onHomeView();});

        window.addEventListener('signed', () => { this.onHomeView();});
        window.addEventListener('register-signin-event', () => { this.onSignInView();});
        window.addEventListener('signin-register-event', () => { this.onRegisterView();});

    }

    onSignInView()
    {
       if (this.viewReference) {
         this.removeChild(this.viewReference)
       }
       this.viewReference = new signIn();
       this.appendChild(this.viewReference);
    }

    onRegisterView()
    {
       if (this.viewReference) {
         this.removeChild(this.viewReference)
       }
       this.viewReference = new register();
       this.appendChild(this.viewReference);
    }

    onHomeView()
    {
       if (this.viewReference) {
         this.removeChild(this.viewReference)
       }
       this.viewReference = new home();
       this.appendChild(this.viewReference);
    }
  
  }
  
  customElements.define('x-application', Application);
  
  export { Application }