const tape = require('tape');
const shot = require('shot');
const router = require('../routes.js');
const path = require('path');
const fs = require('fs');

//Check router exists
tape('initialize', function(t){
  t.ok(router, 'router exists');
  t.end();
});

tape('Home Route', function(t){
  //Get a file to compare to in our tests:
  var filePath = path.join(__dirname, '../..', 'public/index.html')
  var indexFile = fs.readFileSync(filePath).toString();
  //Use shot inject to test home route
  shot.inject(router, {method: 'get', url:'/'}, function(res){
    t.equal(res.statusCode, 200, 'test that status code is 200');
    t.equal(res.payload, indexFile, 'Index.html was found');
    t.end();
  })
})

tape('Error Route', function(t){
  shot.inject(router, {method: 'get', url:'/error'}, function(res){
    t.equal(res.statusCode, 404, 'test that status code is 404');
    t.equal(res.payload, 'page not found', 'page was not found');
    t.end();
  })
})
