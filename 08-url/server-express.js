var express = require('express');
let fs = require('fs');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.send('Hello World');
    res.sendFile(__dirname + "/index.html", 'utf8');
});

// params
app.get('/contact/:userid/send/:content', (req, res) => {
    res.send(`This id user ${req.params.userid} with content ${req.params.content}`);
});

app.get('/register/:username', (req, res) => {
    res.render('register', {username: req.params.username});
});

app.listen(8080);