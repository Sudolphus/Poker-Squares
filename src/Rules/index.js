import React from 'react';
import ReactTooltip from 'react-tooltip';
import { points } from './points';

const Rules = () =>
  <div id='rulesText'>
    <h3>Poker Squares</h3>
    <p>
      In poker squares, your goal is to make the best poker hands possible on the grid, both horizontally and vertically.
      The deck contains 25 cards from a standard pack of 52, which you'll place one at a time on the grid.
      Be careful! Once a card is added to the grid, it can't be moved!
      Once you've placed five cards in a given row or column, you'll score points accordingly:
    </p>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {points.map(hand =>
          <tr key={hand.rank}>
            <td 
              className='rulesTableHands'
              data-for={hand.rank}
              data-tip={hand.tooltip}
              data-iscapture='true'>
                {hand.rank}
            </td>
            <td className='rulesTablePoints'>{hand.points}</td>
          </tr>
        )}
        </tbody>
    </table>
    {points.map(hand =>
      <ReactTooltip
        key={`tt${hand.rank}`}
        id={hand.rank}
        place='left'
        effect='solid'
      />
    )}
  </div>

export default Rules;