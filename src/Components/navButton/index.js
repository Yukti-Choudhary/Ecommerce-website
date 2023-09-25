import React from "react";
import "./navButton.css";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../utilities/slices/productSlice";
import { Link } from "react-router-dom";
import { navButtons } from "../../assets/data/buttonsList";
import { toggleMenu } from "../../utilities/slices/navSlice";

const NavButton = () => {
  const dispatch = useDispatch();

  return (
    <nav className="navButton">
      {navButtons.map((button, index) => {
        return (
          <div key={index} className="navButton__list">
            <Link to={"/filteredProducts/" + button}>
              <button
                className="navButton__button"
                onClick={() => {
                  dispatch(filterProducts(button));
                  dispatch(toggleMenu(false));
                }}
              >
                {button}
              </button>
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default NavButton;
