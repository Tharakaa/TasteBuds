import React, {useEffect, useState} from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Moment from 'moment';
import axios from "axios";
import {Box, Collapse, IconButton} from "@mui/material";
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";

const OrderHistory = () => {

    const baseURL = process.env.REACT_APP_BASE_URL;
    const fileBaseURL = process.env.REACT_APP_FILE_BASE_URL;
    const userId = localStorage.getItem("userId");

    const [itemArr, setItemArr] = useState([]);

    const getUserOrders = async () => {
        const {data} = await axios.get(`${baseURL}order/getOrders/?userId=${userId}`);
        console.error(data)
        setItemArr(data);
    };

    useEffect(() => {
        getUserOrders();
    }, []);

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = useState(false);

        return (
            <>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell padding="checkbox">
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                        </IconButton>
                    </TableCell>
                    <TableCell align="center" className="fs-6 fw-bold ps-4">
                        { Moment(row.createdAt).format('DD MMMM YYYY') }
                    </TableCell>
                    <TableCell align="center" className="fs-6 fw-bold">
                        {(row.paymentType === "COD") ? "Cash On Delivery"
                            : (row.paymentType === "PAYPAL") ? "Paypal"
                                : row.paymentType}
                    </TableCell>
                    <TableCell align="center" className="fs-6 fw-bold">
                        Rs. {row.totalAmount}
                    </TableCell>

                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1, marginLeft: '60px', marginBottom: '60px' }}>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center"></TableCell>
                                            <TableCell align="center">Name</TableCell>
                                            <TableCell align="center">Unit Price</TableCell>
                                            <TableCell align="center">Quantity</TableCell>
                                            <TableCell align="center">Total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.itemIds.map((item) => (
                                            <TableRow key={item.itemId._id}>
                                                <TableCell align="center" component="th" scope="row">
                                                    <Box component="img"
                                                         style={{height: '60px', width: '60px', objectFit:'cover', borderRadius: '5%'}}
                                                         src={(fileBaseURL + item.itemId.imgUrl)} />
                                                </TableCell>
                                                <TableCell align="left">{item.itemId.name}</TableCell>
                                                <TableCell align="center">Rs. {item.unitPrice}</TableCell>
                                                <TableCell align="center">{item.qty}</TableCell>
                                                <TableCell align="center">{(item.unitPrice * item.qty)}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </>
        );
    }

    return (
        <div className="container mt-4 mb-4 page-default-height">
            <div>
                <h2 className="mb-4">Order History</h2>
            </div>
            <div className="row">
                {(itemArr.length === 0)
                    ?
                    <div className="col-12 text-danger p-5 text-center fw-bold">
                        Your order history is empty
                    </div>
                    :
                    <div className="col-12">
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding="checkbox"></TableCell>
                                        <TableCell align="center" className="fs-5">Date</TableCell>
                                        <TableCell align="center" className="fs-5">Payment Mode</TableCell>
                                        <TableCell align="center" className="fs-5">Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        itemArr?.map((row) => (
                                            <Row key={row._id} row={row}/>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                }
            </div>
        </div>
    );
};

export default OrderHistory;
