import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function() {
    const lotsSliders = Array.from(document.querySelectorAll('.js-lots-slider'));

    lotsSliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            slidesPerGroup: 2,
            speed: 600,
            navigation: {
                nextEl: element.querySelector('.lots-alider__arrow--next'),
                prevEl: element.querySelector('.lots-alider__arrow--prev')
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: 'row',
                    slidesPerGroup: 2
                },

                969: {
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: 'row',
                    slidesPerGroup: 2,
                    spaceBetween: 40
                },

                1201: {
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: 'row',
                    slidesPerGroup: 2,
                    spaceBetween: 65
                }
            }
        });
    });
}
