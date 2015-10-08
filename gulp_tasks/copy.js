var gulp    = require('gulp'),
    watch   = require('gulp-watch'),
    del     = require('del'),
    plumber = require('gulp-plumber'),
    CONFIG  = require('../config');

gulp.task('copy', ['clean-copy'], copyTaskHandler);

gulp.task('watch-copy', watchCopyTaskHandler);

gulp.task('clean-copy', cleanCopyTaskHandler);


function copyTaskHandler () {
    return gulp.src(CONFIG.copy.src,
        {
            base: CONFIG.work
        })
        .pipe(plumber())
        .pipe(gulp.dest(CONFIG.build));
}

function watchCopyTaskHandler () {
    watch(CONFIG.copy.src,
        {
            base: CONFIG.work
        }, function () {
            gulp.start('copy');
        });
}

function cleanCopyTaskHandler (cb) {
    del(CONFIG.copy.dest, cb);
}