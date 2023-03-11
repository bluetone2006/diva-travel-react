
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
  return (
    <Router>
      <Switch>
        <Route path="/destination-page">
          <DestinationPage
            logo="/img/logo-1@1x.png"
            title="DESTINATIONS:"
            africa="Africa"
            place="America"
            name="Asia"
            europe="Europe"
          />
        </Route>
        <Route path="/splash-screen">
          <SplashScreen place="Home" logo="/img/logo@1x.png" navigation="Navigation" />
        </Route>
        <Route path="/loading-page">
          <LoadingPage>Loading…</LoadingPage>
        </Route>
        <Route path="/:path(|iphone-14-pro-max-3)">
          <IPhone14ProMax3 place="Home" logo="/img/logo@1x.png" navigation="Navigation" />
        </Route>
        <Route path="/iphone-14-pro-max-1">
          <IPhone14ProMax1 logo="/img/logo-1@1x.png" title="Destinations" />
        </Route>
        <Route path="/iphone-14-pro-max-4">
          <IPhone14ProMax4>Loading…</IPhone14ProMax4>
        </Route>
        <Route path="/iphone-14-pro-max-2">
          <IPhone14ProMax2
            logo="/img/logo-1@1x.png"
            title="DESTINATIONS:"
            africa="Africa"
            place="America"
            name="Asia"
            europe="Europe"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
