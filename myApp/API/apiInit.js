const { server } = require('./server/server.js');

const      { signInHandler } = require('./server/controllers/sessionController.js');
const    { registerHandler } = require('./server/controllers/sessionController.js');

function greet() {
  console.log("Welcome!!!");
}

function startAPI() {  
  const api = new server();

  // Login and Register...
  api.post('/signIn',   signInHandler);
  api.post('/register', registerHandler);
  api.get('/', greet);
  
  // getUserInfo...
  // api.post('/getUserInfo', callbackGetUserInfo);

  api.start(3000);
}

startAPI();

