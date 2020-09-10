export default function showPassword() {
    const elements = Array.from(document.querySelectorAll('.js-show-password'));

    elements.forEach(element => {
        const input = element.querySelector('input[type="password"]');
        const btn = element.querySelector('.modals__form-input-show-password-btn')
        function togglePassword() {
            if (input.type === 'password') {
                input.type = 'text';
            } else {
                input.type = 'password';
            }
        }

        btn.addEventListener('click', togglePassword);
    });
}
