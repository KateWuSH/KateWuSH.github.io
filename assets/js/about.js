$(document).ready(function() {
    $('#about .topBanner').waypoint(function() {
        $('.topBanner').addClass('movein');
    }, {
        offset: '80%'
    });

    $('#about .intro').waypoint(function() {
        $('.intro').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#about .mission').waypoint(function() {
        $('.mission').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#about .value .text').waypoint(function() {
        $('.value .text').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#about .cis .text').waypoint(function() {
        $('.cis .text').addClass('movein');
    }, {
        offset: '50%'
    });
})