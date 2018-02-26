var express = require('express');
let fs = require('fs');
var app = express();

app.get('/', (req, res) => {
    //res.send('Hello World');
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + "/index.html", 'utf8').pipe(res);
});

// params
app.get('/contact/:userid/send/:content', (req, res) => {
    res.send(`This id user ${req.params.userid} with content ${req.params.content}`);
});

app.listen(8080);