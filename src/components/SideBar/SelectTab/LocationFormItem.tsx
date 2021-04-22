import React from "react";
import styled from "styled-components";
import { ReactComponent as FlagIcon } from "../../../assets/flag.svg";

type ILocationFormItem = {
  title: string;
  lat: number;
  lng: number;
};

const LocationFormItemWrapper = styled.div`
  width: 100%;
  height: 141px;
  padding: 10px 24px;
`;

const LocationHeader = styled.div`
  display: flex;
  align-items: center;

  height: 24px;
  margin-bottom: 22px;

  .location_title {
    font-size: 15px;
    margin-left: 10px;
  }
`;

const LocationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 184px;
  margin-bottom: 3px;

  .box_title {
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;

    color: #4d4c4c;
  }

  .location_form {
    display: flex;
    align-items: center;

    width: 147px;
    height: 33px;

    border: 0.5px solid #c7c7c7;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 6px 9px;
  }

  .location_value {
    width: 100%;

    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    color: #2b4877;
  }
`;

const Division = styled.div`
  height: 1px;
  background-color: #f4f4f4;
  width: 100%;
`;

function LocationFormItem({ title, lat, lng }: ILocationFormItem): JSX.Element {
  return (
    <>
      <LocationFormItemWrapper>
        <LocationHeader>
          <FlagIcon />
          <div className="location_title">{title}</div>
        </LocationHeader>

        <LocationBox>
          <p className="box_title">Lat</p>
          <div className="location_form">
            <p className="location_value">{lat}</p>
          </div>
        </LocationBox>
        <LocationBox>
          <p className="box_title">Long</p>
          <div className="location_form">
            <p className="location_value">{lng}</p>
          </div>
        </LocationBox>
      </LocationFormItemWrapper>
      <Division />
    </>
  );
}

export default LocationFormItem;
