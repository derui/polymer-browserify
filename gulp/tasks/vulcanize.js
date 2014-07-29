var gutil = require('gulp-util');
var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('vulcanize', function() {
  gulp.src('./assets/components/**/*.html')
    .pipe(vulcanize({
        csp : true,
        inline : true,
        excludes: {
          imports : ['polymer.html']
        },
        dest : './src/components'
    }));
});
