import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteItem,
  removeFromCart,
} from "../../utilities/slices/cartSlice";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Footer from "../footer";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      {cart.length !== 0 ? (
        <>
          <div className="cart__list">
            {cart.map((item) => {
              return (
                <div className="cart__details" key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div className="cart__content">
                    <div className="cart__contentTop">
                      <h3>{item.name} | </h3>
                      <h3>| {item.price}$</h3>
                      <button onClick={() => dispatch(removeFromCart(item))}>
                        <AiOutlineMinus className="cart__icons" size={20} title="Remove" />
                      </button>
                      <button onClick={() => dispatch(addToCart(item))}>
                        <AiOutlinePlus className="cart__icons" size={20} title="Add" />
                      </button>
                      <button onClick={() => dispatch(deleteItem(item))}>
                        <RiDeleteBinLine className="cart__icons" size={20} title="Delete" />
                      </button>
                    </div>
                    <div>
                      <p>Size = {item.size} </p>
                    </div>
                    <div>
                      <p>
                        Color =
                        {item.color.charAt(0).toUpperCase() +
                          item.color.slice(1)}
                      </p>
                    </div>
                    <div>
                      <p>Quantity = {item.amount} </p>
                    </div>
                    <div>
                      <h3>Total Price = {item.totalPrice}$ </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart__footer">
            <h2>Total Amount = {totalAmount} </h2>
            <h2>Total Price = {totalPrice}$ </h2>
          </div>
        </>
      ) : (
        <div>
          <center>
            <h1>Your Cart is empty!</h1>
          </center>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Cart;
