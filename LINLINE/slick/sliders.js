$(document).on('ready', function () {

    $("#main-slider").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
    });

    $(".gallery-slider").slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $(".service-slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6
    });

    $(".sales-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $(".feedback-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $(".team-slider").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1.5,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1 
    });

});