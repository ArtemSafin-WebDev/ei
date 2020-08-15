import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function isInteresting() {
    const blocks = Array.from(document.querySelectorAll('.js-is-interesting-slider'));

    blocks.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            spaceBetween: 16,
            watchOverflow: true,
            slidesPerView: 'auto',
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 65
                }
            }
        });
    });
}
