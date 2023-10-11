import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import CreateProduct from "./pages/CreateProduct";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import NotFound from "./components/NotFound";
import CryptoDetail from "./components/CryptoDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <BrowserRouter>
      <Header />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route
          path="/CryptoDetail/:cryptoSymbol/:code"
          element={<CryptoDetail />}
        ></Route>
        <Route path="product">
          <Route path="" element={<Product />}></Route>
          <Route path="CreateProduct" element={<CreateProduct />}></Route>
          <Route path="Details/:productId" element={<ProductDetails />}></Route>
          <Route path="List" element={<ProductList />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);
