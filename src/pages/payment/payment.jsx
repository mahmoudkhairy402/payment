import React, { useState } from "react";
import styles from "./payment.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setUserName } from "../../Redux/userSlice";
import { RiShareBoxFill } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";

export default function Payment() {
  const [active, setActive] = useState("/send");
  const [userName, setUserNameState] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActive(link);
  };

  const handleInputChange = (event) => {
    setUserNameState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username entered:", userName);
  };

  const handleNextClick = () => {
    if (userName) {
      dispatch(setUserName(userName));
      navigate("/payment/verify");
    }
  };

  return (
    <>
      <div className={styles.header}>
        <ul className="container w-100 me-auto">
          <li>
            <Link
              className={`t ${active === "/send" && "activeSec"}`}
              onClick={() => handleLinkClick("/send")}
            >
              Send
            </Link>
          </li>
          <li>
            <Link
              className={`t ${active === "/request" && "activeSec"}`}
              onClick={() => handleLinkClick("/request")}
            >
              Requists
            </Link>
          </li>
          <li>
            <Link
              className={`t ${active === "/contacts" && "activeSec"}`}
              onClick={() => handleLinkClick("/contacts")}
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              className={`t ${active === "/more" && "activeSec"}`}
              onClick={() => handleLinkClick("/more")}
            >
              more
            </Link>
          </li>
        </ul>
      </div>
      <div className={`container ${styles.payment}`}>
        <div className="row d-flex justify-content-center ">
          <div className="col-12 col-lg-6 d-flex flex-column g-2">
            <div className={styles.mainTitle}>send payment to</div>
            <form
              className={`d-flex mx-auto ${styles.navForm}`}
              role="search"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control me-2"
                type="text"
                placeholder="Name,@username, email, or mobile"
                aria-label="Search"
                value={userName}
                onChange={handleInputChange}
                required
              />
              <div className={`${styles.searchIcon}`}>
                {" "}
                <IoIosSearch size={24} />
              </div>
            </form>
            <div
              onClick={handleNextClick}
              className={`${styles.next}  ${userName ? "" : "disabled"}`}
            >
              next
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className={styles.more}>
              <div className={styles.bankTitle}>More Ways To Send</div>
              <div className={styles.banking}>
                <div className={styles.image}>
                  <GrNotes className={styles.i} size={27} color="#0d216a" />
                </div>
                <div className={styles.text}>
                  <div className={styles.head}>send an invoice</div>
                  <div className={styles.mainTitle}>
                    Shop and send payments more securely. Link your credit card
                    now.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
