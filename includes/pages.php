<?php 
add_action( 'admin_menu', 'register_my_custom_menu_page' );
function register_my_custom_menu_page() {
  // add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $function, $icon_url, $position );
  add_menu_page( 'SubsCat', 'Anadir muchas subcategory', 'manage_options', 'custom.php', 'subir_sub', 'dashicons-welcome-widgets-menus', 90 );

    add_menu_page( 'subpro', 'Add Proveedor', 'manage_options', 'customs.php', 'proveex', 'dashicons-welcome-widgets-menus', 90 );
}

function subir_sub(){

$_POST['cat'];

$_POST['sub1'];
$_POST['s1'];
$_POST['sub2'];
$_POST['s2'];
$_POST['sub3'];
$_POST['s3'];
$_POST['sub4'];
$_POST['s4'];


	//Define the category
if ($_POST['sub1'] && $_POST['s1']) {
	$wpdocs_cat = array('cat_name' => $_POST["sub1"], 'category_description' => $_POST['sub1'] . 'Subcategoria', 'category_nicename' =>  $_POST['s1'], 'category_parent' => $_POST['cat']);

$wpdocs_cat_id = wp_insert_category($wpdocs_cat);
}

if ($_POST['sub2'] && $_POST['s2']) {
	$wpdocs_cat = array('cat_name' => $_POST["sub2"], 'category_description' => $_POST['sub1'] . 'Subcategoria', 'category_nicename' =>  $_POST['s2'], 'category_parent' => $_POST['cat']);

$wpdocs_cat_id = wp_insert_category($wpdocs_cat);
}
 
 if ($_POST['sub3'] && $_POST['s3']) {
	$wpdocs_cat = array('cat_name' => $_POST["sub3"], 'category_description' => $_POST['sub1'] . 'Subcategoria', 'category_nicename' =>  $_POST['s3'], 'category_parent' => $_POST['cat']);
$wpdocs_cat_id = wp_insert_category($wpdocs_cat);

}
 

 if ($_POST['sub4'] && $_POST['s4']) {
	$wpdocs_cat = array('cat_name' => $_POST["sub4"], 'category_description' => $_POST['sub1'] . 'Subcategoria', 'category_nicename' =>  $_POST['s4'], 'category_parent' => $_POST['cat']);

$wpdocs_cat_id = wp_insert_category($wpdocs_cat);
}
 
 
// Create the category
$wpdocs_cat_id = wp_insert_category($wpdocs_cat);
	?>
		<h1>Anadir Sub categorias.</h1> <br>
<form method="post">
		<select name="cat">
		<label> Categoria</label>
		 <option value="" label="Select Option"></option>
		   <?php 
  $categories = obtener_cat();
 
foreach ( $categories as $category ) {
   $cat = get_category( $category->term_id, $output = OBJECT ); 
if($cat->parent == 0){

    ?>

<option value=" <?php
   echo $cat->term_id;
    
    ?>"> <?php
   echo $cat->name . '<br>';
    
    ?></option>
   <?php 

}
   } ?>
                                                            
                                    </select>

                                    <br>
                                    <div>
                                    <label>
                                    	Anadir Subcategory
                                    </label>
                                    <input type="text" name="sub1"><br>
                                    subCategoria sin espacio <input type="text" name="s1" style="margin-bottom: 20px;">
                                    </div>

                                     <div>
                                    <label>
                                    	Anadir Subcategory
                                    </label>
                                    <input type="text" name="sub2"><br>
                                   subCategoria sin espacio <input type="text" name="s2" style="margin-bottom: 20px;">
                                    </div>


                                     <div>
                                    <label>
                                    	Anadir Subcategory
                                    </label>
                                    <input type="text" name="sub3"><br>
                                   subCategoria sin espacio <input type="text" name="s3" style="margin-bottom: 20px;">
                                    </div>

                                     <div>
                                    <label>
                                    	Anadir Subcategory
                                    </label>
                                    <input type="text" name="sub4"><br>
                                    subCategoria sin espacio<input type="text" name="s4" style="margin-bottom: 20px;">
                                    </div>

                                    <button>Anadir</button>
                                    </form>
	<?php
}


function proveex(){

}
  