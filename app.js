var request = require('request');
require('http').createServer(function(req, res) {
  if (req.url.indexOf("/search") == 0) 
    request.get("https://d14f43e9-5102-45bc-b394-c92520c2c0bd-bluemix.cloudant.com/devcenter/_design/search/_search" + req.url, function(e,r,body) {
      res.writeHead(200, { "Access-Control-Allow-Origin": "*" } );
      res.end(body); 
    });
}).listen(require('cfenv').getAppEnv().port);
