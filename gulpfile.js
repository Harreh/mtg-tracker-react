const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');

gulp.task('browserify', () => {
    return browserify('./src/assets/js/app.js')
        .transform(babelify, { presets: ['es2016', 'react'] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('sass', () => {
    return gulp.src('./src/assets/sass/app.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', () => {
    gulp.watch('src/assets/js/**/*.js', ['browserify']);
    gulp.watch('src/assets/**/*.scss', ['sass']);
});
