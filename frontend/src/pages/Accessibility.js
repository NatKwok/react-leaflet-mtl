import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  LayersControl
} from "react-leaflet";
import "../App.css";
import "leaflet/dist/leaflet.css";
import cycleFeature from "../components/features/cycle_feature";
import wifiFeature from "../components/features/wifi_feature";
import muralFeature from "../components/features/mural_feature";
import wifipoint from "../components/features/wifipoint.jsx";
import muralpoint from "../components/features/muralpoint";

const Main = () =>  {

  const [cycle_paths, setCyclePaths] = useState([]);
  const [wifi, setWifi] = useState([]);
  const [mural, setMural] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cyclepaths')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setCyclePaths(data);
       })
       .catch((err) => {
          console.log(err.message);
       });

 }, [])

//  useEffect(() => {
//   fetch('http://localhost:3001/wifi')
//      .then((response) => response.json())
//      .then((data) => {
//         console.log(data);
//         setWifi(data);
//      })
//      .catch((err) => {
//         console.log(err.message);
//      });
// }, []);

// useEffect(() => {
//   fetch('http://localhost:3001/murals')
//      .then((response) => response.json())
//      .then((data) => {
//         console.log(data);
//         setMural(data);
//      })
//      .catch((err) => {
//         console.log(err.message);
//      });
// }, []);

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
        <LayersControl.Overlay checked name="Cycle Paths">
          <GeoJSON data={cycle_paths} onEachFeature={cycleFeature}/>
        </LayersControl.Overlay>
        {/* <LayersControl.Overlay name="Wifi HotSpots">
          <GeoJSON data={wifi} onEachFeature={wifiFeature} pointToLayer={wifipoint} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Murals">
          <GeoJSON data={mural} onEachFeature={muralFeature} pointToLayer={muralpoint}/>
        </LayersControl.Overlay> */}
      </LayersControl>
    </MapContainer>
  );
}

export default Main;
