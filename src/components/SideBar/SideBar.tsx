import React, { useState } from "react";
import styled from "styled-components";
import SelectTab from "./SelectTab/SelectTab";

import LocationForm from "./SelectTab/LocationForm";
import Measure from "./SelectTab/Measure";
import Layer from "./SelectTab/Layer";

enum SideTabRoute {
  LOCATION_FORM,
  LAYER,
  MEASURE,
}

type ISideBar = {
  locations: Array<Array<number>>;
};

const SideBarWrapper = styled.div`
  display: flex;
  min-width: 366px;
  height: 100vh;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

function SideBar({ locations }: ISideBar): JSX.Element {
  const [tabIdx, setTabIdx] = useState(0);
  const { LOCATION_FORM, MEASURE, LAYER } = SideTabRoute;

  function onSideTabClick(nextIdx: number) {
    setTabIdx(nextIdx);
  }

  return (
    <SideBarWrapper>
      <SelectTab currentTab={tabIdx} onSideTabClick={onSideTabClick} />

      <ContentContainer>
        {LOCATION_FORM === tabIdx && <LocationForm locations={locations} />}
        {LAYER === tabIdx && <Layer />}
        {MEASURE === tabIdx && <Measure />}
      </ContentContainer>
    </SideBarWrapper>
  );
}

export default SideBar;
