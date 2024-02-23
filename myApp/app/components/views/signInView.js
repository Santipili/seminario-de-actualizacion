class signInView extends HTMLElement
{
    constructor()
    {
        super();
        this.formContainer = document.createElement('div');
        this.signInTitle = document.createElement('p');
        this.form = document.createElement('form');      
        this.userNickNameContainer = document.createElement('div');      
        this.userNickNameLabel = document.createElement('label');
        this.userNickNameInput = document.createElement('input');
        this.passwordContainer = document.createElement('div');
        this.passwordLabel = document.createElement('label');
        this.inputPassword = document.createElement('input');
        this.forgotPasswordContainer = document.createElement('div');
        this.forgotPassword = document.createElement('a');
        this.buttonSignIn = document.createElement('button');
        this.p = document.createElement('p');        
        this.register = document.createElement('a'); 
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
        this.formContainer.classList.add("form-container");
        this.signInTitle.classList.add("title");
        this.signInTitle.textContent = "Sign In Form";
        this.form.classList.add("form");
        this.userNickNameContainer.classList.add("input-group");
        this.passwordContainer.classList.add("input-group");
        this.forgotPasswordContainer.classList.add("forgot");
        this.forgotPassword.innerHTML = 'Forgot your password?';
        this.forgotPassword.id= "forgotPassword";
        this.buttonSignIn.classList.add("sign");
        this.buttonSignIn.innerHTML = "Sign In";
        this.buttonSignIn.id = "signIn";
        this.p.classList.add('register');
        this.p.innerHTML = "Don't have an account? ";
        this.register.innerHTML = "Register";
        this.register.id= "registerLink";
        
        this.userNickNameLabel.for = this.userNickNameInput;
        this.userNickNameContainer.appendChild(this.userNickNameLabel);
        this.userNickNameContainer.appendChild(this.userNickNameInput);

        this.passwordLabel.for = this.inputPassword;
        this.passwordContainer.appendChild(this.passwordLabel);
        this.passwordContainer.appendChild(this.inputPassword);

        this.forgotPasswordContainer.appendChild(this.forgotPassword);     

        this.form.appendChild(this.userNickNameContainer);
        this.form.appendChild(this.passwordContainer);
        this.form.appendChild(this.forgotPasswordContainer);
        this.form.appendChild(this.buttonSignIn);      

        this.p.appendChild(this.register);

        this.formContainer.appendChild(this.signInTitle);
        this.formContainer.appendChild(this.form);
        this.formContainer.appendChild(this.p);

        this.appendChild(this.formContainer);
    }

    signInData(){
      let userDataRegister = {
        'nickname'  : this.userNickNameInput.value,
        'password'  : this.inputPassword.value,
      }
      return userDataRegister;
    }

}

customElements.define('x-sign-in-view', signInView);
  
export { signInView}