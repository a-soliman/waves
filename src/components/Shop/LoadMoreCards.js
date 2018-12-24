import React from "react";
import CardBlockShop from "../ui/CardBlockShop";

const LoadMoreCards = ({ grid, limit, size, products, loadMore }) => {
  return (
    <div>
      <div>
        <CardBlockShop grid={grid} list={products} />
      </div>
    </div>
  );
};

export default LoadMoreCards;
