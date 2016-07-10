/**
 * Created by zhengxin on 8/07/2016.
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Book = require('./models/bookModel');

var db;
if(process.env.ENV == 'Test') {
	 db = mongoose.connect('mongodb://localhost/libraryApp_test');
} else {
	 db = mongoose.connect('mongodb://localhost/libraryApp');
}

var app =  express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

bookRouter = require('./Routes/bookRoutes')(Book);
// authorRouter = require('./Routes/authorRoutes')(Author);
app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get('/', function (req, res) {
	res.send('Welcome to api');
});

app.listen(port, function () {
	console.log('running on port: ' + port);
});

module.exports = app;