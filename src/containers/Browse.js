import React, { Component } from 'react';
import { connect } from 'react-redux';

class Browse extends Component {
  componentWillMount() {
    // let categoriesList;
    fetch('https://api.spotify.com/v1/browse/categories',
      {
        headers: {
          'Authorization': `Bearer ${this.props.state.accessToken}`
        }
      })
    .then(res => res.json())
    .then(data => console.log(data));

  }

  render() {
    return (
      <div>
        <ul>
          {/* {categoriesList} */}
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

export default connect(mapStateToProps)(Browse);
