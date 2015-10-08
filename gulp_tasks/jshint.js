var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    jscs    = require('gulp-jscs'),
    plumber = require('gulp-plumber'),
    stylish = require('gulp-jscs-stylish');

var hintPath = [
    './client/scripts/**/*.js',
    '!./client/scripts/vendors/**/*'
];

gulp.task('jshint', jshintTaskHandler);

gulp.task('watch-jshint', watchJshintTaskHandler);


function jshintTaskHandler () {
    return gulp.src(hintPath)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jscs())
        .pipe(stylish())
        .pipe(stylish.combineWithHintResults());
}

function watchJshintTaskHandler () {
    gulp.watch(hintPath, ['jshint']);
}