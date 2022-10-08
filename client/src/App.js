import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Client from "./components/client/Client";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  localStorage.setItem("userId", "6335d3567768e370bc5da140");

  return (
    <>
      <Routes>
        <Route path="/*" element={<Client />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        transition={Zoom}
        theme="colored"
      />
    </>
  );
};

export default App;
