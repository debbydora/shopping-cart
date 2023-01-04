import React from "react";
import "../components/styles.css";
import SingleProduct from "../components/SingleProduct";
import { CartItemContext } from "../context/CartContext";
import Filters from "../components/Filters";
const HomePage = () => {
  const {
    state: { products },
  } = CartItemContext();

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
