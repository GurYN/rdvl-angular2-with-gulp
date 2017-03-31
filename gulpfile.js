var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    browsersync = require('browser-sync').create();

const tscConfig = require('./tsconfig.json');

gulp.task('libs', function() {
    return gulp.src([
        './node_modules/*core-js/**/*',
        './node_modules/*zone.js/**/*',
        './node_modules/*reflect-metadata/**/*',
        './node_modules/*systemjs/**/*',
        './node_modules/*@angular/**/*',
        './node_modules/*rxjs/**/*'
    ])
    .pipe(gulp.dest('./dist/libs'));
});

gulp.task('css', function() {
    return gulp.src(['./src/less/**/*.less'])
    .pipe(plugins.less())
    .pipe(plugins.concat('site.css'))
    .pipe(plugins.cssmin())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browsersync.stream());
});

gulp.task('ts', function() {
    return gulp.src('./src/**/*.ts')
        .pipe(plugins.typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('./dist'))
        .pipe(browsersync.stream());
});

gulp.task('htmljs', function() {
    return gulp.src([
        './src/**/*.html',
        './src/**/*.js'
        ])
        .pipe(plugins.replace('node_modules','libs'))
        .pipe(gulp.dest('./dist'))
        .pipe(browsersync.stream());
});

gulp.task('server', function() {
    browsersync.init({
        server: {
            baseDir: './dist/'
        }
    })

    gulp.watch('./index.html').on('change', browsersync.reload);
});

gulp.task('watch', function() {    
    gulp.watch(['./src/less/**/*.less'], ['css']);
    gulp.watch(['./src/**/*.ts'], ['ts']);
    gulp.watch(['./src/**/*.html', './src/**/*.js'], ['htmljs']);
});

gulp.task('default', ['libs', 'css', 'ts', 'htmljs', 'server', 'watch']);