import React from "react";
import Viz from "./Viz";

const Island = props => {
    let islandName = props.islandData.name.toUpperCase();
    let trend = props.islandData.trend;
    let prices;
    if (props.islandData.prices) {
        prices = props.islandData.prices.map((price, key) => {
        return (
          <div key={key}>
            <span>{price.day}:</span>
            <span>{price.price}</span>
          </div>
        );
        });
    } else {
        prices = "";
    }
    return (
      <div className="island">
        <h1>{islandName}</h1>
        <div className="data">
          <div>
            <span>Trend:</span> 
            <span>{trend}</span>
          </div>
          <div>{prices}</div>
        </div>
        <Viz islandData={props.islandData}></Viz>
      </div>
    );
};

export default Island;