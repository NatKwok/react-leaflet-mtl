import L from 'leaflet';


export default function muralpoint(geoJsonPoint, latlng) {

    var muralIcon = L.icon({
        iconUrl: require('../media/mural.png'),
        iconSize: [18, 18],
        iconAnchor: [16, 37],
        popupAnchor: [0, -28]
    });

    return L.marker(latlng, {
        icon: muralIcon
    });
}