import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
import { Link } from "react-router-dom";

const Header = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/Product">Product</Link>
        <Link to="/ProductList">ProductList</Link>
        <Link to="/Login">Login</Link>
        <button onClick={showNavBar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavBar} className="nav-btn">
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
