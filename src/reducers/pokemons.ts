import { SET_LOADING } from "./../actions/types";
import { SET_POKEMONS_DETAILS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POKEMONS_DETAILS:
      return { ...state, pokemons: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case "SET_FAVORITE":
      const newPokemonsList = [...state.pokemons];
      const pokemonIndex = newPokemonsList.findIndex(
        (pokemon) => pokemon.id === action.payload.id
      );
      if (pokemonIndex < 0) return state;
      newPokemonsList[pokemonIndex].isFavorite =
        !newPokemonsList[pokemonIndex].isFavorite;

      return {
        ...state,
        pokemons: newPokemonsList,
      };
    default:
      return state;
  }
};
