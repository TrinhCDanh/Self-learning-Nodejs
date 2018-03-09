var express = require('express');
let fs = require('fs');
var app = express();

app.set('view engine', 'ejs');
// Middelware
app.use('/assets', express.static('public'));

app.get('/', (req, res) => {
    //res.send('Hello World');
    res.sendFile(__dirname + "/index.html", 'utf8');
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

app.listen(8081);