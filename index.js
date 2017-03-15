var express = require('express')
var app = express()

  
var items = [25, 26, 27, 28, 29]; 
var randomItem = function randomItem(items) {  
    
	return items[Math.floor(Math.random()*items.length)];  
       
}  

var data = {
  payload: {
	temp: randomItem(items),
	humidity: randomItem(items)
  },
  id: "2017:03:14:08:01:22"
};

var arrays = [data];

app.get('/data', function (req, res) {
	arrays.push({
	  payload: {
		temp: randomItem(items),
		humidity: randomItem(items)
	  },
	  id: "2017:03:14:08:01:22"
	});
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
	headers: {
		'Access-Control-Allow-Origin': "*",
		'Access-Control-Allow-Credentials': true
},
statusCode: 200,
body: arrays
}));
	


});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});