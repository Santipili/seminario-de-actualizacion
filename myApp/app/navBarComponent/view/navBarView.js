class navBarView extends HTMLElement {
    constructor()
    {
        super();

        this.nav = document.createElement('nav');
        this.ul = document.createElement('ul');
        
        this.homeLi = document.createElement('li');
        this.homeLink = document.createElement('a');
        this.homeIcon = document.createElement('img');
        
        this.loginLi = document.createElement('li');
        this.loginLink = document.createElement('a');

        this.registerLi = document.createElement('li');
        this.registerLink = document.createElement('a');
    
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
        this.nav.classList.add('navbar');
        this.ul.classList.add('nav-list');
        
        this.homeLi.classList.add('nav-item');
        this.homeLink.classList.add('home');
        this.homeLink.textContent = "Home"
        
        this.loginLi.classList.add('nav-item');
        this.loginLink.classList.add('signIn');
        this.loginLink.textContent = 'Sign In';  

        this.registerLi.classList.add('nav-item');
        this.registerLink.classList.add('register');
        this.registerLink.textContent = 'Register'; 


        this.homeLi.appendChild(this.homeLink);        
        this.loginLi.appendChild(this.loginLink);
        this.registerLi.appendChild(this.registerLink);
        
        this.ul.appendChild(this.homeLi);
        this.ul.appendChild(this.loginLi);
        this.ul.appendChild(this.registerLi);
    
        this.nav.appendChild(this.ul);    
        
        this.appendChild(this.nav);           

        let style = document.createElement('style');
        style.innerText = `
        .navbar {
            background-color: #007BFF;
            padding: 10px 0;
        }
        
        .nav-list {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin: 0;
        }
        
        .nav-item {
            margin: 0 10px;
        }
        
        
        .nav-item a {
            text-decoration: none;
            color: #fff;
            font-weight: bold;
            font-size: 16px;
        }

        .nav-item:hover {
            text-decoration: underline;
        }
        
        .nav-icon {
            width: 24px;
            height: 24px;
            vertical-align: middle;
        }`;
        this.appendChild(style);

    }

}

customElements.define('x-navbar-view',  navBarView );

export  {navBarView}