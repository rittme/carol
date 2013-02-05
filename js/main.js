$(function () {

    $('.nav-about').click(function (e){
        $('body').animate({scrollLeft: 1600}, 3000, "easeOutCubic");
        //$('#container').animate({'left': -1600}, 3000, "easeOutBack");
    });

    $('.photo-about').hover(function (){
        $('.about-me-img').addClass('leftMe');
    }, function(){
        $('.about-me-img').removeClass('leftMe');
    });
});
