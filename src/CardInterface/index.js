import React, { Fragment } from 'react';


const CardInterface = ({ content, upCard }) => {
  return (
    <Fragment>
      <div className='deckView'>
        { content }
      </div>
      {upCard === null
        ? <div className='upCard'>
            <p>None!</p>
          </div>
        : <div className='upCard'>
            <img
              className='cardImage'
              src={upCard.image}
              alt={`${upCard.rank} of ${upCard.suit}`}
            />
          </div>}
    </Fragment>
  )
}

export default CardInterface;