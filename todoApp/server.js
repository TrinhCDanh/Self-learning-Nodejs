const express = require('express');
var module = require('./controllers/todoController');

const app = express();

// set engine
app.set('view engine', 'ejs');

// tạo đương dẫn static
app.use(express.static('./public'));

app.listen(8080);

// controller 
module.todo(app);

console.log('Server is running');