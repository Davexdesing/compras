<?php

editar_usuario();
 /* Template Name: Cuenta Usuario */ 


if (is_user_logged_in() == false) {
  
  wp_redirect( site_url() );
}else{
 get_header( 'cuenta' );
 ?>


 <section class="dashboard-menu light-blue">
            <div class="container">
               <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12">
                     <div class="dashboard-menu-container">
                        <ul id="pills-tab" role="tablist">
                                                      
                             <li>
                              <a>
                                 <div class="icon"><i class="fa fa-search"></i></div>
                                 <div class="menue-name"> Buscar </div>
                                 
                              </a>
                           </li>
                            <li>
                              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                 <div class="icon"><i class="fa fa-home" aria-hidden="true"></i>
</div>
                                 <div class="menue-name"> Home</div>
                                 
                              </a>
                           </li>
                                                       <li  >
                              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                                 <div class="icon"><i class="fa fa-edit"></i></div>
                                 <div class="menue-name">Editar Perfil</div>
                              </a>
                           </li>
                                                      <li>
                              <a id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                                 <div class="icon"><i class="fa fa-star-o"></i></div>
                                 <div class="menue-name">PREMIUM</div>
                              </a>
                           </li>


                                                   <li>
                              <a id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                                 <div class="icon"><i class="fa fa-star-o"></i></div>
                                 <div class="menue-name">CONTACTO</div>
                              </a>
                           </li>
                       
                          
                                
                                                                                     
                           <li>                              
                           <a href="<?php echo wp_logout_url(site_url()); ?>">
                    
                                 <div class="icon"><i class="fa fa-close"></i></div>
                                 <div class="menue-name">Cerrar Sesion</div>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>


<div class="tab-content" id="pills-tabContent">
<section class="dashboard light-blue tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="container">
               <div class="row">
                  <div class="col-md-4 col-sm-12 col-xs-12 col-md-push-8">
                     <div class="main-box profile-box-contact">
                      
                     </div>
                  </div>
                  <div class="col-md-8 col-sm-8 col-xs-12 col-md-pull-4" >
                     <div class="dashboard-main-disc">
                        <div class="heading-inner">
                           <p class="title">Editar Perfil</p>
                        </div>
                        <div class="row">
                           <form method="post">
                              <div class="col-md-6 col-sm-12">
                                 <div class="form-group">
                                    <label>Nombre<span class="required">*</span></label>
                                    <input placeholder="" class="form-control" type="text" value="<?php echo obtener_userdata('nickname'); ?>" name="username">
                                 </div>
                              </div>
                              
                              <div class="col-md-6 col-sm-12">
                                 <div class="form-group">
                                    <label>Correo <span class="required">*</span></label>
                                    <input placeholder="" class="form-control" type="email" value="<?php echo obtener_userdata('email'); ?>" name="email">
                                 </div>
                              </div>
                              <div class="col-md-6 col-sm-12">
                                 <div class="form-group">
                                    <label>Telefono <span class="required">*</span></label>
                                    <input placeholder="" class="form-control" type="text" value="<?php echo obtener_userdata('tlf'); ?>" name="tlf">
                                 </div>
                              </div>
                              <div class="col-md-6 col-sm-12">
                                 <div class="form-group">
                                    <label>Ciudad </label>
                                    <input placeholder="" class="form-control" type="text" value="<?php echo obtener_userdata('ciudad'); ?>" name="ciudad">
                                 </div>
                              </div>
                              
                              
                              <div class="col-md-12 col-sm-12">
                                 <div class="form-group">
                                    <label>Direccion </label>
                                    <input placeholder="" class="form-control" type="text" value="<?php echo obtener_userdata('direccion'); ?>"  name="direccion">
                                 </div>
                              </div>
                              <div class="col-md-12 col-sm-12">
                                 <div class="form-group">
                                    <label>Biografia</label>
                                    <textarea cols="6" rows="8" placeholder="" class="form-control" name="biografia"><?php echo obtener_userdata('descripcion'); ?> </textarea>
                                 </div>
                              </div>
                              
                              <div class="col-md-6 col-sm-12" style="display:none;">
                                 <div class="form-group">
                                    <label>Facebook </label>
                                    <input  class="form-control" type="text" value="" name="facebook">
                                 </div>
                              </div>
                              <div class="col-md-6 col-sm-12" style="display:none;">
                                 <div class="form-group">
                                    <label>Twitter </label>
                                    <input  class="form-control" type="text" value="" name="twitter">
                                 </div>
                              </div>
                              <div class="col-md-6 col-sm-12" style="display:none;">
                                 <div class="form-group">
                                    <label>Instagram <span class="required">*</span></label>
                                    <input  class="form-control" type="email" value="" name="instagram">
                                 </div>
                              </div>
                              
                                                             
                                                            <div class="col-md-6 col-sm-12" style="display:none;" >
                                 <div class="form-group">
                                    <label>Sitio Web </label>
                                    <input  class="form-control" type="text" value="" name="web">
                                 </div>
                              </div>
                              <div class="col-md-6 col-sm-12" style="display:none;" >
                                 <div class="form-group">
                                    <label>Publicidad </label>
                                    <input  class="form-control" type="text" value="" name="publi">
                                 </div>
                              </div>
                              <div class="col-md-6 col-sm-12"  style="display:none;">
                                 <div class="form-group">
                                    <label>Skype </label>
                                    <input  class="form-control" type="text" value="" name="skype">
                                 </div>
                              </div>
                                                            
          
                              
                              <div class="col-md-12 col-sm-12">
                                 <button  class="btn btn-default pull-right"><i class="fa fa-save"></i> Guardar </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
                  <section class="dashboard light-blue tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" >
             <section class="pricing-section-1 pricing-white light-blue" style="padding: 0px 0px;">
            <div class="container">
               <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12">
                                            <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="ui_box">
                           <div class="ui_box__inner">
                              <h2>Plan Premium</h2>
                                
                                <div class="features_left">
                               
                                  <ul>
                                  <li>Búsqueda avanzada</li>
                                  <li>Proveedores Gratuitos</li>
                                  <li style="
    color: #6bc242;
"><b>Proveedores Premium</b></li>
                                  <li>Soporte</li>
                                  <li>Añadir a favoritos</li>
                                  <li>Ebooks</li>
                                    <li class="cut">Ofertas especiales</li>
                                  <li class="cut">Asesoría Premium</li>
                                </ul>
                                
                                </div>
                                
                                <div class="price-rates">€12 <small>Mensual</small></div>
                                
                                <p>Accede ahora y contacta con todos nuestros proveedores premium.</p><br>
                                </div>
                         <div class="drop">
                                <form action="post_redsys.php" method="post" style="display:none" >
                               <input type="text"  name="nombre" value="Carlos Sanchez" style="display:none" >
                                <input type="text"  name="correo"  value="carlosanchez0567@gmail.com"  style="display:none">
                                <input type="text"  name="contra"  value="carsan0567" style="display:none">
                                <input type="text"  name="pais"  value="Colombia " style="display:none">
                                 <input type="text"  id="valor"   name="valor"  value="9.92" style="display:none">
                                  <button type="submit" id="submitPayment" name="submitPayment" class="btn btn-default btn-search-submit pull-right" value="" style="display:none"></button>
                                </form>
                                 <a onclick="paquete('Premium-Mes');" style="cursor: pointer;">
                                 <p>Seleccionar Plan </p>
                              </a>
                              <div class="arrow"></div>
                           </div>
                        </div>
                     </div>
                      <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="ui_box">
                           <div class="ui_box__inner">
                              <h2>Plan Premium Superior</h2>

<div class="features_left">
<ul>
  <li>Búsqueda avanzada</li>
  <li>Proveedores Gratuitos</li>
  <li style="
    color: #6bc242;
"><b>Proveedores Premium</b></li>
  <li>Soporte</li>
  <li>Añadir a favoritos</li>
  <li>Ofertas especiales</li>
  <li>Ebooks Premium</li>
  <li>Asesoría Premium</li>
</ul>
</div>

<div class="price-rates">€42 <small>Mes</small></div>

<p>Accede a todos nuestros proveedores premium, ebooks y ofertas exclusivas durante todo un mes.</p>
</div>
                           <div class="drop">
                                <form action="post_redsys.php" method="post" style="display:none" >
                               <input type="text"  name="nombre" value="Carlos Sanchez" style="display:none" >
                                <input type="text"  name="correo"  value="carlosanchez0567@gmail.com"  style="display:none">
                                <input type="text"  name="contra"  value="carsan0567" style="display:none">
                                <input type="text"  name="pais"  value="Colombia " style="display:none">
                                 <input type="text"  id="valor"   name="valor"  value="34.71" style="display:none">
                                  <button type="submit" id="submitPayment" name="submitPayment" class="btn btn-default btn-search-submit pull-right" value="" style="display:none"></button>
                                </form>
                                 <a onclick="paquete('Superior-Mes');" style="cursor: pointer;">
                                 <p>Selecionar Plan</p>
                              </a>
                              <div class="arrow"></div>
                           </div>
                        </div>
                     </div>
                     
                     
                     <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="ui_box">
                           <div class="ui_box__inner">
                               <h2>Plan Premium Superior</h2>

<div class="features_left">
<ul>
<li>Búsqueda avanzada</li>
  <li>Proveedores Gratuitos</li>
<li style="
    color: #6bc242;
"><b>Proveedores Premium</b></li>
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
                                <form action="post_redsys.php" method="post" style="display:none" >
                               <input type="text"  name="nombre" value="Carlos Sanchez" style="display:none" >
                                <input type="text"  name="correo"  value="carlosanchez0567@gmail.com"  style="display:none">
                                <input type="text"  name="contra"  value="carsan0567" style="display:none">
                                <input type="text"  name="pais"  value="Colombia " style="display:none">
                                 <input type="text"  id="valor"   name="valor"  value="81.82" style="display:none">
                                  <button type="submit" id="submitPayment" name="submitPayment" class="btn btn-default btn-search-submit pull-right" value="" style="display:none"></button>
                                </form>
                                 <a onclick="paquete('Superior-TresMes');" style="cursor: pointer;">
                                 <p>Selecionar Plan</p>
                              </a>
                              <div class="arrow"></div>
                           </div>
                        </div>
                     </div>
                     
                     
                     
                
                  </div>
               </div>
            </div>
         </section>
           
         </section>
           
         <section class="dashboard light-blue" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="container">
               <div class="row ">
               	  <div class="col-md-4 col-sm-12 col-xs-12 col-md-push-8 ">
                     
                  </div>
                  <div class="col-md-8 col-sm-12 col-xs-12 col-md-pull-4">
                     <div class="dashboard-main-disc">
                                                 
                        <div class="heading-inner">
                           <p class="title">Biografia</p>
                        </div>
                        <div>
                           <p>
                                                             </p>
                        </div>
                        <div class="meta-detail">
                           <div class="heading-inner">
                              <p class="title">Detalles Perfil</p>
                              <p><?php echo obtener_userdata('descripcion'); ?></p>
                              <br>
                           </div>
                           <dl>
                              <dt><i class="fa fa-user"></i></dt>
                              <dd><?php echo obtener_userdata('nickname'); ?></dd>
                              <dt><i class="fa fa-envelope-o"></i></dt>
                              <dd><?php echo obtener_userdata('email'); ?></dd>
                              <dt><i class="fa fa-globe"></i></dt>
                              <dd><?php echo obtener_userdata('pais'); ?></dd>
                              
                                                           
                           </dl>
                        </div>
                     </div>
                  </div>
                  
               </div>
            </div>
         </section>


         


         </div>
     <?php get_footer('registro'); ?>
     <?php } ?>