import React from "react";
import styled from "styled-components";
import LocationFormItem from "./LocationFormItem";

const LocationFormWrapper = styled.div`
  width: 100%;
  height: 141px;
`;

type ILocationForm = {
  locations: Array<Array<number>>;
};

function LocationForm({ locations }: ILocationForm): JSX.Element {
  return (
    <LocationFormWrapper>
      {locations.map((location, idx) => {
        const [lat, lng] = location;
        return (
          <LocationFormItem
            key={`Location ${idx + 1}`}
            title={`Location ${idx + 1}`}
            lat={lat}
            lng={lng}
          />
        );
      })}
    </LocationFormWrapper>
  );
}

export default LocationForm;
