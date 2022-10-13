import React from "react";
import Dashboard from "./Dashboard";
//import Item from "./Item";
import Navbar from "./Navbar";
//import Outlet from "./Outlet";
import List from "./List"
import { Route, Routes } from "react-router-dom";
import Single from "./Single";
//import { List } from "@mui/material";
import AdminAddProduct from "./add-product";
import itemList from "./itemList"



const Admin = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-4">
     
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/users" element={<List/>} />
          <Route path="/users/123" element={<Single/>} />
          <Route path="/add-product" element={<AdminAddProduct/>} />
          {/* <Route path="users/signin" component={SignIn} /> */}
          {/* <Route path="/item" element={<Item />} /> */}
          <Route path="items/item-list" component={itemList} />

        </Routes>
      </div>
    </>
  );
};

export default Admin;
