<?php

if(get_role( 'shop_manager' ) && get_role( 'customer' ) && get_role( 'contributor' ) && get_role('author') && get_role( 'editor' ) ) {

	remove_role( 'shop_manager' );
	remove_role( 'customer' );
	remove_role( 'contributor' );
	remove_role( 'author' );
	remove_role( 'editor' );

}

if (get_role('premium') && get_role('premium_superior') && get_role('proveedor') && get_role('proveedor_premium') ) {
	
	return null;

}else{
		add_role( 'premium', 'Premium', $capabilities = array(
'read' => true, // true allows this capability
) );
		add_role( 'premium_superior', 'Premium Superior', $capabilities = array(
'read' => true, // true allows this capability
		) );
			add_role( 'proveedor', 'Proveedor', $capabilities = array(
				'read' => true, // true allows this capability
'edit_others_posts' => true, // Allows user to edit others posts not just their own
'create_posts' => true, // Allows user to create new posts
		) );
				add_role( 'proveedor_premium', 'Proveedor premium', $capabilities = array(
			'read' => true, // true allows this capability
'edit_others_posts' => true, // Allows user to edit others posts not just their own
'create_posts' => true, // Allows user to create new posts
		) );
			}

			add_action( 'wp_logout', 'auto_redirect_external_after_logout');
function auto_redirect_external_after_logout(){
  wp_redirect( site_url( ) );
  exit();
}


// FUNCIONES DE LA PAGINA

// OBTENER DATOS DE USUARIO

function obtener_userdata($data){

	$user_id = get_current_user_id();
	$user_pais = get_user_meta( $user_id, $key = 'pais');
	$user_descripcion = get_user_meta( $user_id, $key = 'descripcion');
	$userdata = get_userdata( $user_id );


// OBTENER EL EMAIL
	if ($data == 'email') {
	 echo	$userdata->user_email;
	}elseif ($data == 'nickname') {
		echo $userdata->nickname;
	}elseif ($data == 'pais') {
		echo $userdata->pais;
	}elseif ($data == 'descripcion') {
		
		if ($user_descripcion == null) {
			echo 'No tienes descripcion';
		}else {
			echo $userdata->descripcion;
		}
	}elseif ($data == "tlf") {
			echo $userdata->tlf;
	}elseif ($data == 'ciudad') {
		echo $userdata->ciudad;
	}elseif ($data == 'direccion') {
		echo $userdata->direccion;
	}

}
// EDITAR FUNCIONES DE USUARIO

function editar_usuario(){

	$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$tlf = $_POST['tlf'];
$biografia = $_POST['biografia'];
$ciudad = $_POST['ciudad'];
$direccion = $_POST['direccion'];

if (!empty($username)  && !empty($email)) {
	$user_id = get_current_user_id();
update_user_meta( $user_id, 'ciudad', $ciudad);
update_user_meta( $user_id, 'direccion', $direccion);
update_user_meta( $user_id, 'descripcion', $biografia);


  wp_update_user(
    array(
      'ID'          =>    $user_id,
      'nickname'    =>    $username,
      'user_login' => $email
    )
  );

}
      



}
