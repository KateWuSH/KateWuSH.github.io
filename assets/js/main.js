$(document).ready(function() {
    /*----- slick -----*/
    // home topBanner
    $('.top-banner-pc-slick').slick({
        autoplay: false,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });
    // home mobile topBanner
    $('.top-banner-mobile-slick').slick({
        autoplay: false,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });
    /*----- waypoints -----*/
    // home
    $('#home .technology').waypoint(function() {
        $('.technology').addClass('movein');
    }, {
        offset: '50%'
    });
    $('#home .global').waypoint(function() {
        $('.global').addClass('movein');
    }, {
        offset: '50%'
    });
    $('#home .application').waypoint(function() {
        $('.application').addClass('movein');
    }, {
        offset: '50%'
    });
    $('#home .service').waypoint(function() {
        $('.service').addClass('movein');
    }, {
        offset: '50%'
    });
    $('#home .future').waypoint(function() {
        $('.future').addClass('movein');
    }, {
        offset: '60%'
    });
    $('#home .recruit').waypoint(function() {
        $('.recruit').addClass('movein');
    }, {
        offset: '60%'
    });
    $('#home .quality').waypoint(function() {
        $('.quality').addClass('movein');
    }, {
        offset: '50%'
    });
    $('#home .footer').waypoint(function() {
        $('.footer').addClass('movein');
    }, {
        offset: '80%'
    });
})