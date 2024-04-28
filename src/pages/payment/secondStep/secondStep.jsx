import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserName,
  setpaymentMessage,
  setPayment,
} from "../../../Redux/userSlice";
import { FaUser } from "react-icons/fa";
import styles from "./secondstep.module.scss";
import { Link } from "react-router-dom/dist";

export default function SecondStep() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  const [numberInput, setNumberInputLocally] = useState("");
  const [textInput, setTextInputLocally] = useState("");

  const numberInputRef = useRef(null);

  useEffect(() => {
    numberInputRef.current.focus();
  }, []);

  const handleNumberInputChange = (event) => {
    const input = event.target.value;

    setNumberInputLocally(input);
    dispatch(setPayment(input));
  };

  const handleTextInputChange = (event) => {
    const input = event.target.value;
    setTextInputLocally(input);
    dispatch(setpaymentMessage(input));
  };

  console.log("🚀 ~ SecondStep ~ userName:", userName);
  console.log("Number Input:", numberInput);
  console.log("Text Input:", textInput);

  return (
    <div className={styles.verifyContainer}>
      <div className={styles.verify}>
        <div className={styles.userInfo}>
          <FaUser size={45} color="#1d2d89" />
          <div className={styles.name}>{userName}</div>
        </div>
        <form className={styles.form}>
          <input
            ref={numberInputRef} // Ref added here
            type="number"
            placeholder="0.00"
            value={numberInput}
            onChange={handleNumberInputChange}
            className={styles.input}
          />
          <div className={styles.usd}>USD</div>
          <input
            type="text"
            placeholder="What is this payment for?"
            value={textInput}
            onChange={handleTextInputChange}
            className={styles.input}
          />
        </form>
      </div>

      <div className={styles.text}>
        <div className={styles.first}>
          Eligable purchases are covered by{" "}
          <Link to="" className={styles.link}>
            paypal buyer protection
          </Link>
        </div>
        <div className={styles.second}>
          For more information please read our
          <Link to="" className={styles.link}>
            user arguments
          </Link>
        </div>
      </div>

      <div className={styles.butns}>
        <Link to="/payment/acounting" className={styles.continue}>
          continue
        </Link>
        <Link to="/payment" className={styles.cancel}>
          cancel
        </Link>
      </div>
    </div>
  );
}
