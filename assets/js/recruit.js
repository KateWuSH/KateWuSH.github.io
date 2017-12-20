$(document).ready(function() {

    $('#recruit .info').waypoint(function() {
        $('.info').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#recruit .info .benefit').waypoint(function() {
        $('.info .benefit').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#recruit .titbits').waypoint(function() {
        $('.titbits .title').addClass('movein');
    }, {
        offset: '50%'
    });

    $('#recruit .titbits').waypoint(function() {
        $('.titbits .block01').addClass('movein');
    }, {
        offset: '20%'
    });

    $('#recruit .titbits').waypoint(function() {
        $('.titbits .block02').addClass('movein');
    }, {
        offset: '0%'
    });

    $('#recruit .titbits').waypoint(function() {
        $('.titbits .block03').addClass('movein');
    }, {
        offset: '0%'
    });

    $('#recruit .vacancyList').waypoint(function() {
        $('.vacancyList .content').addClass('movein');
    }, {
        offset: '50%'
    });

})