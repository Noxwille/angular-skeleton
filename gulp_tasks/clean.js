'use strict';

var gulp = require('gulp'),
    rm   = require('gulp-rimraf'),
    $    = require('../config/gulpConfig');

gulp.task($.TASK.clean.name, cleaner);


function cleaner () {
    return gulp.src($.TASK.clean.src, { read: false })
        .pipe(rm({ force: true }));
}