<?php

 /* Template Name: Registro */ 


if (is_user_logged_in()) {
  
  wp_redirect( site_url() );
}else{
 get_header( 'registro' );
 ?>

         <!-- mobile-menu-area-end -->
         <section class="ad-breadcrumb parallex">
            <div class="container page-banner">
            	<div class="row">
                   <div class="col-sm-6 col-md-6">
                      <h1>AGREGAR USUARIO</h1>
                   </div>
                   <div class="col-sm-6 col-md-6">
                      <ol class="breadcrumb pull-right">
                         <li><a href="index"
                    >Home</a></li>
                         <li><a href="">Registrar</a></li>
                      </ol>
                   </div>
                </div>
            </div>
         </section>
         <section class="post-ad light-blue">
            <div class="container">
               <div class="row">
                  
                  <div class="col-md-10 col-sm-10 col-xs-12 nopadding col-md-offset-1">
                     <div class="post-ad-box post-ad-box3">
                        <div class="col-md-12 col-xs-12 col-sm-12">                           
                        <form  method="post" onsubmit="return validar()" name="formu" id="formu">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                              <div class="ad-detail-heading">
                                 <h4>Agregar Detalles</h4>
                              </div>
                           </div>
                          <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                              <div class="form-group toggle-btn">
                               <div class="form-check">
  <label class="form-check-label">
<div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input" type="radio" name="tipo" id="exampleRadios2" value="empresa" checked>
   Empresa
  </label>
</div>
                              </div>
                           </div>
                            <div class="col-md-12 col-sm-12 col-xs-12 nopadding" id="divnif" >
                              <div class="form-group">
                                 <label class="col-sm-4 col-form-label">NIF</label>
                                 <div class="col-sm-8">
                                    <input type="text" class="form-control" name="nif" placeholder="Digite si es empresa" value="">
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                              <div class="form-group">
                                 <label class="col-sm-4 col-form-label">Nombre</label>
                                 <div class="col-sm-8">
                                    <input type="text" class="form-control" name="username" placeholder="Nombre" value="">
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                              <div class="form-group">
                                 <label class="col-sm-4 col-form-label">Correo</label>
                                 <div class="col-sm-8">
                                    <input type="text" class="form-control" name="email" id="correo" placeholder="Correo" value="" required="">
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-12 col-sm-12 col-xs-12" style="display:none;" id="mencorreo">
                              <div class="ad-detail-heading">
                                 <i class="fa fa-info-circle" aria-hidden"true" style="
    font-size: 18px;
    color: #5cb85c;
"> El correo no concide verifica de nuevo  </i>
                              </div>
                           </div>
                           
                             <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                              <div class="form-group">
                                 <label class="col-sm-4 col-form-label">Repetir Correo</label>
                                 <div class="col-sm-8">
                                    <input type="text" class="form-control" name="recorreo" id="recorreo" placeholder="Repetir Correo" value="" required="" >
                                 </div>
                              </div>
                           </div>
                            <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                              <div class="form-group">
                                 <label class="col-sm-4 col-form-label">Contraseña</label>
                                 <div class="col-sm-8">
                                    <input type="password" class="form-control" name="password" placeholder="Contraseña" value="" required="">
                                 </div>
                              </div>
                           </div>
                           
                           <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                              <div class="form-group">
                                 <label class="col-sm-4 col-form-label">Teléfono</label>
                                 <div class="col-sm-8">
                                    <input type="text" class="form-control" name="tlf" id="tel" placeholder="Teléfono" value=""  >
                                 </div>
                              </div>
                           </div>
                          
                          
                           
                           <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                              <div class="form-group">
                                 <label  class="col-sm-4 col-form-label">Pais</label>
                                 <div class="col-sm-8">
                                      <input type="text"  name="pais"  value="" style="display:none">
                                    <select class="select-pais form-control" name="pais">
                                        <option value=""></option>
<option value="Afganistán ">Afganistán </option>
<option value="Akrotiri ">Akrotiri </option>
<option value="Albania ">Albania </option>
<option value="Alemania ">Alemania </option>
<option value="Andorra ">Andorra </option>
<option value="Angola ">Angola </option>
<option value="Anguila ">Anguila </option>
<option value="Antártida ">Antártida </option>
<option value="Antigua y Barbuda ">Antigua y Barbuda </option>
<option value="Antillas Neerlandesas ">Antillas Neerlandesas </option>
<option value="Arabia Saudí ">Arabia Saudí </option>
<option value="Arctic Ocean ">Arctic Ocean </option>
<option value="Argelia ">Argelia </option>
<option value="Argentina ">Argentina </option>
<option value="Armenia ">Armenia </option>
<option value="Aruba ">Aruba </option>
<option value="Ashmore andCartier Islands ">Ashmore andCartier Islands </option>
<option value="Atlantic Ocean ">Atlantic Ocean </option>
<option value="Australia ">Australia </option>
<option value="Austria ">Austria </option>
<option value="Azerbaiyán ">Azerbaiyán </option>
<option value="Bahamas ">Bahamas </option>
<option value="Bahráin ">Bahráin </option>
<option value="Bangladesh ">Bangladesh </option>
<option value="Barbados ">Barbados </option>
<option value="Bélgica ">Bélgica </option>
<option value="Belice ">Belice </option>
<option value="Benín ">Benín </option>
<option value="Bermudas ">Bermudas </option>
<option value="Bielorrusia ">Bielorrusia </option>
<option value="Birmania Myanmar ">Birmania Myanmar </option>
<option value="Bolivia ">Bolivia </option>
<option value="Bosnia y Hercegovina ">Bosnia y Hercegovina </option>
<option value="Botsuana ">Botsuana </option>
<option value="Brasil ">Brasil </option>
<option value="Brunéi ">Brunéi </option>
<option value="Bulgaria ">Bulgaria </option>
<option value="Burkina Faso ">Burkina Faso </option>
<option value="Burundi ">Burundi </option>
<option value="Bután ">Bután </option>
<option value="Cabo Verde ">Cabo Verde </option>
<option value="Camboya ">Camboya </option>
<option value="Camerún ">Camerún </option>
<option value="Canadá ">Canadá </option>
<option value="Chad ">Chad </option>
<option value="Chile ">Chile </option>
<option value="China ">China </option>
<option value="Chipre ">Chipre </option>
<option value="Clipperton Island ">Clipperton Island </option>
<option value="Colombia ">Colombia </option>
<option value="Comoras ">Comoras </option>
<option value="Congo ">Congo </option>
<option value="Coral Sea Islands ">Coral Sea Islands </option>
<option value="Corea del Norte ">Corea del Norte </option>
<option value="Corea del Sur ">Corea del Sur </option>
<option value="Costa de Marfil ">Costa de Marfil </option>
<option value="Costa Rica ">Costa Rica </option>
<option value="Croacia ">Croacia </option>
<option value="Cuba ">Cuba </option>
<option value="Dhekelia ">Dhekelia </option>
<option value="Dinamarca ">Dinamarca </option>
<option value="Dominica ">Dominica </option>
<option value="Ecuador ">Ecuador </option>
<option value="Egipto ">Egipto </option>
<option value="El Salvador ">El Salvador </option>
<option value="El Vaticano ">El Vaticano </option>
<option value="Emiratos Árabes Unidos ">Emiratos Árabes Unidos </option>
<option value="Eritrea ">Eritrea </option>
<option value="Eslovaquia ">Eslovaquia </option>
<option value="Eslovenia ">Eslovenia </option>
<option value="España ">España </option>
<option value="Estados Unidos ">Estados Unidos </option>
<option value="Estonia ">Estonia </option>
<option value="Etiopía ">Etiopía </option>
<option value="Filipinas ">Filipinas </option>
<option value="Finlandia ">Finlandia </option>
<option value="Fiyi ">Fiyi </option>
<option value="Francia ">Francia </option>
<option value="Gabón ">Gabón </option>
<option value="Gambia ">Gambia </option>
<option value="Gaza Strip ">Gaza Strip </option>
<option value="Georgia ">Georgia </option>
<option value="Ghana ">Ghana </option>
<option value="Gibraltar ">Gibraltar </option>
<option value="Granada ">Granada </option>
<option value="Grecia ">Grecia </option>
<option value="Groenlandia ">Groenlandia </option>
<option value="Guam ">Guam </option>
<option value="Guatemala ">Guatemala </option>
<option value="Guernsey ">Guernsey </option>
<option value="Guinea ">Guinea </option>
<option value="Guinea Ecuatorial ">Guinea Ecuatorial </option>
<option value="Guinea-Bissau ">Guinea-Bissau </option>
<option value="Guyana ">Guyana </option>
<option value="Haití ">Haití </option>
<option value="Honduras ">Honduras </option>
<option value="Hong Kong ">Hong Kong </option>
<option value="Hungría ">Hungría </option>
<option value="India ">India </option>
<option value="Indian Ocean ">Indian Ocean </option>
<option value="Indonesia ">Indonesia </option>
<option value="Irán ">Irán </option>
<option value="Iraq ">Iraq </option>
<option value="Irlanda ">Irlanda </option>
<option value="Isla Bouvet ">Isla Bouvet </option>
<option value="Isla Christmas ">Isla Christmas </option>
<option value="Isla Norfolk ">Isla Norfolk </option>
<option value="Islandia ">Islandia </option>
<option value="Islas Caimán ">Islas Caimán </option>
<option value="Islas Cocos ">Islas Cocos </option>
<option value="Islas Cook ">Islas Cook </option>
<option value="Islas Feroe ">Islas Feroe </option>
<option value="Islas Georgia del Sur y Sandwich del Sur ">Islas Georgia del Sur y Sandwich del Sur </option>
<option value="Islas Heard y McDonald ">Islas Heard y McDonald </option>
<option value="Islas Malvinas ">Islas Malvinas </option>
<option value="Islas Marianas del Norte ">Islas Marianas del Norte </option>
<option value="IslasMarshall ">IslasMarshall </option>
<option value="Islas Pitcairn ">Islas Pitcairn </option>
<option value="Islas Salomón ">Islas Salomón </option>
<option value="Islas Turcas y Caicos ">Islas Turcas y Caicos </option>
<option value="Islas Vírgenes Americanas ">Islas Vírgenes Americanas </option>
<option value="Islas Vírgenes Británicas ">Islas Vírgenes Británicas </option>
<option value="Israel ">Israel </option>
<option value="Italia ">Italia </option>
<option value="Jamaica ">Jamaica </option>
<option value="Jan Mayen ">Jan Mayen </option>
<option value="Japón ">Japón </option>
<option value="Jersey ">Jersey </option>
<option value="Jordania ">Jordania </option>
<option value="Kazajistán ">Kazajistán </option>
<option value="Kenia ">Kenia </option>
<option value="Kirguizistán ">Kirguizistán </option>
<option value="Kiribati ">Kiribati </option>
<option value="Kuwait ">Kuwait </option>
<option value="Laos ">Laos </option>
<option value="Lesoto ">Lesoto </option>
<option value="Letonia ">Letonia </option>
<option value="Líbano ">Líbano </option>
<option value="Liberia ">Liberia </option>
<option value="Libia ">Libia </option>
<option value="Liechtenstein ">Liechtenstein </option>
<option value="Lituania ">Lituania </option>
<option value="Luxemburgo ">Luxemburgo </option>
<option value="Macao ">Macao </option>
<option value="Macedonia ">Macedonia </option>
<option value="Madagascar ">Madagascar </option>
<option value="Malasia ">Malasia </option>
<option value="Malaui ">Malaui </option>
<option value="Maldivas ">Maldivas </option>
<option value="Malí ">Malí </option>
<option value="Malta ">Malta </option>
<option value="Man, Isle of ">Man, Isle of </option>
<option value="Marruecos ">Marruecos </option>
<option value="Mauricio ">Mauricio </option>
<option value="Mauritania ">Mauritania </option>
<option value="Mayotte ">Mayotte </option>
<option value="México ">México </option>
<option value="Micronesia ">Micronesia </option>
<option value="Moldavia ">Moldavia </option>
<option value="Mónaco ">Mónaco </option>
<option value="Mongolia ">Mongolia </option>
<option value="Montserrat ">Montserrat </option>
<option value="Mozambique ">Mozambique </option>
<option value="Namibia ">Namibia </option>
<option value="Nauru ">Nauru </option>
<option value="Navassa Island ">Navassa Island </option>
<option value="Nepal ">Nepal </option>
<option value="Nicaragua ">Nicaragua </option>
<option value="Níger ">Níger </option>
<option value="Nigeria ">Nigeria </option>
<option value="Niue ">Niue </option>
<option value="Noruega ">Noruega </option>
<option value="Nueva Caledonia ">Nueva Caledonia </option>
<option value="Nueva Zelanda ">Nueva Zelanda </option>
<option value="Omán ">Omán </option>
<option value="Pacific Ocean ">Pacific Ocean </option>
<option value="Países Bajos ">Países Bajos </option>
<option value="Pakistán ">Pakistán </option>
<option value="Palaos ">Palaos </option>
<option value="Panamá ">Panamá </option>
<option value="Papúa-Nueva Guinea ">Papúa-Nueva Guinea </option>
<option value="Paracel Islands ">Paracel Islands </option>
<option value="Paraguay ">Paraguay </option>
<option value="Perú ">Perú </option>
<option value="Polinesia Francesa ">Polinesia Francesa </option>
<option value="Polonia ">Polonia </option>
<option value="Portugal ">Portugal </option>
<option value="Puerto Rico ">Puerto Rico </option>
<option value="Qatar ">Qatar </option>
<option value="Reino Unido ">Reino Unido </option>
<option value="República Centroafricana ">República Centroafricana </option>
<option value="República Checa ">República Checa </option>
<option value="República Democrática del Congo ">República Democrática del Congo </option>
<option value="República Dominicana ">República Dominicana </option>
<option value="Ruanda ">Ruanda </option>
<option value="Rumania ">Rumania </option>
<option value="Rusia ">Rusia </option>
<option value="Sáhara Occidental ">Sáhara Occidental </option>
<option value="Samoa ">Samoa </option>
<option value="Samoa Americana ">Samoa Americana </option>
<option value="San Cristóbal y Nieves ">San Cristóbal y Nieves </option>
<option value="San Marino ">San Marino </option>
<option value="San Pedro y Miquelón ">San Pedro y Miquelón </option>
<option value="San Vicente y las Granadinas ">San Vicente y las Granadinas </option>
<option value="Santa Helena ">Santa Helena </option>
<option value="Santa Lucía ">Santa Lucía </option>
<option value="Santo Tomé y Príncipe ">Santo Tomé y Príncipe </option>
<option value="Senegal ">Senegal </option>
<option value="Seychelles ">Seychelles </option>
<option value="Sierra Leona ">Sierra Leona </option>
<option value="Singapur ">Singapur </option>
<option value="Siria ">Siria </option>
<option value="Somalia ">Somalia </option>
<option value="Southern Ocean ">Southern Ocean </option>
<option value="Spratly Islands ">Spratly Islands </option>
<option value="Sri Lanka ">Sri Lanka </option>
<option value="Suazilandia ">Suazilandia </option>
<option value="Sudáfrica ">Sudáfrica </option>
<option value="Sudán ">Sudán </option>
<option value="Suecia ">Suecia </option>
<option value="Suiza ">Suiza </option>
<option value="Surinam ">Surinam </option>
<option value="Svalbard y Jan Mayen ">Svalbard y Jan Mayen </option>
<option value="Tailandia ">Tailandia </option>
<option value="Taiwán ">Taiwán </option>
<option value="Tanzania ">Tanzania </option>
<option value="Tayikistán ">Tayikistán </option>
<option value="TerritorioBritánicodel Océano Indico ">TerritorioBritánicodel Océano Indico </option>
<option value="Territorios Australes Franceses ">Territorios Australes Franceses </option>
<option value="Timor Oriental ">Timor Oriental </option>
<option value="Togo ">Togo </option>
<option value="Tokelau ">Tokelau </option>
<option value="Tonga ">Tonga </option>
<option value="Trinidad y Tobago ">Trinidad y Tobago </option>
<option value="Túnez ">Túnez </option>
<option value="Turkmenistán ">Turkmenistán </option>
<option value="Turquía ">Turquía </option>
<option value="Tuvalu ">Tuvalu </option>
<option value="Ucrania ">Ucrania </option>
<option value="Uganda ">Uganda </option>
<option value="Unión Europea ">Unión Europea </option>
<option value="Uruguay ">Uruguay </option>
<option value="Uzbekistán ">Uzbekistán </option>
<option value="Vanuatu ">Vanuatu </option>
<option value="Venezuela ">Venezuela </option>
<option value="Vietnam ">Vietnam </option>
<option value="Wake Island ">Wake Island </option>
<option value="Wallis y Futuna ">Wallis y Futuna </option>
<option value="West Bank ">West Bank </option>
<option value="World ">World </option>
<option value="Yemen ">Yemen </option>
<option value="Yibuti ">Yibuti </option>
<option value="Zambia ">Zambia </option>
<option value="Zimbabue ">Zimbabue </option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-12 col-sm-12 col-xs-12" style="display:none;" id="mencondicion">
                              <div class="ad-detail-heading">
                                 <i class="fa fa-info-circle" aria-hidden"true" style="
    font-size: 18px;
    color: #5cb85c;
"> Por favor indicar si acepta los terminos y condiciones  </i>
                              </div>
                           </div>
                           
                           <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                              <div class="form-group">
                                   <label class="col-sm-4 col-form-label"></label>
                                 <div class="col-sm-8">
                                   <input type="checkbox" name="condicion" value="si" onclick="acepto();"> Aceptar <a href="Condiciones" target="_blank">Terminos y Condiciones</a><br>
                                    <input type="text" name="confacepto" value="" style="display:none;"> 
                                 </div>
                              </div>
                               
                           </div>
                           <button class="btn btn-info btn-lg">Registrar</button>
                             
               </form>        
                           
                                 
                   <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                             
                           
                           <section class="pricing-section-1 pricing-white light-blue">
            <div class="container">
               <div class="row">
                  <div class="col-md-8 col-sm-12 col-xs-12">                     
                     <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="ui_box">
                           <div class="ui_box__inner">
                              <h2>Plan Gratuito</h2>
                                    <div class="features_left">
                                    <ul>
                                    	<li>Búsqueda avanzada</li>
                                    	<li>Proveedores Gratuitos</li>
                                    	<li class="cut">Proveedores Premium</li>
                                    	<li class="cut">Soporte</li>
                                    	<li class="cut">Añadir a favoritos</li>
                                    	<li class="cut">Ofertas especiales</li>
                                    	<li class="cut">Ebooks</li>
                                    	<li class="cut">Asesoría Premium</li>
                                    </ul>
                                    </div>
                                    
                                    <div class="price-rates">0€<small>Siempre</small></div>
                                    
                                    <p>Prueba nuestra plataforma sin coste y accede a  proveedores gratuitos. </p>
                                    </div>
                           <script type="text/javascript" src="js/extraer.js"></script>
                           <div class="drop">
                              <a onclick="paquete('Gratuito');" style="cursor: pointer;">
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
                                
                                <div class="price-rates">12€ <small>Mensual</small></div>
                                
                                <p>Accede ahora y contacta con todos nuestros proveedores premium.</p>
                                </div>
                           <div class="drop">
                              <a onclick="paquete('Premium-Mes');" style="cursor: pointer;">
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

<div class="price-rates">42€ <small>Mes</small></div>

<p>Accede a todos nuestros proveedores premium, ebooks y ofertas exclusivas durante todo un mes.</p>
</div>
                           <div class="drop">
                              <a onclick="paquete('Superior-Mes');" style="cursor: pointer;">
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

<div class="price-rates">99€ <small>3 Meses</small></div>

<p>Accede a todos nuestros proveedores premium, ebooks y ofertas exclusivas durante 3 meses.</p>
</div>
                           <div class="drop">
                              <a onclick="paquete('Superior-TresMes');" style="cursor: pointer;">
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
         </div>
                      <div class="form-group" style="display: none">                               
                                 <div class="col-sm-8">
                                    <input type="text" id="valor" class="form-control" name="valor" placeholder="Nombre" value="" >
                                 </div>
                              </div>
                          <div class="col-md-12 col-sm-12 col-xs-12 nopadding">
                              <div class="form-group form-action" style="display: none;">
                                 <button type="submit" id="submitPayment" name="submitPayment" class="btn btn-default btn-search-submit pull-right" value="" >Agregar</</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  
               </div>
            </div>
         </section>
        
 
         <a href="#" class="scrollup"><i class="fa fa-chevron-up"></i></a>
         <!-- LOGIN MODEL  -->

         <!-- REGISTERATION MODEL  -->

     <?php get_footer('registro'); ?>
         <!-- FOR THIS PAGE ONLY -->

<?php } ?>