const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    gulp.watch('src/assets/js/**/*.js', ['browserify']);
    gulp.watch('src/assets/sass/**/*.scss', ['sass']);
    gulp.watch('public/index.html').on('change', browserSync.reload);
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './public',
            open: false
        }
    });
});

gulp.task('serve', ['browser-sync', 'watch']);

gulp.task('default', [
    'browserify',
    'sass'
]);

gulp.task('browserify', function () {
    return browserify('./src/assets/js/app.js')
        .transform(babelify, { presets: ['react', 'es2015'] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function () {
    return gulp.src('./src/assets/sass/app.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
});
