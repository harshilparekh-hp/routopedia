import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

function Product() {
  const navigate = useNavigate(); // MUCH MORE CLEANER AND CONVENIENT METHOD TO USE FOR ROUTING...

  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  });

  return (
    <div>
      Product
      <button
        onClick={() => {
          navigate("/product/CreateProduct");
        }}
      >
        Add Product
      </button>
      <Link to={`/product/Details/5`}>
        <button>Navigate to Product Details</button>
      </Link>
      {goToProduct && <Navigate to={"details/6"} />}
      <button
        onClick={() => {
          setGoToProduct({goToProduct: true});
        }}
      >
        Go to product 6 - use state
      </button>
    </div>
  );
}

export default Product;
