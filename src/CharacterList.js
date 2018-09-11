import React from "react";
import CharacterInfo from "./CharacterInfo";
const CharacterList = ({ people }) => {
  return (
    <div>
      {people.map((character, i) => {
        return (
          <div key={i}>
            <CharacterInfo characterInfo={character} />
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
