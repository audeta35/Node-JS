var http = require('http');
var url = require('url');
var moment = require('moment');
var server = http.createServer(function(request, response){
  response.writeHead(200, { 'Content-Type': 'text/html' });
  var q = url.parse(request.url, true).query;
  var txt = 'Kata kunci: ' + q.keyword;
  response.end(txt);
});

var port = 8000;
server.listen(port);

console.log('server berjalan di http://localhost:'+port+' pada waktu '+moment().format('D MMMM YYYY, h:mm:ss a'));
