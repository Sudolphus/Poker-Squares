import React, { Fragment, useState } from 'react';
import deckSetup from './../Deck';
import CardInterface from './../CardInterface';
import CardSlot from './../CardSlot';
import Score, { ScoreCard } from './../Score';

const Game = () => {
  const [deck, setDeck] = useState([]);
  const [dealtCard, setDealtCard] = useState(null);
  const [grid, setGrid] = useState([[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]]);
  const [totalScore, setTotalScore] = useState(0);
  const [rowScore, setRowScore] = useState([null, null, null, null, null]);
  const [colScore, setColScore] = useState([null, null, null, null, null]);

  const handleDealTopCard = () => {
    const newDealtCard = deck.pop();
    setDealtCard(newDealtCard);
  }

  const handleShuffleNewDeck = () => {
    const newDeck = deckSetup().splice(0, 25);
    setDeck(newDeck);
  }

  const onNewGame = () => {
    handleShuffleNewDeck();
    setDealtCard(null);
    setGrid([[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]]);
    setRowScore([null, null, null, null, null]);
    setColScore([null, null, null, null, null]);
    setTotalScore(0);
  }

  const handleRowScore = row => {
    const checkRow = grid[row];
    if (!checkRow.includes(null)) {
      const rowTotal = Score(checkRow);
      const newRowScore = [...rowScore];
      newRowScore[row] = rowTotal;
      const newTotal = totalScore + rowTotal.points;
      setRowScore(newRowScore);
      setTotalScore(newTotal);
    }
  }

  const handleColumnScore = column => {
    const checkColumn = grid.map(arr => arr[column]);
    if (!checkColumn.includes(null)) {
      const columnTotal = Score(checkColumn);
      const newColumnScore = [...colScore];
      newColumnScore[column] = columnTotal;
      const newTotal = totalScore + columnTotal.points;
      setColScore(newColumnScore);
      setTotalScore(newTotal);
    }
  }

  const handleAddCardToGrid = (row, column) => {
    grid[row][column] = dealtCard;
    handleRowScore(row);
    handleColumnScore(column);
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
          <div 
            key = {`row${indRow}`}
            className='cardRow'
          >
            {row.map((column, indCol) => column !== null
              ? <CardSlot
                  key = { `Card${indRow}x${indCol}` }
                  row = { indRow }
                  column = { indCol }
                  card = { column }
                />
              : <div
                  key = { `Empty${indRow}x${indCol}` }
                  className = 'emptySlot'
                  id = { `card${indRow}x${indCol}` }
                  onClick={()=>handleAddCardToGrid(indRow, indCol)}
                  >Empty</div>
            )}
          </div>)}
      <CardInterface
        cardsRemaining={deck.length}
        upCard={dealtCard}
        />
      {rowScore.map((scoreObj, ind) =>
        <ScoreCard
          key = {`rowScore${ind}`}
          score = {scoreObj}
          idName = {`rowScore${ind}`}
        />
        )}
      {colScore.map((scoreObj, ind) =>
        <ScoreCard
          key = {`colScore${ind}`}
          score = {scoreObj}
          idName = {`colScore${ind}`}
        />
        )}
      </div>
    </Fragment>
  )
}

export default Game;