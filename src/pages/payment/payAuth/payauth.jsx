import React from "react";
import { useSelector } from "react-redux";
import { getUserName, getpayment } from "../../../Redux/userSlice";
import styles from "./payauth.module.scss";
import { Link } from "react-router-dom/dist";
export default function Payauth() {
  const name = useSelector(getUserName);
  console.log("🚀 ~ Payauth ~ name:", name);
  const payment = useSelector(getpayment);
  console.log("🚀 ~ Payauth ~ payment:", payment);
  return (
    <>
      <div className={styles.verifiction}>
        <div className={styles.image}>
          <img src={require("../../../images/verify.jpg")} alt="" />
        </div>
        <div className={styles.message}>
          you have sent {payment} USD to {name}
        </div>
        <div className={styles.butns}>
          <Link to="/payment" className={styles.sendMore}>
            send more money
          </Link>
          <Link to="/" className={styles.summery}>
            go to summery
          </Link>
        </div>
      </div>
    </>
  );
}
