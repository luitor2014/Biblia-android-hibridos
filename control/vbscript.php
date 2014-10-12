<?php 
if(isset($_REQUEST['boton'])){
	$boton = $_REQUEST['boton'];
	switch ($boton) {
		case 'expandir_screen':
			# code...
			exec("expandir.vbs");
			break;
		
		default:
			# code...
			break;
	}
}
?>