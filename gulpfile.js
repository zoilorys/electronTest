var gulp = require('gulp'),
    gulpack = require('gulp-webpack'),
    webpack = require('webpack');

gulp.task('webpack', function() {
	gulp.src('src/*.js')
		.pipe(gulpack( require('./webpack.config.js'), webpack))
		.pipe(gulp.dest('dist'));
});

gulp.task('watcher', function() {
  gulp.watch('src/**/**/*.js', ['webpack']);
});

gulp.task('default', ['webpack']);
gulp.task('watch', ['default', 'watcher']);
