import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from '../actions/index';
import { FaSearch, FaHome, FaMusic } from 'react-icons/lib/fa';
import '../styles/Navbar.css';

class Navbar extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  logOutAndRedirect = () => {
    this.props.logOut();
    this.context.router.history.push('/login');
  }

  render() {  
    return (
      <nav className="Navbar">
        <div className="navbar-main">
          <h1 className="App-title">moosic</h1>
          <NavLink to="/search" activeClassName="selected"><FaSearch />Search</NavLink>
          <NavLink to="/browse" activeClassName="selected"><FaHome />Home</NavLink>
          <NavLink to="/collection" activeClassName="selected"><FaMusic />Your Music</NavLink>
          <h2>Recently Played</h2>
          <ul>
            <li>
              <div>Unimagined</div>
              <div className="album-type">Album</div>
            </li>
            <li>
              <div>Ground Dweller</div>
              <div className="album-type">Album</div>
            </li>
            <li>
              <div>Before I Cave In</div>
              <div className="album-type">Album</div>
            </li>
          </ul>
        </div>

        <button className="logout" onClick={this.logOutAndRedirect}>Log Out</button>
      </nav>
    );
  }
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      dispatch(logOut())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
