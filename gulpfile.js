
const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require('gulp-rename');

function browsersync() {
	browserSync.init({
		server: { baseDir: 'app/' },
		notify: false,
		online: false
	})
}

function styles() {
	return src('app/scss/common.scss')
	.pipe(sass())
	.pipe(rename("main.css"))
	.pipe(dest('app/css/'))
	.pipe(browserSync.stream());
}


function startWatch() {
	watch('app/scss/*.scss', styles);
	watch('app/*.html').on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.styles = styles;
exports.default = parallel(styles, browsersync, startWatch);