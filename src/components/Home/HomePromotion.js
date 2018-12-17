import React from "react";
import Button from "../ui/Button";

const HomePromotion = props => {
  const promotion = {
    img: "/images/featured/featured_home_3.jpg",
    lineOne: "Up to 40% off",
    lineTow: "On second hand guitars",
    linkTitle: "Shop now",
    linkTo: "/shop"
  };

  const renderPromotion = () =>
    promotion ? (
      <div
        className="home_promotion_img"
        style={{
          background: `url(${promotion.img})`
        }}
      >
        <div className="tag title">{promotion.lineOne}</div>
        <div className="tag low_title">{promotion.lineOne}</div>
        <div className=" text-center">
          <Button
            type="default"
            title={promotion.linkTitle}
            linkTo={promotion.linkTo}
            addStyles={{ margin: "10px auto" }}
          />
        </div>
      </div>
    ) : null;
  return <div className="home_promotion">{renderPromotion()}</div>;
};

export default HomePromotion;
