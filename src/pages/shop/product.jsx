import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
// import "./shop.css"

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="error"/>
      <div className="description">
        <p>
          <b className="product_name">{productName}</b>
        </p>
        <p className="product_price"> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};