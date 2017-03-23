const request = require('request');
const urls = require('./urls'); //API URL's

// send a request to the API url's
function weatherRequest(callback){
  request(urls.weatherAPI, function(error, response, body){
  if(error){
    console.log('error: ', error);// log the error if one occurred
    return error
  }
  var weather =  JSON.parse(body);
  callback(null, weather);
})
};
function roadRequest(callback){
  request(urls.roadsAPI, function(error, response, body){
  if(error){
    console.log('error: ', error);// log the error if one occurred
    return error
  }
  var road =  JSON.parse(body);
  callback(null, road)
})
};
function newsRequest(callback){
  request(urls.newsAPI, function(error, response, body){
  if(error){
    console.log('error: ', error);// log the error if one occurred
    return error
  }
  var news =  JSON.parse(body);
  callback(null, news)
})
};

module.exports = {
  weatherRequest: weatherRequest,
  roadRequest: roadRequest,
  newsRequest: newsRequest,
}
