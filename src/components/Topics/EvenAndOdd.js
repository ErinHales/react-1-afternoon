import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    }
  
  };

  solveEvenOdd(input) {
    var odds = [];
    var evens = [];
    var arr = input.split(", ");
    for(var i=0; i<arr.length; i++) {
      if(arr[i] % 2 === 0) {
        evens.push(arr[i]);
      } else {
        odds.push(arr[i]);
      }
    }
    this.setState({
      evenArray: evens,
      oddArray: odds
    })
  }

  handleChange(event) {
    this.setState({userInput: event.target.value});
  }
  
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input type="text" className="inputLine" onChange={e => this.handleChange(e)}/>
        <button className="confirmationButton" onClick={() => this.solveEvenOdd(this.state.userInput)}>Solve</button>
        <span className="resultsBox">Evens { this.state.evenArray.join(", ") }</span>
        <span className="resultsBox">Odds { this.state.oddArray.join(", ") }</span>
      </div>
    );
  }
}

export default EvenAndOdd;
