var requestModule = (function(){
  function makeRequest(method, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status === 200){
        callback(null,JSON.parse(xhr.responseText));
      }
    }
    xhr.open(method,url);
    xhr.send();
  }
  return{
    makeRequest: makeRequest
  }
})();

requestModule.makeRequest('GET', '/requestAPIS', console.log);
