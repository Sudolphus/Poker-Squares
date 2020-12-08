import React from 'react';

const ScoreCard = ({ score, scoreClass }) => {
  const name = score ? score.name : null;
  const points = score ? score.points : null;
  
  return (
    <div className = {`scoreCard ${scoreClass}`}>
      <div>
        <p>{ name }</p>
        <p>{ points }</p> 
      </div>
    </div>
  )
}

export default ScoreCard;