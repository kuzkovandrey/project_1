
const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');

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
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: false }))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename("main.min.css"))
	.pipe(dest('app/css/'))
	.pipe(browserSync.stream());
}

function scripts() {
	return src([
		'app/scripts/side-menu.js',
		'app/scripts/slider.js'
		])
	.pipe(concat('main.min.js'))
	.pipe(babel({
        presets: ['@babel/env']
    }))
	.pipe(uglify())
	.pipe(dest('app'))
	.pipe(browserSync.stream());
}


function startWatch() {
	watch('app/scss/*.scss', styles);
	watch('app/scripts/*.js', scripts);
	watch('app/*.html').on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.styles = styles;
exports.default = parallel(styles, scripts, browsersync, startWatch);