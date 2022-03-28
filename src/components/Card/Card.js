import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import api from '../../services/api.js';
import { Link } from 'react-router-dom';

const Card = ({ name, props }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      await api
        .get(`pokemon/${name}`)
        .then((res) => setPokemonData(res.data))
        .catch((err) => console.log(err));
    };
    getPokemon();
  }, [name]);
  return (
    <>
      {pokemonData && (
        <Link to={`details/${pokemonData.id}`} key={pokemonData.id}>
          <div className={styles.card}>
            <p>{pokemonData.name} </p>
            <p>{pokemonData.id} </p>
            <img
              style={{ width: '100px' }}
              src={pokemonData.sprites.other['official-artwork'].front_default}
              alt={pokemonData.name}
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
