var http = require('http');
var moment = require('moment');
var salam = require('./salam');
var server = http.createServer(function(req, res){

  res.writeHead(200, {'Content-Type':'text/html'});
  res.write('helo node');
  res.end();
});

var port = 8000;
server.listen(port);

console.log(salam.salamPagi());

console.log('server berjalan di http://localhost:'+port+' pada waktu '+moment().format('D MMMM YYYY, h:mm:ss a'));
