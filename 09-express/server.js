var express = require('express');
var bodyParser = require('body-parser');

let fs = require('fs');
var app = express();

app.set('view engine', 'ejs');
// Middelware
app.use('/assets', express.static('public'));

//  truyen du lieu theo phuong thuc POST
var urlTest =  bodyParser.urlencoded({extended: false});

app.get('/', (req, res) => {
    //res.send('Hello World');
    res.render('index');
});

// params
app.get('/contact/:userid/send/:content', (req, res) => {
    res.send(`This id user ${req.params.userid} with content ${req.params.content}`);
});

// file duoi .ejs thì dùng render
app.get('/register/:username', (req, res) => {
    var info = {
        name: 'Danh',
        age: 22,
        hobbies: ['book', 'game', 'movie']
    }
    res.render('register', {username: req.params.username, infomation: info});
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.post('/contact', urlTest, (req, res) => {
    console.log(req.body);
    res.render('contact-success', {data: req.body})
});

app.listen(8081);