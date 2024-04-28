import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setActiveState, getActiveState } from "../../Redux/activeSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const activeLink = useSelector(getActiveState);

  const handleLinkClick = (link) => {
    dispatch(setActiveState(link));
  };
  return (
    <div className={styles.navbar}>
      <nav className="navbar navbar-expand-lg">
        <div className={`container  justify-content-center align-items-center`}>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <div
            className={` ${styles.navbarToggle} collapse navbar-collapse d-flex justify-content-between align-items-center`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav w-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={` nav-link `}
                  onClick={() => handleLinkClick("/")} // Dispatch action when link is clicked
                  aria-current="page"
                  to="/"
                >
                  <div className={styles.image}>
                    <img src={require("../../images/logo2.jpg")} alt="" />
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={` nav-link ${
                    activeLink === "/" && "active" // Apply active class if activeLink is "/"
                  }`}
                  onClick={() => handleLinkClick("/")} // Dispatch action when link is clicked
                  aria-current="page"
                  to="/"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={` nav-link ${
                    activeLink === "/payment" && "active"
                  }`}
                  onClick={() => handleLinkClick("/payment")}
                  aria-current="page"
                  to="/payment"
                >
                  Send and Request
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link " aria-current="page" to="/">
                  wallet
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link " aria-current="page" to="/">
                  activity
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link " aria-current="page" to="/">
                  help
                </Link>
              </li>
            </ul>

            <div className={styles.icons}>
              <IoIosNotifications size={22} color="#d1f1ff" />
              <IoMdSettings size={22} color="#d1f1ff" />
              <Link to="/" className={styles.logout}>
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
