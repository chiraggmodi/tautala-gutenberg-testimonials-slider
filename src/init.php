<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Contants
define( 'TAUTALA_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function tautala_block_assets() {
	// Styles.
	wp_enqueue_style(
		'tautala-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	);

	wp_localize_script( 'tautala-js', 'tautala', array(
		'ajax_url' => admin_url( 'admin-ajax.php' )
	));

} // End function tautala_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'tautala_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function tautala_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'tautala-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'tautala-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function tautala_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'tautala_editor_assets' );

/**
 * Enqueue assets for the frontend only
 */
function tautala_client_assets() {
	wp_enqueue_script( 'slider-js', plugins_url( 'src/siema.min.js', dirname( __FILE__ ) ), array('jquery'), true );
	wp_enqueue_script( 'tautala-js', plugins_url( 'src/client.js', dirname( __FILE__ ) ), array('jquery', 'slider-js'), true );
}

add_action( 'wp_enqueue_scripts', 'tautala_client_assets' );

