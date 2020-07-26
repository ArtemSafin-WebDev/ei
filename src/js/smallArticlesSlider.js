import Swiper from 'swiper';
import { MOBILE_WIDTH } from './constants';

export default function() {
    if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        const smallCardsSlider = Array.from(document.querySelectorAll('.js-small-cards-slider'));
        smallCardsSlider.forEach(element => {
            const container = element.querySelector('.swiper-container');

            new Swiper(container, {
                slidesPerView: 1,
                spaceBetween: 16,
                watchOverflow: true
            });
        });
    }
}
