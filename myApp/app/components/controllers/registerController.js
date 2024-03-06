class registerController
{
    constructor(viewReference, modelReference)
    {
        this.innerView = viewReference;
        this.innerModel = modelReference;

    }

    enable()
    {
        this.innerView.addEventListener('input', (event) => {
            const target = event.target.id;
            switch(target)
            {
                case "password":
                    this.passwordValidation(event.target);
                    break;
                case "confirmPassword":
                    this.confirmPasswordValidation(event.target);
                    break;
            }            
        })
        
        this.innerView.addEventListener('click', (event) => {
            const target = event.target.id;
            switch(target)
            {
                case "submitButton":
                    this.onSubmitRegisterClick();
                    break;
                case "signInLink":
                    this.onSignInLinkClick();
                    break;
            }            
        });
    }

    disable()
    {
        this.innerView.removeEventListener('click', () => {});
    }

    async onSubmitRegisterClick()
    {
        event.preventDefault();
        let dataNewUser  =this.innerView.getRegisterData();

        await this.innerModel.registerUser(dataNewUser);
        
    }

    onSignInLinkClick()
    {
        window.dispatchEvent(new CustomEvent('register-signin-event'));

    }

    
    passwordValidation(target)
    {
        const password = target.value;
        const validation = this.innerModel.passwordValidation(password); //y si le paso el target al modelo

        if (validation) {
            target.classList.remove('invalid');
            target.classList.add('valid');
            target.setCustomValidity("");
        } else {
            target.classList.remove('valid');
            target.classList.add('invalid');
            target.setCustomValidity("La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un símbolo, y tener al menos 8 caracteres de longitud.");
        }
    }

    confirmPasswordValidation(target)
    {
        const password = this.innerView.getPassword();
        const confirmPassword = target.value;
    
        if (password === confirmPassword) {
          target.setCustomValidity("");
        } else {
          target.setCustomValidity("Las contraseñas no coinciden.");
        }

    }

    emailValidation(target){
        const email = this.innerView.getEmail();
        const validation = this.innerModel.emailValidation(email);

        if (validation) {
            target.classList.remove('invalid');
            target.classList.add('valid');
            target.setCustomValidity("");
        } else {
            target.classList.remove('valid');
            target.classList.add('invalid');
            target.setCustomValidity("El correo electrónico no es válido.");
        }

    }
}

export {registerController};