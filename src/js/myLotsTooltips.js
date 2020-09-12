import tippy, { followCursor, inlinePositioning } from 'tippy.js';

export default function myLotsTooltips() {
    const lotsTooltips = Array.from(document.querySelectorAll('.js-lots-tooltip'));

    lotsTooltips.forEach(element => {
        const contentElement = element.parentElement.querySelector('.js-lots-tooltip-content');

        if (!contentElement) {
            console.warn('No content element');
            return;
        }


        const textContent = contentElement.textContent;

        tippy(element, {
            content: textContent,
            arrow: false,
           
            placement: 'bottom',
            plugins: [followCursor, inlinePositioning],
            inlinePositioning: true,
            followCursor: false,
            theme: 'blue',
            
        });
    });
}
