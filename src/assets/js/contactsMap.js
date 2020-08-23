ymaps.ready(init);

function init() {
    var maps = Array.prototype.slice.call(document.querySelectorAll('.js-contacts-map'));


    maps.forEach(function(element) {

        var coords = {
            lat: parseFloat(element.getAttribute('data-lat')),
            lng: parseFloat(element.getAttribute('data-lng'))
        }

        var pinOptions = {
            iconLayout: 'default#image',
            iconImageHref: element.getAttribute('data-pin'),
            iconImageSize: window.matchMedia("(max-width: 767px)").matches ? [146, 50] : [208, 72],
            iconImageOffset: window.matchMedia("(max-width: 767px)").matches ? [-73, -50] : [-104, -72]
        }
        var mainMapInstance = new ymaps.Map(element, {
            center: [coords.lat, coords.lng],
            zoom: window.matchMedia("(max-width: 767px)").matches ? 17 : 15,
            controls: []
        });
    
        mainMapInstance.controls.add('zoomControl');


        var placemark = new ymaps.Placemark([coords.lat, coords.lng], {}, pinOptions);

        mainMapInstance.geoObjects.add(placemark);
    })
}