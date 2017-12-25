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

    $('.fixed-menu .content ul li ul li a').on('click', function(event) {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
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