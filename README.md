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
