import { Swiper, Navigation, Autoplay } from 'swiper';

Swiper.use([Navigation, Autoplay]);

export default function() {
    const offersSliders = Array.from(document.querySelectorAll('.js-offers-slider'));

    offersSliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 16,
            loopAdditionalSlides: 4,
            autoplay: {
                delay: 5000
            },
            loop: true,
            navigation: {
                nextEl: element.querySelector('.offers__arrow--next'),
                prevEl: element.querySelector('.offers__arrow--prev')
            },
            breakpoints: {
                569: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                969: {
                    spaceBetween: 40,
                    slidesPerView: 2,
                },

                1201: {
                    spaceBetween: 65,
                    slidesPerView: 2,
                }
            }
        });
    });
}
