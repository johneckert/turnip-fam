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

  getInfo(island) {
    let islandData = {};
    console.log("this.state.Islands", this.state.Islands);
    this.state.Islands[0] ? console.log("!!!!", this.state.Islands[0].fields.Name.toUpperCase()) : console.log('fail');
    let trendElem
    this.state.Islands.forEach(elem => { 
      if (elem && elem.fields.Name.toUpperCase() === island.name.toUpperCase()) {
        trendElem = elem;
      }
      else trendElem = {}
    });
    islandData.name = island.name;
    if (trendElem && trendElem.fields) {
      islandData.trend = trendElem["fields"]["Trend History"][0]; //needs to change for multiple weeks
    }
    else { console.log("fuuuuck")}
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
          {islands}
        </header>
      </div>
    );
  }
}

export default App

