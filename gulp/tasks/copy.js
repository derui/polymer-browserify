var gutil = require('gulp-util');
var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src('./src/components/**/*.html')
    .pipe(gulp.dest('./dest/components'));
});
