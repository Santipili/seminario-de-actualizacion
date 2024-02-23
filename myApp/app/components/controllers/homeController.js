class homeController
{
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
                case "registerButton":
                    this.onRegisterButtonClick();
                    break;
                case "signInButton":
                    this.onSignInButtonClick();
                    break;
            }            
        })
    }

    onRegisterButtonClick()
    {
        this.innerModel.register();
    }

    onSignInButtonClick()
    {
        this.innerModel.signIn();
    }
}

export {homeController};