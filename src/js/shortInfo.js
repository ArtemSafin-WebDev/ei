import tabFactory from "./tabFactory";

export default function shortInfo() {
    const shortInfo = Array.from(document.querySelectorAll('.js-short-info'));


    tabFactory(shortInfo).init();
}