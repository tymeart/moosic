import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logIn } from '../actions/index';

class Middle extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    let accessToken = '';
    if (window.location.hash) {
      const url = window.location.hash;
      accessToken = url.split('&')[0].split('=')[1];

      this.props.logIn(accessToken);
      this.context.router.history.push('/');
    } else {
      console.log('ACCESS DENIED');
    }
  }

  render() {
    return (
      <div>
        The intermediary component!
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (accessToken) => {
      dispatch(logIn(accessToken))
    }
  };
};

export default connect(null, mapDispatchToProps)(Middle);
