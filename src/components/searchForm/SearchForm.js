import React, { Component } from "react";
import s from "./searchForm.module.css";

export default class SearchForm extends Component {
  state = {
    searchQuery: "",
  };

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  };

  reset = () => {
    this.setState({
      searchQuery: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              className={s.input}
              value={this.state.searchQuery}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}
