import React, { Component } from 'react';

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }
  
  handleChange(element) {
    var stringArr = element.target.value.split(", ");
    var num1 = Number(stringArr[0]);
    var num2 = Number(stringArr[1]);
    this.setState({
      number1: num1,
      number2: num2
    })
  }

  add() {
    var solution = this.state.number1 + this.state.number2;
    this.setState({
      sum: solution
    })
  }
  
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input type="text" className="inputLine" onChange={(e) => this.handleChange(e)}/>
        <button className="confirmationButton" onClick={() => this.add()}>Solve</button>
        <span className="resultsBox">{ this.state.sum }</span>
      </div>
    )
  }
}

export default Sum;
