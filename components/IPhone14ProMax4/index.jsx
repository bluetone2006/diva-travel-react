import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PulpdisplayBoldWhite28px } from "../../styledMixins";
import "./IPhone14ProMax4.css";

function IPhone14ProMax4(props) {
  const { children } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-14-pro-max-4 screen">
        <OverlapGroup>
          <Link to="/destination-page">
            <Rectangle13></Rectangle13>
          </Link>
          <Loading>{children}</Loading>
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 430px;
  height: 932px;
  position: relative;
`;

const Rectangle13 = styled.div`
  position: absolute;
  width: 430px;
  height: 932px;
  top: 0;
  left: 0;
  background-color: var(--sea-serpent);
  cursor: pointer;
`;

const Loading = styled.h1`
  ${PulpdisplayBoldWhite28px}
  position: absolute;
  top: 452px;
  left: 154px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

export default IPhone14ProMax4;
