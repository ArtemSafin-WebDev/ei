import Choices from 'choices.js';

export default function changeDetails() {
    const changeDetailsSelects = Array.from(document.querySelectorAll('.js-change-detail-select'));

    changeDetailsSelects.forEach(element => {
        new Choices(element, {
            searchEnabled: true,
            itemSelectText: '',
            shouldSort: false,
            position: 'bottom',
            noResultsText: 'Не найдено'
        });

        element.addEventListener('change', () => {
            $(element).parsley().validate()
          
        })
        
    });
}
