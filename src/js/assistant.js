
import { lockScroll, unlockScroll } from './scrollBlocker';
import { gsap } from 'gsap';

export default function assistant() {
    const toggleBtn = document.querySelector('.js-assistant-toggle');
    const popup = document.querySelector('.js-assistant-popup');


    if (!popup || !toggleBtn) {
        console.warn('No assistant popup or btn');

        return;
    }


    let menuOpen = false;

    function openMenu() {
        if (window.closeCatalogMenu) {
            window.closeCatalogMenu();
        }
        if (window.closeMobileMenu) {
            window.closeMobileMenu();
        }
        gsap.to(window, { duration: 0.3, scrollTo: 0, clearProps: 'all', onComplete: () => lockScroll(popup) });
        menuOpen = true;
        document.body.classList.add('assistant-shown');
    }

    function closeMenu() {
        unlockScroll();
        menuOpen = false;
        document.body.classList.remove('assistant-shown');
    }

    toggleBtn.addEventListener('click', event => {
        if (document.body.classList.contains('assistant-page')) {
            return true;
        }
        event.preventDefault();
        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });


    window.closeAssistant = closeMenu;

    
}