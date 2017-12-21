var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', () => {
    console.log('created a gulp task');
});

gulp.task('html', () => {
    console.log('Imagine something usefull being done to your HTML.');
});

gulp.task('watch', () => {
    watch('./app/index.html', () => {
        gulp.setMaxListeners('html');
    });
});
