const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',  // Automatically adjusts to show as many as fit
    centeredSlides: true,   // Optional: Keeps the first slide centered
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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