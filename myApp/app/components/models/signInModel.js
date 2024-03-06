class signInModel {
    constructor()
    {

    }

    async signIn(signInData){

        try {      
            let requestMetadata = {
                method: "POST",
                body:JSON.stringify(signInData),
              };
    
            let result = await fetch ("http://localhost:3000/user/signIn", requestMetadata);    
            let jsonResult = await result.json();

            // alert(jsonResult.message); 
            // console.log(jsonResult);

            if (jsonResult.id>0){
                localStorage.setItem('nickname', signInData.nickname);
                localStorage.setItem('id', jsonResult.id);
                localStorage.setItem('token', jsonResult.token);
                localStorage.setItem('expirationTime', jsonResult.expirationTime)
                // window.dispatchEvent(new CustomEvent('signed'));
                window.dispatchEvent(new CustomEvent('usersignedIn-event'));

            }
        } catch (error) {
            console.log("error");
            alert(error.message);
        }

    }

}

export {signInModel};