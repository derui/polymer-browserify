var gutil = require('gulp-util');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var glob = require('glob');
var path = require('path');
var fs = require('fs');

// fileに対してdestを対象にして出力する。
module.exports = function(file, options) {
  var dest = (options && options.dest) || './dest';
  var suffix = (options && options.suffix) || '';
  var b = browserify(file);

  var realpath = fs.realpathSync(file);
  var dirname = path.dirname(realpath).replace(process.cwd(), '').split(path.sep);
  dirname = dirname.slice(2, dirname.length);
  var fname = path.basename(file, '.js');
  var re = new RegExp('.*' + suffix + '.*');
  if (suffix && !re.test(fname)) {
    fname += suffix;
  }
  fname += path.extname(file);
  dirname.push(fname);

  b.bundle()
    .on('error', function (e) {
      gutil.log('Browserify Error', e);
    })
    .pipe(source(path.join.apply(path, dirname)))
    .pipe(gulp.dest(dest));
};
