var dataFromEndpointLoaded,
    getDataFromEndpoint,
    getVideosFromPortfolio,
    cache = {};

dataFromEndpointLoaded = function(xhr, callback) {
  var data;

  try {
    data = JSON.parse(xhr.response);
  } catch (error) {
    console.error(error);
  }

  callback(data.data);
};

getDataFromEndpoint = function(endpoint, callback) {
  if (cache[endpoint])
    return callback(cache[endpoint]);

  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', dataFromEndpointLoaded.bind(window, xhr, function(data) {
    cache[endpoint] = data;
    callback(cache[endpoint]);
  }));

  xhr.open('get', 'https://api.vimeo.com/me/' + endpoint + '?page=1&per_page=50&sort=date&direction=desc');
  xhr.setRequestHeader('Accept', 'application/vnd.vimeo.*+json;version=3.2');
  xhr.setRequestHeader('Authorization', 'bearer 339c8bb892a6729db7e7b89c6f56c588');
  xhr.send();
};

getVideosFromPortfolio = function(portfolio, callback) {
  var endpoint = 'portfolios/' + portfolio + '/videos';

  getDataFromEndpoint(endpoint, callback);
};

module.exports = {
  getVideosFromPortfolio: getVideosFromPortfolio
};
