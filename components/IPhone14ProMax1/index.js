import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PulpdisplayBoldWhite28px } from "../../styledMixins";
import "./IPhone14ProMax1.css";
function IPhone14ProMax1(props) {
  const {
    logo,
    title
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "container-center-horizontal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iphone-14-pro-max-1 screen"
  }, /*#__PURE__*/React.createElement(Logo, {
    src: logo,
    alt: "logo"
  }), /*#__PURE__*/React.createElement(OverlapGroup, null, /*#__PURE__*/React.createElement(Link, {
    to: "/loading-page"
  }, /*#__PURE__*/React.createElement(Rectangle2, null)), /*#__PURE__*/React.createElement(Title, null, title))));
}
const Logo = styled.img`
  width: 289px;
  height: 50px;
  object-fit: cover;
`;
const OverlapGroup = styled.div`
  width: 175px;
  height: 72px;
  position: relative;
  align-self: center;
  margin-left: 1px;
`;
const Rectangle2 = styled.div`
  position: absolute;
  width: 175px;
  height: 72px;
  top: 0;
  left: 0;
  background-color: #707070;
  cursor: pointer;
`;
const Title = styled.h1`
  ${PulpdisplayBoldWhite28px}
  position: absolute;
  top: 25px;
  left: 5px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;
export default IPhone14ProMax1;
