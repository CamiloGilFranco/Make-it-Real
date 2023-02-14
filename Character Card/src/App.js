import CharacterCard from "./components/CharacterCard";
import axios from "axios";
import React, { useState, useEffect } from "react";

import "./styles.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setCharacters(response.data.results);
      console.log(response);
    });
  }, []);

  console.log(characters);

  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

      <div className="container">
        {characters.map((e) => {
          return (
            <CharacterCard
              key={e.id}
              image={e.image}
              status={e.status}
              name={e.name}
              species={e.species}
              locationUrl={e.location.url}
              locationName={e.location.name}
              originUrl={e.origin.url}
              originName={e.origin.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
