const {userController} = require("./userController");

const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');


async function signInHandler(requestData, responseCallback){
    console.log('signin');  
   try {       
        let userControl = new userController();
        userControl.validateUser(requestData.nickname, requestData.password).then( r => {

            if (r.id > 0 ){
                console.log("Signed");  
                const userToken = generateToken(requestData.nickname);
                const tokenExpirationTime = new Date();
                tokenExpirationTime.setMinutes(tokenExpirationTime.getMinutes() + 10);
         
                responseData = {
                    id:r.id,
                    token: userToken,
                    expirationTime: tokenExpirationTime,
                    message: "Signed"
                }
                responseCallback(200, responseData);            
            }
            else {
                console.error("Username or Password Incorrect");  
                responseData = {
                    id:r.id,
                    message: "Username or Password Incorrect"
                }          
                responseCallback(400, responseData);            
            }
        })
      
    } catch (error) {
        responseData = {
            error: error,
            message: "Username or Password Incorrect"
        }          
        responseCallback(400, responseData);    
    }
}


async function registerHandler(requestData, responseCallback){
   try {      
        let userControl = new userController();
        let userData = {
            'nickname'  : requestData.nickname,
            'password'  : requestData.password,
            'name'      : requestData.name,
            'surname'   : requestData.surname,
            'dni'       : requestData.dni,
            'email'     : requestData.email,
            'phone'     : requestData.phone            
        };        

        userControl.createUser(userData).then( r => {
            if (r.id > 0 ){
                console.log('Creado Correctamente');            
                const userToken = generateToken(requestData.nickname);
                const tokenExpirationTime = new Date();
                tokenExpirationTime.setMinutes(tokenExpirationTime.getMinutes() + 10);
                responseData = {
                    id:r.id,
                    token: userToken,
                    expirationTime: tokenExpirationTime,
                    message: "Usuario creado correctamente"
                }
                responseCallback(200, responseData);            
            }
            else {
                console.error("Error id NULL");  
                responseData = {
                    id:r.id,
                    message: "Imposible crear Usuario"
                }          
                responseCallback(400, responseData);            
            }   
        });

    } catch (error) {
        console.log(error);
        responseCallback(400, error);
    }            
}

module.exports = {registerHandler, signInHandler};


function generateToken(param){
    // Generar un UUID v4
    const uuid = uuidv4();
    
    // Datos que quieres hashear
    const dataToHash = param + uuid;
    
    // Crear un objeto hash con el algoritmo SHA-256
    const hash = crypto.createHash('sha256');
    
    // Actualizar el objeto hash con los datos que deseas hashear
    hash.update(dataToHash);
    
    // Calcular el hash
    const token = hash.digest('hex');   

    return token;
}