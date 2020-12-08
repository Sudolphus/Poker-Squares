import React from 'react';

const CardSlot = ({ card, idName }) => {
  const { rank, suit, image } = card;

  return (
    <div 
      className = 'cardSlot' 
      id = {idName}
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