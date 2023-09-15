const mysql = require("mysql");

class userController {
    constructor(DBReference){
      this.dataBase = DBReference;

    }

    createUser(userData){
        console.log('creando usuario');

        let dataBase = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',  
            password: 'vBnmb56_',
            database: 'mydb',
        });

        dataBase.connect((error) => {
            if (error) {
             console.error("Error to connect DB: ", error);
            } else {
             console.log("Success connection to DB!");
            }
        });

        let queryResult;

        const queryParams = Object.values(userData)
             .map((value) => `'${value}'`).join(", ");

        let name = `mp_CreateUser`;  
        const query = `CALL ${name}(${queryParams})`;

        dataBase.query(query, (error, results) => {
            if (error) {
                console.error("QUERY ERROR:", error);
               return;
            }
            queryResult = results;     
            dataBase.end();  
        });

        return 

    }
    deleteUser(){

    }
    updateUser(){

    }
    getUserCompleteData(){

    }
    getUserContact(){

    }
    getUserGroup(){

    }

    async validateUser(userNickName, userPassword){
        console.log('validando usuario');
        
        let dataBase = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',  
            password: 'vBnmb56_',
            database: 'mydb',
        });


        return new Promise((resolve, reject) => {

            dataBase.connect((error) => {
                if (error) {
                    console.error("Error to connect DB: ", error);
                    reject(error);
                } else {
                    console.log("Success connection to DB!");

                    let name = `mp_ValidateUser`;  
                    const query = `CALL ${name}('${userNickName}', '${userPassword}')`;
            
                    dataBase.query(query, (error, results) => {
                        dataBase.end();  

                        if (error) {
                            console.error("QUERY ERROR:", error);
                            reject(error);
                        } 
                        else {
                            const queryResult = results[0][0].result;            
                            resolve(queryResult);
                        }
                    });

                }
            });
        });



             
       
    }

    
}

module.exports = {userController};