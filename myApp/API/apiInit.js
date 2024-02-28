const { server } = require('./server/server.js');
const { signInHandler } = require('./server/controllers/requestHandler.js');
const { registerHandler } = require('./server/controllers/requestHandler.js');

const {deleteUser } = require('./server/controllers/requestHandler.js');
const { editUser } = require('./server/controllers/requestHandler.js');
const {listUsers } = require('./server/controllers/requestHandler.js');
const { newGroup } = require('./server/controllers/requestHandler.js');
const { deleteGroup } = require('./server/controllers/requestHandler.js');
const { editGroup } = require('./server/controllers/requestHandler.js');
const {listGroup} = require('./server/controllers/requestHandler.js');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

function startAPI() {  
  const api = new server();

  api.post('/user/signIn',   signInHandler);
  api.post('/user/register', registerHandler);

  api.post('/user/delete', deleteUser);
  api.post('/user/edit', editUser);
  api.post('/user/getList', listUsers);

  api.post('/group/add', newGroup);
  api.post('/group/delete', deleteGroup);
  api.post('/group/edit', editGroup);
  api.post('/group/getList', listGroup);



  api.start(PORT,HOST);
}

startAPI();

