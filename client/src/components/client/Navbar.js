import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import axios from "axios";

const Navbar = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const userId = localStorage.getItem("userId");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [cartCount, setCartCount] = useState(0);

  const getUserCart = async () => {
    const {data} = await axios.get(`${baseURL}cart/getCart/?userId=${userId}`);
    if (data) {
      setCartCount(data.length);
    } else {
      setCartCount(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getUserCart();
    }, 3000);
    return () => clearInterval(interval);
  }, [])

  let logOut = () => {};

  return (
    // <nav className="navbar navbar-expand-lg bg-light">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       TasteBuds
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/favourite-outlets">
    //             Favriout outlets
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/favourite-items">
    //             Favriout items
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/shopping-cart">
    //             Shopping Cart
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <div className="position-relative">
      <nav className="navbar navbar-expand-lg bg-light" style={{ zIndex: 1 }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h2 className="cus-font">TasteBuds</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/favourite-outlets">
                  <BookmarksIcon />
                  <span className="ps-1">Favriout outlets</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favourite-items">
                  <FavoriteIcon />
                  <span className="ps-1">Favriout items</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shopping-cart">
                  <Badge badgeContent={cartCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>

                  <span className="ps-3">Shopping Cart</span>
                </Link>
              </li>
              <li
                className="nav-item"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <button className="nav-link cursor-pointer border-0 bg-light">
                  <AccountCircleIcon />
                  <span className="ps-1">Profile</span>
                </button>
              </li>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link className="nav-link" to="/profile">
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link className="nav-link" to="/order-history">
                  <MenuItem onClick={handleClose}>Order History</MenuItem>
                </Link>
                <MenuItem onClick={() => logOut()}>Logout</MenuItem>
              </Menu>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
