import React, { Component } from 'react';

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [{name: "Sammy", age: "3", class: "Mr. Jensen"}, {name: "Anthony", favoriteColor: "blue", class: "Mrs. Johnson"}, {lastName: "Ortiz", age: "4", class: "Mrs. Jackson", favoriteColor: "Red"}],
      userInput: "",
      filteredArray: ""
    }
  }

  handleEvent(element) {
    this.setState({ userInput: element.target.value });
  }

  solveFilter(arr) {
    var filtered = [];
    for(var i=0; i<arr.length; i++) {
      for(var prop in arr[i]) {
        if(prop === this.state.userInput) {
          var string = JSON.stringify(arr[i]);
          filtered.push(string);
        }
      }
    }
    this.setState({ filteredArray: filtered });
  }
  
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">{ this.state.unfilteredArray }</span>
        <input type="text" onChange={e => this.handleEvent(e)} className="inputLine"/>
        <button className="confirmationButton" onClick={() => this.solveFilter(this.state.unFilteredArray)}>Solve</button>
        <span className="resultsBox filterObjectRB">{ this.state.filteredArray }</span>
      </div>
    )
  }
}

export default FilterObject;
