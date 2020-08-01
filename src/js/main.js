import polyfills from './polyfills';
import detectTouch from './detectTouch';
import offersSlider from './offersSlider';
import partners from './partners';
import lotsSlider from './lotsSlider';
import participate from './participate';
import catalogPreview from './catalogPreview';
import smallArticlesSlider from './smallArticlesSlider';
import otherNewsSlider from './otherNewsSlider';
import mobileMenu from './mobileMenu';
import onlyNumeric from './onlyNumeric';
import clearInput from './clearInput';
import showMore from './showMore';



document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    offersSlider();
    partners();
    lotsSlider();
    participate();
    catalogPreview();
    smallArticlesSlider();
    otherNewsSlider();
    mobileMenu();
    onlyNumeric();
    clearInput();
    showMore();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
