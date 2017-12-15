<?php get_header('registro'); ?>

 <section class="ad-breadcrumb parallex">
            <div class="container page-banner">
               <div class="row">
                  <div class="col-sm-6 col-md-6">
                     <h1>Información del Proveedor</h1>
                  </div>
                  <div class="col-sm-6 col-md-6">
                     <ol class="breadcrumb pull-right">
                        <li><a href="/">Home</a></li>
                        <li><a href="">Proveedor</a></li>
                     </ol>
                  </div>
               </div>
            </div>
         </section>
         <section class="ad-listing-single">
            <div class="container">
               <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12">
                     <div class="detail-titile light-blue">
                        <div class="row">
                           <div class="col-xs-12 col-sm-9">
                               <div class="cat-icon">
                                 <i class='flaticon-laptop'></i>
                              </div>
                              <div class="ad-name">
                                                                 
                                
                                                                <h3 class="" >Solo Premium <a href='' data-toggle='modal' data-target='.premium-model'><i class='fa fa-question-circle'style='font-size:16px;' aria-hidden='true'></i></a></h3>                                
                                 <div  class="detail-location">  <input id="lugar" style="display:none;" value=""></div>
                              </div>
                              
                           </div>
                           <div class="col-xs-12 col-sm-3">
                                                             </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-md-7 col-sm-12 col-xs-12 nopaddingright">
                           <div class="slick-gallery-slideshow">
                              <div class="slider gallery-slideshow gallery-slideshow-not-tab">
                                 <div>
                                    <div class="image"><img style="max-width: 100%" src="<?php the_post_thumbnail_url(); ?>" alt="image" /></div>
                                 </div>
                                 
                                 <div>
                                                                      </div>
                                   
                                 <div>
                                                                       </div>
                                
                              </div>
                              <div class="slider gallery-nav gallery-nav-not-tab">
                                 <div>
                                                                       </div>
                                 <div>
                                                                       </div>
                                  
                                 <div>
                                                                       </div>
                                
                              </div>
                           </div>
                        </div>
                        <div class="col-md-5 col-sm-12 col-xs-12 nopaddingleft">
                           <div class="ad-detail">
                              <div class="ad-detail-title">
                                 <h3> DETALLES</h3>
                              </div>
                              <div class="ad-detail-desc light-blue ">
                                 <ul>

                                    <li>
                                       <span class="pull-left">Dropshipping</span>
                                       <span class="pull-right">No ofrece</span>
                                    </li>
                                    <li>
                                       <span class="pull-left">Wholesale</span>
                                       <span class="pull-right">Si ofrece</span>
                                    </li>
                                    <li>
                                       <span class="pull-left">Fabricante</span>
                                       <span class="pull-right">Si ofrece</span>
                                    </li>  
                                     <li>
                                       <span class="pull-left">Liquidador</span>
                                       <span class="pull-right">No ofrece</span>
                                    </li> 
                                      <li>
                                       <span class="pull-left">Venta al Menor</span>
                                       <span class="pull-right">No ofrece</span>
                                    </li> 
                                    
                                    <li>
                                       <span class="pull-left">Pedido Minimo</span>
                                       <span class="pull-right"></span>
                                    </li>
                                                                                                                                                                                                                                                                <li>
                                       <span class="pull-left">Compra <?php price(); ?>r</span>
                                       <span class="pull-right"></span>
                                    </li>
                                    
                                     <li>
                                       <span class="pull-left">Envios</span>
                                       <span class="pull-right">Envios Internacionales</span>
                                    </li>
                                                                                                           
                                 </ul>
                              </div>
                              
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-md-8 col-sm-12 col-sm-12">
                           <div class="heading-inner">
                              <p class="title">Descripción</p>
                           </div>
                           <p style="text-align: justify;">
                           <?php $my_postid = get_the_ID();//This is page id or post id
$content_post = get_post($my_postid);
$content = $content_post->post_content;
$content = apply_filters('the_content', $content);
$content = str_replace(']]>', ']]&gt;', $content);
echo $content; ?>
                               </p>
                         
                           
                           </div>
                        <?php get_sidebar(  ); ?>
  
                           
                                                      <div class="col-md-8">
                                <div class="heading-inner">
                              <p class="title">Comentarios</p>
                           </div> 
                           <div class="comments-container ">
                              <ul id="comentarios">
                                 
                                                                        
                              </ul>
                              
                             
                           </div>
                           </div>
                                                    </div>
                     </div>
                  </div>
               </div>
               
            </div>
            
            
         </section>


<?php  get_footer('registro'); ?>