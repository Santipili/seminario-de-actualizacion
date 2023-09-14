class signInController{
    constructor(viewReference, modelReference)
    {
        this.innerView = viewReference;
        this.innerModel = modelReference;

    }

    enable()
    {
        this.innerView.addEventListener('click', (event) => {
            const target = event.target.id;

            switch(target)
            {
                case "signIn":
                    this.onSignInButtonClick();
                    break;
                
                case "registerLink":
                    this.onRegisterLinkClick();
                    break;
                
                case "forgotPassword":
                    this.onforgotPasswordClick();
                    
            }            

        })

    }

    disable()
    {
        // this.innerView.onclick = null;
    }

    onSignInButtonClick()
    {
        
    }

    onRegisterLinkClick()
    {
        window.dispatchEvent(new CustomEvent('signin-register-event'));
    }

    onforgotPasswordClick()
    {
        
    }
}

export {signInController};