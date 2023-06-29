import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  LayersControl,
  Marker,
} from "react-leaflet";
import "../App.css";
import "leaflet/dist/leaflet.css";
import wetland from "../components/data/wetlands";
import wetlandFeature from "../components/features/wetland_feature";
import watercourse from "../components/data/watercourse";
import watercourseFeature from "../components/features/watercourse_feature";
import wasteland from "../components/data/wasteland";
import wastelandFeature from "../components/features/wasteland_feature";
function env() {

  return (
    <MapContainer
      center={[45.5019, -73.5674]}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topright">
        <LayersControl.Overlay name="Wetlands">
          <GeoJSON data={wetland} onEachFeature={wetlandFeature}/>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Water Courses">
          <GeoJSON data={watercourse} onEachFeature={watercourseFeature}/>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Wastelands">
          <GeoJSON data={wasteland} onEachFeature={wastelandFeature}/>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}

export default env;
