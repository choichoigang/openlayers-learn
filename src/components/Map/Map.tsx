import React, { useEffect, useState } from "react";
import styled from "styled-components";

import OlMap from "ol/Map";
import OlView from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

import useLocationMarker from "../../hooks/useLocationMarker";

const MapContainer = styled.div`
  min-width: 100%;
  height: 100vh;
`;

type IMap = {
  centerLng: number;
  centerLat: number;
  locations: Array<Array<number>>;
};

function Map({ centerLng, centerLat, locations }: IMap): JSX.Element {
  const [map, setMap] = useState<OlMap | null>(null);

  useEffect(() => {
    const initMap = new OlMap({
      target: "map",
      controls: [],
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new OlView({
        center: fromLonLat([centerLng, centerLat]),
        zoom: 16,
      }),
    });

    setMap(initMap);
  }, [centerLng, centerLat, locations]);

  useLocationMarker(map, locations);

  return <MapContainer id="map" />;
}

export default Map;
