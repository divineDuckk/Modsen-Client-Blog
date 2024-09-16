import L, { LatLngExpression } from "leaflet";

import { Marker } from "@/interfaces/marker";

const iconUrl = "/marker-icon.png";
const iconShadowUrl = "/marker-shadow.png";

export const customIcon = new L.Icon({
  iconUrl: iconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: iconShadowUrl,
  shadowSize: [41, 41],
});
export const CENTER: LatLngExpression = [52.16641323, 21.21769407];

export const MARKERS: Marker[] = [
  { position: [52.2296756, 21.0122287], text: "Warsaw, Poland", id: "1" },
  { position: [55.191026, 30.203056], text: "Vitebsk, Belarus", id: "2" },
  { position: [50.0755381, 14.4378005], text: "Prague, Czech", id: "3" },
];
export const ZOOM = 6;
