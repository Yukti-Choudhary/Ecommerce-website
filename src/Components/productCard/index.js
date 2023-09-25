import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductCard = ({ img, name, price, color, id }) => {
  const { type } = useParams();

  return (
    <article className="productCard">
      <Link to={`/filteredProducts/${type}/` + id}>
        <div className="productCard__img">
          <img src={img} alt="product" />
        </div>
        <div className="productCard__title">{name}</div>
        <div className="productCard__details">
          <div>Price : {price} $</div>
          <div className="productCard__colorList">
            {color?.map((color, index) => {
              return (
                <li
                  className="colorList"
                  key={index}
                  style={{ backgroundColor: color }}
                ></li>
              );
            })}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
