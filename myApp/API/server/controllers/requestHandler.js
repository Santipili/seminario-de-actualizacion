const {userSession} = require('./sessionHandler');
const {groupHandler} = require('./groupHandler');
const {userHandler} = require('./userHandler');

let session = new userSession(); //aqui se deberian guardar las sesiones
let groups = new groupHandler();
let users = new userHandler();

async function signInHandler(requestData, responseCallback){ 
    try {       
        let responseData = await session.signIn(requestData);
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
        let responseData = await session.register(requestData);
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

async function deleteUser(requestData, responseCallback){
    try {      
        console.log(requestData);
        let responseData = await users.delete(requestData.userID);
        console.log(responseData);
        if (responseData){
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

async function editUser(requestData, responseCallback){
    try {      
        // console.log(requestData);
        let responseData = await users.update(requestData);
        console.log(responseData);

        if (responseData){
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

async function listUsers(requestData, responseCallback){
    try {      
        let responseData = await users.list();
        console.log(responseData);

        if (responseData){
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

async function newGroup(requestData, responseCallback){
    try {      
        console.log(requestData);
        let responseData = await groups.create(requestData.newGroup);
        console.log(responseData);

        if (responseData){
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

async function deleteGroup(requestData, responseCallback){
    try {      
        console.log(requestData);
        let responseData = await groups.delete(requestData.groupName);
        console.log(responseData);

        if (responseData){
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

async function editGroup(requestData, responseCallback){
    try {      
        console.log(requestData);
        let responseData = await groups.update(requestData.groupToUpdate, requestData.newName);
        console.log(responseData);

        if (responseData){
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

async function listGroup(requestData, responseCallback){
    try {    
        let responseData = await groups.list();
        console.log(responseData);

        if (responseData){
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



module.exports = {registerHandler, signInHandler, deleteUser, editUser, listUsers,newGroup,deleteGroup,editGroup,listGroup};

