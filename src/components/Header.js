import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";


function Header() {
  const [{basket, user}] = useStateValue();
  const logout = ()=> {
    if (user) {
      auth.signOut();
    }
  }



  return (
    <>
    <nav className="header">
      <Link to="/">
      <img 
      className="header-logo"
       alt="amazon-logo"
       src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
       />
      </Link>

      <div className="header-search">
      <input type="text" className="header-searchInput" />
      <SearchIcon className="header-searchIcon"/>
      </div>

      <div className="header-nav">
          <Link to={!user && "/login"} className="header-link">
          <div onClick={logout} className="header-option">
          <span className="header-option-lineOne">Hello {user?.email}</span>
          <span className="header-option-lineTwo">{user?'Sign Out': 'Sign in '}</span>
          </div>
          </Link>

          <Link to="/login" className="header-link">
          <div className="header-option">
          <span className="header-option-lineOne">Returns</span>
          <span className="header-option-lineTwo">& Orders</span>
          </div>
          </Link>

          <Link to="/" className="header-link">
          <div className="header-option">
          <span className="header-option-lineOne">Your</span>
          <span className="header-option-lineTwo"> Prime </span>
          </div>
          </Link>

          <Link to="/checkout" className="header-link">
          <div className="header-basket">
              <ShoppingBasketIcon/>
              <span className="header-option-lineTwo header-basket-count">{basket.length}</span>
          </div>

          </Link>


      </div>
    </nav>
    </>
  );
  
}


export default Header;
