import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOBILE_WIDTH } from "./constants";


gsap.registerPlugin(ScrollTrigger);

export default function() {

    if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) return;

    const partners = Array.from(document.querySelectorAll('.js-partners'));
    const cloningIterations = 2;
    const offsetDistance = 400;

 
    partners.forEach(element => {
        const rows = Array.from(element.querySelectorAll('.partners__row'));

        rows.forEach((row, rowIndex) => {
            const items = Array.from(row.querySelectorAll('.partners__item'));
            const itemsWrapper = row.querySelector('.partners__items-wrapper');
            for (let i = 0; i < cloningIterations; i++) {
                const itemsClones = items.map(item => item.cloneNode(true));
                itemsClones.forEach(item => itemsWrapper.appendChild(item))
            }

            const offsetDirection = (rowIndex % 2 == 0) ? -1 : 1;

            gsap.to(itemsWrapper, {
                x: offsetDirection * offsetDistance,
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                    markers: false
                }
            })
        });
    });
}
