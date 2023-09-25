import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import { toggleMenu } from "../../utilities/slices/navSlice";
import Search from "../search";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__menu" onClick={() => dispatch(toggleMenu())}>
          =
        </div>
        <Link to="/">
          <h1>LushChic</h1>
        </Link>
      </div>
      <nav className="header__list">
        <Search/>
        <span>Wishlist</span>
        <span>
          <Link to="/cart">
            {cart.length !== 0 ? (
              <div>Cart {cart.length} </div>
            ) : (
              <div>Cart</div>
            )}
          </Link>
        </span>
        <span>Login</span>
      </nav>
    </header>
  );
};

export default Header;
