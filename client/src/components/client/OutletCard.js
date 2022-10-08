import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const OutletCard = ({ outlet }) => {
  return (
    <React.Fragment>
      <div
        className="card mb-4 shadow  rounded"
        style={{ backgroundColor: "white" }}
      >
        <h2
          className="text-center p-1"
          style={{ color: "black", fontWeight: "bolder" }}
        >
          {outlet.name}
        </h2>
        <div className="overflow-hidden " style={{}}>
          <img src={outlet.imgUrl} className="card-img-top" alt="..." />
        </div>

        <div className="card-body ">
          <div className="d-flex ">
            <h5>{outlet.rating.toFixed(1)} &nbsp; </h5>

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
