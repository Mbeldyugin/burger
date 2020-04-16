let myMap;

ymaps.ready(init);
function init () {
    var myMap = new ymaps.Map ("map", {
        center: [59.935575, 30.345503],
        zoom: 14,
        controls:['zoomControl']
    });
    
    const coords = [
        [59.923734, 30.344955],
        [59.933981, 30.346772],
        [59.935575, 30.345503],
        [59.940793, 30.335067]
    ];

    const myCollection = new ymaps.GeoObjectCollection({},{
        draggable: false, 
        iconLayout: 'default#image',
        iconImageHref: "./burger/img/map-marker.svg",
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    for (var i = 0; i<coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

