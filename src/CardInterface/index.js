import React, { Fragment } from 'react';

const CardInterface = ({ cardsRemaining, upCard }) => {
  return (
    <Fragment>
      <div className='deckView'>
        Cards remaining in deck: {cardsRemaining}
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