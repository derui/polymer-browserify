var gutil = require('gulp-util');
var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src('./src/components/**/*.html')
    .pipe(gulp.dest('./dest/components'));

  gulp.src('./index.html')
    .pipe(gulp.dest('./dest/'));

  gulp.src('./vendor/**')
    .pipe(gulp.dest('./dest/js/vendor'));
});
