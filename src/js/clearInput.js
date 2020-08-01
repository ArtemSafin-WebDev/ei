export default function clearInput() {
    const clearInputBtns = Array.from(document.querySelectorAll('.js-clear-input'));


    clearInputBtns.forEach(btn => {
        const input = btn.parentElement.querySelector('input');

        if (!input) {
            console.warn('No input for clear input button found');
            return;
        } else {
            btn.addEventListener('click', () => {
                input.value = '';
            })
        }
    })
}