var renderModule = (function(){
  function renderFeed(responseObject){
    var oldFeed = document.getElementById('feedContainer');

    var newFeed = document.createElement('main');

    newFeed.className = oldFeed.className;
    newFeed.id = oldFeed.id;

    var newsSection = document.createElement('section');
    newsSection.className = 'news-container';
    var newsH2 = document.createElement('h2')
    newsH2.innerHTML = 'NEWS'
    var newsList = document.createElement('ul');
    var articlesArray = responseObject.news.articles;
    articlesArray.forEach(function(article){
      var liNode = document.createElement('li');
      var linkNode = document.createElement('a');
      linkNode.setAttribute('href', 'article.url');
      linkNode.innerHTML = article.description;
      liNode.appendChild(linkNode);
      newsList.appendChild(liNode);
    })
    newsSection.appendChild(newsH2);
    newsSection.appendChild(newsList);
    newFeed.appendChild(newsSection);


    var roadsSection = document.createElement('section');
    roadsSection.className = 'traffic-container';
    var roadsH2 = document.createElement('h2').innerHTML = 'TRAFFIC';
    var roadsList = document.createElement('ul');


    var weatherSection = document.createElement('section');
    weatherSection.className = 'weather-container';
    var weatherH2 = document.createElement('h2').innerHTML = 'WEATHER';
    var weatherList = document.createElement('ul');

    oldFeed.parentNode.replaceChild(newFeed, oldFeed);

  }
  return {
    renderFeed: renderFeed
  }
}());
