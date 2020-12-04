import React, { Fragment, useState } from 'react';
import deckSetup from './../Deck';
import CardInterface from './../CardInterface';

const Game = () => {
  const [deck, setDeck] = useState([]);
  const [dealtCard, setDealtCard] = useState(null);
  const [grid, setGrid] = useState([[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]]);


  const onNewGame = () => {
    setDeck(deckSetup);
  }

  const handleDealTopCard = () => {
    const newDeck = [...deck];
    const newDealtCard = newDeck.pop();
    setDeck(newDeck);
    setDealtCard(newDealtCard);
  }

  const handleAddCardToGrid = (row, column) => {
    const newGrid = grid;
    newGrid[row][column] = dealtCard;
    setGrid(newGrid);
  }

  return (
    <Fragment>
      <button type='button' onClick={onNewGame}>New Game</button>
      <CardInterface
        cardsRemaining={deck.length}
        upCard={dealtCard}
      />
    </Fragment>
  )
}

export default Game;