import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { CLIENT_ID, REDIRECT_URI } from './hidden';
// import authStatus from './App';

class Login extends Component {
  // state = {
  //   redirectToReferrer: false
  // }
  //
  // login = () => {
  //   authStatus.authenticate(
  //     this.setState(() => {redirectToReferrer: true})
  //   );
  // }

  render() {
    // const { from } = this.props.location.state || { from: {pathName: "/"} }
    // const { redirectToReferrer } = this.state;
    // if (redirectToReferrer === true) {
    //   <Redirect to={from} />
    // }

    return (
      <div>
        <h1>Welcome to Moosic</h1>
        <p>To continue, please log in to Spotify</p>
        <a href={`https://accounts.spotify.com/authorize/?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}`}>
        Log In
        </a>
      </div>
    );
  }
}

export default Login;
