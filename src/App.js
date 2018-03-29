import React, { Component } from 'react';
import './App.css';
import Player from './Player';
import Playlist from './Playlist';
import Login from './Login';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from './hidden';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songTitle: '',
      isLoggedIn: false
    }
  }

  handleSongClick = (e) => {
    console.log(e.target.innerHTML);
  }

  getAuthorized = () => {
    const url = window.location.href;
    const authCode = url.split('code=')[1];

    fetch('https://accounts.spotify.com/api/token',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        method: 'POST',
        body: {
          grant_type: 'authorization_code',
          code: authCode,
          redirect_uri: REDIRECT_URI,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET
        }
      })
      .then(res => console.log(res));
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoggedIn && <Login />}
        {this.state.isLoggedIn &&
          (
          <div>
            <header className="App-header">
              <h1 className="App-title">a moosic player</h1>
            </header>
            <main>
              <Player />
              <Playlist
                onSongClick={this.handleSongClick}
              />
            </main>
          </div>
          )
        }
      </div>
    );
  }
}

export default App;
