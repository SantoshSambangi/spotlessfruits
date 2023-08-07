import {
  apdesLogoImg,
  appleImg,
  avacado,
  avacado2,
  avacadoImg,
  bannana,
  blueBeeryImg,
  dragonImg,
  fssaiLogoImg,
  giftvochureImg,
  jamunImg3,
  jamuunImg2,
  kiwi2Img,
  kiwiImg,
  mangoGiftCard,
  mangoGreen,
  mangoImg,
  orange,
  orangeAppleImg,
  orangeImg,
  orangeImg2,
  pappayaImg,
  pappayaImg2,
  pomogranate,
  rocketImg,
  strawBerryImg,
  walletImg,
  whatsappImg,
} from "../../resources/Images/Images";

import { AiOutlineMail } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { strings } from "../../resources/Strings/eng";

const { navBarStrings } = strings;

const NavBarTopSectionData = [
  {
    fruitImg: orangeImg,
    fruitName: navBarStrings.orange,
  },
  {
    fruitImg: pappayaImg,
    fruitName: "PAPAYA",
  },
  {
    fruitImg: strawBerryImg,
    fruitName: "STRAWBERRY",
  },
  {
    fruitImg: bannana,
    fruitName: "BANANA",
  },
  {
    fruitImg: appleImg,
    fruitName: "APPLE",
  },
  {
    fruitImg: avacadoImg,
    fruitName: "AVACADO",
  },
];

const navBarUserDetailsData = [
  {
    userInfoLogo: <AiOutlineMail />,
    userDesc: "cares@spotlessfruits.com",
  },
  {
    userInfoLogo: <BiUserCircle />,
    userDesc: "My Account",
  },
  {
    userInfoLogo: <BsCart2 />,
    userDesc: "0 Item",
  },
];

const navBarMenuData = [
  {
    menuItemHeading: "Home",
  },
  {
    menuItemHeading: "Fresh Fruits",
  },
  {
    menuItemHeading: "Immunity Booster",
  },
  {
    menuItemHeading: "Dry Fruits",
  },
  {
    menuItemHeading: "Contact",
  },
];

const premiunFruitData = [
  {
    premiumFruitImage: kiwiImg,
    premiumFruitHeading: "Golden Kiwi - 3 PCS - Imported",
    premiumFruitOriginalPrice: "RS.300.00",
    premiumFruitOfferPrice: "RS.250.00",
  },
  {
    premiumFruitImage: orange,
    premiumFruitHeading: "Mandarin Orange Imported - 1 KG",
    premiumFruitOriginalPrice: "RS.499.00",
    premiumFruitOfferPrice: "RS.299.00",
  },
  {
    premiumFruitImage: kiwi2Img,
    premiumFruitHeading: "Golden Kiwi - 3 PCS - Imported",
    premiumFruitOriginalPrice: "RS.199.00",
    premiumFruitOfferPrice: "RS.240.00",
  },
  {
    premiumFruitImage: pomogranate,
    premiumFruitHeading: "POMEGRANATE",
    premiumFruitOriginalPrice: "RS.229.00",
    premiumFruitOfferPrice: "RS.100.00",
  },
  {
    premiumFruitImage: avacado,
    premiumFruitHeading: " HASS AVOCADO - NEW ZEALAND",
    premiumFruitOriginalPrice: "RS.349.00",
    premiumFruitOfferPrice: "RS.249.00",
  },
  {
    premiumFruitImage: orangeImg2,
    premiumFruitHeading: " Malta Orange Imported",
    premiumFruitOriginalPrice: "RS.249.00",
    premiumFruitOfferPrice: "RS.210.00",
  },
];

const dealOfTheDayData = [
  {
    dealOfTheDayImg: blueBeeryImg,
    dealOfTheDayHeading: "Fresh Blueberry - Imported",
    originalPrice: "RS.450.00",
    offerPrice: "RS.249.00",
    dealOfTheDesc:
      " Fresh Blueberry - 125 grams delivered directly to your home within 24 hours in Mumbai, ...  ",
    dealOfTheDayTime: "22:06:34:23  ",
  },
  {
    dealOfTheDayImg: jamuunImg2,
    dealOfTheDayHeading: "Fresh Jamun - 250 Grams",
    originalPrice: "RS.200.00",
    offerPrice: "RS.150.00",
    dealOfTheDesc:
      " Fresh Jamun delivered directly to your home within 24 hours in Mumbai, Navi Mumbai &...  ",
    dealOfTheDayTime: "22:06:34:23",
  },
];

const detailsData = [
  {
    detailsCardImg: avacado2,
    detaildsCardHeading: "Premium",
    detaildsCardSubHeading: "Juicy ",
    detaildsCardSubDesc: " Fruits",
  },
  {
    detailsCardImg: dragonImg,
    detaildsCardHeading: "FLAT 20% OFF FRUITS",
    detaildsCardSubHeading: "Healthy ",
    detaildsCardSubDesc: "Food",
  },

  {
    detailsCardImg: pappayaImg2,
    detaildsCardHeading: "BIG SEASON SALE",
    detaildsCardSubHeading: "Fresh",
    detaildsCardSubDesc: "Papaya",
  },
];

const featuresData = [
  {
    featureCardImg: rocketImg,
    featureCardHeading: "FREE 24 HOURS DELIVERY",
    featureCardDesc: "Mumbai | Thane | Navi Mumbai",
  },
  {
    featureCardImg: whatsappImg,
    featureCardHeading: "24X7 SUPPORT ASSISTANCE",
    featureCardDesc: "Call | WhatsApp | Messenger",
  },
  {
    featureCardImg: giftvochureImg,
    featureCardHeading: "FREE GIFT VOUCHER",
    featureCardDesc: "Valid on next purchase",
  },
  {
    featureCardImg: walletImg,
    featureCardHeading: "GUARANTEED EXCHANGE",
    featureCardDesc: "Exchange within 24 hours",
  },
];

const trendingCardData = [
  {
    trendingImgBlock: jamunImg3,
    trendHeading: "Fresh Jamun - 250 Grams",
    trendingDesc:
      " Fresh Jamun delivered directly to your home within 24 hours in Mumbai, Navi Mumbai &...  ",
    oroginalPrice: "RS.200.00",
    offerPrice: "RS.150.00",
  },
  {
    trendingImgBlock: orangeAppleImg,
    trendHeading: " Apricot Imported",
    trendingDesc:
      "  Fresh Apricot - Imported delivered directly to your home within 24 hours in Mumbai, Nav...    ",
    oroginalPrice: "RS.900.00",
    offerPrice: "RS.500.00",
  },
];

const brandNewLogoData = [
  {
    brandNewLogoOne: fssaiLogoImg,
    brandNewLogoTwo: apdesLogoImg,
  },

  {
    brandNewLogoOne: fssaiLogoImg,
    brandNewLogoTwo: apdesLogoImg,
  },
  {
    brandNewLogoOne: fssaiLogoImg,
    brandNewLogoTwo: apdesLogoImg,
  },
];

const freshFruitData = [
  {
    freshFruitImg: mangoImg,
    freshFruitHeading: "Chaunsa Mangoes - 1 KG",
    oroginalPrice: "RS.299.099",
    offerPrice: "RS.249.00",
  },
  {
    freshFruitImg: mangoGiftCard,
    freshFruitHeading: "GIFT MANGO THIS SEASON",
    oroginalPrice: "RS.249.00",
    offerPrice: "",
  },
  {
    freshFruitImg: mangoGreen,
    freshFruitHeading: "Langra Mangoes",
    oroginalPrice: "RS.279.00",
    offerPrice: "RS.249.00",
  },
];

const FooterData = [
  {
    footerItem: "Exotic Fruits ",
  },
  {
    footerItem: "Premium Mangoes  ",
  },
  {
    footerItem: "Imported Fruits ",
  },
  {
    footerItem: " Fresh Berries ",
  },
  {
    footerItem: " Seasonal Fruits",
  },
];

const FooterDataTwo = [
  {
    footerItem: " Shipping Policy  ",
  },
  {
    footerItem: "  Privacy Policy  ",
  },
  {
    footerItem: "  Refund Policy ",
  },
  {
    footerItem: "Terms Of Service",
  },
];

export {
  NavBarTopSectionData,
  navBarUserDetailsData,
  navBarMenuData,
  FooterData,
  FooterDataTwo,
  premiunFruitData,
  dealOfTheDayData,
  detailsData,
  featuresData,
  trendingCardData,
  brandNewLogoData,
  freshFruitData,
};
