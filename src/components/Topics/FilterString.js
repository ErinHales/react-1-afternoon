import React, { Component } from 'react';

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: ["Hello Dolly", "Hello Kitty", "Goodbye, Cruel World", "Hello World", "Hello, Can You Hear Me?", "Goodbye Friend"],
      userInput: "",
      filteredArray: []
    }
  }
  
  handleEvent(element) {
    this.setState({ userInput: element.target.value });
  }

  solveFilterString(arr) {
    var array = [];
    for(var i=0; i<arr.length; i++) {
      if(arr[i].indexOf(this.state.userInput) >= 0) {
        array.push(arr[i]);
      }
    }
    this.setState({
      filteredArray: array.join(', ')
    })
  }

  
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{ this.state.unfilteredArray }</span>
        <input className="inputLine" type="text" onChange={(e) => this.handleEvent(e)}/>
        <button className="confirmationButton" onClick={() => this.solveFilterString(this.state.unFilteredArray)}>Solve</button>
        <span className="resultsBox filterStringRB">{ this.state.filteredArray }</span>
      </div>
    )
  }
}

export default FilterString;
