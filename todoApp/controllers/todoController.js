var bodyParser  = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extended: false });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');

const Schema = mongoose.Schema;

var todoSchema = new Schema({
    item: String
});

var todoModel = mongoose.model('todo', todoSchema);

// var itemFirst = todoModel({ item: 'Study' }).save( (err) => {
//     if(err) throw err;
//     console.log('success');
// });

// var data = [
//     {item: 'play'},
//     {item: 'kiss'}
// ];

var todo = (app) => {
    // Show todo
    app.get('/todo', (req, res) => {
        todoModel.find({}, (err, data) => {
            if (err) throw err;
            res.render('todo', {todos: data});
        });
    });

    // Add todo
    app.post('/todo', urlEncoded, (req, res) => {
        var addTodo = todoModel(req.body).save( (err, data) => {
            if(err) throw err;
            res.json(data);
        });
    });

    // Remove todo
    app.delete('/todo/:item', (req, res) => {
        todoModel.find({ item: req.params.item.replace(/\-/g, " ")}).remove((err, data) => {
            if(err) throw err;
            res.json(data);
        });
    });
}
module.exports.todo = todo;