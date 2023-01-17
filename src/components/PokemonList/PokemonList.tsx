import { IPokemonDetails } from "../../types/pokemons";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";

interface PokemonListProps {
  pokemons: IPokemonDetails[];
}

const PokemonList = (props: PokemonListProps) => {
  const { pokemons } = props;
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          abilities={pokemon.abilities}
          id={pokemon.id}
          isFavorite={pokemon.isFavorite}
        />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
