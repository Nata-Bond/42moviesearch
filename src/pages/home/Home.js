import React, { Component } from "react";
import movieApi from "../../services/movieApi";
import MovieList from "../../components/movieList/MovieList";

export default class Home extends Component {
  state = {
    trendMovies: [],
  };

  componentDidMount() {
    movieApi
      .getTrendingMovies()
      .then((movies) => this.setState({ trendMovies: movies }));
  }

  render() {
    const { trendMovies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <MovieList movies={trendMovies} />
      </>
    );
  }
}
