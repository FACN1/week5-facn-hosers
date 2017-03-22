const request = require('request');
const urls = require('./urls'); //API URL's

// send a request to the API url's
var requests = (function(){
  var weather = request(urls.weatherAPI, function(error, response, body){
    if(error){
      console.log('error: ', error);// log the error if one occurred
    }
    console.log('statusCode: ', response && response.statusCode); // log the response status code if a response was received
    var json = JSON.parse(body);
    console.log('body: ', json; // log the body of the request.
    return json;
  });

  var roads = request(urls.roadsAPI, function(error, response, body){
    if(error){
      console.log('error: ', error);// log the error if one occurred
    }    console.log('statusCode: ', response && response.statusCode); // log the response status code if a response was received
    var json = JSON.parse(body);
    console.log('body: ', json; // log the body of the request.
    return json;
  });

  var news = request(urls.newsAPI, function(error, response, body){
    if(error){
      console.log('error: ', error);// log the error if one occurred
    }    console.log('statusCode: ', response && response.statusCode); // log the response status code if a response was received
    var json = JSON.parse(body);
    console.log('body: ', json; // log the body of the request.
    return json;
  });

  return{
    news: news,
    roads: roads,
    news: news
  }
})();

module.exports = requests;
