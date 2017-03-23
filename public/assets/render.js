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
      var liNode = document.createElement('li');
      var linkNode = document.createElement('a');
      linkNode.setAttribute('href', article.url);
      linkNode.innerHTML = article.description;
      liNode.appendChild(linkNode);
      newUL.appendChild(liNode);
    })

    var oldULR = document.getElementById('roadlist');
    var newULR = document.createElement('ul');
    newULR.id = oldULR.id
    var roadArray = responseObject.road;
    roadArray.forEach(function(road){
      var liNode = document.createElement('li');
      liNode.innerHTML = road.displayName +': '+ road.statusSeverity;
      newULR.appendChild(liNode);
    })

    var oldULW = document.getElementById('weatherlist');
    var newULW = document.createElement('ul');
    newULW.id = oldULW.id
    var weatherLoc = document.createElement('h3')
    weatherLoc.innerHTML = responseObject.weather.location.name + ": \n"
    newULW.appendChild(weatherLoc)
    var weatherArray = responseObject.weather.current;
    for(var key in weatherArray){
      if(!weatherArray.hasOwnProperty(key)) continue;
      var liNode = document.createElement('li');
      liNode.innerHTML = key +': '+ weatherArray[key];
      newULW.appendChild(liNode);
    }


    newsContainer.replaceChild(newUL,oldUL);
    roadContainer.replaceChild(newULR,oldULR);
    weatherContainer.replaceChild(newULW,oldULW)


    // var weatherSection = document.createElement('section');
    // weatherSection.className = 'weather-container';
    // var weatherH2 = document.createElement('h2').innerHTML = 'WEATHER';
    // var weatherList = document.createElement('ul');

    //oldFeed.parentNode.replaceChild(newFeed, oldFeed);

  }
  return {
    renderFeed: renderFeed
  }
}());
