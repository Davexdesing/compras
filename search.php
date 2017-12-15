<?php

	$_REQUEST['liquidador'];
$_REQUEST['fabricante'];
$_REQUEST['dropshipping'];
$_REQUEST['producto'];
$_REQUEST['categoria'];
$_REQUEST['pais'];
$_REQUEST['envio'];
$_REQUEST['servicio'];
$_REQUEST['menor'];

 /* Template Name: Busqueda */ 

get_header( 'registro' );
 ?>
<form method="GET" action=''>
  <section class="ad-breadcrumb parallex">
            <div class="container page-banner">
               <div class="row">
                  <div class="col-sm-6 col-md-6">
                     <h1>Busqueda</h1>
                  </div>
                  <div class="col-sm-6 col-md-6">
                     <ol class="breadcrumb pull-right">
                        <li><a href="index"
                    >Home</a></li>
                        <li><a href="">Proveedores</a></li>
                        
                     </ol>
                  </div>
               </div>
            </div>
         </section>
<div class="container" style="padding-top: 20px;">
	                        <button class="btn btn-success btn-lg mt-4">
	Buscar
</button>
</div>
         <section class="light-blue ad-listing">
            <div class="container">
               <div class="row">


                  <div class="col-md-8 col-sm-12 col-xs-12 col-md-push-4">
                     <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                        <div class="filters clearfix">
                           <div class="col-md-2 col-xs-12 col-sm-3 nopadding">
                              <p>Buscar: </p>
                           </div>
                           <div class="col-md-4 col-xs-12 col-sm-3  nopadding">
                              <div class="form-group">
                                  <input id="url" value="" style="display:none;">
                                  <input id="ocultopalabra" value="sdfdsf" style="display:none;">
                                  <input type="text" name="producto"  style="
    height: 50px;
    width: 100%;
    color: #9999a6;
        border: 1px solid #F1F1F1;
    border-top: none;
    border-bottom: none;
        padding-left: 15px;
"> 
                                 
                              </div>
                           </div>
                           <div class="col-md-4 col-xs-12 col-sm-3 ">
                              <div class="form-group">
                                  <input id="categoculto" value="" style="display:none" >
                                 <select class="select-category form-control"  id="categoria" name="categoria"  onchange="agregarurl('categoria');" style=" border-top: none;
    border-bottom: none;
    border-right: none;" >  <option value="" label="Select Option"></option>
                                        <?php 
  $categories = obtener_cat(  );
 
foreach ( $categories as $category ) {
   $cat = get_category( $category->term_id, $output = OBJECT ); 
if ($cat->parent == 0) {
	


    ?>

<option value=" <?php
   echo $cat->term_id;
    
    ?>"> <?php
   echo $cat->name . '<br>';
    
    ?></option>
   <?php }
   } ?>
                                    </select>
                              </div>
                           </div>
                           
                           
                           
                                                       
                            <div class="col-md-2 col-xs-12 col-sm-3 nopadding"  id="b1" style="display:none;">
                              <p>Pais </p>
                           </div>
                           <div class="col-md-4 col-xs-12 col-sm-3  nopadding"  id="b2" style="display:none;">
                         
                              <div class="form-group">
                                 <input id="paisoculto" value="" style="display:none;">
                                 <select  class="select-pais form-control" id="pais" name="pais"  onchange="agregarurl('pais');">
                                                                                <option label="Select Option"></option>
                                            
<option value="ps-Afganistan">Afganistan </option>
<option value="ps-Akrotiri">Akrotiri </option>
<option value="ps-Albania">Albania </option>
<option value="ps-Alemania">Alemania </option>
<option value="ps-Andorra">Andorra </option>
<option value="ps-Angola">Angola </option>
<option value="ps-Anguila">Anguila </option>
<option value="ps-Antartida">Antartida </option>
<option value="ps-Antigua y Barbuda">Antigua y Barbuda </option>
<option value="ps-Antillas Neerlandesas">Antillas Neerlandesas </option>
<option value="ps-Arabia Saudi">Arabia Saudi </option>
<option value="ps-Arctic Ocean">Arctic Ocean </option>
<option value="ps-Argelia">Argelia </option>
<option value="ps-Argentina">Argentina </option>
<option value="ps-Armenia">Armenia </option>
<option value="ps-Aruba">Aruba </option>
<option value="ps-Ashmore andCartier Islands">Ashmore andCartier Islands </option>
<option value="ps-Atlantic Ocean">Atlantic Ocean </option>
<option value="ps-Australia">Australia </option>
<option value="ps-Austria">Austria </option>
<option value="ps-Azerbaiyan">Azerbaiyan </option>
<option value="ps-Bahamas">Bahamas </option>
<option value="ps-Bahrain">Bahrain </option>
<option value="ps-Bangladesh">Bangladesh </option>
<option value="ps-Barbados">Barbados </option>
<option value="ps-Belgica">Belgica </option>
<option value="ps-Belice">Belice </option>
<option value="ps-Benin">Benin </option>
<option value="ps-Bermudas">Bermudas </option>
<option value="ps-Bielorrusia">Bielorrusia </option>
<option value="ps-Birmania Myanmar">Birmania Myanmar </option>
<option value="ps-Bolivia">Bolivia </option>
<option value="ps-Bosnia y Hercegovina">Bosnia y Hercegovina </option>
<option value="ps-Botsuana">Botsuana </option>
<option value="ps-Brasil">Brasil </option>
<option value="ps-Brunei">Brunei </option>
<option value="ps-Bulgaria">Bulgaria </option>
<option value="ps-Burkina Faso">Burkina Faso </option>
<option value="ps-Burundi">Burundi </option>
<option value="ps-Butan">Butan </option>
<option value="ps-Cabo Verde">Cabo Verde </option>
<option value="ps-Camboya">Camboya </option>
<option value="ps-Camerun">Camerun </option>
<option value="ps-Canada">Canada </option>
<option value="ps-Chad">Chad </option>
<option value="ps-Chile">Chile </option>
<option value="ps-China">China </option>
<option value="ps-Chipre">Chipre </option>
<option value="ps-Clipperton Island">Clipperton Island </option>
<option value="ps-Colombia">Colombia </option>
<option value="ps-Comoras">Comoras </option>
<option value="ps-Congo">Congo </option>
<option value="ps-Coral Sea Islands">Coral Sea Islands </option>
<option value="ps-Corea del Norte">Corea del Norte </option>
<option value="ps-Corea del Sur">Corea del Sur </option>
<option value="ps-Costa de Marfil">Costa de Marfil </option>
<option value="ps-Costa Rica">Costa Rica </option>
<option value="ps-Croacia">Croacia </option>
<option value="ps-Cuba">Cuba </option>
<option value="ps-Dhekelia">Dhekelia </option>
<option value="ps-Dinamarca">Dinamarca </option>
<option value="ps-Dominica">Dominica </option>
<option value="ps-Ecuador">Ecuador </option>
<option value="ps-Egipto">Egipto </option>
<option value="ps-El Salvador">El Salvador </option>
<option value="ps-El Vaticano">El Vaticano </option>
<option value="ps-Emiratos arabes Unidos">Emiratos arabes Unidos </option>
<option value="ps-Eritrea">Eritrea </option>
<option value="ps-Eslovaquia">Eslovaquia </option>
<option value="ps-Eslovenia">Eslovenia </option>
<option value="ps-Espana">España </option>
<option value="ps-Estados Unidos">Estados Unidos </option>
<option value="ps-Estonia">Estonia </option>
<option value="ps-Etiopia">Etiopia </option>
<option value="ps-Filipinas">Filipinas </option>
<option value="ps-Finlandia">Finlandia </option>
<option value="ps-Fiyi">Fiyi </option>
<option value="ps-Francia">Francia </option>
<option value="ps-Gabon">Gabon </option>
<option value="ps-Gambia">Gambia </option>
<option value="ps-Gaza Strip">Gaza Strip </option>
<option value="ps-Georgia">Georgia </option>
<option value="ps-Ghana">Ghana </option>
<option value="ps-Gibraltar">Gibraltar </option>
<option value="ps-Granada">Granada </option>
<option value="ps-Grecia">Grecia </option>
<option value="ps-Groenlandia">Groenlandia </option>
<option value="ps-Guam">Guam </option>
<option value="ps-Guatemala">Guatemala </option>
<option value="ps-Guernsey">Guernsey </option>
<option value="ps-Guinea">Guinea </option>
<option value="ps-Guinea Ecuatorial">Guinea Ecuatorial </option>
<option value="ps-Guinea-Bissau">Guinea-Bissau </option>
<option value="ps-Guyana">Guyana </option>
<option value="ps-Haiti">Haiti </option>
<option value="ps-Honduras">Honduras </option>
<option value="ps-Hong Kong">Hong Kong </option>
<option value="ps-Hungria">Hungria </option>
<option value="ps-India">India </option>
<option value="ps-Indian Ocean">Indian Ocean </option>
<option value="ps-Indonesia">Indonesia </option>
<option value="ps-Iran">Iran </option>
<option value="ps-Iraq">Iraq </option>
<option value="ps-Irlanda">Irlanda </option>
<option value="ps-Isla Bouvet">Isla Bouvet </option>
<option value="ps-Isla Christmas">Isla Christmas </option>
<option value="ps-Isla Norfolk">Isla Norfolk </option>
<option value="ps-Islandia">Islandia </option>
<option value="ps-Islas Caiman">Islas Caiman </option>
<option value="ps-Islas Cocos">Islas Cocos </option>
<option value="ps-Islas Cook">Islas Cook </option>
<option value="ps-Islas Feroe">Islas Feroe </option>
<option value="ps-Islas Georgia del Sur y Sandwich del Sur">Islas Georgia del Sur y Sandwich del Sur </option>
<option value="ps-Islas Heard y McDonald">Islas Heard y McDonald </option>
<option value="ps-Islas Malvinas">Islas Malvinas </option>
<option value="ps-Islas Marianas del Norte">Islas Marianas del Norte </option>
<option value="ps-IslasMarshall">IslasMarshall </option>
<option value="ps-Islas Pitcairn">Islas Pitcairn </option>
<option value="ps-Islas Salomon">Islas Salomon </option>
<option value="ps-Islas Turcas y Caicos">Islas Turcas y Caicos </option>
<option value="ps-Islas Virgenes Americanas">Islas Virgenes Americanas </option>
<option value="ps-Islas Virgenes Britanicas">Islas Virgenes Britanicas </option>
<option value="ps-Israel">Israel </option>
<option value="ps-Italia">Italia </option>
<option value="ps-Jamaica">Jamaica </option>
<option value="ps-Jan Mayen">Jan Mayen </option>
<option value="ps-Japon">Japon </option>
<option value="ps-Jersey">Jersey </option>
<option value="ps-Jordania">Jordania </option>
<option value="ps-Kazajistan">Kazajistan </option>
<option value="ps-Kenia">Kenia </option>
<option value="ps-Kirguizistan">Kirguizistan </option>
<option value="ps-Kiribati">Kiribati </option>
<option value="ps-Kuwait">Kuwait </option>
<option value="ps-Laos">Laos </option>
<option value="ps-Lesoto">Lesoto </option>
<option value="ps-Letonia">Letonia </option>
<option value="ps-Libano">Libano </option>
<option value="ps-Liberia">Liberia </option>
<option value="ps-Libia">Libia </option>
<option value="ps-Liechtenstein">Liechtenstein </option>
<option value="ps-Lituania">Lituania </option>
<option value="ps-Luxemburgo">Luxemburgo </option>
<option value="ps-Macao">Macao </option>
<option value="ps-Macedonia">Macedonia </option>
<option value="ps-Madagascar">Madagascar </option>
<option value="ps-Malasia">Malasia </option>
<option value="ps-Malaui">Malaui </option>
<option value="ps-Maldivas">Maldivas </option>
<option value="ps-Mali">Mali </option>
<option value="ps-Malta">Malta </option>
<option value="ps-Man, Isle of">Man, Isle of </option>
<option value="ps-Marruecos">Marruecos </option>
<option value="ps-Mauricio">Mauricio </option>
<option value="ps-Mauritania">Mauritania </option>
<option value="ps-Mayotte">Mayotte </option>
<option value="ps-Mexico">Mexico </option>
<option value="ps-Micronesia">Micronesia </option>
<option value="ps-Moldavia">Moldavia </option>
<option value="ps-Monaco">Monaco </option>
<option value="ps-Mongolia">Mongolia </option>
<option value="ps-Montserrat">Montserrat </option>
<option value="ps-Mozambique">Mozambique </option>
<option value="ps-Namibia">Namibia </option>
<option value="ps-Nauru">Nauru </option>
<option value="ps-Navassa Island">Navassa Island </option>
<option value="ps-Nepal">Nepal </option>
<option value="ps-Nicaragua">Nicaragua </option>
<option value="ps-Niger">Niger </option>
<option value="ps-Nigeria">Nigeria </option>
<option value="ps-Niue">Niue </option>
<option value="ps-Noruega">Noruega </option>
<option value="ps-Nueva Caledonia">Nueva Caledonia </option>
<option value="ps-Nueva Zelanda">Nueva Zelanda </option>
<option value="ps-Oman">Oman </option>
<option value="ps-Pacific Ocean">Pacific Ocean </option>
<option value="ps-Paises Bajos">Paises Bajos </option>
<option value="ps-Pakistan">Pakistan </option>
<option value="ps-Palaos">Palaos </option>
<option value="ps-Panama">Panama </option>
<option value="ps-Papua-Nueva Guinea">Papua-Nueva Guinea </option>
<option value="ps-Paracel Islands">Paracel Islands </option>
<option value="ps-Paraguay">Paraguay </option>
<option value="ps-Peru">Peru </option>
<option value="ps-Polinesia Francesa">Polinesia Francesa </option>
<option value="ps-Polonia">Polonia </option>
<option value="ps-Portugal">Portugal </option>
<option value="ps-Puerto Rico">Puerto Rico </option>
<option value="ps-Qatar">Qatar </option>
<option value="ps-Reino Unido">Reino Unido </option>
<option value="ps-Republica Centroafricana">Republica Centroafricana </option>
<option value="ps-Republica Checa">Republica Checa </option>
<option value="ps-Republica Democratica del Congo">Republica Democratica del Congo </option>
<option value="ps-Republica Dominicana">Republica Dominicana </option>
<option value="ps-Ruanda">Ruanda </option>
<option value="ps-Rumania">Rumania </option>
<option value="ps-Rusia">Rusia </option>
<option value="ps-Sahara Occidental">Sahara Occidental </option>
<option value="ps-Samoa">Samoa </option>
<option value="ps-Samoa Americana">Samoa Americana </option>
<option value="ps-San Cristobal y Nieves">San Cristobal y Nieves </option>
<option value="ps-San Marino">San Marino </option>
<option value="ps-San Pedro y Miquelon">San Pedro y Miquelon </option>
<option value="ps-San Vicente y las Granadinas">San Vicente y las Granadinas </option>
<option value="ps-Santa Helena">Santa Helena </option>
<option value="ps-Santa Lucia">Santa Lucia </option>
<option value="ps-Santo Tome y Principe">Santo Tome y Principe </option>
<option value="ps-Senegal">Senegal </option>
<option value="ps-Seychelles">Seychelles </option>
<option value="ps-Sierra Leona">Sierra Leona </option>
<option value="ps-Singapur">Singapur </option>
<option value="ps-Siria">Siria </option>
<option value="ps-Somalia">Somalia </option>
<option value="ps-Southern Ocean">Southern Ocean </option>
<option value="ps-Spratly Islands">Spratly Islands </option>
<option value="ps-Sri Lanka">Sri Lanka </option>
<option value="ps-Suazilandia">Suazilandia </option>
<option value="ps-Sudafrica">Sudafrica </option>
<option value="ps-Sudan">Sudan </option>
<option value="ps-Suecia">Suecia </option>
<option value="ps-Suiza">Suiza </option>
<option value="ps-Surinam">Surinam </option>
<option value="ps-Svalbard y Jan Mayen">Svalbard y Jan Mayen </option>
<option value="ps-Tailandia">Tailandia </option>
<option value="ps-Taiwan">Taiwan </option>
<option value="ps-Tanzania">Tanzania </option>
<option value="ps-Tayikistan">Tayikistan </option>
<option value="ps-TerritorioBritanicodel Oceano Indico">TerritorioBritanicodel Oceano Indico </option>
<option value="ps-Territorios Australes Franceses">Territorios Australes Franceses </option>
<option value="ps-Timor Oriental">Timor Oriental </option>
<option value="ps-Togo">Togo </option>
<option value="ps-Tokelau">Tokelau </option>
<option value="ps-Tonga">Tonga </option>
<option value="ps-Trinidad y Tobago">Trinidad y Tobago </option>
<option value="ps-Tunez">Tunez </option>
<option value="ps-Turkmenistan">Turkmenistan </option>
<option value="ps-Turquia">Turquia </option>
<option value="ps-Tuvalu">Tuvalu </option>
<option value="ps-Ucrania">Ucrania </option>
<option value="ps-Uganda">Uganda </option>
<option value="ps-Union Europea">Union Europea </option>
<option value="ps-Uruguay">Uruguay </option>
<option value="ps-Uzbekistan">Uzbekistan </option>
<option value="ps-Vanuatu">Vanuatu </option>
<option value="ps-Venezuela">Venezuela </option>
<option value="ps-Vietnam">Vietnam </option>
<option value="ps-Wake Island">Wake Island </option>
<option value="ps-Wallis y Futuna">Wallis y Futuna </option>
<option value="ps-West Bank">West Bank </option>
<option value="ps-World">World </option>
<option value="ps-Yemen">Yemen </option>
<option value="ps-Yibuti">Yibuti </option>
<option value="ps-Zambia">Zambia </option>
<option value="ps-Zimbabue">Zimbabue </option>
                                    </select>
                              </div>
                           </div>
                           
                          
                            <div class="col-md-4 col-xs-12 col-sm-3 " id="b3" style="display:none;">
                               
                              <div class="form-group">
                                <select class="select-envio form-control" id="envio" name="envio"  onchange="agregarurl('envio');">
                                                                                <option label="Select Option"></option>
                                            
                                       <option value="Envios-Nacionales">Envios Nacionales</option>
                                       <option value="Envios-Internacionales">Envios Internacionales</option>                                     
                                    </select>
                              </div>
                           </div>
                           
                            
                           
                           
                           
                        </div>
                     </div>
                     <div class="all-ads-list-box2">
                         
   <div class="all-ads-list-box2">
                         
                         

  	<div class="ad-box ad-box-2">
                           <div class="col-md-4 col-sm-3 col-xs-12 nopadding">
                              <div class="comp-logo">
                                 <a href=""><img src="proveedor/proveedor-premium12.jpg" class="img-responsive"> </a>
                              </div>
                              
                           </div>
                           <div class="col-md-8 col-sm-9 col-xs-12">
                              <div class="ad-box-2-detail">
                                 <div class="ad-title-box">
                                    <span class="cat"><i class="flaticon-dog-1"></i></span>
                                    <div class="ad-title"><a href="provedor?=1389"><?php the_title( $before = '', $after = '', $echo = true ); ?></a></div>
                                    <div class="ad-title-meta">
                                       <span>
                                       <i class="fa fa-map-marker"></i> Envios Nacionales  
                                       </span>
                                       <span>
                                       <i class="fa fa-calendar"></i> Público general                                       </span>
                                    </div>
                                 </div>
                                 <div class="clearfix"></div>
                                 <div class="ad-desc">
                                    <p><?php the_excerpt(); ?></p>
                                 </div>
                                 <div class="ad-bottom-area">
                                    <a href="<?php the_shortlink( $text = '', $title = '', $before = '', $after = '' ); ?>" class="btn btn-default pull-right"> Ver Más <i class="fa fa-angle-double-right"></i> </a>
                                 </div>
                              </div>
                           </div>
                        </div>

       
                    
                          
                    
                     </div>
                     </div>
                  </div>
                  <div class="col-md-4 col-sm-12 col-xs-12 col-md-pull-8">
                     <aside>
                         <div class="widget">
                           <div class="widget-heading"><span class="title"> Proveedor </span></div>
                           <ul class="categories-module nobullet">
                              <li>
                                 <div class="radio">
                                    <label>
                                                                                 <input type="radio" id="servicio"  onchange="agregarurl('Gratuito')">
                                                                                 <span class="cr"><i class="cr-icon fa fa-circle"></i></span>
                                        <a href=""> Gratuito  </a>
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                                                                 <input type="radio"  id="servicio" onchange="agregarurl('Premium')">
                                                                                 <span class="cr"><i class="cr-icon fa fa-circle"></i></span>
                                        <a href=""> Premium  </a>
                                    </label>
                                </div>
                              </li>
                           </ul>
                        </div>
                        <div class="widget">
                           <div class="widget-heading"><span class="title"> Tipo Proveedor</span></div>
                           <ul class="categories-module nobullet">
                              <li>
                              	<div class="checkbox">
                                    <label>
                                                                                    <input type="checkbox"  name="dropshipping" onclick="agregarurl('Dropshipping')" >
                                                                                
                                        <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                                        <a href=""> Dropshipping </a>
                                    </label>
                                </div>
                              </li>
                              <li>
                              	<div class="checkbox">
                                    <label>
                                                                                 <input type="checkbox"  id="tipo" name="servicio" onchange="agregarurl('Wholesale')" >
                                                                                  <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                                        <a href="">  Wholesale </a>
                                    </label>
                                </div>
                              </li>
                              <li>
                                 <div class="checkbox">
                                    <label>
                                                                                  <input type="checkbox" id="tipo"  name="fabricante" onchange="agregarurl('Fabricante')" >
                                                                                 <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                                        <a href=""> Fabricante </a>
                                    </label>
                                </div>
                              </li>
                              <li>
                                 <div class="checkbox">
                                    <label>
                                                                                  <input type="checkbox" id="tipo"  name="menor" onchange="agregarurl('Menor')" >
                                                                                  <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                                        <a href=""> Venta al por Menor </a>
                                    </label>
                                </div>
                              </li>
                              <li>
                                 <div class="checkbox">
                                    <label>
                                                                                   <input type="checkbox" id="tipo"  name="liquidador" onchange="agregarurl('Liquidador')"  >
                                                                                    <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                                        <a href=""> Liquidador  </a>
                                    </label>
                                </div> 
                              </li>
                           </ul>
                        </div>
                                               </aside>
                  </div>
               </div>
            </div>
         </section>
</form>
         <?php get_footer( ); ?>