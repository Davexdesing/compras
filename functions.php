<?php
// Se integraran todos los arhivos

/**
 * Enqueue scripts
 *
 * @param string $handle Script name
 * @param string $src Script url
 * @param array $deps (optional) Array of script names on which this script depends
 * @param string|bool $ver (optional) Script version (used for cache busting), set to null to disable
 * @param bool $in_footer (optional) Whether to enqueue the script before </head> or before </body>
 */


function theme_scripts() {

		wp_enqueue_style( 'bts', get_template_directory_uri().'/css/bootstrap.css' , false);
	wp_enqueue_style( 'template', get_template_directory_uri().'/css/template.css' , false );
	wp_enqueue_style( 'responsive', get_template_directory_uri().'/css/responsive.css' , false);
	wp_enqueue_style( 'base-sizzing', get_template_directory_uri().'/css/base-sizing.css', false);
	wp_enqueue_style( 'custom', get_template_directory_uri().'/css/custom.css', false);
	wp_enqueue_style( 'bootstrap-min', get_template_directory_uri().'/css/bootstrap.min.css', false);
	wp_enqueue_style( 'select2', get_template_directory_uri().'/css/select2.min.css', false);
	wp_enqueue_script( 'bootstrap-dp', get_template_directory_uri(). '/css/bootstrap-dropdownhover.css', false);
	wp_enqueue_style( 'animate', get_template_directory_uri().'/css/animate.min.css', false);
	wp_enqueue_style( 'slick', get_template_directory_uri().'/css/slick.css', false);
	wp_enqueue_style( 'nouislider', get_template_directory_uri().'/css/nouislider.min.css', fals );
	wp_enqueue_style( 'owlc', get_template_directory_uri().'/css/owl.carousel.css', fals );
	wp_enqueue_style( 'owl', get_template_directory_uri().'/css/owl.style.css', false );
	wp_enqueue_style( 'meanmenu', get_template_directory_uri().'/css/meanmenu.min.css', fals );
	wp_enqueue_style( 'font-awesome', get_template_directory_uri().'/css/font-awesome.min.css
', false);
	wp_enqueue_style( 'flaticon', get_template_directory_uri().'/css/et-line-fonts.css', false);
	wp_enqueue_style( 'default', get_template_directory_uri().'/css/colors/defualt.css', false);
	wp_enqueue_style( 'jquery_ui', get_template_directory_uri().'/css/jquery-ui.css', false);
	wp_enqueue_style( 'style', get_template_directory_uri().'/style.css', false);



	// scripts
		//HEADER
	wp_enqueue_script( 'recaptcha', get_template_directory_uri().'/js/recaptcha__es.js', '', $ver = false, $in_footer = false );

	wp_enqueue_script( 'jquery.', get_template_directory_uri().'/js/jquery.js', '', $ver = false, $in_footer = false );
	wp_enqueue_script( 'modernizr', get_template_directory_uri().'/js/modernizr.js', '', $ver = false, $in_footer = true );


		//FOOTER
	wp_enqueue_script( 'jquery-3', get_template_directory_uri().'/js/jquery-3.1.1.min.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'jquery-migrate-1', get_template_directory_uri().'/js/jquery-migrate-1.2.1.min.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'bootstrapminjs', get_template_directory_uri().'/js/bootstrap.min.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'select2', get_template_directory_uri().'/js/select2.min.js', '', $ver = false, $in_footer = true );
	//wp_enqueue_script( 'bootstrap-dropdownhoverjs', get_template_directory_uri().'/js/bootstrap-dropdownhover.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'easingjs', get_template_directory_uri().'/js/easing.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'counterup', get_template_directory_uri().'/js/counterup.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'waypoints', get_template_directory_uri().'/js/waypoints.min.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'freveal', get_template_directory_uri().'/js/footer-reveal.min.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'jquery.meanmenu', get_template_directory_uri().'/js/jquery.meanmenu.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'color-switcher', get_template_directory_uri().'/js/color-switcher.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'customjs', get_template_directory_uri().'/js/custom.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'jquery-1-4', get_template_directory_uri().'/js/jquery-1.12.4.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'jquery-uijs', get_template_directory_uri().'/js/jquery-ui.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'imagesloaded', get_template_directory_uri().'/js/imagesloaded.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'isotope', get_template_directory_uri().'/js/isotope.min.js', '', $ver = false, $in_footer = true );
	wp_enqueue_script( 'extraer', get_template_directory_uri().'/js/extraer-categorias.js', '', $ver = false, $in_footer = true );

	
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );


	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'feed_links', 2);
	remove_action('wp_head', 'index_rel_link');
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'feed_links_extra', 3);
	remove_action('wp_head', 'start_post_rel_link', 10, 0);
	remove_action('wp_head', 'parent_post_rel_link', 10, 0);
	remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);

add_theme_support( 'post_thumbnails' );
add_theme_support( 'woocommerce' );

/** 
***********************
Edicion de menuu

***********************
**/


register_nav_menus( array(

	'web' => __('top menu', 'comercio rapido')
	) );


add_action('admin_post_nopriv_registrar', 'registrar_accion');
 

function atg_menu_classes($classes, $item, $args) {
  if($args->theme_location == 'web') {
    $classes[] = '';
  }
  return $classes;
}
add_filter('nav_menu_css_class','atg_menu_classes',1,3);


//////////////////////////////////




/** Remove short description if product tabs are not displayed */
function dot_reorder_product_page() {
    if ( get_option('woocommerce_product_tabs') == false ) {
        remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
    }
}

	// Our custom post type function
function create_posttype() {
 
    register_post_type( 'proveedores',
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'proveedores' ),
                'singular_name' => __( 'proveedores' )
            ),
                    'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions' ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'proveedores'),
            'taxonomies'          => array( 'category','post_tag' ),
        )
    );
}
// Hooking up our function to theme setup
add_action( 'init', 'create_posttype' );



include get_template_directory() .'/includes/shortcode.php';
include get_template_directory() .'/includes/usuarios.php';
include get_template_directory() .'/includes/funciones.php';
include get_template_directory() .'/includes/walkermenu.php';
include get_template_directory() .'/includes/registro.php';
include get_template_directory() .'/includes/proveedor.php';
include get_template_directory() .'/includes/pages.php';





