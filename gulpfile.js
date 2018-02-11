var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify-es').default;
var replace = require('gulp-replace');

gulp.task('less', function () {
  return gulp.src('src/css/less/main.less')
      .pipe(less())
      .pipe(cleanCSS({compatibility: 'ie7', restructuring: false}))
      .pipe(rename({extname: '.min.css'}))
      .pipe(gulp.dest('src/css/build/'));
});

gulp.task('js', function () {
  return gulp.src(['src/app.js',])
      .pipe(uglify())
      .pipe(rename({extname: '.min.js'}))
      .pipe(gulp.dest('src/'));
});

gulp.task('watch', function () {  // Watch .scss files
  gulp.watch('src/css/less/*.less', ['less']);  // Watch .less files
  gulp.watch('src/*.js', ['js']);  // Watch .less files
});

