const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');

gulp.task('browserify', function () {
    return browserify('./src/assets/js/app.js')
        .transform(babelify, { presets: ['react', 'es2015'] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('sass', function () {
    return gulp.src('./src/assets/sass/app.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/assets/js/**/*.js', ['browserify']);
    gulp.watch('src/assets/sass/**/*.scss', ['sass']);
});
