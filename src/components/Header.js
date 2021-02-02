import React, { Component } from "react";


export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navigation">
          <div className="main-heading" id="name">
            <h1>
              Cool<span>Movies</span>
            </h1>
          </div>
          <ul className="topnav" id="nav">
            <li>
              Movies
            </li>
            <li>
              Tv Shows
            </li>
            <li>
              <input type="text" placeholder="Search..." />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
