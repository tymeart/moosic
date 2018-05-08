import React, { Component } from 'react';
import '../App.css';
import Login from '../components/Login';
import MainContent from './MainContent';
import Middle from './Middle';
import Browse from './Browse';
import Player from './Player';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

const routes = [
  {
    path: "/",
    component: MainContent
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/middle",
    component: Middle
  },
  {
    path: "/browse",
    component: Browse,
    // routes: [
    //   {
    //     path: "/browse/featured",
    //     component: Featured
    //   },
    //   {
    //     path: "/browse/genres",
    //     component: Genres
    //   },
    //   {
    //     path: "/browse/newreleases",
    //     component: NewReleases
    //   },
    //   {
    //     path: "/browse/discover",
    //     component: Discover
    //   }
    // ]
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (<route.component {...props} routes={route.routes} />)}
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-top">
            <nav>
              <h1 className="App-title">a moosic player</h1>
              <NavLink to="/search">Search</NavLink>
              <NavLink to="/browse">Home</NavLink>
              <NavLink to="/collection">Your Music</NavLink>
              <h2>Recently Played</h2>
              <ul>
                <li>Unimagined</li>
                <li>Ground Dweller</li>
                <li>Before I Cave In</li>
              </ul>
            </nav>

            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          </div>
          <Player />
        </div>
      </Router>
    );
  }
}

export default App;
