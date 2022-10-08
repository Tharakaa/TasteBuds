import React, { useState } from "react";
import OutletCreate from "./OutletCreate";
import OutletList from "./OutetList";

const Outlet = () => {
  const [listChanged, setListChanged] = useState(false);
  const changeStatus = () => {
    setListChanged(!listChanged);
  };

  return (
    <div className="pb-4">
      <div className="card card-body mb-4 border-0 shadow">
        <h5 className="mb-4 fw-bold">CREATE OUTLETS</h5>
        <OutletCreate changeStatus={changeStatus} />
      </div>

      <div className="card card-body mb-4 border-0 shadow">
        <h5 className="mb-4 fw-bold">LIST OUTLETS</h5>
        <OutletList listChanged={listChanged} />
      </div>
    </div>
  );
};

export default Outlet;
