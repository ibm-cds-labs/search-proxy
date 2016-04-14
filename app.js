require('http').createServer(function(req, res) {
  if (req.url.indexOf("/search") == 0) 
    return require('request')("https://d14f43e9-5102-45bc-b394-c92520c2c0bd-bluemix.cloudant.com/devcenter/_design/search/_search" + req.url).pipe(res);
  res.end("");
}).listen(require('cfenv').getAppEnv().port);
