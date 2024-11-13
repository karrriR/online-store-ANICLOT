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

    const indicators = document.querySelectorAll('.indicator');

    swiper.on('slideChange', function () {
        indicators.forEach(indicator => indicator.classList.remove('indicator--active'));

        const activeIndex = swiper.realIndex;

        indicators[activeIndex].classList.add('indicator--active');
    });
});
