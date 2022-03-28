import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';
import api from '../../services/api.js';
import { getBackground } from '../utils/colors';

const Details = () => {
  const params = useParams();

  const [pokemonData, setPokemonData] = useState(null);

  const getPokemon = async (id) => {
    await api
      .get(`pokemon/${id}`)
      .then((res) => setPokemonData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (params.id) getPokemon(params.id);
  });

  return (
    <>
      {pokemonData && (
        <div
          className={`${styles.details} container`}
          style={{ background: getBackground(pokemonData.types[0].type.name) }}
        >
          <img
            style={{ width: '100px' }}
            src={pokemonData.sprites.other['official-artwork'].front_default}
            alt={pokemonData.name}
          />
          <p>
            {pokemonData.name} Nº{pokemonData.id}{' '}
          </p>

          <p> Height {pokemonData.height}</p>
          <p> Weight {pokemonData.weight} Kg</p>
          <p> Hp {pokemonData.stats[0].base_stat}</p>
          <p> Attack {pokemonData.stats[1].base_stat}</p>
          <p> Def {pokemonData.stats[2].base_stat}</p>
        </div>
      )}
    </>
  );
};

export default Details;
