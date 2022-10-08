import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

const OutletView = () => {
  let { id } = useParams();

  const [itemArr, setItemArr] = useState([]);

  const getAllItem = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/items/outlet/${id}`
    );

    setItemArr(data);
  };

  useEffect(() => {
    getAllItem();
  }, []);

  return (
    <React.Fragment>
      <div className="container mt-4 mb-4">
        <div className="container wrapper">
          <h1
            className="text-center p-5 text-black "
            style={{ fontWeight: "bolder" }}
          >
            Food Items
          </h1>
        </div>
        <div className="row">
          {itemArr.map((item) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 " key={item.id}>
                <ItemCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default OutletView;
