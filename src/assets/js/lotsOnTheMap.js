document.addEventListener('DOMContentLoaded', () => {
    const mapCenter = {
        lat: 55.796554,
        lng: 49.104752
    };

    const styles = [
        {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#f2f2f2'
                }
            ]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#ceeade'
                }
            ]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    visibility: 'simplified'
                }
            ]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#f5d6d6'
                }
            ]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    visibility: 'simplified'
                }
            ]
        },
        {
            featureType: 'road.local',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    visibility: 'simplified'
                }
            ]
        },
        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#cde2e5'
                }
            ]
        }
    ];

    const encoded = window.btoa(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#13B17C"><path d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0z"/></svg>`
    );

    const clustererInlineSVG = 'data:image/svg+xml;base64,' + encoded;

    const clustererStyles = [
        {
            width: 40,
            height: 40,
            url: clustererInlineSVG,
            textColor: 'white',
            textSize: 16,
            anchorText: [10, 0]
        },
        {
            width: 50,
            height: 50,
            url: clustererInlineSVG,
            textColor: 'white',
            textSize: 18,
            anchorText: [14, 0]
        }
    ];

    const mapData = [
        {
            coords: [55.831082, 49.079644]
        },
        {
            coords: [55.815159, 49.101276]
        },
        {
            coords: [55.812957, 49.183735]
        },
        {
            coords: [55.79474, 49.114071]
        },
        {
            coords: [55.833308, 49.132141]
        },
        {
            coords: [55.776266, 49.140724]
        },
        {
            coords: [55.748973, 49.104675]
        },
        {
            coords: [55.744519, 49.218315]
        }
    ];

    const lotsMaps = Array.from(document.querySelectorAll('.js-lots-map'));

    lotsMaps.forEach(element => {
        mapInstance = new google.maps.Map(element, {
            zoom: 14,
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
            styles
        });

        mapInstance.setCenter(mapCenter);

        const markers = mapData.map(item => {
            return new google.maps.Marker({
                position: {
                    lat: item.coords[0],
                    lng: item.coords[1]
                },
                map: mapInstance,
                icon: {
                    url: 'img/pin.svg',
                    size: new google.maps.Size(45, 45),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(45 / 2, 45 / 2)
                }
            });
        });

        const clusterer = new MarkerClusterer(mapInstance, markers, {
            styles: clustererStyles
        });
    });
});
