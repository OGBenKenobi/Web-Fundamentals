$(document).ready(function () {
    // The image will change back and forth between cat and ninja
    $('img').click(function(){       
        if($(this).attr('src') != $(this).attr('data-alt-src')){
            $(this).data('holder',{img:$(this).attr('src')});    
            $(this).attr('src',$(this).attr("data-alt-src"));
        }
        else{
            $(this).attr('src',$(this).data('holder').img);
        }
    })


});