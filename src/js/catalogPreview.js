import { MOBILE_WIDTH } from './constants';
import accordionFactory from './accordionFactory';
import tabFactory from './tabFactory';
import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function() {
    const catalogPreviewBlocks = Array.from(document.querySelectorAll('.js-catalog-preview'));

    catalogPreviewBlocks.forEach(element => {
        if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
            const accordionElements = Array.from(element.querySelectorAll('.js-accordion'));
            const accorionInstance = accordionFactory(accordionElements);

            accorionInstance.init();

            const initializedInstances = accorionInstance.getInstances();

            const accordeonToOpenInitially = initializedInstances.find(item => item.element.classList.contains('js-accordion-initially-open'));

            if (accordeonToOpenInitially) {
                accordeonToOpenInitially.btn.click();
            }

            const tabsElements = Array.from(element.querySelectorAll('.js-tabs'));

            const tabs = tabFactory(tabsElements);
            tabs.init();
        }

        const catalogPreviewTopSliders = Array.from(element.querySelectorAll('.js-catalog-preview-top-slider'));

        catalogPreviewTopSliders.forEach(catalogPreviewTopSlider => {
            const container = catalogPreviewTopSlider.querySelector('.swiper-container');
            new Swiper(container, {
                slidesPerView: 2,
                spaceBetween: 65,
                cssMode: true,
                watchOverflow: true,
                navigation: {
                    nextEl: catalogPreviewTopSlider.querySelector('.catalog-preview__slider-arrow--next'),
                    prevEl: catalogPreviewTopSlider.querySelector('.catalog-preview__slider-arrow--prev')
                }
            });
        });

        const catalogPreviewBottomSliders = Array.from(element.querySelectorAll('.js-catalog-preview-bottom-slider'));

        catalogPreviewBottomSliders.forEach(catalogPreviewBottomSlider => {
            const container = catalogPreviewBottomSlider.querySelector('.swiper-container');
            new Swiper(container, {
                slidesPerView: 3,
                spaceBetween: 65,
                cssMode: true,
                watchOverflow: true,
                navigation: {
                    nextEl: catalogPreviewBottomSlider.querySelector('.catalog-preview__slider-arrow--next'),
                    prevEl: catalogPreviewBottomSlider.querySelector('.catalog-preview__slider-arrow--prev')
                }
            });
        });
    });
}
