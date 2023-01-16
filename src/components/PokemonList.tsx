import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

interface PokemonListProps {
  pokemons: any[];
}

const PokemonList = (props: PokemonListProps) => {
  const { pokemons } = props;
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
