import React from 'react';

const Viz = props => {

    let prices = props.islandData.prices;

    let mAM = "",
      mPM = "",
      tAM = "",
      tPM = "",
      wAM = "",
      wPM = "",
      thAM = "",
      thPM = "",
      fAM = "",
      fPM = "",
      sAM = "",
      sPM = "",
      pp = "",
      pattern = getPatternCode();

    prices.forEach(price => {
        switch (price.day) {
            case "Monday AM":
                mAM = price.price;
                break;
            case "Monday PM":
                mPM = price.price;
                break;
            case "Tuesday AM":
                tAM = price.price;
                break;
            case "Tuesday PM":
                tPM = price.price;
                break;
            case "Wednesday AM":
                wAM = price.price;
                break;
            case "Wednesday PM":
                wPM = price.price;
                break;
            case "Thursday AM":
                thAM = price.price;
                break;
            case "Thursday PM":
                thPM = price.price;
                break;
            case "Friday AM":
                fAM = price.price;
                break;
            case "Friday PM":
                fPM = price.price;
                break;
            case "Saturday AM":
                sAM = price.price;
                break;
            case "Saturday PM":
                sPM = price.price;
                break;
            case "Purchase Price":
                pp = price.price;
                break;
            default:
                break;
        }
    })

    let link = `https://turnipprophet.io?prices=${pp}.${mAM}.${mPM}.${tAM}.${tPM}.${wAM}.${wPM}.${thAM}.${thPM}.${fAM}.${fPM}.${sAM}.${sPM}${pattern}`;

    function getPatternCode() {
        switch(props.islandData.trend) {
            case 'Fluctuating':
                return `&pattern=0`;
            case 'Small Spike':
                return `&pattern=1`;
            case 'Large Spike':
                return `&pattern=2`;
            case 'Decreasing':
                return `&pattern=3`;
            default:
                return '';
            
        }
    }

    return (
      <div className="viz">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Open {props.islandData.name} on turnipprophet.io
        </a>
      </div>
    );
};

export default Viz;