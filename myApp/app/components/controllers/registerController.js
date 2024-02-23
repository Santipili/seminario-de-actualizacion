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
        try {
      
            let requestMetadata = {
                method: "POST",
                body:JSON.stringify( dataNewUser),
              };
            let result = await fetch ("http://localhost:3000/register", requestMetadata);    
            let jsonResult = await result.json();
            console.log(jsonResult);
            alert(jsonResult.message);
            if (jsonResult.id>0){
                localStorage.setItem('nickname', dataNewUser.nickname);
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

    onSignInLinkClick()
    {
        window.dispatchEvent(new CustomEvent('register-signin-event'));
    }
}

export {registerController};