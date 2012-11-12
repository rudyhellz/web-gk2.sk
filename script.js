$(function(){

    $('a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 28
        }, 1000);
        event.preventDefault();
    });

});
