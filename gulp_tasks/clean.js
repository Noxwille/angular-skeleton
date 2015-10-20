'use strict';

var gulp = require('gulp'),
    del   = require('del'),
    $    = require('../config/gulp.conf');

gulp.task($.TASK.clean.name, cleaner);


function cleaner () {
    del.sync($.TASK.clean.src);
}