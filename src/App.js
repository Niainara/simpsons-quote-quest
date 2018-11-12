import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


import Lamp from "./lamp";
import GetCitation from "./components/getCitation.jsx";
import DisplayCitation from "./components/displayCitation.jsx";


const  sampleCitation = {
    "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
    "character": "Nelson Muntz",
    "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    "characterDirection" : "Left"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      citation:  sampleCitation,
      working: props.working
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  getCitation() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          citation:  data[0],
        });
    });
}
  
  render() {
    let working = this.state.working ? 'not working' : 'working';

  
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className={this.state.working ? "App-logo2" : "App-logo" } alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <GetCitation  selectCitation={() =>  this.getCitation()}  />
        <DisplayCitation  citation={this.state.citation}  />
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
      
      </div>
    );
  }
}


export default App;