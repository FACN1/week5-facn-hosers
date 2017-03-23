const keysObj = {
  roads:process.env.API_KEY_1,
  roadsID:process.env.API_KEY_2,
  weather:process.env.API_KEY_3,
  news:process.env.API_KEY_4
}
console.log(keysObj.news);
if (keysObj.news){
  var keys = keysObj;
}
else{
  var keys = require('./keys')
}


var weatherAPI = 'http://api.apixu.com/v1/current.json?key=' + keys.weather + '&q=London';
var roadsAPI = 'https://api.tfl.gov.uk/road?app_id=' + keys.roadsID + '&app_key=' + keys.roads;
var newsAPI = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=' + keys.news;

module.exports = {
    weatherAPI: weatherAPI,
    roadsAPI: roadsAPI,
    newsAPI: newsAPI
  }
