import React, { useEffect, useState } from "react";
import "./singleProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../utilities/slices/cartSlice";
import { RxCross2 } from "react-icons/rx";
import Footer from "../footer";

const SingleProduct = () => {
  const product = useSelector((state) => state.filter.singledProduct);
  const { id } = useParams();
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showModal]);

  return (
    <section className="singleProduct">
      <div className="singleProduct__product">
        {product
          .filter((item) => item.id === id)
          .map((item, index) => {
            return (
              <div key={index} className="singleProduct__productDetails">
                <img src={item.img} alt="product" />
                <div className="singleProduct__content">
                  <div>
                    <h1>{item.name}</h1>
                  </div>
                  <p>{item.text}</p>
                  <div>Price : {item.price}$</div>
                  <div className="singleProduct__sizeSelect">
                    {item.size ? (
                      <>
                        <label>Select the size :</label>
                        <select
                          value={size}
                          name="size"
                          onChange={(e) => {
                            setSize(e.target.value);
                          }}
                        >
                          {item.size.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="singleProduct__colorSelect">
                    <label>Choose Color :</label>
                    <select
                      key={index}
                      value={color}
                      onChange={(e) => {
                        setColor(e.target.value);
                      }}
                    >
                      {item.color.map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                    </select>
                  </div>
                  <div className="singleProduct__addCart">
                    <button
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            size: size,
                            color: color,
                            amount: 1,
                            totalPrice: item.price,
                            img: item.img,
                          })
                        );
                        setShowModal(true);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {showModal && (
        <div className="singleProduct__alert">
          <p>Item has been added to cart!</p>
          <span onClick={() => setShowModal(false)}>
            <RxCross2 />
          </span>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default SingleProduct;
