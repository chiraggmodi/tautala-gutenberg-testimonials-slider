<?php
/**
 * Plugin Name: Tautala: Testimonial Slider for Gutenberg
 * Plugin URI: https://github.com/gubbigubbi/tautala-testimonials
 * Description: Got some testimonials? Show them in a nice little slider.
 * Author: gubbigubbi
 * Author URI: https://github.com/gubbigubbi/
 * Version: 0.2
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
