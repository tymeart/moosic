import React, { Component } from 'react';
import '../styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div className="Search">
        <form className="searchbar">
          <label htmlFor="search">Search for an Artist, Song, Album, or Playlist</label>
          <input id="search" placeholder="Start typing..." type="text" />
        </form>
        <div className="results">

        </div>
      </div>
    );
  }
}

export default Search;
