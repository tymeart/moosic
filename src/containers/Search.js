import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
import '../styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      results: null
    }
  }

  handleInput = (e) => {
    this.setState({input: e.target.value});
  }

  replaceSpaces(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ' ') {
        arr.splice(i, 1, '%20');
      }
    }
    return arr.join('');
  }

  sendQuery = (e) => {
    e.preventDefault();
    const query = this.replaceSpaces(this.state.input);
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=album,artist,playlist,track`,
      {
        headers: {
          'Authorization': `Bearer ${this.props.accessToken}`
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({results: data})
      });
  }

  render() {
    return (
      <div className="Search">
        <form className="searchbar" onSubmit={this.sendQuery}>
          <label htmlFor="search">Search for an Artist, Song, Album, or Playlist</label>
          <input id="search" placeholder="Start typing..." type="text" onChange={this.handleInput}/>
        </form>
        
        <div className="results-container">
          {this.state.results !== null && 
            <SearchResults results={this.state.results} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accessToken: state.accessToken
  };
}

export default connect(mapStateToProps)(Search);
