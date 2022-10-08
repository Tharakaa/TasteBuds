import React from "react";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ItemCard = ({ item }) => {
  const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;
  return (
    <React.Fragment>
      <div
        className="card mb-4 shadow bg-white rounded"
        style={{ backgroundColor: "white" }}
      >
        <h2
          className="text-center p-1"
          style={{ color: "black", fontWeight: "bolder" }}
        >
          {item.name}
        </h2>
        <div className="overflow-hidden ">
          <img
            src={fileBaseURL + item.imgUrl}
            className="card-img-top zoom"
            alt="..."
          />
        </div>

        <div className="card-body ">
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
              <FavoriteIcon />
              <FavoriteBorderIcon />
            </div>
          </div>
          <h4>Rs.{item.price}</h4>
          <h5>Description: {item.description}</h5>

          <button className="btn btn-primary">
            Add to cart &nbsp;
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemCard;
