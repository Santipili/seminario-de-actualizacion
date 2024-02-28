const http = require('http');


class server {

    constructor(){
        this.handlers = [];    
        // this.headers = {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        //     "Access-Control-Allow-Headers": 
        //      "content-type, session-token, user-id",
        //     "Content-Type": "application/json",
        //   };
    }

    get(url,handlerReference){
        this.handlers['GET' + url] = handlerReference;
    }

    post(url, handlerReference){
        this.handlers['POST' + url] = handlerReference;        
    }

    start(port, host){
        const server = http.createServer((req, res) => {
            this.processRequire(req, res);
        })
          
        server.listen(port, host, () => {
            console.log('Server running at http://localhost:3000/');
        });            
    }
        
    processRequire(req, res){
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        // res.setHeader("Access-Control-Allow-Headers", "user-id");


        if (req.method === "OPTIONS") { 
            console.log(req.method);
            console.log("--------- OPTIONS ------------");   
            res.writeHead(204).end();
            return;
        }       

        let method = req.method;
        let url = req.url;
        const key = method + url;

        if (!this.handlers[key]) {
            console.log(key + " no encontrada ------------------");
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Eror 404. Ruta no encontrada");
            return;
        }
      
        // let method = req.method;
        // let url = req.url;
        // const key = method + url;
        
        // if (req.method === "OPTIONS") {    
        //     res.writeHead(204).end();
        //     return;
        // }
        // else {
        //     res.writeHead(200, this.headers);
        // }       

        // if (!this.handlers[key]) {
        //     res.writeHead(404, { "Content-Type": "text/plain" });
        //     res.end("Eror 404. Ruta no encontrada");
        //     return;
        // }


        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        console.log(body);
        
        req.on('end', () => {               
            const requestData = body ? JSON.parse(body) : {};

            this.handlers[key](requestData, (statusCode, responseData) => {
                res.writeHead(statusCode, { "Content-Type": "text/plain" });
                res.end(JSON.stringify(responseData));
            });
        });
    }
}
module.exports = {server};
    
            
                

    
                    
                        
                                        
                                        
                                        
                
  

