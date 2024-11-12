document.addEventListener("DOMContentLoaded", function () {
    const swiperr = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.new-items__slider-arrow--right',
            prevEl: '.new-items__slider-arrow--left',
        },
    });
});
