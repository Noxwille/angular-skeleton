'use strict';

var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    sourcemaps  = require('gulp-sourcemaps'),
    requirejs   = require('requirejs'),
    browserSync = require('browser-sync'),
    $           = require('../config/gulp.conf');

gulp.task($.TASK.scripts.name, buildScripts);

gulp.task($.TASK.scriptsMinify.name, prodScripts);

//todo: throw new Error('toString failed') with source maps
function buildScripts () {
    return gulp.src($.TASK.scripts.src, $.CONFIG.scripts.base)
        .pipe(plumber())
        //.pipe(sourcemaps.init())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest($.TASK.scripts.dest))
        .pipe(browserSync.reload({stream:true}));
}

function prodScripts () {
    return requirejs.optimize($.CONFIG.scripts.requirejs);
}

