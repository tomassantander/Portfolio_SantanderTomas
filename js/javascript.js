$(document).ready(function(){


 
  var imgItems = $('.proyectOne .slider li').length; //esta variable nos dice la cantidad de imagenes que tiene el slider
  for(i = 1; i <= imgItems; i++){
    $('.proyectOne .pagination').append('<li> <span class="fa fa-circle"></span></li>'); //agregamos un icono ciruclo para cada foto
  }
  

  $('.proyectOne .slider li').hide(); //ocultamos las fotos del slider
  $('.proyectOne .slider  li:first').show(); //solo mostramos la primera de la lista

  $('.proyectOne .pagination li:first').css({'color':'#c9ada7'}) //señalamos el primer circulo haciendo referencia a la primera foto

  $('.proyectOne .pagination li').click(pagination);

  function pagination(){
    var paginationPos = $(this).index()+1;

    $('.proyectOne .slider li').hide();
    $('.proyectOne .slider li:nth-child('+paginationPos+')').fadeIn(1000);

    $('.proyectOne .pagination li').css({'color':'white'})
    $(this).css({'color':'#c9ada7'});
  }

  var imgItems2 = $('.proyectTwo .slider li').length; //esta variable nos dice la cantidad de imagenes que tiene el slider
  for(i = 1; i <= imgItems2; i++){
    $('.proyectTwo .pagination').append('<li> <span class="fa fa-circle"></span></li>'); //agregamos un icono ciruclo para cada foto
  }
  

  $('.proyectTwo .slider li').hide(); //ocultamos las fotos del slider
  $('.proyectTwo .slider  li:first').show(); //solo mostramos la primera de la lista

  $('.proyectTwo .pagination li:first').css({'color':'#c9ada7'}) //señalamos el primer circulo haciendo referencia a la primera foto

  $('.proyectTwo .pagination li').click(pagination2);

  function pagination2(){
    var paginationPos2 = $(this).index()+1;

    $('.proyectTwo .slider li').hide();
    $('.proyectTwo .slider li:nth-child('+paginationPos2+')').fadeIn(1000);

    $('.proyectTwo .pagination li').css({'color':'white'})
    $(this).css({'color':'#c9ada7'});
  }

 });

