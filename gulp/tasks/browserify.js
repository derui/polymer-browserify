var gulp = require('gulp');
var glob = require('glob');
var util = require('../util');

gulp.task('browserify', function() {
  glob('./src/**/*.js', function(err, matches) {
    matches.forEach(function(file) {
      util(file);
    });
  });
});
