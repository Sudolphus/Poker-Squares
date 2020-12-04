import React, { Fragment } from 'react';

const CardInterface = ({ cardsRemaining, upCard }) => {
  return (
    <Fragment>
      <div className='DeckView'>Cards remaining in deck: {cardsRemaining}</div>
      {upCard === null
        ? <div className='emptyUpcard'>No Cards In Deck!</div>
        : <div className='UpCard'>{upCard.rank} of {upCard.suit}</div>}
    </Fragment>
  )
}

export default CardInterface;