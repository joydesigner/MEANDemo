var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gulpMocha = require('gulp-mocha');
var env = require('gulp-env');
var supertest = require('supertest');

gulp.task('default', function () {
	nodemon({
		script: 'app.js',
		ext: 'js',
		env: {
			PORT: 8000
		},
		ignore: ['./node-modules/**']
	})
	.on('restart', function () {
		console.log('restarting the server...');
	});
});

gulp.task('test', function () {
	env({vars: {ENV: 'Tests'}});
	gulp.src('tests/*.js', {read: false})
		.pipe(gulpMocha({
			reporter: 'nyan'
		}));
});