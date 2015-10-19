'use strict';

var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    browserSync = require('browser-sync'),
    $           = require('../config/gulp.conf');

$.CONFIG.images.minify.use = [pngquant()];

gulp.task($.TASK.images.name, buildImg);

//todo: gif minify support
function buildImg () {
    gulp.src($.TASK.images.src)
        .pipe(plumber())
        .pipe(imagemin($.CONFIG.images.minify))
        .pipe(gulp.dest($.TASK.images.dest))
        .pipe(browserSync.reload({stream: true}));
}