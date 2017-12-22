$(document).ready(function() {
    // menu
    $('header .hamburger').click(function() {
        $('body').toggleClass('menuOn');
    });

    $('.fixed-hamburger').click(function() {
        $('body').toggleClass('menuOn');
    });

    $('.fixed-menu .close').click(function() {
        $('body').removeClass('menuOn');
    });

    // menu scrollbar
    $("nav .fixed-menu").mCustomScrollbar({
        axis: "y",
    });

    // waypoints
    $('.topBanner').waypoint(function() {
        $('.topBanner').addClass('movein');
    }, {
        offset: '80%'
    });

    $('.footer').waypoint(function() {
        $('.footer').addClass('movein');
    }, {
        offset: '80%'
    });


    window.onscroll = function() {
        var windowHeight = this.scrollY;
        if (windowHeight > 400) {
            var btn = document.getElementsByClassName('fixed-hamburger')[0];
            btn.classList.add('show');
        } else {
            var btn = document.getElementsByClassName('fixed-hamburger')[0];
            btn.classList.remove('show');
        }
    }
})