import React from 'react';

const ScoreCard = ({ score, scoreClass }) => {
  const name = score ? score.name : null;
  const points = score ? score.points : null;
  
  return (
    <div className = {`scoreCard ${scoreClass}`}>
      <p>{ name }</p>
      <p>{ points }</p> 
    </div>
  )
}

export default ScoreCard;