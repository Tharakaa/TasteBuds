import React, { useContext } from "react";
import { Rating } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const WishlistCard = ({ item, removeWishlistItem, index, callType }) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;

  const removeItem = async () => {
    let res = await axios.delete(`${baseURL}wishlists/${item.wishlistId}`);
    if (res && res.data && res.data.deletedCount === 1) {
      removeWishlistItem(index);
      alert("Item removed!");
    }
  };

  const addToCart = async () => {
    alert("Add to cart function");
  };

  return (
    <>
      <div className="position-relative h-100 grow">
        <div className="card h-100 border-0 shadow text-dark">
          <Link
            className="h-100"
            to={`/outlet/${callType === "outlet" ? item._id : item.outletId}`}
          >
            <img src={fileBaseURL + item.imgUrl} alt="" className="w-100" />
            <div className="card-body text-dark">
              <h5>{item.name}</h5>
              <Rating
                size="small"
                readOnly
                value={item.ratings}
                precision={0.5}
              ></Rating>
              <br />
              {callType === "ITEM" ? <h5>Rs. {item.price.toFixed(2)}</h5> : ""}
              <small>{item.description.substring(0, 40)}...</small>
            </div>
          </Link>
          <div className="card-footer bg-white border-0 pt-0 pb-3">
            {callType === "item" ? (
              <button
                className="btn btn-sm btn-outline-dark w-100 align-bottom mb-3"
                onClick={() => addToCart()}
              >
                <ShoppingCartIcon />
                <span className="ms-1">Add to cart</span>
              </button>
            ) : (
              <></>
            )}

            <button
              className="btn btn-sm btn-outline-danger w-100 align-bottom"
              onClick={() => removeItem()}
            >
              <DeleteIcon />
              <span className="ms-1">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistCard;
