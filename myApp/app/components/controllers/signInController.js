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
        console.log('Sign In');
         
        // let signInData = {
        //     'nickname'  : 'saantipili',
        //     'password'  : 'casa4565'
        // };

        let signInData = this.innerView.signInData()

        try {      
            let requestMetadata = {
                method: "POST",
                body:JSON.stringify(signInData),
              };
    
            let result = await fetch ("http://localhost:3000/signIn", requestMetadata);    
            let jsonResult = await result.json();

            alert(jsonResult.message); //el jsonResult tiene el id, el token y el mensaje
            console.log(jsonResult);

            if (jsonResult.id>0){
                localStorage.setItem('nickname', signInData.nickname);
                localStorage.setItem('id', jsonResult.id);
                localStorage.setItem('token', jsonResult.token);
                localStorage.setItem('expirationTime', jsonResult.expirationTime)
                window.dispatchEvent(new CustomEvent('signed'));
            }
        } catch (error) {
            console.log("error");
            alert(error.message);
        }

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