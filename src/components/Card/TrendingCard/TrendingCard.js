import React from "react";
import styles from "./styles.module.css";
import { CiStar } from "react-icons/ci";

const TrendingCard = (props) => {
  const {
    trendingImgBlock,
    trendHeading,
    trendingDesc,
    oroginalPrice,
    offerPrice,
  } = props;
  return (
    <div className={styles.trendingCardContainer}>
      <div className={styles.trendingCardLeftBlock}>
        <div className={styles.trendingImgBlock}>
          <img src={trendingImgBlock} alt="" className={styles.imageWidth} />
        </div>
        <div className={styles.starBlock}>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
        <h5 className={styles.trendingHeading}>{trendHeading}</h5>
        <p className={styles.trendingDesc}>{trendingDesc}</p>
        <div className={styles.trendingPrices}>
          <p className={styles.oroginalPrice}>{oroginalPrice}</p>
          <p className={styles.offerPrice}>{offerPrice}</p>
        </div>
      </div>
      <div className={styles.trendingCardRightBlock}>
        <div className={styles.timeBlock}>
          <p className={styles.timer}>22</p>
          <p className={styles.time}>days</p>
        </div>
        <div className={styles.timeBlock}>
          <p className={styles.timer}>04</p>
          <p className={styles.time}>hours</p>
        </div>
        <div className={styles.timeBlock}>
          <p className={styles.timer}>05</p>
          <p className={styles.time}>minutes</p>
        </div>
        <div className={styles.timeBlock}>
          <p className={styles.timer}>57</p>
          <p className={styles.time}>seconds</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
