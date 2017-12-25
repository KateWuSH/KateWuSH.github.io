$(document).ready(function() {

    $('#service .advantage').waypoint(function() {
        $('.advantage').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#service .application .integration').waypoint(function() {
        $('.application .integration').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#service .application .item01').waypoint(function() {
        $('.application .item01').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#service .application .item02').waypoint(function() {
        $('.application .item02').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#service .application .item03').waypoint(function() {
        $('.application .item03').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#service .innovation .wrapper').waypoint(function() {
        $('.innovation .wrapper').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#service .future').waypoint(function() {
        $('.future').addClass('movein');
    }, {
        offset: '50%'
    });
})