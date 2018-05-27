$(document).ready(function(){
    var a;
    $("img").hover(function(){
        a = $(this).attr('src');
        $(this).attr('src', $(this).attr('data-alt-src'))
        return a;
    }, function () {
        $(this).attr('src', a)
    });
       
}); 
