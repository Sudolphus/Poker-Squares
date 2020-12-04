import React, { Fragment, useState } from 'react';
import deckSetup from './../Deck';
import CardInterface from './../CardInterface';
import CardSlot from './../CardSlot';

const Game = () => {
  const [deck, setDeck] = useState([]);
  const [dealtCard, setDealtCard] = useState(null);
  const [grid, setGrid] = useState([[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]]);

  const onNewGame = () => {
    setDeck(deckSetup());
    setGrid([[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]])
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
      <div className='gameGrid'>
        {grid.map((row, indRow) => 
          <div className='cardRow'>
            {row.map((column, indCol) => column === null
              ? <CardSlot
                  row = { indRow }
                  column = { indCol }
                  card = { column }
                  onAddCardToSlot = { handleAddCardToGrid }
                />
              : <div className='emptySlot'></div>
            )}
          </div>)}
        <CardInterface
          cardsRemaining={deck.length}
          upCard={dealtCard}
        />
      </div>
    </Fragment>
  )
}

export default Game;