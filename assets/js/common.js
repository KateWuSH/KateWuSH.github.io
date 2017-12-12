$(document).ready(function() {
    // menu
    $('header .hamburger').click(function() {
        $('body').toggleClass('menuOn');
        $(this).toggleClass('close');
        $('.fixed-hamburger').toggleClass('close');
    });

    $('.fixed-hamburger').click(function() {
        $('body').toggleClass('menuOn');
        $(this).toggleClass('close');
        $('header .hamburger').toggleClass('close');
    });

    $('.fixed-menu .close').click(function() {
        $('body').removeClass('menuOn');
        $('.fixed-hamburger').removeClass('close');
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


    window.onscroll = function() {
        var windowHeight = this.scrollY;
        if (windowHeight > 400) {
            console.log('test');
            var btn = document.getElementsByClassName('fixed-hamburger')[0];
            btn.classList.add('show');
        } else {
            var btn = document.getElementsByClassName('fixed-hamburger')[0];
            btn.classList.remove('show');
        }
    }
})