import React from "react";
import "./filteredProducts.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../productCard/index.js";
import {
  genderButtons,
  colorButtons,
  sizeButtons,
} from "../../assets/data/buttonsList";
import FilterError from "../filterError";
import {
  filterColor,
  filterGender,
  filterProducts,
  filterSize,
  sortByPrice,
} from "../../utilities/slices/productSlice";
import { useState } from "react";
import Footer from "../footer";

const FilteredProducts = () => {
  const product = useSelector((state) => state.filter.filteredProducts);
  const error = useSelector((state) => state.filter.error);
  const [showColor, setShowColor] = useState(false);
  const [showSize, setShowSize] = useState(false);

  const { type } = useParams();

  const dispatch = useDispatch();

  return (
    <main className="filteredProducts">
      <div className="filteredProducts__title">
        <h1>{type}</h1>
      </div>
      <div className="filteredProducts__buttons">
        <div className="filteredProducts__buttonsLeft">
          {genderButtons.map((items, index) => {
            const capitalizedItem =
              items.charAt(0).toUpperCase() + items.slice(1);
            return (
              <div key={index}>
                <button onClick={() => dispatch(filterGender(items))}>
                  {capitalizedItem}
                </button>
              </div>
            );
          })}
          <div>
            <button onClick={() => dispatch(sortByPrice())}>High price</button>
          </div>
          <div className="filteredProducts__buttonColors">
            <button onClick={() => setShowColor(!showColor)}>
              Select Color
            </button>
            {showColor && (
              <ul>
                {colorButtons.map((colors, index) => {
                  const capitalizedColors =
                    colors.charAt(0).toUpperCase() + colors.slice(1);

                  return (
                    <li
                      onClick={() => {
                        dispatch(filterColor(colors));
                        setShowColor(false);
                      }}
                      key={index}
                    >
                      {capitalizedColors}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="filteredProducts__buttonSize">
            <button
              onClick={() => setShowSize(!showSize)}
              disabled={type === "Bags" || type === "Shoes"}
            >
              Select Size
            </button>
            {showSize && (
              <ul>
                {sizeButtons.map((size, index) => {
                  return (
                    <li
                      onClick={() => {
                        dispatch(filterSize(size));
                        setShowSize(false);
                      }}
                      key={index}
                    >
                      {size}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="filteredProducts__buttonsRight">
          <button onClick={() => dispatch(filterProducts(type))}>
            Clear Filter
          </button>
        </div>
      </div>
      {error ? (
        <FilterError />
      ) : (
        <div className="filteredProducts__list">
          {product
            .filter((product) => product.type === type)
            .map((items) => {
              return (
                <div className="card" key={items.id}>
                  <ProductCard
                    img={items.img}
                    name={items.name}
                    price={items.price}
                    color={items.color}
                    id={items.id}
                  />
                </div>
              );
            })}
        </div>
      )}
      <Footer/>
    </main>
  );
};

export default FilteredProducts;
