import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      {/* Logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* Serch box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 Links */}
      <div className="header__nav">
        {/* 1st Link */}
        <Link to="login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Here</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* 2nd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasketIcon className="" />
            {/* Number of items in the basket */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* Basket icon with Number */}
    </nav>
  );
};

export default Header;
