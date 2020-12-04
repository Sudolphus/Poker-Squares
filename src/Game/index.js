import React, { Fragment, useState } from 'react';
import deckSetup from './../Deck';
import CardInterface from './../CardInterface';
import CardSlot from './../CardSlot';

const Game = () => {
  const [deck, setDeck] = useState([]);
  const [dealtCard, setDealtCard] = useState(null);
  const [grid, setGrid] = useState([[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]]);

  const handleDealTopCard = () => {
    const newDealtCard = deck.pop();
    setDealtCard(newDealtCard);
  }

  const handleShuffleNewDeck = () => {
    const newDeck = deckSetup();
    setDeck(newDeck);
  }
              

  const onNewGame = () => {
    handleShuffleNewDeck();
    setDealtCard(null);
    setGrid([[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]]);
  }


  const handleAddCardToGrid = (row, column) => {
    const newGrid = grid;
    newGrid[row][column] = dealtCard;
    setGrid(newGrid);
    if (deck.length > 0) {
      handleDealTopCard();
    }
  }

  return (
    <Fragment>
      <button type='button' onClick={onNewGame}>New Game</button>
      <button type='button' onClick={handleShuffleNewDeck}>Shuffle Deck</button>
      <button type='button' onClick={handleDealTopCard}>Deal Top Card</button>
      <div className='gameGrid'>
        {grid.map((row, indRow) => 
          <div className='cardRow'>
            {row.map((column, indCol) => column !== null
              ? <CardSlot
                  key = { `${indRow}x${indCol}` }
                  row = { indRow }
                  column = { indCol }
                  card = { column }
                  onAddCardToSlot = { handleAddCardToGrid }
                />
              : <div
                  key = { `${indRow}x${indCol}` }
                  className = 'emptySlot'
                  id = { `card${indRow}x${indCol}` }>Empty</div>
            )}
          </div>)}
      </div>
      <CardInterface
        cardsRemaining={deck.length}
        upCard={dealtCard}
      />
    </Fragment>
  )
}

export default Game;