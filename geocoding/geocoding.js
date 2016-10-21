var data = require('../places.json');
var MapboxClient = require('mapbox');
var client = new MapboxClient('pk.eyJ1IjoibWljaGFlbG5ldCIsImEiOiItbWFqc3BvIn0.iuqIsFSNd5Ut-5_1W4RR_g');

for (var i = 0; i < data.length; i++) {
  client.geocodeForward(data[i].name, function(err, res) {
    console.log(res);
  });
}


//console.log(data);

//fs.writeFile('lol' + i, data[i].name);
//fs = require('fs');