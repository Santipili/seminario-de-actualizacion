class registerController
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
                case "submitRegister":
                    this.onSubmitRegisterClick();
                    break;
                
                case "signInLink":
                    this.onSignInLinkClick();
                    break;

            }            

        })

    }

    disable()
    {
        this.innerView.onclick = null;
    }

    onSubmitRegisterClick()
    {
        
    }

    onSignInLinkClick()
    {
        window.dispatchEvent(new CustomEvent('register-signin-event'));
    }
}

export {registerController};