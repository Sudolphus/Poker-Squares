import React from 'react';

const CardSlot = ({ row, column, card }) => {
  const { rank, suit, image } = card;

  return (
    <div 
      className = 'cardSlot' 
      id = { `card${row}x${column}` }>
      <img
        className='cardImage'
        src={image} 
        alt={`${rank} of ${suit}`} 
      />
    </div>
  )
}

export default CardSlot;