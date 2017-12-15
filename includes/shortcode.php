<?php
/**
 * Returns the parsed shortcode.
 *
 * @param array   {
 *     Attributes of the shortcode.
 *
 *     @type string $id ID of...
 * }
 * @param string  Shortcode content.
 *
 * @return string HTML content to display the shortcode.
 */
function title_shortcode($atts, $content = null){
	return '<div class="heading-inner">
                              <'.$atts['type'].' class="title">'. $content .'</'.$atts['type'].'>
                           </div>';
}
add_shortcode( 'title_product', 'title_shortcode' );

function product_content($atts, $content = null){
	return '<div class="col-sm" ';
}
