letra_standar = 16;
letra_select = 19;

$("#search").focus();
function buscar(libro){
//Empaquetamos datos
	// datos = 'boton=guardar';
	// libro_aux = libro;
	$("#cargando_gif").html("<img src='img/cargando.gif' height='12' width='75'>");
	$('#busqueda').attr("disabled", true);
	$.ajax({
		   type: 'POST',
		   url: 'libros/'+libro+'.php',
		   // data:datos,
		   success:function(a){
			   	$("#libro").html(a);
			   	$("#busqueda").attr("onclick","buscar_cap('"+libro+"');");
		   		$("#search_book").val(libro);
		   		click_versiculo();
		   		presentacion('inicio');

		   		$("#cargando_gif").html("");
		   		$('#busqueda').attr("disabled", false);
		   		$("body").scrollTop(0);
		   }
	});

}
cont = 0; cap_aux = "";

function buscar_cap(book){
	$("#cargando_gif").html("<img src='img/cargando.gif' height='12' width='75'>");
	setTimeout(function(){

		// para limpiar el texto anterior
		book = $("#search_book").val();
		$("#versiculo_fin").blur();
		cap = parseInt($("#capitulo").val());
		cont++;
		if( cont == 1 ){
			cap_aux = cap;
		}
		if( cont != 1 ){
			if( cap_aux != cap ){
				// alert("debe limpiarse");
				texto_pordefecto(book,cap_aux);

				cap_aux = cap;
				cont = 1;
			}
		}
		ver = $("#versiculo").val();
		if( ver == "" ){
			ver = 0;
			// alert(ver);
			$("#cargando_gif").html("");

		}else{
			ver = parseInt(ver);
		}
		$(".ver_select").css({"background-color":"","color":"#444","font-size": letra_standar+"px","box-shadow":""});
			
		// $("#coordenada1").html("x:"+position.left+"  y:"+position.top);
			// alert(position.top);
			// $(window).scrollTop(position.top);
			//pintamos todo el capitulo
			
			for( i=1;i<=60;i++ ){
				
			$("#"+book+"_"+cap+"_"+i).css({"background-color":"","display":"block","color":"#666","font-size": letra_standar+"px"});
			$("#"+book+"_"+cap+"_"+i+ " b").css({"color":"#006600","font-size": letra_standar+"px","text-decoration":"underline"});
			}
			
			//para ver si hay contenido
			libro_p_y = $("#libro").height();
			// alert(libro_p_y);
			if( libro_p_y == 0 ){
				presentacion('no_result');
			}else{
				presentacion('limpiar');
			}

			//rango en versiculo//////////////
			versiculo_fin = $("#versiculo_fin").val();

			if(ver > parseInt(versiculo_fin) && versiculo_fin != "" && versiculo_fin != 0 ){
				aux = versiculo_fin;
				versiculo_fin = ver;
				ver = aux;
			}
			if( versiculo_fin == "" || versiculo_fin == 0 ){
				// alert(versiculo_fin);
				versiculo_fin = ver;
			}
			versiculo_fin = parseInt(versiculo_fin);
			for( i=ver;i<=versiculo_fin;i++ ){
				

				$("#"+book+"_"+cap+"_"+i).css({"color":"#4059BD","font-size": letra_select+"px"});
				$("#"+book+"_"+cap+"_"+i+ " b").css({"color":"#B00000","font-size": letra_select+"px"});
			}
			//fin - rango en versiculo//////////////

			//resaltamos el versiculo
			// setTimeout(function(){
			corde = $("#"+book+"_"+cap+"_"+ver);
			position = corde.position();
			$("body").animate({"scrollTop": position.top - 115});
			
			// alert("hello");
			// alert("hola");
			limpiar_search();
			pasar_maus();
			$("#cargando_gif").html("");
			// if( $("#"+book+"_"+cap+"_"+ver).html() ){
				// alert("no extiste");
			// }

	},500);
		
}

function texto_pordefecto(book,cap_aux){
	for( i=1;i<=60;i++ ){
		$("#"+book+"_"+cap_aux+"_"+i).css({"display":"none","color":"#444","font-size":"18px"});
	}
}

function click_versiculo(){
	$(".ver_select").click(function(){
		// alert("hola");
			// alert($(this).css("color"));
			// alert( $(this).css("background-color") );
		// if( $(this).css("color") == "rgb(64, 89, 189)" && $(this).css("background-color") == "rgb(255, 255, 128)" ){
		if( $(this).css("color") == "rgb(64, 89, 189)" && $(this).css("background-color") == "rgba(0, 0, 0, 0)" ){
			// $(this).css({"color":"orange","font-size": letra_select+"px"});
			$(this).css({"background-color":"rgba(250, 221, 22, 0.2)","font-size": letra_select+"px","box-shadow":"1px 1px #666"});

			//extraemos el cap
			// alert(cap_txt);
		}else{
			$(this).css({"background-color":"","color":"#4059BD","font-size": letra_select+"px","box-shadow":""});	

			cap_text = $(this).text();
			cap_text = cap_text.split(" ");
			cap_txt = "";
			for( i=0;i<2;i++ ){
				if( i >= 1 ){
					cap_txt+= "_";	
				}
				cap_txt+= cap_text[i];
			}
			// textarea = $("textarea").val();
			cap_txt = cap_txt.replace(":", "_");
			$("#"+cap_txt+ " b").css({"font-size": letra_select+"px"});
			// $(this).css({"color":"red","font-size": letra_select+"px"});	
		}
	});

	$(".ver_select").dblclick(function(){
		$(".ver_select").css({"background-color":"","color":"#666","font-size": letra_standar+"px","box-shadow":""});
		$(this).css({"color":"#4059BD","font-size": letra_select+"px"});
		corde = $(this);
		position = corde.position();
		// "color":"#006600","font-size": letra_standar+"px","text-decoration":"underline"});
		$("body").animate({"scrollTop": position.top - 104});
		$("b").css({"color":"#006600","font-size": letra_standar+"px","text-decoration":"underline"});

		cap_text = $(this).text();
			cap_text = cap_text.split(" ");
			cap_txt = "";
			for( i=0;i<2;i++ ){
				if( i >= 1 ){
					cap_txt+= "_";	
				}
				cap_txt+= cap_text[i];
			}
			// textarea = $("textarea").val();
			cap_txt = cap_txt.replace(":", "_");
			$("#"+cap_txt+ " b").css({"color":"#B00000","font-size": letra_select+"px"});
			$("#select1").select();
	});	
}
  // Handler for .ready() called.
function pasar_maus(){
	// $("#libro b").hover(function(){
		sombrear_act = "<style> #libro div:hover > b{ background-color: #F3F3F3;} </style>";
		$("#sombrear").html(sombrear_act);
	// });
}

$("body").keyup(function(e){
	// alert(e.keyCode);
	if(e.keyCode == 17){
		// $(this).scrollTop(0);	
		$("#search").click();
		// $("#search").val("");	
		// $("#search").focus();	
	}
});