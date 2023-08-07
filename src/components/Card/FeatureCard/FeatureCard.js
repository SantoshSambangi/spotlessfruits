import React from "react";
import styles from "./styles.module.css";

const FeatureCard = (props) => {
  const { featureCardImg, featureCardHeading, featureCardDesc } = props;
  return (
    <div className={styles.featureCardContainer}>
      <div className={styles.featureCardImgBlock}>
        <img src={featureCardImg} alt="" className={styles.imageWidth} />
      </div>
      <div className={styles.featureCardDesc}>
        <h5 className={styles.featureCardHeading}>{featureCardHeading}</h5>
        <p className={styles.featureCardDesc}>{featureCardDesc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
