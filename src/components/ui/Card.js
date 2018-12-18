import React, { Component } from "react";
import Button from "./Button";

class Card extends Component {
  renderCardImages = images => {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return "/images/image_not_availble.png";
    }
  };
  render() {
    const props = this.props;
    return (
      <div className={`card_item_wrapper ${props.grid}`}>
        <div
          className="image"
          style={{
            background: `url(${this.renderCardImages(props.images)}) np-repeat`
          }}
        />
        <div className="action_container">
          <div className="tags">
            {props.brand && <div className="brand">{props.brand.name}</div>}
            {props.name && <div className="name">{props.name}</div>}
            {props.price && <div className="price">${props.price}</div>}
          </div>
        </div>
        {props.grid ? (
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            pariatur omnis aliquid doloribus facere ad error ut. Ab iure
            similique facere, quo recusandae veritatis nam doloribus minima
            vitae, animi laborum!
          </div>
        ) : null}

        <div className="actions">
          <div className="button_wrapp">
            <Button
              type="default"
              altClass="card_link"
              title="View product"
              linkTo={`/product-detail/${props._id}`}
              addStyles={{
                margin: "10px 0 0 0"
              }}
            />
          </div>
          <div className="button_wrapp">
            <Button
              type="bag_link"
              runAction={() => {
                console.log("added to cart");
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
