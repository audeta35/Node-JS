var http = require('http');
var server = http.createServer(function(req, res){

  res.writeHead(200, {'Content-Type':'text/html'});
  res.write('helo <b>Node</b>');
  res.end();
});

var port = 8000;
server.listen(port);

console.log('server berjalan di http://localhost:'+port);
