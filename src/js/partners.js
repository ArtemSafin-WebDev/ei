import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function() {
    const partners = Array.from(document.querySelectorAll('.js-partners'));
    const cloningIterations = 2;
    partners.forEach(element => {
        const rows = Array.from(element.querySelectorAll('.partners__row'));

        rows.forEach(row => {
            const items = Array.from(row.querySelectorAll('.partners__item'));
            const itemsWrapper = row.querySelector('.partners__items-wrapper');
            for (let i = 0; i < cloningIterations; i++) {
                const itemsClones = items.map(item => item.cloneNode(true));
                itemsClones.forEach(item => itemsWrapper.appendChild(item))
            }
        });
    });
}
