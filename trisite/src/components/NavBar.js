/* import React, {useState} from 'react'*/
import "./NavBar.css";
import { Component } from "react";
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbarLogo"><a href="/" style={{ textDecoration: 'none' }}>LE TAUX DE RENTABILITÉ INTERNE</a></h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu  active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
