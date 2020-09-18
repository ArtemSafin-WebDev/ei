export default function expandListView() {
    const btns = Array.from(document.querySelectorAll('.js-expand-list-view'));

    btns.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();

            const container = element.closest('.lots-on-the-map');

            if (container) {
                container.classList.toggle('collapsed')
            }
        })
    })
}