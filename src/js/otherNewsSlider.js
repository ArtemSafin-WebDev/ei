import Swiper from 'swiper';
import { MOBILE_WIDTH } from './constants';

export default function() {
    if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        const otherNewsSlider = Array.from(document.querySelectorAll('.js-other-news-slider'));
        otherNewsSlider.forEach(element => {
            const container = element.querySelector('.swiper-container');

            new Swiper(container, {
                slidesPerView: 1,
                spaceBetween: 16,
                watchOverflow: true
            });
        });
    }
}