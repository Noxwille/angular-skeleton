var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    CONFIG  = require('../config');

gulp.task('server', serverTaskHandler);


function serverTaskHandler () {
    connect.server({
        root:       CONFIG.build,
        host:       CONFIG.server.host,
        port:       CONFIG.server.port,
        fallback:   CONFIG.server.fallback
    });
}