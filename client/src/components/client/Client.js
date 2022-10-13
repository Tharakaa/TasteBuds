import React from "react";
import FavouriteItem from "./FavouriteItem.js";
import FavouriteOutlet from "./FavouriteOutlet.js";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./Cart.js";
import Navbar from "./Navbar.js";
import OutletList from "./OutletList.js";
import OutletView from "./OutletView.js";

const Client = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-4">
        <Routes>
          <Route path="/*" element={<OutletList />} />
          <Route path="/outlet/:id" element={<OutletView />} />
          <Route path="/favourite-items" element={<FavouriteItem />} />
          <Route path="/favourite-outlets" element={<FavouriteOutlet />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </>
  );
};

export default Client;
