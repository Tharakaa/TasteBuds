import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import { toast } from "react-toastify";

const ItemCard = ({ itemData }) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;
  const userId = localStorage.getItem("userId");
  const [item, setItem] = useState(itemData);

  const addToWishList = async () => {
    try {
      await axios.post(`${baseURL}wishlists`, {
        type: "ITEM",
        userId,
        itemOrOutletId: item._id,
      });
      itemData.isInWishlist = !itemData.isInWishlist;
      itemData.isInWishlist
        ? toast.success("Successfully added!")
        : toast.warning("Successfully removed!");
      setItem(JSON.parse(JSON.stringify(itemData)));
    } catch (e) {
      toast.error("Action failed!");
    }
  };

  const addToCart = async (_id) => {
    await axios.post(`${baseURL}cart/addToCart/?userId=${userId}`, {itemId:_id});
  };

  return (
    <div
      className="card h-100 mb-4 shadow bg-white"
      style={{ backgroundColor: "white" }}
    >
      <h4
        className="text-center p-1"
        style={{ color: "black", fontWeight: "bolder" }}
      >
        {item.name}
      </h4>
      <div className="overflow-hidden ">
        <img
          src={fileBaseURL + item.imgUrl}
          className="card-img-top zoom"
          alt="..."
        />
      </div>

      <div className="card-body pb-0">
        <div className="d-flex justify-content-between ">
          <div className="d-flex ">
            <h5>{item.rating.toFixed(1)} &nbsp; </h5>
            <Rating
              name="half-rating-read"
              defaultValue={item.rating}
              precision={0.5}
              readOnly
            />
          </div>
          <div>
            <div className="custom-green-color">
              {item.isInWishlist}
              {item.isInWishlist ? (
                <FavoriteIcon onClick={() => addToWishList(item)} />
              ) : (
                <FavoriteBorderIcon onClick={() => addToWishList(item)} />
              )}
            </div>
          </div>
        </div>
        <h5>Rs.{item.price}</h5>
        <p className="mb-0">Description: {item.description}</p>
      </div>
      <div className="card-footer bg-white mt-0 pt-0 border-0 pb-4">
        <button className="btn custom-btn w-100" onClick={() => addToCart(item._id)}>
          <ShoppingCartIcon />
          <span className="ps-2">Add to cart </span>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
