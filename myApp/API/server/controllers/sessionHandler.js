const {userController} = require("./userController");


async function signInHandler(requestData, responseCallback){
    console.log('signin')
    
   
   try {       

        let userControl = new userController(DBHandler);

        const validateUser = await userControl.validateUser(requestData.nickname, requestData.password);
        const validateResponse = await JSON.parse(validateUser);

        if (!validateResponse.validated){
            console.error("Error");  
            responseData = {
                id:0,
                token: '',
                message: "User or Password Incorrect"
            }          
            responseCallback(400, responseData);
        }
        else {
            console.log('aprobado');
            console.log(validateUser);
            
            responseData = {
                id:validateResponse.iduser,
                token: '',
                message: "User and Password Correct"
            }
            responseCallback(200, responseData);
        }        

    } catch (error) {
       results = error;
       responseCallback(400, results);
    }
}



function registerHandler(requestData, responseCallback){
    let DBHandler = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',  
        password: 'vBnmb56_',
        database: 'mydb',
    });
   
   try {       
        DBHandler.connect((error) => {
            if (error) {
             console.error("Error to connect DB: ", error);
            } else {
             console.log("Success connection to DB!");
            }
        });
        
        let userData = {
            'nickname'  : requestData.nickname,
            'password'  : requestData.password,
            'name'      : requestData.name,
            'surname'   : requestData.surname,
            'dni'       : requestData.dni,
            'phone'     : requestData.phone,
            'email'     : requestData.email
        };
        
        let queryResult;

        const queryParams = Object.values(userData)
        .map((value) => `'${value}'`)
        .join(", ");
        let name = `mp_CreateUser`; //-------------Modificar el procedimiento      
        const query = `CALL ${name}(${queryParams})`;

        DBHandler.query(query, (error, results) => {
            if (error) {
                console.error("QUERY ERROR:", error);
               return;
            }

            queryResult = results;  //esto es un json con un codigo y un mensaje

            console.log(queryResult);
   
            DBHandler.end();  
        });
         
        console.log(queryResult);

        responseCallback(200, queryResult.message);
    } catch (error) {
        console.log("Error");
        results = error;
        responseCallback(400, results);
    }            
}

module.exports = {registerHandler, signInHandler};
