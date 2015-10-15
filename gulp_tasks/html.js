'use strict';

var gulp          = require('gulp'),
    rename        = require('gulp-rename'),
    templateCache = require('gulp-angular-templatecache'),
    preprocess    = require('gulp-preprocess'),
    minifyHtml    = require('gulp-minify-html'),
    plumber       = require('gulp-plumber'),
    browserSync   = require('browser-sync'),
    $             = require('../config/gulpConfig');

gulp.task($.TASK.html.name, [$.TASK.indexHtml.name], buildHtml);

gulp.task($.TASK.indexHtml.name, buildIndexHtml);


function buildHtml () {
    return gulp.src($.TASK.html.src)
        .pipe(plumber())
        .pipe(rename(function ( path ) {
            path.dirname = path.dirname.replace(/(\\|\/)(modules|templates)/g, '');
            return path;
        }))
        .pipe(minifyHtml($.CONFIG.html.minify))
        .pipe(templateCache($.CONFIG.html.templateCache))
        .pipe(gulp.dest($.TASK.html.dest))
        .pipe(browserSync.reload({stream:true}));
}

function buildIndexHtml () {
    return gulp.src($.TASK.indexHtml.src)
        .pipe(plumber())
        .pipe(preprocess($.CONFIG.html.preprocess))
        .pipe(gulp.dest($.TASK.indexHtml.dest));
}