// src/components/Card.js
import React from 'react';

function Card({ id, title, description, image, addToCart }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
        <button 
          onClick={() => addToCart(id)} 
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Card;