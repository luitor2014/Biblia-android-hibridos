<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
	<title>Biblia</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/bootstrap-theme.min.css">
	<!-- <link rel="stylesheet" href="css/docs.min.css"> -->
	<!-- <link rel="stylesheet" href="less/popovers.less"> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	
<style>
.fixed {position:fixed; top:0; }
	body{
		margin:0px;
		background-image: url("");
		background-repeat: no-repeat;
		/*background-size: 100% 700px;*/
		 background-attachment: fixed;
	}
	.ver_select{
		cursor:pointer;
	}
	#libro{
		text-align: justify;
	}
	#libro b{
		color: #333;
	}
	#libro .ver_select{
		padding: 8px 0px;
	}
	#name_books td{
		display:none;
	}
	#name_books tr{
		background-color: #E6F0E9;
	}

	#name_books ._lib{
		display:block;
	}
	#contenedor{
		position: fixed;
		background-color: rgba(0, 46, 52, 0.5);
		width: 100%;
		padding: 4px;
	}
	#name_books{
		position: absolute;
	}
	#name_books td{
		padding: 8px 10px;
		font-size: 16px;
	}
	.op_vers{
		color:white;
		font-size:20px;
	}
	.ico_b:hover{
		-webkit-filter: brightness(1.2);
		
	}
	.ico_b{
		border-radius: 5px;
		filter: grayscale(100%);
		-webkit-filter: grayscale(100%);
	}
	.ico_contac{
		opacity: 0.7;
	}
	/*para brillo*/
		/*-webkit-filter: brightness(1.2);*/
	/*escala de grises*/
	/*-webkit-filter: grayscale(100%);*/

</style>

<div id="sombrear">
	
</div>
<script src="js/buscador_book.js"></script>

<script type="text/javascript">
	$(document).ready(function(){
	    $("#contenedor .ico_contac").popover({
	        placement : 'bottom',
	        title: 'Acerca del programa <b>LTBible</b>',
	        html: true,
	        content: "<b>Versión:</b>  1.1V<b><br>Desarrollado por:</b> <br>Luis Manuel Torres Carpio. <br><b>Cell:</b> 972968110<br><b>Correo:</b> luisxxd64@gmail.com<br> <b>Contenido biblico:</b><br> Reina Valera Gómez 2004<br><i style='color:#AB3A14;'>Prohibido su distribucion sin autorización </i>"
	    });
	});
	</script>
</head>
<body>
<!-- <button onclick="buscar('Gen');">Genesis</button> -->
<!-- <button onclick="buscar('Exo');">Exodo</button> -->
<div id="contenedor" style="text-align:center;">

	<img src="img/biblia_logo.png" height="30" width="180" style="">
	<br><input type="text" id="search_book" placeholder="libro_bre" style="display:none;">
			<span>
				<input type="text" id="search" placeholder="libro" style="width:150px;font-size:20px;">
				<span style="position:absolute;z-index:2;margin-top:35px;margin-left:-150px"><?php require_once("name_books.php"); ?></span>

			</span>
			<input type="number" id="capitulo" placeholder="Cap" maxlength="3" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" style="width:30px;height:32px;">&nbsp;<i class="op_vers">:</i>&nbsp;
			<input type="number" id="versiculo" placeholder="Vers" maxlength="2" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" style="width:30px;height:32px;"> &nbsp;<i class="op_vers">-</i>&nbsp;
			<input type="number" id="versiculo_fin" placeholder="vers" maxlength="2" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" style="width:30px;height:32px;background-color:#F3F5DC;">
			
			<button onclick="buscar_cap();" id="busqueda" style="padding:6px 6px;">Buscar</button>
		<!-- <button onclick="buscar_palabra1();">buscar palabra</button> -->
		<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
		<span id="cargando_gif"></span>
		<img src="img/zize+_ico.jpg" class="ico_b" width="30" id="busqueda" style="cursor:pointer;" onclick="font_size('+');" title="Agrandar el texto">
		<img src="img/zize-_ico.jpg"class="ico_b" width="30" id="busqueda" style="cursor:pointer;" onclick="font_size('-');" title="Reducir el Texto">
		<!-- <img src="img/search_plabra_ico.jpg" class="ico_b" width="30" style="cursor:pointer;" onclick="buscar_palabra1();" title="buscar una palabra especifica"> -->
		<!-- <img src="img/fondo_ico.jpg" class="ico_b" width="30" style="cursor:pointer;" onclick="fondo1();" title="cambiar fondo"> -->
		<img src="img/about_ico.jpg" class="ico_contac" width="30" style="cursor:pointer;"  >
		<!-- data-content="Programa desarrollado por: Luis manuel Torres Carpio. Cell: 972968110. \n -->
		 <!-- contenido biblico: Reina Valera Gómez 2004" -->
		<!-- <img src="img/full_screen_ico.jpg" class="ico_b" width="30" style="cursor:pointer;" onclick="expandir_screen();" title="expandir pantalla"> -->
		<!-- <button onclick="fondo1();">fondo</button> -->
		<!-- <button onclick="font_size('+');">+</button> -->
<!-- <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button> -->
</div>
<!-- <button onclick="pintar();">pintar rojo</button>
 -->
 <input type="text" id="select1" value="hola" style="width:8px;height:8px;">

 <br> <br> <br> <br>
 <br> <br> 
<div class="container">
 	<div id="nota_result" style="font-size:35px;text-shadow:1px 1px 6px #777; color:#757209;"></div>
 	<img src="img/biblia_img/Study_Soft_Edge.png" id="img_presentacion" class="img-responsive" alt="">
	
</div>

 
<div class="container">


 	<div id="libro"></div>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<script src="js/bootstrap.min.js"></script>
<script src="js/docs.min.js"></script>
<script src="js/popover.js"></script>
<script src="js/biblia.js"></script>
<script src="js/buscador_book.js"></script>	
<script src="js/extras.js"></script>

<script>
// SCROLL///////
  $(window).scroll(function(){
      if ($(this).scrollTop() > 0) {
          $('#contenedor').addClass('fixed');
      } else {
          $('#contenedor').removeClass('fixed');
      }
  });
</script>
</body>
</html>