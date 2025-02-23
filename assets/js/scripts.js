
$(function () {

    "use strict";

    
    $(function () {

        var equalWidth = $(".clients-sa .item").outerWidth();

        $(".clients-sa .item").css({
            "height": equalWidth
        });

    }); 

    var testim = new Swiper(".testimonials-sa .testim-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".testimonials-sa .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

});
