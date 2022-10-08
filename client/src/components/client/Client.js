import React from "react";
import FavouriteItem from "./FavouriteItem.js";
import FavouriteOutlet from "./FavouriteOutlet.js";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./Cart.js";
import Navbar from "./Navbar.js";
import OutletPage from "./OutletPage.js";
import OutletView from "./OutletView.js";
import Footer from "./Footer.js";

const Client = () => {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/*" element={<OutletPage />} />
        <Route path="/outlet/:id" element={<OutletView />} />
        <Route path="/favourite-items" element={<FavouriteItem />} />
        <Route path="/favourite-outlets" element={<FavouriteOutlet />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>

      <Footer></Footer>
    </>
  );
};

export default Client;
