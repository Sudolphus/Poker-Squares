import React from 'react';

const ScoreCard = ({ score }) => {
  const name = score ? score.name : 'Incomplete';
  const points = score ? score.points : 0;
  
  return (
    <div className = 'scoreCard'>
      <p>{ name }</p>
      <p>{ points }</p> 
    </div>
  )
}

export default ScoreCard;