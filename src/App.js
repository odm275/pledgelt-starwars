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
      characters: [],
      selectedItem: {},
      showItems: false
    };
    this.getCharacters = this.getCharacters.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.dropDown = this.dropDown.bind(this);
  }
  componentDidMount() {
    this.loadSelection();
    //this.getCharacters();
  }
  //  Load Selection Menu; arrange by order; and set a default selectItem.
  async loadSelection() {
    const { data } = await axios(`https://swapi.co/api/films/`);
    const movieSelections = data.results
      .map(movie => {
        return {
          value: movie.title,
          id: movie.episode_id,
          characters: movie.characters
        };
      })
      .sort((a, b) => a.id - b.id);
    //Default selection
    this.selectItem(movieSelections[0]);
    this.setState({ selections: movieSelections });
  }

  // Takes in array of character;
  async getCharacters(arr) {
    console.log(arr);
    const namesAndHomeworldPromises = arr.map(async character => {
      const getCharData = await axios(character);
      const { name, homeworld } = getCharData.data;
      const getCharHomeworld = await axios(homeworld);
      return { name: name, homeworld: getCharHomeworld.data.name };
    });
    Promise.all(namesAndHomeworldPromises).then(results => {
      console.log(results);
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

  dropDown() {
    this.setState({ showItems: !this.state.showItems });
  }
  selectItem(item) {
    console.log("Item has been selected!");
    this.setState(
      {
        selectedItem: item,
        showItems: false
      },
      () => this.getCharacters(item.characters)
    );
  }

  render() {
    const { characters, selections, selectedItem, showItems } = this.state;
    return (
      <div style={{ margin: "2rem" }}>
        <h1 className="welcome">Select a Film</h1>
        <SelectBox
          items={selections}
          selectedItem={selectedItem}
          selectItem={this.selectItem}
          dropDown={this.dropDown}
          onItemSelection={this.selectItem.bind(this)}
          showItems={showItems}
          width={"100%"}
        />
        <CharacterList people={characters} />
      </div>
    );
  }
}

export default App;
