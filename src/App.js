import React, { Component } from 'react';
import './App.css';
import Island from './Components/Island';
import IslandNav from './Components/IslandNav';

class App extends Component {
  state = {
    islandsMap: [
      { name: "Pangea", id: "rec4pkXw2fuxCkz96" },
      { name: "Beachville", id: "rec5iK0WpYyf3HSZq" },
      { name: "Quarantown", id: "recsTTbtgsGb8H2f8" },
    ],
    currentIsland: "Quarantown",
    prices: [],
    trendHistory: [],
    Islands: [],
  };
  //get price entries
  componentDidMount() {
    fetch(
      "https://api.airtable.com/v0/appoISrWazljbBWsc/Prices?api_key=keyZ45rUNype5TblZ"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          ...this.state,
          prices: json.records,
        });
      });
    //get trend history
    fetch(
      "https://api.airtable.com/v0/appoISrWazljbBWsc/Trend%20History?api_key=keyZ45rUNype5TblZ"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          ...this.state,
          trendHistory: json.records,
        });
      });
    //get island data
    fetch(
      "https://api.airtable.com/v0/appoISrWazljbBWsc/Islands?api_key=keyZ45rUNype5TblZ"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          ...this.state,
          Islands: json.records,
        });
      });
  }

  getTrend(island) {
    let trendElem;
    this.state.Islands.forEach((elem) => {
      if (elem && elem.fields.Name === island.name) {
        trendElem = elem;
      } else trendElem = {};
    });

    if (trendElem && trendElem.fields) {
      let trendId = trendElem["fields"]["Trend History"][0]; //needs to change for multiple weeks
      let trendItem = this.state.trendHistory.find(
        (elem) => elem.id === trendId
      );
      if (trendItem && trendItem.fields) {
        return trendItem.fields.Type;
      }
      else {
        return "loading..."
      }
    }
  }

  getPrices(island) {
    let priceCodeArray = [];
    this.state.Islands.forEach((elem) => {
      if (elem && elem.fields.Name === island.name) {
        priceCodeArray = elem.fields.Prices;
      }
    });
    let pricesArray = [];
    priceCodeArray.forEach(code => {
      if (this.state.prices && this.state.prices.length > 0) {
        let selection = this.state.prices
          .filter((price) => price.fields.Status === "Current")
          .find((elem) => elem.id === code);
        let priceItem = {};
        if (selection && selection.fields) {
          priceItem.price = selection.fields.Price;
          priceItem.day = selection.fields.Day;
          pricesArray.push(priceItem);
        }
      }
    })
    return pricesArray;
  }

  testState() {
    console.log(this.state);
  }

  setCurrentIsland = (e) => {
    let name = e.target.innerHTML
    this.setState({
      ...this.state,
      currentIsland: name
    })
  } 

  getCurrentIslandData() {
    let islandData = {};
    let currentIsland = this.state.islandsMap.filter(isl => isl.name === this.state.currentIsland)[0]
    console.log("ci", currentIsland)
    islandData.name = currentIsland.name;
    islandData.prices = this.getPrices(currentIsland);
    islandData.trend = this.getTrend(currentIsland);
    console.log("islandData", islandData)
    return islandData;
  }

  render() {
    this.testState();

    return (
      <div className="App">
        <header className="App-header">
          <h1>Turnip Fam</h1>
          <IslandNav
            islands={this.state.islandsMap}
            setCurrentIsland={this.setCurrentIsland}
          ></IslandNav>
        </header>
        <Island islandData={this.getCurrentIslandData()}></Island>;
      </div>
    );
  }
}

export default App

