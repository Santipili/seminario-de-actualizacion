const { server } = require('./server/server.js');
const { signInHandler } = require('./server/controllers/requestHandler.js');
const { registerHandler } = require('./server/controllers/requestHandler.js');
const {requestHandler} = require('./server/requestHandler/requestHandler.js');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

function startAPI() {  
  const api = new server();

  // api.post('/user/signIn',   signInHandler);

  // api.post('/user/register', registerHandler);  

  api.post('/user/signIn', requestHandler.signIn);

  api.post('/user/register', requestHandler.registerUser); 
  api.post('/user/delete', requestHandler.deleteUser);
  api.post('/user/edit', requestHandler.editUser);
  api.post('/user/getList', requestHandler.listUsers);

  api.post('/group/add', requestHandler.newGroup);
  api.post('/group/delete', requestHandler.deleteGroup);
  api.post('/group/edit', requestHandler.editGroup);
  api.post('/group/getList', requestHandler.listGroups);

  api.start(PORT,HOST);
}

startAPI();

