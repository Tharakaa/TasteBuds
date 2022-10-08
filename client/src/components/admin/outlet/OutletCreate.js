import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";

const OutletCreate = ({ changeStatus }) => {
  const baseURL = process.env.REACT_APP_BASE_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      let fileObj = new FormData();
      fileObj.append("file", data.imgUrl[0]);
      let fileCreateRes = await axios.post(`${baseURL}utils/upload`, fileObj);
      if (
        fileCreateRes &&
        fileCreateRes.data &&
        fileCreateRes.data.res.length > 0
      ) {
        let updatedObj = {
          ...data,
          imgUrl: fileCreateRes.data.res[0]
        };
        let res = await axios.post(`${baseURL}outlets`, updatedObj);
        if (res.data.message) {
          changeStatus();
          reset();
          alert("Outlet create success!");
        } else {
          alert("Outlet create failed!");
        }
      } else {
        alert("Outlet create failed!");
      }
    } catch (e) {
      alert("Outlet create failed!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <TextField
              label="Name"
              type="text"
              defaultValue=""
              size="medium"
              className="w-100"
              autoFocus={true}
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors?.name ? errors.name.message : null}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <TextField
              label="Address"
              type="text"
              defaultValue=""
              size="medium"
              className="w-100"
              {...register("address", { required: "Address is required" })}
              error={!!errors.address}
              helperText={errors?.address ? errors.address.message : null}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <TextField
              label="Description"
              type="text"
              defaultValue=""
              size="medium"
              className="w-100"
              {...register("description", {
                required: "Description is required",
              })}
              error={!!errors.description}
              helperText={
                errors?.description ? errors.description.message : null
              }
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <TextField
              label="Image"
              type="file"
              size="medium"
              className="w-100"
              {...register("imgUrl", {
                required: "Image is required",
              })}
              error={!!errors.imgUrl}
              helperText={errors?.imgUrl ? errors.imgUrl.message : null}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <TextField
              label="Latitude"
              type="text"
              size="medium"
              className="w-100"
              {...register("lat", {
                required: "Latitude is required",
              })}
              error={!!errors.lat}
              helperText={errors?.lat ? errors.lat.message : null}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <TextField
              label="Longitude"
              type="text"
              size="medium"
              className="w-100"
              {...register("long", {
                required: "Longitude is required",
              })}
              error={!!errors.long}
              helperText={errors?.long ? errors.long.message : null}
            />
          </div>
        </div>

        <div className="text-end mt">
          <button className="btn btn-dark">Create</button>
        </div>
      </form>
    </div>
  );
};

export default OutletCreate;
