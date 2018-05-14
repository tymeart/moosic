import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveCategories } from '../actions/index';

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
            <li><NavLink to="/browse/featured">Featured</NavLink></li>
            <li><NavLink to="/browse/podcasts">Podcasts</NavLink></li>
            <li><NavLink to="/browse/genres">Genres & Moods</NavLink></li>
            <li><NavLink to="/browse/newreleases">New Releases</NavLink></li>
            <li><NavLink to="/browse/discover">Discover</NavLink></li>
          </ul>
        </nav>
        <h2>Genres & Moods</h2>
        <ul className="tilelist">
          {this.props.state.categories.slice(1).map(item => {
            return (
              <li
                className="tile"
                key={item.name}
              >
                <img
                  className="thumbnail"
                  alt={`Thumbnail for ${item.name} category`}
                  src={`${item.icons[0].url}`}
                />
                {item.name}
              </li>
            );
          })}
        </ul>
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
