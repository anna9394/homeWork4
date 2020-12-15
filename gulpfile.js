const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

let cssFiles = [
	'./src/precss/reset.css',
	'./src/precss/header.css',
	'./src/precss/slider.css',
	'./src/precss/new.css',
	'./src/precss/advantages.css',
	'./src/precss/discover.css',
	'./src/precss/data.css',
	'./src/precss/blog.css',
	'./src/precss/statistics.css',
	'./src/precss/packages.css',
	'./src/precss/comments.css',
	'./src/precss/footer.css',
	'./src/precss/adaptive-header.css',
	'./src/precss/adaptive-new.css',
	'./src/precss/adaptive-advantages.css',
	'./src/precss/adaptive-discover.css',
	'./src/precss/adaptive-date.css',
	'./src/precss/adaptive-packages.css',
	'./src/precss/adaptive-comments.css',
	'./src/precss/adaptive-footer.css',
	'./src/precss/adaptive-slider.css'

	
];

function styles(){
	return gulp.src(cssFiles)
			   .pipe(concat('main.css'))
			   .pipe(autoprefixer({
		            // browsers: ['>0.1%'],
		            // cascade: false
		        }))
			   .pipe(cleanCSS({
			   		level: 2
			   	}))
			   .pipe(gulp.dest('./src/css'))
			   .pipe(browserSync.stream());

};

gulp.task('styles', styles); 

gulp.task('watch', function(){
	browserSync.init({
        server: {
            baseDir: "./src"
        }
    });

	gulp.watch('./src/precss/**/*.css', styles);
});
