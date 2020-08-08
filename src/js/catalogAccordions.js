import accordionFactory from "./accordionFactory";

export default function() {
    const catalogAccordions = Array.from(document.querySelectorAll('.js-catalog-accordion'));
    accordionFactory(catalogAccordions, true).init();

    
}