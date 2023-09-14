const http = require('http');


class server {

    constructor(){
        this.handlers = [];

        this.hostname = 'localhost'
        
    }

    get(url,handlerReference){
        this.handlers['GET' + url] = handlerReference;

    }

    post(url, handlerReference){
        this.handlers['POST' + url] = handlerReference;        
    }



    start( port){
            
            const server = http.createServer((req, res) => {
                this.processRequire(req, res);
              })
              
            server.listen(port, this.hostname, () => {
                console.log('Server running at http://localhost:3000/');
              });
    }


    processRequire(req, res){
        //CORS
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type")

        if (req.method === "OPTIONS") {    
            res.writeHead(204).end();
        }
       

        let method = req.method;
        let url = req.url;
        const key = method + url;

    
        if (!this.handlers[key]) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Eror 404. Ruta no encontrada");
        }
    
      
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        
        
        req.on('end', () => {               

            const requestData = body ? JSON.parse(body) : {};

            this.handlers[key](requestData, (statusCode, responseData) => {
                res.writeHead(statusCode, { "Content-Type": "text/plain" });
                res.end(JSON.stringify(responseData))                 
                           
            });      
 
        });
    }
}
module.exports = {server};
    
            
                
                    
                        // query = `CALL mp_GetAllUsers()`; //-------------SELECT `nick_names` from `user`;                        
                        // DBHandler.query(query, (error, results) => {
                        //     if (error) {
                        //         console.error("QUERY ERROR:", error);
                        //         return;
                        //     }                                    
                        //     const nombresClientes = results[0].map(row => {
                        //         return { nick_name: row.nick_name };
                        //     });    
                        //     res.writeHead(200, {
                        //         "Content-Type": "application/json",
                        //         "Access-Control-Allow-Origin": "*",
                        //     });                
                        //     res.end(JSON.stringify(nombresClientes));           
                        //     DBHandler.end();
                        // });

                        
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////// Handlers //////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    
                    
                        
                                        
                                        
                                        
                
  

