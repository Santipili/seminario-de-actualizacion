class navBarView extends HTMLElement {
    constructor()
    {
        super();
        this.nav = document.createElement('nav');

        this.userSection = document.createElement('div');
        this.userPicture = document.createElement('img');
        this.userName = document.createElement('p');

        // this.iconState = document.createElement('div');
        // this.state = document.createElement('p');
        this.line = document.createElement('hr');

        this.ul = document.createElement('ul');
        
        this.usersLi = document.createElement('li');
        this.usersLink = document.createElement('a');
        this.usersIcon = document.createElement('img');
        
        this.filesLi = document.createElement('li');
        this.filesLink = document.createElement('a');
        this.filesIcon = document.createElement('img');

        this.configLi = document.createElement('li');
        this.configLink = document.createElement('a');
        this.configIcon = document.createElement('img');

        this.logoutLi = document.createElement('li');
        this.logoutLink = document.createElement('a');
        this.logoutIcon = document.createElement('img');
    
    }


    connectedCallback()
    {
        this.render();    
    }

    disconnectedCallback()
    {

    }

    render()
    {   
        this.userPicture.src = './app/src/user.png';
        this.userName.innerText = 'User Name';
        // this.userName.innerText = localStorage.getItem('nickname');

        this.usersIcon.src = './app/src/group.png';
        this.usersLink.innerText = 'Contactos';

        this.filesIcon.src = './app/src/folder.png';
        this.filesLink.innerText = 'Archivos';

        this.configIcon.src = './app/src/settings.png';
        this.configLink.innerText = 'Configuración';

        this.logoutIcon.src = './app/src/exit.png';
        this.logoutLink.innerText = 'Cerrar Sesión';

        this.userSection.appendChild(this.userPicture);
        this.userSection.appendChild(this.userName);

        this.usersLi.appendChild(this.usersIcon);
        this.usersLi.appendChild(this.usersLink);

        this.filesLi.appendChild(this.filesIcon);
        this.filesLi.appendChild(this.filesLink);

        this.configLi.appendChild(this.configIcon);
        this.configLi.appendChild(this.configLink);

        this.logoutLi.appendChild(this.logoutIcon);
        this.logoutLi.appendChild(this.logoutLink);

        this.ul.appendChild(this.usersLi);
        this.ul.appendChild(this.filesLi);
        this.ul.appendChild(this.configLi);
        this.ul.appendChild(this.logoutLi);

        this.nav.appendChild(this.userSection);
        this.nav.appendChild(this.line);
        this.nav.appendChild(this.ul);

        this.appendChild(this.nav);

        this.nav.className = 'lista-lateral';
        this.className = 'nav-list';

    }

}

customElements.define('x-navbar-view',  navBarView );

export  {navBarView}