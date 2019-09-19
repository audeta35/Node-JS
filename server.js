var http = require('http');
var server = http.createServer(function (req, res) {

  res.end('Hai, selamat datang di server node js');
});

var port = 8000;

server.listen(port);

console.log('server berjalan di http://localhost:'+port);
