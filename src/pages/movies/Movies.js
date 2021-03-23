import React, { Component } from "react";
import SearchForm from "../../components/searchForm/SearchForm";
import movieApi from "../../services/movieApi";
import MovieList from "../../components/movieList/MovieList";
import getQueryParams from "../../utils/getQueryParams";
import Loader from "../../components/loader/Loader";

export default class Movies extends Component {
  state = {
    searchMovies: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      movieApi
        .getMovieBySearchForm(query)
        .then((movies) => this.setState({ searchMovies: movies }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery && !!nextQuery) {
      movieApi
        .getMovieBySearchForm(nextQuery)
        .then((movies) => this.setState({ searchMovies: movies }));
    }
  }

  searchMovie = (searchQuery) => {
    const { history, location } = this.props;
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  render() {
    const { searchMovies, isLoading } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.searchMovie} />
        {searchMovies.length > 0 && <MovieList movies={searchMovies} />}
      </>
    );
  }
}
