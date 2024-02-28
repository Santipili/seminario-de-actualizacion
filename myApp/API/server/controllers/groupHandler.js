const mysql = require("mysql");

class groupHandler {
    constructor(){

    }

    create(groupName){
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


                    let name = `mp_CreateGroup`;  
                    const query = `CALL ${name}('${groupName}')`; 
                    
                    
                    dataBase.query(query, (error, results) => {
                        dataBase.end();  
                        if (error) {
                            console.error("QUERY ERROR:", error);
                            reject(error);
                        } 
                        else {
                            console.log(results);
                            const queryResult = results[0][0].success;          
                            resolve(queryResult);
                        }
                    });


                }
            });
        });

    }
    delete(groupName){ //devuelve booleano
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

                    let name = `mp_DeleteGroup`;  
                    const query = `CALL ${name}('${groupName}')`; 
                    
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
    update(groupToUpdate, newName){
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

                    let name = `mp_UpdateGroup`;  
                    const query = `CALL ${name}('${groupToUpdate}', '${newName}')`; 
                          
                    dataBase.query(query, (error, results) => {
                        dataBase.end();  
                        if (error) {
                            console.error("QUERY ERROR:", error);
                            reject(error);
                        } 
                        else {
                            const queryResult = results[0][0].success;            
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

                    let name = `mp_GetAllGroups`;  
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

    // getGroupAcces(){

    // }
    // validateAcces(){

    // }

}

module.exports = {groupHandler};