import { signIn } from './components/signIn.js';
import { register} from './components/register.js';
import { home } from './components/home.js';
import { contacts } from './components/contacts.js';
// import { fileSystem } from './components/fileSystem.js';
// import { config } from './components/config.js';
import { navBar } from './components/navBar.js';




class Application extends HTMLElement {
    constructor() {
      super();
      this.container = document.createElement('div');
      this.viewReference = null;
      this.home = new home();
      this.signIn = new signIn();
      this.register = new register();
      this.navBar = new navBar();
      this.contacts = new contacts();
      // this.fileSystem = new fileSystem();
      // this.config = new config();

      let style = document.createElement('style');
      style.innerText = `@import './app/components/styles/appStyle.css'`;
      this.appendChild(style);
    }
  
  connectedCallback() {
    this.container.className = 'appContainer';
    this.container.appendChild(this.home);
    // this.container.appendChild(this.navBar);
    // this.container.className = 'containerActive';
    // this.container.appendChild(this.contacts);

    this.appendChild(this.container);
    this.setCallbacks();




  }
  
  setCallbacks() {
        window.addEventListener('signin-button-event', () => { this.onSignInView();});
        window.addEventListener('register-button-event', () => { this.onRegisterView();});
        window.addEventListener('usersignedIn-event', () => { this.onUserSignedIn();});

        window.addEventListener('adminSignedIn-event', () => { this.onAdminSignedIn();});
        window.addEventListener('signOut-event', () => { this.onLogOut();});
  }

  onSignInView() {
    this.container.className = 'containerActive';
    if (this.viewReference) {
      this.container.removeChild(this.viewReference)
    }
    this.viewReference = this.signIn;
    this.container.appendChild(this.viewReference);
  }

  onRegisterView()
  {
    this.container.className = 'containerActive';
    if (this.viewReference) {
      this.container.removeChild(this.viewReference)
    }
    this.viewReference = this.register;
    this.container.appendChild(this.viewReference);
  }

  onUserSignedIn()
  {
    this.container.removeChild(this.viewReference);
    this.container.removeChild(this.home);
    this.container.className = 'containerSigned';
    this.viewReference = this.fileSystem;
    this.container.appendChild(this.navBar);
    this.container.appendChild(this.viewReference);
  }

  onAdminSignedIn()
  {
    this.container.removeChild(this.viewReference);
    this.container.removeChild(this.home);
    this.container.className = 'containerSigned';
    this.viewReference = this.contacts;
    this.container.appendChild(this.navBar);
    this.container.appendChild(this.viewReference);
  }

  onLogOut()
  {
    this.container.className = 'appContainer';
    this.container.appendChild(this.home);
    this.appendChild(this.container);
  }

}
  
customElements.define('x-application', Application);
  
export { Application };