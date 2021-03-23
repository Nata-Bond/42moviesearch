import React, { Component } from "react";
import movieApi from "../../services/movieApi";
import s from "./review.module.css";
import Loader from "../loader/Loader";

export default class Reviews extends Component {
  state = {
    review: [],
    isLoading: false,
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    this.setState({ isLoading: true });
    movieApi
      .getMovieReview(id)
      .then((reviews) => this.setState({ review: reviews }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { review, isLoading } = this.state;

    return (
      <>
        {isLoading && <Loader />}
        {review.length === 0 && !isLoading && (
          <p> there are no reviews for this movie</p>
        )}
        {review && (
          <ul className={s.reviews}>
            {review.map((el) => (
              <li key={el.id}>
                <h5>Author: {el.author}</h5>
                <p className={s.text}>{el.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
