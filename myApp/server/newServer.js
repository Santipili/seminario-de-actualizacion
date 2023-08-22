const http = require('http');
const mysql = require("mysql");

let hostname = 'localhost'
let PORT = 3000 

function processRequire(req, res){
    //CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    if (req.method === "OPTIONS") {

        res.writeHead(204).end();

    } else if (req.method === "POST") {

        let DBHandler = mysql.createConnection({
            host: hostname,
            port: 3306,
            user: 'root',  
            password: 'vBnmb56_',
            database: 'mydb',
        });

        DBHandler.connect((error) => {
            if (error) {
              console.error("Error to connect DB: ", error);
            } else {
              console.log("Success connection to DB!");
            }
        });

        const query = `CALL mp_GetAllUsers()`; //-------------SELECT `nick_names` from `user`;

        DBHandler.query(query, (error, results) => {
            if (error) {
              console.error("QUERY ERROR:", error);
              return;
            }        

            const nombresClientes = results[0].map(row => {
                return { nick_name: row.nick_name };
            });
            
            let requestData = '';
            req.on('data', (chunk) => {
                requestData += chunk;
            });
    
            req.on('end', () => {              
                res.writeHead(200, {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                });
    
                res.end(JSON.stringify(nombresClientes));                
            });

            DBHandler.end();
        });
    
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Eror 404. Ruta no encontrada");
    };
  
}


const server = http.createServer((req, res) => {
    processRequire(req, res);
  });
  
server.listen(PORT, hostname, () => {
    console.log('Server running at http://localhost:3000/');
  });