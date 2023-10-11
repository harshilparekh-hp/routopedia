import React from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate(); // MUCH MORE CLEANER AND CONVENIENT METHOD TO USE FOR ROUTING...
  return (
    <div>
      ProductList
      <button
        onClick={() => {
          navigate("/product/CreateProduct");
        }}
      >
        Add Product
      </button>
      
    </div>
  );
}

export default ProductList;
