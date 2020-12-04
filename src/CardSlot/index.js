import React from 'react';

const CardSlot = ({ row, column, card }) => {
  const { rank, suit } = card;

  return (
    <div 
      className = 'cardSlot' 
      id = { `card${row}x${column}` }>
      <p>Rank: { rank }</p>
      <p>Suit: { suit } </p>
    </div>
  )
}

export default CardSlot;