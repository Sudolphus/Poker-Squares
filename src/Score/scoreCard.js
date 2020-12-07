import React from 'react';

const ScoreCard = ({ score }) => {
  const name = score ? score.name : null;
  const points = score ? score.points : null;
  
  return (
    <div className = 'scoreCard'>
      <p>{ name }</p>
      <p>{ points }</p> 
    </div>
  )
}

export default ScoreCard;