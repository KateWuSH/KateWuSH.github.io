$(document).ready(function() {
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

    $('#service .integration .text').waypoint(function() {
        $('.integration .text').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#service .future .target').waypoint(function() {
        $('.future .target').addClass('movein');
    }, {
        offset: '50%'
    });
})