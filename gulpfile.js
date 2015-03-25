var	gulp 		= 	require('gulp'),
	browserSync = 	require('browser-sync'),
	reload 		=	browserSync.reload
	;

//Browser sync
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});


//Watch
gulp.task('watch', function(){
	//Templates
	 gulp.watch(['app/*.html', 'app/scripts/main.js'], reload);

});


//Serve
gulp.task('serve', ['browser-sync', 'watch']);

//Serve for activate tasks
gulp.task('default', ['serve']);



