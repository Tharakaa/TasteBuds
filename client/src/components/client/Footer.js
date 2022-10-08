import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted pt-1">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h3 className=" fw-bold mb-4 cus-font">TasteBuds</h3>
                <h5>The fastest food delivery partner</h5>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link className="nav-link" to="/favourite-outlets">
                    Favriout outlets
                  </Link>
                </p>
                <p>
                  <Link className="nav-link" to="/favourite-items">
                    Favriout items
                  </Link>
                </p>
                <p>
                  <Link className="nav-link" to="/shopping-cart">
                    Shopping Cart
                  </Link>
                </p>
                <p>
                  <Link className="nav-link" to="/">
                    TasteBuds
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Learn more</h6>
                <p>Privacy</p>
                <p>Settings</p>
                <p>Terms</p>
                <p>Help</p>
              </div>
            </div>
          </div>
        </section>

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Social networks:</span>
          </div>

          <div>
            <Link to="" className="me-4 text-reset">
              <BsFacebook />
            </Link>
            <Link to="" className="me-4 text-reset">
              <BsInstagram />
            </Link>
            <Link to="" className="me-4 text-reset">
              <BsGoogle />
            </Link>
            <Link to="" className="me-4 text-reset">
              <BsTwitter />
            </Link>
            <Link to="" className="me-4 text-reset">
              <BsYoutube />
            </Link>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="http://localhost:3000/">
            TasteBuds.lk
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
