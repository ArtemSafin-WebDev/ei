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

          

         
        } else {
            const navLinks = Array.from(element.querySelectorAll('.catalog-preview__nav-link'));
            const mobileDropdownsContainer = element.querySelector('.catalog-preview__mobile-dropdowns');
            let mobileDropdownInstances = [];


            const openDropdownInstance = (link) => {
                mobileDropdownInstances.forEach(element => {
                    element.navLink.classList.remove('active');
                    element.navLinkDropdown.classList.remove('active')
                })
                const foundInstance = mobileDropdownInstances.find(element => element.navLink === link);
                foundInstance.navLink.classList.add('active');
                foundInstance.navLinkDropdown.classList.add('active');

            }

            navLinks.forEach(navLink => {
                let navLinkDropdown = navLink.parentElement.querySelector('.catalog-preview__nav-dropdown');

                if (!navLinkDropdown) {
                    navLinkDropdown = document.createElement('div');
                    navLinkDropdown.className = 'catalog-preview__nav-dropdown';
                }

                mobileDropdownsContainer.appendChild(navLinkDropdown);

                mobileDropdownInstances.push({
                    navLink,
                    navLinkDropdown
                });


                navLink.addEventListener('click', event => {
                    event.preventDefault();
                    openDropdownInstance(navLink)
                })
 
            })


            if (navLinks && navLinks.length) {
                openDropdownInstance(navLinks[0])
            }
        }


        const tabsElements = Array.from(element.querySelectorAll('.js-tabs'));
        const tabs = tabFactory(tabsElements);
        tabs.init();

        const catalogPreviewTopSliders = Array.from(element.querySelectorAll('.js-catalog-preview-top-slider'));

        catalogPreviewTopSliders.forEach(catalogPreviewTopSlider => {
            const container = catalogPreviewTopSlider.querySelector('.swiper-container');
            new Swiper(container, {
                slidesPerView: 'auto',
                spaceBetween: 18,
                cssMode: window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches ? false : true,
                watchOverflow: true,
                navigation: {
                    nextEl: catalogPreviewTopSlider.querySelector('.catalog-preview__slider-arrow--next'),
                    prevEl: catalogPreviewTopSlider.querySelector('.catalog-preview__slider-arrow--prev')
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    969: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    1201: {
                        slidesPerView: 2,
                        spaceBetween: 65
                    }
                }
            });
        });

        const catalogPreviewBottomSliders = Array.from(element.querySelectorAll('.js-catalog-preview-bottom-slider'));

        catalogPreviewBottomSliders.forEach(catalogPreviewBottomSlider => {
            const container = catalogPreviewBottomSlider.querySelector('.swiper-container');
            new Swiper(container, {
                slidesPerView: 2,
                spaceBetween: 18,
                cssMode: window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches ? false : true,
                watchOverflow: true,
                navigation: {
                    nextEl: catalogPreviewBottomSlider.querySelector('.catalog-preview__slider-arrow--next'),
                    prevEl: catalogPreviewBottomSlider.querySelector('.catalog-preview__slider-arrow--prev')
                },
                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    969: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    1201: {
                        slidesPerView: 3,
                        spaceBetween: 65
                    }
                }
            });
        });
    });
}
