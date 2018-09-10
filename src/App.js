import React, { Component } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";
import SelectBox from "./SelectBox";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: [],
      selectedItem: {},
      characters: [],
      showItems: false
    };
    this.getCharacters = this.getCharacters.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }
  componentDidMount() {
    this.loadSelection();
    //this.getCharacters();
  }

  //  Load selection from api, and sort by movieid.
  //  The default selection will be [0] -> Revenge of the Sith:
  //  ToDo: I need to know that here ...
  async loadSelection() {
    const { data } = await axios(`https://swapi.co/api/films/`);
    let characters = [];
    const movieSelections = data.results
      .map(movie => {
        characters.push(movie.characters);
        return { value: movie.title, id: movie.episode_id };
      })
      .sort((a, b) => a.id - b.id);
    console.log(characters);
    this.setState({ selections: movieSelections });
  }
  // gets request, resolve array of promises,
  // sorts by alphabetical, and setsState
  async getCharacters(arr) {
    //arr: Array of characters that I need to make a get request for and Sort.
    const { data } = await axios(`https://swapi.co/api/people`);
    const namesAndHomeworldPromises = data.results.map(async character => {
      const homeworld = await axios(character.homeworld);
      return { name: character.name, homeworld: homeworld.data.name };
    });
    Promise.all(namesAndHomeworldPromises).then(results => {
      const sortedResults = results.sort((a, b) => {
        //Sort by Alphabetical order
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.setState({ characters: sortedResults });
    });
  }

  render() {
    const { characters, selections } = this.state;
    console.log(selections);
    return (
      <div style={{ margin: "2rem" }}>
        <h1 className="welcome">Select a Film</h1>
        <SelectBox items={selections} width={"100%"} />
        <CharacterList people={characters} />
      </div>
    );
  }
}

export default App;
