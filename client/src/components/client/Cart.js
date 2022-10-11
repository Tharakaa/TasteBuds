import React, {useEffect, useState} from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import NumberInput from "./NumberInput";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const ShoppingCart = () => {

    const baseURL = process.env.REACT_APP_BASE_URL;
    const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;
    const userId = localStorage.getItem("userId");

    const [itemArr, setItemArr] = useState([]);
    const [total, setTotal] = useState(0);

    const getUserCart = async () => {
        // retrieve cart for user
        const {data} = await axios.get(`${baseURL}cart/getCart/?userId=${userId}`).catch(() => {
            // sweetalert2 npm package is used to display error messages
            Swal.fire(
                'Error!',
                'Error occurred when retrieving data.',
                'error'
            )
        });
        console.log(data);
        setItemArr(data);

        // Total payable amount is also calculated
        let totalAmount = 0;
        for (let item of data) {
            totalAmount += (item.itemId.price * item.qty)
        }
        setTotal(totalAmount)
    };

    const changeItemQty = async (_id, qty) => {
        // Called when quantity is manipulated in the cart. Same method is used to delete items (deleted when qty is 0)
        await axios.post(`${baseURL}cart/changeItemQty/?userId=${userId}`, {_id:_id, qty:qty}).catch(() => {
            Swal.fire(
                'Error!',
                'Error occurred when updating data.',
                'error'
            )
        });
        // Cart is refreshed after updating
        getUserCart();
    };

    // increase quantity method
    const quantityInc = (itemId) => {
        let updated = [];
        let qty = 0;
        // item list is iterated to find the specific item and qty is updated.
        for (let item of itemArr) {
            if (item._id === itemId) {
                item.qty++;
                qty = item.qty;
            }
            updated.push(item);
        }
        // after updating, updated list is assigned to the array.
        setItemArr(updated);
        // backend is also called to save changes
        changeItemQty(itemId, qty);
    }

    const quantityDec = (itemId) => {
        let updated = [];
        let qty = 0;
        for (let item of itemArr) {
            if (item._id === itemId) {
                // This condition ensure that qty never reaches 0
                if (item.qty === 1) {
                    return;
                }
                item.qty--;
                qty = item.qty;
            }
            updated.push(item);
        }
        setItemArr(updated);
        changeItemQty(itemId, qty);
    }

    // method to remove items from cart
    const removeItem = (itemId) => {
        changeItemQty(itemId, 0);
    }

    // Call required methods automatically on start
    useEffect(() => {
        getUserCart();
    }, []);

    return (
        <div className="container mt-4 mb-4 page-default-height">
            <div>
                <h2 className="mb-4">Cart</h2>
            </div>
            <div className="row">
                {(itemArr.length === 0)
                    ?
                    // Rendered is cart is empty ie length = 0
                    <div className="col-12 text-danger p-5 text-center fw-bold">
                        Your cart is empty
                    </div>
                    :
                        <div className="row">
                            <div className="col-12 col-lg-9">
                            <TableContainer component={Paper}>
                                <Table sx={{minWidth: 650}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell align="center" className="fs-5">Name</TableCell>
                                            <TableCell align="center" className="fs-5">Price</TableCell>
                                            <TableCell align="center" className="fs-5">Quantity</TableCell>
                                            <TableCell align="center" className="fs-5">Total</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        { // data array is iterated and rows are rendered according to them
                                            itemArr?.map((row) => (
                                                <TableRow
                                                    key={row._id}
                                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                                >
                                                    <TableCell align="center" width="10%">
                                                        <img
                                                            src={fileBaseURL + row.itemId.imgUrl}
                                                            className="zoom rounded w-100"
                                                            alt="..."
                                                        />
                                                    </TableCell>
                                                    <TableCell align="left" className="fs-6 fw-bold ps-4">
                                                        {row.itemId.name}
                                                    </TableCell>
                                                    <TableCell align="center" className="fs-6 fw-bold">
                                                        Rs. {row.itemId.price}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <NumberInput
                                                            value={row.qty}
                                                            increment={() => quantityInc(row._id)}
                                                            decrement={() => quantityDec(row._id)}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center" className="fs-6 fw-bold">
                                                        Rs. {(row.itemId.price * row.qty)}
                                                    </TableCell>
                                                    <TableCell align="center" width="5%" className="ps-0 pe-2">
                                                        <button className="btn btn-sm btn-outline-danger w-100"
                                                                onClick={() => removeItem(row._id)}>
                                                            <DeleteOutlineIcon style={{marginTop: '-5px'}}/>
                                                        </button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <div className="col-12 col-lg-3 mt-4 mt-lg-0 pe-lg-0">
                            <div className="card card-body border-0 shadow text-center">
                                Total Amount
                                <div className="text-center w-100 fs-1 fw-bold pt-2 pb-3">
                                    Rs. {total}
                                </div>
                                {/* navigate to checkout page upon click */}
                                <Link to="/checkout">
                                    <button className="btn btn-primary w-100">
                                        <ShoppingBagIcon style={{marginTop: '-5px'}}/>
                                        <span className="ps-2">Go To Checkout </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShoppingCart;
