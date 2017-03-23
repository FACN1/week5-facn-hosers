var renderModule = (function(){
  function renderFeed(responseObject){

    var newsContainer = document.getElementById('news-container');
    var roadContainer = document.getElementById('road-container');
    var weatherContainer = document.getElementById('weather-container');


    var oldUL = document.getElementById('newslist');
    var newUL = document.createElement('ul');
    newUL.id = oldUL.id
    var articlesArray = responseObject.news.articles;
    articlesArray.forEach(function(article){
      var liNode = document.createElement('li');//<li>
      var linkNode = document.createElement('a');//<a>
      linkNode.setAttribute('href', article.url);//< a href = ""></a>
      linkNode.textContent = article.description;//< a href>LINK TEXT</a>
      liNode.appendChild(linkNode);
      newUL.appendChild(liNode);
    })

    var oldULR = document.getElementById('roadlist');
    var newULR = document.createElement('ul');
    newULR.id = oldULR.id
    var roadArray = responseObject.road;
    roadArray.forEach(function(road){
      var liNode = document.createElement('li');
      liNode.textContent = road.displayName +': '+ road.statusSeverity;
      newULR.appendChild(liNode);
    })

    var oldULW = document.getElementById('weatherlist');
    var newULW = document.createElement('ul');
    newULW.id = oldULW.id
    var weatherLoc = document.createElement('h3')
    weatherLoc.textContent = responseObject.weather.location.name + ": \n" //<h3> location name: /n</h3>
    newULW.appendChild(weatherLoc)
    var weatherObj = responseObject.weather.current;
    for(var key in weatherObj){
      if(!weatherObj.hasOwnProperty(key)) continue;
      var liNode = document.createElement('li');
      liNode.textContent = key +': '+ weatherObj[key];
      newULW.appendChild(liNode);
    }

    //replace old UL elements with newly populated ones above
    newsContainer.replaceChild(newUL,oldUL);
    roadContainer.replaceChild(newULR,oldULR);
    weatherContainer.replaceChild(newULW,oldULW)


    // var weatherSection = document.createElement('section');
    // weatherSection.className = 'weather-container';
    // var weatherH2 = document.createElement('h2').textContent = 'WEATHER';
    // var weatherList = document.createElement('ul');

    //oldFeed.parentNode.replaceChild(newFeed, oldFeed);

  }
  return {
    renderFeed: renderFeed
  }
}());
