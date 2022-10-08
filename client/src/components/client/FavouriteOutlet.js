import React, { useEffect, useState } from "react";
import axios from "axios";
import WishlistCard from "./WishlistCard";

const FavouriteOutlet = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  let userId = localStorage.getItem("userId");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData(userId);
  }, []);

  async function fetchData(id) {
    let res = await axios.get(baseURL + `wishlists/${id}?type=OUTLET`);
    if (res && res.data) {
      setItems(res.data);
    }
  }

  const removeWishlistItem = (e) => {
    items.splice(e, 1);
    let updatedItems = JSON.parse(JSON.stringify(items));
    setItems(updatedItems);
  };

  return (
    <>
      <div className="container page-default-height">
        <div className="row mt-4">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
                key={index}
              >
                <WishlistCard
                  item={item}
                  removeWishlistItem={removeWishlistItem}
                  index={index}
                  callType="outlet"
                />
              </div>
            ))
          ) : (
            <div className="text-danger p-5 text-center fw-bold">
              No favourite outlets yet
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FavouriteOutlet;
