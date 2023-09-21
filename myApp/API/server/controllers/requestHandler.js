const {userSession} = require('./sessionHandler');

let users = new userSession(); //aqui se deberian guardar las sesiones

async function signInHandler(requestData, responseCallback){ 
    try {       
        let responseData = await users.signIn(requestData);
        if (responseData.id){
            responseCallback(200, responseData);  
        }
        else {
            responseCallback(400, responseData); 
        }       
    } catch (error) {
        responseData = {
            error: error,
            message: "Imposible Loguearse"
        }          
        responseCallback(400, responseData);    
    }
}

async function registerHandler(requestData, responseCallback){
    try {      
        let responseData = await users.register(requestData);
        if (responseData.id){
           responseCallback(200, responseData);  
        }
        else {
           responseCallback(400, responseData); 
        }    
    } catch (error) {
        console.log(error);
        responseCallback(400, error);
    }            
}

module.exports = {registerHandler, signInHandler};

