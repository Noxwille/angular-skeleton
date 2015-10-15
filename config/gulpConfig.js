'use strict';

var tasks = {
    indexHtml: {
        name : 'build:indexHtml',
        src  : './client/index.html',
        dest : './client-build'
    },
    html: {
        name : 'build:html',
        src  : './client/scripts/**/*.html',
        dest : './client-build/scripts/app/templates'
    },
    styles: {
        name : 'build:styles',
        src  : './client/styles/*.scss',
        dest : './client-build/styles'
    },
    images: {
        name : 'build:images',
        src  : './client/images/**/*.*',
        dest : './client-build/images'
    },
    fonts: {
        name : 'build:fonts',
        src  : './client/fonts/*.*',
        dest : './client-build/fonts'
    },
    scripts: {
        name : 'build:scripts',
        src  : './client/scripts/**/*.js',
        dest : './client-build/'
    },
    scriptsMinify: {
        name : 'prod:scripts'
    },
    jshint: {
        name : 'jshint',
        path : ['./client/scripts/**/*.js', '!./client/scripts/vendors/**/*']
    },
    browserSync: {
        name: 'browserSync'
    },
    webServer: {
        name : 'webServer'
    },
    clean: {
        name : 'clean',
        src  : './client-build'
    }
};

var config = {
    html: {
        minify: {
            empty  : true,
            spare  : true,
            quotes : true
        },
        templateCache: {
            standalone : true,
            root       : 'templates/'
        },
        preprocess: {
            context: {
                isCompressed: false
            }
        }
    },
    images: {
        minify: {
            progressive : true,
            svgoPlugins : [{removeViewBox: false}],
            interlaced  : true
        }
    },
    scripts: {
        base: {
            base: './client'
        },
        requirejs: {
            baseUrl                 : './client/scripts/app',
            name                    : 'bootstrap',
            out                     : './client-build/scripts/bootstrap.min.js',
            mainConfigFile          : './client-build/scripts/app/bootstrap.js',
            include                 : ['../vendors/requirejs/require'],
            waitSeconds             : 0,
            optimize                : 'uglify2',
            removeCombined          : true,
            keepBuildDir            : true,
            preserveLicenseComments : false,
            useStrict               : true
        }
    },
    browserSync: {
        files: './client-build',
        proxy: 'localhost:9000'
    },
    webServer: {
        root     : './client-build',
        host     : 'localhost',
        port     : 9000,
        fallback : './client-build/index.html'
    }
};

module.exports = {
    TASK: tasks,
    CONFIG: config
};