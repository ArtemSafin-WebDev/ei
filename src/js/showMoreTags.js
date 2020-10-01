export default function showMoreTags() {
    const content = document.querySelector('.js-show-more-tags-content');

    const btn = document.querySelector('.js-show-more-tags-btn');

    if (content && btn) {
        btn.addEventListener('click', event => {
            event.preventDefault();

            btn.classList.toggle('active');
            content.classList.toggle('active');
        })
    }
}