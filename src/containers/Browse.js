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
        this.props.saveCategories(list);
      });
    }
  }

  render() {
    return (
        <ul>
          {this.props.state.categories.map(item => <li key={item.name}>{item.name}</li>)}
        </ul>
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
