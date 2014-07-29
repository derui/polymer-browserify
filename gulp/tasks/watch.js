var gutil = require('gulp-util');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var vulcanize = require('gulp-vulcanize');

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', function(e) {
    var b = browserify(e.path);

    b.bundle()
      .on('error', function (e) {
        gutil.log('Browserify Error', e);
      })
      .pipe(source(e.path))
      .pipe(gulp.dest('./dest'));
  });
});
