import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DestinationPage from "./components/DestinationPage";
import SplashScreen from "./components/SplashScreen";
import LoadingPage from "./components/LoadingPage";
import IPhone14ProMax3 from "./components/IPhone14ProMax3";
import IPhone14ProMax1 from "./components/IPhone14ProMax1";
import IPhone14ProMax4 from "./components/IPhone14ProMax4";
import IPhone14ProMax2 from "./components/IPhone14ProMax2";
function App() {
  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/destination-page"
  }, /*#__PURE__*/React.createElement(DestinationPage, {
    logo: "/img/logo-1@1x.png",
    title: "DESTINATIONS:",
    africa: "Africa",
    place: "America",
    name: "Asia",
    europe: "Europe"
  })), /*#__PURE__*/React.createElement(Route, {
    path: "/splash-screen"
  }, /*#__PURE__*/React.createElement(SplashScreen, {
    place: "Home",
    logo: "/img/logo@1x.png",
    navigation: "Navigation"
  })), /*#__PURE__*/React.createElement(Route, {
    path: "/loading-page"
  }, /*#__PURE__*/React.createElement(LoadingPage, null, "Loading\u2026")), /*#__PURE__*/React.createElement(Route, {
    path: "/:path(|iphone-14-pro-max-3)"
  }, /*#__PURE__*/React.createElement(IPhone14ProMax3, {
    place: "Home",
    logo: "/img/logo@1x.png",
    navigation: "Navigation"
  })), /*#__PURE__*/React.createElement(Route, {
    path: "/iphone-14-pro-max-1"
  }, /*#__PURE__*/React.createElement(IPhone14ProMax1, {
    logo: "/img/logo-1@1x.png",
    title: "Destinations"
  })), /*#__PURE__*/React.createElement(Route, {
    path: "/iphone-14-pro-max-4"
  }, /*#__PURE__*/React.createElement(IPhone14ProMax4, null, "Loading\u2026")), /*#__PURE__*/React.createElement(Route, {
    path: "/iphone-14-pro-max-2"
  }, /*#__PURE__*/React.createElement(IPhone14ProMax2, {
    logo: "/img/logo-1@1x.png",
    title: "DESTINATIONS:",
    africa: "Africa",
    place: "America",
    name: "Asia",
    europe: "Europe"
  }))));
}
export default App;
