import tabFactory from './tabFactory';
import { lockScroll, unlockScroll } from './scrollBlocker';
import { gsap } from 'gsap';

export default function catalogMenu() {
    const catalogMenu = document.querySelector('.js-catalog-menu');

    if (!catalogMenu) {
        console.warn('No catalog menu');
        return;
    }

    tabFactory([catalogMenu]).init();

    const catalogToggle = document.querySelector('.js-catalog-menu-toggle');

    if (!catalogToggle) {
        console.warn('No catalog menu toggle button');

        return;
    }

    let menuOpen = false;

    function openMenu() {
        gsap.to(window, { duration: 0.3, scrollTo: 0, clearProps: 'all', onComplete: () => lockScroll(catalogMenu) });
        menuOpen = true;
        document.body.classList.add('catalog-menu-open');
    }

    function closeMenu() {
        unlockScroll();
        menuOpen = false;
        document.body.classList.remove('catalog-menu-open');
    }

    catalogToggle.addEventListener('click', event => {
        event.preventDefault();
        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

   
}
