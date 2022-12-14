import OutletCard from "./OutletCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const OutletList = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [outletArr, setOutletArr] = useState([]);
  const userId = localStorage.getItem("userId");

  const getAllOutlet = async () => {
    try {
      const { data } = await axios.get(`${baseURL}outlets?userId=${userId}`);
      console.log(data);
      setOutletArr(data);
    } catch (e) {
      toast.error("Action failed!");
    }
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
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={outlet._id}>
              <OutletCard outletData={outlet} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default OutletList;
