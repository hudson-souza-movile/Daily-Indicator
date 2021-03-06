var
  gulp = require('gulp'),
  less = require('gulp-less');
  path = require('path');
  connect = require('gulp-connect-multi')();

 
gulp.task('connect', connect.server({
  root: ['app'],
  port: 9090,
  livereload: true,
  open: {
    browser: 'Google Chrome' // if not working OS X browser: 'Google Chrome' 
  }
}));
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./app/general-apps/*.html')
    .pipe(connect.reload());
});


gulp.task('css', function () {
  gulp.src('./app/styles/*.css')
    .pipe(connect.reload());
});


gulp.task('less', function () {
  return gulp.src('./less/styles.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./app/styles'));
});

// PK 

gulp.task('html', function () {
  gulp.src('./app/playkids/*.html')
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./app/playkids/*.html')
    .pipe(connect.reload());
});


gulp.task('css', function () {
  gulp.src('./app/playkids/css/*.css')
    .pipe(connect.reload());
});

// end PK

 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/general-apps/*.html'], ['html']);
  gulp.watch(['./app/styles/*.css'], ['css']);
  gulp.watch(['./less/**/*.less'], ['less']);
  gulp.watch(['./app/playkids/*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);
