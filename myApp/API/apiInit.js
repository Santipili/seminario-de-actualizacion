const { server } = require('./server/server.js');
const { signInHandler } = require('./server/controllers/requestHandler.js');
const { registerHandler } = require('./server/controllers/requestHandler.js');

function startAPI() {  
  const api = new server();

  api.post('/signIn',   signInHandler);
  api.post('/register', registerHandler);

  api.start(3000);
}

startAPI();

