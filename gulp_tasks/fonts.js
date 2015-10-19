var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    $           = require('../config/gulp.conf');

gulp.task($.TASK.fonts.name, buildFonts);


function buildFonts () {
    gulp.src($.TASK.fonts.src)
        .pipe(plumber())
        .pipe(gulp.dest($.TASK.fonts.dest))
        .pipe(browserSync.reload({stream: true}));
}
