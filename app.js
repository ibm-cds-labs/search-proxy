var request = require('request');
var port = require('cfenv').getAppEnv().port;
require('http').createServer(function(req, res) {
  if (req.url.indexOf("/search") == 0) {
    request.get(process.env.CLOUDANT_HOST + "/devcenter/_design/search/_search" + req.url, function(e,r,body) {
      res.writeHead(200, { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" } );
      res.end(body); 
    });
  } else {
    res.end("");
  }
}).listen(port);
console.log('Listening on port', port);
