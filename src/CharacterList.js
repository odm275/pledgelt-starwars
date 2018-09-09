import React from "react";
import CharacterInfo from "./CharacterInfo";
const CharacterList = ({ people }) => {
  console.log(people);
  return (
    <div>
      {people.map(character => {
        return (
          <div>
            <CharacterInfo characterInfo={character} />
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
