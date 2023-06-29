import L from 'leaflet';


export default function wifipoint(geoJsonPoint, latlng) {

    var wifiIcon = L.icon({
        iconUrl: require('../media/wifi.png'),
        iconSize: [18, 18],
        iconAnchor: [16, 37],
        popupAnchor: [0, -28]
    });

    return L.marker(latlng, {
        icon: wifiIcon
    });
}