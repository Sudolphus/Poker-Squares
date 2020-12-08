import React, { Fragment, useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import deckSetup from './../Deck';
import CardInterface from './../CardInterface';
import CardSlot from './../CardSlot';
import Score, { ScoreCard } from './../Score';
import Rules from './../Rules';
import CardBack from './../Images/card_back.png';

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
  }, [dealNext, deck]);

  const handleRowScoreUpdate = rowIndex => {
    const rowToUpdate = grid[rowIndex];
    if (!rowToUpdate.includes(null)) {
      const score = Score(rowToUpdate);
      const newRowScore = [...rowScore];
      newRowScore[rowIndex] = score;
      setRowScore(newRowScore);
    }
  }

  const handleColScoreUpdate = colIndex => {
    const colToUpdate = grid.map(row => row[colIndex]);
    if (!colToUpdate.includes(null)) {
      const score = Score(colToUpdate);
      const newColScore = [...colScore];
      newColScore[colIndex] = score;
      setColScore(newColScore);
    }
  }

  useEffect(() => {
    const rowTotal = rowScore.reduce((acc, val) => val !== null ? acc + val.points : acc, 0);
    const colTotal = colScore.reduce((acc, val) => val !== null ? acc + val.points : acc, 0);
    setTotalScore(rowTotal + colTotal);
  }, [colScore, rowScore]);

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

  const handleAddCardToGrid = (row, column) => {
    const newGrid = [...grid];
    newGrid[row][column] = dealtCard;
    setGrid(newGrid);
    handleRowScoreUpdate(row);
    handleColScoreUpdate(column);
    setDealNext(true);
  }

  const cardInterfaceContent = deck.length === 0
    ? <button type='button' onClick={onNewGame}>New Game</button>
    : <Fragment>
        <img 
          className='cardImage' 
          src={CardBack} 
          alt='Deck'
          data-for='main'
          data-tip={`${deck.length} cards remain`}
          data-iscapture='true'
        />
        <ReactTooltip 
          id='main'
          place='bottom'
          effect='solid'
        />
      </Fragment>

  return (
    <div className='gameGrid'>
      {grid.map((row, indRow) => 
        row.map((column, indCol) => column !== null
          ? <CardSlot
              key = { `Card${indRow}x${indCol}` }
              idName = {`cardSlot${indRow}${indCol}`}
              card = { column }
            />
          : <div
              key = { `Empty${indRow}x${indCol}` }
              className = 'cardSlot emptySlot'
              id = {`cardSlot${indRow}${indCol}`}
              onClick={()=>handleAddCardToGrid(indRow, indCol)}
              >Empty</div>
        )
      )}
      <CardInterface
        content = {cardInterfaceContent}
        cardsRemaining = {deck.length}
        upCard = {dealtCard}
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
      <ScoreCard 
        score = {{name: 'Total Score', points: totalScore}}
        scoreClass = {`totalScore`} />
      <Rules />
    </div>
  )
}

export default Game;