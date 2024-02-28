const mysql = require("mysql");

class userController {
    constructor(){

    }

    async createUser(userData){
        let dataBase = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',  
            password: 'vBnmb56_',
            database: 'mydb',
        });
        const queryParams = Object.values(userData)
        .map((value) => `'${value}'`)
        .join(", ");
        
        return new Promise((resolve, reject) => {
            dataBase.connect((error) => {
                if (error) {
                    console.error("Error to connect DB: ", error);
                    reject(error);
                } else {
                    console.log("Success connection to DB!");
                    let name = `mp_CreateUser`;   
                    const query = `CALL ${name}(${queryParams})`;            
                    dataBase.query(query, (error, results) => {
                        dataBase.end();  
                        if (error) {
                            console.error("QUERY ERROR:", error);
                            reject(error);
                        } 
                        else {
                            const queryResult = results[0][0]; 
                            resolve(queryResult);
                        }
                    });
                }
            });
        });
    }

    deleteUser(){

    }
    updateUser(){

    }
    getUserFullData(){

    }
    getUserContact(){

    }
    getUserGroup(){

    }

    async validateUser(userNickName, userPassword){   
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
                            const queryResult = results[0][0];            
                            resolve(queryResult);
                        }
                    });
                }
            });
        });            
    }

    
}

module.exports = {userController};