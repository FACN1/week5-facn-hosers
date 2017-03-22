# week5-facn-hosers 
[![Build Status](https://travis-ci.org/FACN1/week5-facn-hosers.svg?branch=master)](https://travis-ci.org/FACN1/week5-facn-hosers)

Repo for FAC'N Hoser's Feeeeed project

# Instructions for local installation

1. Clone this repo
2. Run npm install
3. Create a keys.js file in src (load with keys provided on gitter)
4. In src/handler.js uncomment line 3
5. Run npm start and direct your browser to local host 4000

# User stories

> I am a user who wants to read the latest news stories from London, Find out about road closures, and the current weather.

# Basic interface

1. User directs to page
2. Auto loads the 3 feeds
  - Stretch goal, can click to refresh individual feeds
  - Stretch goal, auto updates

# Code Logic / Psuedo Code

1. Go to page (Client making a request to the server for url = "/")->
  - For "/" route:
    - Server serves the index.html which makes a request for main.js
    - main.js makes a request to the server for all the feeds.
      - for each feed, server gets a response (object) from each.
      - From the three responses, make one object to send back to main.js
    - main.js then takes the response, renders each column - do this with a callback or parallel to make sure all renders at the same time
     - make one render function that takes an object of the 3 feeds:
      - this function then calls another individual render function for each feed
```js
      function Renderallthree({object of each response})){
        renderfeed1(response1)
        renderfeed2(response2)
        renderfeed3(response3)
      }
 ```
   - Stretch goals : refresh each feed individual, refresh some automatically

# File Structure

- public
  - index.html
  - assets
    - main.css
    - main.js
    - Other js files
  - tests
    - test.html
    - clienttests.js
- src
  - server.js *start run the server from here with a start function*
  - handler.js
  - routes.js
  - request.js *module with which to make requests*
  - test
    - servertests.js
    - *Use shot injection to test our routes*
    - *Use tape to test any functions*
    - *try and set up code coverage*
    -*link to Travis*


# Potential API's

- Apixu Weather
- NewsApi.org
- London TFL

We don't want to have to render anything too complicated ATM, so basically a list of the latest weather/news stories/road closures would be good to be able to receive.

#To dos:
- [x] Make skeleton files
- [x] Investigate API's
- [x] Work out how to make requests using request.module
- [x] Set up basic server modules mainly the routes
 - [x] one to deal with home 
 - [ ]assets
 - [ ] one to deal with making the requests from the main.js
 - [ ] test with shot
- [ ] Use client side JS to make a request straight away
- [x] link git to travis

#SYNTAX
```js
//Comment as we go, comment should refer to line below
//No spaces on functions between args and {
//camelCaseVariables
var syntaxFunc = function(arg1, arg2){
  //TWO SPACE TABBING
  var quotes = 'single quotes'; //use semicolons
  if(this){
    that;
  }
  else{
    this;
  }
  //No blank lines before or after logic in functions, but should use one to space out code when logically appropriate (maybe add a comment!)
}
```
