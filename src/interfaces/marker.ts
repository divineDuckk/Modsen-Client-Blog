import { LatLngExpression } from "leaflet";

export interface Marker {
  text: string;
  id: string;
  position: LatLngExpression;
}
