$(document).ready(function() {
    $('#contact .info').waypoint(function() {
        $('.info').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#contact .mapSection').waypoint(function() {
        $('.mapSection').addClass('movein');
    }, {
        offset: '50%'
    });
})