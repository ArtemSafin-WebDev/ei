import { MOBILE_WIDTH } from './constants';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import accordionFactory from './accordionFactory';

export default function() {
    const participateBlocks = Array.from(document.querySelectorAll('.js-participate'));

    participateBlocks.forEach(element => {
        if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
            const accordionItems = Array.from(element.querySelectorAll('.participate__item'));

            const accordions = accordionFactory(accordionItems);

            accordions.init();
        } else {
            const tabsNav = Array.from(element.querySelectorAll('.participate__nav-link'));
            const tabItems = Array.from(element.querySelectorAll('.participate__item'));

            function setActiveTab(index, event) {
                if (event) event.preventDefault();

                const heightBefore = parseFloat(window.getComputedStyle(element).getPropertyValue('height'));

                gsap.set(element, {
                    height: 'auto'
                });

                tabsNav.forEach(btn => btn.classList.remove('active'));
                tabItems.forEach(item => item.classList.remove('active'));
                tabsNav[index].classList.add('active');
                tabItems[index].classList.add('active');

                const heightAfter = parseFloat(window.getComputedStyle(element).getPropertyValue('height'));

                gsap.fromTo(
                    element,
                    { height: heightBefore },
                    {
                        duration: 0.4,
                        height: heightAfter,
                        clearProps: 'all',
                        onComplete: () => {
                            ScrollTrigger.refresh(true);
                        }
                    }
                );
            }

            tabsNav.forEach((btn, btnIndex) => {
                const handler = setActiveTab.bind(btn, btnIndex);
                btn.addEventListener('click', handler);
            });

            setActiveTab(0);
        }
    });
}
