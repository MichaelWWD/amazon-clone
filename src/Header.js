import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      {/* {logo on the left } -> img */}
      <Link to="/">
      <img 
      className="header-logo"
       alt="amazon-logo"
       src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
       />
      </Link>

      {/* search box  */}
      <input type="text" className="header-searchInput" />
      <SearchIcon/>

      {/* 3 links   */}
      {/* Basket icon with number   */}
    </nav>
  );
  
}


export default Header;
