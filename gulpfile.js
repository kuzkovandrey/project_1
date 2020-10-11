
const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

function browsersync() {
	browserSync.init({
		server: { baseDir: 'app/' },
		notify: false,
		online: false
	})
}

function styles() {
	return src('app/scss/main.scss')
	.pipe(sass())
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