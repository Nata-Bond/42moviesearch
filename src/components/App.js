import React, { Component, Suspense, lazy } from "react";
import Navigation from "./Navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import routes from "../routes";

const Home = lazy(() =>
  import("../pages/home/Home" /* webpackChunkName: "home" */)
);
const Movies = lazy(() =>
  import("../pages/movies/Movies" /* webpackChunkName: "movies" */)
);
const MovieDetails = lazy(() =>
  import(
    "../pages/movieDetails/MovieDetails" /* webpackChunkName: "movieDetails" */
  )
);

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback="Loading...">
          <Switch>
            <Route exact path={routes.home} component={Home}></Route>
            <Route exact path={routes.movies} component={Movies}></Route>
            <Route path={routes.movieDetails} component={MovieDetails}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Suspense>
      </>
    );
  }
}
