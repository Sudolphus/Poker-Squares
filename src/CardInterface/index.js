import React, { Fragment } from 'react';

const CardInterface = ({ content, cardsRemaining, upCard }) => {
  return (
    <Fragment>
      <div className='deckView'>
        { content }
      </div>
      {cardsRemaining > 0 && <div className='cardsRemaining'>{cardsRemaining} in Deck</div>}
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