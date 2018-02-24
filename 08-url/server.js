let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {
    console.log('You are on clicking: ' + req.url);
    if (req.url === "/home" || req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + "/index.html", 'utf8').pipe(res);
    } else if (req.url === "/login") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + "/login.html", 'utf8').pipe(res);
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + "/_404.html", 'utf8').pipe(res);
    }
}).listen(8080);

console.log('Server is running');