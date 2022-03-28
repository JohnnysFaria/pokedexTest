import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import api from '../../services/api.js';
import styles from './List.module.css';

const List = () => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [infinite, setInfinite] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    await api
      .get(`pokemon?limit=6&offset=${offset}`)
      .then((res) => {
        setOffset(offset + 6);
        setPokemons([...pokemons, ...res.data.results]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <>
      <section className={styles.list}>
        {pokemons && pokemons.map((item) => <Card name={item.name} />)}
      </section>
      <div
        onClick={() => getPokemons()}
        style={{ background: '#fb1', width: '100%', padding: '20px' }}
      >
        Puxa mais
      </div>
    </>
  );
};

export default List;
