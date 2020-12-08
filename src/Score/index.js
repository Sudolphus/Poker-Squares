import ScoreCard from './scoreCard';
import isStraight from './straight';
import isFlush from './flush';
import pairs from './pairs';

const Score = hand => {
  const ranks = hand.map(card => card.rank).sort();
  const straight = isStraight(ranks);
  const flush = isFlush(hand);
  const fourOfAKind = ranks[0] === ranks[3] || ranks[1] === ranks[4];
  const threeOfAKind = ranks[0] === ranks[2] || ranks[1] === ranks[3] || ranks[2] === ranks[4];
  const numPairs = pairs(ranks);

  let [name, points] = [null, null];
  if (straight && flush && ranks[4] === 'Ace') {
    [name, points] = ['Royal Flush', 100];
  } else if (straight && flush) {
    [name, points] = ['Straight Flush', 75];
  } else if (fourOfAKind) {
    [name, points] = ['Four of a Kind', 50];
  } else if (threeOfAKind && numPairs === 1) {
    [name, points] = ['Full House', 25];
  } else if (flush) {
    [name, points] = ['Flush', 20];
  } else if (straight) {
    [name, points] = ['Straight', 15];
  } else if (threeOfAKind) {
    [name, points] = ['Three of a Kind', 10];
  } else if (numPairs === 2) {
    [name, points] = ['Two Pair', 5];
  } else if (numPairs === 1) {
    [name, points] = ['One Pair', 2];
  } else {
    [name, points] = ['Nothing', 0];
  }

  return { name, points };
}

export default Score;
export { ScoreCard };