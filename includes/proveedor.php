<?php

/**
 * Clase para proveedores.
 */
class proveedor
{
    /**
     * La funciones construct
     */

    public function __construct()
    {

    global $wpdb;


   $titulo = $_POST['titulo'];
     $descripcion = $_POST['descripcion'];
     $category = $_POST['categoria'];
     $subcategory = $_POST['subcategoria'];
     $category2 = $_POST['categoria2'];
     $subcategory2 = $_POST['subcategoria2'];
     $category3 = $_POST['categoria3'];
     $subcategory3 = $_POST['subcategoria3'];
     $category4 = $_POST['categoria4'];
     $subcategory4 = $_POST['subcategoria4'];
     $category5 = $_POST['categoria5'];
     $subcategory5 = $_POST['subcategoria5'];
     $category6 = $_POST['categoria6'];
     $subcategory6 = $_POST['subcategoria6'];
     $category7 = $_POST['categoria7'];
     $subcategory7 = $_POST['subcategoria7'];
     $category8 = $_POST['categoria8'];
     $subcategory8 = $_POST['subcategoria8'];
     $category9 = $_POST['categoria9'];
     $subcategory9 = $_POST['subcategoria9'];
     $category10 = $_POST['categoria10'];
     $subcategory10 = $_POST['subcategoria10'];
   $id = get_current_user_id();



$post = $wpdb->get_row( "SELECT * FROM $wpdb->posts WHERE post_author = $id" );



  if ($_POST) {
    
  

if ($post->ID == null) {
           if ($titulo != null &&  $descripcion != null) {
       $array = array(
            'post_title' => $titulo,
            'post_content' => $descripcion,
            'post_author' => $id,
            'post_type' => 'proveedores',
            'post_status' => 'Pending',
            'post_category' => array($category,$subcategory,$category2,$subcategory2,$category3,$subcategory3,$category4,$subcategory4,$category5,$subcategory5,$category6,$subcategory6,$category7,$subcategory7,$category8,$subcategory8,$category,$subcategory9,$category10,$subcategory10)
            );

          wp_insert_post( $array, $wp_error = false );


    wp_set_post_tags( $post->ID, array('tag') );
     }     
}else{
  return null;
}

}
          
    }
    


public function insertar_post()
{

}
    public function vacio(){
      echo '<div class="alert alert-danger" role="alert">
  Lo siento, rellena los campos necesarios.
</div>';
    }

    public function igual()
    {
      $id = get_current_user_id();
     $user_post_count = count_user_posts( $id, 'post', false);

     return $user_post_count;
    } 



    public function obtener_proveedor($var)
    {
global $wpdb;

      $id = get_current_user_id();





$post = $wpdb->get_row( "SELECT * FROM $wpdb->posts WHERE post_author = $id" );

   if ($var == 'title') {
     
     echo $post->post_title;
   }elseif ($var == 'content') {
     echo $post->post_content;
   }elseif ($var == 'id') {
     echo $post->post_author;
   
    }elseif ($var == 'ids') {
     echo $post->ID;
 }
}



 public function actualizar_empresa()
 {


    global $wpdb;


   $titulo = $_POST['titulo'];
     $descripcion = $_POST['descripcion'];
   $id = get_current_user_id();

 if ($_POST['categoria'] && $_POST['subcategoria'] )
 {
   $category = $_POST['categoria'];
     $subcategory = $_POST['subcategoria'];
     $category2 = $_POST['categoria2'];
     $subcategory2 = $_POST['subcategoria2'];
     $category3 = $_POST['categoria3'];
     $subcategory3 = $_POST['subcategoria3'];
     $category4 = $_POST['categoria4'];
     $subcategory4 = $_POST['subcategoria4'];
     $category5 = $_POST['categoria5'];
     $subcategory5 = $_POST['subcategoria5'];
     $category6 = $_POST['categoria6'];
     $subcategory6 = $_POST['subcategoria6'];
     $category7 = $_POST['categoria7'];
     $subcategory7 = $_POST['subcategoria7'];
     $category8 = $_POST['categoria8'];
     $subcategory8 = $_POST['subcategoria8'];
     $category9 = $_POST['categoria9'];
     $subcategory9 = $_POST['subcategoria9'];
     $category10 = $_POST['categoria10'];
     $subcategory10 = $_POST['subcategoria10'];

 

//$marcass = explode(',',  $marcas);
$post = $wpdb->get_row( "SELECT * FROM $wpdb->posts WHERE post_author = $id" );
    if ($titulo != null &&  $descripcion != null) {



       $array = array(
                    'ID' => $post->ID,
            'post_title' => $titulo,
            'post_content' => $descripcion,
            'post_author' => $post->post_author,
            'post_type' => 'proveedores',
            'post_status' => 'publish',
            'post_category' => array($category,$subcategory,$category2,$subcategory2,$category3,$subcategory3,$category4,$subcategory4,$category5,$subcategory5,$category6,$subcategory6,$category7,$subcategory7,$category8,$subcategory8,$category,$subcategory9,$category10,$subcategory10)

            );

          wp_update_post( $array, $wp_error = false );
       



   //wp_set_post_tags( $post->ID, array($marcas) );
          }
    }
 }

 public function actualizar_empresa_single()
 {


    global $wpdb;


   $titulo = $_POST['titulo'];
     $descripcion = $_POST['descripcion'];
   $id = get_the_ID();
   $author = get_the_author_ID();

 if ($_POST['categoria'] && $_POST['subcategoria'] )
 {
   $category = $_POST['categoria'];
     $subcategory = $_POST['subcategoria'];
     $category2 = $_POST['categoria2'];
     $subcategory2 = $_POST['subcategoria2'];
     $category3 = $_POST['categoria3'];
     $subcategory3 = $_POST['subcategoria3'];
     $category4 = $_POST['categoria4'];
     $subcategory4 = $_POST['subcategoria4'];
     $category5 = $_POST['categoria5'];
     $subcategory5 = $_POST['subcategoria5'];
     $category6 = $_POST['categoria6'];
     $subcategory6 = $_POST['subcategoria6'];
     $category7 = $_POST['categoria7'];
     $subcategory7 = $_POST['subcategoria7'];
     $category8 = $_POST['categoria8'];
     $subcategory8 = $_POST['subcategoria8'];
     $category9 = $_POST['categoria9'];
     $subcategory9 = $_POST['subcategoria9'];
     $category10 = $_POST['categoria10'];
     $subcategory10 = $_POST['subcategoria10'];

 

//$marcass = explode(',',  $marcas);
    if ($titulo != null &&  $descripcion != null) {



       $array = array(
                    'ID' => $id,
            'post_title' => $titulo,
            'post_content' => $descripcion,
            'post_author' => $author,
            'post_type' => 'proveedores',
            'post_status' => 'publish',
            'post_category' => array($category,$subcategory,$category2,$subcategory2,$category3,$subcategory3,$category4,$subcategory4,$category5,$subcategory5,$category6,$subcategory6,$category7,$subcategory7,$category8,$subcategory8,$category,$subcategory9,$category10,$subcategory10)

            );

          wp_update_post( $array, $wp_error = false );
       



   //wp_set_post_tags( $post->ID, array($marcas) );
          }
    }
 }

 public function update_postadata()
 {
  global $wpdb;
 $id = get_current_user_id();
$post = $wpdb->get_row( "SELECT * FROM $wpdb->posts WHERE post_author = $id" );
    


$marcas = $_POST['lismarcas'];

 $servicio = $_POST["servicios"]; 
   $dropshipping = $_POST["dropshippings"];
 $mayor = $_POST["mayors"];
  $fabricante = $_POST["liquidador"];
  $liquidador = $_POST["liquidador2s"];
  $menor = $_POST["menors"];

  $web = $_POST["sitioweb"];
 $pedido = $_POST["pedido"];
  $comprar = $_POST["comprar"];
  $fax = $_POST["fax"];
  $postal = $_POST["codpostal"];
$direccion = $_POST['direccion'];
$ciudad = $_POST['ciudad'];
$tlf = $_POST['tlf'];
$pais = $_POST['pais'];
$email = $_POST['email'];
   $antiguedad = $_POST["antiguedad"];
$envios = $_POST["envios"];
 $reqtrab = $_POST["reqtrab"];
 $quieneson = $_POST["quieneson"];
  $legal = $_POST["legal"];
  $imagen1 = $_POST["imagen1"];
  $imagen2 = $_POST["imagen2"];
  $imagen3 = $_POST["imagen3"];

       if ($_POST) {
           update_post_meta( $post->ID, 'sitioweb', $web );
          update_post_meta( $post->ID, 'pedido', $pedido );
          update_post_meta( $post->ID, 'pais', $pais );
          update_post_meta( $post->ID, 'email', $email );
          update_post_meta( $post->ID, 'direccion', $direccion );
          update_post_meta( $post->ID, 'tlf', $tlf );
          update_post_meta( $post->ID, 'pais', $pais );
      update_post_meta( $post->ID, 'comprar', $comprar );
       update_post_meta( $post->ID, 'fax', $fax );
          update_post_meta( $post->ID, 'codpostal', $postal );
          update_post_meta( $post->ID, 'antiguedad', $antiguedad );


            update_post_meta( $post->ID, 'envios', $envios );
           update_post_meta( $post->ID, 'reqtrab', $reqtrab );
          update_post_meta( $post->ID, 'quieneson', $quieneson);
          update_post_meta( $post->ID, 'legal', $legal );
          update_post_meta( $post->ID, 'imagen1', $imagen1 );
          update_post_meta( $post->ID, 'imagen2', $imagen2 );
          update_post_meta( $post->ID, 'imagen3', $imagen3);

                   update_post_meta( $post->ID, 'servicio', $servicio );
           update_post_meta( $post->ID, 'dropshipping', $dropshipping );
          update_post_meta( $post->ID, 'mayor', $mayor );
          update_post_meta( $post->ID, 'fabricante', $fabricante );
          update_post_meta( $post->ID, 'liquidador', $liquidador );
          update_post_meta( $post->ID, 'menor', $menor );
          update_post_meta( $post->ID, 'marcas', $marcas );
    
       }

    




 }
 public function update_postadata_single()
 {
  global $wpdb;
 $id = get_the_ID();
    


$marcas = $_POST['lismarcas'];

 $servicio = $_POST["servicios"]; 
   $dropshipping = $_POST["dropshippings"];
 $mayor = $_POST["mayors"];
  $fabricante = $_POST["liquidador"];
  $liquidador = $_POST["liquidador2s"];
  $menor = $_POST["menors"];

  $web = $_POST["sitioweb"];
 $pedido = $_POST["pedido"];
  $comprar = $_POST["comprar"];
  $fax = $_POST["fax"];
  $postal = $_POST["codpostal"];
$direccion = $_POST['direccion'];
$ciudad = $_POST['ciudad'];
$tlf = $_POST['tlf'];
$pais = $_POST['pais'];
$email = $_POST['email'];
   $antiguedad = $_POST["antiguedad"];
$envios = $_POST["envios"];
 $reqtrab = $_POST["reqtrab"];
 $quieneson = $_POST["quieneson"];
  $legal = $_POST["legal"];
  $imagen1 = $_POST["imagen1"];
  $imagen2 = $_POST["imagen2"];
  $imagen3 = $_POST["imagen3"];

       if ($email && $direccion) {
           update_post_meta( $id, 'sitioweb', $web );
          update_post_meta( $id, 'pedido', $pedido );
          update_post_meta( $id, 'pais', $pais );
          update_post_meta( $id, 'email', $email );
          update_post_meta( $id, 'direccion', $direccion );
          update_post_meta( $id, 'tlf', $tlf );
          update_post_meta( $id, 'pais', $pais );
      update_post_meta( $id, 'comprar', $comprar );
       update_post_meta( $id, 'fax', $fax );
          update_post_meta( $id, 'codpostal', $postal );
          update_post_meta( $id, 'antiguedad', $antiguedad );


            update_post_meta( $id, 'envios', $envios );
           update_post_meta( $id, 'reqtrab', $reqtrab );
          update_post_meta( $id, 'quieneson', $quieneson);
          update_post_meta( $id, 'legal', $legal );
          update_post_meta( $id, 'imagen1', $imagen1 );
          update_post_meta( $id, 'imagen2', $imagen2 );
          update_post_meta( $id, 'imagen3', $imagen3);

                   update_post_meta( $id, 'servicio', $servicio );
           update_post_meta( $id, 'dropshipping', $dropshipping );
          update_post_meta( $id, 'mayor', $mayor );
          update_post_meta( $id, 'fabricante', $fabricante );
          update_post_meta( $id, 'liquidador', $liquidador );
          update_post_meta( $id, 'menor', $menor );
          update_post_meta( $id, 'marcas', $marcas );
    
       }

    




 }

public function get_postdata($data)
{
   global $wpdb;

  $id = get_current_user_id();
$post = $wpdb->get_row( "SELECT * FROM $wpdb->posts WHERE post_author = $id" );

  if ($data == 'sitio') {

     echo get_post_meta( $post->ID, 'sitioweb', true );
         
  }elseif ($data == 'pedido') {
     echo get_post_meta( $post->ID, 'pedido', true );
         
  }elseif ($data == 'link') {
     echo $post->guid;
         
  }elseif ($data == 'imagen1') {
     echo get_post_meta( $post->ID, 'imagen1', true );
         
  }elseif ($data == 'imagen2') {
     echo get_post_meta( $post->ID, 'imagen2', true );
         
  }elseif ($data == 'imagen3') {
     echo get_post_meta( $post->ID, 'imagen3', true );
         
  }elseif ($data == 'comprar') {
    echo get_post_meta( $post->ID, 'comprar' , true);
          
  }elseif ($data == 'fax') {
   echo get_post_meta( $post->ID, 'fax', true);
          
  }elseif ($data == 'codpostal') {
   echo get_post_meta( $post->ID, 'codpostal', true);
          
  }elseif($data == 'antiguedad'){
   echo get_post_meta( $post->ID, 'antiguedad', true);

  }elseif ($data == 'envios') {
    
    echo    get_post_meta( $post->ID, 'envios' , true);
  }elseif ($data == 'reqtrab') {
   echo  get_post_meta( $post->ID, 'reqtrab', true);
          
  }elseif ($data == 'quieneson' ) {
  echo  get_post_meta( $post->ID, 'quieneson', true);
     
  }elseif ($data == 'legal') {
  echo   get_post_meta( $post->ID, 'legal' , true);

  }elseif ($data == 'servicio') {
    
    echo get_post_meta( $post->ID, 'servicio' , true);
   
  }elseif ($data == 'dropshipping') {
     echo get_post_meta( $post->ID, 'dropshipping', true );
          
  }elseif ($data == 'mayor') {
  echo get_post_meta( $post->ID, 'mayor', true );
          
}elseif ($data == 'fabricante') {
echo get_post_meta( $post->ID, 'fabricante', true );
        
  }elseif ($data == 'liquidador') {
    echo  get_post_meta( $post->ID, 'liquidador', true );
         
  }elseif ($data == 'marcas') {
   echo  get_post_meta( $post->ID, 'marcas', true );
  }elseif ($data == 'menor') {
   echo  get_post_meta( $post->ID, 'menor', true );
  }
}
public function obtener_proveedor_users($data)
{
global $wpdb;
 $post = get_current_user_id();
 $id = $wpdb->get_row( "SELECT * FROM $wpdb->posts WHERE post_author = $post" );

  if ($data == 'pais') {
 return get_post_meta( $id->ID, $key = 'pais',true);
  }elseif ($data == 'sitio') {

     return get_post_meta( $id->ID, 'sitioweb', true );
         
  }elseif ($data == 'pedido') {
     return get_post_meta( $id->ID, 'pedido', true );
         
  }elseif ($data == 'comprar') {
    return get_post_meta( $id->ID, 'comprar' , true);
          
  }elseif ($data == 'fax') {
   return get_post_meta( $id->ID, 'fax', true);
          
  }elseif ($data == 'codpostal') {
   return get_post_meta( $id->ID, 'codpostal', true);
          
  }elseif($data == 'antiguedad'){
   return get_post_meta( $id->ID, 'antiguedad', true);

  }elseif ($data == 'envios') {
    
    return   get_post_meta( $id->ID, 'envios' , true);
  }elseif ($data == 'reqtrab') {
   echo  get_post_meta( $id->ID, 'reqtrab', true);
          
  }elseif ($data == 'quieneson' ) {
  return  get_post_meta( $id->ID, 'quieneson', true);
     
  }elseif ($data == 'legal') {
  return   get_post_meta( $id->ID, 'legal' , true);

  }elseif ($data == 'servicio') {
    
    return get_post_meta( $id->ID, 'servicio' , true);
   
  }elseif ($data == 'dropshipping') {
     return get_post_meta( $id->ID, 'dropshipping', true );
          
  }elseif ($data == 'mayor') {
  return get_post_meta( $id->ID, 'mayor', true );
          
}elseif ($data == 'fabricante') {
return get_post_meta( $id->ID, 'fabricante', true );
        
  }elseif ($data == 'liquidador') {
    return  get_post_meta( $id->ID, 'liquidador', true );
         
  }elseif ($data == 'menor') {
   return  get_post_meta( $id->ID, 'menor', true );
  }
}

public function obtener_proveedor_user($data)
{
 $id = get_the_ID();

  if ($data == 'pais') {
 echo get_post_meta( $id, $key = 'pais',true);
  }elseif ($data == 'sitio') {

     echo get_post_meta( $id, 'sitioweb', true );
         
  }elseif ($data == 'pedido') {
     echo get_post_meta( $id, 'pedido', true );
         
  }elseif ($data == 'tlf') {
     echo get_post_meta( $id, 'tlf', true );
         
  }elseif ($data == 'email') {
      echo get_post_meta( $id, 'email', true );
         
  }elseif ($data == 'direccion') {

   echo  get_post_meta( $id, 'direccion', true );

  }elseif ($data == 'ciudad') {

   echo  get_user_meta( $id, 'ciudad', true );

  }elseif ($data == 'comprar') {

    echo get_post_meta( $id, 'comprar' , true);
          
  }elseif ($data == 'fax') {
   echo get_post_meta( $id, 'fax', true);
          
  }elseif ($data == 'codpostal') {
   echo get_post_meta( $id, 'codpostal', true);
          
  }elseif($data == 'antiguedad'){
   echo get_post_meta( $id, 'antiguedad', true);

  }elseif ($data == 'marcas') {
   return  get_post_meta( $id, 'marcas', true );
  }elseif ($data == 'envios') {
    
    echo    get_post_meta( $id, 'envios' , true);
  }elseif ($data == 'reqtrab') {
   echo  get_post_meta( $id, 'reqtrab', true);
          
  }elseif ($data == 'quieneson' ) {
  echo  get_post_meta( $id, 'quieneson', true);
     
  }elseif ($data == 'legal') {
  echo   get_post_meta( $id, 'legal' , true);

  }elseif ($data == 'imagen1') {
  echo   get_post_meta( $id, 'imagen1' , true);

  }elseif ($data == 'imagen2') {
  echo   get_post_meta( $id, 'imagen2' , true);

  }elseif ($data == 'imagen3') {
  echo   get_post_meta( $id, 'imagen3' , true);

  }elseif ($data == 'servicio') {
    
    return get_post_meta( $id, 'servicio' , true);
   
  }elseif ($data == 'dropshipping') {
     return get_post_meta( $id, 'dropshipping', true );
          
  }elseif ($data == 'mayor') {
  return get_post_meta( $id, 'mayor', true );
          
}elseif ($data == 'fabricante') {
return get_post_meta( $id, 'fabricante', true );
        
  }elseif ($data == 'liquidador') {
    return get_post_meta( $id, 'liquidador', true );
         
  }elseif ($data == 'menor') {
   return  get_post_meta( $id, 'menor', true );
  }

}




}
$proveedor = new proveedor();
