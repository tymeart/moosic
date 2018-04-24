import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <div className="Browse">
        <nav>
          <ul>
            <li>Featured</li>
            <li>Genres & Moods</li>
            <li>New Releases</li>
            <li>Discover</li>
          </ul>
        </nav>
        <h2>Genres & Moods</h2>
        <ul className="tilelist">
          {this.props.state.categories.map(item => {
            return (
              <li
                className="tile"
                key={item.name}
              >
                <img
                  className="thumbnail"
                  alt={`Thumbnail for ${item.name} category`}
                  src={`${item.icons[0].url}`} />
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
