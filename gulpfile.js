const gulp = require( 'gulp' );
const zip = require( 'gulp-zip' );

gulp.task( 'release', () =>
	gulp
		.src(
			[
				'dist/*',
				'src/*.php',
				'src/client.js',
				'src/siema.min.js',
				'assets/*.jpg',
				'assets/*.svg',
				'readme.txt',
				'*.php',
			],
			{
				base: './',
			}
		)
		.pipe( zip( 'tautala-testimonials.zip' ) )
		.pipe( gulp.dest( './' ) )
);
