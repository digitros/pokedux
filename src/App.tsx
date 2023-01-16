import "./App.css";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import { Col } from "antd";
import logo from "./assets/logo.svg";
import { useEffect } from "react";
import { getPokemons } from "./api";
import { setPokemonsAction } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: any) => state.pokemons);

  const fetchPokemons = async () => {
    const pokemons = await getPokemons();
    dispatch(setPokemonsAction(pokemons));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
