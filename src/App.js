import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./lamp";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: props.working
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  
  render() {
    let working = this.state.working ? 'not working' : 'working';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working ? "App-logo2" : "App-logo" } alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <div className="Working">
        <button
            onClick={this.handleClick}
        >
             {working.toUpperCase()}
        </button>
        <figure className={working} />
        
      </div>
        <Lamp on />
        <Lamp />
        <Quotes/>
      </div>
    );
  }
}


export default App;