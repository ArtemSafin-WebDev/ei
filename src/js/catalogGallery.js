import { Swiper, Thumbs } from 'swiper';

Swiper.use([Thumbs]);

export default function catalogGallery() {
    const catalogGallerySliders = Array.from(document.querySelectorAll('.js-catalog-gallery'));

    catalogGallerySliders.forEach(element => {
        const mainContainer = element.querySelector('.catalog-detail__gallery-main .swiper-container');
        const thumbsContainer = element.querySelector('.catalog-detail__gallery-thumbs .swiper-container');
        const mainSliderOptions = {
            watchOverflow: true,
            spaceBetween: 14,
            breakpoints: {
               
                768: {
                    slidesPerView: 1,
                    spaceBetween: 18
                },
               
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
            direction: 'vertical'
        });

        new Swiper(mainContainer, mainSliderOptions);
    });
}
