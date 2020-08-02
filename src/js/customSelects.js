import Choices from 'choices.js';

export default function customSelects() {
    const customSelects = Array.from(document.querySelectorAll('.js-custom-select'));

    customSelects.forEach(element => {
        new Choices(element, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
            position: 'bottom'
        });
    })
}