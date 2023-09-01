import React from "react";
import {
  MapContainer,
  TileLayer,
} from "react-leaflet";
import "../App.css";
import "leaflet/dist/leaflet.css";
import LocationMarker from "../components/LocationMarker";


function Create() {

  return (
    <MapContainer
      center={[45.5019, -73.5674]}
      zoom={11}
      scrollWheelZoom={false}
      style={{height: "100vh"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Create;
