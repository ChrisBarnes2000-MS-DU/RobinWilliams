import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./Routes";
import Navigation from "./Navigation";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "video-react/dist/video-react.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { NotFoundPage, RobinWilliamsPage, PBS_VideosPage, MyCarousel, WorkCitedPage } from "./Pages";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas, faCheckSquare, faCoffee, faHome, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas, faCheckSquare, faCoffee, faHome, faExternalLinkAlt);


function App() {
  return (
    <Router>
      <div className="site-content">
        <Switch>
          <Route exact path={ROUTES.HOME} component={RobinWilliamsPage} />
          <Route exact path={ROUTES.PBS_VIDEOS} component={PBS_VideosPage} />
          <Route exact path={ROUTES.IMG_CAROUSEL} component={MyCarousel} />
          <Route exact path={ROUTES.WORK_CITED} component={WorkCitedPage} />
          <Route path={ROUTES.NOT_FOUND} component={NotFoundPage} />
        </Switch>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
