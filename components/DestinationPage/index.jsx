import React from "react";
import styled from "styled-components";
import { PulpdisplayBoldWhite28px } from "../../styledMixins";
import "./DestinationPage.css";

function DestinationPage(props) {
  const { logo, title, africa, place, name, europe } = props;

  return (
    <div className="container-center-horizontal">
      <div className="destination-page screen">
        <Logo src={logo} alt="logo" />
        <OverlapGroup2>
          <Title>{title}</Title>
        </OverlapGroup2>
        <OverlapGroup4>
          <a href="http://divatravelandtours.com/destinations/africa/" target="_blank">
            <Rectangle4></Rectangle4>
          </a>
          <Africa>{africa}</Africa>
        </OverlapGroup4>
        <OverlapGroup1>
          <a href="http://divatravelandtours.com/destinations/america/" target="_blank">
            <Rectangle5></Rectangle5>
          </a>
          <Place>{place}</Place>
        </OverlapGroup1>
        <OverlapGroup>
          <a href="http://divatravelandtours.com/destinations/asia/" target="_blank">
            <Rectangle6></Rectangle6>
          </a>
          <Name>{name}</Name>
        </OverlapGroup>
        <OverlapGroup>
          <a href="http://divatravelandtours.com/destinations/asia/" target="_blank">
            <Rectangle7></Rectangle7>
          </a>
          <Europe>{europe}</Europe>
        </OverlapGroup>
      </div>
    </div>
  );
}

const Logo = styled.img`
  width: 289px;
  height: 50px;
  margin-left: 1px;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  height: 77px;
  margin-top: 10px;
  display: flex;
  padding: 22px 110px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 430px;
  background-color: var(--sea-serpent);
`;

const Title = styled.h1`
  ${PulpdisplayBoldWhite28px}
  min-height: 30px;
  min-width: 207px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  width: 430px;
  height: 77px;
  position: relative;
  margin-top: 75px;
`;

const Rectangle4 = styled.div`
  position: absolute;
  width: 430px;
  height: 77px;
  top: 0;
  left: 0;
  background-color: var(--french-rose);
  cursor: pointer;
`;

const Africa = styled.div`
  ${PulpdisplayBoldWhite28px}
  position: absolute;
  top: 25px;
  left: 176px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 430px;
  height: 77px;
  position: relative;
  margin-top: 77px;
`;

const Rectangle5 = styled.div`
  position: absolute;
  width: 430px;
  height: 77px;
  top: 0;
  left: 0;
  background-color: var(--portica);
  cursor: pointer;
`;

const Place = styled.div`
  ${PulpdisplayBoldWhite28px}
  position: absolute;
  top: 25px;
  left: 161px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 430px;
  height: 77px;
  position: relative;
  margin-top: 73px;
`;

const Rectangle6 = styled.div`
  position: absolute;
  width: 430px;
  height: 77px;
  top: 0;
  left: 0;
  background-color: var(--downy);
  cursor: pointer;
`;

const Name = styled.div`
  ${PulpdisplayBoldWhite28px}
  position: absolute;
  top: 25px;
  left: 187px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Rectangle7 = styled.div`
  position: absolute;
  width: 430px;
  height: 77px;
  top: 0;
  left: 0;
  background-color: var(--razzle-dazzle-rose);
  cursor: pointer;
`;

const Europe = styled.div`
  ${PulpdisplayBoldWhite28px}
  position: absolute;
  top: 25px;
  left: 170px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

export default DestinationPage;
