import React, {useEffect, useState} from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import {Checkbox} from "@mui/material";
import NumberInput from "./NumberInput";

const ShoppingCart = () => {

    const baseURL = process.env.REACT_APP_BASE_URL;
    const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;
    const userId = localStorage.getItem("userId");

    const [itemArr, setItemArr] = useState([]);

    const getAllItem = async () => {
        const {data} = await axios.get(`${baseURL}items/outlet/6320a022cee0bd8d88912dea?userId=${userId}`);
        console.log(data);
        setItemArr(data);
    };

    useEffect(() => {
        getAllItem();
    }, []);

    return (
        <div className="container mt-4 mb-4 page-default-height">
            <div>
                <h2 className="mb-4">Cart</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    {
                        (itemArr.length === 0) ?
                            <div className="text-danger p-5 text-center fw-bold">
                                Your cart is empty
                            </div>
                            :
                            <div className="row">
                                <TableContainer component={Paper}>
                                    <Table sx={{minWidth: 650}} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell align="center">Name</TableCell>
                                                <TableCell align="center">Price</TableCell>
                                                <TableCell align="center">Quantity</TableCell>
                                                <TableCell align="center">Total</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {itemArr.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            color="primary"
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center" width="10%">
                                                        <img
                                                            src={fileBaseURL + row.imgUrl}
                                                            className="zoom rounded w-100"
                                                            alt="..."
                                                        />
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.calories}</TableCell>
                                                    <TableCell align="center">
                                                        <NumberInput value={3}/>
                                                    </TableCell>
                                                    <TableCell align="center">{row.carbs}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
