import React from "react";
import styles from "./styles.module.css";
import { CiStar } from "react-icons/ci";

const PremiumFruitCard = (props) => {
  const {
    premiumFruitImage,
    premiumFruitHeading,
    premiumFruitOriginalPrice,
    premiumFruitOfferPrice,
  } = props;
  return (
    <div className={styles.premiumFruitCardContainer}>
      <div className={styles.premiunFruitCardLeftBlock}>
        <img src={premiumFruitImage} alt="" className={styles.imageWidth} />
      </div>
      <div className={styles.premiunFruitCardRightBlock}>
        <p className={styles.premiumFruitHeading}>{premiumFruitHeading}</p>
        <div className={styles.premiunFruitPrices}>
          <p className={styles.premiumFruitOriginalPrice}>
            {premiumFruitOriginalPrice}
          </p>
          <p className={styles.premiumFruitOfferPrice}>
            {premiumFruitOfferPrice}
          </p>
        </div>
        <div className={styles.starsBlock}>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
      </div>
    </div>
  );
};

export default PremiumFruitCard;
