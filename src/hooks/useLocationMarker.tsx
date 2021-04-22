import { useEffect } from "react";
import Overlay from "ol/Overlay";
import OlMap from "ol/Map";
import { fromLonLat } from "ol/proj";
import createEmptyCricle from "../util/htmlElement";

function useLocationMarker(
  map: OlMap | null,
  locations: Array<Array<number>>
): void {
  useEffect(() => {
    locations.forEach((location) => {
      const [lat, lng] = location;

      map?.addOverlay(
        new Overlay({
          position: fromLonLat([lng, lat]),
          element: createEmptyCricle(),
        })
      );
    });
  }, [map, locations]);
}

export default useLocationMarker;
