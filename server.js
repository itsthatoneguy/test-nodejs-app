var http = require('http');
var os = require('os');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("hostname: " + os.hostname() + "\n");
  res.write("platform: " + os.platform() + "\n");
  res.end("yep\n");
}).listen(80, '0.0.0.0');
