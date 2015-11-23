var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshint_stylish = require('jshint-stylish');

gulp.task('jshint', function() {
	gulp.src('./routes/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(jshint_stylish));
});
gulp.task('watch', function () {
    return gulp.watch('./routes/*.js', ['jshint']);
});
