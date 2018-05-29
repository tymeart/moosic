import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import BrowseGenres from '../components/BrowseGenres';
import BrowseFeatured from '../components/BrowseFeatured';
import BrowseNewReleases from '../components/BrowseNewReleases';
import { saveGenres, saveFeaturedPlaylists, saveNewReleases } from '../actions/index';
import '../styles/Browse.css';

class Browse extends Component {
  componentDidMount() {
    if (this.props.state.genres.length === 0) {
      fetch('https://api.spotify.com/v1/browse/categories',
      {
        headers: {
          'Authorization': `Bearer ${this.props.state.accessToken}`
        }
      })
      .then(res => res.json())
      .then(data => {
        this.props.saveGenres(data.categories.items);
      });
    }

    if (this.props.state.featuredPlaylists.length === 0) {
      fetch('https://api.spotify.com/v1/browse/featured-playlists',
      {
        headers: {
          'Authorization': `Bearer ${this.props.state.accessToken}`
        }
      })
      .then(res => res.json())
      .then(data => {
        this.props.saveFeaturedPlaylists(data.playlists.items);
      });
    }

    if (this.props.state.newReleases.length === 0) {
      fetch('https://api.spotify.com/v1/browse/new-releases',
      {
        headers: {
          'Authorization': `Bearer ${this.props.state.accessToken}`
        }
      })
      .then(res => res.json())
      .then(data => {
        this.props.saveNewReleases(data.albums.items);
      });
    }
  }

  render() {
    return (
      <div className="Browse App-main">
        <nav className="category-nav">
          <ul>
            <li><NavLink to="/browse/featured" activeClassName="selectedCategory">Featured</NavLink></li>
            <li><NavLink to="/browse/genres" activeClassName="selectedCategory">Genres & Moods</NavLink></li>
            <li><NavLink to="/browse/newreleases" activeClassName="selectedCategory">New Releases</NavLink></li>
          </ul>
        </nav>

        {this.props.match.url === this.props.location.pathname && 
          <Redirect to={'/browse/genres'} />}

        <Switch>
          <PrivateRoute
            path="/browse/featured"
            isLoggedIn={this.props.state.isLoggedIn}
            playlists={this.props.state.featuredPlaylists}
            component={BrowseFeatured}
          />
          <PrivateRoute
            path="/browse/genres"
            isLoggedIn={this.props.state.isLoggedIn}
            categories={this.props.state.genres}
            component={BrowseGenres}
          />
          <PrivateRoute
            path="/browse/newreleases"
            isLoggedIn={this.props.state.isLoggedIn}
            newReleases={this.props.state.newReleases}
            component={BrowseNewReleases}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveGenres: (genres) => {
      dispatch(saveGenres(genres))
    },
    saveFeaturedPlaylists: (playlists) => {
      dispatch(saveFeaturedPlaylists(playlists))
    },
    saveNewReleases: (newreleases) => {
      dispatch(saveNewReleases(newreleases))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
