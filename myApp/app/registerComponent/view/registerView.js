class registerView extends HTMLElement
{
    constructor()
    {
        super();

        this.form = document.createElement('form');      
       
        this.registerTitle = document.createElement('p');        
        
        this.message = document.createElement('p');       

        this.flexDiv = document.createElement('div');        

        this.firstnameLabel = this.createLabel('Firstname', 'text', 'firstname');

        this.lastnameLabel = this.createLabel('Lastname', 'text', 'lastname');

        this.emailLabel = this.createLabel('Email', 'email', 'email');

        this.passwordLabel = this.createLabel('Password', 'password', 'password');

        this.confirmPasswordLabel = this.createLabel('Confirm password', 'password', 'confirmPassword');

        this.submitButton = document.createElement('button');
        
        this.signIn = document.createElement('p'); 
        this.signInLink = document.createElement('a');

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
        this.form.classList.add('form');

        this.registerTitle.classList.add('registerTitle');
        this.registerTitle.textContent = 'Register';

        this.message.classList.add('message');
        this.message.textContent = 'Signup now and get full access to our app.';

        this.flexDiv.classList.add('flex');

        this.submitButton.classList.add('submit');
        this.submitButton.textContent = 'Submit';
        this.submitButton.id= "submitButton";
        
        this.signInLink.innerHTML = "Sign in";
        this.signInLink.id = "signInLink";
        this.signIn.classList.add('signin');
        this.signIn.innerHTML = 'Already have an account?';
        
        this.form.appendChild(this.registerTitle);

        this.form.appendChild(this.message);


        this.flexDiv.appendChild(this.firstnameLabel);
        this.flexDiv.appendChild(this.lastnameLabel);
        this.form.appendChild(this.flexDiv);

        this.form.appendChild(this.emailLabel);
        this.form.appendChild(this.passwordLabel);
        this.form.appendChild(this.confirmPasswordLabel);

        this.form.appendChild(this.submitButton);

        this.signIn.appendChild(this.signInLink);
        this.form.appendChild(this.signIn);

        this.appendChild(this.form);


        let style = document.createElement('style');
        style.innerText = `
        .form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 350px;
            background-color: #fff;
            padding: 20px;
            border-radius: 20px;
            position: relative;
          }
          
          .registerTitle {
            font-size: 28px;
            color: royalblue;
            font-weight: 600;
            letter-spacing: -1px;
            position: relative;
            display: flex;
            align-items: center;
            padding-left: 30px;
          }
          
          .registerTitle::before,.registerTitle::after {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            border-radius: 50%;
            left: 0px;
            background-color: royalblue;
          }
          
          .registerTitle::before {
            width: 18px;
            height: 18px;
            background-color: royalblue;
          }
          
          .registerTitle::after {
            width: 18px;
            height: 18px;
            animation: pulse 1s linear infinite;
          }
          
          .message, .signin {
            color: rgba(88, 87, 87, 0.822);
            font-size: 14px;
          }
          
          .signin {
            text-align: center;
          }

          #sigInLink {
            color: black;
          }
          
          .signin a {
            color: royalblue;
          }
          
          .signin a:hover {
            text-decoration: underline royalblue;
          }
          
          .flex {
            display: flex;
            width: 100%;
            gap: 6px;
          }
          
          .form label {
            position: relative;
          }

          
          
          .form label .input {
            margin-right:10px;
            width: 90%;
            padding: 10px 10px 20px 10px;
            outline: 0;
            border: 1px solid rgba(105, 105, 105, 0.397);
            border-radius: 10px;
          }
          
          .form label .input + span {
            position: absolute;
            left: 10px;
            top: 15px;
            color: grey;
            font-size: 0.9em;
            cursor: text;
            transition: 0.3s ease;
          }
          
          .form label .input:placeholder-shown + span {
            top: 15px;
            font-size: 0.9em;
          }
          
          .form label .input:focus + span,.form label .input:valid + span {
            top: 30px;
            font-size: 0.7em;
            font-weight: 600;
          }
          
          .form label .input:valid + span {
            color: green;
          }
          
          .submit {
            border: none;
            outline: none;
            background-color: royalblue;
            padding: 10px;
            border-radius: 10px;
            color: #fff;
            font-size: 16px;
            transform: .3s ease;
          }
          
          .submit:hover {
            background-color: rgb(56, 90, 194);
          }
          
          @keyframes pulse {
            from {
              transform: scale(0.9);
              opacity: 1;
            }
          
            to {
              transform: scale(1.8);
              opacity: 0;
            }
          }`;
        this.appendChild(style);
    }

    createLabel(labelText, inputType, inputId) {
        const label = document.createElement('label');
        let input = document.createElement('input');
        input.required = true;
        input.placeholder = '';
        input.type = inputType;
        input.classList.add('input');
        input.id = inputId;
        label.appendChild(input);

        const span = document.createElement('span');
        span.textContent = labelText;
        label.appendChild(span);

        return label;
    }
}

customElements.define('x-register-view', registerView);
  
export { registerView }