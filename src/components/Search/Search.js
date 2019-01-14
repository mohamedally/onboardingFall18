import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchString: ""
    };
  }

  onChange = e => {
    this.setState({ searchString: e.target.value });
    this.props.searchHandler(e.target.value);
  };
  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          name="search"
          value={this.state.searchString}
          onChange={this.onChange}
          placeholder="Search"
        />
      </div>
    );
  }
}

export default Search;
