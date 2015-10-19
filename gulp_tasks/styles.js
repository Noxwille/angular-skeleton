'use strict';

var gulp        = require('gulp'),
    sassCompile = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    plumber     = require('gulp-plumber'),
    cssmin      = require('gulp-minify-css'),
    prefixer    = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    $           = require('../config/gulp.conf');

gulp.task($.TASK.styles.name, buildStyles);


function buildStyles () {
    return gulp.src($.TASK.styles.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sassCompile())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest($.TASK.styles.dest))
        .pipe(browserSync.reload({stream:true}));
}