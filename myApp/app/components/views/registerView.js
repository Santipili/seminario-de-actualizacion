class registerView extends HTMLElement
{
    constructor()
    {
        super();

        this.form = document.createElement('form');      
       
        this.registerTitle = document.createElement('p');        
        
        this.message = document.createElement('p');    

        this.nickName = this.createLabel('NickName', 'text', 'nickName');   

        this.flexDiv = document.createElement('div');        

        this.firstnameLabel = this.createLabel('Firstname', 'text', 'firstname');

        this.lastnameLabel = this.createLabel('Lastname', 'text', 'lastname');

        this.emailLabel = this.createLabel('Email', 'email', 'email');

        this.phoneLabel = this.createLabel('Phone Number', 'number', 'phone');

        this.nidLabel = this.createLabel('DNI', 'number', 'dni');


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
        this.form.appendChild(this.nickName);

        this.flexDiv.appendChild(this.firstnameLabel);
        this.flexDiv.appendChild(this.lastnameLabel);
        this.form.appendChild(this.flexDiv);
        this.form.appendChild(this.emailLabel);
        this.form.appendChild(this.phoneLabel);
        this.form.appendChild(this.nidLabel);
        this.form.appendChild(this.passwordLabel);
        this.form.appendChild(this.confirmPasswordLabel);
        this.form.appendChild(this.submitButton);

        this.signIn.appendChild(this.signInLink);
        this.form.appendChild(this.signIn);

        this.appendChild(this.form);

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

    getRegisterData() {
      let userDataRegister = {
            'nickname'  : this.nickName.childNodes[0].value,
            'password'  : this.passwordLabel.childNodes[0].value,
            'name'      : this.firstnameLabel.childNodes[0].value,
            'surname'   : this.lastnameLabel.childNodes[0].value,
            'dni'       : this.nidLabel.childNodes[0].value,
            'email'     : this.emailLabel.childNodes[0].value,
            'phone'     : this.phoneLabel.childNodes[0].value            
      }
      return userDataRegister;

    }
}

customElements.define('x-register-view', registerView);
  
export { registerView }