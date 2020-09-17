import React from "react";
import "./Map.style.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

function MapCompo({ place }) {
  const position = [27.505, -4.09];
  return (
    <div className="map">
      <LeafletMap center={place.coordinates} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
    </div>
  );
}

export default MapCompo;
