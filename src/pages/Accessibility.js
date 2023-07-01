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
import LocationMarker from "../components/LocationMarker";
import CSD from "../components/data/csd";
import csdFeature from "../components/features/csd_feature";
import cycle_paths from "../components/data/cycle_paths";
import cycleFeature from "../components/features/cycle_feature";
import wifi from "../components/data/wifi";
import wifiFeature from "../components/features/wifi_feature";
import mural from "../components/data/mural";
import muralFeature from "../components/features/mural_feature";
import wifipoint from "../components/features/wifipoint.jsx";
import muralpoint from "../components/features/muralpoint";

function Main() {

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
      <LayersControl position="topright">
        <LayersControl.Overlay name="Census SubDivisions">
          <GeoJSON data={CSD} onEachFeature={csdFeature} />
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Cycle Paths">
          <GeoJSON data={cycle_paths} onEachFeature={cycleFeature}/>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Wifi HotSpots">
          <GeoJSON data={wifi} onEachFeature={wifiFeature} pointToLayer={wifipoint} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Murals">
          <GeoJSON data={mural} onEachFeature={muralFeature} pointToLayer={muralpoint}/>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}

export default Main;
