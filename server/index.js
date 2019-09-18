var express = require('express');
var app = express();
const PORT = 3000;
app.get('/', function(req, res) {
    res.send('Hola mundo desde el sena chasdfasdfasdfinazo');
});
app.listen(3000, function() {
    console.log(`Server running at port ${PORT}`);
});

app.route('/users')

.get(function(req, res) {

        res.json({ user: 'tobi' });
    })
    .post(function(req, res) {
        res.send('Add a book')
    })
    .put(function(req, res) {
        res.send('Update the book')
    })