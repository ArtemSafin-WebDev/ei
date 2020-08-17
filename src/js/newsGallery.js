import { Swiper, Thumbs } from 'swiper';

Swiper.use([Thumbs]);

export default function newsGallery() {
    const blocks = Array.from(document.querySelectorAll('.js-news-gallery'));

    blocks.forEach(element => {
        const mainContainer = element.querySelector('.news-detail__gallery-main .swiper-container');
        const thumbsContainer = element.querySelector('.news-detail__gallery-thumbs .swiper-container');

        const mainSliderOptions = {
            watchOverflow: true,
            spaceBetween: 14,
            navigation: {
                nextEl: element.querySelector('.news-detail__gallery-arrow--next'),
                prevEl: element.querySelector('.news-detail__gallery-arrow--prev')
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 18
                }
            },
            thumbs: {}
        };


        mainSliderOptions.thumbs.swiper = new Swiper(thumbsContainer, {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            threshold: 10,
            spaceBetween: 16,
            centerInsufficientSlides: true
         
        });

        new Swiper(mainContainer, mainSliderOptions);
    });
}
