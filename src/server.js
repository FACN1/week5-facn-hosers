const http = require('http');
const handler = require('./handler.js');
const router = require('./routes.js');

const server = http.createServer(router);

var options = {
  port: 4000
}

function startServer(server, options){
  server.listen(options.port, function(error){
    if (error){
      console.log(error);
    }
    else{
      console.log('Server is listening on port ',options.port);
    }
  })
}

startServer(server, options);
