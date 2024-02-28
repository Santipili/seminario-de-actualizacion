const {userController} = require("./userController");
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

class userSession{
    constructor(){
        this.sessionsMap = new Map();
    }

    async signIn(requestData){ 
        try {       
            let userControl = new userController();
            const response = await userControl.validateUser(requestData.nickname, requestData.password);
            if (response.id > 0) {
                console.log('signed');
                const userToken = this.generateToken(requestData.nickname);
                const tokenExpirationTime = new Date();
                tokenExpirationTime.setMinutes(tokenExpirationTime.getMinutes() + 10);
                this.setNewSession(response.id, userToken, tokenExpirationTime);

                const responseData = {
                    id: response.id,
                    token: userToken,
                    expirationTime: tokenExpirationTime,
                    message: "Signed"
                };

                return responseData;
            } else {
                const responseData = {
                    message: "Username or Password Incorrect"
                };
                return responseData;
            }
        } catch (error) {
            const responseData = {
                error: error,
                message: "Username or Password Incorrect"
            }          
            return responseData;    
        }
    }

    async register(requestData){
        try {      
            let userControl = new userController();
            let response = await userControl.createUser(requestData);
            if (response.id > 0 ){
                console.log('Create User Success');            
                const userToken = this.generateToken(requestData.nickname);
                const tokenExpirationTime = new Date();
                tokenExpirationTime.setMinutes(tokenExpirationTime.getMinutes() + 10);
                this.setNewSession(response.id, userToken, tokenExpirationTime);

                const responseData = {
                    id:response.id,
                    token: userToken,
                    expirationTime: tokenExpirationTime,
                    message: "Usuario creado correctamente"
                }
                
                return responseData;             
            }
            else {
                console.error("Error id NULL o 0");  
                const responseData = {
                    message: "Imposible crear Usuario"
                }          
                return responseData;             
            }       
        } catch (error) {
            console.log("try error")
            const responseData = {
                error: error,
                message: "Imposible crear usuario"
            }          
            return responseData;  
        }            
    }

    logout(userId){
        this.sessionsMap.delete(userId);
    }

    setNewSession(userId, userToken, tokenExpirationTime){
        const tokenData = {
            token: userToken,
            tokenExpirationTime: tokenExpirationTime
          };

        if (this.sessionsMap.has(userId)){
            this.sessionsMap.delete(userId);
        }

        this.sessionsMap.set(userId, tokenData);
    }

    generateToken(param){
        const uuid = uuidv4();
        const hash = crypto.createHash('sha256');
        const dataToHash = param + uuid;
        hash.update(dataToHash);
        const token = hash.digest('hex');   
        return token;
    }
}

module.exports = {userSession};


    
    
 
    
  
    
   