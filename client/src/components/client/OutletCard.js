import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const OutletCard = ({ outlet }) => {
  const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;
  return (
    <React.Fragment>
      <div
        className="card mb-4 shadow  rounded"
        style={{ backgroundColor: "white" }}
      >
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
          <h5>Dine-in &nbsp;&nbsp;Takeaway &nbsp;&nbsp;Delivery</h5>
          <button className="btn btn-primary ">
            <Link className="text-white" to={`/outlet/${outlet._id}`}>
              <h6>View more</h6>
            </Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OutletCard;
