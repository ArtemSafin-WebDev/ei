import { MOBILE_WIDTH } from './constants';
import accordionFactory from './accordionFactory';
import Choices from 'choices.js';
import { lockScroll, unlockScroll } from './scrollBlocker';

export default function catalogFilters() {
    if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        const form = document.querySelector('.js-catalog-filters-form');

        if (form) {
            const formInputs = Array.from(form.querySelectorAll('input'));

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
            });
        }

        const mobileFiltersSubmit = document.querySelector('.js-mobile-filters-submit');
        const form = document.querySelector('.js-catalog-filters-form');

        if (mobileFiltersSubmit && form) {
            mobileFiltersSubmit.addEventListener('click', event => {
                event.preventDefault();
                form.submit();
            });
        }

        if (form) {
            const formInputs = Array.from(form.querySelectorAll('input, select'));

            formInputs.forEach(input => {
                const btnWrapper = input.closest('.catalog-filters__results-btn-wrapper');
                const formGroup = input.closest('.catalog-filters__form-group');

                if (formGroup.matches('.catalog-filters__form-group--photo')) return;

                if (!formGroup) {
                    console.warn('No required form group found', input);

                    return;
                }
                if (input.matches('[type="checkbox"]')) {
                    const formGroupCheckboxes = Array.from(formGroup.querySelectorAll('input[type="checkbox"]'));
                    input.addEventListener('change', event => {
                        const defaultValue = event.target.hasAttribute('checked');

                        // formGroup.classList.add('changed');
                        if (btnWrapper) {
                            if (event.target.checked !== defaultValue) {
                                btnWrapper.classList.add('changed');
                            } else {
                                btnWrapper.classList.remove('changed');
                            }
                        }

                        const changedCheckboxes = formGroupCheckboxes.filter(element => {
                            const btnWrapper = element.closest('.catalog-filters__results-btn-wrapper');
                            if (btnWrapper && btnWrapper.classList.contains('changed')) {
                                return true;
                            } else {
                                return false;
                            }
                        });

                        if (changedCheckboxes.length) {
                            formGroup.classList.add('changed');
                        } else {
                            formGroup.classList.remove('changed');
                        }
                    });
                } else if (input.matches('[type="radio"]')) {
                    if (!input.hasAttribute('name')) {
                        console.error('No name attribute on radio');
                        return;
                    }
                    const radiosFromGroup = Array.from(document.querySelectorAll(`input[type="radio"][name="${input.name}"]`));
                    const initialActiveRadio = radiosFromGroup.find(element => element.hasAttribute('checked'));
                    if (!initialActiveRadio) {
                        console.warn('No initial active radio');
                        return;
                    }
                    input.addEventListener('change', event => {
                        radiosFromGroup.forEach(radio => {
                            const radioBtnWrapper = radio.closest('.catalog-filters__results-btn-wrapper');
                            radioBtnWrapper.classList.remove('changed');
                        });
                        if (input !== initialActiveRadio) {
                            if (btnWrapper) btnWrapper.classList.add('changed');
                            formGroup.classList.add('changed');
                        } else {
                            if (btnWrapper) btnWrapper.classList.remove('changed');
                            formGroup.classList.remove('changed');
                        }
                    });
                } else if (input.matches('select')) {
                    const initialValue = input.value;
                    input.addEventListener('change', event => {
                        if (initialValue !== event.target.value) {
                            formGroup.classList.add('changed');
                        } else {
                            formGroup.classList.remove('changed');
                        }
                    });
                } else if (input.matches('.catalog-filters__form-price-range-input')) {
                    const priceInputs = Array.from(formGroup.querySelectorAll('.catalog-filters__form-price-range-input'));
                    const initialValues = priceInputs.map(element => (element.hasAttribute('value') ? element.getAttribute('value') : ''));

                    input.addEventListener('input', event => {
                        let mismatches = [];
                        priceInputs.map((input, inputIndex) => {
                            const currentValue = input.value.replace(/\s/g, '');
                            const initialValue = initialValues[inputIndex];

                            if (currentValue !== initialValue) {
                                mismatches.push({
                                    currentValue,
                                    initialValue
                                });
                            }
                        });

                        if (mismatches.length) {
                            formGroup.classList.add('changed');
                        } else {
                            formGroup.classList.remove('changed');
                        }
                    });
                } else {
                    input.addEventListener('input', event => {
                        const defaultValue = event.target.getAttribute('value');

                        // formGroup.classList.add('changed');

                        if (btnWrapper) {
                            if (event.target.value !== defaultValue) {
                                btnWrapper.classList.add('changed');
                            } else {
                                btnWrapper.classList.remove('changed');
                            }
                        }
                    });
                }
            });
        }
    }
}
