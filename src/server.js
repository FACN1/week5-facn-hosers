const http = require('http');
const handler = require('./handler.js');
const router = require('./routes.js');
//create a server object
const server = http.createServer(router);
//options object to pass when we start the server
var options = {
  port: 4000
}
// create a start server function that takes a server and an options object which contains the port number, tells the server to start listening at that port
function startServer(serv, opt){
  serv.listen(opt.port, function(error){
    if (error){
      console.log(error);
    }
    else{
      console.log('Server is listening on port ',opt.port);
    }
  })
}
//call the function
startServer(server, options);
