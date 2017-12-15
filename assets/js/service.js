$(document).ready(function() {

    $('#service .advantage .img').waypoint(function() {
        $('.advantage .img').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#service .advantage').waypoint(function() {
        $('.advantage .text').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#service .innovation .text').waypoint(function() {
        $('.innovation .text').addClass('movein');
    }, {
        offset: '70%'
    });

    $('#service .items .item').waypoint(function() {
        $('.items .item').addClass('movein');
    }, {
        offset: '70%'
    });

    $('#service .integration').waypoint(function() {
        $('.integration').addClass('movein');
    }, {
        offset: '60%'
    });

    $('#service .future .target').waypoint(function() {
        $('.future .target').addClass('movein');
    }, {
        offset: '50%'
    });
})