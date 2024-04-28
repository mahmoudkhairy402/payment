import React from "react";
import styles from "./dashboard.module.scss";
import { Link } from "react-router-dom/dist";
import { RiBankFill } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { IoMdMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setActiveState } from "../../Redux/activeSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const handleLinkClick = (link) => {
    dispatch(setActiveState(link));
  };
  return (
    <div className={`container ${styles.dashboard}`}>
      <div className="row d-flex justify-content-between ">
        <div className="col-12 col-lg-7">
          <div className={styles.paypalInfo}>
            <div className={styles.image}>
              <img src={require("../../images/logo2.jpg")} alt="" />
            </div>
            <div className={styles.text}>
              <div className={styles.mainTitle}>get the paypal app</div>
              <div className={styles.secTitle}>
                start doing more with paypal
              </div>
            </div>
          </div>
          <div className="cards w-100 d-flex justify-content-between gap-2">
            <div className={styles.card}>
              <div className={styles.image}>
                <img
                  src={require("../../images/ball.jpg")}
                  alt=""
                  style={{ width: "150px" }}
                />
              </div>
              <div className={styles.mainTitle}>Pay someone</div>
              <div className={styles.secTitle}>
                Pay for things that you bought or service you received
              </div>
              <div
                className={`btn btn-outline-primary rounded-5 ${styles.butn}`}
              >
                send payments
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.image}>
                <img src={require("../../images/message.png")} alt="" />
              </div>
              <div className={styles.mainTitle}>Get paid </div>
              <div className={styles.secTitle}>
                Get paid for selling something or for the work you did
              </div>
              <div
                className={`btn btn-outline-primary rounded-5 ${styles.butn}`}
              >
                send payments
              </div>
            </div>
          </div>

          <div className={styles.balance}>
            <div className={styles.mainTitle}>PayPal balance</div>
            <div className={styles.price}>17831.18 eur</div>
            <div className={styles.available}>available</div>
            <Link to="/" className={styles.butn}>
              Transfer Funds
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-5 mt-5 mt-lg-0">
          <div className={styles.butns}>
            <Link
              onClick={() => handleLinkClick("/payment")}
              to="/payment"
              className={styles.butn}
            >
              send
            </Link>
            <Link to="/" className={styles.butn}>
              request
            </Link>
          </div>
          <div className={styles.booking}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <GrNotes className={styles.i} size={27} color="#0d216a" />
              </div>
              <Link to="/">Create an invoice</Link>
            </div>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <RiBankFill className={styles.i} size={27} color="#0d216a" />
              </div>{" "}
              <Link to="/">add card or bank</Link>
            </div>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <IoMdMore className={styles.i} size={27} color="#0d216a" />
              </div>{" "}
              <Link to="/">more</Link>
            </div>
          </div>
          <div className={styles.sendAgain}>
            <div className={styles.send}>Send again</div>
            <IoMdMore className={`${styles.i} `} size={27} color="#DAD9D8" />
          </div>
          <div
            className={styles.iconContainer}
            style={{ alignItems: "flex-start" }}
          >
            <div
              className={`${styles.icon}`}
              style={{ backgroundColor: "#0d216a" }}
            >
              <FaSearch className={styles.i} size={27} color="#fff" />
            </div>{" "}
            <Link to="/">Search</Link>
          </div>
          <div className={styles.bankTitle}>banks and cards</div>
          <div className={styles.banking}>
            <div className={styles.image}>
              <img src={require("../../images/wallet.jpg")} alt="" />
            </div>
            <div className={styles.text}>
              <div className={styles.mainTitle}>
                Shop and send payments more securely. Link your credit card now.
              </div>
            </div>
          </div>
          <Link
            to="/"
            className={`${styles.link} text-primary mt-1 font-weight-bold`}
          >
            Link a Card or Bank
          </Link>
          <div className={styles.more}>
            <div className={styles.image}>
              <img src={require("../../images/more.jpg")} alt="" />
            </div>
            <Link to="/" className={styles.moreLink}>
              more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
