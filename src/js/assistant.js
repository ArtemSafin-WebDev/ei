
import { lockScroll, unlockScroll } from './scrollBlocker';
import { gsap } from 'gsap';
import accordionFactory from './accordionFactory';

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

        if (window.mobileUserMenuOpen && window.closeMobileUserMenu) {
            window.closeMobileUserMenu();
        }

        lockScroll(popup)
      
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


    const assistantAccordions = Array.from(document.querySelectorAll('.js-assistant-accordion'));

    accordionFactory(assistantAccordions).init();

    
}