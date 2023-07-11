import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <body>
    <div>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">SURVEYL</a>
          </div>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      </nav>
      <div className="img"></div>
      <div className="center">
        <div className="title">Survey is a method of gathering and compiling Information</div>
        <div className="btns">
          <button>Start Survey</button>
         
        </div>
      </div>
    </div></body>
  );
  }

export default Home;