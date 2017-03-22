const keys = require('./keys');

var weatherAPI = 'http://api.apixu.com/v1/current.json?key=' + keys.weather + '&q=London';
var roadsAPI = 'https://api.tfl.gov.uk/road?app_id=' + keys.roadsID + '&app_key=' + keys.roads;
var newsAPI = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=' + keys.news;

module.exports = {
    weatherAPI: weatherAPI,
    roadsAPI: roadsAPI,
    newsAPI: newsAPI
  }
