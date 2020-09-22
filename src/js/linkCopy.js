const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

export default function linkCopy() {
    const elements = Array.from(document.querySelectorAll('.js-copy-link'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();

            copyToClipboard(element.href);

            if (window.showMessage) {
                window.showMessage('#link-copied');
            }
        });
    });
}
