sesion();
				function sesion(){
				   
		 $.post('seguridad', {
                     dem : "ok"
                   }, function(respuesta) {
                       if(respuesta.sesion!="exit"){
                             setTimeout($("#perfil").html(respuesta.sesion),100);
                       }
                   }, 'json');
				}
	sesion();
		
	