import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Form from './components/Form';
import CardList from './components/CardList';

function App() {
  const [cards, setCards] = useState([]);
  // pass this function as a prop to the Form component:
  const addNewCard = (card) => {
    setCards([...cards, card]);
  };

  return (
    <div>
      <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Search a GitHub User
      </h1>

      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
}

export default App;
