import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";
const Product = (props) => {
  const { img, name, price, shipping, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h3 className="text-space">{name}</h3>
      <p className="text-space">Price: ${price}</p>
      <p className="text-space">
        <small>Shipping: ${shipping}</small>
      </p>
      <p className="text-space">
        <small>Ratings: {ratings}</small>
      </p>
      <button
        className="cart-btn"
        onClick={() => props.handleAddToCart(props.product)}
      >
        <p className="cart-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
