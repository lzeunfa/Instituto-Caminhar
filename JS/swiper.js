new Swiper('.card-wrapper', {
    loop: false,
    spaceBetween: 30,
    watchOverflow: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768:{
            spaceBetween: 50,
            slidesPerView: 2
        },

        1024:{
            spaceBetween: 40,
            slidesPerView: 3
        }
    }
});