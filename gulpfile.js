var gulp = require('./gulp')([
  'browserify',
  'vulcanize',
  'watch',
  'copy',
  'connect'
]);

gulp.task('build', ['vulcanize', 'browserify', 'copy']);
gulp.task('default', ['build', 'watch']);
