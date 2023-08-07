import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {
  FooterData,
  FooterDataTwo,
} from "../../constants/CommonData/CommonData";
import styles from "./styles.module.css";
import { footerImg, paymentImg } from "../../resources/Images/Images";

const Footer = () => {
  const footerTopSection = () => {
    return (
      <div className={styles.footerTopContainer}>
        <div>
          <AiOutlineMail className={styles.footerTopImgBlock} />
        </div>
        <h2 className={styles.footerTopHeading}>
          NEVER MI<span className={styles.footerTopHeadingBorder}>SS AN</span>{" "}
          OFFER
        </h2>
        <p className={styles.footerTopSubDesc}>
          Subscribe Now To Receive Offers & Gift Vouchers Directly In Your
          Inbox.
        </p>
        <div className={styles.footerTopInputAndButtonBlock}>
          <Input
            customInputStyles={styles.footerTopInputStyles}
            placeholder="Your Email Address"
          />
          <Button btName="SUBSCRIBE" btnStyles={styles.subscribeBtnStyles} />
        </div>
        <div className={styles.footerTopMenuItemsContainer}>
          <div className={styles.footerTopMenuItems}>
            {FooterData &&
              FooterData.map((item, index) => {
                return (
                  <div className={styles.footerDataBlock} key={index}>
                    <p className={styles.footerItem}>{item.footerItem}</p>
                  </div>
                );
              })}
          </div>

          <div className={styles.footerTopMenuItems}>
            {FooterDataTwo &&
              FooterDataTwo.map((item, index) => {
                return (
                  <div className={styles.footerDataBlock} key={index}>
                    <p className={styles.footerItem}>{item.footerItem}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  };

  const footerBottomSection = () => {
    return (
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerLeftContainer}>
          © 2015-2022, Spotless Fruits India Powered By WCIT
        </div>
        <div className={styles.footerMiddleContainer}>
          <img src={footerImg} alt="" className={styles.imageWidth} />
        </div>
        <div className={styles.footerRightContainer}>
          <img src={paymentImg} alt="" className={styles.imageWidth} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.footerMainContainer}>
      {footerTopSection()}
      {footerBottomSection()}
    </div>
  );
};

export default Footer;
