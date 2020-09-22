export default function clearableSearch() {
    const elements = Array.from(document.querySelectorAll('.js-clearable-search'));

    elements.forEach(element => {
        const closeBtn = element.querySelector('.catalog-filters__search-clear');

        const input = element.querySelector('input');

        closeBtn.addEventListener('click', event => {
            event.preventDefault();

            input.value = ''
        })
    })
}