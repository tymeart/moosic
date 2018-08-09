import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../styles/Browse.css';

class GenrePlaylists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: []
    };
  }  

  componentDidMount() {
    fetch(`https://api.spotify.com/v1/browse/categories/${this.props.match.params.id}/playlists`,
      {
        headers: {
          'Authorization': `Bearer ${this.props.state.accessToken}`
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({playlists: data.playlists.items});
      });
  }

  render() {
    return (
      <div className="Browse App-main">
        <h2>{this.props.location.state.genreName}</h2>
        <ul className="tilelist">
          {this.state.playlists.map(playlist => {
            return (
              <li
                className="tile"
                key={playlist.id}
              >
                <div
                  className="thumbnail"
                  onClick={() => { this.props.history.push(`/playlist/genres/${playlist.id}`) }}
                >
                  <img
                    alt={`Thumbnail for ${playlist.name} playlist`}
                    src={`${playlist.images[0].url}`}
                  />
                  <div className="overlay"></div>
                </div>
                <div className="title">{playlist.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    state: state
  }
};

export default withRouter(connect(mapStateToProps)(GenrePlaylists));