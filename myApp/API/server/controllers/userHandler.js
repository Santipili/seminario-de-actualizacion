const mysql = require("mysql");

class userHandler {
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

    delete(userID){

        let dataBase = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',  
            password: 'vBnmb56_',
            database: 'mydb',
        });
        // const queryParams = Object.values(userData)
        // .map((value) => `'${value}'`)
        // .join(", ");
        
        return new Promise((resolve, reject) => {
            dataBase.connect((error) => {
                if (error) {
                    console.error("Error to connect DB: ", error);
                    reject(error);
                } else {
                    console.log("Success connection to DB!");
                    let name = `mp_DeleteUser`;   
                    const query = `CALL ${name}(${userID})`;            
                    dataBase.query(query, (error, results) => {
                        dataBase.end();  
                        if (error) {
                            console.error("QUERY ERROR:", error);
                            reject(error);
                        } 
                        else {
                            const queryResult = results[0][0].success; 
                            console.log(queryResult);
                            resolve(queryResult);
                        }
                    });
                }
            });
        });


    }
    update(userData){

        let dataBase = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',  
            password: 'vBnmb56_',
            database: 'mydb',
        });
        const queryParams = Object.values(userData)
        .map((value) => value === null ? 'NULL' : `'${value}'`)
        .join(", ");
        
        return new Promise((resolve, reject) => {
            dataBase.connect((error) => {
                if (error) {
                    console.error("Error to connect DB: ", error);
                    reject(error);
                } else {
                    console.log("Success connection to DB!");
                    let name = `mp_UpdateUser`;   
                    const query = `CALL ${name}(${queryParams})`;            
                    dataBase.query(query, (error, results) => {
                        dataBase.end();  
                        if (error) {
                            console.error("QUERY ERROR:", error);
                            reject(error);
                        } 
                        else {
                            const queryResult = results[0][0].success; 
                            console.log(queryResult);
                            resolve(queryResult);
                        }
                    });
                }
            });
        });


    }
    list(){

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

                    let name = `mp_GetAllUsers`;   
                    const query = `CALL ${name}()`;            
                    dataBase.query(query, (error, results) => {
                        dataBase.end();  
                        if (error) {
                            console.error("QUERY ERROR:", error);
                            reject(error);
                        } 
                        else {
                            const queryResult = results[0]; 
                            resolve(queryResult);
                        }
                    });



                }
            });
        });


    }
    // getUserContact(){

    // }
    // getUserGroup(){

    // }

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

module.exports = {userHandler};