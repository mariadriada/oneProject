var	gulp 		   = 	require('gulp'),
	browserSync  = 	require('browser-sync'),
	sass		     =	require('gulp-sass'),
	prefix       =	require('gulp-autoprefixer'),
	concat       = 	require('gulp-concat'),
	cssmin       = 	require('gulp-minify-css'),
	uglify       = 	require('gulp-uglify'),
  bower        =  require('gulp-bower'),
	reload       =	 browserSync.reload
	;

//Browser sync
gulp.task('browser-sync', ['sass'], function () {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});


//Takes main.scss, add the prefixes and set the compiled file in the css folder.
gulp.task('sass', function(){
	gulp.src('./app/scss/main.scss')
    .pipe(sass({      
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(gulp.dest('./app/css/'))
     .pipe(browserSync.reload({stream: true}));
});


// Compile files from scss into minified css
gulp.task('sassmin', function () {
  gulp.src('./app/css/main.css')    
    .pipe(prefix(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(cssmin())
    .pipe(gulp.dest('./app/css/min/'));
});


// Minifies main.js
gulp.task('uglify', function () {
  gulp
    .src(['scripts/*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('scripts/min/'));
});

// Concat the scripts in the src folder.
gulp.task('scripts', function () {
  gulp
    .src(['./app/scripts/src/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./app/scripts/'));
});

//Html templates on public directory for production
gulp.task('publicHtml', function(){
	 gulp
    .src(['./app/*.html'])
    .pipe(gulp.dest('./public/'));
});

//Scripts on public directory for production
gulp.task('publicScripts', function(){
	 gulp
    .src(['./app/scrips/src/main.js'])
    .pipe(gulp.dest('./public/scripts/src/'));
});

//Style on public directory for production
gulp.task('publicStyle', function(){
	 gulp
    .src(['./app/css/main.css'])
    .pipe(gulp.dest('./public/css/'));
});


//Watch
gulp.task('watch', function(){
	//Reload Templates and Scripts
	gulp.watch(['./app/*.html', 'app/scripts/src/*.js'], reload);
	gulp.watch('./app/scss/*.scss', ['sass']);  
	gulp.watch('./scripts/src/**/*.js', ['scripts']);

});

//Bower: for downloading packages for development front-end
gulp.task('bower', function() {
  return bower('./my_bower_components')
    .pipe(gulp.dest('lib/'))
});


//DEFAULT TASK
gulp.task('default', ['serve']);


//Serve task
gulp.task('serve', ['browser-sync', 'watch']);

//Production Task 
gulp.task('production', ['sassmin', 'uglify', 'publicHtml', 'publicScripts', 'publicStyle']);

//Build task
gulp.task('build', ['sass', 'scripts']);



