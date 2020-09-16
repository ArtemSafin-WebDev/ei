import { lockScroll, unlockScroll } from './scrollBlocker';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollToPlugin);

export default function mobileUserMenu() {
    const mobileMenuBurger = document.querySelector('.js-mobile-user-account-open');

    const mobileMenuScrollContainer = document.querySelector('.page-header__user-account');

    if (mobileMenuBurger && mobileMenuScrollContainer) {
        window.mobileUserMenuOpen = false;

        function openMenu() {

            if (window.closeAssistant) {
                window.closeAssistant();
            }

            if (window.closeCatalogMenu) {
                window.closeCatalogMenu();
            }
            gsap.to(window, { duration: 0.3, scrollTo: 0, clearProps: 'all', onComplete: () => lockScroll(mobileMenuScrollContainer) });
            window.mobileUserMenuOpen = true;
            document.body.classList.add('mobile-user-menu-open');

            
        }

        function closeMenu() {
            unlockScroll();
            window.mobileUserMenuOpen = false;
            document.body.classList.remove('mobile-user-menu-open');
        }

        mobileMenuBurger.addEventListener('click', event => {
            event.preventDefault();
            if (window.mobileUserMenuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });


        window.closeMobileUserMenu = closeMenu;


      
    }
}
