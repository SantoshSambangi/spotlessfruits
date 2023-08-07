import React from "react";
import Button from "../../Button/Button";
import styles from "./styles.module.css";

const DetailsCard = (props) => {
  const {
    detailsCardImg,
    detaildsCardHeading,
    detaildsCardSubHeading,
    detaildsCardSubDesc,
    index,
  } = props;
  let cardStyle;

  // Apply different styles based on the index
  if (index === 0) {
    cardStyle = styles.orangeCard;
  } else if (index === 1) {
    cardStyle = styles.blueCard;
  } else if (index === 2) {
    cardStyle = styles.greyCard;
  } else {
    cardStyle = styles.defaultCard;
  }
  return (
    <div className={`${styles.detailsCardContainer} ${cardStyle}`}>
      <div className={styles.detailsCardLeftBlock}>
        <img src={detailsCardImg} alt="" className={styles.imageWidth} />
      </div>
      <div className={styles.detailsCardRightBlock}>
        <p className={styles.detaildsCardHeading}>{detaildsCardHeading}</p>
        <p className={styles.detaildsCardSubHeading}>
          {detaildsCardSubHeading}
          <span className={styles.detaildsCardSubDesc}>
            {detaildsCardSubDesc}
          </span>
        </p>
        <Button btName="SHOP NOW" btnStyles={styles.shopNowBtnStyles} />
      </div>
    </div>
  );
};

export default DetailsCard;
