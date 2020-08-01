$(document).ready(function() {

    $('.site-burger').click(function(event) {
        $('.site-burger, .header__submenu, .site-burger__center, .mobile-menu').toggleClass('active');
    });

    $('.interface__slider').slick({
        arrows: false,
        slidesToShow: 3,
        // autoplay: true,
        // autoplaySpeed: 2000,
        centerMode: true,
        // adaptiveHeight: true,

        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1
            }
        }]


    });

    $('.feedback__slider').slick();

});