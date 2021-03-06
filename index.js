const static = require('node-static')

const file = new static.Server('./public');

require('http').createServer(function(req, res) {
  req.addListener('end', function() {
    file.serve(req, res);
    }).resume();
}).listen(process.env.PORT || 8080);