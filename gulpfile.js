var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer');

var paths = {
  main: 'src/index.scss',
  watch: 'src/**/*.scss',
  images: 'images',
  outputFolder: './dist/',
  outputName: 'atlantis.css',
  examples: 'examples/**/*.html'
};

// Build all scss files, autoprefix,
// minify, create sourcemaps and save to dist
gulp.task('build', function() {
    gulp
      .src(paths.main)
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
      .pipe(cleanCSS()) // Minify css
      .pipe(rename(paths.outputName))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.outputFolder))
      .pipe(livereload());
});

// HTML
gulp.task('html', function() {
    return gulp.src([paths.examples])
    .pipe(livereload());
});

// Watch files for changes and trigger live reload
gulp.task('watch', function() {
    // LiveReload
    livereload.listen();

    // Watch Sass and Livereload
    gulp.watch(paths.watch, ['build']);

    // Watch HTML and livereload
    gulp.watch(paths.examples, ['html']);
});
