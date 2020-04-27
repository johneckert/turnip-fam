import React from "react";

const Island = props => {
    console.log("props", props);
    let islandName = props.islandData.name.toUpperCase();
    let trend = props.islandData.trend
    return (
      <div>
        <p>{islandName}</p>
        <ul>
          <li>Trend: {trend}</li>
        </ul>
      </div>
    );
};

export default Island;