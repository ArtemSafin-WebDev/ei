import polyfills from './polyfills';
import detectTouch from './detectTouch';
import offersSlider from './offersSlider';
import partners from './partners';
import lotsSlider from './lotsSlider';
import participate from './participate';
import catalogPreview from './catalogPreview';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    offersSlider();
    partners();
    lotsSlider();
    participate();
    catalogPreview();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
