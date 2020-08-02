$(document).ready(function() {

    $('.site-burger').click(function(event) {
        $('.site-burger').toggleClass('site-burger--active');
        $('.header__submenu').toggleClass('header__submenu--active');
        $('.site-burger__center').toggleClass('site-burger__center--active');
        $('.mobile-menu').toggleClass('mobile-menu--active');
    });

    $('.interface__slider').slick({
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,

        responsive: [{
            breakpoint: 1100,
            settings: {
                centerMode: false,
                slidesToShow: 1
            }
        }]


    });

    $('.feedback__slider').slick({

        arrows: false,

        responsive: [{
                breakpoint: 2200,
                settings: {
                    arrows: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    arrows: false
                }
            }
        ]

    });

});