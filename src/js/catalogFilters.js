import { MOBILE_WIDTH } from './constants';
import accordionFactory from './accordionFactory';
import Choices from 'choices.js';
import { lockScroll, unlockScroll } from './scrollBlocker';

export default function catalogFilters() {
    if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        const form = document.querySelector('.js-catalog-filters-form');

        if (form) {
            const formInputs = Array.from(form.querySelectorAll('input'));
            console.log(formInputs);
            const floatingBtn = document.createElement('button');

            floatingBtn.className = 'catalog-filters__results-btn';

            const updateBtnText = () => {
                const total = form.getAttribute('data-total-found');
                floatingBtn.innerHTML = `
            Показать результат
            <span class="catalog-filters__results-btn-count">
                ${total}
            </span>
            `;
            };

            floatingBtn.addEventListener('click', event => {
                event.preventDefault();
                form.submit();
            });

            const inputChangeHandler = event => {
                const btnWrapper = event.target.closest('.catalog-filters__results-btn-wrapper');
                if (btnWrapper) {
                    btnWrapper.appendChild(floatingBtn);
                    updateBtnText();
                } else {
                    console.error('No btn wrapper found');
                }
            };

            formInputs.forEach(input => {
                if (input.matches('[type="checkbox"], [type="radio"]')) {
                    input.addEventListener('change', inputChangeHandler);
                } else {
                    input.addEventListener('input', inputChangeHandler);
                }
            });
        }
    } else {
        const accordionElements = Array.from(
            document.querySelectorAll('.catalog-filters__form-group:not(.catalog-filters__form-group--photo), .catalog-filters__nav')
        );

        accordionFactory(accordionElements).init();

        const mobileRegions = Array.from(document.querySelectorAll('.js-mobile-region'));

        mobileRegions.forEach(regionSelect => {
            new Choices(regionSelect, {
                removeItemButton: true,
                searchEnabled: true,
                itemSelectText: '',
                shouldSort: false,
                position: 'bottom',
                noResultsText: 'Нет результатов',
                noChoicesText: 'Нет доступных вариантов'
            });
        });

        const mobileFiltersBtn = document.querySelector('.js-mobile-filters-open');
        let mobileFiltersOpen = false;
        const mobileFiltersScrollContainer = document.querySelector('.catalog__layout-sidebar');
        const mobileFiltersCloseBtn = document.querySelector('.js-mobile-filters-close');
        if (mobileFiltersBtn) {
            function openMenu() {
                lockScroll(mobileFiltersScrollContainer);
                mobileFiltersOpen = true;
                document.body.classList.add('mobile-filters-open');
            }

            function closeMenu() {
                unlockScroll();
                mobileFiltersOpen = false;
                document.body.classList.remove('mobile-filters-open');
            }

            mobileFiltersBtn.addEventListener('click', event => {
                event.preventDefault();
                if (mobileFiltersOpen) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            mobileFiltersCloseBtn.addEventListener('click', event => {
                event.preventDefault();
                closeMenu();
            })
        }


        const mobileFiltersSubmit = document.querySelector('.js-mobile-filters-submit');
        const form = document.querySelector('.js-catalog-filters-form');

        if (mobileFiltersSubmit && form) {
            mobileFiltersSubmit.addEventListener('click', event => {
                event.preventDefault();
                form.submit();
            })
        }
    }
}
