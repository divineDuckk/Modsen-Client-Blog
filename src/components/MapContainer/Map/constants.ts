import L, { LatLngExpression } from "leaflet";

import { Marker } from "@/interfaces/marker";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
export const defaultIcon = new L.Icon.Default();

export const CENTER: LatLngExpression = [52.16641323, 21.21769407];

export const MARKERS: Marker[] = [
  { position: [52.2296756, 21.0122287], text: "Warsaw, Poland", id: "1" },
  { position: [55.191026, 30.203056], text: "Vitebsk, Belarus", id: "2" },
  { position: [50.0755381, 14.4378005], text: "Prague, Czech", id: "3" },
];
export const ZOOM = 6;
