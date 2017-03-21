const handler = require('./handler.js');

//Create object containing our routes and their respective handlers
var routes = {
  '/':handler.homeHandler,
  '404':handler.errorHandler
}

//Router function to deal with the routes and pass to appropriate handler
function router(req, res){
  if (routes[req.url]){
    routes[req.url](req, res);
  }
  else{
    routes[404](req, res);
  }
}

module.exports = router;
