$(document).ready(function(){
 
  var imgItems = $('.slider li').length; //esta variable nos dice la cantidad de imagenes que tiene el slider
  for(i = 1; i <= imgItems; i++){
    $('.pagination').append('<li> <span class="fa fa-circle"></span></li>'); //agregamos un icono ciruclo para cada foto
  }
  

  $('.slider li').hide(); //ocultamos las fotos del slider
  $('.slider li:first').show(); //solo mostramos la primera de la lista

  $('.pagination li:first').css({'color':'white'}) //señalamos el primer circulo haciendo referencia a la primera foto

  $('.pagination li').click(pagination);

  function pagination(){
    var paginationPos = $(this).index()+1;

    $('.slider li').hide();
    $('.slider li:nth-child('+paginationPos+')').fadeIn(1000);
    $('.pagination li').css({'color':'#606060'})
    $(this).css({'color':'white'});
  }

 });

