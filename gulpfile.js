var gulp = require('./gulp')([
  'browserify',
  'vulcanize',
  'watch',
  'copy'
]);

gulp.task('build', ['vulcanize', 'browserify', 'copy']);
gulp.task('default', ['build', 'watch']);
