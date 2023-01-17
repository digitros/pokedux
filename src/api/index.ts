// src/api/index.ts

import axios from "axios";
import { IPokemonDetails } from "../types/pokemons";

export const getPokemon = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
  try {
    const { data } = await axios.get<any>(URL);
    const { results } = data;
    return results;
  } catch (err) {
    console.error("err ".repeat(5), err);
  }
};

export const getPokemonDetails = async (pokemon: any) => {
  try {
    const { data } = await axios.get<IPokemonDetails>(pokemon.url);
    return data;
  } catch (err) {
    console.error("err ".repeat(5), err);
  }
};
