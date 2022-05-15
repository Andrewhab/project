(() => {
    const editionsSwiper = new Swiper('.editions-swiper', {
        direction: 'horizontal',
        loopFillGroupWithBlank: true,

        breakpoints: {
            321: {
                spaceBetween: 34,
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            769: {
                spaceBetween: 50,
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            1025: {
                spaceBetween: 50,
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            1250: {
                spaceBetween: 50,
                slidesPerView: 3,
                slidesPerGroup: 3
            },
        },

        pagination: {
            el: '.js-editions-pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '.js-editions-next',
            prevEl: '.js-editions-prev'
        },
    });
})();
