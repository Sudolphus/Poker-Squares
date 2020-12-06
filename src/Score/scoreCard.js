import React from 'react';

const ScoreCard = ({ score }) => {
  const { name, points } = score;
  return (
    <div className = 'scoreCard'>
      <p>{ name }</p>
      <p>{ points }</p> 
    </div>
  )
}

export default ScoreCard;