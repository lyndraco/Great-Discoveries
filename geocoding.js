var data = require('./data.json');
var MapboxClient = require('mapbox');
var client = new MapboxClient('pk.eyJ1IjoibWljaGFlbG5ldCIsImEiOiItbWFqc3BvIn0.iuqIsFSNd5Ut-5_1W4RR_g');
client.geocodeForward('Chester, NJ', function(err, res) {
  console.log(res);
});
console.log(data);
