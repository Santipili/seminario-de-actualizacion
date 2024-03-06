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

    async onSignInButtonClick()
    {
        event.preventDefault();

        let signInData = this.innerView.signInData()

        await this.innerModel.signIn(signInData);

    }

    onRegisterLinkClick()
    {
        window.dispatchEvent(new CustomEvent('signin-register-event'));
    }

    onforgotPasswordClick()
    {
        window.dispatchEvent(new CustomEvent('forgotPassword-event'));
    }
}

export {signInController};