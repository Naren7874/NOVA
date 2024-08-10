// src/components/CardList.js
import React, { useState, useEffect } from 'react';
import Card from './Card';

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Replace with your JSON data URL or path
    fetch('../public/data.json')
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <Card 
          key={card.id} 
          title={card.title} 
          description={card.description} 
          image={card.image} 
        />
      ))}
    </div>
  );
}

export default CardList;