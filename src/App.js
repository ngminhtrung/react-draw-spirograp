import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import MenuMain from './Component/Menu-Main';
import Drawing from './Component/Drawing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "lightyellow",
      ratio: 5,
      holeOffsetDistance: 70,
      color: "black",
      animationDuration: 1500
    }
    this.changeGeneralConfig = this.changeGeneralConfig.bind(this);
  }

  changeGeneralConfig(generalConfig) {
    this.setState(generalConfig);
  }


  render() {
    return (
      <div className="App ui container">
        <div className="ui centered grid">
          <Header />
          <MenuMain onGeneralConfigChange={this.changeGeneralConfig}/>
          <Drawing config={this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
