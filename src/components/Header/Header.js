import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../img/pokelogo.svg'
import Input from '../Search/Input';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
      <Link className={styles.logo} to="/" aria-label='Pokedex - Home'>
        <Logo/>
      </Link>
      <Input />
      <Link className={styles.pokemons} to="/pokemons">All Pokémons</Link>
      </nav>
    </header>
  );
};

export default Header;
