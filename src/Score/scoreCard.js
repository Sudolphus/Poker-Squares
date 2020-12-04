import React from 'react';

const ScoreCard = ({ row, column, score }) => {
  const { name, points } = score;
  return (
    <div
      key = {`score${row}${column}`}
      className = 'scoreCard'
      id = {`score${row}${column}`}
    >
      <p>{ name }</p>
      <p>{ points }</p> 
    </div>
  )
}

export default ScoreCard;