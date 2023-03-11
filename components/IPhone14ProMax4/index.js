import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PulpdisplayBoldWhite28px } from "../../styledMixins";
import "./IPhone14ProMax4.css";
function IPhone14ProMax4(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "container-center-horizontal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iphone-14-pro-max-4 screen"
  }, /*#__PURE__*/React.createElement(OverlapGroup, null, /*#__PURE__*/React.createElement(Link, {
    to: "/destination-page"
  }, /*#__PURE__*/React.createElement(Rectangle13, null)), /*#__PURE__*/React.createElement(Loading, null, children))));
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
