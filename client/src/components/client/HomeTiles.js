import React from "react";
import card1 from "../../assets/img/card4.png";
import card2 from "../../assets/img/card2.jpg";
import card3 from "../../assets/img/card3.jpg";

const HomeTiles = () => {
  const tileListArr = [
    { id: 1, name: "Easy to Order", img: card1 },
    { id: 2, name: "Fastest Delivery", img: card2 },
    { id: 3, name: "Best Quality", img: card3 },
  ];

  return (
    <div className="row">
      {tileListArr.map((tile) => {
        return (
          <React.Fragment>
            <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
              <div
                className="card border border-secondary "
                style={{ backgroundColor: "white", borderRadius: "40px" }}
              >
                <div className="overflow-hidden ">
                  <img
                    src={tile.img}
                    className="card-img-top zoom "
                    alt="..."
                    style={{ borderRadius: "100px" }}
                  />
                </div>
                <h3
                  className="text-center p-2"
                  style={{ color: "black", fontWeight: "bolder" }}
                >
                  {tile.name}
                </h3>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default HomeTiles;
