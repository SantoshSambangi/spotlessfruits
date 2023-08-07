import React from "react";
import styles from "./styles.module.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import {
  appleImg3,
  bannerLeftImg,
  bannerRightImg,
  serachImg,
} from "../../resources/Images/Images";
import {
  brandNewLogoData,
  dealOfTheDayData,
  detailsData,
  featuresData,
  freshFruitData,
  premiunFruitData,
  trendingCardData,
} from "../../constants/CommonData/CommonData";
import PremiumFruitCard from "../../components/Card/PremiunFruitSection/PremiumFruitCard";
import DealOfTheDayCard from "../../components/Card/DealOfTheDay/DealOfTheDayCard";
import DetailsCard from "../../components/Card/DetailsCard/DetailsCard";
import FeatureCard from "../../components/Card/FeatureCard/FeatureCard";
import TrendingCard from "../../components/Card/TrendingCard/TrendingCard";
import FreshFruitCard from "../../components/Card/FreshFruitCard/FreshFruitCard";
import { CiStar } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import Input from "../../components/Input/Input";
import { BsFillTelephoneFill, BsChatLeftDotsFill } from "react-icons/bs";

const Home = () => {
  const bannerSection = () => {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.bannerLeftBlock}>
          <h1 className={styles.bannerLeftHeading}>
            FRESH
            <br /> APRICOT
          </h1>
          <p className={styles.bannerLeftDesc}>AVAILABLE NOW</p>
          <Button btName="BUY NOW" btnStyles={styles.bannerBtnStyles} />
        </div>
        <div className={styles.bannerRightBlock}>
          <img src={bannerRightImg} alt="" className={styles.imageWidth} />
        </div>
      </div>
    );
  };

  const premiumFruitSection = () => {
    return (
      <div className={styles.premiumSectionContainer}>
        <div className={styles.premiumFruitsTitleBlock}>
          <h3 className={styles.premiumFruitsTitle}>PREMIUM FRUITS</h3>
        </div>
        <div className={styles.premiumFruitCard}>
          {premiunFruitData &&
            premiunFruitData.map((item, index) => {
              return (
                <PremiumFruitCard
                  premiumFruitImage={item.premiumFruitImage}
                  premiumFruitHeading={item.premiumFruitHeading}
                  premiumFruitOriginalPrice={item.premiumFruitOriginalPrice}
                  premiumFruitOfferPrice={item.premiumFruitOfferPrice}
                />
              );
            })}
        </div>
      </div>
    );
  };

  const dealOfTheDaySection = () => {
    return (
      <div className={styles.dealOfTheDayContainer}>
        <h3 className={styles.dealOfTheDayHeading}>DEAL OF THE DAY</h3>
        <div className={styles.dealOfTheDayDataContainer}>
          {dealOfTheDayData &&
            dealOfTheDayData.map((item, index) => {
              return (
                <DealOfTheDayCard
                  key={index}
                  dealOfTheDayImg={item.dealOfTheDayImg}
                  dealOfTheDayHeading={item.dealOfTheDayHeading}
                  originalPrice={item.originalPrice}
                  offerPrice={item.offerPrice}
                  dealOfTheDesc={item.dealOfTheDesc}
                  dealOfTheDayTime={item.dealOfTheDayTime}
                />
              );
            })}
        </div>
      </div>
    );
  };

  const detailsSection = () => {
    return (
      <div className={styles.detailsCardContainer}>
        {detailsData &&
          detailsData.map((item, index) => {
            return (
              <DetailsCard
                key={index}
                index={index}
                detailsCardImg={item.detailsCardImg}
                detaildsCardHeading={item.detaildsCardHeading}
                detaildsCardSubHeading={item.detaildsCardSubHeading}
                detaildsCardSubDesc={item.detaildsCardSubDesc}
              />
            );
          })}
      </div>
    );
  };

  const featuresSection = () => {
    return (
      <div className={styles.featuresContainer}>
        {featuresData &&
          featuresData.map((item, index) => {
            return (
              <FeatureCard
                key={index}
                featureCardImg={item.featureCardImg}
                featureCardHeading={item.featureCardHeading}
                featureCardDesc={item.featureCardDesc}
              />
            );
          })}
      </div>
    );
  };

  const premiumImportedFruitsSection = () => {
    return (
      <div className={styles.premiumSectionContainer}>
        <div className={styles.premiumFruitsTitleBlock}>
          <h3 className={styles.premiumImportFruitsTitle}>
            PREMIUM IMPORTED FRUITS
          </h3>
        </div>
        <div className={styles.premiumImportFruitCard}>
          {premiunFruitData &&
            premiunFruitData.map((item, index) => {
              return (
                <PremiumFruitCard
                  premiumFruitImage={item.premiumFruitImage}
                  premiumFruitHeading={item.premiumFruitHeading}
                  premiumFruitOriginalPrice={item.premiumFruitOriginalPrice}
                  premiumFruitOfferPrice={item.premiumFruitOfferPrice}
                />
              );
            })}
        </div>
      </div>
    );
  };

  const trendingNowSection = () => {
    return (
      <div className={styles.trendingNowContainer}>
        {trendingCardData &&
          trendingCardData.map((item, index) => {
            return (
              <TrendingCard
                key={index}
                trendingImgBlock={item.trendingImgBlock}
                trendHeading={item.trendHeading}
                trendingDesc={item.trendingDesc}
                oroginalPrice={item.oroginalPrice}
                offerPrice={item.offerPrice}
              />
            );
          })}
      </div>
    );
  };

  const specialDiscountSection = () => {
    return (
      <div className={styles.specialDiscountMainContainer}>
        <div className={styles.specialDiscountContainer}>
          <p className={styles.specialDiscount}>Special Discount</p>
          <div className={styles.saleEndsBlock}>
            <h2 className={styles.discountHeading}>FRESH FRUITS</h2>
            <p className={styles.saleEndDesc}>THE SALE ENDS IN :</p>
          </div>
          <div className={styles.borderContainer}>
            <div className={styles.rightBorder}></div>
            <div className={styles.leftBorder}></div>
          </div>
          <div className={styles.timeBlock}>
            <div className={styles.timerBlock}>
              <p className={styles.timer}>53</p>
              <p className={styles.time}>days</p>
            </div>
            <div className={styles.timerBlock}>
              <p className={styles.timer}>03</p>
              <p className={styles.time}>hours</p>
            </div>
            <div className={styles.timerBlock}>
              <p className={styles.timer}>27</p>
              <p className={styles.time}>Minutes</p>
            </div>
            <div className={styles.timerBlock}>
              <p className={styles.timer}>16</p>
              <p className={styles.time}>seconds</p>
            </div>
          </div>
          <Button btName="SHOP NOW" btnStyles={styles.shopNowBtnStyles} />
        </div>
      </div>
    );
  };

  const brandLogoSection = () => {
    return (
      <div className={styles.brandNewContainerBlock}>
        {brandNewLogoData &&
          brandNewLogoData.map((item, index) => {
            return (
              <div className={styles.brandNewImgBlock}>
                <img
                  src={item.brandNewLogoOne}
                  alt=""
                  className={styles.imageWidthOne}
                />
                <img
                  src={item.brandNewLogoTwo}
                  alt=""
                  className={styles.imageWidthTwo}
                />
              </div>
            );
          })}
      </div>
    );
  };

  const freshFruitsSection = () => {
    return (
      <div className={styles.freshFruitMainContainer}>
        <h2 className={styles.fruitSectionHeading}>FRESH FRUITS</h2>
        <div className={styles.freshFruitSectionSubHeading}>
          <p
            className={`${styles.freshFruitSubHeading} ${styles.freshFruitSubHeadingOne}`}
          >
            MANGOES
          </p>
          <p className={styles.freshFruitSubHeading}>BERRIES</p>
          <p className={styles.freshFruitSubHeading}>BESTSELLERS</p>
        </div>
        <div className={styles.fruitSectionContainer}>
          {freshFruitData &&
            freshFruitData.map((item, index) => {
              return (
                <FreshFruitCard
                  freshFruitImg={item.freshFruitImg}
                  freshFruitHeading={item.freshFruitHeading}
                  oroginalPrice={item.oroginalPrice}
                  offerPrice={item.offerPrice}
                />
              );
            })}
        </div>
        <Button
          btName="View All Products"
          btnStyles={styles.viewProductBtnStyle}
        />
      </div>
    );
  };

  const dealsAndNewsLetterSection = () => {
    return (
      <div className={styles.dealsAndNewsLetterContainer}>
        {dealsAndNewsLeftCardSection()}
        {dealsAndNewsRightCard()}
      </div>
    );
  };

  const dealsAndNewsLeftCardSection = () => {
    return (
      <div className={styles.dealsAndNewsLeftMainContainer}>
        <div className={styles.dealsAndNewsHeadingBlock}>
          <h3 className={styles.dealsAndNewsHeadingSubBlock}>TODAY'S DEALS</h3>
        </div>
        <div className={styles.dealsAndNewsLeftCard}>
          <div className={styles.dealsAndNewsLeftImgBlock}>
            <img src={appleImg3} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.dealsAndNewsLeftDesc}>
            <p className={styles.dealsAndNewsHeading}>
              Fresh Nectarine Imported
            </p>
            <p className={styles.dealsAndNewsDesc}>
              {" "}
              Fresh Imported Nectarine delivered directly to your home within 24
              hours in Mumbai, Nav...{" "}
            </p>
            <div className={styles.pricesBlock}>
              <p className={styles.originalPrice}>Rs. 625.00</p>
              <p className={styles.offerPrice}> Rs. 550.00 </p>
            </div>
            <div className={styles.starBlock}>
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            <div className={styles.timerBlock}>
              <p className={styles.timer}>22:</p>
              <p className={styles.timer}>11:</p>
              <p className={styles.timer}>10:</p>
              <p className={styles.timer}>10</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const dealsAndNewsRightCard = () => {
    return (
      <div className={styles.dealsAndNewsRightMainContainer}>
        <div>
          <h2 className={styles.newsLetterHeading}>NEWSLETTER</h2>
        </div>
        <div className={styles.dealsAndNewsRightCard}>
          <div className={styles.dealsAndNewsRightDesc}>
            <AiOutlineMail className={styles.dealsAndNewsRightDescOne} />
            <p className={styles.dealsAndNewsRightDescHeading}>
              Sign Up & Get Offer
            </p>
          </div>
          <div className={styles.dealsAndNewsRightSubDesc}>
            <p className={styles.dealsAndNewsRightSubDescOne}>
              Sign up now to get offer's directly to your inbox. Get gift
              voucher that can be used on your second purchase on Spotless
              Fruits.
            </p>
          </div>
          <div className={styles.dealsInputAndButtonBlock}>
            <Input
              placeholder="Your Email Address"
              customInputStyles={styles.emailInputStyles}
            />
            <Button btName="SUBSCRIBE" btnStyles={styles.subscribeBtnStyles} />
          </div>
        </div>
      </div>
    );
  };

  const contactSection = () => {
    return (
      <div className={styles.contactContainer}>
        <div className={styles.contactLeftBlock}>
          <div className={styles.contactLeftSubBlock}>
            <div className={styles.contactLeftImgBlockOne}>
              <BsFillTelephoneFill className={styles.contactLeftImgBlock} />
            </div>
            <div className={styles.contactRightDesc}>
              <p className={styles.contactHeading}>WhatsApp :</p>
              <p className={styles.contactInfo}>+918169861024</p>
            </div>
          </div>
        </div>

        <div className={styles.contactLeftBlock}>
          <div className={styles.contactLeftSubBlock}>
            <div className={styles.contactLeftImgBlockOne}>
              <AiOutlineMail className={styles.contactLeftImgBlock} />
            </div>
            <div className={styles.contactRightDesc}>
              <p className={styles.contactHeading}>Email :</p>
              <p className={styles.contactInfo}>Care@Spotlessfruits</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FooterSection = () => {
    return (
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    );
  };

  const chatButtonSection = () => {
    return (
      <div className={styles.chatButtonContainer}>
        <BsChatLeftDotsFill className={styles.chatLogo} />
        <p>Chat</p>
      </div>
    );
  };

  return (
    <div className={styles.homeMainContainer}>
      <Navbar />
      {bannerSection()}
      {premiumFruitSection()}
      {dealOfTheDaySection()}
      {detailsSection()}
      {featuresSection()}
      {premiumImportedFruitsSection()}
      {trendingNowSection()}
      {specialDiscountSection()}
      {brandLogoSection()}
      {freshFruitsSection()}
      {dealsAndNewsLetterSection()}
      {contactSection()}
      {FooterSection()}
      {chatButtonSection()}
    </div>
  );
};

export default Home;
