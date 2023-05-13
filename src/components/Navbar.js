import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    
    <nav className="main-nav">
      <div className="logo">
        <h2>
          <span>EDYODA</span>
        </h2>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Courses </a>
            <ul className="dropdown">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Data Science</a>
              </li>
              <li>
                <a href="#">Machine Learning</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Programs </a>
            <ul className="dropdown">
              <li>
                <a href="#">Web Development and Design Program</a>
              </li>
              <li>
                <a href="#">Data Science and Analytics Program</a>
              </li>
              <li>
                <a href="#">
                  Artificial Intelligence and Machine Learning Program
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      
      {/* RIGHT OF NAVBAR */}


      <div className="menu right-menu">
        <form className="search-form">
          <input type="text" placeholder="Search" />
        </form>
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li className="join-now">
            <button type="submit" className="join-now-btn">
              JOIN NOW
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
