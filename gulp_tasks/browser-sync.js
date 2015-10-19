'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    $           = require('../config/gulp.conf');

gulp.task($.TASK.browserSync.name, browserSyncHandler);


function browserSyncHandler () {
    browserSync($.CONFIG.browserSync);
}