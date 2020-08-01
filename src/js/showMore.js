export default function showMore() {
    const showMoreBtns = Array.from(document.querySelectorAll('.js-show-more'));

    showMoreBtns.forEach(btn => {
        const content = btn.parentElement.querySelector('.js-show-more-content');
        let open = false;
        if (!content) return;

        const originalText = btn.textContent;

        btn.addEventListener('click', event => {
            event.preventDefault();
            content.classList.toggle('shown');
           
            open = open ? false : true;
            btn.textContent = open ? 'Скрыть' : originalText;
            
        })
    })
}