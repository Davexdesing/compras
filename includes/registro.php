<?php

// Registrar usuarios


function registrar_usuario(){

$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$nif = $_POST['nif'];
$pais = $_POST['pais'];
$tlf = $_POST['tlf'];
$tipo = $_POST['tipo'];


if ($username == true && $password == true && $email == true) {
	if( null == username_exists( $email ) ) {

  // Generate the password and create the user
  
  $user_id = wp_create_user( $email, $password, $email );

  // Set the nickname
  wp_update_user(
    array(
      'ID'          =>    $user_id,
      'nickname'    =>    $username,
    )
  );

  // Set the role
  if ($tipo == 'empresa' ) {
  	 $user = new WP_User( $user_id );
  $user->set_role( 'proveedor' );
  	
  }elseif ($tipo == 'individual') {
  	
  	  	 $user = new WP_User( $user_id );
  $user->set_role( 'subscriber' );
  }
 

 add_user_meta( $user_id, 'nif', $nif );
 add_user_meta( $user_id, 'pais', $pais );
 add_user_meta( $user_id, 'tlf', $tlf );

 wp_redirect( site_url());

}elseif( true == username_exists( $email)){
	echo 'Lo siento el usuario ya existe';
}else{
	return;
} // end if
	
}


}	

registrar_usuario();

