import React from "react";
import styled from "styled-components";
import SideBar from "../SideBar/SideBar";
import useFetch from "../../hooks/useFetch";
import Map from "../Map/Map";

import { IResLocations } from "../../api/locations";

const MOCK_LOCATIONS = [
  [37.56755685, 126.97328373],
  [37.56722338, 126.98351298],
  [37.56269872, 126.97860143],
];

const MarkerMapWrapper = styled.div`
  display: flex;
  width: 100%;
`;

function MarkerMap(): JSX.Element {
  // const { loading, errStatus, data } = useFetch<IResLocations>(LOCATIONS_API);

  return (
    <MarkerMapWrapper>
      {/* {errStatus && <div>Error</div>}
      {loading && <div>loading</div>} */}
      {MOCK_LOCATIONS && (
        <>
          <SideBar locations={MOCK_LOCATIONS} />
          <Map
            centerLng={126.9779451}
            centerLat={37.5662952}
            locations={MOCK_LOCATIONS}
          />
        </>
      )}
    </MarkerMapWrapper>
  );
}

export default MarkerMap;
