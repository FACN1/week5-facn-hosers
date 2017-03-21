const request = require('request');
const keys = require('./keys'); //API Key's
const urls = require('./urls'); //API URL's

// send a request to the API url's
var requests = (function(){
  var weather = request(urls.weatherAPI, function(error, response, body){
    console.log('error: ', error); // log the error if one occurred
    console.log('statusCode: ', response && response.statusCode); // log the response status code if a response was received
    console.log('body: ', JSON.parse(body)); // log the body of the request.
  });

  var roads = request(urls.roadsAPI, function(error, response, body){
    console.log('error: ', error); // log the error if one occurred
    console.log('statusCode: ', response && response.statusCode); // log the response status code if a response was received
    console.log('body: ', JSON.parse(body)); // log the body of the request.
  });

  var news = request(urls.newsAPI, function(error, response, body){
    console.log('error: ', error); // log the error if one occurred
    console.log('statusCode: ', response && response.statusCode); // log the response status code if a response was received
    console.log('body: ', JSON.parse(body)); // log the body of the request.
  });

  return{
    news: news,
    roads: roads,
    news: news
  }
})();

module.exports = requests;
