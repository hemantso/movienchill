import React from "react";

const Header = () => (  
      <header>
        <nav className="navigation">
          <div className="main-heading" id="name">
            <h1>
              Cool<span>Movies</span>
            </h1>
          </div>
          <ul className="topnav" id="nav">
            <li>Movies</li>
            <li>Tv Shows</li>
          </ul>
          <div className="right">
            <input type="text" placeholder="Search..." />

            <ul className="login-links">
              <li>Log In</li>
              <li>Register</li>
            </ul>
          </div>
        </nav>
      </header>
    );

export default Header;