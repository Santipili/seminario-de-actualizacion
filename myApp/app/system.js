import { navBar } from './components/navBar.js';
import { contacts } from './components/contacts.js';
// import { fileSystem } from './components/fileSystem.js';
// import { config } from './components/config.js';
import { modalGroups } from './components/modalGroups.js';




class system extends HTMLElement {
    constructor() {
      super();
      this.container = document.createElement('div');

      this.navBar = new navBar();
      this.contacts = new contacts();
      this.modalGroupsTable = new modalGroups();

    }
  
  connectedCallback() {
    // this.setCallbacks();
    
    this.container.className = 'containerSigned';
    // this.viewReference = this.fileSystem;
    this.viewReference = this.contacts;
    this.container.appendChild(this.navBar);
    this.container.appendChild(this.viewReference);
    this.appendChild(this.container);
    this.appendChild(this.modalGroupsTable);

  }
  
  setCallbacks() {

        // window.addEventListener('usersignedIn-event', () => { this.onUserSignedIn();});
        // window.addEventListener('adminSignedIn-event', () => { this.onAdminSignedIn();});
        // window.addEventListener('signOut-event', () => { this.onLogOut();});
  }


  onUserSignedIn()
  {


  }

  onAdminSignedIn()
  {
    this.container.removeChild(this.viewReference);
    this.container.removeChild(this.home);
    this.container.className = 'containerSigned';
    this.viewReference = this.contacts;
    this.container.appendChild(this.navBar);
    this.container.appendChild(this.viewReference);
    this.appendChild(this.modalGroupsTable);
  }

  // onModalGroup()
  // {
  //   this.appendChild(this.modalGroupsTable);

  // }

  

}
  
customElements.define('x-system', system);
  
export { system };