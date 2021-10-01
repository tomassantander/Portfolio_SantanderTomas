$(document).ready(function(){
    //console.log('Funcionando')

    var toggle = $('.menuIcon');
    var elemento = $('.menu');
    var state = true;

    if(state)
    toggle.click(function() {
        elemento.fadeOut(500);
        state = false;
    });

    if(!state)
    toggle.click(function() {
        elemento.fadeIn(2000);
        state =true;
    });


    $( function() {
    var state = true;
    $( "#elemento" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );
    

 });

