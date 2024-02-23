class homeView extends HTMLElement
{
    constructor()
    {
        super();

        this.homeContainer = document.createElement('div');
        this.principalImage = document.createElement('img');
        this.homeSubtitle = document.createElement('h2');
        this.buttonsContainer = document.createElement('div');
        this.registerButton = document.createElement('button');
        this.signInButton = document.createElement('button');
        
    }


    connectedCallback()
    {
        this.render();
    }

    disconectedCallback()
    {

    }

    render()
    {
        // const userNickName = localStorage.getItem('nickname');
        this.setAttributes();
        
        this.homeContainer.appendChild(this.principalImage);
        this.homeContainer.appendChild(this.homeSubtitle);
        this.buttonsContainer.appendChild(this.registerButton);
        this.buttonsContainer.appendChild(this.signInButton);
        this.homeContainer.appendChild(this.buttonsContainer);
        this.appendChild(this.homeContainer);
        
        
    }
    
    setAttributes(){
        this.homeContainer.id = 'homeContainer';
        this.homeContainer.classList.add('start');
        this.principalImage.src = './app/src/principal.png';
        this.principalImage.id = "principalImage";
        this.principalImage.classList.add('principalImage');
        this.principalImage.classList.add('start');
        

        this.homeSubtitle.innerText = "Instituto Superior de Formación Técnica Nº 151";
        this.homeSubtitle.id = "homeSubtitle";
        this.homeSubtitle.classList.add('homeSubtitle');
        this.homeSubtitle.classList.add('start');

        this.registerButton.innerText = "Register";
        this.registerButton.id = "registerButton";
        // this.registerButton.classList.add('register');
        this.registerButton.classList.add('start');

        this.signInButton.innerText = "Sign In";
        this.signInButton.id = "signInButton";
        // this.signInButton.classList.add('signIn');
        this.signInButton.classList.add('start');

        // this.classList.add('homeView');
        this.className = 'componente';
        
    }


}

customElements.define('x-home-view', homeView);
  
export { homeView}