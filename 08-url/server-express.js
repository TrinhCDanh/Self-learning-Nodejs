var express = require('express');
let fs = require('fs');
var app = express();

app.get('/', (req, res) => {
    //res.send('Hello World');
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + "/index.html", 'utf8').pipe(res);
});

app.listen(8080);