import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        working: false,
        animate: true,
      };
  }

  handleClick = () => {
    this.setState({ 
      working: !this.state.working,
      animate: !this.state.animate,
    });
    
  };

  render() {
    const work = this.state.working ? "Homer is working" : "Homer isn't working";
    const anime = this.state.animate ? 'App-logo' : 'animate';
    const color = this.state.working ? '#ffde00' : 'black';
    const typo = this.state.working ? 'black' : 'white';
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className={anime} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>

        <div className="changeState">
          <button
            onClick={this.handleClick}
            className={work}
            style={{backgroundColor:color, color: typo}}
          >
          {work.toUpperCase()}
          </button>
        </div>
       
        <Quotes />
        
      </div>
    );
  }
}

export default App;