import React, { Component } from "react";
import movieApi from "../../services/movieApi";
import s from "./cast.module.css";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    movieApi.getMovieCast(id).then((cast) => this.setState({ cast }));
  }

  render() {
    const { cast } = this.state;
    return (
      cast.length > 0 && (
        <ul>
          {cast.map((el) => (
            <li key={el.id}>
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                alt={el.name}
              />
              <h4>{el.name}</h4>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      )
    );
  }
}
