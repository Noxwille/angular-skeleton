'use strict';

var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    jscs    = require('gulp-jscs'),
    plumber = require('gulp-plumber'),
    stylish = require('gulp-jscs-stylish'),
    $       = require('../config/gulp.conf');

gulp.task('jshint', jshintHandler);


function jshintHandler () {
    return gulp.src($.TASK.jshint.path)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jscs())
        .pipe(stylish())
        .pipe(stylish.combineWithHintResults());
}