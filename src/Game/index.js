import React, { Fragment, useState, useEffect } from 'react';
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
  const [dealNext, setDealNext] = useState(false);

  useEffect(() => {
    if (dealNext && deck.length > 0) {
      setDealNext(false);
      const newDealtCard = deck.pop();
      setDealtCard(newDealtCard);
    } else if (dealNext && deck.length === 0) {
      setDealtCard(null);
    }
  }, [dealNext, deck])

  const handleShuffleNewDeck = () => {
    const newDeck = deckSetup().splice(0, 25);
    setDeck(newDeck);
  }

  const onNewGame = () => {
    setDealNext(false);
    handleShuffleNewDeck();
    setDealtCard(null);
    setGrid([[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]]);
    setRowScore([null, null, null, null, null]);
    setColScore([null, null, null, null, null]);
    setTotalScore(0);
    setDealNext(true);
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
    setDealNext(true);
  }

  return (
    <Fragment>
      <div className='gameGrid'>
        <div className='buttonContainer'>
          <button type='button' onClick={onNewGame}>New Game</button>
        </div>
        {grid.map((row, indRow) => 
          row.map((column, indCol) => column !== null
            ? <CardSlot
                key = { `Card${indRow}x${indCol}` }
                card = { column }
              />
            : <div
                key = { `Empty${indRow}x${indCol}` }
                className = 'cardSlot emptySlot'
                onClick={()=>handleAddCardToGrid(indRow, indCol)}
                >Empty</div>
          )
        )}
        <CardInterface
          cardsRemaining={deck.length}
          upCard={dealtCard}
        />
        {rowScore.map((scoreObj, ind) =>
          <ScoreCard
            key = {`rowScore${ind}`}
            score = {scoreObj}
            scoreClass = {`scoreRow${ind}`}
          />
          )}
        {colScore.map((scoreObj, ind) =>
          <ScoreCard
            key = {`colScore${ind}`}
            score = {scoreObj}
            scoreClass = {`scoreCol${ind}`}
          />
          )}
        <ScoreCard score = {{name: 'Total Score', points: totalScore}} />
      </div>
    </Fragment>
  )
}

export default Game;