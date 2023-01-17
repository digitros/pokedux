import { Dispatch } from "redux";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS_DETAILS } from "./types";
import { getPokemonDetails } from "../api";

export const setPokemonsDetails = (payload: (any | undefined)[]) => ({
  type: SET_POKEMONS_DETAILS,
  payload,
});

export const getPokemonsDetailsAction =
  (pokemons: any[]) => async (dispatch: Dispatch<any>) => {
    const pokemonDetails = await Promise.all(
      pokemons.map((pokemon) => pokemon && getPokemonDetails(pokemon))
    );
    dispatch(setPokemonsDetails(pokemonDetails));
  };

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = (payload: any) => ({
  type: SET_FAVORITE,
  payload,
});
