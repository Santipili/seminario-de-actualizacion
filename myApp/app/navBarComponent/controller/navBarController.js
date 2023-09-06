class navBarController 
{
    constructor(viewReference)
    {
        this.view = viewReference;
    }

    enable()
    {
        this.view.nav.addEventListener('click', (event) => {
            const target = event.target.className;

            switch(target)
            {
                case "home":
                    this.onHomeButtonClick();
                    break;
                
                case "signIn":
                    this.onSignInButtonClick();
                    break;
                
                case "register":
                    this.onRegisterButtonClick();
            }            

        })

    }

    disable()
    {
        this.view.nav.onclick = null;
    }

    onHomeButtonClick()
    {
        window.dispatchEvent(new CustomEvent('nav-home-event'));
    }

    onSignInButtonClick()
    {
        window.dispatchEvent(new CustomEvent('nav-signin-event'));
    }

    onRegisterButtonClick()
    {
        window.dispatchEvent(new CustomEvent('nav-register-event'));
    }
}

export {navBarController};