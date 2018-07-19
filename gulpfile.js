const gulp = require( 'gulp' );
const zip = require( 'gulp-zip' );

gulp.task( 'release', () =>
	gulp
		.src( [ 'dist/*', 'src/*.php', '*.jpg', 'readme.txt', '*.php' ], {
			base: './',
		} )
		.pipe( zip( 'tumbili-mailchimp-for-gutenberg.zip' ) )
		.pipe( gulp.dest( './' ) )
);