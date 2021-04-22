import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { ReactComponent as SourceIcon } from "../../../assets/source.svg";
import { ReactComponent as MapIcon } from "../../../assets/map.svg";
import { ReactComponent as CombinedShapeIcon } from "../../../assets/combined_shape.svg";

const SELECT_ICON_LIST = [SourceIcon, MapIcon, CombinedShapeIcon];

type ISelectTab = {
  currentTab: number;
  onSideTabClick: (nextIdx: number) => void;
};

const SelectTabWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 60px;
  height: 100%;

  box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1),
    0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`;

const SelectTabItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  border-radius: 5px;
  margin: 8px;

  background-color: ${({ isActive }) => isActive && "#1f4782"};
`;

function SelectTab({ currentTab, onSideTabClick }: ISelectTab): JSX.Element {
  return (
    <SelectTabWrapper>
      {SELECT_ICON_LIST.map((IconComponent, idx) => {
        const isActive = idx === currentTab;

        return (
          <SelectTabItem
            key={uuidv4()}
            isActive={isActive}
            onClick={() => {
              onSideTabClick(idx);
            }}
          >
            <IconComponent fill={isActive ? "#FFFFFF" : "#C7C7C7"} />
          </SelectTabItem>
        );
      })}
    </SelectTabWrapper>
  );
}

export default SelectTab;
