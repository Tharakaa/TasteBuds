import OutletCard from "./OutletCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const OutletList = () => {
  const [outletArr, setOutletArr] = useState([]);

  const getAllOutlet = async () => {
    const { data } = await axios.get("http://localhost:5000/api/outlets");
    setOutletArr(data);
  };

  useEffect(() => {
    getAllOutlet();
  }, []);

  return (
    <React.Fragment>
      <div className="container wrapper">
        <h2
          className="text-center p-5 text-black "
          style={{ fontWeight: "bolder" }}
        >
          Famous Food Outlets
        </h2>
      </div>
      <div className="row">
        {outletArr.map((outlet) => {
          return (
            <div className="col-12 col-md-6 col-lg-3 " key={outlet._id}>
              <OutletCard outlet={outlet} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default OutletList;
