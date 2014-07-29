var gutil = require('gulp-util');
var gulp = require('gulp');
var util = require('../util');

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['browserify']);

  gulp.watch('./assets/**/*.js', ['vulcanize']);
});
