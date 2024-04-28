import React from "react";
import { useSelector } from "react-redux";
import { getUserName, getpayment } from "../../../Redux/userSlice";
import styles from "./payauth.module.scss";
import { Link } from "react-router-dom/dist";
import { IoIosArrowBack } from "react-icons/io";
import { MdHomeRepairService } from "react-icons/md";
import { IoHome } from "react-icons/io5";
export default function Payauth() {
  const name = useSelector(getUserName);
  console.log("🚀 ~ Payauth ~ name:", name);
  const payment = useSelector(getpayment);
  console.log("🚀 ~ Payauth ~ payment:", payment);
  return (
    <>
      <div className={styles.accountContainer}>
        <div className={styles.acounting}>
          <div className={`${styles.header} row`}>
            <div className={`${styles.image} col-2`}>
              <img src={require("../../../images/visa.jpg")} alt="" />
            </div>
            <div className="d-flex justify-content-between col-10">
              <div className={`${styles.spans}`}>
                <div>visa</div>
                <div>****6641</div>
                <div className={styles.prefered}>prefered</div>
              </div>
              <Link to="/payment/verify" className={styles.back}>
                <IoIosArrowBack size={25} className={styles.i} />
              </Link>
            </div>
          </div>
          <div
            className={`${styles.title} title d-flex  align-items-center mt-4`}
            style={{ width: "70%" }}
          >
            <IoHome size={23} color="#464a4d" className={styles.i} />
            <div className={styles.text}>good and services payment</div>
          </div>
          <div className={styles.secTitle}>
            Get a full refund if an eligible item gets lost or damaged . seller
            pays a small fee
          </div>
          <Link className={styles.more}>more on purchase protection</Link>

          {/* <div className={styles.inputcon}>
            <input
              type="text"
              name
              id
              defaultValue={name}
              classname={`${styles.input}`}
            />
          </div> */}
          <div className={styles.payInfo}>
            <span>PayPal fee</span>
            <span>0.00 USD</span>
          </div>
          <div className={styles.payInfo2}>
            <span>Total</span>
            <span>{payment} USD</span>
          </div>
          <div className={styles.second}>
            For more information please read our
            <Link to="" className={styles.link}>
              user arguments
            </Link>
          </div>
          <div className={styles.butns}>
            <Link to="/payment/payverification" className={styles.continue}>
              continue
            </Link>
            <Link to="" className={styles.cancel}>
              cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
