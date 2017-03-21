const fs = require('fs');
const path = require('path');

function homeHandler(req, res){
  var filePath = path.join(__dirname, '..', 'public/index.html');
  fs.readFile(filePath, function(error, file){
    if (error){
      console.log(error);
    }
    else{
      res.writeHead(200, {'content-type': 'text/html'});
      res.end();
    }
  })
}

function errorHandler(req, res){
  res.writeHead(404, {'content-type': 'text/plain'});
  res.end('page not found');
}

module.exports = {
  homeHandler: homeHandler,
  errorHandler: errorHandler
}
