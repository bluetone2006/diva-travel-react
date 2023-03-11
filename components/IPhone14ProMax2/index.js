import React from "react";
import styled from "styled-components";
import { PulpdisplayBoldWhite28px } from "../../styledMixins";
import "./IPhone14ProMax2.css";
function IPhone14ProMax2(props) {
  const {
    logo,
    title,
    africa,
    place,
    name,
    europe
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "container-center-horizontal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iphone-14-pro-max-2 screen"
  }, /*#__PURE__*/React.createElement(Logo, {
    src: logo,
    alt: "logo"
  }), /*#__PURE__*/React.createElement(OverlapGroup, null, /*#__PURE__*/React.createElement(Title, null, title)), /*#__PURE__*/React.createElement(OverlapGroup2, null, /*#__PURE__*/React.createElement("a", {
    href: "http://divatravelandtours.com/destinations/africa/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Rectangle4, null)), /*#__PURE__*/React.createElement(Africa, null, africa)), /*#__PURE__*/React.createElement(OverlapGroup3, null, /*#__PURE__*/React.createElement("a", {
    href: "http://divatravelandtours.com/destinations/america/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Rectangle5, null)), /*#__PURE__*/React.createElement(Place, null, place)), /*#__PURE__*/React.createElement(OverlapGroup1, null, /*#__PURE__*/React.createElement("a", {
    href: "http://divatravelandtours.com/destinations/asia/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Rectangle6, null)), /*#__PURE__*/React.createElement(Name, null, name)), /*#__PURE__*/React.createElement(OverlapGroup1, null, /*#__PURE__*/React.createElement("a", {
    href: "http://divatravelandtours.com/destinations/asia/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Rectangle7, null)), /*#__PURE__*/React.createElement(Europe, null, europe))));
}
const Logo = styled.img`
  width: 289px;
  height: 50px;
  margin-left: 1px;
  object-fit: cover;
`;
const OverlapGroup = styled.div`
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
const OverlapGroup2 = styled.div`
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
const OverlapGroup3 = styled.div`
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
const OverlapGroup1 = styled.div`
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
export default IPhone14ProMax2;
