import CharacterCard from "./components/CharacterCard";

import data from "./assets/data.json";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

      <div className="container">
        {data.map((e) => {
          return (
            <CharacterCard
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
