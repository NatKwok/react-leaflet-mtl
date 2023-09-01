import React, { useState } from 'react';
import L from 'leaflet';
import { Marker, Popup, useMapEvents } from "react-leaflet";


const [marker, setMarker] = useState(0);


return (
    <Marker>
        <Popup></Popup>
    </Marker>
)