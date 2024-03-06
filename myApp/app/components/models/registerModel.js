class registerModel
{
    constructor(viewReference)
    {
        this.innerView = viewReference;
    }

    signInEvent(){

    }

    async registerUser(){
        try {
      
            let requestMetadata = {
                method: "POST",
                body:JSON.stringify( dataNewUser),
              };
            let result = await fetch ("http://localhost:3000/user/register", requestMetadata);    
            let jsonResult = await result.json();
            // console.log(jsonResult);
            // alert(jsonResult.message);
            if (jsonResult.id>0){
                localStorage.setItem('nickname', dataNewUser.nickname); // sessionStorage.setItem('nickname', dataNewUser.nickname);
                localStorage.setItem('id', jsonResult.id);
                localStorage.setItem('token', jsonResult.token);
                localStorage.setItem('expirationTime', jsonResult.expirationTime)

                window.dispatchEvent(new CustomEvent('usersignedIn-event'));
            }
          } catch (error) {
            console.log("error");
            alert(error.message);
          }
    }

    passwordValidation(password){
        // const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-+#])[A-Za-z\d@$!%*?&._-+#]{8,}$/;
        // en los caracteres "-" genera error, por eso lo puse al final
        const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._+#-])[A-Za-z\d@$!%*?&._+#-]{8,}$/;

        if (passwordStrengthRegex.test(password)) {
            return true;
        } else {
            return false;
        }
    }

    reValidatePassword(password, confirmPassword){
   
        if (password === confirmPassword) {
          return true;
        } else {
          return false;
        }
    }

    emailValidation(email){
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //sencillo, empieza con cualquier caracter que no sea un espacio o un arroba, luego arroba y otra vez lo mismo, luego un punto y lo mismo

      if (regex.test(email)) {
        return true;
      }
      else {
        return false;
      }      
    }
    
    phoneValidation(phone){
      const phoneRegex = /^[0-9]{9,}$/;

      if (phoneRegex.test(phone)) {
        return true;
      }
      else {
        return false;
      }      
    }




};

export {registerModel};