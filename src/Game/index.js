import React, { Fragment, useState } from 'react';
import deckSetup from './../Deck';

const Game = () => {
  const [deck, setDeck] = useState([]);
  const [dealtCard, setDealtCard] = useState(null);

  const onNewGame = () => {
    setDeck(deckSetup);
  }

  const handleDealTopCard = () => {
    const newDeck = [...deck];
    const newDealtCard = newDeck.pop();
    setDeck(newDeck);
    setDealtCard(newDealtCard);
  }

  return (
    <Fragment>
      <button type='button' onClick={onNewGame}>New Game</button>
    </Fragment>
  )
}

export default Game;