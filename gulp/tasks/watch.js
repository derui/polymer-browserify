var gutil = require('gulp-util');
var gulp = require('gulp');
var util = require('../util');

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['browserify']);

  gulp.watch(['./assets/components/**/*.js','./assets/components/**/*.html'] , ['vulcanize', 'browserify', 'copy']);
  gulp.watch('./test/specs/**/*.js', ['browserify', 'copy']);
});
