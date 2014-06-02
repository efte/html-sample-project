'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var changed = require('gulp-changed');
var mixins = require('gulp-cortex-jade-mixins');
var compiler = require('gulp-cortex-handlebars-compiler');
var nib = require('nib');

gulp.task('stylus', function() {
  var stylusOptions = {
    use: [nib()],
    import: ["nib"]
  };
  gulp.src(["stylus/**/*.styl"])
    .pipe(changed('css/', {
      extension: '.css'
    }))
    .pipe(stylus(stylusOptions))
    .pipe(gulp.dest('css/'));
});

gulp.task('jade', function() {
  gulp
  .src([
    "jade/**/*.jade"
  ])
  .pipe(changed('template/', {
    extension: '.html'
  }))
  .pipe(mixins())
  .pipe(jade())
  .pipe(compiler({
    // `cortex build` might be executed inside a sub directory
    cwd       : __dirname,
    href_root : process.env.CORTEX_EFTE_HREF_ROOT,
    js_ext    : process.env.CORTEX_EFTE_JS_EXT || '.js'

  }).compile())
  .pipe(gulp.dest("template/"));
});

gulp.task('default', ['stylus','jade']);
