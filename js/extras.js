tamanio = 0;
function font_size(accion){
	// alert($("#libro").height());
	if( $("#libro").height() != 0 ){

		switch(accion){
			case '+':
				tamanio++;
				if( tamanio <= 5 ){			
					letra_standar+= 3;
					letra_select+= 3;
					libro = $("#search_book").val();
					buscar_cap(libro);
				}else{
					tamanio--;
				}
			break;

			case '-':
				tamanio--;
				if( tamanio >= -1 ){
					letra_standar-= 3;
					letra_select-= 3;
					libro = $("#search_book").val();
					buscar_cap(libro);				
				}else{
					tamanio++;
				}
			break;
		}
	}
}
redimenzionar_fondo();

$("body").keyup(function(e){
	if( e.keyCode == 122 ){
		redimenzionar_fondo();
	}
});
ac_not = 0;
function presentacion(accion){
	if( accion == "no_result" ){
		ac_not = 1;
		// $("#img_presentacion").css({"display":"block"});
	}else{
		$("#nota_result").html("");
	}
	libro_p_y = $("#libro").height();

	if( libro_p_y == 0 ){
		$("#nota_result").html( $("#search").val() );
		$("#img_presentacion").css({"display":"block"});
	}else{
		$("#img_presentacion").css({"display":"none"});
	}
	if( accion == "limpiar" ){
		$("#img_presentacion").css({"display":"none"});	
	}
	if( ac_not == 1 ){
		$("#nota_result").html("No se encontraron resultados");
		ac_not = 0;
	}
	// scrollTop_libro_y = libro_p.top;
	// alert(libro_p_y);
}

function redimenzionar_fondo(){
	height = $(window).height();
	$("body").css({"background-size": "100% "+height+"px"});
	 
}

rand_fondo = 0;
function fondo1(){
	rand_fondo++;
	switch (rand_fondo){
		case 1:
			$("body").css({"background-image":"url()"});
			
		break;
		case 2:
			$("body").css({"background-image":" url('img/fondo.jpg')"});
		break;
	
		case 3:
			$("body").css({"background-image":" url('img/fondo1.jpg')"});
		break;

		case 4:
			$("body").css({"background-image":" url('img/fondo2.jpg')"});
		break;

		default:
			rand_fondo = 1;
			$("body").css({"background-image":"url()"});
		break;
	}
	redimenzionar_fondo();
	// alert("entro");
}

setInterval(function(){
	redimenzionar_fondo();
},1000);

$("#name_books .lib_select_cl").click(function(){

	data1 = $(this).text();
	data1 = data1.replace(new RegExp("\n","g"), ",");
	data1 = data1.replace(" ", "");
	data1 = data1.replace(" ", "");
	data1 = data1.replace(new RegExp("	","g"), "");
	data1 = data1.split(",");
	$("#search").val(data1[1]);
	n_data1 = data1.length;
	lib_src = data1[n_data1-2];
	lib_src = lib_src.replace(new RegExp(" ","g"), "");
	$("#search_book").val(lib_src);
	// alert(data1[n_data1-2]);		
	buscar(lib_src);
	$("#capitulo").focus();
	$("#capitulo").val("");
	$("#versiculo").val("");
	$("#versiculo_fin").val("");
	// replace(new RegExp("\n","g"), "<br>");
});
function expandir_screen(){

	//Empaquetamos datos
	datos = 'boton=expandir_screen';

	$.ajax({
		   type:'POST',
		   url:'control/vbscript.php',
		   data:datos,
		   success:function(a){
			   	// alert('guardado');
		   }
	});
}
// solo numeros
function justNumbers(e)
        {
        var keynum = window.event ? window.event.keyCode : e.which;
        if ((keynum == 8) || (keynum == 46))
        return true;
         
        return /\d/.test(String.fromCharCode(keynum));
        }