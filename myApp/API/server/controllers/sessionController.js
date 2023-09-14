const mysql = require("mysql");

function signInHandler(requestData){
    
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
            'password'  : requestData.password
        };
        
        let queryResult;

        const queryParams = Object.values(userData)
        .map((value) => `'${value}'`)
        .join(", ");
        let name = `mp_GetAllGroups`; //-------------Modificar el procedimiento      
        const query = `CALL ${name}(${queryParams})`;

        DBHandler.query(query, (error, results) => {
            if (error) {
                console.error("QUERY ERROR:", error);
               return;
            }

            queryResult = results;  
   
            DBHandler.end();  
        });
         
        responseCallback(200, queryResult);
    } catch (error) {
       results = error;
       responseCallback(200, results);
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

        // let userHandler = new UserHandler(new DataBaseHandler());

        // (async () => {
            //   results = await userHandler.create(userData);
            //   await userHandler.dbhandler.close();           
            
            // })();