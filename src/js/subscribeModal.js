import tabFactory from "./tabFactory";

export default function subscribeModal() {
    const elements = Array.from(document.querySelectorAll('.modals__choose-your-plan'));

    tabFactory(elements).init();
}