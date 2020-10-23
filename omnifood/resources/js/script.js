$(document).ready(function(){

    // For sticky navigation 
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
    offset: '60px;'
    });


    // scroll to area on button click
    $('.js--scroll-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });


});