var gulp   = require('gulp'),
    del    = require('del'),
    CONFIG = require('../config');

gulp.task('clean', cleanTaskHandler);

function cleanTaskHandler (cb) {
    del(CONFIG.build, cb);
}