import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import movieApi from "../../services/movieApi";
import s from "./movieDetails.module.css";
import routes from "../../routes";
import Cast from "../../components/cast/Cast";
import Reviews from "../../components/reviews/Reviews";
import NotFound from "../notFound/NotFound";

export default class MovieDetails extends Component {
  state = {
    movie: [],
    isError: false,
  };

  componentDidMount() {
    movieApi.getMovieById(this.props.match.params.movieId).then((movie) => {
      if (movie.length !== 0) {
        this.setState({ movie });
      } else {
        this.setState({ isError: true });
      }
    });
  }
  userScore = (el) => {
    return Math.round(Number(el) * 10);
  };

  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    return history.push(routes.movies);
    // history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { movie, isError } = this.state;
    const { match } = this.props;

    return (
      <>
        {isError && <NotFound />}
        {movie.length !== 0 && (
          <div className={s.section}>
            <hr />
            <button type="button" onClick={this.handleGoBack}>
              &larr; Go back
            </button>
            <div className={s.general}>
              <div>
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className={s.overview}>
                <h2>{movie.title}</h2>
                <p>User score: {this.userScore(movie.vote_average)}% </p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h4>Genres</h4>
                <p>
                  {movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </p>
              </div>
            </div>
            <hr />
            <div className={s.details}>
              <h4>Additional information</h4>
              <ul>
                <li>
                  <Link to={`${match.url}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`${match.url}/reviews`}>Reviews</Link>
                </li>
              </ul>
              <Switch>
                <Route path={routes.cast} component={Cast}></Route>
                <Route path={routes.reviews} component={Reviews}></Route>
              </Switch>
            </div>
          </div>
        )}
      </>
    );
  }
}
