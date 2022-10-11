import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import Rating from "@mui/material/Rating";
import GoogleMap from "./GoogleMap";
import { toast } from "react-toastify";

const OutletView = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;
  const userId = localStorage.getItem("userId");
  let { id } = useParams();
  const [outlet, setOutlet] = useState({});
  const [itemArr, setItemArr] = useState([]);

  const fetchData = async () => {
    let res = await axios.get(`${baseURL}outlets/${id}`);
    if (res && res.data) {
      setOutlet(res.data);
      console.log(outlet);
    }
  };

  const getAllItem = async () => {
    try {
      const { data } = await axios.get(
        `${baseURL}items/outlet/${id}?userId=${userId}`
      );
      console.log(data);
      setItemArr(data);
    } catch (e) {
      toast.error("Action failed!");
    }
  };

  useEffect(() => {
    fetchData();
    getAllItem();
  }, []);

  return (
    <React.Fragment>
      <div className="container mt-4 mb-4">
        <div className="row mt-4">
          <div className="col-12 col-md-4 col-lg-3 col-xl-2">
            <img className="w-100" src={fileBaseURL + outlet.imgUrl} alt="" />
          </div>
          <div className="col-12 col-md-5 col-lg-6 col-xl-6">
            <h2 className="fw-bold">{outlet.name}</h2>
            <Rating size="small" readOnly value={outlet.rating | 0}></Rating>
            <p className="mb-2">{outlet.address}</p>
            <div>{outlet.description}</div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 col-xl-4">
            {outlet.lat && outlet.long ? (
              <GoogleMap position={{ lat: outlet.lat, lng: outlet.long }} />
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="container wrapper">
          <h2
            className="text-center p-5 text-black "
            style={{ fontWeight: "bolder" }}
          >
            Food Items
          </h2>
        </div>
        <div className="row">
          {itemArr.map((item, index) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
                key={item._id}
              >
                <ItemCard itemData={item} />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default OutletView;
