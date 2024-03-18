import React, { useState } from 'react';
import style from "./pokemon.module.css"

const API_URL = "https://pokeapi.co/api/v2/pokemon";

function AddPokemonForm() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/${pokemonName}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const newPokemon = await response.json();
      setPokemonData(newPokemon);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pokemon Name:
          <input
            type="text"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
        </label>
        <button className={style.button} type="submit">Call Pokemon</button>
      </form>
      {pokemonData && (
        <div className={style.card}>
          <h1 className={style.cardText}>{pokemonData.name}</h1>
          <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
        </div>
      )}
    </div>
  );
}

export default AddPokemonForm;
