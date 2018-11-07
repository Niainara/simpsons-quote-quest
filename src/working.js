import React, { Component } from 'react';
import "./App.css";


class working extends Component {

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
      <div className="Working">
        <button
            onClick={this.handleClick}
        >
             {working.toUpperCase()}
        </button>
        <figure className={working} />
        
      </div>
    );
    
  }
}

export default working;