<?php
// funcion para obtener el rol de un usuario

function get_rol_user()
{
	$user_id = get_current_user_id();
	$user=get_userdata($user_id);

 $rol = implode(', ', $user->roles);
 return $rol; 
}


function admin_default_page() {
return home_url( $path = '', $scheme = null );
}

add_filter('login_redirect', 'admin_default_page');

function obtener_cat(){
	global $wpdb;
	$category = $wpdb->get_results( "SELECT * FROM wp_term_taxonomy WHERE taxonomy='category'" , 'OBJECT');

	return $category;
}

function busqueda(){

global $wpdb;

	$post = $wpdb->get_results("SELECT * FROM ");

}