import React from "react";
import Dashboard from "./Dashboard";
import Item from "./Item";
import Navbar from "./Navbar";
import Outlet from "./Outlet";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-4">
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </div>
    </>
  );
};

export default Admin;
