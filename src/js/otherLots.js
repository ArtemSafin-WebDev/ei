import tabFactory from './tabFactory';
import { Swiper } from 'swiper';
export default function otherLots() {
    const otherLotsTabs = Array.from(document.querySelectorAll('.js-other-lots-tabs'));

    tabFactory(otherLotsTabs).init();

   

    const otherLotsSliders = Array.from(document.querySelectorAll('.js-other-lots-slider'));

    otherLotsSliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            spaceBetween: 16,
            watchOverflow: true,
            slidesPerView: 2,
            breakpoints: {
               
                768: {
                    slidesPerView: 4,
                    spaceBetween: 65,
                },
               
            },
        })
    });
}
