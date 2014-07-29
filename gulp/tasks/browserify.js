var gutil = require('gulp-util');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var glob = require('glob');
var path = require('path');

gulp.task('browserify', function() {
  glob('./src/**/*.js', function(err, matches) {
    matches.forEach(function(file) {
      var b = browserify(file);

      var dirname = path.dirname(file).split(path.sep);
      dirname = dirname.slice(2, dirname.length);
      dirname.push(path.basename(file));

      b.bundle()
        .on('error', function (e) {
          gutil.log('Browserify Error', e);
        })
        .pipe(source(path.join.apply(path, dirname)))
        .pipe(gulp.dest('./dest'));
    });
  });
});
