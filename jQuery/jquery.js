$(document).ready(function(){
    $('h2').addClass('text-center');
    $('button').addClass('btn btn-danger');
    $('button.bc_click').click(function(){
        alert("OUCH!!!");
    });
    $('button.bc_hide').click(function(){
        $(this).hide();
    });
    $('h2.bc_show').hide();
    $('button.bc_show').click(function(){
        $('h2.bc_show').show();
    });
    $('button.bc_toggle').click(function(){
        $('p.bc_toggle').toggle();
    });
    $('h2.bc_slideDown').hide();
    $('button.bc_slideDown').click(function(){
        $('h2.bc_slideDown').slideDown();
    });
    $('button.bc_slideUp').click(function(){
        $('h2.bc_slideUp').slideUp();
    });
    $('button.bc_slideToggle').click(function(){
        $('h2.bc_slideToggle').slideToggle();
    });
    $('h2.bc_fadeIn').hide();
    $('button.bc_fadeIn').click(function(){
        $('h2.bc_fadeIn').fadeIn();
    });
    $('button.bc_fadeOut').click(function(){
        $('h2.bc_fadeOut').fadeOut();
    });
    $('button.bc_addClass').click(function(){
        $('h2.bc_addClass').addClass("text-danger");
    });
    $('button.bc_before').click(function(){
        $('h2.bc_before').before("<center><h2>Another Sub-Title</h2></center>");
    }); 
    $('button.bc_after').click(function(){
        $('h2.bc_after').after("<center><h2>Another Sub-Title</h2></center>");
    }); 
    $('button.bc_append').click(function(){
        $('h2.bc_append').append("ed");
    });
    $('button.bc_html').click(function(){
        $('p.bc_html').html("<span>Changed</span>");
    });
    $('button.bc_attr').click(function(){
        $('span.bc_attr').attr("color", "red");
    });
    $('button.bc_val').click(function(){
        console.log($("h2.bc_val").val());
    });
    $('button.bc_text').click(function(){
        $('p.bc_text').text("Changed text.")
    })
    
});