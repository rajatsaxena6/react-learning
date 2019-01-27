import React, { Component } from "react";
import { Person } from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 30 },
      { name: "Stephanie", age: 26 }
    ]
  };

  switchHandler = () => {
    console.log("switch button clicked");
  };
  render() {
    return (
      <div className="App">
        <h1>I am a React App.</h1>
        <button onClick={this.switchHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    );
  }
}

export default App;
