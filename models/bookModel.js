/**
 * Created by zhengxin on 8/07/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookModel = new Schema({
	title: {
		type: String
	},
	author: {
		type: String
	},
	genre: {
		type: String
	},
	read: {
		type: Boolean,
		default: false
	}
});

// var url = 'mongodb://localhost:27017/libraryApp';
// var db = mongoose.connect(url, function(err, db){
// 	var collection = db.collection('books');
//
// });
module.exports = mongoose.model('Book', bookModel);