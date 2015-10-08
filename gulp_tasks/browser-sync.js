var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    CONFIG      = require('../config');

var config = {
    files: CONFIG.build,
    proxy: CONFIG.server.host + ":" + CONFIG.server.port
};

// browser-sync task for starting the server.
gulp.task('browser-sync', browserSyncTaskHandler);


function browserSyncTaskHandler () {
    browserSync(config)
}