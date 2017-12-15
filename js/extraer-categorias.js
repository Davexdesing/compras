cateprincipal();

function cateprincipal() { 
                  
                   $.post('automatico-index.php', {
                     cateprincipal : "hola"
                   }, function(respuesta) {            
                     $("#div-principal").html(respuesta.sesion); 
                   }, 'json');
                 }
                  
                 
                 function cambioact() {
                     var FormBuscarSiniestro = $('#formubuscar');
                     var palabra=document.getElementById("tags").value;
                      palabra=palabra.split(" ");
                      conpalabra="";
                      if(palabra[0]!=undefined){
                           conpalabra=""+palabra[0];
                      }
                      if(palabra[1]!=undefined){
                           conpalabra+="-"+palabra[1];
                      }
                      if(palabra[2]!=undefined){
                           conpalabra+="-"+palabra[2];
                      }
                       if(palabra[3]!=undefined){
                           conpalabra+="-"+palabra[3];
                      }
                      if(palabra[4]!=undefined){
                           conpalabra+="-"+palabra[4];
                      }
                        palabra=conpalabra;
                     
                     var tipo=document.getElementById("tipo").value;
                     var categoria=document.getElementById("categoria").value;
                     var conca="";
                    
                     if(palabra!=""){
                         conca=palabra;
                     }
                      if(tipo!==''){
                          if(conca!=""){
                              conca+="&"+tipo;
                          }else{
                              conca=tipo;
                          }
                     }
                      if(categoria!==''){
                          categoria=categoria.split("&");
                          if(conca!=""){
                                conca+="&"+categoria[0];
                          }else{
                              conca=categoria[0];
                          }
                     }
                     
                    
                
    FormBuscarSiniestro.attr("action", "/"+conca);
                 }

 categorias();


function categorias() { 
                   $.post('automatico-index.php', {
                     categoriadiv : "hola"
                   }, function(respuesta) {
                      var traido=document.getElementById("vector").value;
                       var vector=traido.split(";");
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
                                                   ,"Equipos "
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
                       

                      
                       
                       
                       
                       
                       if(vector[0]==1){
                            $("#icat1").attr("class","flaticon-kitchen");
                       }
                       if(vector[0]==2){
                            $("#icat1").attr("class","flaticon-beer");
                       }
                       if(vector[0]==3){
                            $("#icat1").attr("class","flaticon-trainers");
                       }
                       if(vector[0]==6){
                            $("#icat1").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                       if(vector[0]==8){
                            $("#icat1").attr("class","flaticon-pipes");
                       }
                       if(vector[0]==9){
                            $("#icat1").attr("class","flaticon-multicooker");
                       }
                       if(vector[0]==11){
                            $("#icat1").attr("class","flaticon-people");
                       }
                      if(vector[0]==13){
                            $("#icat1").attr("class","flaticon-brickwall");
                       }
                       if(vector[0]==12){
                            $("#icat1").attr("class","flaticon-refrigerator");
                       }
                       if(vector[0]==14){
                            $("#icat1").attr("class","flaticon-gasoline");
                       }
                       
                       
                        

                        if(vector[0]==16){
                            $("#icat1").attr("class","flaticon-pills");
                       }
                       if(vector[0]==19){
                            $("#icat1").attr("class","flaticon-toolbox");
                       }
                       if(vector[0]==20){
                            $("#icat1").attr("class","flaticon-hanging-roof-lamp");
                       }
                       if(vector[0]==21){
                            $("#icat1").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                      
                       if(vector[0]==23){
                            $("#icat1").attr("class","flaticon-laptop");
                       }
                 
                       
                       if(vector[0]==24){
                            $("#icat1").attr("class","flaticon-stopwatch");
                       }
                       if(vector[0]==25){
                            $("#icat1").attr("class","flaticon-ducky");
                       }
                       if(vector[0]==26){
                            $("#icat1").attr("class","flaticon-spray");
                       }
                      
                       if(vector[0]==27){
                            $("#icat1").attr("class","flaticon-luggage");
                       }
                       if(vector[0]==28){
                            $("#icat1").attr("class","flaticon-air-conditioner");
                       }
                       if(vector[0]==29){
                            $("#icat1").attr("class","flaticon-new-sewing-machine");
                      }
                      if(vector[0]==30){
                            $("#icat1").attr("class","flaticon-refrigerator");
                       }
                       if(vector[0]==31){
                            $("#icat1").attr("class","flaticon-folder");
                       }
                       if(vector[0]==32){
                            $("#icat1").attr("class","flaticon-bicycle");
                       }
                       if(vector[0]==33){
                            $("#icat1").attr("class","flaticon-gold-ingots");
                       }
                       
                       
                        if(vector[0]==34){
                            $("#icat1").attr("class","flaticon-kitchen-1");
                       }
                       if(vector[0]==35){
                            $("#icat1").attr("class","flaticon-big-bottle-of-water");
                      }
                      if(vector[0]==36){
                            $("#icat1").attr("class","flaticon-live-preserver");
                       }
                       if(vector[0]==37){
                            $("#icat1").attr("class","flaticon-lipstick");
                       }if(vector[0]==38){
                            $("#icat1").attr("class","flaticon-window");
                       }
                       if(vector[0]==39){
                            $("#icat1").attr("class","flaticon-lawn-mower");
                       }
                       
                      
                      
                      if(vector[0]==40){
                            $("#icat1").attr("class","flaticon-recycling");
                       }
                       if(vector[0]==41){
                            $("#icat1").attr("class","flaticon-cleaning");
                      }
                      if(vector[0]==42){
                            $("#icat1").attr("class","flaticon-confetti");
                       }
                       if(vector[0]==43){
                            $("#icat1").attr("class","flaticon-big-gift-box");
                       }
                       if(vector[0]==44){
                            $("#icat1").attr("class","flaticon-food");
                       }
                       if(vector[0]==45){
                            $("#icat1").attr("class","flaticon-earrings");
                       }
                       
                       
                       
                       if(vector[0]==46){
                            $("#icat1").attr("class","flaticon-watch");
                       }
                       if(vector[0]==48){
                            $("#icat1").attr("class","flaticon-woman");
                      }
                      if(vector[0]==49){
                            $("#icat1").attr("class","flaticon-locked");
                       }
                       if(vector[0]==50){
                            $("#icat1").attr("class","flaticon-smartphone");
                       }
                       if(vector[0]==51){
                            $("#icat1").attr("class","flaticon-dog-food");
                       }
                       if(vector[0]==52){
                            $("#icat1").attr("class","flaticon-rosary");
                       }
                       
                       if(vector[0]==53){
                            $("#icat1").attr("class","flaticon-condom");
                       }
                       if(vector[0]==54){
                            $("#icat1").attr("class","flaticon-playing-cards-with-hearts");
                      }
                      if(vector[0]==55){
                            $("#icat1").attr("class","flaticon-mail");
                       }
                       if(vector[0]==56){
                            $("#icat1").attr("class","flaticon-fashion");
                       }
                       if(vector[0]==57){
                            $("#icat1").attr("class","flaticon-play-movie");
                       }
                       if(vector[0]==58){
                            $("#icat1").attr("class","flaticon-music");
                       }
                       
                       if(vector[0]==59){
                            $("#icat1").attr("class","flaticon-book");
                       }
                       if(vector[0]==60){
                            $("#icat1").attr("class","flaticon-shapes");
                      }
                      if(vector[0]==62){
                            $("#icat1").attr("class","flaticon-body");
                       }
                      
                       
                       
                       ///////////////////////////////////2
                       
                        if(vector[1]==1){
                            $("#icat2").attr("class","flaticon-kitchen");
                       }
                       if(vector[1]==2){
                            $("#icat2").attr("class","flaticon-beer");
                       }
                       if(vector[1]==3){
                            $("#icat2").attr("class","flaticon-trainers");
                       }
                       if(vector[1]==6){
                            $("#icat2").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                       if(vector[1]==8){
                            $("#icat2").attr("class","flaticon-pipes");
                       }
                       if(vector[1]==9){
                            $("#icat2").attr("class","flaticon-multicooker");
                       }
                       if(vector[1]==11){
                            $("#icat2").attr("class","flaticon-people");
                       }
                      if(vector[1]==13){
                            $("#icat2").attr("class","flaticon-brickwall");
                       }
                       if(vector[1]==12){
                            $("#icat2").attr("class","flaticon-refrigerator");
                       }
                       if(vector[1]==14){
                            $("#icat2").attr("class","flaticon-gasoline");
                       }
                       
                       
                        

                        if(vector[1]==16){
                            $("#icat2").attr("class","flaticon-pills");
                       }
                       if(vector[1]==19){
                            $("#icat2").attr("class","flaticon-toolbox");
                       }
                       if(vector[1]==20){
                            $("#icat2").attr("class","flaticon-hanging-roof-lamp");
                       }
                       if(vector[1]==21){
                            $("#icat2").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                      
                       if(vector[1]==23){
                            $("#icat2").attr("class","flaticon-laptop");
                       }
                 
                       
                       if(vector[1]==24){
                            $("#icat2").attr("class","flaticon-stopwatch");
                       }
                       if(vector[1]==25){
                            $("#icat2").attr("class","flaticon-ducky");
                       }
                       if(vector[1]==26){
                            $("#icat2").attr("class","flaticon-spray");
                       }
                      
                       if(vector[1]==27){
                            $("#icat2").attr("class","flaticon-luggage");
                       }
                       if(vector[1]==28){
                            $("#icat2").attr("class","flaticon-air-conditioner");
                       }
                       if(vector[1]==29){
                            $("#icat2").attr("class","flaticon-new-sewing-machine");
                      }
                      if(vector[1]==30){
                            $("#icat2").attr("class","flaticon-refrigerator");
                       }
                       if(vector[1]==31){
                            $("#icat2").attr("class","flaticon-folder");
                       }
                       if(vector[1]==32){
                            $("#icat2").attr("class","flaticon-bicycle");
                       }
                       if(vector[1]==33){
                            $("#icat2").attr("class","flaticon-gold-ingots");
                       }
                       
                       
                        if(vector[1]==34){
                            $("#icat2").attr("class","flaticon-kitchen-1");
                       }
                       if(vector[1]==35){
                            $("#icat2").attr("class","flaticon-big-bottle-of-water");
                      }
                      if(vector[1]==36){
                            $("#icat2").attr("class","flaticon-live-preserver");
                       }
                       if(vector[1]==37){
                            $("#icat2").attr("class","flaticon-lipstick");
                       }if(vector[1]==38){
                            $("#icat2").attr("class","flaticon-window");
                       }
                       if(vector[1]==39){
                            $("#icat2").attr("class","flaticon-lawn-mower");
                       }
                       
                      
                      
                      if(vector[1]==40){
                            $("#icat2").attr("class","flaticon-recycling");
                       }
                       if(vector[1]==41){
                            $("#icat2").attr("class","flaticon-cleaning");
                      }
                      if(vector[1]==42){
                            $("#icat2").attr("class","flaticon-confetti");
                       }
                       if(vector[1]==43){
                            $("#icat2").attr("class","flaticon-big-gift-box");
                       }
                       if(vector[1]==44){
                            $("#icat2").attr("class","flaticon-food");
                       }
                       if(vector[1]==45){
                            $("#icat2").attr("class","flaticon-earrings");
                       }
                       
                       
                       
                       if(vector[1]==46){
                            $("#icat2").attr("class","flaticon-watch");
                       }
                       if(vector[1]==48){
                            $("#icat2").attr("class","flaticon-woman");
                      }
                      if(vector[1]==49){
                            $("#icat2").attr("class","flaticon-locked");
                       }
                       if(vector[1]==50){
                            $("#icat2").attr("class","flaticon-smartphone");
                       }
                       if(vector[1]==51){
                            $("#icat2").attr("class","flaticon-dog-food");
                       }
                       if(vector[1]==52){
                            $("#icat2").attr("class","flaticon-rosary");
                       }
                       
                       if(vector[1]==53){
                            $("#icat2").attr("class","flaticon-condom");
                       }
                       if(vector[1]==54){
                            $("#icat2").attr("class","flaticon-playing-cards-with-hearts");
                      }
                      if(vector[1]==55){
                            $("#icat2").attr("class","flaticon-mail");
                       }
                       if(vector[1]==56){
                            $("#icat2").attr("class","flaticon-fashion");
                       }
                       if(vector[1]==57){
                            $("#icat2").attr("class","flaticon-play-movie");
                       }
                       if(vector[1]==58){
                            $("#icat2").attr("class","flaticon-music");
                       }
                       
                       if(vector[1]==59){
                            $("#icat2").attr("class","flaticon-book");
                       }
                       if(vector[1]==60){
                            $("#icat2").attr("class","flaticon-shapes");
                      }
                      if(vector[1]==62){
                            $("#icat2").attr("class","flaticon-body");
                       }
                      
                       
                       
                       
                       
                       
                       //////////////////////////////////3
                       
                       if(vector[2]==1){
                            $("#icat3").attr("class","flaticon-kitchen");
                       }
                       if(vector[2]==2){
                            $("#icat3").attr("class","flaticon-beer");
                       }
                       if(vector[2]==3){
                            $("#icat3").attr("class","flaticon-trainers");
                       }
                       if(vector[2]==6){
                            $("#icat3").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                       if(vector[2]==8){
                            $("#icat3").attr("class","flaticon-pipes");
                       }
                       if(vector[2]==9){
                            $("#icat3").attr("class","flaticon-multicooker");
                       }
                       if(vector[2]==11){
                            $("#icat3").attr("class","flaticon-people");
                       }
                      if(vector[2]==13){
                            $("#icat3").attr("class","flaticon-brickwall");
                       }
                       if(vector[2]==12){
                            $("#icat3").attr("class","flaticon-refrigerator");
                       }
                       if(vector[2]==14){
                            $("#icat3").attr("class","flaticon-gasoline");
                       }
                       
                       
                        

                        if(vector[2]==16){
                            $("#icat3").attr("class","flaticon-pills");
                       }
                       if(vector[2]==19){
                            $("#icat3").attr("class","flaticon-toolbox");
                       }
                       if(vector[2]==20){
                            $("#icat3").attr("class","flaticon-hanging-roof-lamp");
                       }
                       if(vector[2]==21){
                            $("#icat3").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                      
                       if(vector[2]==23){
                            $("#icat3").attr("class","flaticon-laptop");
                       }
                 
                       
                       if(vector[2]==24){
                            $("#icat3").attr("class","flaticon-stopwatch");
                       }
                       if(vector[2]==25){
                            $("#icat3").attr("class","flaticon-ducky");
                       }
                       if(vector[2]==26){
                            $("#icat3").attr("class","flaticon-spray");
                       }
                      
                       if(vector[2]==27){
                            $("#icat3").attr("class","flaticon-luggage");
                       }
                       if(vector[2]==28){
                            $("#icat3").attr("class","flaticon-air-conditioner");
                       }
                       if(vector[2]==29){
                            $("#icat3").attr("class","flaticon-new-sewing-machine");
                      }
                      if(vector[2]==30){
                            $("#icat3").attr("class","flaticon-refrigerator");
                       }
                       if(vector[2]==31){
                            $("#icat3").attr("class","flaticon-folder");
                       }
                       if(vector[2]==32){
                            $("#icat3").attr("class","flaticon-bicycle");
                       }
                       if(vector[2]==33){
                            $("#icat3").attr("class","flaticon-gold-ingots");
                       }
                       
                       
                        if(vector[2]==34){
                            $("#icat3").attr("class","flaticon-kitchen-1");
                       }
                       if(vector[2]==35){
                            $("#icat3").attr("class","flaticon-big-bottle-of-water");
                      }
                      if(vector[2]==36){
                            $("#icat3").attr("class","flaticon-live-preserver");
                       }
                       if(vector[2]==37){
                            $("#icat3").attr("class","flaticon-lipstick");
                       }if(vector[2]==38){
                            $("#icat3").attr("class","flaticon-window");
                       }
                       if(vector[2]==39){
                            $("#icat3").attr("class","flaticon-lawn-mower");
                       }
                       
                      
                      
                      if(vector[2]==40){
                            $("#icat3").attr("class","flaticon-recycling");
                       }
                       if(vector[2]==41){
                            $("#icat3").attr("class","flaticon-cleaning");
                      }
                      if(vector[2]==42){
                            $("#icat3").attr("class","flaticon-confetti");
                       }
                       if(vector[2]==43){
                            $("#icat3").attr("class","flaticon-big-gift-box");
                       }
                       if(vector[2]==44){
                            $("#icat3").attr("class","flaticon-food");
                       }
                       if(vector[2]==45){
                            $("#icat3").attr("class","flaticon-earrings");
                       }
                       
                       
                       
                       if(vector[2]==46){
                            $("#icat3").attr("class","flaticon-watch");
                       }
                       if(vector[2]==48){
                            $("#icat3").attr("class","flaticon-woman");
                      }
                      if(vector[2]==49){
                            $("#icat3").attr("class","flaticon-locked");
                       }
                       if(vector[2]==50){
                            $("#icat3").attr("class","flaticon-smartphone");
                       }
                       if(vector[2]==51){
                            $("#icat3").attr("class","flaticon-dog-food");
                       }
                       if(vector[2]==52){
                            $("#icat3").attr("class","flaticon-rosary");
                       }
                       
                       if(vector[2]==53){
                            $("#icat3").attr("class","flaticon-condom");
                       }
                       if(vector[2]==54){
                            $("#icat3").attr("class","flaticon-playing-cards-with-hearts");
                      }
                      if(vector[2]==55){
                            $("#icat3").attr("class","flaticon-mail");
                       }
                       if(vector[2]==56){
                            $("#icat3").attr("class","flaticon-fashion");
                       }
                       if(vector[2]==57){
                            $("#icat3").attr("class","flaticon-play-movie");
                       }
                       if(vector[2]==58){
                            $("#icat3").attr("class","flaticon-music");
                       }
                       
                       if(vector[2]==59){
                            $("#icat3").attr("class","flaticon-book");
                       }
                       if(vector[2]==60){
                            $("#icat3").attr("class","flaticon-shapes");
                      }
                      if(vector[2]==62){
                            $("#icat3").attr("class","flaticon-body");
                       }
                       
                       
                       
                       
                       
                       /////////////////////////////4
                        if(vector[3]==1){
                            $("#icat4").attr("class","flaticon-kitchen");
                       }
                       if(vector[3]==2){
                            $("#icat4").attr("class","flaticon-beer");
                       }
                       if(vector[3]==3){
                            $("#icat4").attr("class","flaticon-trainers");
                       }
                       if(vector[3]==6){
                            $("#icat4").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                       if(vector[3]==8){
                            $("#icat4").attr("class","flaticon-pipes");
                       }
                       if(vector[3]==9){
                            $("#icat4").attr("class","flaticon-multicooker");
                       }
                       if(vector[3]==11){
                            $("#icat4").attr("class","flaticon-people");
                       }
                      if(vector[3]==13){
                            $("#icat4").attr("class","flaticon-brickwall");
                       }
                       if(vector[3]==12){
                            $("#icat4").attr("class","flaticon-refrigerator");
                       }
                       if(vector[3]==14){
                            $("#icat4").attr("class","flaticon-gasoline");
                       }
                       
                       
                        

                        if(vector[3]==16){
                            $("#icat4").attr("class","flaticon-pills");
                       }
                       if(vector[3]==19){
                            $("#icat4").attr("class","flaticon-toolbox");
                       }
                       if(vector[3]==20){
                            $("#icat4").attr("class","flaticon-hanging-roof-lamp");
                       }
                       if(vector[3]==21){
                            $("#icat4").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                      
                       if(vector[3]==23){
                            $("#icat4").attr("class","flaticon-laptop");
                       }
                 
                       
                       if(vector[3]==24){
                            $("#icat4").attr("class","flaticon-stopwatch");
                       }
                       if(vector[3]==25){
                            $("#icat4").attr("class","flaticon-ducky");
                       }
                       if(vector[3]==26){
                            $("#icat4").attr("class","flaticon-spray");
                       }
                      
                       if(vector[3]==27){
                            $("#icat4").attr("class","flaticon-luggage");
                       }
                       if(vector[3]==28){
                            $("#icat4").attr("class","flaticon-air-conditioner");
                       }
                       if(vector[3]==29){
                            $("#icat4").attr("class","flaticon-new-sewing-machine");
                      }
                      if(vector[3]==30){
                            $("#icat4").attr("class","flaticon-refrigerator");
                       }
                       if(vector[3]==31){
                            $("#icat4").attr("class","flaticon-folder");
                       }
                       if(vector[3]==32){
                            $("#icat4").attr("class","flaticon-bicycle");
                       }
                       if(vector[3]==33){
                            $("#icat4").attr("class","flaticon-gold-ingots");
                       }
                       
                       
                        if(vector[3]==34){
                            $("#icat4").attr("class","flaticon-kitchen-1");
                       }
                       if(vector[3]==35){
                            $("#icat4").attr("class","flaticon-big-bottle-of-water");
                      }
                      if(vector[3]==36){
                            $("#icat4").attr("class","flaticon-live-preserver");
                       }
                       if(vector[3]==37){
                            $("#icat4").attr("class","flaticon-lipstick");
                       }if(vector[3]==38){
                            $("#icat4").attr("class","flaticon-window");
                       }
                       if(vector[3]==39){
                            $("#icat4").attr("class","flaticon-lawn-mower");
                       }
                       
                      
                      
                      if(vector[3]==40){
                            $("#icat4").attr("class","flaticon-recycling");
                       }
                       if(vector[3]==41){
                            $("#icat4").attr("class","flaticon-cleaning");
                      }
                      if(vector[3]==42){
                            $("#icat4").attr("class","flaticon-confetti");
                       }
                       if(vector[3]==43){
                            $("#icat4").attr("class","flaticon-big-gift-box");
                       }
                       if(vector[3]==44){
                            $("#icat4").attr("class","flaticon-food");
                       }
                       if(vector[3]==45){
                            $("#icat4").attr("class","flaticon-earrings");
                       }
                       
                       
                       
                       if(vector[3]==46){
                            $("#icat4").attr("class","flaticon-watch");
                       }
                       if(vector[3]==48){
                            $("#icat4").attr("class","flaticon-woman");
                      }
                      if(vector[3]==49){
                            $("#icat4").attr("class","flaticon-locked");
                       }
                       if(vector[3]==50){
                            $("#icat4").attr("class","flaticon-smartphone");
                       }
                       if(vector[3]==51){
                            $("#icat4").attr("class","flaticon-dog-food");
                       }
                       if(vector[3]==52){
                            $("#icat4").attr("class","flaticon-rosary");
                       }
                       
                       if(vector[3]==53){
                            $("#icat4").attr("class","flaticon-condom");
                       }
                       if(vector[3]==54){
                            $("#icat4").attr("class","flaticon-playing-cards-with-hearts");
                      }
                      if(vector[3]==55){
                            $("#icat4").attr("class","flaticon-mail");
                       }
                       if(vector[3]==56){
                            $("#icat4").attr("class","flaticon-fashion");
                       }
                       if(vector[3]==57){
                            $("#icat4").attr("class","flaticon-play-movie");
                       }
                       if(vector[3]==58){
                            $("#icat4").attr("class","flaticon-music");
                       }
                       
                       if(vector[3]==59){
                            $("#icat4").attr("class","flaticon-book");
                       }
                       if(vector[3]==60){
                            $("#icat4").attr("class","flaticon-shapes");
                      }
                      if(vector[3]==62){
                            $("#icat4").attr("class","flaticon-body");
                       }
                      
                       
                       
                       
                       
                       
                       
                       
                       ///////////////////////////////5
                       
                       
                        if(vector[4]==1){
                            $("#icat5").attr("class","flaticon-kitchen");
                       }
                       if(vector[4]==2){
                            $("#icat5").attr("class","flaticon-beer");
                       }
                       if(vector[4]==3){
                            $("#icat5").attr("class","flaticon-trainers");
                       }
                       if(vector[4]==6){
                            $("#icat5").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                       if(vector[4]==8){
                            $("#icat5").attr("class","flaticon-pipes");
                       }
                       if(vector[4]==9){
                            $("#icat5").attr("class","flaticon-multicooker");
                       }
                       if(vector[4]==11){
                            $("#icat5").attr("class","flaticon-people");
                       }
                      if(vector[4]==13){
                            $("#icat5").attr("class","flaticon-brickwall");
                       }
                       if(vector[4]==12){
                            $("#icat5").attr("class","flaticon-refrigerator");
                       }
                       if(vector[4]==14){
                            $("#icat5").attr("class","flaticon-gasoline");
                       }
                       
                       
                        

                        if(vector[4]==16){
                            $("#icat5").attr("class","flaticon-pills");
                       }
                       if(vector[4]==19){
                            $("#icat5").attr("class","flaticon-toolbox");
                       }
                       if(vector[4]==20){
                            $("#icat5").attr("class","flaticon-hanging-roof-lamp");
                       }
                       if(vector[4]==21){
                            $("#icat5").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                      
                       if(vector[4]==23){
                            $("#icat5").attr("class","flaticon-laptop");
                       }
                 
                       
                       if(vector[4]==24){
                            $("#icat5").attr("class","flaticon-stopwatch");
                       }
                       if(vector[4]==25){
                            $("#icat5").attr("class","flaticon-ducky");
                       }
                       if(vector[4]==26){
                            $("#icat5").attr("class","flaticon-spray");
                       }
                      
                       if(vector[4]==27){
                            $("#icat5").attr("class","flaticon-luggage");
                       }
                       if(vector[4]==28){
                            $("#icat5").attr("class","flaticon-air-conditioner");
                       }
                       if(vector[4]==29){
                            $("#icat5").attr("class","flaticon-new-sewing-machine");
                      }
                      if(vector[4]==30){
                            $("#icat5").attr("class","flaticon-refrigerator");
                       }
                       if(vector[4]==31){
                            $("#icat5").attr("class","flaticon-folder");
                       }
                       if(vector[4]==32){
                            $("#icat5").attr("class","flaticon-bicycle");
                       }
                       if(vector[4]==33){
                            $("#icat5").attr("class","flaticon-gold-ingots");
                       }
                       
                       
                        if(vector[4]==34){
                            $("#icat5").attr("class","flaticon-kitchen-1");
                       }
                       if(vector[4]==35){
                            $("#icat5").attr("class","flaticon-big-bottle-of-water");
                      }
                      if(vector[4]==36){
                            $("#icat5").attr("class","flaticon-live-preserver");
                       }
                       if(vector[4]==37){
                            $("#icat5").attr("class","flaticon-lipstick");
                       }if(vector[4]==38){
                            $("#icat5").attr("class","flaticon-window");
                       }
                       if(vector[4]==39){
                            $("#icat5").attr("class","flaticon-lawn-mower");
                       }
                       
                      
                      
                      if(vector[4]==40){
                            $("#icat5").attr("class","flaticon-recycling");
                       }
                       if(vector[4]==41){
                            $("#icat5").attr("class","flaticon-cleaning");
                      }
                      if(vector[4]==42){
                            $("#icat5").attr("class","flaticon-confetti");
                       }
                       if(vector[4]==43){
                            $("#icat5").attr("class","flaticon-big-gift-box");
                       }
                       if(vector[4]==44){
                            $("#icat5").attr("class","flaticon-food");
                       }
                       if(vector[4]==45){
                            $("#icat5").attr("class","flaticon-earrings");
                       }
                       
                       
                       
                       if(vector[4]==46){
                            $("#icat5").attr("class","flaticon-watch");
                       }
                       if(vector[4]==48){
                            $("#icat5").attr("class","flaticon-woman");
                      }
                      if(vector[4]==49){
                            $("#icat5").attr("class","flaticon-locked");
                       }
                       if(vector[4]==50){
                            $("#icat5").attr("class","flaticon-smartphone");
                       }
                       if(vector[4]==51){
                            $("#icat5").attr("class","flaticon-dog-food");
                       }
                       if(vector[4]==52){
                            $("#icat5").attr("class","flaticon-rosary");
                       }
                       
                       if(vector[4]==53){
                            $("#icat5").attr("class","flaticon-condom");
                       }
                       if(vector[4]==54){
                            $("#icat5").attr("class","flaticon-playing-cards-with-hearts");
                      }
                      if(vector[4]==55){
                            $("#icat5").attr("class","flaticon-mail");
                       }
                       if(vector[4]==56){
                            $("#icat5").attr("class","flaticon-fashion");
                       }
                       if(vector[4]==57){
                            $("#icat5").attr("class","flaticon-play-movie");
                       }
                       if(vector[4]==58){
                            $("#icat5").attr("class","flaticon-music");
                       }
                       
                       if(vector[4]==59){
                            $("#icat5").attr("class","flaticon-book");
                       }
                       if(vector[4]==60){
                            $("#icat5").attr("class","flaticon-shapes");
                      }
                      if(vector[4]==62){
                            $("#icat5").attr("class","flaticon-body");
                       }
                      
                       
                       
                       
                       
                       
                       
                       
                       
                       ////////////////////////////6
                       
                       
                       
                        if(vector[5]==1){
                            $("#icat6").attr("class","flaticon-kitchen");
                       }
                       if(vector[5]==2){
                            $("#icat6").attr("class","flaticon-beer");
                       }
                       if(vector[5]==3){
                            $("#icat6").attr("class","flaticon-trainers");
                       }
                       if(vector[5]==6){
                            $("#icat6").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                       if(vector[5]==8){
                            $("#icat6").attr("class","flaticon-pipes");
                       }
                       if(vector[5]==9){
                            $("#icat6").attr("class","flaticon-multicooker");
                       }
                       if(vector[5]==11){
                            $("#icat6").attr("class","flaticon-people");
                       }
                      if(vector[5]==13){
                            $("#icat6").attr("class","flaticon-brickwall");
                       }
                       if(vector[5]==12){
                            $("#icat6").attr("class","flaticon-refrigerator");
                       }
                       if(vector[5]==14){
                            $("#icat6").attr("class","flaticon-gasoline");
                       }
                       
                       
                        

                        if(vector[5]==16){
                            $("#icat6").attr("class","flaticon-pills");
                       }
                       if(vector[5]==19){
                            $("#icat6").attr("class","flaticon-toolbox");
                       }
                       if(vector[5]==20){
                            $("#icat6").attr("class","flaticon-hanging-roof-lamp");
                       }
                       if(vector[5]==21){
                            $("#icat6").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                      
                       if(vector[5]==23){
                            $("#icat6").attr("class","flaticon-laptop");
                       }
                 
                       
                       if(vector[5]==24){
                            $("#icat6").attr("class","flaticon-stopwatch");
                       }
                       if(vector[5]==25){
                            $("#icat6").attr("class","flaticon-ducky");
                       }
                       if(vector[5]==26){
                            $("#icat6").attr("class","flaticon-spray");
                       }
                      
                       if(vector[5]==27){
                            $("#icat6").attr("class","flaticon-luggage");
                       }
                       if(vector[5]==28){
                            $("#icat6").attr("class","flaticon-air-conditioner");
                       }
                       if(vector[5]==29){
                            $("#icat6").attr("class","flaticon-new-sewing-machine");
                      }
                      if(vector[5]==30){
                            $("#icat6").attr("class","flaticon-refrigerator");
                       }
                       if(vector[5]==31){
                            $("#icat6").attr("class","flaticon-folder");
                       }
                       if(vector[5]==32){
                            $("#icat6").attr("class","flaticon-bicycle");
                       }
                       if(vector[5]==33){
                            $("#icat6").attr("class","flaticon-gold-ingots");
                       }
                       
                       
                        if(vector[5]==34){
                            $("#icat6").attr("class","flaticon-kitchen-1");
                       }
                       if(vector[5]==35){
                            $("#icat6").attr("class","flaticon-big-bottle-of-water");
                      }
                      if(vector[5]==36){
                            $("#icat6").attr("class","flaticon-live-preserver");
                       }
                       if(vector[5]==37){
                            $("#icat6").attr("class","flaticon-lipstick");
                       }if(vector[5]==38){
                            $("#icat6").attr("class","flaticon-window");
                       }
                       if(vector[5]==39){
                            $("#icat6").attr("class","flaticon-lawn-mower");
                       }
                       
                      
                      
                      if(vector[5]==40){
                            $("#icat6").attr("class","flaticon-recycling");
                       }
                       if(vector[5]==41){
                            $("#icat6").attr("class","flaticon-cleaning");
                      }
                      if(vector[5]==42){
                            $("#icat6").attr("class","flaticon-confetti");
                       }
                       if(vector[5]==43){
                            $("#icat6").attr("class","flaticon-big-gift-box");
                       }
                       if(vector[5]==44){
                            $("#icat6").attr("class","flaticon-food");
                       }
                       if(vector[5]==45){
                            $("#icat6").attr("class","flaticon-earrings");
                       }
                       
                       
                       
                       if(vector[5]==46){
                            $("#icat6").attr("class","flaticon-watch");
                       }
                       if(vector[5]==48){
                            $("#icat6").attr("class","flaticon-woman");
                      }
                      if(vector[5]==49){
                            $("#icat6").attr("class","flaticon-locked");
                       }
                       if(vector[5]==50){
                            $("#icat6").attr("class","flaticon-smartphone");
                       }
                       if(vector[5]==51){
                            $("#icat6").attr("class","flaticon-dog-food");
                       }
                       if(vector[5]==52){
                            $("#icat6").attr("class","flaticon-rosary");
                       }
                       
                       if(vector[5]==53){
                            $("#icat6").attr("class","flaticon-condom");
                       }
                       if(vector[5]==54){
                            $("#icat6").attr("class","flaticon-playing-cards-with-hearts");
                      }
                      if(vector[5]==55){
                            $("#icat6").attr("class","flaticon-mail");
                       }
                       if(vector[5]==56){
                            $("#icat6").attr("class","flaticon-fashion");
                       }
                       if(vector[5]==57){
                            $("#icat6").attr("class","flaticon-play-movie");
                       }
                       if(vector[5]==58){
                            $("#icat6").attr("class","flaticon-music");
                       }
                       
                       if(vector[5]==59){
                            $("#icat6").attr("class","flaticon-book");
                       }
                       if(vector[5]==60){
                            $("#icat6").attr("class","flaticon-shapes");
                      }
                      if(vector[5]==62){
                            $("#icat6").attr("class","flaticon-body");
                       }
                      
                       
                       
                       
                       
                       ////////////////////////////7
                       
                       
                        if(vector[6]==1){
                            $("#icat7").attr("class","flaticon-kitchen");
                       }
                       if(vector[6]==2){
                            $("#icat7").attr("class","flaticon-beer");
                       }
                       if(vector[6]==3){
                            $("#icat7").attr("class","flaticon-trainers");
                       }
                       if(vector[6]==6){
                            $("#icat7").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                       if(vector[6]==8){
                            $("#icat7").attr("class","flaticon-pipes");
                       }
                       if(vector[6]==9){
                            $("#icat7").attr("class","flaticon-multicooker");
                       }
                       if(vector[6]==11){
                            $("#icat7").attr("class","flaticon-people");
                       }
                      if(vector[6]==13){
                            $("#icat7").attr("class","flaticon-brickwall");
                       }
                       if(vector[6]==12){
                            $("#icat7").attr("class","flaticon-refrigerator");
                       }
                       if(vector[6]==14){
                            $("#icat7").attr("class","flaticon-gasoline");
                       }
                       
                       
                        

                        if(vector[6]==16){
                            $("#icat7").attr("class","flaticon-pills");
                       }
                       if(vector[6]==19){
                            $("#icat7").attr("class","flaticon-toolbox");
                       }
                       if(vector[6]==20){
                            $("#icat7").attr("class","flaticon-hanging-roof-lamp");
                       }
                       if(vector[6]==21){
                            $("#icat7").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                      
                       if(vector[6]==23){
                            $("#icat7").attr("class","flaticon-laptop");
                       }
                 
                       
                       if(vector[6]==24){
                            $("#icat7").attr("class","flaticon-stopwatch");
                       }
                       if(vector[6]==25){
                            $("#icat7").attr("class","flaticon-ducky");
                       }
                       if(vector[6]==26){
                            $("#icat7").attr("class","flaticon-spray");
                       }
                      
                       if(vector[6]==27){
                            $("#icat7").attr("class","flaticon-luggage");
                       }
                       if(vector[6]==28){
                            $("#icat7").attr("class","flaticon-air-conditioner");
                       }
                       if(vector[6]==29){
                            $("#icat7").attr("class","flaticon-new-sewing-machine");
                      }
                      if(vector[6]==30){
                            $("#icat7").attr("class","flaticon-refrigerator");
                       }
                       if(vector[6]==31){
                            $("#icat7").attr("class","flaticon-folder");
                       }
                       if(vector[6]==32){
                            $("#icat7").attr("class","flaticon-bicycle");
                       }
                       if(vector[6]==33){
                            $("#icat7").attr("class","flaticon-gold-ingots");
                       }
                       
                       
                        if(vector[6]==34){
                            $("#icat7").attr("class","flaticon-kitchen-1");
                       }
                       if(vector[6]==35){
                            $("#icat7").attr("class","flaticon-big-bottle-of-water");
                      }
                      if(vector[6]==36){
                            $("#icat7").attr("class","flaticon-live-preserver");
                       }
                       if(vector[6]==37){
                            $("#icat7").attr("class","flaticon-lipstick");
                       }if(vector[6]==38){
                            $("#icat7").attr("class","flaticon-window");
                       }
                       if(vector[6]==39){
                            $("#icat7").attr("class","flaticon-lawn-mower");
                       }
                       
                      
                      
                      if(vector[6]==40){
                            $("#icat7").attr("class","flaticon-recycling");
                       }
                       if(vector[6]==41){
                            $("#icat7").attr("class","flaticon-cleaning");
                      }
                      if(vector[6]==42){
                            $("#icat7").attr("class","flaticon-confetti");
                       }
                       if(vector[6]==43){
                            $("#icat7").attr("class","flaticon-big-gift-box");
                       }
                       if(vector[6]==44){
                            $("#icat7").attr("class","flaticon-food");
                       }
                       if(vector[6]==45){
                            $("#icat7").attr("class","flaticon-earrings");
                       }
                       
                       
                       
                       if(vector[6]==46){
                            $("#icat7").attr("class","flaticon-watch");
                       }
                       if(vector[6]==48){
                            $("#icat7").attr("class","flaticon-woman");
                      }
                      if(vector[6]==49){
                            $("#icat7").attr("class","flaticon-locked");
                       }
                       if(vector[6]==50){
                            $("#icat7").attr("class","flaticon-smartphone");
                       }
                       if(vector[6]==51){
                            $("#icat7").attr("class","flaticon-dog-food");
                       }
                       if(vector[6]==52){
                            $("#icat7").attr("class","flaticon-rosary");
                       }
                       
                       if(vector[6]==53){
                            $("#icat7").attr("class","flaticon-condom");
                       }
                       if(vector[6]==54){
                            $("#icat7").attr("class","flaticon-playing-cards-with-hearts");
                      }
                      if(vector[6]==55){
                            $("#icat7").attr("class","flaticon-mail");
                       }
                       if(vector[6]==56){
                            $("#icat7").attr("class","flaticon-fashion");
                       }
                       if(vector[6]==57){
                            $("#icat7").attr("class","flaticon-play-movie");
                       }
                       if(vector[6]==58){
                            $("#icat7").attr("class","flaticon-music");
                       }
                       
                       if(vector[6]==59){
                            $("#icat7").attr("class","flaticon-book");
                       }
                       if(vector[6]==60){
                            $("#icat7").attr("class","flaticon-shapes");
                      }
                      if(vector[6]==62){
                            $("#icat7").attr("class","flaticon-body");
                       }
                      
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       ///////////////////////////8
                       
                        if(vector[7]==1){
                            $("#icat8").attr("class","flaticon-kitchen");
                       }
                       if(vector[7]==2){
                            $("#icat8").attr("class","flaticon-beer");
                       }
                       if(vector[7]==3){
                            $("#icat8").attr("class","flaticon-trainers");
                       }
                       if(vector[7]==6){
                            $("#icat8").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                       if(vector[7]==8){
                            $("#icat8").attr("class","flaticon-pipes");
                       }
                       if(vector[7]==9){
                            $("#icat8").attr("class","flaticon-multicooker");
                       }
                       if(vector[7]==11){
                            $("#icat8").attr("class","flaticon-people");
                       }
                      if(vector[7]==13){
                            $("#icat8").attr("class","flaticon-brickwall");
                       }
                       if(vector[7]==12){
                            $("#icat8").attr("class","flaticon-refrigerator");
                       }
                       if(vector[7]==14){
                            $("#icat8").attr("class","flaticon-gasoline");
                       }
                       
                       
                        

                        if(vector[7]==16){
                            $("#icat8").attr("class","flaticon-pills");
                       }
                       if(vector[7]==19){
                            $("#icat8").attr("class","flaticon-toolbox");
                       }
                       if(vector[7]==20){
                            $("#icat8").attr("class","flaticon-hanging-roof-lamp");
                       }
                       if(vector[7]==21){
                            $("#icat8").attr("class","flaticon-baby-bag-with-flower-design");
                       }
                      
                       if(vector[7]==23){
                            $("#icat8").attr("class","flaticon-laptop");
                       }
                 
                       
                       if(vector[7]==24){
                            $("#icat8").attr("class","flaticon-stopwatch");
                       }
                       if(vector[7]==25){
                            $("#icat8").attr("class","flaticon-ducky");
                       }
                       if(vector[7]==26){
                            $("#icat8").attr("class","flaticon-spray");
                       }
                      
                       if(vector[7]==27){
                            $("#icat8").attr("class","flaticon-luggage");
                       }
                       if(vector[7]==28){
                            $("#icat8").attr("class","flaticon-air-conditioner");
                       }
                       if(vector[7]==29){
                            $("#icat8").attr("class","flaticon-new-sewing-machine");
                      }
                      if(vector[7]==30){
                            $("#icat8").attr("class","flaticon-refrigerator");
                       }
                       if(vector[7]==31){
                            $("#icat8").attr("class","flaticon-folder");
                       }
                       if(vector[7]==32){
                            $("#icat8").attr("class","flaticon-bicycle");
                       }
                       if(vector[7]==33){
                            $("#icat8").attr("class","flaticon-gold-ingots");
                       }
                       
                       
                        if(vector[7]==34){
                            $("#icat8").attr("class","flaticon-kitchen-1");
                       }
                       if(vector[7]==35){
                            $("#icat8").attr("class","flaticon-big-bottle-of-water");
                      }
                      if(vector[7]==36){
                            $("#icat8").attr("class","flaticon-live-preserver");
                       }
                       if(vector[7]==37){
                            $("#icat8").attr("class","flaticon-lipstick");
                       }if(vector[7]==38){
                            $("#icat8").attr("class","flaticon-window");
                       }
                       if(vector[7]==39){
                            $("#icat8").attr("class","flaticon-lawn-mower");
                       }
                       
                      
                      
                      if(vector[7]==40){
                            $("#icat8").attr("class","flaticon-recycling");
                       }
                       if(vector[7]==41){
                            $("#icat8").attr("class","flaticon-cleaning");
                      }
                      if(vector[7]==42){
                            $("#icat8").attr("class","flaticon-confetti");
                       }
                       if(vector[7]==43){
                            $("#icat8").attr("class","flaticon-big-gift-box");
                       }
                       if(vector[7]==44){
                            $("#icat8").attr("class","flaticon-food");
                       }
                       if(vector[7]==45){
                            $("#icat8").attr("class","flaticon-earrings");
                       }
                       
                       
                       
                       if(vector[7]==46){
                            $("#icat8").attr("class","flaticon-watch");
                       }
                       if(vector[7]==48){
                            $("#icat8").attr("class","flaticon-woman");
                      }
                      if(vector[7]==49){
                            $("#icat8").attr("class","flaticon-locked");
                       }
                       if(vector[7]==50){
                            $("#icat8").attr("class","flaticon-smartphone");
                       }
                       if(vector[7]==51){
                            $("#icat8").attr("class","flaticon-dog-food");
                       }
                       if(vector[7]==52){
                            $("#icat8").attr("class","flaticon-rosary");
                       }
                       
                       if(vector[7]==53){
                            $("#icat8").attr("class","flaticon-condom");
                       }
                       if(vector[7]==54){
                            $("#icat8").attr("class","flaticon-playing-cards-with-hearts");
                      }
                      if(vector[7]==55){
                            $("#icat8").attr("class","flaticon-mail");
                       }
                       if(vector[7]==56){
                            $("#icat8").attr("class","flaticon-fashion");
                       }
                       if(vector[7]==57){
                            $("#icat8").attr("class","flaticon-play-movie");
                       }
                       if(vector[7]==58){
                            $("#icat8").attr("class","flaticon-music");
                       }
                       
                       if(vector[7]==59){
                            $("#icat8").attr("class","flaticon-book");
                       }
                       if(vector[7]==60){
                            $("#icat8").attr("class","flaticon-shapes");
                      }
                      if(vector[7]==62){
                            $("#icat8").attr("class","flaticon-body");
                       }
                      
                       
                       
                       
                      
                       $("#cat1").html(vecategorias[(vector[0]-1)]);
                       $("#cat2").html(vecategorias[(vector[1]-1)]);
                       $("#cat3").html(vecategorias[(vector[2]-1)]);
                       $("#cat4").html(vecategorias[(vector[3]-1)]);
                       $("#cat5").html(vecategorias[(vector[4]-1)]);
                       $("#cat6").html(vecategorias[(vector[5]-1)]);
                       $("#cat7").html(vecategorias[(vector[6]-1)]);
                       $("#cat8").html(vecategorias[(vector[7]-1)]);
                      
                       
                       
                       
                     setTimeout($("#div-categorias").html(respuesta.sesion),50);                                                           
                   }, 'json');
                   
                  
                 }
                 
                 function enviar(num){
                       $.post('automatico-indexsubcategoria.php', {
                           
                     subcategoria : num
                   }, function(respuesta) {           
                     
                   }, 'json');
                     
                      
                 }
                 
                 document.getElementById("ckcat1").onclick = function() {
                    document.getElementById("aut1").style.display="block";     
                    document.getElementById("aut2").style.display="none";
                     document.getElementById("aut3").style.display="none"; 
                      document.getElementById("aut4").style.display="none"; 
                       document.getElementById("aut5").style.display="none"; 
                        document.getElementById("aut6").style.display="none"; 
                         document.getElementById("aut7").style.display="none";
                          document.getElementById("aut8").style.display="none";
                    
                 }
                 
                 document.getElementById("ckcat2").onclick = function() {
                    document.getElementById("aut1").style.display="none";     
                    document.getElementById("aut2").style.display="block";
                     document.getElementById("aut3").style.display="none"; 
                      document.getElementById("aut4").style.display="none"; 
                       document.getElementById("aut5").style.display="none"; 
                        document.getElementById("aut6").style.display="none"; 
                         document.getElementById("aut7").style.display="none";
                          document.getElementById("aut8").style.display="none";
                    
                 }
                 
                 document.getElementById("ckcat3").onclick = function() {
                    document.getElementById("aut1").style.display="none";     
                    document.getElementById("aut2").style.display="none";
                     document.getElementById("aut3").style.display="block"; 
                      document.getElementById("aut4").style.display="none"; 
                       document.getElementById("aut5").style.display="none"; 
                        document.getElementById("aut6").style.display="none"; 
                         document.getElementById("aut7").style.display="none";
                          document.getElementById("aut8").style.display="none";
                    
                 }
                 
                 document.getElementById("ckcat4").onclick = function() {
                    document.getElementById("aut1").style.display="none";     
                    document.getElementById("aut2").style.display="none";
                     document.getElementById("aut3").style.display="none"; 
                      document.getElementById("aut4").style.display="block"; 
                       document.getElementById("aut5").style.display="none"; 
                        document.getElementById("aut6").style.display="none"; 
                         document.getElementById("aut7").style.display="none";
                          document.getElementById("aut8").style.display="none";
                    
                 }
                 
                 document.getElementById("ckcat5").onclick = function() {
                    document.getElementById("aut1").style.display="none";     
                    document.getElementById("aut2").style.display="none";
                     document.getElementById("aut3").style.display="none"; 
                      document.getElementById("aut4").style.display="none"; 
                       document.getElementById("aut5").style.display=""; 
                        document.getElementById("aut6").style.display="none"; 
                         document.getElementById("aut7").style.display="none";
                          document.getElementById("aut8").style.display="none";
                    
                 }
                 
                 document.getElementById("ckcat6").onclick = function() {
                    document.getElementById("aut1").style.display="none";     
                    document.getElementById("aut2").style.display="none";
                     document.getElementById("aut3").style.display="none"; 
                      document.getElementById("aut4").style.display="none"; 
                       document.getElementById("aut5").style.display="none"; 
                        document.getElementById("aut6").style.display="block"; 
                         document.getElementById("aut7").style.display="none";
                          document.getElementById("aut8").style.display="none";
                    
                 }
                 document.getElementById("ckcat7").onclick = function() {
                    document.getElementById("aut1").style.display="none";     
                    document.getElementById("aut2").style.display="none";
                     document.getElementById("aut3").style.display="none"; 
                      document.getElementById("aut4").style.display="none"; 
                       document.getElementById("aut5").style.display="none"; 
                        document.getElementById("aut6").style.display="none"; 
                         document.getElementById("aut7").style.display="block";
                          document.getElementById("aut8").style.display="none";
                    
                 }
                 
                 document.getElementById("ckcat8").onclick = function() {
                    document.getElementById("aut1").style.display="none";     
                    document.getElementById("aut2").style.display="none";
                     document.getElementById("aut3").style.display="none"; 
                      document.getElementById("aut4").style.display="none"; 
                       document.getElementById("aut5").style.display="none"; 
                        document.getElementById("aut6").style.display="none"; 
                         document.getElementById("aut7").style.display="none";
                          document.getElementById("aut8").style.display="block";
                    
                 }

		
                 setInterval(function(){ contenidopalabra();  }, 10);
                 
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
                  
                   
                       
              ultimo();
              function ultimo() { 
                 
                   $.post('automatico-ultimoprovedores', {
                     ultimo : "hola"
                   }, function(respuesta) {
                     $("#ultimo").html(respuesta.sesion); 
                   }, 'json');
                 }
                   
                 
              
                
                
                
                
