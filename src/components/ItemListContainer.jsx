import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="item-list-container">
            <p>{greeting}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
