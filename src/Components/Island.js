import React from "react";

const Island = props => {
    console.log("props", props);
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
      <div>
        <p>{islandName}</p>
        <p>Trend: {trend}</p>
        <ul>
            {prices}    
        </ul>

      </div>
    );
};

export default Island;