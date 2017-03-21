# week5-facn-hosers
Repo for FAC'N Hoser's Feeeeed project

# User stories

> I am a user who wants to find out the latest news stories, Matt Gregory (@mantagen) latest tweets, and london travel information on one page

# Basic interface

1. User directs to page
2. Auto loads the 3 feeds
3. Can click to refresh individual feeds
  - Stretch goal, auto updates

# Code Logic / Psuedo Code

1. Go to page (Client making a request to the server for url = "/")->
  - For "/" route:
    - Server serves the index.html which makes a request for main.js
    - main.js makes a request to the server for all the feeds.
      - for each feed, server gets a response (object) from each.
      - From the three responses, make one object to send back to main.js
    - main.js then takes the response, renders each column - do this with a callback or parralel to make sure all renders at the same time
     - make one render function that takes an object of the 3 feeds:
      - this function then calls another individual render function for each feed
```js
      function Renderallthree({object of each response})){
        renderfeed1(response1)
        renderfeed2(response2)
        renderfeed3(response3)
      }
      ```
      -Stretch goals : refresh each feed individual, refresh some automatically

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


#Potential API's

- MG's Twitter
- A news feed
- A travel info feed (ideal one that updates a lot)

We don't want to have to render anything too complicated ATM, so basically a list of the latest tweets/new stories/train arrivals would be good to be able to receive.

#To dos:
- [ ] Make skeleton files
- [ ] Investigate API's and how to make requests using request.module

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
