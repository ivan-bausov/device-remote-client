var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    clean = require('gulp-clean');

tsProject = ts.createProject('./tsconfig.json');

gulp.task('clean', function () {
    return gulp.src([
        'lib/**/*.js',
        'spec/**/*.js'
    ], {read: false})
        .pipe(clean());
});

gulp.task('ts', ['clean'], function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./'));
});

gulp.task('watch', ['ts'], function () {
    gulp.watch('**/*.ts', ['ts']);
});
