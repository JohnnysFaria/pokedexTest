import React from 'react';
import './App.css'
import List from './components/List/List';
import Details from './components/Details/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="pokemons" element={<List />} />
        <Route path="pokemons/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
