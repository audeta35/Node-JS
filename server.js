var http = require('http');
var server = http.createServer(function(request, response){

  response.end('helo node');
});

var port = 8000;
server.listen(port);

console.log('server berjalan di http://localhost:'+port);
