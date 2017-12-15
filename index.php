<?php get_header(); ?>

<?php get_search_form( $echo = true ); ?>
		<div class="panel-body">

		<!-- Loop 1  -->
        <div class="tab-content" id="div-principal"><div class="tab-pane active  fadeInUp" id="tab1">
<?php $args = array( 'post_type' => 'proveedores', 'posts_per_page' => 8, );
$loop = new WP_Query( $args ); ?>
<?php if ( $loop->have_posts() ) : ?>
<?php  while ( $loop->have_posts() ) : $loop->the_post(); ?>


                              
                              <div class="col-md-12 col-sm-12 col-xs-12 nopadding" id="aut1"><div class="listing-post"><div class="col-md-3 col-sm-12 col-xs-12 nopadding"><div class="listing-image"> <img src="<?php
                                    $proveedor->obtener_proveedor_user('imagen1');
                                    ?>" class="img-responsive" alt="image"> </div></div><div class="col-md-6 col-sm-12 col-xs-12 reducir"><div class="listing-desc"><a href="<?php the_permalink(); ?>"></a><h3 class="listing-desc-title"><a href="<?php the_permalink(); ?>"> <?php the_title(); ?>  </a><a href="<?php echo site_url(); ?>" data-toggle="modal" data-target=".premium-model"><i class="fa fa-question-circle" style="font-size:16px;" aria-hidden="true"></i></a></h3><p style=" text-align: justify;
    text-justify: inter-word;"><?php the_excerpt(); ?><span style="color: #6cc243;"><b> ...</b></span></p><?php if ($proveedor->obtener_proveedor_user('dropshipping') == 'on'): ?>
        <button style="margin-left: 15px;margin-top: 15px;" type="button" class="btn btn-success">Dropshipping</button>
    <?php endif ?>
    <?php if ($proveedor->obtener_proveedor_user('servicio') == 'on'): ?>
        <button style="margin-left: 15px;margin-top: 15px;" type="button" class="btn btn-success">Wholesale</button>
    <?php endif ?>
   <?php if ($proveedor->obtener_proveedor_user('fabricante') == 'on'): ?>
        <button style="margin-left: 15px;margin-top: 15px;" type="button" class="btn btn-success">Fabricante</button> 
   <?php endif ?><span class="listing-desc-date"></span></div></div>
    <div class="col-md-3 col-sm-12 col-xs-12 reducir2 nopadding"> <div class="listing-info"> <span class="listing-address"> <i class="flaticon-internet" style="display:inline-block"></i><?php $proveedor->obtener_proveedor_user('pais'); ?></span> <span class="listing-phone"> <i class="flaticon-transport" style="display:inline-block"></i> <?php $proveedor->obtener_proveedor_user('comprar'); ?></span> <span class="listing-address"><i class="flaticon-people-1" style="display:inline-block"></i><?php $proveedor->obtener_proveedor_user('envios'); ?></span> <a href="<?php the_permalink(); ?>"><button style="background-color: #6bc242;
    color: #FFF;
    border-radius: 5px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    font-weight: 600;
    text-transform: uppercase;
    border: 1px solid #6bc242;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease- 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;">Ver Mas <i class="fa fa-angle-right"></i></button></a></div></div></div><div class="listing-post"></div></div>

<?php endwhile; ?>

<?php else : ?>
	<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>





<!-- Loop 8  -->


<?php $args = array( 'post_type' => 'proveedores', 'posts_per_page' => 4,  'category_name' => 'herramientas' );
$loops = new WP_Query( $args ); ?>
<?php if ( $loops->have_posts() ) : ?>
<?php  while ( $loops->have_posts() ) : $loops->the_post(); ?>


                              <div class="tab-content" id="div-principal"><div class="tab-pane active  fadeInUp" id="tab8"><div class="col-md-12 col-sm-12 col-xs-12 nopadding" id="aut1"><div class="listing-post"><div class="col-md-3 col-sm-12 col-xs-12 nopadding"><div class="listing-image"> <img src="<?php echo the_post_thumbnail_url( ); ?>" class="img-responsive" alt="image"> </div></div><div class="col-md-6 col-sm-12 col-xs-12 reducir"><div class="listing-desc"><a href="<?php the_permalink(); ?>"></a><h3 class="listing-desc-title"><a href="<?php the_permalink(); ?>"> <?php the_title(); ?>  </a><a href="<?php echo site_url(); ?>" data-toggle="modal" data-target=".premium-model"><i class="fa fa-question-circle" style="font-size:16px;" aria-hidden="true"></i></a></h3><p style=" text-align: justify;
    text-justify: inter-word;"><?php the_excerpt(); ?><span style="color: #6cc243;"><b> ...</b></span></p><button style="margin-left: 15px;margin-top: 15px;" type="button" class="btn btn-success">Dropshipping</button><button style="margin-left: 15px;margin-top: 15px;" type="button" class="btn btn-success">Wholesale</button><button style="margin-left: 15px;margin-top: 15px;" type="button" class="btn btn-success">Fabricante</button> <span class="listing-desc-date"></span></div></div>
    <div class="col-md-3 col-sm-12 col-xs-12 reducir2 nopadding"> <div class="listing-info"> <span class="listing-address"> <i class="flaticon-internet" style="display:inline-block"></i>China </span> <span class="listing-phone"> <i class="flaticon-transport" style="display:inline-block"></i> empresas-registradas </span> <span class="listing-address"><i class="flaticon-people-1" style="display:inline-block"></i>Envios Internacionales</span> <a href="<?php the_permalink(); ?>"><button style="background-color: #6bc242;
    color: #FFF;
    border-radius: 5px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    font-weight: 600;
    text-transform: uppercase;
    border: 1px solid #6bc242;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease- 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;">Ver Mas <i class="fa fa-angle-right"></i></button></a></div></div></div><div class="listing-post"></div></div>

<?php endwhile; ?>

<?php else : ?>
	<p><?php esc_html_e( 'Mucho mas.' ); ?></p>
<?php endif; ?>






</div>
  <section class="hg_section--relative p-0">
      <!-- Background -->
      <div class="kl-bg-source">
        <!-- Video background container -->
        <div class="kl-video-container kl-bg-source__video">
          <!-- Video wrapper -->
          <div class="kl-video-wrapper video-grid-overlay">
            <!-- Self Hosted Video Source -->
            <div class="kl-video valign halign" style="width: 100%; height: 100%;" data-setup="{
              &quot;position&quot;: &quot;absolute&quot;,
              &quot;loop&quot;: true,
              &quot;autoplay&quot;: true,
              &quot;muted&quot;: true,
              &quot;mp4&quot;:&quot;https://comerciorapido.com/kallyas/videos/headvideo.mp4&quot;,                              
              &quot;poster&quot;:&quot;https://comerciorapido.com/kallyas/videos/headvideo.jpg&quot;,
              &quot;video_ratio&quot;: &quot;1.7778&quot;
              }">
            <div id="video_background_video_0" style="z-index: -1; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: hidden;"><video width="1349" height="759" autoplay="" loop="" onended="this.play()" style="position: absolute; top: -138px; left: 0px;"><source src="https://comerciorapido.com/kallyas/videos/headvideo.mp4" type="video/mp4"></video></div></div>
            <!--/ Self Hosted Video Source -->
          </div>
          <!--/ Video wrapper -->
        </div>
        <!--/ Video background container -->
      </div>
      <!--/ Background -->
       <!-- Content full width -->
      <div class="full_width">
        <div class="row gutter-0">
          <div class="col-md-6 col-sm-6">
            <div class="row gutter-0 custom-position">
              <div class="col-md-12 col-sm-12">
                <!-- Icon box element right aligned and light theme style -->
                <div class="kl-iconbox kl-iconbox--type-img kl-iconbox--fright kl-iconbox--align-right text-right kl-iconbox--theme-light ">
                  <div class="kl-iconbox__inner">
                    <!-- Icon/Image wrapper -->
                    <div class="kl-iconbox__icon-wrapper">
                      <!-- Image -->
                      <img src="<?php echo get_template_directory_uri(); ?>/img/ico-world.svg" class="kl-iconbox__icon max-w220" alt="WE&#39;RE WORLDWIDE" title="">
                    </div>
                    <!-- /.kl-iconbox__icon-wrapper -->

                    <!-- Content -->
                    <div class="kl-iconbox__content-wrapper">
                      <!-- Title wrapper -->
                      <div class="kl-iconbox__el-wrapper kl-iconbox__title-wrapper">
                        <!-- Title with montserrat font, custom size, line height, white color and top margin  -->
                        <h3 class="kl-iconbox__title montserrat fs-32 lh-32 white mtop-50">PROVEEDOR PREMIUM </h3>
                      </div>
                      <!--/ Title wrapper -->

                      <!-- Description wrapper -->
                      <div class="kl-iconbox__el-wrapper kl-iconbox__desc-wrapper">
                        <!-- Description with custom font size and white color -->
                        <p class="kl-iconbox__desc fs-14 white" style="text-align: justify;
    text-justify: inter-word;">
                        Localiza tu proveedor en pocos minutos y empieza a comerciar con el. Contacta con fabricantes y distribuidores para evita intermediarios que elevan su valor hasta un 100%.
                        </p>
                        <!--/ Description -->
                      </div>
                      <!--/ Description wrapper -->
                    </div>
                    <!-- /.kl-iconbox__content-wrapper -->
                  </div>
                  <!--/ .kl-iconbox__inner -->
                </div>
                <!--/ Icon box element right aligned and light theme style -->
              </div>
              <!--/ col-sm-offset-3 col-md-9 col-sm-9 -->
            </div>
            <!--/ row gutter-0 custom-position -->
          </div>
          <!--/ col-md-6 col-sm-6 -->

          <div class="col-md-6 col-sm-6">
            <div class="row gutter-0 custom-position3">
              <div class="col-md-12 col-sm-12">
                <!-- Icon box element left aligned and light theme style -->
                <div class="kl-iconbox kl-iconbox--type-img kl-iconbox--fleft kl-iconbox--align-left text-left kl-iconbox--theme-light ">
                  <div class="kl-iconbox__inner">
                    <!-- Icon/Image wrapper -->
                    <div class="kl-iconbox__icon-wrapper">
                      <!-- Image -->
                      <img src="<?php echo get_template_directory_uri(); ?>/img/ico-results.svg" class="kl-iconbox__icon max-w220" alt="INSTANT RESULTS" title="INSTANT RESULTS">
                    </div>
                    <!-- /.kl-iconbox__icon-wrapper -->

                    <!-- Content -->
                    <div class="kl-iconbox__content-wrapper">
                      <!-- Title wrapper -->
                      <div class="kl-iconbox__el-wrapper kl-iconbox__title-wrapper">
                        <!-- Title with montserrat font, custom size, line height, white color and top margin  -->
                        <h3 class="kl-iconbox__title montserrat fs-32 lh-32 white mtop-50">LISTA EXCLUSIVA</h3>
                      </div>
                      <!--/ Title wrapper -->

                      <!-- Description wrapper -->
                      <div class="kl-iconbox__el-wrapper kl-iconbox__desc-wrapper">
                        <!-- Description with custom font size and white color -->
                        <p class="kl-iconbox__desc fs-14 white" style="text-align: justify;
    text-justify: inter-word;">
                         Tenemos todo tipo de proveedor de dropshiping, venta al por mayor y menor, fabricantes o liquidadores. Vende en tu tienda, redes sociales, en internet o en marketplace como Amazon, eBay o Mercado libre.
                        </p>
                        <!--/ Description -->
                      </div>
                      <!--/ Description wrapper -->
                    </div>
                    <!-- /.kl-iconbox__content-wrapper -->
                  </div>
                  <!--/ .kl-iconbox__inner -->
                </div>
                <!--/ Icon box element left aligned and light theme style -->
              </div>
              <!--/ col-md-9 col-sm-9 -->
            </div>
            <!--/ row gutter-0 custom-position2 -->
          </div>
          <!--/ col-md-6 col-sm-6 -->
        </div>
        <!--/ row gutter-0 -->
      </div>
      <!--/ Content full width -->
    </section>
         
         
         
 <section class="category-section-4 light-grey">
            <div class="container">
               <div class="row">

                  <div class="col-md-12 col-sm-12 col-xs-12">
                     <div class="Heading-title black">
                        <h1>Browse Categories</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                     </div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12">
                                 <?php 
  $categories = obtener_cat(  );
 
foreach ( $categories as $category ) {
   $cat = get_category( $category->term_id, $output = OBJECT ); 

if ($category->parent == 0) {
 $part = get_term_children( $cat->term_id, 'category' );
 ?>
 
    <div class="col-md-3 col-sm-6">
                        <div class="category-list">
                           <div class="category-list-icon">
                              <i class="flaticon-technology-23"></i>
                              <div class="category-list-title">
                                 <h5><a href="#"><?php echo $cat->name; ?></a></h5>
                              </div>
                           </div>
                           <div class="category-sub-list">
                              <ul class="category-list-data">

                                
                                    <?php
                                     foreach ( $part as $child ) {
  $term = get_term_by( 'id', $child, 'category' );
  echo '<li><a href="' . get_term_link( $child, 'category' ) . '">' . $term->name . '</a></li>';
}
 ?>
                                 
                              </ul>
                           </div>
                           <div class="view-more">
                              <a href="#">View All</a>
                           </div>
                        </div>
                     </div>
   <?php
}

    } ?>
                     
                  
                    
                     
                  </div>
               </div>
            </div>
         </section>
         <section class="pricing-section-1 pricing-white light-blue">
            <div class="container">
               <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12">
                     <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="Heading-title black">
                           <h1>Precios</h1>
                            </div>
                     </div>
                     <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="ui_box">
                           <div class="ui_box__inner">
                            <h2>Plan Gratuito</h2>
                                    <div class="features_left">
                                    <ul>
                                    	<li>Búsqueda avanzada</li>
                                    	<li>Proveedores Gratuitos</li>
                                    	<li class="cut">Un mes Premium</li>
                                    	<li class="cut">Soporte</li>
                                    	<li class="cut">Añadir a favoritos</li>
                                    	<li class="cut">Ofertas especiales</li>
                                    	<li class="cut">Ebooks</li>
                                    	<li class="cut">Asesoría Premium</li>
                                    </ul>
                                    </div>
                                    
                                    <div class="price-rates">0€<small>Siempre</small></div>
                                    
                                    <p>Prueba nuestra plataforma sin coste y accede a todos nuestros proveedores gratuitos. </p>
                                    </div>
                           <div class="drop">
                              <a href="registro">
                                 <p>Seleccionar Plan</p>
                              </a>
                              <div class="arrow"></div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="ui_box">
                           <div class="ui_box__inner">
                              <h2>Plan Premium</h2>
                                
                                <div class="features_left">
                                <ul>
                                	<li>Búsqueda avanzada</li>
                                	<li>Proveedores Gratuitos</li>
                                	<li>Un mes Premium</li>
                                	<li>Soporte</li>
                                	<li>Añadir a favoritos</li>
                                	<li class="cut">Ebooks</li>
                                    <li class="cut">Ofertas especiales</li>
                                	<li class="cut">Asesoría Premium</li>
                                </ul>
                                </div>
                                
                                <div class="price-rates">€12 <small>Mensual</small></div>
                                
                                <p>Accede ahora y contacta con todos nuestros proveedores premium.</p>
                                </div>
                           <div class="drop">
                              <a href="registro">
                                 <p>Seleccionar Plan</p>
                              </a>
                              <div class="arrow"></div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="ui_box">
                           <div class="ui_box__inner">
                              <h2>Plan Premium Superior</h2>

<div class="features_left">
<ul>
	<li>Búsqueda avanzada</li>
	<li>Proveedores Gratuitos</li>
	<li>Tres meses Premium</li>
	<li>Soporte</li>
	<li>Añadir a favoritos</li>
	<li>Ofertas especiales</li>
	<li>Ebooks Premium</li>
	<li>Asesoría Premium</li>
</ul>
</div>

<div class="price-rates">€42 <small>1 Mes</small></div>

<p>Accede a todos nuestros proveedores premium, ebooks y ofertas exclusivas durante todo un mes.</p>
</div>
                           <div class="drop">
                              <a href="registro">
                                 <p>Seleccionar Plan</p>
                              </a>
                              <div class="arrow"></div>
                           </div>
                        </div>
                     </div>
                     
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="ui_box">
                           <div class="ui_box__inner">
                              <h2>Plan Premium Superior</h2>

<div class="features_left">
<ul>
	<li>Búsqueda avanzada</li>
	<li>Proveedores Gratuitos</li>
	<li>Tres meses Premium</li>
	<li>Soporte</li>
	<li>Añadir a favoritos</li>
	<li>Ofertas especiales</li>
	<li>Ebooks Premium</li>
	<li>Asesoría Premium</li>
</ul>
</div>

<div class="price-rates">€99 <small>3 Meses</small></div>

<p>Accede a todos nuestros proveedores premium, ebooks y ofertas exclusivas durante 3 meses.</p>
</div>
                           <div class="drop">
                              <a href="registro">
                                 <p>Seleccionar Plan</p>
                              </a>
                              <div class="arrow"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
<?php get_footer(); ?>