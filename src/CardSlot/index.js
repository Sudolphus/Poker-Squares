import React from 'react';

const CardSlot = ({ card }) => {
  const { rank, suit, image } = card;

  return (
    <div 
      className = 'cardSlot' 
    >
      <img
        className='cardImage'
        src={image} 
        alt={`${rank} of ${suit}`} 
      />
    </div>
  )
}

export default CardSlot;