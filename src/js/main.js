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
import customSelects from './customSelects';
import catalogViews from './catalogViews';
import catalogFilters from './catalogFilters';
import catalogGallery from './catalogGallery';
import catalogAccordions from './catalogAccordions';
import hideOldStages from './hideOldSteps';
import otherLots from './otherLots';
import shortInfo from './shortInfo';
import otherItems from './otherItems';
import newsSlider from './newsSlider';
import isInteresting from './isInterestingSlider';
import newsGallery from './newsGallery';
import catalogMenu from './catalogMenu';



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
    customSelects();
    catalogViews();
    catalogFilters();
    catalogGallery();
    catalogAccordions();
    hideOldStages();
    otherLots();
    shortInfo();
    otherItems();
    newsSlider();
    isInteresting();
    newsGallery();
    catalogMenu();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
