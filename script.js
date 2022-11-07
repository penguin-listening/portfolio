$(function() {

 $(window).scroll(function(){
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();
    
    $('.aboutimg').each(function() {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
            $(this).addClass("img-fadein");
            }
        });
    });

$(window).scroll(function(){
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.backgroundimg').each(function() {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
            $(this).addClass("img-fadein");
        }
    });
});

/トグルメニュー/ 
$(function(){
    $('#menu').click(function(){
       $('ul').slideToggle(200);
       $('nav').css('display',"block");
    });
});

/alertbox/ 
$(function(){
    $('#bg').hide();

    $('.btn').click(function(){
        $('#bg').fadeIn(300);
    });

    $('#ok').click(function(){
        $('#bg').fadeOut(300);
        return false;
    });
});


});
