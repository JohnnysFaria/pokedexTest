import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import api from '../../services/api.js';
import styles from './List.module.css';

const List = () => {
  const [offset, setOffset] = useState(-20);
  const [pokemons, setPokemons] = useState([]);

  console.log(offset);

  useEffect(() => {
    const getPokemons = async () => {
      await api
        .get(`pokemon?limit=20&offset=${offset}`)
        .then((res) => {
          setPokemons([...pokemons, ...res.data.results]);
        })
        .catch((err) => console.log(err));
    };
    getPokemons();
  }, [offset]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log('elemento está visivel', offset);
        setOffset((offsetInsideState) => offsetInsideState + 20);
      }
    });
    intersectionObserver.observe(document.querySelector('#sentinela'));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <>
      <section className={styles.list}>
        {pokemons && pokemons.map((item) => <Card name={item.name} />)}
      </section>
      <div
        id="sentinela"
        style={{ background: '#fb1', width: '100%', padding: '20px' }}
      >
        Puxa mais
      </div>
    </>
  );
};

export default List;
