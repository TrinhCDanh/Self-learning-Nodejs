var http = require('http');

// req: request của client
// res: response của server

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!!!!');
    res.write('XXX');
    res.end();
}).listen(8080);

