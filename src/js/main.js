import polyfills from './polyfills';
import detectTouch from './detectTouch';
import offersSlider from './offersSlider';
import partners from './partners';
import lotsSlider from './lotsSlider';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    offersSlider();
    partners();
    lotsSlider();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
