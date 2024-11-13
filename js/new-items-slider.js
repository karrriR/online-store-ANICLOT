document.addEventListener("DOMContentLoaded", function () {
    const swiperr = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.new-items__slider-arrow--right',
            prevEl: '.new-items__slider-arrow--left',
        },

        breakpoints: {
            360: {
                slidesPerView: 1,
            },
            744: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },
        },
    });

    const indicators = document.querySelectorAll('.indicator-items');

    swiperr.on('slideChange', function () {
        indicators.forEach(indicator => indicator.classList.remove('indicator--active'));

        const activeIndex = swiperr.realIndex;

        indicators[activeIndex].classList.add('indicator--active');
    });
});
