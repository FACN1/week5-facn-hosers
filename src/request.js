var request = require('request');
const keys = require('./keys');
// API urls
var urlApixu = 'http://api.apixu.com/v1/current.json?key=' + keys.apixuKey + '&q=London';
var urlTFL = 'https://api.tfl.gov.uk/road?app_id=' + keys.tflAppid + '&app_key=' + keys.tflKey;
var urlNews = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=' + keys.newsKey;
// send a request to the API url
request(urlNews, function (error, response, body) {
  console.log('error:', error); // log the error if one occurred
  console.log('statusCode:', response && response.statusCode); // log the response status code if a response was received
  console.log('body:', JSON.parse(body)); // log the body of the request.
});
