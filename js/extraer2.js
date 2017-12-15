
                producto1();
                 function producto1() {					          
                   $.post('automatico-productos.php', {
                     productos : "hola"
                   }, function(respuesta) {                    
                     $("#productos").html(respuesta.sesion);                                                           
                   }, 'json');
                      producto2();
                 }

               function producto2() {
                   var categoria=document.getElementById("categoriaprove").value;                
                   $.post('automatico-productos.php', {
                     productosdiv : categoria
                   }, function(respuesta) {                    
                     $("#productosdiv").html(respuesta.sesion);                                                           
                   }, 'json');
                   document.getElementById("productosdiv").style.display="block";

                 }                   
                 function agregarproducto(hola) {
                 var parrafo = document.getElementById(hola);                
                 var contenido = parrafo.innerHTML;   
                 var concatenar="";  
                 var lista=  document.getElementById("lisprod").value;             
                   if(lista!=""  && lista.indexOf(contenido)==-1){                    
                    concatenar = lista+","+contenido;
                  }
                   if(lista==""){
                     concatenar = contenido;                    
                  }
                  if(lista!="" && lista.indexOf(contenido)!=-1){
                     concatenar = lista;                    
                  } 
                  document.getElementById("lisprod").value=concatenar;
                 }
                 
                 
                  function agregarmarca(id) {                 
                 var parrafo = document.getElementById(id);                
                 var contenido = parrafo.innerHTML; 
                 var concatenar="";  
                 var lista=  document.getElementById("lismarcas").value;
                 if(lista!=""  && lista.indexOf(contenido)==-1){                    
                    concatenar = lista+","+contenido;
                  }
                   if(lista==""){
                     concatenar = contenido;                    
                  }
                  if(lista!="" && lista.indexOf(contenido)!=-1){
                     concatenar = lista;                    
                  }
                 
                  document.getElementById("lismarcas").value=concatenar;
                 }

                 function paquete(valor){     
                   if(valor=='Gratuito'){                      
                       document.getElementById("valor").value=0;
                   }if(valor=='Premium-Mes'){
                    document.getElementById("valor").value=9;
                   }             
                  document.getElementById("submitPayment").value=valor;
                   document.getElementById("submitPayment").click();
                 }

        function dinamicoselect(x){
          var html="";         
          if(x.value=="1"){                          
                                      html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Aceites</option>"
                                       html+="<option value='2'>2. Aperitivos</option>"
                                       html+="<option value='3'>3. Carne</option>"
                                       html+="<option value='4'>4. Lotes de navidad</option>"
                                       html+="<option value='5'>5. Alimentos para dieta</option>"
                                       html+="<option value='6'>6. Alimentos para bebé</option>"
                                       html+="<option value='7'>7. Golosinas</option>" 
                                       html+="<option value='8'>8. Salsas</option>"
                                       html+="<option value='9'>9. Alimentos congelados</option>"
                                       html+="<option value='10'>10. Alimentos delicatessen</option>"
                                       html+="<option value='11'>11. Cereales</option>"
                                       html+="<option value='12'>12. Legumbres</option>"                                       
                                       html+="<option value='13'>13. Productos de legumbres</option>"
                                       html+="<option value='14'>14. Tubérculos</option>"
                                       html+="<option value='15'>15. Frutas</option>"
                                       html+="<option value='16'>16. Producto de fruta </option>"
                                       html+="<option value='17'>17. Frutos secos</option>"
                                       html+="<option value='18'>18. Semillas</option>"
                                       html+="<option value='19'>19. Productos grasos</option>"
                                       html+="<option value='20'>20. Huevos</option>"
                                       html+="<option value='21'>21. Hielo</option>" 
                                        html+="<option value='22'>22. Complementos alimentarios</option>"
                                       html+="<option value='23'>23. Miel</option>"
                                       html+="<option value='24'>24. Productos de panadería</option>"
                                        html+="<option value='25'>25. Productos de pastelería</option>"
                                       html+="<option value='26'>26. Pescado</option>"
                                       html+="<option value='27'>27. Alimentos precocinados </option>"
                                        html+="<option value='28'>28. Alimentos preelaborados</option>"
                                       html+="<option value='29'>29. Alimentos lácteos</option>"
                                        html+="<option value='30'>30. Alimentos de IV gama</option>"
                                       html+="<option value='31'>31. Productos semiconservas</option>"
                                        html+="<option value='32'>32. Cobertura de alimentos</option>"
                                       html+="<option value='33'>33. Infusiones</option>"
                                        html+="<option value='34'>34. Vegetales</option>"
                                        html+="<option value='35'>35. Alimentos agrícolas</option>"
                                       
                        }
                        if(x.value=="2"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Bebidas alcohólicas</option>"
                                       html+="<option value='2'>2. Bebidas refrescantes </option>"
                                       html+="<option value='3'>3. Bebidas con frutas</option>"
                                       html+="<option value='4'>4. Café </option>"
                                       html+="<option value='5'>5. Bebidas lácteas</option>"
                               
                        }
                               
                       
                        if(x.value=="3"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Botas</option>"
                                       html+="<option value='2'>2. Zapato infantil </option>"
                                       html+="<option value='3'>3. Zapato deportivo</option>"
                                       html+="<option value='4'>4. Zapato de baile </option>"
                                       html+="<option value='5'>5. Zapatos especiales</option>"
                                       html+="<option value='7'>7. Zapatos usados</option>"
                                       html+="<option value='8'>8. Zapatos para casa </option>"
                                       html+="<option value='9'>9. Sandalias</option>"
                                       html+="<option value='10'>10. Complementos de zapatos</option>"
                                       html+="<option value='11'>11. Material de arreglo de zapatos </option>"
                              
                        }

                        if(x.value=="4"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Parte exterior</option>"
                                       html+="<option value='2'>2. Parte interior </option>"
                                       html+="<option value='3'>3. Automóviles</option>"
                                       html+="<option value='4'>4. Herramientas para taller mecánico </option>"
                                       html+="<option value='5'>5. Artículos para el cuidado del auto</option>"                                       
                                       html+="<option value='6'>6. Herramientas para vehículo</option>"
                                       
                        }

                        if(x.value=="5"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>Parte exterior</option>"
                                       html+="<option value='2'>Parte interior </option>"
                                       html+="<option value='3'>Triciclos</option>"                                     
                                       
                        }
                        
                        if(x.value=="6"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Cinturones</option>"
                                       html+="<option value='2'>2. Bufandas </option>"
                                       html+="<option value='3'>3. Gafas</option>"
                                       html+="<option value='4'>4. Gorras </option>"
                                       html+="<option value='5'>5. Guantes</option>"
                                       html+="<option value='6'>6. Sombreros </option>"
                                       html+="<option value='7'>7. Pañuelos</option>"                                     
                                       html+="<option value='8'>8. Accesorios para cabello</option>" 
                                       html+="<option value='9'>9. Gorros</option>" 
                                       html+="<option value='10'>10. Tatuajes temporales’</option>" 
                        }
                        if(x.value=="7"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Accesorios electrónicos</option>"
                                       html+="<option value='2'>2. Componentes activos </option>"
                                       html+="<option value='3'>3. Componentes pasivos</option>"
                                       html+="<option value='4'>4. Herramientas de producción electrónica </option>"
                                       html+="<option value='5'>5. Componentes de optoelectrónica</option>"
                                       html+="<option value='6'>6. Productos electrónicos </option>"
                                       html+="<option value='7'>7. Rotulos electrónicos</option>"      
                                       html+="<option value='8'>8. Sistemas para el procesamiento de datos </option>"
                                                                 
                                       
                        }

                        if(x.value=="8"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Herramientas de rodamiento</option>"
                                       html+="<option value='2'>2. Elementos para tubería </option>"
                                       html+="<option value='3'>3. Bombas</option>"
                                       html+="<option value='4'>4. Cilindros </option>"
                                       html+="<option value='5'>5. Tuberías para elementos mecánicos</option>"
                                       html+="<option value='6'>6. Componentes para sistemas hidráulicos </option>"
                                       html+="<option value='7'>7. Componentes mecánicos de segunda mano</option>"      
                                       html+="<option value='8'>8. Componentes de neumáticos </option>"
                                       html+="<option value='9'>9. Moldes mecánicos</option>"      
                                       html+="<option value='10'>10. Componentes para válvulas </option>"
                                       html+="<option value='11'>11. Rodamientos mecánicos</option>"      
                                       html+="<option value='12'>12. Ejes mecánicos </option>"
                                       html+="<option value='13'>13. Elementos para transmisiones mecánicas</option>"      
                                       html+="<option value='14'>14. Válvulas mecánicas </option>"
                                       html+="<option value='15'>15. Guías lineales mecánicas</option>"      
                                      
                                                                 
                                       
                        }

                        if(x.value=="9"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Electrodomésticos para el clima</option>"
                                       html+="<option value='2'>2. Electrodomésticos para cocina </option>"
                                       html+="<option value='3'>3. Electrodomésticos de cuidado personal</option>"
                                       html+="<option value='4'>4. Piezas de electrodomésticos</option>"
                                       html+="<option value='5'>5. Electrodomésticos de imagen</option>"
                                       html+="<option value='6'>6. Electrodomésticos de sonido</option>"
                                       html+="<option value='7'>7. Electrodomésticos audiovisuales</option>"
                                       html+="<option value='8'>8. Componentes de electrodomésticos audiovisuales</option>" 
                                       html+="<option value='9'>9. Accesorios para electrodomésticos</option>"
                                       html+="<option value='10'>10. Electrodomésticos domésticos</option>"                                                                           
                                       
                        }
                        if(x.value=="10"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Bandejas</option>"
                                       html+="<option value='2'>2. Bolsas de aire para embalaje</option>"
                                       html+="<option value='3'>3. Bolsas de organización</option>"
                                       html+="<option value='4'>4. Bolsas</option>"  
                                       html+="<option value='5'>5. Bolsas industriales</option>"
                                       html+="<option value='6'>6. Botellas</option>"
                                       html+="<option value='7'>7. Bolsas para envío de correo</option>"
                                       html+="<option value='8'>8. Botes </option>"
                                       html+="<option value='9'>9. Cajas </option>"
                                       html+="<option value='10'>10. Jaulas</option>"
                                       html+="<option value='11'>11. Cintas</option>"
                                       html+="<option value='12'>12. Contenedores para pastillas</option>"
                                       html+="<option value='13'>13. Cuerdas</option>"
                                       html+="<option value='14'>14. Contenedores  </option>" 
                                        html+="<option value='15'>15. Bolsas de cosméticos</option>"
                                       html+="<option value='16'>16. Etiquetas</option>"
                                       html+="<option value='17'>17. Film de plástico </option>" 
                                        html+="<option value='18'>18. Fundas de carne para transporte</option>"
                                       html+="<option value='19'>19. Embalaje para flores</option>"
                                       html+="<option value='20'>20. Flexitanks </option>"
                                       html+="<option value='21'>21. Artículos de impresión </option>"
                                       html+="<option value='23'>23. Palets </option>"
                                       html+="<option value='24'>24. Papel </option>"
                                       html+="<option value='25'>25. Probetas </option>"                                     
                                       html+="<option value='26'>26. Tubos </option>"
                                       html+="<option value='27'>27. Tarros </option>"
                                       html+="<option value='28'>28. Sacos de embalaje </option>"
                                       html+="<option value='29'>29. Rollos de aluminio para embalaje </option>"
                                       
                        }

                         if(x.value=="11"){     
                                      html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Material para deportes al aire libre</option>"
                                       html+="<option value='2'>2. Material deportivo para actividades en equipo </option>"
                                       html+="<option value='3'>3. Material para deportes en el agua</option>"
                                       html+="<option value='4'>4. Accesorios para deportes en el agua</option>"                                     
                                       
                                       html+="<option value='5'>5. Material para deportes y actividades de interior</option>"
                                       html+="<option value='6'>6. Material para deportes de invierno</option>"
                                       html+="<option value='7'>7. Equipo de fitness</option>"                                       
                                       html+="<option value='8'>8. Material para adecuaciones de deporte</option>"
                                       html+="<option value='9'>9. Material para  golf</option>"
                                        html+="<option value='10'>10. Material para billar</option>"
                                       html+="<option value='12'>11. Equipo de protección deportiva</option>"
                                       html+="<option value='13'>12. Casas de juego </option>"
                                       html+="<option value='14'>13. Prendas especiales fitness</option>"
                                       html+="<option value='15'>14. Material óptico para caza </option>"
                                       html+="<option value='16'>15. Material para actividades al aire libre</option>"
                                       html+="<option value='17'>16. Conjuntos de juego al aire libre </option>"
                                     
                                     
                        }

                          if(x.value=="12"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Material publicitario</option>"
                                       html+="<option value='2'>2. Material financiero</option>"
                                       html+="<option value='3'>3. Equipo funerario</option>"
                                       html+="<option value='4'>4. Material para clínicas dentales</option>" 
                                       html+="<option value='5'>5. Material de embalaje</option>"
                                       html+="<option value='6'>6. Material para funeraria</option>" 
                                       html+="<option value='7'>7. Material de hostelería</option>"
                                      html+="<option value='8'>8. Material para exposiciones</option>" 
                                       
                                       html+="<option value='9'>9. Material de heladerías</option>" 
                                       html+="<option value='10'>10. Equipo para pastelería</option>"
                                       html+="<option value='11'>11. Equipo para panadería</option>" 
                                       html+="<option value='12'>12. Material industrial para tratamiento de agua</option>"
                                       html+="<option value='13'>13. Material para lavandería</option>" 
                                       html+="<option value='14'>14. Material para tiendas físicas</option>"
                                       html+="<option value='15'>15. Accesorios para supermercado</option>" 
                                       html+="<option value='16'>16. Accesorios para comercio</option>"
                        }

                        if(x.value=="13"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Puertas</option>"
                                       html+="<option value='2'>2. Ventanas</option>"
                                       html+="<option value='3'>3. Andamios</option>"
                                       html+="<option value='4'>4. Escaleras</option>"
                                       html+="<option value='5'>5. Baldosas</option>"
                                       html+="<option value='6'>6. Casas de madera</option>"
                                       html+="<option value='7'>7. Chimeneas</option>"
                                       html+="<option value='8'>8. Cocina</option>"
                                       html+="<option value='9'>9. Encofrado</option>"
                                       html+="<option value='10'>10. Baño</option>"
                                       html+="<option value='11'>11. Grifería</option>"
                                       html+="<option value='12'>12. Material impermeable</option>"
                                       html+="<option value='13'>13. Decoración</option>"
                                       html+="<option value='14'>14. Lápidas </option>"
                                       html+="<option value='15'>15. Madera para construcción</option>"
                                       html+="<option value='16'>16. Material aislante</option>"
                                       html+="<option value='17'>17. Material ignífugo </option>"
                                       html+="<option value='18'>18. Material de metal</option>"
                                       html+="<option value='19'>19. Material multifuncional</option>"
                                       html+="<option value='20'>20. Paneles</option>"
                                       html+="<option value='21'>21. Material de protección</option>"
                                       html+="<option value='22'>22. Material de cantera</option>"
                                       html+="<option value='23'>23. Vidrios para construcción</option>"
                                       html+="<option value='24'>24. Suelos</option>"
                                       html+="<option value='25'>25. Techos</option>"
                                       html+="<option value='26'>26. Climatización</option>"
                                       html+="<option value='28'>28. Material plástico</option>"

                                       
                        }

                        if(x.value=="14"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Carbón vegetal</option>"
                                       html+="<option value='2'>2. Combustible industrial</option>"
                                       html+="<option value='3'>3. Biogas</option>"
                                       html+="<option value='4'>4. Biodiésel</option>"
                                        html+="<option value='5'>5. Crudo</option>"  
                                         html+="<option value='6'>6. Energía Eólica </option>"  
                                          html+="<option value='7'>7. Productos de energía eólica</option>"  
                                           html+="<option value='8'>8. Gas combustible</option>" 
                                           html+="<option value='9'>9. Energía solar</option>" 
                                           html+="<option value='10'>10. Gas natural</option>" 
                                           html+="<option value='11'>11. Pellets</option>" 
                                           html+="<option value='12'>12. Generadores de electricidad</option>" 
                                           html+="<option value='13'>13. Hulla</option>" 
                                           html+="<option value='14'>14. Productos petroquímicos</option>" 
                                                                              
                                       
                        }

                        if(x.value=="16"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Dispositivos para medicina</option>"
                                       html+="<option value='2'>2. Plantas medicinales</option>"
                                       html+="<option value='3'>3. Productos de parafarmacia</option>" 
                                       html+="<option value='4'>4. Medicina veterinaria</option>"
                                        html+="<option value='5'>5. Medicamentos </option>"
                                         html+="<option value='6'>6. Vitaminas </option>"
                                       
                        }

                        if(x.value=="17"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Fuentes de alimentación</option>"
                                       html+="<option value='2'>2. Baterías</option>"
                                       html+="<option value='3'>3. Cajas de electricidad</option>"
                                       html+="<option value='4'>4. Cableado</option>"
                                        html+="<option value='5'>5. Disyuntores</option>"
                                         html+="<option value='6'>6. Contactores</option>"
                                          html+="<option value='7'>7. Tomas de electricidad</option>"
                                           html+="<option value='8'>8. Dispositivos para audio</option>"
                                           html+="<option value='9'>9. Generadores</option>" 
                                           html+="<option value='10'>10. Dispositivos de vídeo </option>" 
                                           html+="<option value='11'>11. Dispositivos de iluminación </option>" 
                                           html+="<option value='12'>12. Transformadores </option>" 
                                           html+="<option value='13'>13. Relés</option>" 
                                            html+="<option value='14'>14. Fusibles</option>"                                     
                                       
                        }

                        if(x.value=="18"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Abrasivos</option>"
                                       html+="<option value='2'>2. Ganchos </option>"
                                       html+="<option value='3'>3. Productos de fijación</option>"
                                       html+="<option value='4'>4. Cadenas</option>"
                                        html+="<option value='5'>5. Abrazaderas</option>"
                                         html+="<option value='6'>6. Muelles</option>"
                                          html+="<option value='7'>7. Material usado de ferretería</option>"
                                           html+="<option value='8'>8. Soportes</option>"                                                                             
                                       
                        }

                        if(x.value=="19"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Herramietas manuales</option>"
                                       html+="<option value='2'>2. Herramientas eléctricas </option>"
                                       html+="<option value='3'>3. Herramientas usadas</option>"
                                       html+="<option value='4'>4. Accesorios de herramientas eléctricas</option>"
                                        html+="<option value='5'>5. Herramientas para jardín </option>"
                                         html+="<option value='6'>6. Herramienta de elevación </option>"
                                          html+="<option value='7'>7. Sets de herramientas</option>"
                                           html+="<option value='8'>8. Herramientas para construcción </option>" 
                                           html+="<option value='9'>9. Abrasivos</option>"
                                       html+="<option value='10'>10. Ganchos </option>"
                                       html+="<option value='11'>11. Productos de fijación</option>"
                                       html+="<option value='12'>12. Cadenas</option>"
                                        html+="<option value='13'>13. Abrazaderas</option>"
                                         html+="<option value='14'>14. Muelles</option>"
                                          html+="<option value='15'>15. Material usado de ferretería</option>"
                                           html+="<option value='16'>16. Soportes</option>" 
                                           html+="<option value='17'>17. Herramientas mecánicas</option>"
                                           html+="<option value='18'>18. Baterías</option>"
                        }

                        if(x.value=="20"){     
                                        html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Bombillas</option>"
                                       html+="<option value='2'>2. Accesorios para lámparas </option>"
                                       html+="<option value='3'>3. Accesorios de iluminación </option>" 
                                        html+="<option value='4'>4. Iluminación de techo </option>"
                                       html+="<option value='5'>5. Lámparas </option>"
                                       html+="<option value='6'>6. Iluminación para exteriores </option>"                                                                                                                   
                                       html+="<option value='7'>7.Apliques  </option>"                                                                                                                   
                                       
                        }

                        if(x.value=="21"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Dispositivos de vídeo </option>"
                                       html+="<option value='2'>2. Cámaras fotográficas </option>"
                                       html+="<option value='3'>3. Televisores </option>"
                                       html+="<option value='4'>4. Equipos de imagen </option>"
                                        html+="<option value='5'>5. Reproductor de DVD</option>"
                                         html+="<option value='6'>6. Reproductor de Blu-Ray </option>"
                                          html+="<option value='7'>7. Partes de dispositivos de imagen </option>"
                                           html+="<option value='8'>8. Accesorios para dispositivos de imagen  </option>"
                                            html+="<option value='9'>9. Vídeoconsolas </option>" 
                                            html+="<option value='10'>10. Accesorios para juegos  </option>"                                                                             
                        }

                        if(x.value=="22"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Dispositivos de sonido  </option>"
                                       html+="<option value='2'>2. Equipos audiovisuales </option>"
                                                                                                              
                        }

                        if(x.value=="23"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Bases refrigerantes para ordenadores  </option>"
                                       html+="<option value='2'>2. Bases refrigerantes para mouse </option>"
                                        html+="<option value='3'>3. Accesorios para ordenadores</option>"
                                        html+="<option value='4'>4. Sets de teclado y mouse</option>"
                                        html+="<option value='5'>5. Discos duros</option>"
                                        html+="<option value='6'>6. Baterias para ordenadores</option>"
                                        html+="<option value='7'>7. Computadores</option>"
                                        html+="<option value='8'>8. Componentes para computador</option>"
                                        html+="<option value='9'>9. Computador estación de trabajo</option>"
                                        html+="<option value='10'>10. GPS </option>"
                                        html+="<option value='11'>11. Firewall informática </option>"
                                        html+="<option value='12'>12. Concentrador para computadores </option>"
                                        html+="<option value='13'>13. Fuentes de alimentación para computadores</option>"
                                        html+="<option value='14'>14. Lectores de computador</option>"
                                         html+="<option value='15'>15. Memorias para computador  </option>"
                                        html+="<option value='16'>16. Ordenadores</option>"
                                        html+="<option value='17'>17. PDAs</option>"
                                         html+="<option value='18'>18. Periféricos de USB</option>"
                                         html+="<option value='19'>19. Productos de limpieza para computadores </option>"
                                        html+="<option value='20'>20. Armarios de redes</option>"
                                        html+="<option value='21'>21. Servidores</option>"
                                        html+="<option value='22'>22. Conmutadores</option>"
                                        html+="<option value='23'>23. Sistemas de software</option>"
                                        html+="<option value='24'>24. Tabletas</option>" 
                                         html+="<option value='25'>25. Software</option>"
                                          html+="<option value='26'>26. Accesorios electrónicos</option>"
                                          html+="<option value='27'>27. Recambios electrónicos</option>"
                                          html+="<option value='28'>28. Componentes activos</option>"
                                           html+="<option value='29'>29. Componentes pasivos</option>"
                                            html+="<option value='30'>30. Herramientas de producción electrónica</option>"
                                          html+="<option value='31'>31. Componentes de optoelectrónica</option>"
                                          html+="<option value='32'>32. Componentes electrónicos</option>"
                                          html+="<option value='33'>33. Rotulos electrónicos</option>"
                                          html+="<option value='34'>34. Sistemas para el procesamiento de datos</option>"
                                          
                                          
                                                                                                              
                        }


                        if(x.value=="24"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Dispositivos de análisis</option>"
                                       html+="<option value='2'>2. Básculas </option>"
                                        html+="<option value='3'>3. Balanzas </option>"
                                        html+="<option value='4'>4.Dispositivos contadores</option>"
                                        html+="<option value='5'>5. Cronómetros</option>"
                                        html+="<option value='6'>6. Temporizadores</option>"
                                        html+="<option value='7'>7. Maquinaria para pruebas  </option>"
                                        html+="<option value='8'>8. Maquinaria para ensayos </option>"
                                        html+="<option value='9'>9. Material de medición </option>"
                                        html+="<option value='10'>10. Elementos meteorológicos   </option>"
                                        html+="<option value='11'>11. Elementos de análisis usados</option>"
                                        html+="<option value='12'>12. Elementos para mediciones electrónicas</option>"
                                        
                                        html+="<option value='13'>13. Materiales ópticos</option>"
                                         html+="<option value='14'>14. Medidores de energía eléctrica  </option>"
                                        html+="<option value='15'>15. Medidores de caudal</option>"
                                        html+="<option value='16'>16. Instrumentos para medir la presión </option>"
                                         html+="<option value='17'>17. Calibradores</option>"
                                         html+="<option value='18'>18. Recambios de material de medición </option>"
                                        html+="<option value='19'>19. Accesorios de equipo de análisis</option>"
                                        html+="<option value='20'>20. Sensores</option>"
                                                                              
                                                                                                              
                        }

                        if(x.value=="25"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Animales de juguete</option>"
                                       html+="<option value='2'>2. Peluches de animales</option>"
                                       html+="<option value='3'>3. Juguetes con sonido </option>"
                                       html+="<option value='4'>4. Juguetes con figuras </option>"
                                       html+="<option value='9'>9. Juguetes acuáticos</option>"
                                       html+="<option value='11'>11. Juguetes con golosinas </option>"
                                        html+="<option value='12'>12. Juguetes tradicionales </option>"
                                       html+="<option value='13'>13. Juguetes para exteriores</option>"
                                       html+="<option value='14'>14. Juguetes que funcionan con energía solar</option>"
                                        html+="<option value='15'>15. Juguetes de cuerda</option>"
                                       html+="<option value='16'>16. Juguetes con estructuras </option>"
                                       html+="<option value='17'>17. Juguetes para bebé  </option>"

                                       html+="<option value='18'>18. Muñecas  </option>"
                                       html+="<option value='19'>19. Partes de juguetes </option>"
                                       html+="<option value='20'>20. Animales electrónicos</option>"
                                       html+="<option value='21'>21. Pistoleras de juguete  </option>"
                                        html+="<option value='23'>23.  Autos de juguete</option>"
                                        html+="<option value='24'>24. Complementos para juguetes </option>"
                                        html+="<option value='25'>25. Robots de juguete </option>"
                                        html+="<option value='26'>26. Canicas </option>"
                                        html+="<option value='27'>27. Juguetes de cocina  </option>"
                                        html+="<option value='28'>28. Casas de muñecas </option>"
                                        html+="<option value='29'>29. Drones </option>"
                                        html+="<option value='30'>30. Rompecabezas </option>"
                                        html+="<option value='31'>31. Juguetes de arte </option>"
                                        html+="<option value='32'>32. Juguetes electrónicos para niños </option>"
                                        html+="<option value='33'>33. Juguetes para adultos </option>"
                                        html+="<option value='34'>34. Tiendas de campaña </option>"
                                         html+="<option value='35'>35. Cajas para juguetes  </option>"
                                        html+="<option value='36'>36. Túneles de juguete</option>"
                                        html+="<option value='37'>37. Juguetes voladores </option>"
                                         html+="<option value='38'>38. Cajas para juguetes  </option>"
                                        html+="<option value='39'>39. Juguetes para montar</option>"
                                        html+="<option value='40'>40. Videojuegos </option>"
                                        
                                        
                                        
                                                                                                              
                        }


                        if(x.value=="26"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Utensilios de aseo </option>"
                                       html+="<option value='2'>2. Maquinaria de aseo industrial</option>"
                                       html+="<option value='3'>3. Recambios para equipo de limpieza</option>"
                                       html+="<option value='4'>4. Material desechable de limpieza </option>"
                                       html+="<option value='5'>5. Equipo de limpieza doméstica</option>"
                                       html+="<option value='6'>6. Artículos de limpieza doméstica</option>"
                                       html+="<option value='7'>7. Utensilios de aseo </option>"
                                       html+="<option value='8'>8. Productos de aseo</option>"
                                       html+="<option value='9'>9. Productos de aseo industrial </option>"          
                        }

                         if(x.value=="27"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Bolsos deportivos </option>"
                                        html+="<option value='2'>2. Maletas de mano</option>"
                                         html+="<option value='3'>3. Maletines </option>"
                                          html+="<option value='4'>4. Carteras</option>"
                                           html+="<option value='5'>5. Maletas de equipaje</option>"
                                            html+="<option value='6'>6. Maletas con ruedas para equipaje</option>"
                                             html+="<option value='7'>7. Fundas para dispositivos </option>"
                                              html+="<option value='8'>8. Bolsas para llevar dispositivos electrónicos</option>"
                                               html+="<option value='9'>9. Componentes para bolsos</option>"
                                        html+="<option value='10'>10. Billeteras </option>"
                                        html+="<option value='11'>11. Monederos</option>"
                                        html+="<option value='12'>12. Mochilas </option>"
                                        html+="<option value='13'>13. Recambios de partes para fabricar bolsos</option>"
                                        html+="<option value='14'>14. Accesorios para bolsos</option>"
                                        html+="<option value='15'>15. Bolsos para artículos para bebé </option>"
                                        html+="<option value='16'>16. Bolsos para portátiles</option>"
                                        html+="<option value='17'>17. Bolsas de mensajero</option>"
                                          
                        }

                        if(x.value=="28"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Equipo de aire acondicionado industrial </option>"
                                       html+="<option value='2'>2. Equipos de logística </option>"
                                       html+="<option value='3'>3. Motores de combustión </option>"
                                       html+="<option value='4'>4. Partes de motores de combustión </option>"
                                       html+="<option value='5'>5. Calderas industriales</option>"
                                       html+="<option value='6'>6. Compresores industriales</option>"
                                       html+="<option value='7'>7. Repuestos para compresores </option>"
                                       html+="<option value='8'>8. Equipos para tratamiento de aire</option>"
                                       html+="<option value='9'>9. Repuestos para equipos de tratamiento de aire</option>"
                                       html+="<option value='10'>10. Equipos con láser </option>"
                                       html+="<option value='11'>11. Repuestos de equipos láser</option>"
                                       html+="<option value='12'>12. Equipos para el ahorro de energía</option>"
                                       html+="<option value='13'>13. Repuestos para equipos de ahorro de energía</option>"
                                       html+="<option value='14'>14. Equipos de impresión</option>"
                                       html+="<option value='15'>15. Equipos de refrigeración </option>"
                                       html+="<option value='16'>16. Repuestos de equipos de refrigeración </option>"
                                       html+="<option value='17'>17. Equipos para filtración </option>"
                                       html+="<option value='18'>18. Equipos industriales de soldadura</option>"
                                       html+="<option value='19'>19. Equipo de industria química </option>"
                                       html+="<option value='20'>20. Repuestos de equipos de industria química </option>"
                                       html+="<option value='21'>21. Motores eléctricos </option>"
                                       html+="<option value='22'>22. Equipos de aspiración de material</option>"
                                       html+="<option value='23'>23. Equipos para criar ganado</option>"
                                       html+="<option value='24'>24. Equipo para la producción de queso </option>"
                                       html+="<option value='25'>25. Partes para la producción de queso</option>"
                                       html+="<option value='26'>26. Componentes de filtro</option>"
                                       html+="<option value='27'>27. Equipos usados</option>"
                                       html+="<option value='28'>28. Equipos para purificar aceite</option>"
                                       html+="<option value='29'>29. Repuestos para equipos de aseo</option>"
                                       html+="<option value='30'>30. Repuestos para equipos de logística</option>"
                                       html+="<option value='31'>31. Equipos generadores de gas</option>"
                                       html+="<option value='32'>32. Repuestos de generadores de gas</option>"
                                     }

                 if(x.value=="29"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Máquinas de aire para agricultura</option>"
                                       html+="<option value='2'>2. Máquinas de transporte de productos</option>"
                                       html+="<option value='3'>3. Máquinas para la producción de queso</option>"
                                       html+="<option value='4'>4. Accesorios para máquinas</option>"
                                       html+="<option value='5'>5. Calderas industriales</option>"
                                       html+="<option value='6'>6. Evaporadores</option>"
                                       html+="<option value='7'>7. Máquinas agrícolas</option>"
                                       html+="<option value='8'>8. Máquinas textiles</option>"
                                       html+="<option value='9'>9. Repuestos de máquinas de confección </option>"
                                       html+="<option value='10'>10. Máquinas forestales</option>"
                                       html+="<option value='11'>11. Máquinas de construcción</option>"
                                       html+="<option value='12'>12. Accesorios para máquinas industriales</option>"
                                       html+="<option value='13'>13. Frenos industriales</option>"
                                       html+="<option value='14'>14. Embriagues industriales</option>"
                                       html+="<option value='15'>15. Máquinas para envasado</option>"
                                       html+="<option value='16'>16. Máquinas de producción de caucho </option>"
                                       html+="<option value='17'>17. Máquinas para procesos de caucho</option>"
                                       html+="<option value='18'>18. Repuestos de máquinas para fabricación de productos de caucho </option>"
                                       html+="<option value='19'>19. Máquinas para papel y cartón</option>"
                                       html+="<option value='20'>20. Repuestos de  máquinas para proceso de papel y cartón </option>"
                                       html+="<option value='21'>21. Máquinas para fabricación de productos de vidrio </option>"
                                       html+="<option value='22'>22. Máquinas para procesos de vidrio </option>"
                                       html+="<option value='23'>23. Repuestos para máquinas de proceso de vidrio</option>"
                                       html+="<option value='24'>24. Máquinas para transformación de plástico</option>"
                                       html+="<option value='25'>25. Máquinas de producción de artículos de plástico</option>"
                                       html+="<option value='26'>26. Máquinas para la producción de calzado</option>"
                                       html+="<option value='27'>27. Repuestos de máquinas para calzado </option>"
                                       html+="<option value='28'>28. Máquinas para proceso de minería </option>"
                                       html+="<option value='29'>29. Máquinas para proceso de alimentos</option>"
                                       html+="<option value='30'>30. Repuestos para máquinas de proceso de alimentos </option>"
                                       html+="<option value='31'>31. Máquinas para proceso de bebidas</option>"
                                       html+="<option value='32'>32. Maquinas para proceso de metal</option>"
                                       html+="<option value='33'>33. Máquinas para proceso de cuero</option>"
                                       html+="<option value='34'>34. Máquinas de farmacéutica</option>"
                                       html+="<option value='35'>35. Máquinas de industria química</option>"
                                       html+="<option value='36'>36. Maquinaria usada</option>"
                                       html+="<option value='37'>37. Repuestos de maquinaria de construcción</option>"
                                       html+="<option value='38'>38. Repuestos de fabricación de materiales de construcción</option>"
                                       html+="<option value='39'>39. Repuestos de máquinas de envasado</option>"
                                       html+="<option value='40'>40. Repuestos de máquinas para proceso de alimentos</option>"
                                       html+="<option value='41'>41. Repuestos de máquinas para proceso de bebidas</option>"
                                       html+="<option value='42'>42. Repuestos de máquinas para producción de bolsos</option>"
                                       html+="<option value='43'>43. Repuestos de máquinas de impresión </option>"
                                       html+="<option value='44'>44. Repuestos de máquinas para tratamiento de metal</option>"
                                       html+="<option value='45'>45. Máquinas para carpintería</option>"
                                       html+="<option value='46'>46. Repuestos de máquinas para carpintería </option>"
                                       html+="<option value='47'>47. Repuestos de máquinas agrícolas</option>"
                                       html+="<option value='48'>48. Repuestos de máquinas para producción de cinturones</option>"
                                       html+="<option value='49'>49. Repuestos de máquinas para productos del hogar</option>"
                                       html+="<option value='50'>50. Repuestos de máquinas para transformación de plástico</option>"
                                       html+="<option value='51'>51. Repuestos de máquinas para producción de sombreros</option>"
                                       html+="<option value='52'>52. Repuestos de máquinas usadas</option>"
                                       html+="<option value='53'>53. Repuestos de máquinas para tejer medias</option>"
                                       html+="<option value='54'>54. Ventiladores industriales</option>"


                                       

                                         }


                         if(x.value=="30"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Adhesivos de oficina</option>"
                                        html+="<option value='2'>2. Caballetes de oficina</option>"
                                         html+="<option value='3'>3. Calendarios de mesa</option>"
                                          html+="<option value='4'>4. Papel para oficina </option>"
                                           html+="<option value='5'>5. Diccionarios digitales</option>"
                                            html+="<option value='6'>6. Suministros para impresión </option>"
                                             html+="<option value='7'>7. Fundas para libros </option>"
                                              html+="<option value='8'>8. Mapas</option>"
                                               html+="<option value='9'>9. Material para dibujo técnico </option>"
                                                html+="<option value='10'>10. Libros </option>"
                                                 html+="<option value='11'>11. Máquinas de oficina</option>"
                                                  html+="<option value='12'>12. Material para cartas</option>"
                                                   html+="<option value='13'>13. Material de archivo </option>"
                                                    html+="<option value='14'>14. Pizarras para oficina</option>"
                                                     html+="<option value='15'>15. Pinzas de oficina</option>"
                                                      html+="<option value='16'>16. Revistas</option>"
                                                      html+="<option value='17'>17. Portafolios</option>"
                                                      html+="<option value='18'>18. Sellos de oficina </option>"
                                                       html+="<option value='19'>19. Muebles para oficina</option>"
                                                        html+="<option value='20'>20. Clips  </option>"
                                                         html+="<option value='21'>21. Separadores</option>"
                                               
                        }

                        if(x.value=="31"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Material de escritura</option>"
                                       html+="<option value='2'>2. Borradores</option>"
                                       html+="<option value='3'>3. Correctores de bolígrafo</option>"
                                       html+="<option value='4'>4. Cuadernos </option>"
                                       html+="<option value='5'>5. Blocks de papel</option>"
                                       html+="<option value='6'>6. Sets de papelería</option>"
                                       html+="<option value='7'>7. Mapas</option>"
                                       html+="<option value='8'>8. Material educativo </option>"
                                       html+="<option value='9'>9. Sacapuntas</option>"
                                       html+="<option value='10'>10. Tijeras </option>"
                                       html+="<option value='11'>11. Perforadoras </option>"
                                       html+="<option value='12'>12. Agendas </option>"
                                       html+="<option value='13'>13. Carpetas </option>"
                                       html+="<option value='14'>14. Post its </option>"
                                       html+="<option value='15'>15. Papel </option>"
                                       html+="<option value='16'>16. Reglas</option>"
                                       html+="<option value='17'>17. Pinturas </option>"
                                       html+="<option value='18'>18. Pegantes </option>"
                                       html+="<option value='19'>19. Pinceles </option>"
                                       html+="<option value='20'>20. Grapadoras </option>"
                                       html+="<option value='21'>21. Plastilina  </option>"
                                        html+="<option value='22'>22. Sellos  </option>"
                                        html+="<option value='23'>23. Diarios  </option>"

                                               
                        }

                        if(x.value=="32"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Medios aeronáuticos </option>"
                                       html+="<option value='2'>2. Autobuses</option>"
                                       html+="<option value='3'>3. Bicicletas</option>"
                                       html+="<option value='4'>4. Barcos</option>"
                                       html+="<option value='5'>5. Camiones</option>"
                                       html+="<option value='6'>6. Contenedores</option>"
                                       html+="<option value='7'>7. Remolques</option>"
                                       html+="<option value='8'>8. Trenes</option>"
                                       html+="<option value='9'>9. Motos</option>"
                                       html+="<option value='10'>10. Motos acuáticas</option>"
                                       html+="<option value='11'>11. Roll containers</option>"
                                       html+="<option value='12'>12. Vehículos para emergencia</option>"
                                       html+="<option value='13'>13. Vehículos de uso especial</option>"
                                       html+="<option value='14'>14. Repuestos para autobuses</option>"
                                       html+="<option value='15'>15. Repuestos para bicicletas</option>"
                                       html+="<option value='16'>16. Repuestos para vehículos industriales</option>"
                                       html+="<option value='17'>17. Equipo ferroviario </option>"
                                       html+="<option value='18'>18. Componentes para trenes</option>"
                                       html+="<option value='19'>19. Partes de barcos</option>"
                                       html+="<option value='20'>20. Partes de trenes</option>"
                                        html+="<option value='21'>21. Partes de aviones</option>"
                                         html+="<option value='22'>22. Autos</option>"
                                          html+="<option value='23'>23. Repuestos para autos</option>"
                                           html+="<option value='24'>24. Accesorios para autos</option>"
                                            html+="<option value='25'>25. Herramientas de taller mecánico</option>"
                                            html+="<option value='26'>26. Artículos para cuidado de auto</option>"
                                             html+="<option value='27'>27. Repuestos para motos</option>"
                                             html+="<option value='28'>28. Accesorios para motos</option>"

                                               
                        }
                        if(x.value=="33"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Aluminio </option>"
                                       html+="<option value='2'>2. Arrabio </option>"
                                       html+="<option value='3'>3. Metal</option>"
                                       html+="<option value='4'>4. Artículos con metal</option>"
                                       html+="<option value='5'>5. Cal </option>"
                                       html+="<option value='6'>6. Alambres de púas</option>"
                                       html+="<option value='7'>7. Acero</option>"
                                       html+="<option value='8'>8. Cobre</option>"
                                       html+="<option value='9'>9. Grafito mineral</option>"
                                       html+="<option value='10'>10. Hierro</option>"
                                       html+="<option value='11'>11. Lingotes </option>"
                                       html+="<option value='12'>12. Material refractario</option>"
                                       html+="<option value='13'>13. Componentes de cerámica</option>"
                                       html+="<option value='14'>14. Componentes magnéticos</option>"
                                       html+="<option value='15'>15. Minerales de metal</option>"
                                       html+="<option value='16'>16. Minerales sin metal</option>"
                                       html+="<option value='17'>17. Plomo</option>"
                                       html+="<option value='18'>18. Níquel</option>"
                                       html+="<option value='19'>19. Artículos de carbono</option>"
                                       html+="<option value='20'>20. Artículos de cuarzo </option>"
                                       html+="<option value='21'>21. Artículos de fibra de carbono</option>"
                                       html+="<option value='22'>22. Artículos de fibra de cerámica</option>"
                                       html+="<option value='23'>23. Tierras raras</option>"
                                       html+="<option value='24'>24. Tungsteno</option>"
                                       html+="<option value='25'>25. Zinc</option>"
                                       html+="<option value='26'>26. Vidrio </option>"
                                       html+="<option value='27'>27. Titanio </option>"
                                        html+="<option value='28'>28. Artículos de amianto </option>"
                                       
                                               
                        }
                        if(x.value=="34"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Muebles para negocios</option>"
                                       html+="<option value='2'>2. Muebles para niños</option>"
                                       html+="<option value='3'>3. Muebles para exteriores</option>"
                                       html+="<option value='4'>4. Muebles para bebés</option>"
                                       html+="<option value='5'>5. Muebles de hostelería </option>"
                                       html+="<option value='6'>6. Muebles iluminados para hostelería</option>"
                                       html+="<option value='7'>7. Muebles de hotelería</option>"
                                       html+="<option value='8'>8. Muebles de restaurantes</option>"
                                       html+="<option value='9'>9. Muebles para bares</option>"
                                       html+="<option value='10'>10. Muebles para el hogar</option>"
                                       html+="<option value='11'>11. Muebles de habitación para el hogar</option>"
                                       html+="<option value='12'>12. Muebles de sala para el hogar</option>"
                                       html+="<option value='13'>13. Muebles de comedor para el hogar</option>"
                                       html+="<option value='14'>14. Muebles para el estudio</option>"
                                       html+="<option value='15'>15. Partes de muebles </option>"
                                       html+="<option value='16'>16. Accesorios para muebles</option>"
                                       html+="<option value='17'>17. Herrajes para muebles</option>"

                                               
                        }
                        if(x.value=="35"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Plástico reciclado</option>"
                                       html+="<option value='2'>2. Productos de plástico</option>"
                                       html+="<option value='3'>3. Termoplásticos </option>"
                                       html+="<option value='4'>4. Material plástico</option>"
                                               
                        }
                        if(x.value=="36"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Material de caucho </option>"
                                       html+="<option value='2'>2. Productos hechos con caucho </option>"
                                               
                        }

                        if(x.value=="37"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Dispositivos para estética </option>"
                                       html+="<option value='2'>2. Productos de baño </option>"
                                       html+="<option value='3'>3. Suministros para peluquería</option>"
                                       html+="<option value='4'>4. Productos de higiene personal</option>"
                                       html+="<option value='5'>5. Perfumes</option>"
                                       html+="<option value='6'>6. Desodoranes</option>"
                                       html+="<option value='7'>7. Cabello </option>"
                                       html+="<option value='8'>8. Productos naturales</option>"
                                       html+="<option value='9'>9. Productos para depilación</option>"
                                       html+="<option value='10'>10. Productos para afeitar</option>"
                                       html+="<option value='11'>11. Maquillaje</option>"
                                       html+="<option value='12'>12. Productos para la piel</option>"
                                       html+="<option value='13'>13. Productos para el cuidado bucal</option>"
                                       html+="<option value='14'>14. Productos para el aseo del bebé</option>"
                                       html+="<option value='15'>15. Productos de manicura y pedicura</option>"
                                       html+="<option value='17'>17. Productos de aseo femenino</option>"
                                       html+="<option value='18'>18. Productos para el cuidado de tatuajes</option>"
                                       html+="<option value='19'>19. Elementos para maquillaje</option>"
                                       html+="<option value='20'>20. Artículos para cuidado de la piel</option>"
                                       html+="<option value='21'>21. Productos para el cabello</option>"
                                        html+="<option value='22'>22. Dispositivos para masaje</option>"
                                        html+="<option value='23'>23. Organizadores de maquillaje</option>"

                        }
                        if(x.value=="38"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Artículos de almacenaje para el hogar</option>"
                                        html+="<option value='2'>2. Artículos para la cocina</option>"
                                         html+="<option value='3'>3. Decoración para el hogar</option>"
                                          html+="<option value='4'>4. Suministros para el cuidado de mascotas</option>"
                                           html+="<option value='5'>5. Suministros para piscina</option>"
                                            html+="<option value='6'>6. Suministros para el cuidado de la ropa</option>"
                                             html+="<option value='7'>7. Suministros para repostería</option>"
                                              html+="<option value='8'>8. Complementos para la mesa</option>"
                                               html+="<option value='9'>9. Suministros de puericultura</option>"
                                                html+="<option value='10'>10. Accesorios para piscina</option>"
                                                 html+="<option value='11'>11. Accesorios para baño </option>"
                                                  html+="<option value='12'>12. Accesorios para paredes</option>"
                                                   html+="<option value='13'>13. Llaveros</option>"
                                                    html+="<option value='14'>14. Inciensos</option>"
                                                     html+="<option value='15'>15. Huchas</option>"
                                                      html+="<option value='16'>16. Velas</option>"
                                                       html+="<option value='17'>17. Álbumes para fotografías</option>"
                                                       html+="<option value='18'>18. Artículos para exteriores</option>"
                                                       html+="<option value='19'>19. Complementos para la mesa</option>"
                                                        html+="<option value='20'>20. Accesorios para el suelo </option>"
                                                       html+="<option value='22'>22. Artículos para bebé</option>"
                                                       html+="<option value='23'>23. Decoración infantil</option>"
                                                        html+="<option value='24'>24. paraguas</option>"

                        }
                        if(x.value=="39"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Muebles para jardín</option>"
                                       html+="<option value='2'>2. Asadores</option>"
                                       html+="<option value='3'>3. Parques infantiles para jardín </option>"
                                       html+="<option value='4'>4. Hamacas</option>"
                                       html+="<option value='5'>5. Invernaderos</option>"
                                       html+="<option value='6'>6. Herramientas de jardinería </option>"
                                     html+="<option value='7'>7. Paraguas para jardín</option>"
                                       html+="<option value='8'>8. Cenadores</option>"
                                       html+="<option value='9'>9. Compostadores </option>"
                                     html+="<option value='10'>10. Plantas</option>"
                                       html+="<option value='11'>11. Fertilización para plantas</option>"
                                       html+="<option value='12'>12. Accesorios para plantas </option>"
                                        html+="<option value='13'>13. Parrillas</option>"
                                       html+="<option value='14'>14. Accesorios para jardín</option>"
                                       html+="<option value='15'>15. Freidoras</option>"
                                       html+="<option value='16'>16. Motosierras</option>"
                                        html+="<option value='17'>17. Sopladores para jardín  </option>"
                                         html+="<option value='18'>18. Cortadoras de césped  </option>"
                                          html+="<option value='19'>19. Generadores de aire  </option>"
                                           html+="<option value='20'>20. Utensilios para asadores</option>"
                                                   
                        }


                        if(x.value=="40"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Dispositivos para reducir ruido</option>"
                                       html+="<option value='2'>2. Artículos para gestión de residuos</option>"
                                       html+="<option value='3'>3. Dispositivos para alcantarillado</option>"
                                       html+="<option value='4'>4. Artículos para tratamiento de gases</option>"
                                       html+="<option value='5'>5. Artículos para tratamiento de agua</option>"
                                       html+="<option value='6'>6. Material para residuos </option>"
                                               
                        }
                        if(x.value=="41"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Agroquímicos</option>"
                                       html+="<option value='3'>3. Adhesivos químicos</option>"
                                       html+="<option value='4'>4. Selladores</option>"
                                       html+="<option value='5'>5. Recubrimientos hidrofóbicos</option>"
                                       html+="<option value='6'>6. Aromatizantes</option>"
                                       html+="<option value='7'>7. Compuestos químicos de uso diario</option>"
                                       html+="<option value='8'>8. Productos orgánicos intermedios</option>"
                                       html+="<option value='9'>9. Catalizadores</option>"
                                       html+="<option value='10'>10. Pigmentos</option>"
                                       html+="<option value='11'>11. Explosivos</option>"
                                       html+="<option value='12'>12. Colorantes químicos</option>"
                                       html+="<option value='13'>13. Material de laboratorio</option>"
                                       html+="<option value='14'>14. Esmaltes</option>"
                                       html+="<option value='15'>15. Polímeros</option>"
                                       html+="<option value='16'>16. Pinturas</option>"
                                       html+="<option value='17'>17. Productos químicos inorgánicos</option>"
                                       html+="<option value='18'>18. Productos químicos orgánicos básicos</option>"
                                       html+="<option value='19'>19. Productos químicos para piscina</option>"
                                       html+="<option value='20'>20. Reactivos químicos</option>"
                                       html+="<option value='21'>21. Productos para limpiar computadores</option>"
                        }
                        if(x.value=="42"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Gorros para fiesta</option>"
                                       html+="<option value='2'>2. Confeti</option>"
                                       html+="<option value='3'>3. Artículos para fiestas</option>"
                                       html+="<option value='4'>4. Globos</option>"
                                       html+="<option value='5'>5. Artículos para celebraciones</option>"
                                       html+="<option value='6'>6. Bolsas de cumpleaños</option>"
                                       html+="<option value='7'>7. Candelabros</option>"
                                       html+="<option value='8'>8. Invitaciones </option>"
                                       html+="<option value='9'>9. Guirnalda para fiestas </option>"
                                       html+="<option value='10'>10. Máscaras para fiesta </option>"
                                       html+="<option value='11'>11. Piñatas para fiesta</option>"
                                               
                        }
                        if(x.value=="43"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Regalos de bodas</option>"
                                       html+="<option value='2'>2. Banderas</option>"
                                       html+="<option value='3'>3. Candelabros</option>"
                                       html+="<option value='4'>4. Cajas de música</option>"
                                       html+="<option value='5'>5. Álbumes para fotografías</option>"
                                       html+="<option value='6'>6. Cuadros De Pintura</option>"
                                       html+="<option value='7'>7. Regalos para cumpleaños</option>"
                                       html+="<option value='8'>8. Regalos para anivesarios</option>"
                                       html+="<option value='9'>9. Dibujos</option>"
                                       html+="<option value='10'>10. Fotografias</option>"
                                       html+="<option value='11'>11. Ilustraciones</option>"
                                       html+="<option value='12'>12. Figuras en madera</option>"
                                       html+="<option value='13'>13. Regalos para fechas especiales</option>"
                                        html+="<option value='14'>14. Regalos para bebés</option>"
                                         html+="<option value='15'>15. Artículos personalizables</option>"
                                         html+="<option value='16'>16. Suministros de regalo</option>"
                                               
                        }

                        if(x.value=="44"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Utensilios artesanales</option>"
                                       html+="<option value='2'>2. Bolsos artesanales</option>"
                                       html+="<option value='3'>3. Marcos artesanales</option>"
                                       html+="<option value='4'>4. Decoración artesanal para el hogar</option>"
                                       html+="<option value='5'>5. Productos de aseo artesanales</option>"
                                       html+="<option value='6'>6. Accesorios de belleza artesanales</option>"
                                       html+="<option value='7'>7. Esculturas</option>"
                                       html+="<option value='8'>8. Figuras en madera</option>"
                                               
                        }
                        if(x.value=="45"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Fornituras de joyería </option>"
                                       html+="<option value='3'>3. Abalorios para bisutería</option>"
                                       html+="<option value='4'>4. Joyas</option>"
                                       html+="<option value='5'>5. Piedras para joyería</option>"
                                       html+="<option value='6'>6. Perlas para joyería</option>"
                                       html+="<option value='7'>7. Collares</option>"
                                       html+="<option value='8'>8. Pulseras</option>"
                                       html+="<option value='9'>9. Brazaletes</option>"
                                       html+="<option value='10'>10. Anillos</option>"
                                       html+="<option value='11'>11. Aretes</option>"
                                       html+="<option value='12'>12. Pulseras tobilleras</option>"
                                       html+="<option value='13'>13. Cadenas para cintura</option>"
                                       html+="<option value='14'>14. Conjuntos de accesorios</option>"
                                               
                        }
                        if(x.value=="46"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Relojes deportivos</option>"
                                       html+="<option value='2'>2. Relojes inteligentes</option>"
                                       html+="<option value='3'>3. Relojes para dama</option>"
                                       html+="<option value='4'>5. Relojes para caballero</option>"
                                       html+="<option value='5'>6. Relojes para niños</option>"
                                       html+="<option value='6'>7. Relojes antiguos</option>"
                                       html+="<option value='7'>8. Relojes de mano</option>"
                                        html+="<option value='8'>9. Relojes de pared</option>"
                                               
                        }

                        if(x.value=="47"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Gafas de sol</option>"
                                        html+="<option value='2'>2. Gafas de descanso</option>"
                                         html+="<option value='3'>3. Gafas para dispositivos electrónicos </option>"
                                          html+="<option value='4'>4. Gafas para adultos</option>"
                                           html+="<option value='5'>5. Gafas para niños</option>"
                                               
                        }
                        if(x.value=="48"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Ropa para niños</option>"
                                       html+="<option value='2'>2. Ropa para bebés</option>"
                                       html+="<option value='3'>3. Ropa para hombre</option>"
                                       html+="<option value='4'>4. Ropa para mujer</option>"
                                       html+="<option value='5'>5. Ropa de danza</option>"
                                       html+="<option value='6'>6. Uniformes</option>"
                                       html+="<option value='7'>7. Suministros de costura</option>"
                                       html+="<option value='8'>8. Piezas para ropa</option>"
                                       html+="<option value='9'>9. Accesorios para ropa</option>"
                                       html+="<option value='10'>11. Lencería para el hogar</option>"
                                       html+="<option value='11'>12. Fibras textiles</option>"
                                       html+="<option value='12'>13. Hebras</option>"
                                       html+="<option value='13'>14. Plumas </option>"
                                       html+="<option value='14'>14. Cuero</option>"
                                       html+="<option value='15'>15. Productos de cuero</option>"
                                       html+="<option value='16'>16. Pieles</option>"
                                       html+="<option value='17'>17. Suministros de mercería</option>"
                                       html+="<option value='18'>18. Tejidos crudos</option>"
                                       html+="<option value='19'>19. 2Telas</option>"
                                       html+="<option value='20'>20. Disfraces</option>"
                                               
                        }
                         if(x.value=="49"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Suministros de protección contra incendios  </option>"
                                       html+="<option value='2'>2. Suministros de cerrajería </option>"
                                       html+="<option value='3'>3. Alarmas</option>"
                                       html+="<option value='4'>4. Elementos de defensa personal</option>"
                                       html+="<option value='5'>5. Cajas fuertes</option>"
                                       html+="<option value='6'>6. Candados</option>"
                                       html+="<option value='7'>7. Cerraduras</option>"
                                       html+="<option value='8'>8. Equipos especiales</option>"
                                       html+="<option value='9'>9. Repuestos para candados</option>"
                                       html+="<option value='10'>10. Repuestos para cerraduras</option>"
                                       html+="<option value='11'>11. Equipos de seguridad en carretera</option>"
                                       html+="<option value='12'>12. Dispositivos para control de acceso</option>"
                                       html+="<option value='13'>13. Dispositivos de videovigilancia </option>"
                                       html+="<option value='14'>14. Material de protección contra incendios</option>"
                                       html+="<option value='15'>15. Suministros de seguridad laboral </option>"
                                      

                                               
                        }
                         if(x.value=="50"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Teléfonos móviles</option>"
                                        html+="<option value='2'>2. Accesorios para teléfonos móviles</option>"
                                         html+="<option value='3'>3.Emisores</option>"
                                          html+="<option value='4'>4. Receptores</option>"
                                           html+="<option value='5'>5. Teléfonos fijos </option>"
                                            html+="<option value='6'>6. Accesorios para teléfonos fijos</option>"
                                             html+="<option value='7'>7. Móviles de segunda mano </option>"
                                             html+="<option value='8'>8. Componentes de comunicaciones</option>"
                                             html+="<option value='9'>9. Dispositivos inhalámbricos</option>"
                                               
                        }
                              if(x.value=="51"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Perros</option>"
                                        html+="<option value='2'>2. Gatos</option>"
                                         html+="<option value='3'>3. Peces</option>"
                                          html+="<option value='4'>4. Animales pequeños</option>"
                                           html+="<option value='5'>5. Aves </option>"
                                            html+="<option value='6'>6. Reptiles </option>"
                                             html+="<option value='7'>7. Caballos </option>"                                               
                        }



                        if(x.value=="52"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Accesorios religiosos</option>"
                                        html+="<option value='2'>2. Imaginería </option>"
                                         html+="<option value='3'>3. Cuadros</option>"
                                          html+="<option value='4'>4. Figuras</option>"
                                           html+="<option value='5'>5. Medallas</option>"
                                            html+="<option value='6'>6. Orfebrería</option>"
                                             html+="<option value='7'>7. Ornamentos </option>"
                                             html+="<option value='8'>8. Escapularios</option>"
                                             html+="<option value='9'>9. Rosarios</option>"
                                              html+="<option value='10'>10. Artículos de primera comunión </option>"
                                             html+="<option value='11'>11. Grutas para exteriores</option>"
                                             html+="<option value='12'>12. Fuentes religiosas</option>"
                                             html+="<option value='13'>13. Libros de oraciones </option>"
                                             html+="<option value='14'>14. Figuras de natividad </option>"
                                               
                        }
                        
                        
                        
                        if(x.value=="53"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Lencería para mujeres</option>"
                                        html+="<option value='2'>2. Vibradores </option>"
                                         html+="<option value='3'>3. Consoladores</option>"
                                          html+="<option value='4'>4. Disfraces eróticos para mujeres</option>"
                                           html+="<option value='5'>5. Disfraces eróticos para hombres</option>"
                                            html+="<option value='6'>6. Potenciadores sexuales</option>"
                                             html+="<option value='7'>7. Retardantes </option>"
                                             html+="<option value='8'>8. Lubricantes</option>"
                                             html+="<option value='9'>9. Crecimiento del pene</option>"
                                              html+="<option value='10'>10. Anillos sexuales </option>"
                                             html+="<option value='11'>11. Juguetes anales</option>"
                                             html+="<option value='12'>12. Juguetes vaginales</option>"
                                             html+="<option value='13'>13. Condones</option>"
                                             html+="<option value='14'>14. Feromonas </option>"
                                             html+="<option value='15'>15. Afrodisiacos </option>"
                                             html+="<option value='16'>16. Masturbadores </option>"
                                              html+="<option value='17'>17. Juegos sexuales en pareja  </option>"
                                             html+="<option value='18'>18. Artículos de fetiche  </option>"
                                              html+="<option value='19'>19. Artículos para el pene </option>"
                                             html+="<option value='20'>20. Productos de higiene  </option>"
                                                html+="<option value='21'>21. Aceites eróticos  </option>"
                                                html+="<option value='22'>22. Comestibles </option>"
                        }
                        
                        
                        if(x.value=="54"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Juegos de aprendizaje</option>"
                                        html+="<option value='2'>2. Juegos para imitar </option>"
                                         html+="<option value='3'>3. Juegos de ciencia</option>"
                                          html+="<option value='4'>4. Juegos de construcción </option>"
                                           html+="<option value='5'>5. Juegos de rol</option>"
                                            html+="<option value='6'>6. Juegos de salón </option>"
                                             html+="<option value='7'>7. Juegos de imaginación  </option>"
                                             html+="<option value='8'>8. Juegos para adultos</option>"
                                             html+="<option value='9'>9. Juegos de habilidades básicas</option>"
                                              html+="<option value='10'>10. Juegos de mesa</option>"
                                             html+="<option value='11'>11. Juegos de azar</option>"
                                             html+="<option value='12'>12. Material para juego de dardos </option>"
                                             html+="<option value='13'>13. Juegos de palabras</option>"
                                              html+="<option value='14'>14. Juegos de puzzle’</option>"
                                             
                                                }
                                                
                                                 if(x.value=="55"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Dinero de colección</option>"
                                        html+="<option value='2'>2. Figuras de acción </option>"
                                         html+="<option value='3'>3. Láminas de colección </option>"
                                          html+="<option value='4'>4. Cuadros de colección  </option>"
                                           html+="<option value='5'>5. Botellas de colección </option>"
                                            html+="<option value='6'>6. Comics de colección  </option>"
                                             html+="<option value='7'>7. Recuerdos de países   </option>"
                                             html+="<option value='8'>8. Posters</option>"
                                             html+="<option value='11'>11. Artículos antiguos de colección</option>"
                                              html+="<option value='14'>14. Etiquetas de colección</option>"
                                              html+="<option value='15'>15. Recordatorios de lugares</option>"
                                              html+="<option value='16'>16. Medios de transporte colección</option>"
                                                }
                                                
                                                if(x.value=="56"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Joyería de bodas</option>"
                                        html+="<option value='2'>2. Decoración de bodas</option>"
                                         html+="<option value='3'>3. Vestidos de boda </option>"
                                          html+="<option value='4'>4. Tarjetas de invitación para boda </option>"
                                           html+="<option value='5'>5. Comida para bodas</option>"
                                            html+="<option value='6'>6. Utensilios de cocina para bodas </option>"
                                             html+="<option value='7'>7. Accesorios para bodas </option>"
                                             
                                             
                                                }
                                                
                                                 
                                                if(x.value=="57"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Películas por género</option>"
                                        html+="<option value='2'>2. Recitales</option>"
                                         html+="<option value='3'>3. Musicales </option>"
                                          html+="<option value='4'>4. Series </option>"
                                             
                                                }
                                                
                                                if(x.value=="58"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Música digital</option>"
                                        html+="<option value='2'>2. Vinilos </option>"
                                         html+="<option value='3'>3. CD </option>"
                                          html+="<option value='4'>4. Casette </option>"
                                           html+="<option value='5'>5. DVD </option>"
                                            html+="<option value='6'>6. Instrumentos musicales </option>"
                                             html+="<option value='7'>7. Dispositivos de DJ </option>"
                                              html+="<option value='8'>8. Accesorios para instrumentos </option>"
                                               html+="<option value='9'>9. Partes de instrumentos </option>"
                                               html+="<option value='10'>10. Cables para instrumentos </option>"
                                               html+="<option value='11'>11. Equipo para estudio </option>"
                                               html+="<option value='12'>12. Música cristiana</option>"
                                              
                                                }
                                              if(x.value=="59"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Libros infantiles</option>"
                                        html+="<option value='2'>2. Libros en inglés</option>"
                                         html+="<option value='3'>3. Libros en idiomas extranjeros </option>"
                                          html+="<option value='4'>4. Libros juveniles </option>"
                                          html+="<option value='5'>5. Libros universitarios </option>"
                                          html+="<option value='6'>6. Libros educativos</option>"
                                          html+="<option value='7'>7. Audiolibros </option>"
                                           html+="<option value='8'>8. Revistas </option>"
                                            html+="<option value='9'>9. Libros de maternidad </option>"
                                             html+="<option value='10'>10. Libros de autoayuda </option>"
                                             
                                              html+="<option value='11'>11. Libros esotéricos </option>"
                                               html+="<option value='12'>12. Literatura universal </option>"
                                                html+="<option value='13'>13. Biografías </option>"
                                                 html+="<option value='14'>14. Literatura universal </option>"
                                                 html+="<option value='15'>15. Fundas para libros</option>"
                                                  html+="<option value='16'>16. Separadores de libros</option>"
                                                 

                                             
                                                }
                                                
                                                if(x.value=="60"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Decoración para Navidad</option>"
                                        html+="<option value='2'>2. Figuras de Natividad</option>"
                                         html+="<option value='3'>3. Decoración para Halloween </option>"
                                          html+="<option value='4'>4. Decoración para San Valentín </option>"
                                          html+="<option value='5'>5. Decoración para carnavales </option>"
                                          html+="<option value='6'>6. Decoración bautizo </option>"
                                          html+="<option value='7'>7. Decoración primera comunión </option>"
                                          html+="<option value='8'>8. Decoración graduación </option>"
                                             
                                                }
                                                
                                                  if(x.value=="61"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Extracto vegetal</option>"
                                        html+="<option value='2'>2. Extracto animal </option>"
                                         html+="<option value='3'>3. Cereales </option>"
                                         
                                          html+="<option value='4'>4. Semillas </option>"
                                           html+="<option value='5'>5. Animales </option>"
                                            html+="<option value='6'>6. Alimento para animales </option>"
                                             html+="<option value='7'>7. Maquinaria agrícola  </option>"
                                              html+="<option value='8'>8. Cigarrillos </option>"
                                               html+="<option value='9'>9. Productos químicos agrícolas  </option>"
                                           html+="<option value='10'>10. Materias primas agrícolas </option>"
                                            html+="<option value='11'>11. Fertilizantes </option>"
                                             html+="<option value='12'>12. Agroquímicos </option>"
                                             html+="<option value='13'>13. Materias primas agrícolas </option>"
                                            html+="<option value='14'>14. Comida para animales  </option>"
                                             html+="<option value='15'>15. Fibra vegetal </option>"
                                             
                                                }
                                                
                                                
                                                 if(x.value=="62"){     
                                       html="<option label='Select Option'></option>"
                                       html+="<option value='1'>1. Vivero de bebé</option>"
                                        html+="<option value='2'>2. Suministros de alimentación </option>"
                                         html+="<option value='3'>3. Coches para bebé </option>"
                                          html+="<option value='4'>4. Artículos de actividad para bebé </option>"
                                           html+="<option value='5'>5. Seguridad para bebé  </option>"
                                            html+="<option value='6'>6. Prendas especiales de maternidad</option>"
                                             html+="<option value='7'>7. Productos para el cuidado en la maternidad</option>"
                                              html+="<option value='8'>8. Vitaminas de maternidad </option>"
                                               html+="<option value='9'>9. Productos de aseo en la maternidad</option>"
                                                html+="<option value='10'>10. Asientos para auto </option>"
                                                html+="<option value='11'>11. Productos para el cuidado del bebé</option>"
                                                 html+="<option value='12'>12. Suministros de aseo para bebé</option>"
                                                  html+="<option value='13'>13. Artículos para bebé</option>"
                                                  html+="<option value='14'>14. Portabebés</option>"
                                                   html+="<option value='15'>15. Bolsos para artículos de bebé</option>"
                                                } 
                                     
                        return html;
        }        

                      
document.getElementById("categoria").onchange = function() {
                    var x = document.getElementById("categoria");
                         document.getElementById("divsubcategoria").style.display="block";                        
                         document.getElementById("subcategoria").innerHTML=dinamicoselect(x);

                    }

document.getElementById("categoria2").onchange = function() {
                    var x = document.getElementById("categoria2");
                         document.getElementById("divsubcategoria2").style.display="block";                        
                         document.getElementById("subcategoria2").innerHTML=dinamicoselect(x);

                    }

                    document.getElementById("categoria3").onchange = function() {
                    var x = document.getElementById("categoria3");
                         document.getElementById("divsubcategoria3").style.display="block";                        
                         document.getElementById("subcategoria3").innerHTML=dinamicoselect(x);

                    }

document.getElementById("categoria4").onchange = function() {
                    var x = document.getElementById("categoria4");
                         document.getElementById("divsubcategoria4").style.display="block";                        
                         document.getElementById("subcategoria4").innerHTML=dinamicoselect(x);

                    }

                    document.getElementById("categoria5").onchange = function() {
                    var x = document.getElementById("categoria5");
                         document.getElementById("divsubcategoria5").style.display="block";                        
                         document.getElementById("subcategoria5").innerHTML=dinamicoselect(x);

                    }

document.getElementById("categoria6").onchange = function() {
                    var x = document.getElementById("categoria6");
                         document.getElementById("divsubcategoria6").style.display="block";                        
                         document.getElementById("subcategoria6").innerHTML=dinamicoselect(x);

                    }
                    document.getElementById("categoria7").onchange = function() {
                    var x = document.getElementById("categoria7");
                         document.getElementById("divsubcategoria7").style.display="block";                        
                         document.getElementById("subcategoria7").innerHTML=dinamicoselect(x);

                    }

document.getElementById("categoria8").onchange = function() {
                    var x = document.getElementById("categoria8");
                         document.getElementById("divsubcategoria8").style.display="block";                        
                         document.getElementById("subcategoria8").innerHTML=dinamicoselect(x);

                    }

                    document.getElementById("categoria9").onchange = function() {
                    var x = document.getElementById("categoria9");
                         document.getElementById("divsubcategoria9").style.display="block";                        
                         document.getElementById("subcategoria9").innerHTML=dinamicoselect(x);

                    }

                    document.getElementById("categoria10").onchange = function() {
                    var x = document.getElementById("categoria10");
                         document.getElementById("divsubcategoria10").style.display="block";                        
                         document.getElementById("subcategoria10").innerHTML=dinamicoselect(x);

                    }
 
               mostrarcategorias();                                                        
                  
                  
                   function mostrarcategorias() { 
                   
                      var traido=document.getElementById("mocategoria").value;
                       var vector=traido.split(",");
                        var cadena="";
                         var vecategorias=[
                           "Alimentación"
                                       ,"Bebidas"
                                       ,"Calzado"
                                       ,""
                                       ,""
                                       ,"moda"
                                       ,""
                                       ,"mecánicos"
                                       ,"Electrodomésticos"
                                        ,"embalaje"
                                         ,"Deportes"
                                          ,"negocios"
                                           ,"construcción"
                                            ,"energía"
                                             ,""
                                              ,"medicina"
                                               ,"electricidad"
                                               ,""
                                               ,"Herramientas "
                                               ,"Iluminación "
                                                ,""
                                                 ,""
                                                  ,"Informática "
                                                   ,"análisis "
                                                   ,"Juguetes  "
                                                   ,"limpieza  "
                                                   ,"maletas"
                                                   ,"Equipos"
                                                   ,"Máquinas "
                                                   ," oficina "
                                                   ," papelería"
                                                   ,"transporte "
                                                   ,"Minería  "
                                                   ,"Muebles "
                                                   ,"Plástico"
                                                   ,"Caucho "
                                                    ," belleza"
                                                     ," hogar "
                                                      ,"jardín  "
                                                       ,"ambiente "
                                                        ,"químicos"
                                                         ,"fiestas "
                                                          ,"Regalos"
                                                          ,"Artesanías"
                                                          ,"Joyería"
                                                          ,"Relojes"
                                                          ,""
                                                          ,"Textiles"
                                                           ,"seguridad"
                                                            ,"comunicaciones"
                                                             ,"Mascotas"
                                                            ,"religiosos"  
                                                            ,"Sexshop"
                                                            ,"juegos"
                                                            ,"colección"
                                                            ,"Bodas"
                                                            ,"Peliculas"
                                                            ,"Musica"
                                                            ,"Libros"
                                                            ,"Decoración"
                                                            ,"agrícolas"
                                                            ,"Maternidad"];
                       for (i = 0; i < vector.length; i++) { 
                           var numcatego=vector[i].split("-");
                           if(numcatego[0]!=""){
                                 cadena=cadena+""+vecategorias[(numcatego[0]-1)];
                                 if(numcatego[1]!=undefined){
                                 cadena=cadena+"-"+numcatego[1];
                                 }
                           }
                           cadena=cadena+",";
                           document.getElementById("areacategoria").value=cadena;
                   }
                  
                                                            
                     setTimeout($("#div-categorias").html(respuesta.sesion),100);                                                           
                  
                 }
                  contenidopalabra();
                    function contenidopalabra() {
					var palabra=document.getElementById("tags").value; 
					if(palabra.length>3){
					  $.post('automatico-palabra.php', {
                     palabra : palabra
                   }, function(respuesta) { 
                       var availableTags=respuesta.sesion.split(",");
                     $( "#tags" ).autocomplete({
      source: function(request, response) {
        var results = $.ui.autocomplete.filter(availableTags, request.term);

        response(results.slice(0, 10));
    }
    });                                                      
                   }, 'json');  
					}
                   

                 }
                 
                 
                function agregarprod(){
                   
                     var parrafo = document.getElementById("tags").value;
                 var concatenar="";  
                 var lista=  document.getElementById("lisprod").value;     
                 
                   if(lista!=""  && lista.indexOf(parrafo)==-1){                    
                    concatenar = lista+",--"+parrafo;
                  }
                   if(lista==""){
                     concatenar = "--"+parrafo;                    
                  }
                  if(lista!="" && lista.indexOf(parrafo)!=-1){
                     concatenar = lista;                    
                  } 
                 if(parrafo!=""){
                  document.getElementById("lisprod").value=concatenar;
                  var parrafo = document.getElementById("tags").value="";
                  contenidopalabra();
                 }
                 }
                  
                      



 