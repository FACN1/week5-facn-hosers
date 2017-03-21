const handler = require('./handler.js');

var routes = {
  '/':handler.homeHandler,
  '404':handler.errorHandler
}

function router(req, res){
  if (routes[req.url]){
    routes[req.url](req, res);
  }
  else{
    routes[404](req, res);
  }
}

module.exports = router;
