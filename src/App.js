import React, { Component } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
    this.getCharacters = this.getCharacters.bind(this);
  }
  componentDidMount() {
    this.getCharacters();
  }
  async getCharacters() {
    const { data } = await axios(`https://swapi.co/api/people`);
    this.setState({ characters: data.results });
  }

  onChange() {}

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1 className="welcome">Select a Film</h1>
        <input />
        <CharacterList people={characters} />
      </div>
    );
  }
}

export default App;
