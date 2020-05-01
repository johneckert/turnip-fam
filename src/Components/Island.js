import React from "react";
import Viz from "./Viz";

const Island = props => {
    console.log("Island props", props);
    let islandName = props.islandData.name.toUpperCase();
    let trend = props.islandData.trend;
    let prices;
    if (props.islandData.prices) {
        prices = props.islandData.prices.map((price, key) => {
        return <li key={key}>{price.day}: {price.price}</li>;
        });
    } else {
        prices = "";
    }
    return (
      <div class="island">
        <h1>{islandName}</h1>
        <div class="data">
          <p>Trend: {trend}</p>
          <ul>{prices}</ul>
        </div>
        <Viz islandData={props.islandData}></Viz>
      </div>
    );
};

export default Island;