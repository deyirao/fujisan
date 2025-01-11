const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1900: {
            slidesPerView: 5,  // More slides for ultra-wide screens
        },
        3000: {
            slidesPerView: 7,  // More slides for ultra-wide screens
        },
    },
});