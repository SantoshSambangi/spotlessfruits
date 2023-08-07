import React from "react";
import styles from "./styles.module.css";
import { CiStar } from "react-icons/ci";
const FreshFruitCard = (props) => {
  const { freshFruitImg, freshFruitHeading, oroginalPrice, offerPrice } = props;
  return (
    <div className={styles.freshFruitCardContianer}>
      <div className={styles.freshFruitImgBlock}>
        <img src={freshFruitImg} alt="" className={styles.imageWidth} />
      </div>
      <div className={styles.freshFruitMainDescBlock}>
        <div className={styles.freshFruitDescBlock}>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
        <p className={styles.freshFruitHeading}>{freshFruitHeading}</p>
        <div className={styles.pricesBlock}>
          <p className={styles.oroginalPrice}>{oroginalPrice}</p>
          <p className={styles.offerPrice}>{offerPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default FreshFruitCard;
