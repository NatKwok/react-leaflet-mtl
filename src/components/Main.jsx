import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";
import 'leaflet/dist/leaflet.css'

function Main() {
  
  return(
<MapContainer center={[40.505, -100.09]} zoom={13}  scrollWheelZoom={false}
  style={{height: "100vh"}} >
  
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
</MapContainer>
  );
}

export default Main;
