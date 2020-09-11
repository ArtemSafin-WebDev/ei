// Тестовые скрипты для демонстрации верстки

const passwordResetForm = document.querySelector('.js-reset-password-test-form');

if (passwordResetForm) {
    passwordResetForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if ($(passwordResetForm).parsley().isValid()) {
            setTimeout(() => {
                if (window.openModal) {
                    window.closeAllModals()
                    window.openModal('#reset-password-success')
                }
            }, 200)
        }
    })
}