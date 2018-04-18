import React, { Component } from 'react';

class Browse extends Component {
  componentWillMount() {
    // let categoriesList;
    console.log(this.props.store.getState())
    fetch('https://api.spotify.com/v1/browse/categories',
      {
        headers: {
          'Authorization': `Bearer ${this.props.store.getState().accessToken}`
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

export default Browse;
