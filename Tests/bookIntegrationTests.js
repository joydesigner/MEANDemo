/**
 * Created by zhengxin on 10/07/2016.
 */
var should = require('should');
var request = require('supertest');

var app = ('../app.js');
var mongoose = require('mongoose');
var Book = require('../models/bookModel');
var BookModel = mongoose.model('Book');
var agent = request.agent(app);

describe('Book Crud Test', function () {
	it('Should allow a book to be posted and return a read and _id', function (done) {
		var bookPost = {
			title: 'New Book',
			author: 'Jason',
			genre: 'Fiction'
		};

		agent.post('/api/books')
			.send(bookPost)
			.expect(200)
			.end(function (err, results) {
				results.body.read.should.equal(false);
				results.body.should.have.property('_id');
				done();
			});

		afterEach(function (done) {
			BookModel.remove().exec();
			done();
		});
	});
});