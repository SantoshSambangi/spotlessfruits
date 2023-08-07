import React from "react";
import styles from "./styles.module.css";
import {
  NavBarTopSectionData,
  navBarMenuData,
  navBarUserDetailsData,
} from "../../constants/CommonData/CommonData";
import { navbarBottomLeftLogo, serachImg } from "../../resources/Images/Images";
import Input from "../Input/Input";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const navBarTopSection = () => {
    return (
      <div className={styles.navBarTopContainer}>
        {NavBarTopSectionData &&
          NavBarTopSectionData.map((item, index) => {
            return (
              <div className={styles.navBarToSubContainer} key={index}>
                <div className={styles.navBarTopContainerImgBlock}>
                  <img
                    src={item.fruitImg}
                    alt=""
                    className={styles.imageWidth}
                  />
                </div>
                <p className={styles.navBarTopContianerMenuItem}>
                  {item.fruitName}
                </p>
              </div>
            );
          })}
      </div>
    );
  };

  const navBarBottomSection = () => {
    return (
      <div className={styles.navBarBottomMainContainer}>
        {navBarBottomTopDetailsSection()}
        {navBarBottomCategorySection()}
      </div>
    );
  };

  const navBarBottomTopDetailsSection = () => {
    return (
      <div className={styles.navBarBottomTopDetailsContainer}>
        <div className={styles.navBarBottomTopDetailsLeftBlock}>
          <img
            src={navbarBottomLeftLogo}
            alt="navbarBottomLeftLogo"
            className={styles.imageWidth}
          />
        </div>

        <div className={styles.navBarBottomTopDetailsRightBlock}>
          {navBarUserDetailsData &&
            navBarUserDetailsData.map((item, index) => {
              return (
                <div
                  className={styles.navBarBottomTopDetailsRightSubBlock}
                  key={index}
                >
                  <div>
                    <span className={styles.userInfoLogo}>
                      {item.userInfoLogo}
                    </span>
                  </div>
                  <p className={styles.userDesc}>{item.userDesc}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  const navBarBottomCategorySection = () => {
    return (
      <div className={styles.navBarBottomCategoryContainer}>
        {/* <div className={styles.navBarBottomCategorySubContainer}> */}
        <div className={styles.navBarBottomCategoryLeftBlock}>
          <div className={styles.navBarBottomCategoryLeftImgBlock}>
            <span>
              <RiMenu4Line />
            </span>
          </div>

          <p className={styles.navBarBottomCategoryDesc}>CATEGORIES</p>
        </div>

        <div className={styles.navBarBottomCategoryMiddleBlock}>
          {navBarMenuData &&
            navBarMenuData.map((item, index) => {
              return (
                <div className={styles.navBarBottomCategoryMiddleSubBlock}>
                  <p className={styles.menuItemHeading}>
                    {item.menuItemHeading}
                  </p>
                </div>
              );
            })}
        </div>
        {/* </div> */}

        <div className={styles.navBarBottomCategoryRightBlock}>
          <Input
            customInputStyles={styles.navBarBottomCategoryRightInputStyles}
            placeholder="search out catelog"
          />
          {/* <div className={styles.navBarBottomCategoryRightSearchImgBlock}> */}
          <AiOutlineSearch
            className={styles.navBarBottomCategoryRightSearchImgBlock}
          />
          {/* </div> */}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.navBarContainer}>
      {navBarTopSection()}
      {navBarBottomSection()}
    </div>
  );
};

export default Navbar;
