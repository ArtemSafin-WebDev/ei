import { MOBILE_WIDTH } from './constants';

export default function catalogFilters() {
    if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        const form = document.querySelector('.js-catalog-filters-form');

        if (form) {
            const formInputs = Array.from(form.querySelectorAll('input'));
            console.log(formInputs)
            const floatingBtn = document.createElement('button');
            const total = form.getAttribute('data-total-found');
            floatingBtn.className = 'catalog-filters__results-btn';

            const updateBtnText = () => {
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
    }
}
