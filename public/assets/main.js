var requestModule = (function(){
  function makeRequest(method, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if(xhr.readyState == 4 && xhr.status === 200){
        callback(JSON.parse(xhr.responseText));
      }
      else if(xhr.status === 404){
        console.log(new Error('page not found..'));
      }
    }
    xhr.open(method,url);
    xhr.send();
  }
  return{
    makeRequest: makeRequest
  }
})();

requestModule.makeRequest('GET', '/requestAPIS', renderModule.renderFeed);
