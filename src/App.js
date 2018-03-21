import React, { Component } from 'react';
import './App.css';
import Player from './Player';
import Playlist from './Playlist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">a moosic player</h1>
        </header>
        <main>
          <Player />
          <Playlist />
        </main>
      </div>
    );
  }
}

export default App;
