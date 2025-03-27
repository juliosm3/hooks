import useFetchCharacters from "./hooks/useFetchCharacters";
import CharacterCard from "./components/CharacterCard";
import "./App.css";

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/1";
const urlRick = "https://rickandmortyapi.com/api/character/1";

function App() {
  const { data: pokemon, loading: loadingPokemon, error: errorPokemon } = useFetchCharacters(urlPokemon);
  const { data: rick, loading: loadingRick, error: errorRick } = useFetchCharacters(urlRick);

  return (
    <div className="app-container">
      <h1>Personajes de APIs</h1>

      <h2>Personaje Pokémon</h2>
      {loadingPokemon && <p>Cargando...</p>}
      {errorPokemon && <p>Error: {errorPokemon}</p>}
      {pokemon && <CharacterCard name={pokemon.name} image={pokemon.sprites.front_default} />}

      <h2>Personaje Rick and Morty</h2>
      {loadingRick && <p>Cargando...</p>}
      {errorRick && <p>Error: {errorRick}</p>}
      {rick && <CharacterCard name={rick.name} image={rick.image} />}
    </div>
  );
}

export default App;