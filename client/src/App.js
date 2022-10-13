import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Client from "./components/client/Client";
import Item from "./components/admin/Item";


const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Client />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/product" component={Item} />
      
    </Routes>
  );
};

export default App;
