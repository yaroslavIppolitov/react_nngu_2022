import React from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './components/backend/Data/Data';
import Header from './components/frontend/header/header';
import Products from './components/frontend/products/products';

const App = () => {
  const { productItems } = data;
  return (
    <div>
      <Header />
      <Products />
    </div>
  );
};

export default App;
