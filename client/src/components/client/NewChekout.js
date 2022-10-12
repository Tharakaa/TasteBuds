import React, {useEffect, useState} from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link, useNavigate } from "react-router-dom";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Paypal from "./Paypal";
import Swal from "sweetalert2";
import LoadingOverlay from "react-loading-overlay";

const ShoppingCart = () => {

    const navigate = useNavigate();

    const baseURL = process.env.REACT_APP_BASE_URL;
    const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;
    const userId = localStorage.getItem("userId");

    const [itemArr, setItemArr] = useState([]);
    const [total, setTotal] = useState(0);
    const [value, setValue] = useState("paypal");
    const [loading, setLoading] = useState(false);

    // fetch cart for user
    const getUserCart = async () => {
        setLoading(true);
        const {data} = await axios.get(`${baseURL}cart/getCart/?userId=${userId}`).catch(() => {
            Swal.fire(
                'Error!',
                'Error occurred when retrieving data.',
                'error'
            )
        });
        setLoading(false);
        console.log(data);
        setItemArr(data);
        let totalAmount = 0;
        for (let item of data) {
            totalAmount += (item.itemId.price * item.qty)
        }
        setTotal(totalAmount)
    };

    const handleChange = (event) => {
        console.log(event);
        setValue(event.target.value);
    };

    // place order and reload data
    const placeOrder = async (paymentType) => {
        setLoading(true);
        await axios.post(`${baseURL}order/placeOrder/?userId=${userId}`, {paymentType: paymentType}).catch(() => {
            Swal.fire(
                'Error!',
                'Error occurred when saving data.',
                'error'
            )
        });
        await getUserCart();
        setLoading(false);
    };

    // sweetalert2 package is used to make sure that placing order is not a mistake click
    const placeOrderBtn = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Your order will be placed and cart will be cleared!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Place Order'
        }).then((result) => {
            if (result.isConfirmed) {
                placeOrder("COD");
                Swal.fire(
                    'Order Placed',
                    'You will receive an email with the receipt shortly.',
                    'success'
                ).then(() => {
                    navigate("/");
                })
            }
        })
    };


    useEffect(() => {
        getUserCart();
    }, []);

    return (
        <LoadingOverlay active={loading} spinner>
            <div className="container mt-4 mb-4 page-default-height">
                <div>
                    <h2 className="mb-4">Checkout</h2>
                </div>
                <div className="row">
                    {(itemArr.length === 0)
                        ?
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
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {itemArr?.map((row) => (
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
                                                    <TableCell align="center" className="fs-6 fw-bold ps-4">
                                                        {row.qty}
                                                    </TableCell>
                                                    <TableCell align="center" className="fs-6 fw-bold">
                                                        Rs. {(row.itemId.price * row.qty)}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            <div className="col-12 col-lg-3 mt-4 mb-4 mt-lg-0 pe-lg-0">
                                <div className="card card-body border-0 shadow text-center">
                                    Total Amount
                                    <div className="text-center w-100 fs-1 fw-bold pt-3 pb-3">
                                        Rs. {total}
                                    </div>
                                    <div>
                                        <h6 className="w-100 text-center">Select Payment Option</h6>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel
                                                value="paypal"
                                                control={<Radio/>}
                                                label="PayPal"
                                            />
                                            <FormControlLabel
                                                value="directBankTransfer"
                                                control={<Radio/>}
                                                label="Direct Bank Transfer"
                                            />
                                            <FormControlLabel
                                                value="cod"
                                                control={<Radio/>}
                                                label="Cash On Delivery"
                                            />
                                        </RadioGroup>
                                    </div>
                                    <hr/>
                                    <div>
                                        {   // different payment methods are rendered according to the selected radio button
                                            value === "paypal" ? (
                                                <Paypal/>
                                            ) : (
                                                value === "cod" ?
                                                    <button className="btn btn-primary w-100"
                                                            onClick={() => placeOrderBtn()}>
                                                        Place Order
                                                    </button>
                                                    :
                                                    <div className="text-center">
                                                        <span>Not Implemented Yet</span>
                                                        <br/>
                                                        <small className="text-danger">
                                                            Please select PayPal option
                                                        </small>
                                                    </div>
                                            )}
                                    </div>
                                    <hr/>
                                    <div className="px-3">
                                        <Link to="/shopping-cart">
                                            <button className="btn btn-outline-primary w-100">
                                                <EditOutlinedIcon style={{marginTop: '-5px'}}/>
                                                <span className="ps-2">Edit Cart</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </LoadingOverlay>
    );
};

export default ShoppingCart;
