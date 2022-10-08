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

const OutletList = ({ listChanged }) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;
  const [outlets, setOutlets] = useState([]);

  useEffect(() => {
    fetchOutletData();
  }, [listChanged]);

  async function fetchOutletData() {
    let res = await axios.get(`${baseURL}outlets`);
    console.log(res);
    setOutlets(res.data);
  }

  const deleteItem = async (_id, index) => {
    if (window.confirm("Are you sure to remove this outlet?")) {
      try {
        await axios.delete(`${baseURL}outlets/${_id}`);
        let updatedObj = JSON.parse(JSON.stringify(outlets));
        updatedObj.splice(index, 1);
        setOutlets(updatedObj);
        alert("Outlet delete success!");
      } catch (e) {
        alert("Outlet delete failed!");
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
