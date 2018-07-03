import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    }
  }
  
  handleChange(element) {
    this.setState({
      userInput: element.target.value
    })
  }

  solvePalindrome() {
    var string = this.state.userInput;
    var reversed = string.toLowerCase().split("").reverse().join("");
    var trueOrFalse = "false";
    if(string === reversed) {
      trueOrFalse = "true";
    }
    
    this.setState({
      palindrome: trueOrFalse
    })
  }
  
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input type="text" className="inputLine" onChange={(e) => this.handleChange(e)}/>
        <button className="confirmationButton" onClick={() => this.solvePalindrome()}>Solve</button>
        <span className="resultsBox">{ this.state.palindrome }</span>
      </div>
    )  
}
}

export default Palindrome;
