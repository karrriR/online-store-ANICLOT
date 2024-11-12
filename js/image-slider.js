document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        
        navigation: {
            nextEl: '.slider__arrow--right',
            prevEl: '.slider__arrow--left',
        },
        
    });
});
