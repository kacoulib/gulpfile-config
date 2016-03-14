var gulp = require('gulp'),
	clean = require('gulp-clean'),
	gulpIf = require('gulp-if'),
	minifyCss = require('gulp-clean-css'),
	livereload = require('gulp-livereload'),

// _path_
	p = '*/wp-content/themes/zikb/',
	_path_ = {
		php  : p + '*.php',
		css  : p + 'style.css',
		js   : p + 'js/*.js',
		output : {
			css : p+'dest/assets/css/',
			js : p+'dest/assets/js/',
			img : p+'dest/assets/img/'
		}
	};

gulp.task('default', ['minifyCss', 'clean'], function () {
	console.log(gulp);
});

gulp.task('minifyCss', function(){
	return gulp.src(_path_.css)
	.pipe(minifyCss())
	.pipe(gulp.dest(_path_.output.css));
})

gulp.task('clean', function(){
	return gulp.src(p+'dest', {read:false}).pipe(clean());
});

gulp.task('watch', function(){
	var server = livereload.listen(); // listen the port
	gulp.watch([_path_.php, _path_.css, _path_.js], livereload.changed);
	gulp.watch(_path_.css, ['minifyCss']);
});