'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var changed = require('gulp-changed');
var nib = require('nib');
// var connect = require('gulp-connect');

gulp.task('stylus', function() {
  var stylusOptions = {
    use: [nib()],
    import: ["nib"]
  };
  gulp.src(["stylus/*.styl"])
    .pipe(changed('css/', {
      extension: '.css'
    }))
    .pipe(stylus(stylusOptions))
    .pipe(gulp.dest('css/'));
});

gulp.task('jade', function() {
  var source = gulp
  .src([
    "template/*.html"
  ])
  .pipe(changed('html/', {
    extension: '.html'
  }))
  .pipe(jade())
  .pipe(gulp.dest("html/"));
});

gulp.task('default', ['stylus','jade']);