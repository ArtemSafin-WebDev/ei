export default function hideOldStages() {
    const hideOldStages = Array.from(document.querySelectorAll('.js-hide-old-stages'));

    hideOldStages.forEach(btn => {
        const table = btn.closest('table');

        if (!table) return;
        let hidden = false;
        const originalBtnText = btn.textContent;
        btn.addEventListener('click', event => {
            event.preventDefault();
            hidden = !hidden;
            table.classList.toggle('old-hidden');

            btn.textContent = hidden ? 'Показать прошедшие этапы' : originalBtnText;

        })
    })
}