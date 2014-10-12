limpiar_search();
book_visible = new Array();  
// cont = 0;

function buscar_palabra1(){

    $.ajax({
           type: 'POST',
           url: 'control/buscador.php',
           // data:datos,
           success:function(a){
            // alert(a);
           }
    });
}

//contenedor de libros de sugerencia
function for_defect(){
    // for( im=1;im<=66;im++ ){
        // $("#libro_"+im).ht
    // }
    $("#name_books tr").css({"background-color":"#fff"});
    tecla_move = 0;

}

tecla_move = 0;
  $("#search").keyup(function(e){
    // alert(e.keyCode);
    switch(e.which){
        case 13:
            if( tecla_move == 0 ){
               tecla_move = 1; 
            }
            libro_input = $("#libro_"+book_visible[tecla_move]+" ._lib").text();
            // alert(libro_input);
            $("#search").val(libro_input);
            libro = $("#libro_"+book_visible[tecla_move]+" ._lib_src").text();
            buscar(libro);
            
            // limpiarmos busqueda
            limpiar_search();
            $("#capitulo").val("");
            $("#versiculo").val("");
            $("#versiculo_fin").val("");
            $("#capitulo").focus();
            

        break;

        case 40:
            tecla_move++;
            //para deseleccionar el anterior
            $("#libro_"+book_visible[(tecla_move-1)] ).css({"background-color":"#fff"});
            //movemos color
            $("#libro_"+book_visible[tecla_move]).css({"background-color":"#ECEDE9"});
            //cuando termina el bucle
            if( aux_cont < tecla_move ){
                $("#libro_"+book_visible[tecla_move] ).css({"background-color":"#fff"});
                tecla_move = 1;
                $("#libro_"+book_visible[tecla_move] ).css({"background-color":"#ECEDE9"});
            }
            libro_input = $("#libro_"+book_visible[tecla_move]+" ._lib").text();
            $("#search").val(libro_input);
            libro = $("#libro_"+book_visible[tecla_move]+" ._lib_src").text();
            $("#search_book").val(libro);
            // alert(tecla_move);

        break;

        case 38:
             tecla_move--;
            //para deseleccionar el anterior
            $("#libro_"+book_visible[(tecla_move+1)] ).css({"background-color":"#fff"});
            //movemos color
            $("#libro_"+book_visible[tecla_move]).css({"background-color":"#ECEDE9"});
            //cuando termina el bucle
            if( 1 > tecla_move ){
                $("#libro_"+book_visible[1] ).css({"background-color":"#fff"});
                tecla_move = aux_cont;
                $("#libro_"+book_visible[tecla_move] ).css({"background-color":"#ECEDE9"});
            }
            libro_input = $("#libro_"+book_visible[tecla_move]+" ._lib").text();
            $("#search").val(libro_input);
            libro = $("#libro_"+book_visible[tecla_move]+" ._lib_src").text();
            $("#search_book").val(libro);
        break;

        default: 
                var tableReg = document.getElementById('name_books');
                var searchText = document.getElementById('search').value.toLowerCase();
                if(searchText == ""){
                    searchText = "|||";
                    
                }
                ccc = 0;
                for (var i = 1; i < tableReg.rows.length; i++) {
                    var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                    var found = false;
                    for (var j = 0; j < cellsOfRow.length && !found; j++) {
                        // J : es la columna que se desea buscar
                        var compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                        if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
                            if( ccc >= 6){
                            break;
                            }
                            found = true;
                            ccc++;
                        }
                    }
                    if (found) {
                        tableReg.rows[i].style.display = '';
                        
                    } else {
                        tableReg.rows[i].style.display = 'none';
                    }
                }
                if( ccc == 0 ){
                    $("#search").select();
                }
                //////////salsa de mi algoritmo secreto////
                ///////////////// NO COPY ///////////
                ///////////////// BY TORRES ///////////
                //////////////***********////////////
                cont = 0;   
                for( i=1;i<=66;i++ ){
                    data_visible = $("#libro_"+i).css("display");
                    if( data_visible != "none" ){
                        cont++;
                        //aqui capturo de forma ordena
                        // y simplificada los id mostrados
                        // y de esa manera optimizar
                        book_visible[cont] = i;
                        
                    }
                }
            //para comensar
            // aux_book_visible = book_visible[1];
            aux_cont = cont;
            cont = 0;
                //////////////***********////////////
            for_defect();
        break;
    }

  });
    $("body").click(function(){
        limpiar_search();
    });
    $("#search").click(function(){
        this.select();
        // book_visible = "";
        // book_visible = new Array(); 
    });
    $("#capitulo").click(function(){
        // $("#capitulo").click();
        this.select();
        libro = $("#libro_"+book_visible[tecla_move]+" ._lib_src").text();
        // buscar(libro);
       select_click_afuera(); 
        limpiar_search();

    });
    // $("#search").keydown(function(e){
    //     // alert(e.keyCode);
    //     if( e.keyCode == 13 ){
    //         $("#capitulo").focus();
    //     }
    // });
function select_click_afuera(){
    if( ccc != 0 ){
            tecla_move = 1;
        // alert(ccc);
            libro_input = $("#libro_"+book_visible[tecla_move]+" ._lib").text();
            // alert(libro_input);
            $("#search").val(libro_input);
            libro = $("#libro_"+book_visible[tecla_move]+" ._lib_src").text();
            buscar(libro);
            $("#capitulo").focus();
            // limpiarmos busqueda
            $("#capitulo").val("");
            $("#versiculo").val("");
            $("#versiculo_fin").val("");
        }
}
    $("#versiculo").click(function(){
        this.select();
        libro = $("#libro_"+book_visible[tecla_move]+" ._lib_src").text();
        // buscar(libro);
        select_click_afuera();
        limpiar_search();

    });
    $("#versiculo_fin").click(function(){
        this.select();
        libro = $("#libro_"+book_visible[tecla_move]+" ._lib_src").text();
        // buscar(libro);
        select_click_afuera();
        limpiar_search();
    });


    $("#capitulo").keydown(function(e){
        // alert(e.keyCode);
        if( e.keyCode == 13 || e.keyCode == 61 ){
            $("#versiculo").val("");
            $("#versiculo").focus();
        }
    });
     $("#versiculo").keydown(function(e){
        // alert(e.keyCode);
        // $("#versiculo").focus();
        if( e.keyCode == 13 || e.keyCode == 61 ){
            // alert("entro");
            // $("#versiculo").focus();
            $("#versiculo_fin").val("");
            buscar_cap(libro);
            // $("#versiculo_fin").focus();
        }
    });
      $("#versiculo_fin").keydown(function(e){
        // alert(e.keyCode);
        // $("#versiculo").focus();
        if( e.keyCode == 13 || e.keyCode == 61 ){
            // alert("entro");
            // $("#versiculo").focus();
            buscar_cap(libro);
        }
    });

      function limpiar_search(){
        var tableReg = document.getElementById('name_books');
                // var searchText = document.getElementById('search').value.toLowerCase();
                searchText = "|||";
                for (var i = 1; i < tableReg.rows.length; i++) {
                    var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                    var found = false;
                    for (var j = 0; j < cellsOfRow.length && !found; j++) {
                        // J : es la columna que se desea buscar
                        var compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                        if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
                            found = true;
                        }
                    }
                    if (found) {
                        tableReg.rows[i].style.display = '';
                    } else {
                        tableReg.rows[i].style.display = 'none';
                    }
                }
            //para auto seleccionar al acer click en cap
            ccc = 0;
      }