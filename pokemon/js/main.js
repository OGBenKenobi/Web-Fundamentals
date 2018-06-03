$(document).ready(function () {
    
    // for(var i = 1;i<=12;i++){
    // $.get('https://pokeapi.co/api/v2/pokemon/'+i+'/', function(res) {
    //     console.log(res);
        
    //     $(".row").append('<img src="' + res.sprites.front_default +'" alt="'+res.name+'">');
    // }, "json");
    // }

    for(var i = 1;i<=150;i++){
        $('.row').append('<img src="https://pokeapi.co/media/img/'+i+'.png"></img>');
    }

});

