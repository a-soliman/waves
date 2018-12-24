import React from "react";
import Card from "./Card";

const CardBlockShop = ({ grid, list }) => {
  const renderCards = list =>
    list
      ? list.map(card => <Card key={card._id} {...card} grid={grid} />)
      : null;
  return (
    <div className="card_block_shop">
      <div>
        {list ? (
          list.length === 0 ? (
            <div className="no_res">No Results...</div>
          ) : null
        ) : null}
        {renderCards(list)}
      </div>
    </div>
  );
};

export default CardBlockShop;
