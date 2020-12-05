import React from 'react';

const CardSlot = ({ row, column, card }) => {
  const { rank, suit } = card;
  const imageName = `${rank}${suit}`.toLowerCase();

  return (
    <div 
      className = 'cardSlot' 
      id = { `card${row}x${column}` }>
      <img src={require(`./../Images/${imageName}.png`)} alt={`${rank} of ${suit}`}/>
    </div>
  )
}

export default CardSlot;