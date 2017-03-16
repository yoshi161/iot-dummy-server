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
  id: "0"
};

var arrays = [data];
var id = 1;
var rightNow = new Date();
var now = rightNow.toISOString().slice(0,10).replace(/-/g,"");

app.get('/data', function (req, res) {
	arrays.push({
	  payload: {
		temp: randomItem(items),
		humidity: randomItem(items)
	  },
	  id: id+""
	});
	id++;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify({body:arrays}));

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});