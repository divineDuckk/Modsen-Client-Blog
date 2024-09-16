"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { CENTER, MARKERS, ZOOM } from "./constants";

import "leaflet/dist/leaflet.css";

export const Map = () => {
  return (
    <MapContainer
      center={CENTER}
      zoom={ZOOM}
      scrollWheelZoom={true}
      className="w-full h-600"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {MARKERS.map(({ position, text, id }) => (
        <Marker position={position} key={id}>
          <Popup>{text}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
