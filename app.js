var request = require('request');
var port = require('cfenv').getAppEnv().port;
require('http').createServer(function(req, res) {
  if (req.url.indexOf("/search") == 0) {
    request.get("https://d14f43e9-5102-45bc-b394-c92520c2c0bd-bluemix.cloudant.com/devcenter/_design/search/_search" + req.url, function(e,r,body) {
      res.writeHead(200, { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" } );
      res.end(body); 
    });
  } else {
    res.end("");
  }
}).listen(port);
console.log('Listening on port', port);
