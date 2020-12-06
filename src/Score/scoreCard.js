import React from 'react';

const ScoreCard = ({ score, idName}) => {
  const { name, points } = score;
  return (
    <div
      className = 'scoreCard'
      id = {idName}
    >
      <p>{ name }</p>
      <p>{ points }</p> 
    </div>
  )
}

export default ScoreCard;