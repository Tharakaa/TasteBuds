import React from "react";
import OutletList from "./OutletList.js";
import HomeSlider from "./HomeSlider.js";
import HomeTiles from "./HomeTiles.js";

const OutletPage = () => {
  return (
    <React.StrictMode>
      <HomeSlider />
      <div className="container mt-4 mb-4">
        <div className="container wrapper">
          <h1
            className="text-center p-2 text-black cus-font"
            style={{ fontWeight: "bolder" }}
          >
            TasteBuds
          </h1>
          <h3 className="text-center text-black ">
            The Fastest Food Delivery Partner
          </h3>
        </div>
        <HomeTiles />
        <OutletList />
      </div>
    </React.StrictMode>
  );
};

export default OutletPage;
