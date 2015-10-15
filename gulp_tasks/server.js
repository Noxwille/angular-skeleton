'use strict';

var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    $       = require('../config/gulpConfig');

gulp.task($.TASK.webServer.name, webServer);


function webServer () {
    connect.server($.CONFIG.webServer);
}