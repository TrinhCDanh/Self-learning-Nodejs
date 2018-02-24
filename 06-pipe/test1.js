let http = require('http');
let fs = require('fs');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var readalbe = fs.createReadStream(__dirname + "/readMe.txt", 'utf8');
//     readalbe.pipe(res);
// }).listen(8080);

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var readalbe = fs.createReadStream(__dirname + "/index.html", 'utf8');
    readalbe.pipe(res);
}).listen(8080);

console.log('Server is running');