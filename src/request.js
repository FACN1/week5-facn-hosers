const request = require('request');
const urls = require('./urls'); //API URL's

// send a request to the API url's
function weatherRequest(callback){
  request(urls.weatherAPI, function(error, response, body){
  if(error){
    console.log('error: ', error);// log the error if one occurred
  }
  var weather =  JSON.parse(body);
  callback(null, weather);
})
};
function roadRequest(callback){
  request(urls.roadsAPI, function(error, response, body){
  if(error){
    console.log('error: ', error);// log the error if one occurred
  }
  var road =  JSON.parse(body);
  callback(null, road)
})
};
function newsRequest(callback){
  request(urls.newsAPI, function(error, response, body){
  if(error){
    console.log('error: ', error);// log the error if one occurred
  }
  var news =  JSON.parse(body);
  callback(null, news)
})
};
// var roads = request(urls.roadsAPI, function(error, response, body){
//   if(error){
//     console.log('error: ', error);// log the error if one occurred
//   }
//
//   var JSONres = JSON.parse(body);
//   return JSONres
// });
//
// var news = request(urls.newsAPI, function(error, response, body){
//   if(error){
//     console.log('News error: ', error);// log the error if one occurred
//   }
//   var JSONres = JSON.parse(body);
//   return JSONres
// });

module.exports = {
  weatherRequest: weatherRequest,
  roadRequest: roadRequest,
  newsRequest: newsRequest,
}
