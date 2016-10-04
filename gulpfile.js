var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    plumber = require('gulp-plumber'),
    webpack = require('gulp-webpack');

gulp.task('webserver', ['watch'], function () {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('watch', function () {
    gulp.watch(['./*.ts', './app/**.ts'], ['webpack']);
});

gulp.task('webpack', function () {
    return gulp.src('./main.ts')
        .pipe(webpack({
            // watch: true,
            output: {
                filename: 'bundle.js'
            },
            resolve: {
                // Add `.ts` and `.tsx` as a resolvable extension.
                extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
            },
            module: {
                loaders: [// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                    { test: /\.tsx?$/, loader: 'ts-loader' }
                ]
            }
        }))
        .pipe(gulp.dest('./'));
});