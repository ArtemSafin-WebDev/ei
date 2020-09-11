
import ResizeSensor from 'resize-sensor'

import StickySidebar from 'sticky-sidebar';


export default function stickySidebar() {
    const elements = Array.from(document.querySelectorAll('.js-sticky-sidebar'));

    elements.forEach(element => {
        new StickySidebar(element, {
            topSpacing: 20,
            bottomSpacing: 20,
            containerSelector: '.catalog-detail__layout',
            innerWrapperSelector: '.catalog-detail__layout-sidebar-content',
            resizeSensor: true,
            minWidth: 768
        });
    });
}
