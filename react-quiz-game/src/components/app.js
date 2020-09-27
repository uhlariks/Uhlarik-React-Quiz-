import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "../pages/about-page";
import NewGamePage from "../pages/new-game-page";
import PlayPage from "../pages/play-page";
import Footer from "./footer";
import Header from "./header";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Switch>
        <Route path="/play">
          <PlayPage></PlayPage>
        </Route>

        <Route path="/about">
          <AboutPage></AboutPage>
        </Route>

        <Route path="/">
          <NewGamePage></NewGamePage>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
