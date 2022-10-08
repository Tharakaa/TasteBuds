import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { toast } from "react-toastify";

const OutletCard = ({ outletData }) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;
  const userId = localStorage.getItem("userId");
  const [outlet, setOutlet] = useState(outletData);

  const addToWishList = async () => {
    await axios.post(`${baseURL}wishlists`, {
      type: "OUTLET",
      userId,
      itemOrOutletId: outlet._id,
    });
    outletData.isInWishlist = !outletData.isInWishlist;
    outletData.isInWishlist
      ? toast.success("Successfully added!")
      : toast.warning("Successfully removed!");
    setOutlet(JSON.parse(JSON.stringify(outletData)));
  };

  return (
    <React.Fragment>
      <div
        className="card w-100 mb-4 shadow  rounded"
        style={{ backgroundColor: "white" }}
      >
        <div className="text-end custom-green-color p-2">
          {outlet.isInWishlist ? (
            <FavoriteIcon onClick={() => addToWishList(outlet)} />
          ) : (
            <FavoriteBorderIcon onClick={() => addToWishList(outlet)} />
          )}
        </div>
        <h4
          className="text-center p-1"
          style={{ color: "black", fontWeight: "bolder" }}
        >
          {outlet.name}
        </h4>
        <div className="overflow-hidden ">
          <img
            src={fileBaseURL + outlet.imgUrl}
            className="card-img-top"
            alt="..."
          />
        </div>

        <div className="card-body ">
          <div className="d-flex ">
            <h5>{(outlet.rating || 0).toFixed(1)} &nbsp; </h5>

            <Rating
              name="half-rating-read"
              defaultValue={outlet.rating}
              size="medium"
              precision={0.5}
              readOnly
            />
          </div>
          <h5>{outlet.address}</h5>
          <p>{outlet.description.substring(0, 25)}...</p>
          <button className="btn custom-btn w-100">
            <Link className="text-white" to={`/outlet/${outlet._id}`}>
              <div>View more</div>
            </Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OutletCard;
