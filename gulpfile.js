var gulp  = require('gulp'),
    watch = require('gulp-watch'),
    $     = require('./config/gulpConfig');

require('./gulp_tasks/html');
require('./gulp_tasks/styles');
require('./gulp_tasks/images');
require('./gulp_tasks/fonts');
require('./gulp_tasks/scripts');
require('./gulp_tasks/jshint');
require('./gulp_tasks/clean');
require('./gulp_tasks/browser-sync');
require('./gulp_tasks/server');

/**
 * Task for development
 */
gulp.task('default', toDevelopment);

/**
 * Task for Production
 */
gulp.task('production', toProduction);


gulp.task('build', toBuild);

gulp.task('watch', watcher);


function toDevelopment () {
    gulp.start(
        'build',

        $.TASK.webServer.name,
        $.TASK.browserSync.name,
        'watch'
    );
}

function toBuild () {
    gulp.start(
        $.TASK.clean.name,

        $.TASK.html.name,
        $.TASK.scripts.name,
        $.TASK.styles.name,
        $.TASK.images.name,
        $.TASK.fonts.name,
        $.TASK.jshint.name
    );
}

function toProduction () {
    gulp.start(
        $.TASK.clean.name,

        $.TASK.html.name,
        $.TASK.styles.name,
        $.TASK.images.name,
        $.TASK.fonts.name,
        $.TASK.scriptsMinify.name
    );
}

function watcher () {
    watch([$.TASK.html.src, $.TASK.indexHtml.src], function () {
        gulp.start($.TASK.html.name);
    });
    watch([$.TASK.styles.src], function () {
        gulp.start($.TASK.styles.name);
    });
    watch([$.TASK.scripts.src], function () {
        gulp.start($.TASK.scripts.name);
    });
    watch([$.TASK.images.src], function () {
        gulp.start($.TASK.images.name);
    });
    watch([$.TASK.fonts.src], function () {
        gulp.start($.TASK.fonts.name);
    });
}
