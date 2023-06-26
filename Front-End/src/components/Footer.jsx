import React from "react";
import logo from "../assets/images/logo trans2.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="section-p1 ">
      <div className="footer-col">
        <div className="info-footer">
          <img className="logo" src={logo} alt="" width="25%" />
          <h4>Contact</h4>
          <p>
            <strong>Addess: </strong> 562 Wllington Road,Street 32, San
            Francisco
          </p>
          <p>
            <strong>Phone: </strong> +01 2222 365 /(+91) 01 2345 6789
          </p>
          <p>
            <strong>Hours: </strong>10:00 - 18:00, Mon - Sat{" "}
          </p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-col">
        <h4>About</h4>
        <Link>About us</Link>
        <Link>Delivery Information</Link>
        <Link>Privacy policy</Link>
        <Link>Terms & Conditions </Link>
        <Link>Contact Us</Link>
      </div>

      <div className="footer-col">
        <h4>My Account</h4>
        <Link>Sign In</Link>
        <Link>View Cart</Link>
        <Link>My Wishlist</Link>
        <Link>Track My Order</Link>
        <Link>Help</Link>
      </div>

      <div className="copyright">
        <p>© 2023, Alexflex.co</p>
      </div>
    </footer>
  );
}
