var gulp = require('gulp'),
    babel = require('gulp-babel'),
    gulpack = require('gulp-webpack'),
    webpack = require('webpack'),
    concat = require('gulp-concat'),
    less = require('gulp-less');

gulp.task('babel', function() {
  return gulp.src('src/*.js')
    .pipe(babel({
      presets: ['react', 'es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('webpack', function() {
	gulp.src('src/*.js')
		.pipe(gulpack( require('./webpack.config.js'), webpack))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['babel']);