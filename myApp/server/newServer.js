const http = require('http');
const mysql = require("mysql");
// const url = require('url');
// const { modelServer } = require('./model/model.js');
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
            user: 'root',  // Cambiar esto!!!!
            password: 'vBnmb56_',
            database: 'mydb',
        });

        DBHandler.connect((error) => {
            if (error) {
              console.error("Error to connect DB: ", error);
            //   reject(error);
            } else {
              console.log("Success connection to DB!");
            //   resolve();
            }
        });

        const query = `CALL mp_GetAllUsers()`;

        DBHandler.query(query, (error, results) => {
            if (error) {
              console.error("QUERY ERROR:", error);
              return;
            }        
            
            // El resultado contiene un array de arrays con los datos
            const nombresClientes = results[0].map(row => row.nombre_cliente);
            // Muestra los nombres de los clientes en el console.log
            console.log('Nombres de clientes:', nombresClientes);

            let requestData = '';
            req.on('data', (chunk) => {
                requestData += chunk;
            });

            req.on('end', () => {
                const data = nombresClientes;
    
                res.writeHead(200, {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                });
    
                res.end(JSON.stringify(data));
                console.log('POST method');
            });
            
            DBHandler.end();
        });


    
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Eror 404. Ruta no encontrada");
    };
  
}

// const server = http.createServer(processRequire);
const server = http.createServer((req, res) => {
    processRequire(req, res);
  });
  
server.listen(PORT, hostname, () => {
    console.log('Server running at http://localhost:3000/');
  });