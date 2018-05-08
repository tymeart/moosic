import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
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
            {this.props.state.isLoggedIn && <Navbar />}

            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          </div>
          {this.props.state.isLoggedIn && <Player />}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(App);
