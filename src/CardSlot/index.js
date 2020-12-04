import React from 'react';

const CardSlot = ({ column, row, card, onAddCardToSlot }) => {
  const { rank, suit } = card;

  return (
    <div className='cardSlot' onClick={() => onAddCardToSlot(column, row)}>
      <p>Rank: { rank }</p>
      <p>Suit: { suit } </p>
    </div>
  )
}

export default CardSlot;