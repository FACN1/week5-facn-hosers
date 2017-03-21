const tape = require('tape');
const shot = require('shot');
const router = require('../routes.js');

tape('initialize', function(t){
  t.ok(router, 'router exists');
  t.end();
});
