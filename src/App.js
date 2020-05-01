import React, { Component } from 'react';
import './App.css';
import Island from './Components/Island';

class App extends Component {
  state = {
    islandsMap: [
      { name: "Pangea", id: "rec4pkXw2fuxCkz96" },
      { name: "Beachville", id: "rec5iK0WpYyf3HSZq" },
      { name: "Quarantown", id: "recsTTbtgsGb8H2f8" },
    ],
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
        console.log("Prices JSON:", json.records);
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
        console.log("Trend JSON:", json.records);
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
        console.log("Island JSON:", json.records);
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
    console.log("priceCodeArray", priceCodeArray);
    let pricesArray = [];
    priceCodeArray.forEach(code => {
      if (this.state.prices && this.state.prices.length > 0) {
        let selection = this.state.prices.find((elem) => elem.id === code);
        let priceItem = {};
        priceItem.price = selection.fields.Price;
        priceItem.day = selection.fields.Day;
        console.log("PI", priceItem)
        console.log("S", selection)
        pricesArray.push(priceItem);
      }
    })
    console.log("PricesArray:", pricesArray)
    return pricesArray;
  }

  getInfo(island) {
    let islandData = {};
    console.log("this.state.Islands", this.state.Islands);

    islandData.name = island.name;
    islandData.prices = this.getPrices(island);
    islandData.trend = this.getTrend(island);

    return islandData;
  }

  testState() {
    console.log(this.state);
  }

  render() {
    let islands = this.state.islandsMap.map((island, key) => {
      return <Island islandData={this.getInfo(island)} key={key}></Island>;
    });

    this.testState();

    return (
      <div className="App">
        <header className="App-header">
          <h1>Turnip Fam</h1>
        </header>
        {islands}
      </div>
    );
  }
}

export default App

