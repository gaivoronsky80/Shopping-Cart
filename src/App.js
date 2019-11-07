import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Router from './Router';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Navigation = (props) => <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <ul className="navbar-nav align-items-center">
    <li className="nav-item">
      <NavLink to = '/' className="nav-link">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to = '/cart' className="nav-link">Cart</NavLink>
    </li>
  </ul>
</nav>
class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation />
        <Router />
      </div>
    )
  }
}

export default App;