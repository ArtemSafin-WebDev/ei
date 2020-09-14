export default function datepickers() {
    const datepickers = Array.from(document.querySelectorAll('.js-datepicker'));

    datepickers.forEach(element => {
        if (element.closest('.modals__modal')) {
            const dp = $(element)
                .datepicker()
                .data('datepicker');

            $(element.closest('.modals__modal')).on('scroll', function() {
                dp.update();
            });

            
        } else {
            $(element)
                .datepicker()
                .data('datepicker');
        }
    });
}
