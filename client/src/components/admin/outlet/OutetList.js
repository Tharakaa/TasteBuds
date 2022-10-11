import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";

const OutletList = ({ listChanged }) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;
  const [outlets, setOutlets] = useState([]);

  useEffect(() => {
    fetchOutletData();
  }, [listChanged]);

  async function fetchOutletData() {
    try {
      let res = await axios.get(`${baseURL}outlets`);
      setOutlets(res.data);
    } catch (e) {
      toast.error("Data getting failed!");
    }
  }

  const deleteItem = async (_id, index) => {
    if (window.confirm("Are you sure to remove this outlet?")) {
      try {
        await axios.delete(`${baseURL}outlets/${_id}`);
        let updatedObj = JSON.parse(JSON.stringify(outlets));
        updatedObj.splice(index, 1);
        setOutlets(updatedObj);
        toast.success("Outlet delete success!");
      } catch (e) {
        toast.error("Outlet delete failed!");
      }
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Description</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {outlets.map((row, index) => (
              <TableRow key={row._id}>
                <TableCell>
                  <img src={fileBaseURL + row.imgUrl} height="70px" />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteItem(row._id, index)}
                  >
                    <DeleteIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OutletList;
