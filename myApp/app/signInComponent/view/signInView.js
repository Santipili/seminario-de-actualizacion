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

        let style = document.createElement('style');
        style.innerText = `
          .form-container {
            margin: 3% auto;
            width: 320px;
            border-radius: 0.75rem;
            background-color: rgba(17, 24, 39, 1);
            padding: 2rem;
            color: rgba(243, 244, 246, 1);
            font-family:Verdana, Geneva, Tahoma, sans-serif;
          }
          
          .title {
            text-align: center;
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 700;
          }
          
          .form {
            margin-top: 1.5rem;
          }
          
          .input-group {
            margin-top: 0.25rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
          
          .input-group label {
            display: block;
            color: rgba(156, 163, 175, 1);
            margin-bottom: 4px;
          }
          
          .input-group input {
            width: 90%;
            border-radius: 0.375rem;
            border: 1px solid rgba(55, 65, 81, 1);
            outline: 0;
            background-color: rgba(17, 24, 39, 1);
            padding: 0.75rem 1rem;
            color: rgba(243, 244, 246, 1);
          }
          
          .input-group input:focus {
            border-color: rgba(167, 139, 250);
          }
          
          .forgot {
            display: flex;
            justify-content: flex-end;
            font-size: 0.75rem;
            line-height: 1rem;
            color: rgba(156, 163, 175,1);
            margin: 8px 0 14px 0;
          }
          
          .forgot a,.register a {
            color: rgba(243, 244, 246, 1);
            text-decoration: none;
            font-size: 14px;
          }
          
          .forgot a:hover, .register a:hover {
            text-decoration: underline rgba(167, 139, 250, 1);
          }
          
          .sign {
            display: block;
            width: 100%;
            background-color: rgba(167, 139, 250, 1);
            padding: 0.75rem;
            text-align: center;
            color: rgba(17, 24, 39, 1);
            border: none;
            border-radius: 0.375rem;
            font-weight: 600;
          }

          .sign:hover{

          }
          
          .register {
            text-align: center;
            font-size: 0.75rem;
            line-height: 1rem;
            color: rgba(156, 163, 175, 1);
          }`;
        this.appendChild(style);
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