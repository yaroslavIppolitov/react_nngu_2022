import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NameComponent from './NameComponent';
import Counter from './Counter';
import Form from './Form';

const App = () => (
  <div>
    <p>React App</p>
    <NameComponent firstname="Petr" lastname="I" />
    <NameComponent firstname="Aleksandr" lastname="II" />
    <NameComponent firstname="Katherine" lastname="II" />
    <Counter title="Orange" />
    <Counter title="Pineapple" />
    <Form title="AUTH" />
    <Form title="ReG" />
  </div>
);

export default App;
