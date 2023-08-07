import React from "react";
import styles from "./styles.module.css";
import { CiStar } from "react-icons/ci";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const DealOfTheDayCard = (props) => {
  const {
    dealOfTheDayImg,
    dealOfTheDayHeading,
    originalPrice,
    offerPrice,
    dealOfTheDesc,
    dealOfTheDayTime,
  } = props;
  return (
    <div className={styles.dealOfTheDayCardContainer}>
      <div className={styles.dealOfTheLeftBlock}>
        <img src={dealOfTheDayImg} alt="" className={styles.imageWidth} />
      </div>
      <div className={styles.dealOfTheRightBlock}>
        <h4 className={styles.dealOfTheDayHeading}>{dealOfTheDayHeading}</h4>
        <div className={styles.dealOfTheDayPrices}>
          <p className={styles.originalPrice}>{originalPrice}</p>
          <p className={styles.offerPrice}>{offerPrice}</p>
        </div>
        <div className={styles.starsBlock}>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
        <p className={styles.dealOfTheDesc}>{dealOfTheDesc}</p>
        <p className={styles.dealOfTheDayTime}>{dealOfTheDayTime}</p>
        <div className={styles.dealOfTheDayIconBlock}>
          <AiFillEye className={styles.dealOfTheDayIcon} />
          <AiOutlineHeart className={styles.dealOfTheDayIcon} />
          <BsFillCartFill className={styles.dealOfTheDayIcon} />
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDayCard;
