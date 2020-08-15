import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function newsSlider() {
    const newsSliders = Array.from(document.querySelectorAll('.js-news-slider'));

    newsSliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            watchOverflow: true,
            speed: 750,
            centeredSlides: true,
            loop: true,
            loopedSlides: 3,
            loopAdditionalSlides: 2,
            slideToClickedSlide: true,
            navigation: {
                nextEl: element.querySelector('.news-slider__arrow--next'),
                prevEl: element.querySelector('.news-slider__arrow--prev')
            },
            breakpoints: {
                768: {
                    spaceBetween: 10
                }
            }
        });
    });
}
