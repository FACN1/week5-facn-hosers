const fs = require('fs');
const path = require('path');
const ourrequest = require('./request');
const async = require('async')


var extensionType = {
    'js': 'application/javascript',
    'css': 'text/css'
  }
//Create homeHandler function for '/' route
function homeHandler(req, res){
  var filePath = path.join(__dirname, '..', 'public/index.html');
  fs.readFile(filePath, function(error, file){
    if (error){
      console.log(error);
    }
    else{
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(file);
    }
  })
}

//Create handler for main.js and main.css
function assetsHandler(req, res){
  //Handler Variables
  var url = req.url;
  console.log(url);
  var extension = url.split('.')[1];
  var filePath = path.join(__dirname, '..', 'public', url);
  fs.readFile(filePath, function (err, file) {
    if (err) {
      console.log(err);
      return;
    }
    else{
      res.writeHead(200, {"content-type":extensionType[extension]});
      res.end(file);
    }
  })
}

//Create handler for API requests
function APIHandler(req, res){
  // call request module;
  res.writeHead(200, {'content-type': 'application/json'});

  async.parallel([
    ourrequest.weatherRequest,
    ourrequest.roadRequest,
    ourrequest.newsRequest
  ], function(err, results){
    var data = {
      weather: results[0],
      road: results[1],
      news: results[2]
    }
    res.end(JSON.stringify(data));
  })
}

//Create 404 handler
function errorHandler(req, res){
  res.writeHead(404, {'content-type': 'text/plain'});
  res.end('page not found');
}

module.exports = {
  homeHandler: homeHandler,
  assetsHandler: assetsHandler,
  APIHandler: APIHandler,
  errorHandler: errorHandler
}
