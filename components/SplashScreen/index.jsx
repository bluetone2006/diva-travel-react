import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PulpdisplayBoldWhite28px } from "../../styledMixins";
import "./SplashScreen.css";

function SplashScreen(props) {
  const { place, logo, navigation } = props;

  return (
    <div className="container-center-horizontal">
      <div className="splash-screen screen" onclick="window.open('loading-page.html', '_self');">
        <Place>{place}</Place>
        <OverlapGroup>
          <Logo src={logo} alt="logo" />
          <Navigation>{navigation}</Navigation>
        </OverlapGroup>
      </div>
    </div>
  );
}

const Place = styled.h1`
  ${PulpdisplayBoldWhite28px}
  min-height: 30px;
  align-self: center;
  margin-left: 12px;
  min-width: 78px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 341px;
  height: 81px;
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  width: 341px;
  height: 59px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Navigation = styled.div`
  ${PulpdisplayBoldWhite28px}
  position: absolute;
  top: 51px;
  left: 102px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

export default SplashScreen;
