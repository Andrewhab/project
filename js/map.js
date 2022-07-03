ymaps.ready(init);

function init() {
    const mapElem = document.querySelector('#map');
    const myMap = new ymaps.Map(
        "map", {
            center: [55.75991743174908, 37.62745011920072],
            zoom: 14,
            controls: ['geolocationControl', 'zoomControl']
        }, {
            suppressMapOpenBlock: true,
            geolocationControlSize: "large",
            geolocationControlPosition: { top: "200px", right: "20px" },
            geolocationControlFloat: 'none',
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: { top: "120px", right: "20px" }
        }
    );

    myMap.behaviors.disable('scrollZoom');

    const myPlacemark = new ymaps.Placemark(
        [55.75846306898368, 37.601079499999905], {}, {
            iconLayout: "default#image",
            iconImageHref: "img/placemark.png",
            iconImageSize: [20, 20],
            iconImageOffset: [-20, -40],
        }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
}
