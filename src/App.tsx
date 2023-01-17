import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher/Searcher";
import PokemonList from "./components/PokemonList/PokemonList";
import { getPokemon } from "./api";
import { getPokemonsDetailsAction, setLoading } from "./actions";

import logo from "./assets/logo.svg";
import "./App.css";
import { Dispatch } from "redux";
import { IPokemonDetails } from "./types/pokemons";

type AppType = {
  pokemons: IPokemonDetails[];
  loading: boolean;
};

function App() {
  const pokemons = useSelector((state: AppType) => state.pokemons);
  const loading = useSelector((state: AppType) => state.loading);
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const response = await getPokemon();
      response && dispatch(getPokemonsDetailsAction(response));
      dispatch(setLoading(false));
    };

    fetchPokemons();
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset="12">
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
