import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import BrowseResults from './BrowseResults';
import { saveCategories } from '../actions/index';
import '../styles/Browse.css';

class Browse extends Component {
  componentDidMount() {
    if (this.props.state.categories.length === 0) {
      fetch('https://api.spotify.com/v1/browse/categories',
      {
        headers: {
          'Authorization': `Bearer ${this.props.state.accessToken}`
        }
      })
      .then(res => res.json())
      .then(data => {
        let list = data.categories.items;
        console.log(list)
        this.props.saveCategories(list);
      });
    }
  }

  render() {
    return (
      <div className="Browse App-main">
        <nav className="category-nav">
          <ul>
            <li><NavLink to={`${this.props.match.url}/featured`} activeClassName="selectedCategory">Featured</NavLink></li>
            <li><NavLink to={`${this.props.match.url}/podcasts`} activeClassName="selectedCategory">Podcasts</NavLink></li>
            <li><NavLink to={`${this.props.match.url}/genres`} activeClassName="selectedCategory">Genres & Moods</NavLink></li>
            <li><NavLink to={`${this.props.match.url}/newreleases`} activeClassName="selectedCategory">New Releases</NavLink></li>
            <li><NavLink to={`${this.props.match.url}/discover`} activeClassName="selectedCategory">Discover</NavLink></li>
          </ul>
        </nav>

        <PrivateRoute
          path={`${this.props.match.url}/:category`}
          isLoggedIn={this.props.state.isLoggedIn}
          component={BrowseResults}
        />

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
    saveCategories: (categories) => {
      dispatch(saveCategories(categories))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
